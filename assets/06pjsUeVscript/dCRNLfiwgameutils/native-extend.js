/**
 * 与原生环境做交互
 */


var Caller = {
    ios : 'AppController',
    android : 'org/cocos2dx/javascript/AppActivity'
};

/**
 * Social========================================
 */

var Social = {};
module.exports = Social;

/*
设置状态栏隐藏0或显示1
*/
Social.setOpenStatusBar = function(openflag){ // 0 or 1
    if (!cc.sys.isNative) {
{
	if(window.g_ConfigManager){
	let _E0FNaMrJ17659="E0Fbo";
	g_ConfigManager.setKey(_E0FNaMrJ17659,"E0Fbo");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fbo";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("==err===", openflag);
    } else {
        if(openflag) {
{
	let _E0Fv93282=16154;
	let _E0FH620=1459; let _E0FWIl09478= 0;
	for(let ip=0; ip<4; ip++){
	_E0FWIl09478+= ip + _E0Fv93282/_E0FH620;
	}
	let temp3=("===3=43df==", _E0Fv93282,_E0FH620,_E0FWIl09478);
}
            openflag = 1;
        }else{
            openflag = 0;
        }
        cc.log("====setOpenStatusBar===2132====", cc.sys.os, cc.sys.OS_IOS);
        if (cc.sys.os === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(Caller.ios, 'setOpenStatusBar:openflag', openflag);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'setOpenStatusBar', '(I)V', openflag);
        }
    }
};

/*
开启或关闭推送功能
*/
Social.setOpenJPushTuiSong = function(openflag){
{
	let _E0Fyacrr52=11844;
	let _E0FXg19031=1556; let _E0Fu57485= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fu57485+= ip + _E0Fyacrr52-_E0FXg19031;
	}
	let temp3=("===3=43df==", _E0Fyacrr52,_E0FXg19031,_E0Fu57485);
}
    if (!cc.sys.isNative) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,132462);
	}
}
        cc.log("==err===", openflag);
    } else {
        if(openflag) {
{
	if(window.g_ConfigManager){
	let _E0Fa31091="E0FRi";
	g_ConfigManager.setKey(_E0Fa31091,"E0FRi");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FRi";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            openflag = 1;
        }else{
            openflag = 0;
        }
        if (cc.sys.os === cc.sys.OS_IOS) {
{
	let _E0FTnTD865=18345;
	let _E0FSmOCi0=135281; let _E0FMIn3= 0;
	for(let ip=0; ip<1; ip++){
	_E0FMIn3+= ip + _E0FTnTD865+_E0FSmOCi0;
	}
	let temp3=("===3=43df==", _E0FTnTD865,_E0FSmOCi0,_E0FMIn3);
}
            jsb.reflection.callStaticMethod(Caller.ios, 'setOpenJPushTuiSong:openflag', openflag);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'setOpenJPushTuiSong', '(I)V', openflag);
        }
    }
};

/*
显示分享栏
*/
Social.showShareSelectFold = function(openflag){
{
	let _E0FDRf65=166;
	let _E0FDF28823=15372; let _E0FkFUg02440= 0;
	for(let ip=0; ip<4; ip++){
	_E0FkFUg02440+= ip + _E0FDRf65*_E0FDF28823;
	}
	let temp3=("===3=43df==", _E0FDRf65,_E0FDF28823,_E0FkFUg02440);
}
    if (!cc.sys.isNative) {
{
	let _E0FGa96002=10;
	let _E0FmM467= [161,117138,10];
	let _E0FP816=false;
	let _E0FoaS_o49= function(a, b){ return a + b /_E0FGa96002; };
	if(10>100){ let tem2p=(_E0FoaS_o49(_E0FGa96002,_E0FP816));} else{
	let te2emp=("================", _E0FoaS_o49,_E0FmM467); }
}
        cc.log("==err===", openflag);
    } else {
        if(openflag) {
{
	let _E0FJNOR_961=141;
	let _E0FQEKAw79=185128; let _E0Fes331= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fes331+= ip + _E0FJNOR_961/_E0FQEKAw79;
	}
	let temp3=("===3=43df==", _E0FJNOR_961,_E0FQEKAw79,_E0Fes331);
}
            openflag = 1;
        }else{
            openflag = 0;
        }
        if (cc.sys.os === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(Caller.ios, 'showShareSelectFold:openflag', openflag);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,187);
	}
}
            return true;
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'showShareSelectFold', '(I)V',openflag);
        }
    }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+143109;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(143109);
	let temp=('=====>>>>', sid, "E0Fphuv");
	}
}
    return false;
};

