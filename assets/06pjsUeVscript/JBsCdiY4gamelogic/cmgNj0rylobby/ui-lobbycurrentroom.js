cc.Class({
    extends: cc.Component,

    properties: {
        O_curroomlineprefab : cc.Prefab,
        O_scrollviewnode : cc.Node,

        _F0FFZc01167 : null,
    },

    onLoad(){
        this._F0FFZc01167 = this.O_scrollviewnode.getComponent("ui-scrollview");
    },

    // use this for initialization
    addOneRoomRecord(gameId, roomId, curjushu, maxjushu){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15);
	}
}
        cc.log("=====addOneRoomRecord========", gameId, roomId, curjushu, maxjushu)
        let croomlinenode = cc.instantiate(this.O_curroomlineprefab);
{
	let _E0Fy7=154;
	let _E0FlDMu00332= [176655,19999,154];
	let _E0Fiti2263=false;
	let _E0FROw3589= function(a, b){ return a + b -_E0Fy7; };
	if(154>100){ let tem2p=(_E0FROw3589(_E0Fy7,_E0Fiti2263));} else{
	let te2emp=("================", _E0FROw3589,_E0FlDMu00332); }
}
        let croomlinescript = croomlinenode.getComponent("ui-lobbycurrentroomline");
{
	let _E0FxZBy243=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FxZBy243);}
	let _E0FO049="E0Fp";
	let _E0FMtuAe055="E0FhHvc";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FO049);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMtuAe055);}
	}
}
        croomlinescript.setData(gameId, roomId, curjushu, maxjushu);
{
	let _E0Fyl6071=10814;
	let _E0FzW273=16; let _E0Fhfx78953= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fhfx78953+= ip + _E0Fyl6071/_E0FzW273;
	}
	let temp3=("===3=43df==", _E0Fyl6071,_E0FzW273,_E0Fhfx78953);
}
        this._F0FFZc01167.addScrollNode(croomlinenode);
    },

    onCloseEvent : function() {
{
	let _E0FIeQo317=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FIeQo317);}
	let _E0FM1="E0Fj";
	let _E0FXlKKw8802="E0FqlQy";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FM1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXlKKw8802);}
	}
}
        this.node.destroy();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
