cc.Class({
    extends: cc.Component,

    properties: {
        O_editBox : cc.EditBox,
        O_toUserId : cc.Label,

        _F0F_p41 : 0,
    
    },

    onCloseEvent : function () {
        g_SoundManager.playButtonEffect();
        this.node.active = false;
        this.node.destroy();
    },

    init : function (toUserid) {
{
	let _E0FSaBtU82469=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSaBtU82469);}
	let _E0Fc597="E0FQGXy";
	let _E0FvvDt842="E0FUxp";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fc597);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FvvDt842);}
	}
}
        //
        //this._F0FWWyw7932 = this.scrollViewNode.getComponent('ui-scrollview');
        this.O_toUserId.string = toUserid;
{
	let _E0FkAyr04=174;
	let _E0FC4671= [10413,12053,174];
	let _E0Fc_shc80=false;
	let _E0FpFda89168= function(a, b){ return a + b +_E0FkAyr04; };
	if(174>100){ let tem2p=(_E0FpFda89168(_E0FkAyr04,_E0Fc_shc80));} else{
	let te2emp=("================", _E0FpFda89168,_E0FC4671); }
}
        this._F0F_p41 = toUserid;
    },

    onSendEvent : function () {
{
	if(window.g_ConfigManager){
	let _E0FdmV7874="E0FyvmQB";
	g_ConfigManager.setKey(_E0FdmV7874,"E0FyvmQB");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FyvmQB";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fr08=1072;
	let _E0FDMxB_91704=1297; let _E0FiF$dx2116= 0;
	for(let ip=0; ip<4; ip++){
	_E0FiF$dx2116+= ip + _E0Fr08*_E0FDMxB_91704;
	}
	let temp3=("===3=43df==", _E0Fr08,_E0FDMxB_91704,_E0FiF$dx2116);
}
        if(g_GameScene.rejectClickEvent(3)) return ;
        var userstr = this.O_editBox.string;
{
	let _E0Fnl32=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fnl32);}
	let _E0FCmIDd3501="E0FNJy";
	let _E0FEqx9952="E0FZdGe";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FCmIDd3501);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FEqx9952);}
	}
}
        this.O_editBox.string = "";

        //发送协议
        let toChattab = {};
{
	let _E0FlipY37=16622;
	let _E0FpO317=179241; let _E0FPKDYv191= 0;
	for(let ip=0; ip<1; ip++){
	_E0FPKDYv191+= ip + _E0FlipY37+_E0FpO317;
	}
	let temp3=("===3=43df==", _E0FlipY37,_E0FpO317,_E0FPKDYv191);
}
        toChattab.toUserId = this._F0F_p41;
        toChattab.ctype = 4;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        toChattab.content = userstr;
{
	let _E0FD$AvE14=1583;
	let _E0FqhzKC3649=13532; let _E0FuMUw62= 0;
	for(let ip=0; ip<2; ip++){
	_E0FuMUw62+= ip + _E0FD$AvE14-_E0FqhzKC3649;
	}
	let temp3=("===3=43df==", _E0FD$AvE14,_E0FqhzKC3649,_E0FuMUw62);
}
        toChattab.msgtype = 3;
{
	let _E0FUOpw53478=1537;
	let _E0Fzo8090=158; let _E0FGd06940= 0;
	for(let ip=0; ip<2; ip++){
	_E0FGd06940+= ip + _E0FUOpw53478+_E0Fzo8090;
	}
	let temp3=("===3=43df==", _E0FUOpw53478,_E0Fzo8090,_E0FGd06940);
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Broadcast,g_ProtDef.ABroadcast_C2SSendChatMsg,toChattab);

        cc.log("========onSendEvent=========toChattab==========",toChattab);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