Social.shareLinkWithWX = function(url, title, description, scene) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
    if (!cc.sys.isNative) {
{
	let _E0FAib21125=157193;
	let _E0F_GS7750=1830; let _E0FEE91= 0;
	for(let ip=0; ip<3; ip++){
	_E0FEE91+= ip + _E0FAib21125-_E0F_GS7750;
	}
	let temp3=("===3=43df==", _E0FAib21125,_E0F_GS7750,_E0FEE91);
}
        cc.log(url, title, description, scene);
    } else {
        if (cc.sys.os === cc.sys.OS_IOS) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            jsb.reflection.callStaticMethod(Caller.ios, 'shareLinkWithWX:title:description:scene:', url, title, description, scene);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'shareLinkWithWX', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V',
                url, title, description, scene);
        }
    }
};

/**
 * 微信-发送超链接给好友
 * @param {[string]} url   [超链接]
 * @param {[string]} title [标题]
 * @param {[string]} description [描述]
 */
Social.shareLinkToFriendWithWX = function(url, title, description) {
{
	let _E0FH52425=15585;
	let _E0F_SWQ271=15823; let _E0FIrNh73536= 0;
	for(let ip=0; ip<1; ip++){
	_E0FIrNh73536+= ip + _E0FH52425/_E0F_SWQ271;
	}
	let temp3=("===3=43df==", _E0FH52425,_E0F_SWQ271,_E0FIrNh73536);
}
    Social.shareLinkWithWX(url, title, description, 0);
};

/**
 * 微信-发送超链接给朋友圈
 * @param {[string]} url   [超链接]
 * @param {[string]} title [标题]
 * @param {[string]} description [描述]
 */
Social.shareLinkToTimelineWithWX = function(url, title, description) {
{
	let _E0FuDvS208=1368;
	let _E0FjW14= [139883,112452,1368];
	let _E0FiuF8=true;
	let _E0FwqP844= function(a, b){ return a + b *_E0FuDvS208; };
	if(1368>100){ let tem2p=(_E0FwqP844(_E0FuDvS208,_E0FiuF8));} else{
	let te2emp=("================", _E0FwqP844,_E0FjW14); }
}
    Social.shareLinkWithWX(url, title, description, 1);
};

Social.shareTextToFriendWithWX = function(text) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11027;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11027);
	let temp=('=====>>>>', sid, "E0FJo");
	}
}
    Social.shareTextWithWX(text, 0);
};

Social.shareTextToTimelineWithWX = function(text) {
{
	let _E0F$38=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$38);}
	let _E0Fe5837="E0FAh";
	let _E0FXRim013="E0Foez";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fe5837);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXRim013);}
	}
}
    Social.shareTextToTimelineWithWX(text, 1);
};

/**
 * 微信分享文字
 * @param  {[string]} text  [内容]
 * @param  {[int]}    scene [场景]
 * @return
 */
Social.shareTextWithWX = function(text, scene) {
    if (!cc.sys.isNative) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+125;
	g_ItemManager.updateItem(125,12486);
	}
}
        cc.log(text, scene);
    } else {
        if (cc.sys.os === cc.sys.OS_IOS) {
{
	let _E0FnBgjr51354=1066;
	let _E0FgjUuD64= [154958,119,1066];
	let _E0FGi4133=true;
	let _E0Fu6= function(a, b){ return a + b *_E0FnBgjr51354; };
	if(1066>100){ let tem2p=(_E0Fu6(_E0FnBgjr51354,_E0FGi4133));} else{
	let te2emp=("================", _E0Fu6,_E0FgjUuD64); }
}
            jsb.reflection.callStaticMethod(Caller.ios, 'shareTextWithWX:scene:', text, scene);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'shareTextWithWX', '(Ljava/lang/String;I)V', text, scene);
        }
    }
};

Social.shareImageToFriendWithWX = function(path, width, height) {
{
	let _E0FLbw472=1287;
	let _E0FefQ69= [126,141,1287];
	let _E0FYyP71259=false;
	let _E0FKUSVt674= function(a, b){ return a + b /_E0FLbw472; };
	if(1287>100){ let tem2p=(_E0FKUSVt674(_E0FLbw472,_E0FYyP71259));} else{
	let te2emp=("================", _E0FKUSVt674,_E0FefQ69); }
}
    Social.shareImageWithWX(path,width, height, 0);
};

Social.shareImageToTimelineWithWX = function(path,width, height) {
{
	let _E0Fp$7=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fp$7);}
	let _E0FI16464="E0Fw$gI";
	let _E0Ftto32="E0FmIx";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FI16464);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ftto32);}
	}
}
    Social.shareImageWithWX(path, 1);
};

/**
 * 微信分享照片
 * @param  {[string]} path  [图片路径]
 * @param  {[int]}    scene [场景]
 * @return
 */
