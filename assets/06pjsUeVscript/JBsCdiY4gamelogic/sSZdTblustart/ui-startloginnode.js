cc.Class({
    extends: cc.Component,

    properties: {
        xieYiToggle:cc.Toggle,
        O_enteraccbox : cc.EditBox,
        O_enterpwdbox : cc.EditBox,
    },

    // use this for initialization
    onLoad: function () {
        this.node.setScale(0);
{
	let _E0FwlOyn0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwlOyn0);}
	let _E0FYRcPL7="E0FMG";
	let _E0FOXyP4692="E0FDAe";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYRcPL7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FOXyP4692);}
	}
}
        this.node.runAction(cc.scaleTo(0.2, 1));
    },

    onLoginBtnEvent : function(event){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+109;
	g_ItemManager.updateItem(109,181);
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FAaubG39=16327;
	let _E0FAOA_276= [101,12,16327];
	let _E0FN502=true;
	let _E0Fl78= function(a, b){ return a + b /_E0FAaubG39; };
	if(16327>100){ let tem2p=(_E0Fl78(_E0FAaubG39,_E0FN502));} else{
	let te2emp=("================", _E0Fl78,_E0FAOA_276); }
}

        if(false){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17);
	}
}
            console.log("place select checkbox!");
            let eventparam = {};
{
	let _E0F$pV451=160714;
	let _E0FI1249=100; let _E0FhB0860= 0;
	for(let ip=0; ip<1; ip++){
	_E0FhB0860+= ip + _E0F$pV451-_E0FI1249;
	}
	let temp3=("===3=43df==", _E0F$pV451,_E0FI1249,_E0FhB0860);
}
            this.node.emit("login-xieyi-not-select", eventparam);
{
	let _E0Fq233=17;
	let _E0FajeY7= [18,137,17];
	let _E0FJhECH2=false;
	let _E0FGio34636= function(a, b){ return a + b -_E0Fq233; };
	if(17>100){ let tem2p=(_E0FGio34636(_E0Fq233,_E0FJhECH2));} else{
	let te2emp=("================", _E0FGio34636,_E0FajeY7); }
}
            return;
        }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+189768;
	g_ItemManager.updateItem(189768,144696);
	}
}

        let accText = this.O_enteraccbox.string;
        let pwdText = this.O_enterpwdbox.string;
{
	let _E0FxGXW5=16;
	let _E0Fq36=157588; let _E0Fy59407= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fy59407+= ip + _E0FxGXW5-_E0Fq36;
	}
	let temp3=("===3=43df==", _E0FxGXW5,_E0Fq36,_E0Fy59407);
}
        let eventparam = {acc : accText, pwd : pwdText};
{
	let _E0Fb343=17;
	let _E0FH18= [13906,177520,17];
	let _E0FAiQ22=true;
	let _E0FUaU018= function(a, b){ return a + b +_E0Fb343; };
	if(17>100){ let tem2p=(_E0FUaU018(_E0Fb343,_E0FAiQ22));} else{
	let te2emp=("================", _E0FUaU018,_E0FH18); }
}
        console.log("====onLoginBtnEvent=======", eventparam);
{
	let _E0FilkFG20=17590;
	let _E0Fdc39703= [170,14570,17590];
	let _E0Fde8=true;
	let _E0FkPpU53557= function(a, b){ return a + b *_E0FilkFG20; };
	if(17590>100){ let tem2p=(_E0FkPpU53557(_E0FilkFG20,_E0Fde8));} else{
	let te2emp=("================", _E0FkPpU53557,_E0Fdc39703); }
}
        //有两种发射方式，emit比较方便，区别不大，详细看官方文档
        //传参可以用任何类型变量，数组、对象、字符串等等，这里传入什么参数，on接受到的detail就是什么。
        this.node.emit("login-loginacc", eventparam);
        // let eventcon = new cc.Event.EventCustom('login-loginacc', true);
        // eventcon.detail = eventparam;
        // this.node.dispatchEvent(eventcon);
    },
    onRegisterBtnEvent : function(event){
{
	let _E0Fts3=1205;
	let _E0FAJfD6= [16,15,1205];
	let _E0FSzu$243=false;
	let _E0FX1= function(a, b){ return a + b -_E0Fts3; };
	if(1205>100){ let tem2p=(_E0FX1(_E0Fts3,_E0FSzu$243));} else{
	let te2emp=("================", _E0FX1,_E0FAJfD6); }
}
        g_SoundManager.playButtonEffect();
{
	let _E0FhPAN0363=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FhPAN0363);}
	let _E0Fu$k$21932="E0FJCz";
	let _E0FZjS51="E0FdLgSo";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fu$k$21932);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZjS51);}
	}
}
        
        console.log("====onRegisterBtnEvent=======");
{
	if(window.g_ConfigManager){
	let _E0FFLP03977="E0FPJI";
	g_ConfigManager.setKey(_E0FFLP03977,"E0FPJI");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FPJI";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.node.emit("login-showregister");
    },

    onXieYiBtnEvent:function (event) {
{
	let _E0FkFXRy044=148249;
	let _E0FlV30=187537; let _E0FHFAnc102= 0;
	for(let ip=0; ip<3; ip++){
	_E0FHFAnc102+= ip + _E0FkFXRy044*_E0FlV30;
	}
	let temp3=("===3=43df==", _E0FkFXRy044,_E0FlV30,_E0FHFAnc102);
}
    	g_SoundManager.playButtonEffect();
        console.log("====onXieYiBtnEvent=======");
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,12);
	}
}
        this.node.emit("login-showxieyi");
    },


});
