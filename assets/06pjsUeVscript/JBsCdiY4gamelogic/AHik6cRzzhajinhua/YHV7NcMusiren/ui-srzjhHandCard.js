
var GameRuleConfig =  require("ZhaJinHuaRuleConfig");
cc.Class({
    extends : cc.Component,
    properties: {
        O_handcardprefab : cc.Prefab,
        O_handCardSp : cc.Node,
        O_handCardNode : cc.Node,
        ///////////////////////////////////////////
        _seatNo : 0,
        _handCardSize : null,
        _allCardArray : [],

        _tishiEatCardTab : [],
        _touchPreMoveUpNum : 0,
    },
    // 尽量在onLoad来初始化界面，在initUI初始化和数据无关的变量
    onLoad(){
        cc.log("========handcard=========onLoad======================", this.O_handCardSp);
        this._handCardSize = new cc.Size(this.O_handCardSp.width, this.O_handCardSp.height);
        this.O_handCardSp.active = false;
        /*
        let self = this;
        self.O_handCardNode.on(cc.Node.EventType.TOUCH_START, function(event){
            //console.log("TOUCH_START");
            let touchPos = event.getLocation();
            
        });
        self.O_handCardNode.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            //console.log("TOUCH_MOVE");
            let touchPos = event.getLocation();
            
        });
        self.O_handCardNode.on(cc.Node.EventType.TOUCH_END, function(event){
            //console.log("TOUCH_END");
            let touchPos = event.getLocation();
            self.priCheckCardTouchEnd(touchPos, false);
        });
        */
    },
    //属于该句柄的seatNo，cardpos为手牌中心位置，cardWidth一张手牌的宽度
    initUI(seatNo){
        this._seatNo = seatNo;
    },
    resetUI(){
        this.clearHandCard();
    },
    clearHandCard(){
        this.O_handCardNode.removeAllChildren(true);
        this._allCardArray = [];
        this.O_handCardNode.active = false;
    }, 
    drawHandCard(numCard, isAllShow){
        this.clearHandCard();
        isAllShow = true;
        let handCardTab = g_SRZJHGameData.getHandCardTab(this._seatNo);
        cc.log("========drawHandCard==11=======", handCardTab, numCard, isAllShow);
        if(!handCardTab || handCardTab.length<=0) return ;
        if(!numCard || numCard>handCardTab.length) numCard = handCardTab.length;
        let beginPosX = 0;
        let beginPosY = 0;
        let toInterZOrder = 1;
        let toInterval = this._handCardSize.width + 10;
        let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
        if(selfSeatNo!=this._seatNo){
            toInterval = this._handCardSize.width/3.5;
        }
        let isNextTwoSeatNo = false;
        let isLastTwoSeatNo = false;
        if(true){
            let toTSeatNo = g_SRZJHGameData.getNextSeatNo(selfSeatNo);
            if(toTSeatNo==this._seatNo)isNextTwoSeatNo = true;
            toTSeatNo = g_SRZJHGameData.getNextSeatNo(toTSeatNo);
            if(toTSeatNo==this._seatNo)isNextTwoSeatNo = true;
        }
        if(!isNextTwoSeatNo) {
            let toTSeatNo = g_SRZJHGameData.getLastSeatNo(selfSeatNo);
            if(toTSeatNo==this._seatNo)isLastTwoSeatNo = true;
            toTSeatNo = g_SRZJHGameData.getLastSeatNo(toTSeatNo);
            if(toTSeatNo==this._seatNo)isLastTwoSeatNo = true;
        }
        
        if(isLastTwoSeatNo){
            beginPosX = 0;
        }else if(isNextTwoSeatNo){
            beginPosX = 0;
            toInterval *= -1;
            toInterZOrder *= -1;
        }else{
            beginPosX -= (numCard-1) * toInterval / 2;
        }
        let rangpaiNum = 0;//g_SRZJHGameData.getQiangRangNum();
        if(this._seatNo==g_SRZJHGameData.getBankerSeatNo()){
            rangpaiNum = -1;
        }
        console.log("========drawHandCard==22=======", handCardTab, numCard, rangpaiNum);
        for(let i=0; i<numCard; i++){
            let topNode = cc.instantiate(this.O_handcardprefab);
            let toCardScript = topNode.getComponent("ui-srzjhPokerCard"); //不能用var

            if(isAllShow){  
                toCardScript.setCardValue(handCardTab[i]);
            }else{
                let israngpai = false;
                if(i<rangpaiNum){
                    israngpai = true;
                }
                toCardScript.setCardValue(0, israngpai);                
            }
            if(selfSeatNo!=this._seatNo){
                toCardScript.setCardScale(0.75);
            }
            topNode.position = new cc.Vec2(beginPosX, beginPosY);
            console.log("======drawHandCard============", beginPosX, beginPosY);
            topNode.setLocalZOrder(i*toInterZOrder);
            beginPosX += toInterval;
            this._allCardArray.push(topNode);
            
            topNode.parent = this.O_handCardNode;
        }
        //按照zorder来从大到小排列，用于触摸
        //this._allCardArray.reverse();
        if(numCard>0){
            this.O_handCardNode.active = true;            
        }
        console.log("===drawHandCard====end==", this.O_handCardNode);
    }, 
    recoverAllCard(){
        this.priCheckCardTouchEnd(cc.Vec2.ZERO, true);
    },

    //////////////////////////////////////////////////////////////////////////////////////////////
    priCheckCardTouchEnd(touchPos, isAllShow){
        let cardtab = g_SRZJHGameData.getHandCardTab(this._seatNo);
        cc.log("-----recoverAllCard----priCheckCardTouchEnd----", isAllShow,cardtab);
        for(let i=0; i<this._allCardArray.length; i++){
            let cardScript = this._allCardArray[i].getComponent("ui-srzjhPokerCard");
            if(!cardScript) return ;
            if(isAllShow || cardScript.onChceckTouchEnd(touchPos)) {
                cardScript.recoverCard(cardtab[i]);
                if(!isAllShow)break;
            }
        }
    }
});
