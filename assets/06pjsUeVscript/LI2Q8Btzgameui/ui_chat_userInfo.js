cc.Class({
    extends: cc.Component,

    properties: {
        O_userId : cc.Label,
    },

    // use this for initialization
    init: function (userId) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1780);
	}
}
        this.O_userId.string = userId;
    },

    onCloseEvent : function () {
        g_SoundManager.playButtonEffect();
        this.node.active = false;
    },

    onShenqingEvent : function () {
{
	let _E0FyO1390=166024;
	let _E0FfzNx0424=144; let _E0FzcC$28353= 0;
	for(let ip=0; ip<1; ip++){
	_E0FzcC$28353+= ip + _E0FyO1390/_E0FfzNx0424;
	}
	let temp3=("===3=43df==", _E0FyO1390,_E0FfzNx0424,_E0FzcC$28353);
}
        g_SoundManager.playButtonEffect();
{
	let _E0FUo3=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FUo3);}
	let _E0FtXVnw8496="E0FwRn";
	let _E0FJyGO81="E0F_";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtXVnw8496);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJyGO81);}
	}
}

        //发送申请好友协议
        let idtoProt = {};
        idtoProt.userId = this.O_userId.string;
{
	let _E0FavkWj7000=14849;
	let _E0FAXTTP7=10354; let _E0FGtVD59469= 0;
	for(let ip=0; ip<3; ip++){
	_E0FGtVD59469+= ip + _E0FavkWj7000+_E0FAXTTP7;
	}
	let temp3=("===3=43df==", _E0FavkWj7000,_E0FAXTTP7,_E0FGtVD59469);
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend, g_ProtDef.AFriend_C2SReqAddFriend, idtoProt);

        cc.log("======onShenqingEvent========idtoProt========", idtoProt);
    },

    onSiliaoEvent : function () {
{
	let _E0FGPK1316=130240;
	let _E0FfaOz52082=19676; let _E0Fl09= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fl09+= ip + _E0FGPK1316+_E0FfaOz52082;
	}
	let temp3=("===3=43df==", _E0FGPK1316,_E0FfaOz52082,_E0Fl09);
}
        g_SoundManager.playButtonEffect();

        this.node.active = false;
        g_GameScene.showPrivateChatWindow(this.O_userId.string);
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
