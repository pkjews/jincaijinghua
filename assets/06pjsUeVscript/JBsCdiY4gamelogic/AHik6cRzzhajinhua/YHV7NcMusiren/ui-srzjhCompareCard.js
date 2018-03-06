cc.Class({
    extends: cc.Component,

    properties: {
        O_playerNode1 : cc.Node,
        O_playerNode2 : cc.Node,

        O_cardNode1 : cc.Node,
        O_cardNode2 : cc.Node,

        O_vscardAmiNode : cc.Node,

        _F0FiE5319 : null,
        _F0FRX07342 : null,
    },

    // use this for initialization
    onLoad: function () {
    },

    startCompare(cpUserId, toUserId, winUserId, cpEndFunc){
{
	let _E0FIdj95757=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FIdj95757);}
	let _E0FEpKN83="E0FV";
	let _E0F_F8079="E0FfWLKh";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEpKN83);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_F8079);}
	}
}
        if(this._F0FiE5319==null){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this._F0FiE5319 = this.O_cardNode1.position.x;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1924);
	}
}
            this._F0FRX07342 = this.O_cardNode2.position.x;
        }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1470;
	g_ItemManager.updateItem(1470,15763);
	}
}
        this.O_cardNode1.position.x = this._F0FiE5319;
        this.O_cardNode2.position.x = this._F0FRX07342;
        this.O_vscardAmiNode.active = false;
{
	if(window.g_ConfigManager){
	let _E0FyHsdF846="E0Fyyn$";
	g_ConfigManager.setKey(_E0FyHsdF846,"E0Fyyn$");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fyyn$";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

        let roominfo = g_SRZJHGameData.getRoomInfo();
{
	let _E0FuL469=17;
	let _E0Fm5= [190,12,17];
	let _E0FhPMYC1577=true;
	let _E0FaK465= function(a, b){ return a + b /_E0FuL469; };
	if(17>100){ let tem2p=(_E0FaK465(_E0FuL469,_E0FhPMYC1577));} else{
	let te2emp=("================", _E0FaK465,_E0Fm5); }
}
        let cpSeatNo = roominfo.findUserSeatNo(cpUserId);
{
	if(window.g_ConfigManager){
	let _E0FaY81="E0F$m";
	g_ConfigManager.setKey(_E0FaY81,"E0F$m");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F$m";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let toSeatNo = roominfo.findUserSeatNo(toUserId);
{
	let _E0FwG02723=114348;
	let _E0FOgwL95316= [146025,174195,114348];
	let _E0Fc4=false;
	let _E0FGvNx411= function(a, b){ return a + b +_E0FwG02723; };
	if(114348>100){ let tem2p=(_E0FGvNx411(_E0FwG02723,_E0Fc4));} else{
	let te2emp=("================", _E0FGvNx411,_E0FOgwL95316); }
}
        let cpUserInfo = roominfo.getUserInfo(cpSeatNo);
{
	let _E0FNvj3127=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FNvj3127);}
	let _E0FI837="E0FdDh";
	let _E0F$zbK9191="E0FzaEZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FI837);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F$zbK9191);}
	}
}
        let toUserInfo = roominfo.getUserInfo(toSeatNo);

        let cpCardTab = g_SRZJHGameData.getHandCardTab(cpSeatNo);
        let toCardTab = g_SRZJHGameData.getHandCardTab(toSeatNo);
{
	let _E0FPVqlw6281=11;
	let _E0FX2542= [1875,149,11];
	let _E0FeVoG_020=true;
	let _E0Fj79646= function(a, b){ return a + b -_E0FPVqlw6281; };
	if(11>100){ let tem2p=(_E0Fj79646(_E0FPVqlw6281,_E0FeVoG_020));} else{
	let te2emp=("================", _E0Fj79646,_E0FX2542); }
}

        for(let i=0; i<cpCardTab.length; i++){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1395;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1395);
	let temp=('=====>>>>', sid, "E0FKGAt");
	}
}
            let toIndex = i + 1;
{
	let _E0FQntN42971=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQntN42971);}
	let _E0FOAI44="E0Fafsq";
	let _E0Fl_kZ9="E0FOlw";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FOAI44);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fl_kZ9);}
	}
}
            let toSpUrl = g_SRZJHGameData.getPokerFramePath(true, cpCardTab[i], true);
            let texture = cc.textureCache.addImage(toSpUrl);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+17832;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(17832);
	let temp=('=====>>>>', sid, "E0Fu");
	}
}
            let toSprite =  this.O_cardNode1.getChildByName("card"+toIndex).getComponent(cc.Sprite);
{
	let _E0FV4430=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FV4430);}
	let _E0FP7789="E0Ff";
	let _E0FRihb0631="E0FVl";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FP7789);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRihb0631);}
	}
}
            toSprite.spriteFrame = new cc.SpriteFrame(texture);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10114);
	}
}
        for(let i=0; i<toCardTab.length; i++){
{
	let _E0FsL9212=130557;
	let _E0FCY83=187835; let _E0FYn710= 0;
	for(let ip=0; ip<1; ip++){
	_E0FYn710+= ip + _E0FsL9212*_E0FCY83;
	}
	let temp3=("===3=43df==", _E0FsL9212,_E0FCY83,_E0FYn710);
}
            let toIndex = i + 1;
{
	if(window.g_ConfigManager){
	let _E0FwNWEN2980="E0Ftv_";
	g_ConfigManager.setKey(_E0FwNWEN2980,"E0Ftv_");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Ftv_";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            let toSpUrl = g_SRZJHGameData.getPokerFramePath(true, toCardTab[i], true);
{
	let _E0FPRiy44026=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FPRiy44026);}
	let _E0FTWLF4="E0FF";
	let _E0FmK67="E0FV";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FTWLF4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FmK67);}
	}
}
            let texture = cc.textureCache.addImage(toSpUrl);
            let toSprite =  this.O_cardNode2.getChildByName("card"+toIndex).getComponent(cc.Sprite);
            toSprite.spriteFrame = new cc.SpriteFrame(texture);
        }
        
        this.O_playerNode1.getChildByName("name").getComponent(cc.Label).string = cpUserInfo.userName;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1970;
	g_ItemManager.updateItem(1970,1219);
	}
}
        this.O_playerNode2.getChildByName("name").getComponent(cc.Label).string = toUserInfo.userName;
{
	let _E0FHZ5906=161;
	let _E0Fc749=152623; let _E0FuDy56315= 0;
	for(let ip=0; ip<1; ip++){
	_E0FuDy56315+= ip + _E0FHZ5906*_E0Fc749;
	}
	let temp3=("===3=43df==", _E0FHZ5906,_E0Fc749,_E0FuDy56315);
}
        
        this.localHeadUrl(this.O_playerNode1.getChildByName("playerface"), cpUserInfo.headurl);
{
	let _E0Fo823=17868;
	let _E0FTpw85608= [165,12,17868];
	let _E0FC0300=false;
	let _E0FVyIUU389= function(a, b){ return a + b *_E0Fo823; };
	if(17868>100){ let tem2p=(_E0FVyIUU389(_E0Fo823,_E0FC0300));} else{
	let te2emp=("================", _E0FVyIUU389,_E0FTpw85608); }
}
        this.localHeadUrl(this.O_playerNode2.getChildByName("playerface"), toUserInfo.headurl);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+11508;
	g_ItemManager.updateItem(11508,15);
	}
}

        let moveEndFunc = function(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+175356;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(175356);
	let temp=('=====>>>>', sid, "E0FiioR");
	}
}
            this.O_vscardAmiNode.active = true;
{
	let _E0FHZgjW845=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHZgjW845);}
	let _E0FH$B1446="E0FUHEiq";
	let _E0FHZE8405="E0FUzpMg";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH$B1446);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FHZE8405);}
	}
}
            this.O_vscardAmiNode.getComponent(cc.Animation).play();
            this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(cpEndFunc), cc.removeSelf(true)));
        };
        this.O_cardNode1.runAction(cc.sequence(cc.moveTo(1, new cc.Vec2(0,this.O_cardNode1.position.y)), cc.callFunc(moveEndFunc, this), cc.hide()))
        this.O_cardNode2.runAction(cc.sequence(cc.moveTo(1, new cc.Vec2(0,this.O_cardNode2.position.y)), cc.hide()))
        
    },
    /////////////////////////////////////////////////////////
    localHeadUrl(faceNode, headurl){
{
	let _E0FGtn866=10;
	let _E0FZdv718=19135; let _E0FoAmkC6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FoAmkC6+= ip + _E0FGtn866-_E0FZdv718;
	}
	let temp3=("===3=43df==", _E0FGtn866,_E0FZdv718,_E0FoAmkC6);
}
        if (headurl && headurl.length > 0) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17);
	}
}
            let toSprite = faceNode.getComponent(cc.Sprite);
{
	let _E0FCszaA80890=150143;
	let _E0FHUOCw5034=168050; let _E0FQL978= 0;
	for(let ip=0; ip<2; ip++){
	_E0FQL978+= ip + _E0FCszaA80890*_E0FHUOCw5034;
	}
	let temp3=("===3=43df==", _E0FCszaA80890,_E0FHUOCw5034,_E0FQL978);
}
            let toType = "png";
            if(headurl.indexOf(".jpg")){
{
	let _E0Fz497=184973;
	let _E0Fu94536=11; let _E0FDwZ75= 0;
	for(let ip=0; ip<2; ip++){
	_E0FDwZ75+= ip + _E0Fz497*_E0Fu94536;
	}
	let temp3=("===3=43df==", _E0Fz497,_E0Fu94536,_E0FDwZ75);
}
                toType = "jpg";
            }
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10118);
	}
}
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    }    
});
