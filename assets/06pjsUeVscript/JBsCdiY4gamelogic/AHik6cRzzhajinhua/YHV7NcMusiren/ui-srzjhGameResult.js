let nativeExtend = require("native-extend");
cc.Class({
    extends: cc.Component,

    properties: {
        O_winnode : cc.Node,
        O_lossnode : cc.Node,

        O_winAniNode : cc.Node,
        O_lossAniNode : cc.Node,
        O_jiesuannode : cc.Node,

    },

    // use this for initialization
    onLoad: function () {
{
	let _E0FAKrQ57177=11457;
	let _E0FE783= [16,1750,11457];
	let _E0FMA76=true;
	let _E0FjQKF082= function(a, b){ return a + b -_E0FAKrQ57177; };
	if(11457>100){ let tem2p=(_E0FjQKF082(_E0FAKrQ57177,_E0FMA76));} else{
	let te2emp=("================", _E0FjQKF082,_E0FE783); }
}
        this.showResult(false);
    },
    showResult : function(isVisible, isGameWin){
{
	let _E0FUjBHH22=112;
	let _E0FUdIzE167=180642; let _E0FJz1100= 0;
	for(let ip=0; ip<1; ip++){
	_E0FJz1100+= ip + _E0FUjBHH22/_E0FUdIzE167;
	}
	let temp3=("===3=43df==", _E0FUjBHH22,_E0FUdIzE167,_E0FJz1100);
}
        this.node.active = isVisible;
        if(!isVisible){
{
	let _E0FvthyC63=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FvthyC63);}
	let _E0FjbWmu05193="E0FFz$";
	let _E0FhreO79685="E0FdvK";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FjbWmu05193);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhreO79685);}
	}
}
            return ;
        }
{
	let _E0FiuMz4528=10;
	let _E0Fq41349= [16,124541,10];
	let _E0FpglAq4283=true;
	let _E0FpFbsh03= function(a, b){ return a + b +_E0FiuMz4528; };
	if(10>100){ let tem2p=(_E0FpFbsh03(_E0FiuMz4528,_E0FpglAq4283));} else{
	let te2emp=("================", _E0FpFbsh03,_E0Fq41349); }
}
        let selfUserId = g_UserManager.getSelfUserID();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_winnode.active = isGameWin;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,120);
	}
}
        this.O_lossnode.active = !isGameWin;
{
	let _E0FepF7404=126;
	let _E0FqB45= [162,1085,126];
	let _E0FiED52=false;
	let _E0FRe229= function(a, b){ return a + b +_E0FepF7404; };
	if(126>100){ let tem2p=(_E0FRe229(_E0FepF7404,_E0FiED52));} else{
	let te2emp=("================", _E0FRe229,_E0FqB45); }
}

        this.O_lossAniNode.active = false;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1969;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1969);
	let temp=('=====>>>>', sid, "E0FuQqx");
	}
}
        this.O_winAniNode.active = false;
{
	let _E0FwAzq0=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwAzq0);}
	let _E0FMc53477="E0FM";
	let _E0Fmo29="E0Fum";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMc53477);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fmo29);}
	}
}
        if(!isGameWin){
            this.O_lossAniNode.active = true;
{
	if(window.g_ConfigManager){
	let _E0FEuTdz6129="E0Fgrv";
	g_ConfigManager.setKey(_E0FEuTdz6129,"E0Fgrv");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fgrv";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            this.O_lossAniNode.getComponent(cc.Animation).play();
        }else{
            this.O_winAniNode.active = true;
            this.O_winAniNode.getComponent(cc.Animation).play();
        }
        this.O_jiesuannode.active = true;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1922;
	g_ItemManager.updateItem(1922,100);
	}
}
        this.O_jiesuannode.opacity = 0
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_jiesuannode.runAction(cc.sequence(cc.delayTime(1.0), cc.fadeIn(0.5)));
    },

    onExitGameBtnEvent : function(event){
{
	let _E0FV9=13;
	let _E0FRrlz2898=173; let _E0Fvp79= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fvp79+= ip + _E0FV9/_E0FRrlz2898;
	}
	let temp3=("===3=43df==", _E0FV9,_E0FRrlz2898,_E0Fvp79);
}
        this.showResult(false);
        let toProtTab = {};
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+134;
	g_ItemManager.updateItem(134,112274);
	}
}
        toProtTab.gameId = g_RoomManager.getCurGameID();
{
	let _E0FU5929=19518;
	let _E0FJT57579=1024; let _E0FR$467= 0;
	for(let ip=0; ip<3; ip++){
	_E0FR$467+= ip + _E0FU5929/_E0FJT57579;
	}
	let temp3=("===3=43df==", _E0FU5929,_E0FJT57579,_E0FR$467);
}
        toProtTab.roomId = g_RoomManager.getCurRoomID();
{
	let _E0FrF0204=1540;
	let _E0FM7=114606; let _E0FCBx9747= 0;
	for(let ip=0; ip<2; ip++){
	_E0FCBx9747+= ip + _E0FrF0204*_E0FM7;
	}
	let temp3=("===3=43df==", _E0FrF0204,_E0FM7,_E0FCBx9747);
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqLeaveDesk, toProtTab);
    },
    onShareBtnEvent : function(event){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1763);
	}
}
        nativeExtend.screenShoot((path, w, h)=>{
            nativeExtend.shareImageNative("image", path, "");
        });
    },
    onContinueBtnEvent : function(event){
{
	let _E0FH_130=193993;
	let _E0FX$49230=129; let _E0FjJF7= 0;
	for(let ip=0; ip<1; ip++){
	_E0FjJF7+= ip + _E0FH_130-_E0FX$49230;
	}
	let temp3=("===3=43df==", _E0FH_130,_E0FX$49230,_E0FjJF7);
}
        this.showResult(false);
{
	let _E0FtWO720=1198;
	let _E0FgOtZl95904= [1063,112415,1198];
	let _E0FZsXuE01458=true;
	let _E0FaGYT824= function(a, b){ return a + b -_E0FtWO720; };
	if(1198>100){ let tem2p=(_E0FaGYT824(_E0FtWO720,_E0FZsXuE01458));} else{
	let te2emp=("================", _E0FaGYT824,_E0FgOtZl95904); }
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_SanGongWuRen, g_ProtDef.ASanGongWuRen_C2SReady);
    },
});
