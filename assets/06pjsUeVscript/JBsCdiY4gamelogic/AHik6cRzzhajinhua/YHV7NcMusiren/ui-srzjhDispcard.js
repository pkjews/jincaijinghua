cc.Class({
    extends: cc.Component,

    properties: {
        O_dispcardprefab : cc.Prefab,
        O_dispcardNode : cc.Node,

        _dispcardSize : null,
        _dispcardArray : null,

        _dispEachNumArray : [],
        _dispEachPosArray : [],
        _dispUpFunc : null,
        _dispCurSeatNo : 0,
        _dispCurNumArray : [],
    },

    // use this for initialization
    onLoad: function () {
        let dispcardsp = this.O_dispcardNode.getComponent(cc.Sprite);
        dispcardsp.enabled = false;
        this._dispcardSize = new cc.Size(this.O_dispcardNode.width, this.O_dispcardNode.height);
        this._dispcardArray = [];
    },
    clearTurnCard(){
        this.O_dispcardNode.removeAllChildren();
        this._dispcardArray = [];
    },

    drawTurnCard(numCard, pIndex){
        this.clearTurnCard();
        cc.log("========drawTurnCard=========", numCard, pIndex, this._dispcardSize);
        let beginPosX = 0;
        let beginPosY = 0;
        let toInterval = 10;//this._dispcardSize.width/2.5;
        for(let i=0; i<numCard; i++){
            let topNode = cc.instantiate(this.O_dispcardprefab);
            topNode.parent = this.O_dispcardNode;

            topNode.position = new cc.Vec2(beginPosX, beginPosY);
            topNode.setLocalZOrder(i);
            beginPosX += toInterval;
            this._dispcardArray.push(topNode);

            let toCardScript = topNode.getComponent("ui-srzjhPokerCard"); //不能用var
            toCardScript.setCardWidth(this._dispcardSize.width);
            toCardScript.setCardHeight(this._dispcardSize.height);
            toCardScript.setCardValue(0);

            toCardScript.showPointTip(false);
            if(pIndex==i){
                toCardScript.showPointTip(true);
            }
        }
    },
    sendAllCard(beginSeatNo, eachNumArray, eachPosArray, sendupfunc){
        cc.log("=====sendAllCard======", beginSeatNo, eachNumArray, eachPosArray, sendupfunc);
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        for(let i=0; i<maxPlayer; i++){
            if(!eachNumArray[i]) eachNumArray[i] = 0;
            this._dispEachNumArray[i] = eachNumArray[i];
            if(eachPosArray[i]){
                this._dispEachPosArray[i] = this.O_dispcardNode.convertToNodeSpaceAR(eachPosArray[i]);
            }
        }
        this._dispUpFunc = sendupfunc;
        this._dispCurSeatNo = beginSeatNo;
        this._dispCurNumArray = [];
        let self = this;
        cc.director.getScheduler().unschedule(this._updateSend, this);
        cc.director.getScheduler().schedule(this._updateSend, this, 0.05, false);
    },
    _updateSend(dt){
        // if(this._dispcardArray.length<=0) {
        //     return this._dispAndCallFunc(null, null, true);
        // }
        cc.log("========_updateSend======")
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let numReachMax = 0;
        let toAllPlayNum = 0;
        for(let i=0; i<maxPlayer; i++){
            if(this._dispEachPosArray[i]){
                if(!this._dispCurNumArray[i]) this._dispCurNumArray[i] = 0;
                if(this._dispCurNumArray[i]>=this._dispEachNumArray[i]){
                    numReachMax++;
                }
                toAllPlayNum +=  1;
            }
        }
        if(numReachMax==toAllPlayNum) {
            return this._dispAndCallFunc(null, null, true);
        }
        let seatNo = this._dispCurSeatNo;
        if(this._dispEachPosArray[seatNo]){
            if(this._dispCurNumArray[seatNo]>=this._dispEachNumArray[seatNo]){
                return ;
            }
            this._dispCurNumArray[seatNo]++;
            
            let cardsp = this._dispcardArray.pop();
            if(cardsp){
                cardsp.runAction(cc.sequence(cc.moveTo(0.2, this._dispEachPosArray[seatNo]), cc.removeSelf()));
            }
            if(this._dispCurSeatNo==0) g_SRZJHGameData.playSendCard();
            this._dispAndCallFunc(seatNo, this._dispCurNumArray[seatNo], false);
        }

        this._dispCurSeatNo++;
        this._dispCurSeatNo = this._dispCurSeatNo % maxPlayer;
    },

    _dispAndCallFunc(seatNo, num, isEnd){
        cc.log("======_dispAndCallFunc==========", seatNo, num, isEnd);
        if(this._dispUpFunc)this._dispUpFunc(seatNo, num, isEnd);
        if(isEnd){
            this._dispUpFunc = null;
            cc.director.getScheduler().unschedule(this._updateSend, this);
        }
    },
});
