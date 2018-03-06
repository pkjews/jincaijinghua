cc.Class({
    extends: cc.Component,

    properties: {
        O_touchcard : cc.Node,

        _F0Fb72459 : 0,
        _F0FPq_e2 : null,
    },

    // use this for initialization
    onLoad: function () {
{
	let _E0Fozjh109=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fozjh109);}
	let _E0FhHr2="E0F_Wrh";
	let _E0FjmA73="E0FYC";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhHr2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FjmA73);}
	}
}
        this._F0FPq_e2 = new cc.Vec2(this.O_touchcard.position.x, this.O_touchcard.position.y);
    },
    setCardScale(scale){
{
	let _E0FSC727=198545;
	let _E0Fyj6= [14,153570,198545];
	let _E0FGH0=false;
	let _E0FKC42= function(a, b){ return a + b /_E0FSC727; };
	if(198545>100){ let tem2p=(_E0FKC42(_E0FSC727,_E0FGH0));} else{
	let te2emp=("================", _E0FKC42,_E0Fyj6); }
}
        this.node.scale = scale;
    },
    setCardWidth(width){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+153;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(153);
	let temp=('=====>>>>', sid, "E0FJI");
	}
}
        this.node.width = width;
    },
    setCardHeight(height){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+199097;
	g_ItemManager.updateItem(199097,167838);
	}
}
        this.node.height = height;
    },
    setCardValue(value){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let self = this;
        cc.log("========setCardValue============", value);
{
	let _E0FOv41=10;
	let _E0FL3= [159462,12,10];
	let _E0Fi43=false;
	let _E0FPZo$409= function(a, b){ return a + b /_E0FOv41; };
	if(10>100){ let tem2p=(_E0FPZo$409(_E0FOv41,_E0Fi43));} else{
	let te2emp=("================", _E0FPZo$409,_E0FL3); }
}
        if(!value) value = -1;
        this._F0Fb72459 = value;
{
	let _E0FrwD$15=12;
	let _E0Fyv55=106; let _E0Fi3= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fi3+= ip + _E0FrwD$15-_E0Fyv55;
	}
	let temp3=("===3=43df==", _E0FrwD$15,_E0Fyv55,_E0Fi3);
}
        let toSpUrl 
{
	let _E0Ftpq_8932=194;
	let _E0FIw28885= [171653,1354,194];
	let _E0Ftf2=true;
	let _E0FOVs92500= function(a, b){ return a + b -_E0Ftpq_8932; };
	if(194>100){ let tem2p=(_E0FOVs92500(_E0Ftpq_8932,_E0Ftf2));} else{
	let te2emp=("================", _E0FOVs92500,_E0FIw28885); }
}
        if(false){
{
	let _E0F$W_220=142656;
	let _E0FZo08= [113902,159,142656];
	let _E0FQMy_H556=false;
	let _E0FAknfl1= function(a, b){ return a + b +_E0F$W_220; };
	if(142656>100){ let tem2p=(_E0FAknfl1(_E0F$W_220,_E0FQMy_H556));} else{
	let te2emp=("================", _E0FAknfl1,_E0FZo08); }
}
            toSpUrl = g_SRZJHGameData.getRangPokerFramePath(true);
        }else{
            toSpUrl = g_SRZJHGameData.getPokerFramePath(true, this._F0Fb72459, true);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1029);
	}
}
        var texture = cc.textureCache.addImage(toSpUrl);
{
	let _E0FnBNl5917=196959;
	let _E0Fe305=117187; let _E0FoO07769= 0;
	for(let ip=0; ip<4; ip++){
	_E0FoO07769+= ip + _E0FnBNl5917*_E0Fe305;
	}
	let temp3=("===3=43df==", _E0FnBNl5917,_E0Fe305,_E0FoO07769);
}
        let toSprite = self.O_touchcard.getComponent(cc.Sprite);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1426;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1426);
	let temp=('=====>>>>', sid, "E0FHX");
	}
}
        toSprite.spriteFrame = new cc.SpriteFrame(texture);
        // cc.loader.loadRes(toSpUrl, function(err, texture){
        //     toSprite.spriteFrame = new cc.SpriteFrame(texture);
        // });
    },
    getCardValue(){
{
	let _E0F$Wnzl529=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$Wnzl529);}
	let _E0Fj77933="E0FC";
	let _E0FR07326="E0FZ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fj77933);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FR07326);}
	}
}
        return this._F0Fb72459;
    },

    onChceckTouchEnd(touchPos){
{
	if(window.g_ConfigManager){
	let _E0F_IDPA44="E0FhZPnh";
	g_ConfigManager.setKey(_E0F_IDPA44,"E0FhZPnh");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FhZPnh";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(this.priIsTouchInCard(touchPos)){
{
	let _E0Fgy24=183;
	let _E0FPOj32454= [163777,164863,183];
	let _E0FzaG$313=true;
	let _E0Fvmcp1= function(a, b){ return a + b /_E0Fgy24; };
	if(183>100){ let tem2p=(_E0Fvmcp1(_E0Fgy24,_E0FzaG$313));} else{
	let te2emp=("================", _E0Fvmcp1,_E0FPOj32454); }
}
            
            return true;
        }
        return false;
    },
    recoverCard(cardvalue){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,190049);
	}
}
        if(this._F0Fb72459>0) return ;
{
	let _E0Fvk60314=15;
	let _E0FtdF45=10467; let _E0FLyu_82= 0;
	for(let ip=0; ip<4; ip++){
	_E0FLyu_82+= ip + _E0Fvk60314-_E0FtdF45;
	}
	let temp3=("===3=43df==", _E0Fvk60314,_E0FtdF45,_E0FLyu_82);
}
        let self = this;
        let toRotateFunc = ()=>{
            cc.log("====toRotateFunc=========", cardvalue);
            self.setCardValue(cardvalue);
        };
{
	let _E0FfpGx27=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfpGx27);}
	let _E0FVxiEa926="E0FhtNg";
	let _E0FSxNG106="E0Fw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVxiEa926);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSxNG106);}
	}
}
        this.O_touchcard.stopAllActions();
{
	let _E0FJFsAJ238=112533;
	let _E0Fa0374= [190880,173401,112533];
	let _E0FcHq57856=true;
	let _E0FOQ375= function(a, b){ return a + b -_E0FJFsAJ238; };
	if(112533>100){ let tem2p=(_E0FOQ375(_E0FJFsAJ238,_E0FcHq57856));} else{
	let te2emp=("================", _E0FOQ375,_E0Fa0374); }
}
        this.O_touchcard.runAction(cc.sequence(cc.scaleTo(0.3, 0, 1), cc.callFunc(toRotateFunc, this), 
            cc.scaleTo(0.3, 1, 1)));
    },
    ////////////////////////////////////////////////////////////////////////
    priIsTouchInCard(touchPos){
{
	let _E0FFChW3296=132;
	let _E0FRqM09=18; let _E0Fl5370= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fl5370+= ip + _E0FFChW3296*_E0FRqM09;
	}
	let temp3=("===3=43df==", _E0FFChW3296,_E0FRqM09,_E0Fl5370);
}
        let toPos = this.O_touchcard.convertToNodeSpace(touchPos);
        let toRect = new cc.Rect(0, 0, this.O_touchcard.width, this.O_touchcard.height);
{
	let _E0FR8046=113;
	let _E0FGhV065= [1719,1398,113];
	let _E0FOeNq647=true;
	let _E0FDFYD2183= function(a, b){ return a + b *_E0FR8046; };
	if(113>100){ let tem2p=(_E0FDFYD2183(_E0FR8046,_E0FOeNq647));} else{
	let te2emp=("================", _E0FDFYD2183,_E0FGhV065); }
}
        //cc.log("======priIsTouchInCard====111=====", toPos, toRect);
        if(toRect.contains(toPos)){
{
	let _E0FO03643=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FO03643);}
	let _E0FZYPr1="E0FQz";
	let _E0FLyxr8250="E0FcteTW";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FZYPr1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLyxr8250);}
	}
}
            //cc.log("======priIsTouchInCard====222=====");
            return true;
        }
        return false;
    },
});
