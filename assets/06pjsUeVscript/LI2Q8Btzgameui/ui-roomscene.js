
//用户进入房间
function lonProtEnterRoom(mainId, assistId, protTab){  //进入房间
    cc.log("==============lonProtEnterRoom==================", protTab, g_GameScene.onRecvEnterRoom);
{
	let _E0F$VI881=11770;
	let _E0Ff$y$5= [1037,1337,11770];
	let _E0FtIgE99=false;
	let _E0FAKM196= function(a, b){ return a + b -_E0F$VI881; };
	if(11770>100){ let tem2p=(_E0FAKM196(_E0F$VI881,_E0FtIgE99));} else{
	let te2emp=("================", _E0FAKM196,_E0Ff$y$5); }
}
    let gameId = protTab.info.gameId;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+13045;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(13045);
	let temp=('=====>>>>', sid, "E0FXaA");
	}
}
    let roomId = protTab.info.roomId;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1796;
	g_ItemManager.updateItem(1796,159872);
	}
}
    let roominfo = g_RoomManager.newRoomInfo(gameId, roomId);
{
	let _E0FFNc8383=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FFNc8383);}
	let _E0FmaSE63="E0FpbQQa";
	let _E0FNatX0238="E0FyDXQ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmaSE63);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNatX0238);}
	}
}
    roominfo.setPackageInfo(protTab.info);
{
	let _E0Fa141=17;
	let _E0FVzLXz01= [1178,1807,17];
	let _E0FJjZ52=true;
	let _E0FA8542= function(a, b){ return a + b /_E0Fa141; };
	if(17>100){ let tem2p=(_E0FA8542(_E0Fa141,_E0FJjZ52));} else{
	let te2emp=("================", _E0FA8542,_E0FVzLXz01); }
}
    if(g_GameScene.onRecvEnterRoom){
{
	let _E0FxXZLI46=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FxXZLI46);}
	let _E0Fly0190="E0Fabxa";
	let _E0FB69="E0Fj";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fly0190);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FB69);}
	}
}
        g_GameScene.onRecvEnterRoom(gameId, roomId, protTab.userId);
    }
}
function lonProtGameStatus(mainId, assistId, protTab){ //场景协议
    if(g_GameScene.onRecvGameStatus) {
{
	let _E0FclC9958=13;
	let _E0FZhjhu8=16294; let _E0F_i37352= 0;
	for(let ip=0; ip<1; ip++){
	_E0F_i37352+= ip + _E0FclC9958/_E0FZhjhu8;
	}
	let temp3=("===3=43df==", _E0FclC9958,_E0FZhjhu8,_E0F_i37352);
}
        g_GameScene.onRecvGameStatus(protTab);
    }
}
function lonProtJieSanDesk(mainId, assistId, protTab){ //解散
    cc.log("======lonProtJieSanDesk==========", mainId, assistId, protTab);
{
	let _E0FYPPdX2=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FYPPdX2);}
	let _E0Fw8="E0FEV";
	let _E0FCoaf3358="E0FCNaHw";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fw8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCoaf3358);}
	}
}
    if(g_GameScene.onRecvJieSanDesk) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19);
	let temp=('=====>>>>', sid, "E0FqUYo");
	}
}
        g_GameScene.onRecvJieSanDesk(protTab.gameId, protTab.roomId, protTab.userId, protTab.userName, protTab.isauto);
    }
}
function lonProtLeaveDesk(mainId, assistId, protTab){ //离开房间
    cc.log("======lonProtLeaveDesk==========", mainId, assistId, protTab);
{
	let _E0FHCFIh4=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHCFIh4);}
	let _E0FAxBUA08902="E0FifmC";
	let _E0FHf91="E0Fv";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAxBUA08902);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FHf91);}
	}
}
    if(g_GameScene.onRecvLeaveDesk) g_GameScene.onRecvLeaveDesk(protTab.gameId, protTab.roomId, protTab.userId);
}
function lonProtCheckSignIn(mainId, assistId, protTab) { //短线检测登陆
    cc.log("========lonProtCheckSignIn=========")
    g_NetManager.clearSendPack(true);
}
//提示有信息操作
function lonProtUpdateJuShu(mainId, assistId, protTab){
{
	let _E0FP9690=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FP9690);}
	let _E0FMEB3="E0FyWqjD";
	let _E0Fh60="E0FvmMVS";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMEB3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fh60);}
	}
}
    cc.log("========lonProtUpdateJuShu=========", protTab)
    let roominfo = g_RoomManager.getGameRoomInfo(protTab.gameId, protTab.roomId);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+121125;
	g_ItemManager.updateItem(121125,108989);
	}
}
    //let toJuShu = roominfo.getCurJuShu();
    if(roominfo) roominfo.setCurJuShu(protTab.curJuShu);
{
	let _E0F_zcU69=182656;
	let _E0FkgRx87=18193; let _E0Fm95= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fm95+= ip + _E0F_zcU69*_E0FkgRx87;
	}
	let temp3=("===3=43df==", _E0F_zcU69,_E0FkgRx87,_E0Fm95);
}
    if(g_GameScene.onRecvUpdateJuShu){
        g_GameScene.onRecvUpdateJuShu(protTab.gameId, protTab.roomId, protTab.curJuShu);
    }
}

