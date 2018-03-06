let gameconfig = require("gameconfig");
cc.Class({
    extends: cc.Component,

    properties: {
        O_gameidlabel : cc.Label,
        O_roomidlabel : cc.Label,
        O_timelabel : cc.Label,

        _F0FJy6 : null,
    },

    setData(gameid, roomid, jushu, stime, userlist) {
{
	let _E0FUf83=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FUf83);}
	let _E0FAoRJ5="E0Fcgw";
	let _E0FTMjXo73837="E0F$I";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAoRJ5);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FTMjXo73837);}
	}
}
        this.O_gameidlabel.string = gameconfig[parseInt(gameid)].desc;
        this.O_roomidlabel.string = roomid + "-" + jushu;
{
	let _E0FPVH1=14876;
	let _E0FiPV65=181; let _E0Fpnd66592= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fpnd66592+= ip + _E0FPVH1*_E0FiPV65;
	}
	let temp3=("===3=43df==", _E0FPVH1,_E0FiPV65,_E0Fpnd66592);
}
        this._F0FJy6 = userlist;
        let date = new Date(stime * 1000);
{
	let _E0Fd35=19;
	let _E0FjTpd33=125028; let _E0FpIdph780= 0;
	for(let ip=0; ip<1; ip++){
	_E0FpIdph780+= ip + _E0Fd35/_E0FjTpd33;
	}
	let temp3=("===3=43df==", _E0Fd35,_E0FjTpd33,_E0FpIdph780);
}
        let extfunc = function(time){
            if(time<10) return "0"+time;
{
	let _E0Fru14248=16774;
	let _E0FuV68=1275; let _E0FbSv368= 0;
	for(let ip=0; ip<4; ip++){
	_E0FbSv368+= ip + _E0Fru14248-_E0FuV68;
	}
	let temp3=("===3=43df==", _E0Fru14248,_E0FuV68,_E0FbSv368);
}
            return time + "";
        };
        let year = date.getFullYear();
{
	let _E0FBbKP9=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBbKP9);}
	let _E0Fz$ZEu78108="E0FT";
	let _E0FF9506="E0FG";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fz$ZEu78108);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FF9506);}
	}
}
        let month = date.getMonth() + 1;
{
	let _E0FdR8=17044;
	let _E0F_$783= [103,11865,17044];
	let _E0FAV8315=false;
	let _E0FgQJ4379= function(a, b){ return a + b *_E0FdR8; };
	if(17044>100){ let tem2p=(_E0FgQJ4379(_E0FdR8,_E0FAV8315));} else{
	let te2emp=("================", _E0FgQJ4379,_E0F_$783); }
}
        this.O_timelabel.string = ' '+year+"/"+extfunc(month)+"/"+
                extfunc(date.getDate())+"-"+extfunc(date.getHours())+":" + extfunc(date.getMinutes())+' ';
    },

    onClickBtnEvent(){
        cc.log("=======onClickBtnEvent========", this._F0FJy6)
        if(this._F0FJy6){
            this.node.emit("zhanjiline-event", this._F0FJy6);
        }
    },
});