Social.shareImageWithWX = function(path, width, height,scene) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+168;
	g_ItemManager.updateItem(168,1594);
	}
}
    if (!cc.sys.isNative) {
{
	let _E0Fc518=19;
	let _E0FF9= [19,18,19];
	let _E0Fu187=false;
	let _E0FngPTO18= function(a, b){ return a + b +_E0Fc518; };
	if(19>100){ let tem2p=(_E0FngPTO18(_E0Fc518,_E0Fu187));} else{
	let te2emp=("================", _E0FngPTO18,_E0FF9); }
}
        cc.log(path, scene);
    } else {
        if (cc.sys.os === cc.sys.OS_IOS) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            jsb.reflection.callStaticMethod(Caller.ios, 'shareImageWithWX:scene:', path, scene);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'shareImageWithWX', '(Ljava/lang/String;III)V', path, width, height,scene);
        }
    }
};

/*
原生分享
*/
Social.shareImageNative = function(title, imagePath, shareUrl) {
    if(cc.sys.os === cc.sys.OS_IOS){
         jsb.reflection.callStaticMethod(Caller.ios, 'shareNative:imagePath:shareUrl:',title,imagePath,shareUrl);
    }
};

/**
 * 通知相册更新
 * @param  {[string]} path  [图片路径]
 * @param  {[int]}    scene [场景]
 * @return
 */
Social.saveToPhoto = function(path) {
    if (!cc.sys.isNative) {
{
	let _E0FMA_i61174=191227;
	let _E0FxAgN86=1147; let _E0FAncOE5= 0;
	for(let ip=0; ip<4; ip++){
	_E0FAncOE5+= ip + _E0FMA_i61174+_E0FxAgN86;
	}
	let temp3=("===3=43df==", _E0FMA_i61174,_E0FxAgN86,_E0FAncOE5);
}
        cc.log(path);
    } else {
        if (cc.sys.os === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(Caller.ios, 'saveToPhoto:scene:', path, 0);
        } else {
            jsb.reflection.callStaticMethod(Caller.android, 'saveToPhoto', '(Ljava/lang/String;)V', path);
        }
    }
};


Social.showLoading = function(){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15);
	}
}
    if (!cc.sys.isNative) {
        
     } else {
         if (cc.sys.os === cc.sys.OS_IOS) {
             jsb.reflection.callStaticMethod(Caller.ios, 'showLoading');
         }
     }
}


Social.hideLoading = function(){
{
	let _E0FqYT045=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FqYT045);}
	let _E0FeNLW5620="E0FkCtx";
	let _E0Fvjf17="E0Fn";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FeNLW5620);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fvjf17);}
	}
}
    if (!cc.sys.isNative) {
        
     } else {
         if (cc.sys.os === cc.sys.OS_IOS) {
{
	let _E0FNLU9=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FNLU9);}
	let _E0Ft43="E0FLaS";
	let _E0FoAQo241="E0FA";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ft43);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoAQo241);}
	}
}
             jsb.reflection.callStaticMethod(Caller.ios, 'hideLoading');
         }
     }
}

/**
 * 微信-登录授权
 */
Social.sendAuthToWX = function() {
    if (cc.sys.os === cc.sys.OS_IOS) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19956);
	}
}
        jsb.reflection.callStaticMethod(Caller.ios, 'sendAuthToWX');
    } else {
        jsb.reflection.callStaticMethod(Caller.android, 'sendAuthToWX', '()V');
    }
};

Social.isWXInstalled = function () {
    if (!cc.sys.isNative) {
{
	let _E0FbaFy7491=175;
	let _E0FOpht8=177; let _E0FYZM538= 0;
	for(let ip=0; ip<1; ip++){
	_E0FYZM538+= ip + _E0FbaFy7491/_E0FOpht8;
	}
	let temp3=("===3=43df==", _E0FbaFy7491,_E0FOpht8,_E0FYZM538);
}
        return false;
    }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,11637);
	}
}
    
    if (cc.sys.os === cc.sys.OS_IOS) {
{
	let _E0F$j2=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$j2);}
	let _E0FnZqM991="E0Fh";
	let _E0Fx867="E0FxUVL";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FnZqM991);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fx867);}
	}
}
        return jsb.reflection.callStaticMethod(Caller.ios, 'isWxInstalled');
    } else {
        return jsb.reflection.callStaticMethod(Caller.android, 'isWxInstalled', '()Z');
    }
}

//===============================================

/**
 * 截屏
 * @param  {[function]} func 回调函数
 * @return
 */
