// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        O_namelabel : cc.Label,
        O_totallabel : cc.Label,
        O_timelabel : cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    showData(name, totalcount, stime){
{
	let _E0FpqbLz04=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FpqbLz04);}
	let _E0FkU155="E0FZhbv";
	let _E0FSx4="E0F$Fy";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkU155);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSx4);}
	}
}
        this.O_namelabel.string = name;
{
	let _E0Fear7087=197;
	let _E0FZkI486= [188909,1870,197];
	let _E0FT6=true;
	let _E0FhT6= function(a, b){ return a + b *_E0Fear7087; };
	if(197>100){ let tem2p=(_E0FhT6(_E0Fear7087,_E0FT6));} else{
	let te2emp=("================", _E0FhT6,_E0FZkI486); }
}
        this.O_totallabel.string = totalcount;

        let date = new Date(stime * 1000);
{
	let _E0FbtJSX5=1712;
	let _E0FF25= [15161,1944,1712];
	let _E0FYl_XG9863=true;
	let _E0F_19= function(a, b){ return a + b /_E0FbtJSX5; };
	if(1712>100){ let tem2p=(_E0F_19(_E0FbtJSX5,_E0FYl_XG9863));} else{
	let te2emp=("================", _E0F_19,_E0FF25); }
}
        let extfunc = function(time){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10);
	}
}
            if(time<10) return "0"+time;
{
	let _E0FVlyY007=114;
	let _E0FDOwy1449=100; let _E0Fmcwz90= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fmcwz90+= ip + _E0FVlyY007*_E0FDOwy1449;
	}
	let temp3=("===3=43df==", _E0FVlyY007,_E0FDOwy1449,_E0Fmcwz90);
}
            return time + "";
        };
{
	if(window.g_ConfigManager){
	let _E0FZS6="E0Fa";
	g_ConfigManager.setKey(_E0FZS6,"E0Fa");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fa";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
{
	let _E0FIz89895=17503;
	let _E0FqU08679=12612; let _E0FrgM911= 0;
	for(let ip=0; ip<4; ip++){
	_E0FrgM911+= ip + _E0FIz89895-_E0FqU08679;
	}
	let temp3=("===3=43df==", _E0FIz89895,_E0FqU08679,_E0FrgM911);
}
        this.O_timelabel.string = year+"/"+extfunc(month)+"/"+
                extfunc(date.getDate())+"-"+extfunc(date.getHours())+":" + extfunc(date.getMinutes());
    }
});
