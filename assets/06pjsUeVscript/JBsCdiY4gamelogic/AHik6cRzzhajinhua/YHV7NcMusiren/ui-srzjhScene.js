

require("SRZJHGameData");

let STATUS_READY = 0		//准备
let STATUS_SENDCARD = 1 //发牌
let STATUS_OPERATION = 2	//操作，加注跟注比牌等待操作
let STATUS_GAMEFINISH = 4 //游戏结束
cc.Class({
    extends: require("ui-roomscene"),

    properties: {
        O_controlbtnprefab : cc.Prefab,
        O_gameresultprefab : cc.Prefab,

        O_userInfoPrefab:cc.Prefab,

        O_settingPrefab : cc.Prefab,
        O_compareCardPrefab : cc.Prefab,
        O_readybtnnode : cc.Node,

        //////////////////////////////////////
        _backgroundScipt : null,
        _ctlbuttonScript : null,
        _gameresultScript : null,
        _dispcardScript : null,

    },

    // use this for initialization
    onLoad:function(){
        this._super(); //调用父类的onLoad
        this.setChatRoomState(true);
        //背景音乐
        g_SRZJHGameData.playBackgroundMusic();

        let gameId = g_RoomManager.getCurGameID();
        let roomId = g_RoomManager.getCurRoomID();
        let selfUserId = g_UserManager.getSelfUserID();
        let roominfo = g_RoomManager.getGameRoomInfo(gameId, roomId);
        
        let selfSeatNo = roominfo.findUserSeatNo(selfUserId);
        g_SRZJHGameData.init(gameId, roomId, selfSeatNo);
        cc.log("=======wurensangong==mainscene=11====", gameId, roomId, selfUserId);

        //////////////////////////////////////////////////////////
        this._cplayerArray = [];
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let toSeatNo = selfSeatNo;
        for(let i=0; i<maxPlayer; i++){
            let playerNo = i + 1;
            console.log("=====111111=======", toSeatNo, selfSeatNo, playerNo);
            let playerNode = this.node.getChildByName("player"+playerNo);
            playerNode.setLocalZOrder(100);
            let cplayerhandler = playerNode.getComponent("ui-srzjhPlayer");
            cplayerhandler.initUI(toSeatNo, playerNode);            
            g_SRZJHGameData.setPlayerUI(cplayerhandler, i, toSeatNo);

            toSeatNo = g_SRZJHGameData.getNextSeatNo(toSeatNo);
        };
        this._backgroundScipt = this.getComponent("ui-srzjhBackground");
        this._backgroundScipt.showBaseTip();

        this._dispcardScript = this.getComponent("ui-srzjhDispcard");
        cc.log("=========wurensangong==mainscene====22====", this._dispcardScript);
        /////////////////////////////////////////////////////////////////
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, null, this.onProtSocketMessage, this);
        
        /////////////////////////////////////////////////////////////////
        //场景加载完毕，开始请求场景协议
        let toProtData = {};
        toProtData.gameId = g_SRZJHGameData.getGameID();
        toProtData.roomId = g_SRZJHGameData.getRoomID();
        cc.log("=========requestGameStatus===", toProtData);
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqGameStatus, toProtData);
    },
    onDestroy() {
        cc.log("=============onDestroy==============");
    },
    resetAllUI(){
        if(this._ctlbuttonScript){
            this.getControlBtn().hideAllButton();
        }
        if(this._gameresultScript){
            this.getGameResult().showResult(false);
        }
        g_SRZJHGameData.resetInit();
        this.showReadyButton(false);
        this._backgroundScipt.showBaseTip();
        this._backgroundScipt.showLeftClock(false);
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        for(let i=0; i<maxPlayer; i++){
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            playerui.resetUI();
            
            let userinfo = roominfo.getUserInfo(i);
            cc.log("======resetAllUI====111=======", i, userinfo);
            if(userinfo){
                playerui.showUserInfo(true, userinfo.userName, userinfo.gold, userinfo.headurl);
            }else{
                playerui.showUserInfo(false);
            }
        }
    },
    onRequestGameReady(delaytime){
        cc.log("==========onRequestGameReady========", delaytime);
        let self = this;
        let readyfunc = function(){
            //在这里进入房间后要发协议，自己默认进入房间就准备
            g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SReady);
        };
        this.showReadyButton(false);
        if(typeof(delaytime)!='number' || !delaytime ||  delaytime<=0 ){
            readyfunc();
        }else{
            this.scheduleOnce(readyfunc, delaytime);
        }
    },
    onSettingBtnEvent(event){
        g_SoundManager.playButtonEffect();
        var settingPlane = cc.instantiate(this.O_settingPrefab);
        this.node.addChild(settingPlane, 1000);
    },
    onShowUserInfoPanel(node, detail) {
        g_SoundManager.playButtonEffect();
        cc.log("========onShowUserInfoPanel=========", node, detail);
        let seatNo = g_SRZJHGameData.getSelfSeatNo();
        if(detail==2){
            seatNo = g_SRZJHGameData.getNextSeatNo(seatNo);
        }
        let roominfo = g_SRZJHGameData.getRoomInfo();
        if(roominfo.getUserInfo(seatNo)){
            var userInfoNode = cc.instantiate(this.O_userInfoPrefab);
            userInfoNode.parent = this.node;
            userInfoNode.setLocalZOrder(200);
            userInfoNode.getComponent("ui-srzjhUserInfo").showInfo(seatNo);
        }
    },
    showReadyButton(bVisible){
        cc.log("===========showReadyButton============", bVisible);
        this.O_readybtnnode.active = bVisible;
    },
    //////////////////////////////////////////////////////////////////////////////
    getControlBtn(){
        if(!this._ctlbuttonScript){
            let ctrbtn = cc.instantiate(this.O_controlbtnprefab);
            ctrbtn.parent = this.node;
            ctrbtn.setLocalZOrder(150);
            this._ctlbuttonScript = ctrbtn.getComponent("ui-srzjhCtlButton");
            ctrbtn.off("ctlbtn-quanbufanpai");
            ctrbtn.on("ctlbtn-quanbufanpai", (event)=>{
                this.onShowCard_QuanBuFanPai();
            }, this);
        }
        return this._ctlbuttonScript;
    },
    onShowCard_QuanBuFanPai(){
        cc.log("==========onShowCard_QuanBuFanPai==============");
        let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
        let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(selfSeatNo);
        playerui.getHandCard().recoverAllCard();
    },
    getGameResult(){
        if(!this._gameresultScript){
            let resultnode = cc.instantiate(this.O_gameresultprefab);
            resultnode.parent = this.node;
            resultnode.setLocalZOrder(200);
            this._gameresultScript = resultnode.getComponent("ui-srzjhGameResult");
        }
        return this._gameresultScript;
    },
    ////////////////////////////////////////////////////////////////////////////////
    onRecvErrcode(errcode, attachtab){
        cc.log("=======onRecvErrcode============", errcode, attachtab);
        let errvar = g_ProtDef.GetErrVarByCode(errcode);
        if(errvar=="M_LOBBY_ROOM_NOTEXIST"){
            g_GameScene.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode(errcode), function(flag){
                cc.log("===========not=exit=room=lobby============");
                g_GameScene.runWithLobbyScene();
            });
        }else{
            this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode(errcode));
        }
    },
    //其他玩家进入房间会调用这里, 进入房间协议比场景协议要先到来
    onRecvEnterRoom(gameId, roomId, userId){
        //let selfUserId = g_UserManager.getSelfUserID();
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let seatNo = roominfo.findUserSeatNo(userId);
        let userinfo = roominfo.getUserInfo(seatNo);
        let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(seatNo);
        cc.log("==============onRecvEnterRoom==========", roomId, userId, typeof(userId), roominfo);
        playerui.showUserInfo(true, userinfo.userName, userinfo.gold, userinfo.headurl);
    },
    onRecvJieSanDesk(gameId, roomId, userId, userName, isAuto){
        cc.log("======onRecvJieSanDesk==========", gameId, roomId, userId, userName, isAuto);
        if(!isAuto){
            this.showPopupWindow(true, false, "Notice", "The owner has disbanded the room.", (flag)=>{
                this.runWithLobbyScene();
            }, this);
        }else{
            this.showPopupWindow(true, false, "Notice", "The number of rooms has been done.", (flag)=>{
                this.runWithLobbyScene();
            }, this);            
        }
    },
    onRecvLeaveDesk(gameId, roomId, userId){
        cc.log("======onRecvLeaveDesk==========", gameId, roomId, userId);
        if(userId==g_UserManager.getSelfUserID()){
            // this.showPopupWindow(true, false, "Notice", "You have already left the room.", (flag)=>{
            //     this.runWithLobbyScene();
            // }, this);
            this.runWithLobbyScene();
        }
    },
    onRecvUpdateJuShu(gameId, roomId, curJuShu){
        cc.log("=====onRecvUpdateJuShu========",gameId, roomId, curJuShu);
        let roominfo = g_SRZJHGameData.getRoomInfo();
        if(roomId==roominfo.getRoomID() && gameId==roominfo.getGameID()){
            this._backgroundScipt.showBaseTip();
        }
    },
    ////////////////////////////////////////////////////////////////////////////////
    startDispCard(beginSeatNo){
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let eachNumArray = [];
        let eachPosArray = [];
        for(let i=0; i<maxPlayer; i++){
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            let numcard = g_SRZJHGameData.getHandCardCount(i);
            if(numcard>0){
                eachNumArray.push(numcard);
                eachPosArray.push(playerui.getHandCardPos());
            }else{
                eachNumArray.push(null);
                eachPosArray.push(null);
            }
        }
        /** 

        let self = this;
        this._dispcardScript.sendAllCard(beginSeatNo, eachNumArray, eachPosArray, (seatNo, num, isEnd)=>{
            cc.log("========_dispcardScript.sendAllCard======", seatNo, num, isEnd);
            if(!isEnd){
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(seatNo);
                playerui.getHandCard().drawHandCard(num, false);
            }else{
                let maxPlayer = g_SRZJHGameData.getMaxPlayer();
                let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
                let bankerSeatNo = g_SRZJHGameData.getBankerSeatNo();
                console.log("========_dispcardScript.sendAllCard=End=====", selfSeatNo, bankerSeatNo);
                if(selfSeatNo==bankerSeatNo){
                    self.getControlBtn().showControlBtn();
                }
                for(let i=0; i<maxPlayer; i++){
                    if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
                    let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                    playerui.showTimeWaitTip(false);
                    playerui.getHandCard().drawHandCard(); 
                    if(i==bankerSeatNo) {
                        if(i!=selfSeatNo){
                            playerui.showTimeWaitTip(true);
                        }
                    }
                }
            }
        });
        */

       

       for(let i=0; i<maxPlayer; i++){
            let maxPlayer = g_SRZJHGameData.getMaxPlayer();
            let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
            let bankerSeatNo = g_SRZJHGameData.getBankerSeatNo();

            if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            playerui.showTimeWaitTip(false);
            playerui.showBankerTip(i==bankerSeatNo);
            playerui.getHandCard().drawHandCard();
            if(selfSeatNo==bankerSeatNo){
                if(i==selfSeatNo){
                    this.getControlBtn().showControlBtn();
                }else{
                    playerui.showTimeWaitTip(true);
                }
            }
        }
    },
    ////////////////////////////////////////////////////////////////////////////////
    onRecvGameStatus(protTab){
        cc.log("==========onRecvGameStatus====11=========", protTab);
        this.resetAllUI();
        
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let selfUserId = g_UserManager.getSelfUserID();
        let selfSeatNo = roominfo.findUserSeatNo(selfUserId);
        for(let i=0; i<protTab.usertab.length; i++){
            let toUserId = protTab.usertab[i];
            let toSeatNo = roominfo.findUserSeatNo(toUserId);
            cc.log("======g_SRZJHGameData.setIsGamePlay====", toSeatNo, toUserId);
            g_SRZJHGameData.setIsGamePlay(toSeatNo, 1);
        }
        cc.log("==========onRecvGameStatus====22=========", protTab.status);
        
        for(let i=0; i<maxPlayer; i++){
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            playerui.showWaitStartTip(false);
            if(protTab.status != STATUS_READY){
                if(roominfo.getUserInfo(i)){
                    if(!g_SRZJHGameData.getIsGamePlay(i)){
                        playerui.showWaitStartTip(true);
                    }
                }
            }
        }
        if(protTab.status == STATUS_READY){
            for(let i=0; i<maxPlayer; i++){
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                let isReady = protTab.readyTab[i]==1;
                playerui.showReadyTip(isReady);
                if(i==selfSeatNo){
                    this.showReadyButton(!isReady);
                }
            }
            if(protTab.ltime){
                this._backgroundScipt.showLeftClock(true, protTab.ltime);
            }
        }else if(protTab.status == STATUS_SENDCARD){
            let bankerSeatNo = roominfo.findUserSeatNo(protTab.bankerUserId);
            g_SRZJHGameData.setBankerSeatNo(bankerSeatNo);
            let turnSeatNo = roominfo.findUserSeatNo(protTab.turnUserId);
            for(let i=0; i<maxPlayer; i++){
                if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
                g_SRZJHGameData.setHandCardTab(i, protTab.handCardTab[i], false);
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                playerui.showTimeWaitTip(false);
                playerui.showBankerTip(i==bankerSeatNo);
                playerui.showXiaZhuScore(true, roominfo.getBaseScore());
                if(i==turnSeatNo){
                    if(i==selfSeatNo){
                        this.getControlBtn().showControlBtn();
                    }else{
                        playerui.showTimeWaitTip(true);
                    }
                }
            }
            this.startDispCard(bankerSeatNo);
        }else if(protTab.status == STATUS_OPERATION){
            let bankerSeatNo = roominfo.findUserSeatNo(protTab.bankerUserId);
            g_SRZJHGameData.setBankerSeatNo(bankerSeatNo);
            let turnSeatNo = roominfo.findUserSeatNo(protTab.turnUserId);
            for(let i=0; i<maxPlayer; i++){
                if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
                g_SRZJHGameData.setHandCardTab(i, protTab.handCardTab[i], false);
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                playerui.showTimeWaitTip(false);
                playerui.showBankerTip(i==bankerSeatNo);
                playerui.showXiaZhuScore(true, protTab.xiazhutab[i]);
                playerui.getHandCard().drawHandCard();
                if(i==turnSeatNo){
                    if(i==selfSeatNo){
                        this.getControlBtn().showControlBtn();
                    }else{
                        playerui.showTimeWaitTip(true);
                    }
                }
            }
        }else if(protTab.status == STATUS_GAMEFINISH){
            //this.onRequestGameReady(3);
            this.onShowGameResult(protTab.finishdata);
        }
    },
    onProtSocketMessage(mainId, assistId, protTab){
        console.log("==========onProtSocketMessage=============", mainId, assistId, protTab);
        // prottab.AZhaJinHuaSiRen_S2CReady  = 200     //准备
        // prottab.AZhaJinHuaSiRen_S2CGameBegin = 201  //游戏开始
        // prottab.AZhaJinHuaSiRen_S2CXiaZhu = 202  //抢庄
        // prottab.AZhaJinHuaSiRen_S2CSendCard  = 203  //发牌
        // prottab.AZhaJinHuaSiRen_S2CShowCard  = 204   //摊牌
        // prottab.AZhaJinHuaSiRen_S2CTuoGuan = 205   //托管
        // prottab.AZhaJinHuaSiRen_S2CGameFinish = 208    //游戏结束
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let selfUserId = g_UserManager.getSelfUserID();
        let selfSeatNo = roominfo.findUserSeatNo(selfUserId);
        for(let i=0; i<maxPlayer; i++){
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            playerui.showWaitStartTip(false);
            playerui.showTimeWaitTip(false);
            if(assistId!=g_ProtDef.AZhaJinHuaSiRen_S2CReady){
                playerui.showTotalScore(false);
                this.showReadyButton(false);
                if(roominfo.getUserInfo(i)){
                    if(!g_SRZJHGameData.getIsGamePlay(i)){
                        playerui.showWaitStartTip(true);
                    }
                }
            }
        }
        this._backgroundScipt.showBaseTip();
        if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CReady){
            if(protTab.userId==selfUserId){
                this.resetAllUI();
            }
            for(let i=0; i<maxPlayer; i++){
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                let isReady = protTab.readyTab[i]==1;
                playerui.showReadyTip(isReady);
                if(isReady){
                    playerui.showTotalScore(false);
                }else{
                    if(i==selfSeatNo){
                        this.showReadyButton(!isReady);
                        this.getGameResult().showResult(false);
                    }
                }
            }
            if(protTab.ltime){
                for(let i=0; i<maxPlayer; i++){
                    let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                    playerui.showTotalScore(false);
                }
                this._backgroundScipt.showLeftClock(true, protTab.ltime);
                this.getGameResult().showResult(false);
            }
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CGameBegin){
            this._backgroundScipt.showLeftClock(false);
            let bankerSeatNo = roominfo.findUserSeatNo(protTab.bankerUserId);
            g_SRZJHGameData.setBankerSeatNo(bankerSeatNo);
            this.getControlBtn().hideAllButton();
            for(let i=0; i<protTab.usertab.length; i++){
                let toUserId = protTab.usertab[i];
                let toSeatNo = roominfo.findUserSeatNo(toUserId);
                g_SRZJHGameData.setIsGamePlay(toSeatNo, 1);
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
                playerui.showReadyTip(false);
                playerui.showTimeWaitTip(false);
                playerui.showWaitStartTip(false);
                playerui.showBankerTip(false);
                if(bankerSeatNo==i && i==selfSeatNo){
                    playerui.showBankerTip(true);
                }
            }
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CSendCard){
            let bankerSeatNo = roominfo.findUserSeatNo(protTab.bankerUserId);
            g_SRZJHGameData.setBankerSeatNo(bankerSeatNo);
            this.getControlBtn().hideAllButton();
            this._backgroundScipt.showLeftClock(false);
            for(let i=0; i<maxPlayer; i++){
                if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
                g_SRZJHGameData.setHandCardTab(i, protTab.handCardTab[i], false);
                let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
                playerui.showTimeWaitTip(false);
                playerui.speekNothing();
                playerui.showReadyTip(false);
                playerui.showXiaZhuScore(true, roominfo.getBaseScore());
            }
            this.startDispCard(selfSeatNo);
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CXiaZhu){
            if(protTab.turnUserId!=selfUserId){
                this.getControlBtn().hideAllButton();
            }
            let toSeatNo = roominfo.findUserSeatNo(protTab.userId);
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
            playerui.showXiaZhuScore(true, protTab.beishu);
            playerui.showTimeWaitTip(false);
            playerui.speekNothing();
            if(protTab.itype==1){ //跟注

            }else{ //加注

            }
            if(protTab.turnUserId==selfUserId){
                if(protTab.newTurn==1){ //新的一局
                    this.getControlBtn().showControlBtn(true);
                }else{ //依旧是旧的一局
                    this.getControlBtn().showControlBtn();
                }
            }
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2COpenCard){
            let toSeatNo = roominfo.findUserSeatNo(protTab.userId);
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
            playerui.showLookCardTip(true, false, false);
            if(toSeatNo==selfSeatNo){
                protTab.cardtab[1];
                g_SRZJHGameData.setHandCardTab(selfSeatNo, protTab.cardtab, false);
                playerui.getHandCard().recoverAllCard();
            }
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CCompareCard){
            this.getControlBtn().hideAllButton();
            let cpNode = cc.instantiate(this.O_compareCardPrefab);
            cpNode.parent = this.node;
            cpNode.setLocalZOrder(1000);
            let self = this;
            let cpendfunc = function(){
                cc.log("=======cpendfunc=============", protTab.winUserId, protTab.userId)
                if(protTab.winUserId==protTab.userId){
                    let toSeatNo = roominfo.findUserSeatNo(protTab.toUserId);
                    let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
                    playerui.showLookCardTip(false, false, true);
                }else{
                    let toSeatNo = roominfo.findUserSeatNo(protTab.userId);
                    let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
                    playerui.showLookCardTip(false, false, true);
                }
                
                if(protTab.turnUserId==selfUserId){
                    self.getControlBtn().showControlBtn();
                }
            };
            let cpscript = cpNode.getComponent("ui-srzjhCompareCard");
            cpscript.startCompare(protTab.userId, protTab.toUserId, protTab.winUserId, cpendfunc);
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CGiveUpCard){
            let toSeatNo = roominfo.findUserSeatNo(protTab.userId);
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
            playerui.showLookCardTip(false, true, false);
            this.getControlBtn().hideAllButton();
            if(protTab.turnUserId==selfUserId){
                this.getControlBtn().showControlBtn();
            }
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CTuoGuan){
            let toSeatNo = roominfo.findUserSeatNo(protTab.userId);
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(toSeatNo);
            playerui.showTuoGuan(protTab.isTuoGuan==1);
        }else if(assistId==g_ProtDef.AZhaJinHuaSiRen_S2CGameFinish){
            this.onShowGameResult(protTab);
        }
    },
    ////////////////////////////////////////////////////////////////////
    onShowGameResult(protTab){
        this.resetAllUI();
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let bankerSeatNo = roominfo.findUserSeatNo(protTab.bankerUserId);
        let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
        for(let i=0; i<maxPlayer; i++){
            if(!protTab.handCardTab[i]) {
                if(i==selfSeatNo){
                    this.showReadyButton(true);
                }
                continue;
            }
            let handcardtype = protTab.handTypeTab[i];
            g_SRZJHGameData.setHandCardTab(i, protTab.handCardTab[i], true);
            g_SRZJHGameData.setHandCardType(i, handcardtype);
            let playerui = g_SRZJHGameData.getPlayerUIBySeatNo(i);
            playerui.getHandCard().recoverAllCard();
            playerui.showBankerTip(bankerSeatNo==i);
            playerui.showXiaZhuScore(true, protTab.xiazhutab[i]);
            if(handcardtype!=null){
                playerui.showCardTypeTip(true, handcardtype);
                playerui.getHandCard().drawHandCard(null, true);
            }else{
                playerui.showCardTypeTip(false);
                playerui.getHandCard().drawHandCard();
            }
            roominfo.updateUserGold(i, protTab.winScoreTab[i]);
            playerui.showTotalScore(true, protTab.winScoreTab[i]);
        }
        if(protTab.handCardTab[selfSeatNo]){
            let isSelfWin = protTab.winScoreTab[selfSeatNo]>0;
            g_SRZJHGameData.playGameResult(isSelfWin);
            this.getGameResult().showResult(true, isSelfWin);
        }
    },
});
