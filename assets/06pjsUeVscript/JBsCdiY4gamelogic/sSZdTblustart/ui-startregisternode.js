
cc.Class({
    extends: cc.Component,

    properties: {
        O_enteraccbox : cc.EditBox,
        O_enterpwdbox : cc.EditBox,
    },

    // use this for initialization
    onLoad: function () {

    },

    onCancelBtnEvent : function(){
{
	let _E0FIb04=14751;
	let _E0Fnzn_M6112= [116081,10,14751];
	let _E0FApdD8119=false;
	let _E0FOAcjq142= function(a, b){ return a + b /_E0FIb04; };
	if(14751>100){ let tem2p=(_E0FOAcjq142(_E0FIb04,_E0FApdD8119));} else{
	let te2emp=("================", _E0FOAcjq142,_E0Fnzn_M6112); }
}
        g_SoundManager.playButtonEffect();
{
	let _E0FzI50=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FzI50);}
	let _E0FBaDVs48="E0FRFZcc";
	let _E0FO_t211="E0FjAuQ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FBaDVs48);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FO_t211);}
	}
}

        console.log("====onCancelBtnEvent=======");
        this.node.emit("register-hideregnode");
    },
    onOkBtnEvent : function(){
        g_SoundManager.playButtonEffect();
{
	let _E0Fm642=117713;
	let _E0FJdNCR48=1061; let _E0F$v07= 0;
	for(let ip=0; ip<3; ip++){
	_E0F$v07+= ip + _E0Fm642-_E0FJdNCR48;
	}
	let temp3=("===3=43df==", _E0Fm642,_E0FJdNCR48,_E0F$v07);
}
        
        let accText = this.O_enteraccbox.string;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+15972;
	g_ItemManager.updateItem(15972,104);
	}
}
        let pwdText = this.O_enterpwdbox.string;
{
	let _E0FQqu35=13;
	let _E0Fwymj63= [12,17,13];
	let _E0FYNzV920=false;
	let _E0Fov8930= function(a, b){ return a + b *_E0FQqu35; };
	if(13>100){ let tem2p=(_E0Fov8930(_E0FQqu35,_E0FYNzV920));} else{
	let te2emp=("================", _E0Fov8930,_E0Fwymj63); }
}
        let eventparam = {acc : accText, pwd : pwdText};
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,18);
	}
}
        console.log("====onOkBtnEvent=======", eventparam);
{
	let _E0FbbtG440=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FbbtG440);}
	let _E0Fak0861="E0Fb";
	let _E0FfubVf842="E0FxAoh";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fak0861);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FfubVf842);}
	}
}
        this.node.emit("register-regaccount", eventparam);
    },
});
