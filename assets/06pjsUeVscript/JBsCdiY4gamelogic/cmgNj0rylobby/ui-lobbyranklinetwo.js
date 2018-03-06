
cc.Class({
    extends: cc.Component,

    properties: {
        O_ranknode1 : cc.Node,
        O_ranknode2 : cc.Node,

        O_node1_headimage : cc.Node,
        O_node1_name : cc.Label,
        O_node1_winnum : cc.Label,
        
        O_node2_headimage : cc.Node,
        O_node2_name : cc.Label,
        O_node2_winnum : cc.Label,

        _F0Fn8811 : 0,
    },

    start () {

    },

    addShowData(rankdata){
{
	if(window.g_ConfigManager){
	let _E0Fg$h178="E0FlzWdo";
	g_ConfigManager.setKey(_E0Fg$h178,"E0FlzWdo");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FlzWdo";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(this._F0Fn8811==0){
            this._F0Fn8811 = 1;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+18396;
	g_ItemManager.updateItem(18396,177);
	}
}
            this.O_ranknode1.active = true;
            this.O_ranknode2.active = false;
{
	let _E0FtS4922=165;
	let _E0FT4323=19; let _E0F_KEU6277= 0;
	for(let ip=0; ip<2; ip++){
	_E0F_KEU6277+= ip + _E0FtS4922-_E0FT4323;
	}
	let temp3=("===3=43df==", _E0FtS4922,_E0FT4323,_E0F_KEU6277);
}
            //this.O_node1_headimage.string = rankdata.headurl;
            this.priloadhead(this.O_node1_headimage, rankdata.headurl);
{
	let _E0FsHz94102=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsHz94102);}
	let _E0Ft834="E0FW";
	let _E0FwmfaG6="E0FL";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ft834);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FwmfaG6);}
	}
}
            this.O_node1_name.string = rankdata.userName;
{
	let _E0FoInL79921=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FoInL79921);}
	let _E0FFZe6079="E0FJXD";
	let _E0FrJ_VX35117="E0FoxI";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FFZe6079);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FrJ_VX35117);}
	}
}
            this.O_node1_winnum.string = 0;
{
	let _E0Fh7=12605;
	let _E0FL858= [10,16,12605];
	let _E0FL7=false;
	let _E0Fb6= function(a, b){ return a + b +_E0Fh7; };
	if(12605>100){ let tem2p=(_E0Fb6(_E0Fh7,_E0FL7));} else{
	let te2emp=("================", _E0Fb6,_E0FL858); }
}
            if(rankdata.weekWin) {
                this.O_node1_winnum.string = rankdata.weekWin;
            }
        }else if(this._F0Fn8811==1){
            this._F0Fn8811 = 2;
{
	let _E0FjxUd067=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FjxUd067);}
	let _E0FX91052="E0FrBa$";
	let _E0Fz83765="E0FqhW";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FX91052);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fz83765);}
	}
}
            this.O_ranknode2.active = true;
{
	let _E0Fk6136=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fk6136);}
	let _E0FDw39="E0FNr";
	let _E0FHtocJ2153="E0FHKYjC";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDw39);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FHtocJ2153);}
	}
}
            this.priloadhead(this.O_node2_headimage, rankdata.headurl);
{
	let _E0FOENdq783=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FOENdq783);}
	let _E0FY065="E0Fhpq";
	let _E0Fsr9475="E0FCIm$";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FY065);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsr9475);}
	}
}
            this.O_node2_name.string = rankdata.userName;
{
	let _E0FDGbB9792=111618;
	let _E0FiBH0868=15; let _E0Fjq13= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fjq13+= ip + _E0FDGbB9792/_E0FiBH0868;
	}
	let temp3=("===3=43df==", _E0FDGbB9792,_E0FiBH0868,_E0Fjq13);
}
            this.O_node2_winnum.string = 0;
            if(rankdata.weekWin) {
{
	let _E0FDue3354=176;
	let _E0FPV714=17849; let _E0FSCr86735= 0;
	for(let ip=0; ip<1; ip++){
	_E0FSCr86735+= ip + _E0FDue3354*_E0FPV714;
	}
	let temp3=("===3=43df==", _E0FDue3354,_E0FPV714,_E0FSCr86735);
}
                this.O_node2_winnum.string = rankdata.weekWin;
            }
        }
        return this._F0Fn8811==2;
    },

    priloadhead(headnode, headurl){
{
	let _E0FH234=16;
	let _E0FkMt4=187086; let _E0FyHZGW60= 0;
	for(let ip=0; ip<1; ip++){
	_E0FyHZGW60+= ip + _E0FH234+_E0FkMt4;
	}
	let temp3=("===3=43df==", _E0FH234,_E0FkMt4,_E0FyHZGW60);
}
        if (headurl && headurl.length > 0) {
{
	let _E0FiFsA315=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FiFsA315);}
	let _E0FZeFI01019="E0FgBD";
	let _E0FrzsH58="E0Fhq";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FZeFI01019);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FrzsH58);}
	}
}
            let toSprite = headnode.getComponent(cc.Sprite);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,199);
	}
}
            let toType = "png";
            if(headurl.indexOf(".jpg")){
{
	let _E0FtqLYE21766=179193;
	let _E0Fr_64= [12083,15109,179193];
	let _E0Fubh$0759=false;
	let _E0FuwI37= function(a, b){ return a + b *_E0FtqLYE21766; };
	if(179193>100){ let tem2p=(_E0FuwI37(_E0FtqLYE21766,_E0Fubh$0759));} else{
	let te2emp=("================", _E0FuwI37,_E0Fr_64); }
}
                toType = "jpg";
            }
{
	let _E0Ff79=101;
	let _E0Fc$O32811= [12531,16,101];
	let _E0FwLF0=false;
	let _E0FymV820= function(a, b){ return a + b +_E0Ff79; };
	if(101>100){ let tem2p=(_E0FymV820(_E0Ff79,_E0FwLF0));} else{
	let te2emp=("================", _E0FymV820,_E0Fc$O32811); }
}
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,14111);
	}
}
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    },
});
