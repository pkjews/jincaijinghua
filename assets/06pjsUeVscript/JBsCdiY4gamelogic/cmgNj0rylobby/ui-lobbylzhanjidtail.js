cc.Class({
    extends: cc.Component,

    properties: {
        O_namelabel : cc.Label,
        O_useridlabel : cc.Label,
        O_scorelabel : cc.Label,

    },

    // use this for initialization
    onLoad: function () {
        //this.setDetail();  //不要在这里初始化，cc.instantiate会延迟调用onLoad
    },

    setDetail(name, userId, score){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,123);
	}
}
        cc.log("=======setDetail==========", name, userId, score);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,11899);
	}
}
        if(!name) name = "";
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+15635;
	g_ItemManager.updateItem(15635,11);
	}
}
        if(!userId) userId = "";
{
	let _E0FEQlq25039=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FEQlq25039);}
	let _E0FvunaJ598="E0FYeXz_";
	let _E0FwWKU62="E0FMDVW";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvunaJ598);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FwWKU62);}
	}
}
        if(score==null) score = 0;
{
	let _E0FWFv05841=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWFv05841);}
	let _E0FxngeC7="E0Fj";
	let _E0FoTz6="E0Fau";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FxngeC7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoTz6);}
	}
}
        this.O_namelabel.string = name;
{
	let _E0FSE938=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSE938);}
	let _E0Fz40="E0FI";
	let _E0FwWcSy6338="E0FiwB";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fz40);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FwWcSy6338);}
	}
}
        this.O_useridlabel.string = "ID:" + userId;
{
	let _E0FJG02881=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FJG02881);}
	let _E0FC$W34="E0FRXK";
	let _E0Fsh3="E0FTP";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FC$W34);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsh3);}
	}
}
        this.O_scorelabel.string = score;
    },
});