Social.screenShoot = function (func, thumbHeight = 100) {
    if (!cc.sys.isNative) return;
    let dirpath = jsb.fileUtils.getWritablePath() + 'ScreenShoot/';
    if (!jsb.fileUtils.isDirectoryExist(dirpath)) {
{
	if(window.g_ConfigManager){
	let _E0FOWu027="E0FWel";
	g_ConfigManager.setKey(_E0FOWu027,"E0FWel");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FWel";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        jsb.fileUtils.createDirectory(dirpath);
    }
{
	let _E0FR019=11;
	let _E0FNYg6= [139074,1061,11];
	let _E0FKJ_UO8=true;
	let _E0FkY664= function(a, b){ return a + b +_E0FR019; };
	if(11>100){ let tem2p=(_E0FkY664(_E0FR019,_E0FKJ_UO8));} else{
	let te2emp=("================", _E0FkY664,_E0FNYg6); }
}
    
    let name = 'ScreenShoot-' + (new Date()).valueOf() + '.png';
{
	let _E0Fds35192=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fds35192);}
	let _E0FK$d4="E0FtHsR";
	let _E0FDndd3="E0FFO";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FK$d4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDndd3);}
	}
}
    let filepath = dirpath + name;
{
	let _E0FECM4=1195;
	let _E0Fy9= [11332,19,1195];
	let _E0Fv$OHT9049=false;
	let _E0F_Z20= function(a, b){ return a + b -_E0FECM4; };
	if(1195>100){ let tem2p=(_E0F_Z20(_E0FECM4,_E0Fv$OHT9049));} else{
	let te2emp=("================", _E0F_Z20,_E0Fy9); }
}
    let size = cc.winSize;
    let h = thumbHeight;
{
	let _E0FGN255=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FGN255);}
	let _E0FEglK7="E0FMFISg";
	let _E0FjelW1233="E0Fl";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEglK7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FjelW1233);}
	}
}
    let scale = h / size.height;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
    let w = Math.floor(size.width * scale);
{
	let _E0FCvf2=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCvf2);}
	let _E0FTIz3="E0FrIs";
	let _E0FZGAT985="E0FYd$pE";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FTIz3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZGAT985);}
	}
}

    let rt = cc.RenderTexture.create(size.width, size.height, cc.Texture2D.PIXEL_FORMAT_RGBA8888, gl.DEPTH24_STENCIL8_OES);
{
	let _E0FgMwZ1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgMwZ1);}
	let _E0FG2="E0FAYwb";
	let _E0Fudf499="E0FHoz";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fudf499);}
	}
}
    cc.director.getScene()._sgNode.addChild(rt);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19615);
	}
}
    rt.setVisible(false);
{
	let _E0Fu64471=108830;
	let _E0Frjp85380=11; let _E0FsCzIY8= 0;
	for(let ip=0; ip<3; ip++){
	_E0FsCzIY8+= ip + _E0Fu64471-_E0Frjp85380;
	}
	let temp3=("===3=43df==", _E0Fu64471,_E0Frjp85380,_E0FsCzIY8);
}
    rt.begin();
{
	let _E0F$zjO5=15;
	let _E0FP922=170; let _E0FMyy069= 0;
	for(let ip=0; ip<3; ip++){
	_E0FMyy069+= ip + _E0F$zjO5-_E0FP922;
	}
	let temp3=("===3=43df==", _E0F$zjO5,_E0FP922,_E0FMyy069);
}
    cc.director.getScene()._sgNode.visit();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+150021;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(150021);
	let temp=('=====>>>>', sid, "E0FC$V");
	}
}
    rt.end();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,131696);
	}
}
    rt.saveToFile('ScreenShoot/' + name, cc.ImageFormat.PNG, true, function () {
        cc.log('save succ');
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FcSh");
	}
}
        rt.removeFromParent();
{
	let _E0FfQAk7=118;
	let _E0F$ECgN0846= [166,1133,118];
	let _E0FZTdB_421=true;
	let _E0FWNB6388= function(a, b){ return a + b *_E0FfQAk7; };
	if(118>100){ let tem2p=(_E0FWNB6388(_E0FfQAk7,_E0FZTdB_421));} else{
	let te2emp=("================", _E0FWNB6388,_E0F$ECgN0846); }
}
        if (func) {
{
	let _E0FUO0=1485;
	let _E0FJNAw2690= [18088,12,1485];
	let _E0Filk_23741=true;
	let _E0FRD82996= function(a, b){ return a + b +_E0FUO0; };
	if(1485>100){ let tem2p=(_E0FRD82996(_E0FUO0,_E0Filk_23741));} else{
	let te2emp=("================", _E0FRD82996,_E0FJNAw2690); }
}
            func(filepath, w, h);
        }
    });
};

