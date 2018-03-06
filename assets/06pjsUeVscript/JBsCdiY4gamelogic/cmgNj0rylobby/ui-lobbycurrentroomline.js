cc.Class({
    extends: cc.Component,

    properties: {
        O_roomidlabel : cc.Label,
        O_jushulabel : cc.Label,

        _F0FwbbJI36532 : null,
        _F0Flc341 : null,
    },

    setData(gameId, roomId, curjushu, maxjushu){
{
	if(window.g_ConfigManager){
	let _E0Feqw69656="E0FWXs";
	g_ConfigManager.setKey(_E0Feqw69656,"E0FWXs");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FWXs";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("===ui-lobbycurrentroomline==setData========", gameId, roomId, curjushu, maxjushu)
        this._F0Flc341 = gameId;
        this._F0FwbbJI36532 = roomId;
        this.O_roomidlabel.string = roomId+"";
        this.O_jushulabel.string = curjushu + "/" + maxjushu;
    },

    onJoinRoomBtnEvent(){
        if(!this._F0Flc341 || !this._F0FwbbJI36532) return;
{
	let _E0Ft561=149854;
	let _E0FtS38327= [10394,191960,149854];
	let _E0FsV64537=false;
	let _E0FYN16= function(a, b){ return a + b +_E0Ft561; };
	if(149854>100){ let tem2p=(_E0FYN16(_E0Ft561,_E0FsV64537));} else{
	let te2emp=("================", _E0FYN16,_E0FtS38327); }
}
        let toProtTab = {};
{
	let _E0FXLBN_702=141997;
	let _E0FyX4912=118073; let _E0FXluu12787= 0;
	for(let ip=0; ip<2; ip++){
	_E0FXluu12787+= ip + _E0FXLBN_702*_E0FyX4912;
	}
	let temp3=("===3=43df==", _E0FXLBN_702,_E0FyX4912,_E0FXluu12787);
}
        toProtTab.gameId = this._F0Flc341;
{
	let _E0FExxO4=1259;
	let _E0Fvbof7=139; let _E0Fd43940= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fd43940+= ip + _E0FExxO4/_E0Fvbof7;
	}
	let temp3=("===3=43df==", _E0FExxO4,_E0Fvbof7,_E0Fd43940);
}
        toProtTab.roomId = this._F0FwbbJI36532;
{
	let _E0FBp9=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBp9);}
	let _E0FipUY0="E0FA";
	let _E0FQeG88700="E0FRvIVd";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FipUY0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQeG88700);}
	}
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqEnterDesk, toProtTab)
    },
});