cc.Class({
    extends: require("ui-basescene"),

    properties: {
        _F0FaC80 : null,
        _F0FV7 : false,

        _F0Fvp99537 : [],
        O_chatPrefab: cc.Prefab,
        O_chatsiliaoPrefab : cc.Prefab,

        //////////////////////////////////////////////////////Tips
        O_chatTipsNode : cc.Node,
        O_friendsTipsNode : cc.Node,
        O_mailsTipsNode : cc.Node,
        O_zhanjiTipsNode : cc.Node,
        _F0Flc320 : null,
        _F0FL14864 : null,
        _F0FmDfRU46 : null,
        _F0Fgu8445 : null,
    },

    // use this for initialization
    onLoad: function () {
{
	let _E0Fb89=1045;
	let _E0FspmYo641=130478; let _E0FU14296= 0;
	for(let ip=0; ip<3; ip++){
	_E0FU14296+= ip + _E0Fb89-_E0FspmYo641;
	}
	let temp3=("===3=43df==", _E0Fb89,_E0FspmYo641,_E0FU14296);
}
        this._super(); //调用父类的onLoad
        console.log("=========roomscene=onLoad=============");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1265;
	g_ItemManager.updateItem(1265,12607);
	}
}
        let self = this;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,144);
	}
}
        g_NetManager.onopen = function(){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+189;
	g_ItemManager.updateItem(189,17);
	}
}
            console.log("======roomscene===g_NetManager.onopen=============");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+16;
	g_ItemManager.updateItem(16,10151);
	}
}
            self.showLoadFlower(false);
{
	let _E0Ff12035=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Ff12035);}
	let _E0FEe073="E0FtE";
	let _E0FWgbD68027="E0FByI";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEe073);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FWgbD68027);}
	}
}
            //test
            // 检测登陆信息, 短线重连
            let logintab = g_ConfigManager.getLoginAccount()
            let accName = logintab[0];
            let accPwd = logintab[1];
{
	if(window.g_ConfigManager){
	let _E0FvBmGL8="E0FCf";
	g_ConfigManager.setKey(_E0FvBmGL8,"E0FCf");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FCf";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            if(!accName || !accPwd){
                self.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode("M_LOGIN_REDO_LOGIN"), function(flag){
{
	let _E0FdvZOY07371=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FdvZOY07371);}
	let _E0FV_bCu0175="E0Fkz";
	let _E0FGv3="E0FtDDs";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FV_bCu0175);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FGv3);}
	}
}
                    self.runWithStartScene();
                });
            }else{
                let protTab = {};
                protTab.accName = accName;
                protTab.accPwd = accPwd;
                protTab.platform = 0;
                g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_C2SCheckSignIN, protTab);
            }
        };
{
	let _E0Fm08=16;
	let _E0Fif058= [1012,1849,16];
	let _E0Fg74950=false;
	let _E0FkILT_793= function(a, b){ return a + b +_E0Fm08; };
	if(16>100){ let tem2p=(_E0FkILT_793(_E0Fm08,_E0Fg74950));} else{
	let te2emp=("================", _E0FkILT_793,_E0Fif058); }
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_S2CCheckSignIN, lonProtCheckSignIn);
{
	let _E0Fq$kV92317=1573;
	let _E0Fe1=10496; let _E0FINDe61734= 0;
	for(let ip=0; ip<2; ip++){
	_E0FINDe61734+= ip + _E0Fq$kV92317/_E0Fe1;
	}
	let temp3=("===3=43df==", _E0Fq$kV92317,_E0Fe1,_E0FINDe61734);
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CReqEnterDesk, lonProtEnterRoom);
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CGameStatus, lonProtGameStatus);
{
	let _E0Fg0=154;
	let _E0FdUwWw593=1455; let _E0Fc24= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fc24+= ip + _E0Fg0+_E0FdUwWw593;
	}
	let temp3=("===3=43df==", _E0Fg0,_E0FdUwWw593,_E0Fc24);
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CReqJieSanDesk, lonProtJieSanDesk);
{
	if(window.g_ConfigManager){
	let _E0FV06="E0FBAsOA";
	g_ConfigManager.setKey(_E0FV06,"E0FBAsOA");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FBAsOA";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CReqLeaveDesk, lonProtLeaveDesk);
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CUpdateJuShu, lonProtUpdateJuShu);
{
	if(window.g_ConfigManager){
	let _E0FZmhM30="E0FfjQ";
	g_ConfigManager.setKey(_E0FZmhM30,"E0FfjQ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FfjQ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        

        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Broadcast, g_ProtDef.ABroadcast_S2CSendChatMsg, (mid, pid, protTab)=>{
            if(this._F0FaC80){
                this._F0FaC80.addChatMsg(protTab);
                this._F0Fvp99537 = [];
            }else{
                this._F0Fvp99537.push(protTab);
            }
        }, this);
{
	let _E0FD394=1563;
	let _E0FXmYlO964=10103; let _E0FhSNA6501= 0;
	for(let ip=0; ip<4; ip++){
	_E0FhSNA6501+= ip + _E0FD394*_E0FXmYlO964;
	}
	let temp3=("===3=43df==", _E0FD394,_E0FXmYlO964,_E0FhSNA6501);
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Broadcast,g_ProtDef.ABroadcast_S2CNoticePoint,this.onProtNoticePoint,this);
    },
    
    //////////////////////////////////////////////////////////////////
    onRecvUpdateJuShu(gameId, roomId, curJuShu){
{
	let _E0FK1=15;
	let _E0FT31945= [153,155947,15];
	let _E0Fhr8=false;
	let _E0FFzDR79= function(a, b){ return a + b +_E0FK1; };
	if(15>100){ let tem2p=(_E0FFzDR79(_E0FK1,_E0Fhr8));} else{
	let te2emp=("================", _E0FFzDR79,_E0FT31945); }
}
        cc.log("=====onRecvUpdateJuShu========",gameId, roomId, curJuShu);
        
    },
    //提示有信息操作
    onProtNoticePoint(mainId, assistId, protTab){
        cc.log("=====onProtNoticePoint========protTab======",protTab);
{
	let _E0FhTNYo92714=15;
	let _E0FUA089= [10649,117899,15];
	let _E0FBtp7=false;
	let _E0Fwsr6= function(a, b){ return a + b +_E0FhTNYo92714; };
	if(15>100){ let tem2p=(_E0Fwsr6(_E0FhTNYo92714,_E0FBtp7));} else{
	let te2emp=("================", _E0Fwsr6,_E0FUA089); }
}
        var tipsNode = this.node.getChildByName('nodeTips');
{
	let _E0FrS_7=14;
	let _E0FubDu47= [1728,12,14];
	let _E0FTGL889=true;
	let _E0FjKIaq3= function(a, b){ return a + b /_E0FrS_7; };
	if(14>100){ let tem2p=(_E0FjKIaq3(_E0FrS_7,_E0FTGL889));} else{
	let te2emp=("================", _E0FjKIaq3,_E0FubDu47); }
}
        tipsNode.setLocalZOrder(9);
        this._F0Flc320 = protTab[g_ProtDef.MID_Protocol_Broadcast];
{
	let _E0FKsxPe2959=1528;
	let _E0FlOFqH95164= [163253,19,1528];
	let _E0FAQ60086=true;
	let _E0FvotT92098= function(a, b){ return a + b *_E0FKsxPe2959; };
	if(1528>100){ let tem2p=(_E0FvotT92098(_E0FKsxPe2959,_E0FAQ60086));} else{
	let te2emp=("================", _E0FvotT92098,_E0FlOFqH95164); }
}
        this._F0FL14864 = protTab[g_ProtDef.MID_Protocol_Friend];
{
	let _E0F_PIMH3098=138;
	let _E0FJWf7770= [1287,167,138];
	let _E0FZQ10=true;
	let _E0Fims84= function(a, b){ return a + b +_E0F_PIMH3098; };
	if(138>100){ let tem2p=(_E0Fims84(_E0F_PIMH3098,_E0FZQ10));} else{
	let te2emp=("================", _E0Fims84,_E0FJWf7770); }
}
        this._F0FmDfRU46 = protTab[g_ProtDef.MID_Protocol_MailBox];
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19142;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19142);
	let temp=('=====>>>>', sid, "E0FD_iuq");
	}
}
        this._F0Fgu8445 = protTab[g_ProtDef.MID_Protocol_ZhanJi];
{
	let _E0FObf457=15;
	let _E0FaIOYi29=12347; let _E0Fp9482= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fp9482+= ip + _E0FObf457-_E0FaIOYi29;
	}
	let temp3=("===3=43df==", _E0FObf457,_E0FaIOYi29,_E0Fp9482);
}
        
        if(this._F0Flc320){
{
	let _E0Fs200=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fs200);}
	let _E0Fot40959="E0F$rB";
	let _E0FPh2327="E0FwS";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fot40959);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FPh2327);}
	}
}
            this.O_chatTipsNode.active = true;
        }else{
            this.O_chatTipsNode.active = false;
        }
        
        if(this._F0FL14864) {
{
	let _E0FwdFQ6=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwdFQ6);}
	let _E0Fa4221="E0FatO";
	let _E0Fr035="E0FmeZ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fa4221);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fr035);}
	}
}
            this.O_friendsTipsNode.active = true;
        }else{
            this.O_friendsTipsNode.active = false;
        }
            
        if(this._F0FmDfRU46) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this.O_mailsTipsNode.active = true;
        }
        else{
            this.O_mailsTipsNode.active = false;
        }
            
        if(this._F0Fgu8445) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this.O_zhanjiTipsNode.active = true;
        }
        else{
            this.O_zhanjiTipsNode.active = false;
        }
            
    },
    
    onChatPanelBtnEvent() {
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0Fw189="E0FiBOW";
	g_ConfigManager.setKey(_E0Fw189,"E0FiBOW");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FiBOW";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.O_chatTipsNode.active = false;
        //聊天协议
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Broadcast, g_ProtDef.ABroadcast_C2SReqChatMsg);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+194927;
	g_ItemManager.updateItem(194927,16);
	}
}

        let isfirstinit = false;
{
	if(window.g_ConfigManager){
	let _E0FXl5298="E0FG";
	g_ConfigManager.setKey(_E0FXl5298,"E0FG");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FG";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(!this._F0FaC80){
{
	let _E0F_squM1859=123;
	let _E0FNIxq70163=18; let _E0FLsH_58142= 0;
	for(let ip=0; ip<3; ip++){
	_E0FLsH_58142+= ip + _E0F_squM1859*_E0FNIxq70163;
	}
	let temp3=("===3=43df==", _E0F_squM1859,_E0FNIxq70163,_E0FLsH_58142);
}
            var talkNode = cc.instantiate(this.O_chatPrefab);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            
            talkNode.parent = this.node;
{
	let _E0FOXfsf95365=1694;
	let _E0Fh4=11; let _E0FkSO8540= 0;
	for(let ip=0; ip<4; ip++){
	_E0FkSO8540+= ip + _E0FOXfsf95365*_E0Fh4;
	}
	let temp3=("===3=43df==", _E0FOXfsf95365,_E0Fh4,_E0FkSO8540);
}
            if(this._F0FV7){
                talkNode.setLocalZOrder(150);
            }
            else{
                talkNode.setLocalZOrder(10);
            }
{
	let _E0FT6829=1204;
	let _E0F$643= [10,15229,1204];
	let _E0FhpMxa23730=true;
	let _E0FHn_99= function(a, b){ return a + b /_E0FT6829; };
	if(1204>100){ let tem2p=(_E0FHn_99(_E0FT6829,_E0FhpMxa23730));} else{
	let te2emp=("================", _E0FHn_99,_E0F$643); }
}
            
            this._F0FaC80 = talkNode.getComponent('ui-gamechat');
            isfirstinit = true;
        }
        this.setChatRoomState(this._F0FV7);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0FaC80.showSiliaoTips(this._F0Flc320);
        if(this._F0FV7){
{
	let _E0FcSZ36=142858;
	let _E0FjEe$Y266= [15164,139260,142858];
	let _E0FyfWUs095=true;
	let _E0FkjLQ87355= function(a, b){ return a + b +_E0FcSZ36; };
	if(142858>100){ let tem2p=(_E0FkjLQ87355(_E0FcSZ36,_E0FyfWUs095));} else{
	let te2emp=("================", _E0FkjLQ87355,_E0FjEe$Y266); }
}
            this._F0FaC80.hideSiliaoTips(false);
        }
{
	let _E0FdqG92=18;
	let _E0Fg1000=19; let _E0FO63= 0;
	for(let ip=0; ip<4; ip++){
	_E0FO63+= ip + _E0FdqG92+_E0Fg1000;
	}
	let temp3=("===3=43df==", _E0FdqG92,_E0Fg1000,_E0FO63);
}
        this._F0FaC80.openChatView();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,125342);
	}
}

        if(isfirstinit){
{
	if(window.g_ConfigManager){
	let _E0FD06501="E0FJuX";
	g_ConfigManager.setKey(_E0FD06501,"E0FJuX");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FJuX";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            for(let i=0; i<this._F0Fvp99537.length; i++){
{
	let _E0FW_58=15;
	let _E0FPv8=16; let _E0FEBQr11= 0;
	for(let ip=0; ip<2; ip++){
	_E0FEBQr11+= ip + _E0FW_58*_E0FPv8;
	}
	let temp3=("===3=43df==", _E0FW_58,_E0FPv8,_E0FEBQr11);
}
                this._F0FaC80.addChatMsg(this._F0Fvp99537[i]);
            }
        }
    },
    setChatRoomState(isRoom){
{
	let _E0FaP7=1889;
	let _E0FW2390=1823; let _E0FrAS18008= 0;
	for(let ip=0; ip<3; ip++){
	_E0FrAS18008+= ip + _E0FaP7*_E0FW2390;
	}
	let temp3=("===3=43df==", _E0FaP7,_E0FW2390,_E0FrAS18008);
}
        this._F0FV7  = isRoom;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,191);
	}
}
        if(this._F0FaC80)this._F0FaC80.setRoomChatState(isRoom);
    },
    showPrivateChatWindow(userId){
{
	let _E0FGPn7197=14;
	let _E0FF7859=15203; let _E0FgpPi3707= 0;
	for(let ip=0; ip<2; ip++){
	_E0FgpPi3707+= ip + _E0FGPn7197-_E0FF7859;
	}
	let temp3=("===3=43df==", _E0FGPn7197,_E0FF7859,_E0FgpPi3707);
}
        var siliaoNode = cc.instantiate(this.O_chatsiliaoPrefab);
{
	let _E0FcDsu0=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FcDsu0);}
	let _E0F_91="E0FD$Fkb";
	let _E0FGWWV765="E0FpkCPZ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F_91);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FGWWV765);}
	}
}
        siliaoNode.parent = this.node;
{
	let _E0FdEiP1834=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FdEiP1834);}
	let _E0FA7="E0FWF";
	let _E0Fl$rkz27="E0FAq";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FA7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fl$rkz27);}
	}
}
        siliaoNode.setLocalZOrder(1100);
{
	let _E0FSis7051=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSis7051);}
	let _E0FhgRJf86="E0FEH";
	let _E0FnG79="E0FZ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhgRJf86);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnG79);}
	}
}
        var siliaoScript = siliaoNode.getComponent('ui-gamechatsiliao');
{
	let _E0Fwn93206=16;
	let _E0FBaWHx4= [14139,18667,16];
	let _E0FjKaMl896=false;
	let _E0FEU3= function(a, b){ return a + b *_E0Fwn93206; };
	if(16>100){ let tem2p=(_E0FEU3(_E0Fwn93206,_E0FjKaMl896));} else{
	let te2emp=("================", _E0FEU3,_E0FBaWHx4); }
}
        siliaoScript.init(userId);
    }
});
