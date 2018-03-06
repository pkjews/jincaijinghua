cc.Class({
    extends: cc.Component,

    properties: {
        
        _F0Fw98 : null,
        _F0Fg88844 : null,
    },

    // use this for initialization
    onLoad: function () {
{
	let _E0FcWTPg42=169;
	let _E0FT504=152720; let _E0FZTdE755= 0;
	for(let ip=0; ip<3; ip++){
	_E0FZTdE755+= ip + _E0FcWTPg42/_E0FT504;
	}
	let temp3=("===3=43df==", _E0FcWTPg42,_E0FT504,_E0FZTdE755);
}
        this._F0Fw98 = null;
    },
    showWindow : function(isOk, isCancel, isRetry, text1, text2, callback, target){
        let panelNode = this.node.getChildByName("panel");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+131;
	g_ItemManager.updateItem(131,15154);
	}
}
        if(text1)panelNode.getChildByName("text1").getComponent(cc.RichText).string = text1+"";
{
	let _E0Fcps5969=139;
	let _E0FtR9038=119406; let _E0FT726= 0;
	for(let ip=0; ip<3; ip++){
	_E0FT726+= ip + _E0Fcps5969+_E0FtR9038;
	}
	let temp3=("===3=43df==", _E0Fcps5969,_E0FtR9038,_E0FT726);
}
        if(text2)panelNode.getChildByName("text2").getComponent(cc.RichText).string = text2+"";
        
        let pokbtn = panelNode.getChildByName("okbtn");
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1406;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1406);
	let temp=('=====>>>>', sid, "E0FHsPZL");
	}
}
        let pcancelbtn = panelNode.getChildByName("cancelbtn");
{
	let _E0FQg6=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQg6);}
	let _E0FUW20="E0FgAdUX";
	let _E0FzF933="E0FcAh";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FUW20);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FzF933);}
	}
}
        let retrybtn = panelNode.getChildByName("retrybtn");
        pokbtn.active = isOk;
        pcancelbtn.active = isCancel;
        retrybtn.active = isRetry;
{
	let _E0FmLpaD639=149020;
	let _E0FHjTgh9854=11; let _E0FtGIxw889= 0;
	for(let ip=0; ip<2; ip++){
	_E0FtGIxw889+= ip + _E0FmLpaD639+_E0FHjTgh9854;
	}
	let temp3=("===3=43df==", _E0FmLpaD639,_E0FHjTgh9854,_E0FtGIxw889);
}
        if(isOk != isCancel){
{
	let _E0FVwZ52=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVwZ52);}
	let _E0FipG5533="E0Fjpj";
	let _E0FpP78758="E0FhgXg";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FipG5533);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FpP78758);}
	}
}
            let toCenterPos = new cc.Vec2(pokbtn.position.x + pcancelbtn.position.x, pokbtn.position.y + pcancelbtn.position.y);
{
	let _E0FlL$6=106;
	let _E0FjNx27726=15; let _E0FCf85= 0;
	for(let ip=0; ip<3; ip++){
	_E0FCf85+= ip + _E0FlL$6*_E0FjNx27726;
	}
	let temp3=("===3=43df==", _E0FlL$6,_E0FjNx27726,_E0FCf85);
}
            toCenterPos.divSelf(2);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1401;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1401);
	let temp=('=====>>>>', sid, "E0FeJQLw");
	}
}
            console.log("====showPopupWindow==11=====", toCenterPos);
{
	let _E0FcaqEM3814=1805;
	let _E0Fs$mMe79= [189811,14,1805];
	let _E0FV017=true;
	let _E0FTV08191= function(a, b){ return a + b /_E0FcaqEM3814; };
	if(1805>100){ let tem2p=(_E0FTV08191(_E0FcaqEM3814,_E0FV017));} else{
	let te2emp=("================", _E0FTV08191,_E0Fs$mMe79); }
}
            if(isOk){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                pokbtn.position = new cc.Vec2(toCenterPos.x, toCenterPos.y);
            }else if(isCancel){
{
	let _E0FjDtMD29012=15;
	let _E0FN8=17835; let _E0Fb63255= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fb63255+= ip + _E0FjDtMD29012-_E0FN8;
	}
	let temp3=("===3=43df==", _E0FjDtMD29012,_E0FN8,_E0Fb63255);
}
                pcancelbtn.position = new cc.Vec2(toCenterPos.x, toCenterPos.y);
            }
{
	let _E0FXP23=10;
	let _E0FTi34682= [1874,10,10];
	let _E0FCqoPK1398=true;
	let _E0Fx8927= function(a, b){ return a + b +_E0FXP23; };
	if(10>100){ let tem2p=(_E0Fx8927(_E0FXP23,_E0FCqoPK1398));} else{
	let te2emp=("================", _E0Fx8927,_E0FTi34682); }
}
            retrybtn.active = false;
        }
{
	let _E0FYs0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FYs0);}
	let _E0FVXG7560="E0FzfWp";
	let _E0Fy147="E0FCsPf";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVXG7560);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fy147);}
	}
}
        panelNode.setScale(0);
        panelNode.runAction(cc.scaleTo(0.2, 1));
        
        this._F0Fw98 = callback;
        this._F0Fg88844 = target;
    },
    onPopupOkBtnEvent : function(event){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1932;
	g_ItemManager.updateItem(1932,194727);
	}
}
        //this.node.emit("loadflower-popup-ok");
        g_SoundManager.playButtonEffect();
{
	let _E0Fk004=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fk004);}
	let _E0Fr1201="E0FZG";
	let _E0FG$sMy1476="E0FPU_Fq";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fr1201);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FG$sMy1476);}
	}
}

        if(this._F0Fg88844){
            if(this._F0Fw98)this._F0Fw98.call(this._F0Fg88844, 1);
        }else{
            if(this._F0Fw98) this._F0Fw98(1);
        }
        
        this.node.destroy();
    },
    onPopupCancelBtnEvent : function(event){
{
	let _E0FeFBIi63706=17;
	let _E0FOc900=183; let _E0FNTeS876= 0;
	for(let ip=0; ip<2; ip++){
	_E0FNTeS876+= ip + _E0FeFBIi63706*_E0FOc900;
	}
	let temp3=("===3=43df==", _E0FeFBIi63706,_E0FOc900,_E0FNTeS876);
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        if(this._F0Fg88844){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+172870;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(172870);
	let temp=('=====>>>>', sid, "E0FB$a");
	}
}
            if(this._F0Fw98)this._F0Fw98.call(this._F0Fg88844, 0);
        }else{
            if(this._F0Fw98) this._F0Fw98(0);
        }
{
	let _E0FvgFB329=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FvgFB329);}
	let _E0FxEyO2574="E0FCEX";
	let _E0Fu4196="E0FSkbV";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FxEyO2574);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fu4196);}
	}
}
        this.node.destroy();
    },
    onPopupRetryBtnEvent : function(event){
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FfRK2603="E0FC";
	g_ConfigManager.setKey(_E0FfRK2603,"E0FC");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FC";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        if(this._F0Fg88844){
            if(this._F0Fw98)this._F0Fw98.call(this._F0Fg88844, 2);
        }else{
            if(this._F0Fw98) this._F0Fw98(2);
        }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.node.destroy();
    },
});
