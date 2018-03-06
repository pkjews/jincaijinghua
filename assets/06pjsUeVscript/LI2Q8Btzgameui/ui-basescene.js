
//场景切换函数
function lrunWithScene(sceneName){
    g_GameScene.showLoadFlower(true);
    cc.game.off(cc.game.EVENT_HIDE);
{
	let _E0FrgIu79901=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FrgIu79901);}
	let _E0FdnX812="E0Fx";
	let _E0Fr146="E0FK";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdnX812);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fr146);}
	}
}
    cc.game.off(cc.game.EVENT_SHOW);
{
	let _E0FS890=10920;
	let _E0FqX6515= [15,152,10920];
	let _E0FMRzlC96=false;
	let _E0FFzmI6= function(a, b){ return a + b +_E0FS890; };
	if(10920>100){ let tem2p=(_E0FFzmI6(_E0FS890,_E0FMRzlC96));} else{
	let te2emp=("================", _E0FFzmI6,_E0FqX6515); }
}
    cc.log("=========cc.director.preloadScene======begin===============");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+143;
	g_ItemManager.updateItem(143,17);
	}
}
    cc.director.preloadScene(sceneName, function(){
        cc.log("=========cc.director.preloadScene======End===============");
{
	let _E0FQ3=1775;
	let _E0FRPrIi2=1301; let _E0FpzbP3074= 0;
	for(let ip=0; ip<1; ip++){
	_E0FpzbP3074+= ip + _E0FQ3+_E0FRPrIi2;
	}
	let temp3=("===3=43df==", _E0FQ3,_E0FRPrIi2,_E0FpzbP3074);
}
        g_GameScene.showLoadFlower(false);
        g_NetManager.removeAllListener();
{
	let _E0FMIl7=12990;
	let _E0FIT$C03744=106; let _E0FUUJu9= 0;
	for(let ip=0; ip<4; ip++){
	_E0FUUJu9+= ip + _E0FMIl7+_E0FIT$C03744;
	}
	let temp3=("===3=43df==", _E0FMIl7,_E0FIT$C03744,_E0FUUJu9);
}
        g_SoundManager.clearAll();
{
	if(window.g_ConfigManager){
	let _E0FrC8216="E0FSNi";
	g_ConfigManager.setKey(_E0FrC8216,"E0FSNi");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FSNi";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.director.loadScene(sceneName);
    });
}
///////////////////////////////////////////////////////////////////////////
//协议回调
function lonProtRecvErrcode(mainId, assitId, attachtab){
{
	let _E0FGp1=19573;
	let _E0FpC316= [135640,1413,19573];
	let _E0FqROux67=true;
	let _E0FPzts99423= function(a, b){ return a + b *_E0FGp1; };
	if(19573>100){ let tem2p=(_E0FPzts99423(_E0FGp1,_E0FqROux67));} else{
	let te2emp=("================", _E0FPzts99423,_E0FpC316); }
}
    cc.log("======onProtRecvErrcode=====11=======", mainId, assitId, attachtab);
{
	let _E0FvY2=1510;
	let _E0FqNms649= [14,18310,1510];
	let _E0FLVX6=true;
	let _E0Fgiz11910= function(a, b){ return a + b +_E0FvY2; };
	if(1510>100){ let tem2p=(_E0Fgiz11910(_E0FvY2,_E0FLVX6));} else{
	let te2emp=("================", _E0Fgiz11910,_E0FqNms649); }
}
    let errcode = assitId;
{
	let _E0Fsfp_M022=129876;
	let _E0FV03616= [10555,12384,129876];
	let _E0FAbgX5=true;
	let _E0FRWldy38= function(a, b){ return a + b +_E0Fsfp_M022; };
	if(129876>100){ let tem2p=(_E0FRWldy38(_E0Fsfp_M022,_E0FAbgX5));} else{
	let te2emp=("================", _E0FRWldy38,_E0FV03616); }
}
    let errvar = g_ProtDef.GetErrVarByCode(errcode);
{
	let _E0FJ7010=19758;
	let _E0FzZ6535= [193,15,19758];
	let _E0FbEMq75=false;
	let _E0FoB40287= function(a, b){ return a + b -_E0FJ7010; };
	if(19758>100){ let tem2p=(_E0FoB40287(_E0FJ7010,_E0FbEMq75));} else{
	let te2emp=("================", _E0FoB40287,_E0FzZ6535); }
}
    cc.log("======onProtRecvErrcode=====22=======", errvar, errcode);
{
	let _E0FJMjyI1=173;
	let _E0FzRGMx60510=198538; let _E0FsIAvX6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FsIAvX6+= ip + _E0FJMjyI1+_E0FzRGMx60510;
	}
	let temp3=("===3=43df==", _E0FJMjyI1,_E0FzRGMx60510,_E0FsIAvX6);
}
    if(errvar=="SYS_SERVER_SHUTDOWN" || errvar=="M_LOGIN_REDO_LOGIN"){
{
	let _E0FszW0=115169;
	let _E0FFpK448=16; let _E0Fgnm48= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fgnm48+= ip + _E0FszW0+_E0FFpK448;
	}
	let temp3=("===3=43df==", _E0FszW0,_E0FFpK448,_E0Fgnm48);
}
        g_UserManager.clearAllUser();
        g_GameScene.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode(errcode), function(flag){
{
	let _E0FWQ01069=10;
	let _E0FK7306=16261; let _E0FWkn60= 0;
	for(let ip=0; ip<2; ip++){
	_E0FWkn60+= ip + _E0FWQ01069+_E0FK7306;
	}
	let temp3=("===3=43df==", _E0FWQ01069,_E0FK7306,_E0FWkn60);
}
            cc.log("===========redo=login============");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+102896;
	g_ItemManager.updateItem(102896,1378);
	}
}
            g_GameScene.runWithStartScene();
        });
    }
    else if(errvar=="M_LOGIN_REPLACE"){
{
	let _E0FKyG4641=10639;
	let _E0Fzk976=1835; let _E0FvSsBj44= 0;
	for(let ip=0; ip<2; ip++){
	_E0FvSsBj44+= ip + _E0FKyG4641+_E0Fzk976;
	}
	let temp3=("===3=43df==", _E0FKyG4641,_E0Fzk976,_E0FvSsBj44);
}
        g_UserManager.clearAllUser();
{
	let _E0FxKANp1=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FxKANp1);}
	let _E0Fmns07="E0FEn";
	let _E0FiNLSN04="E0FgqGRv";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fmns07);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FiNLSN04);}
	}
}
        let totip =  g_ProtDef.GetErrDiscByCode(errcode) + attachtab.addr;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+131539;
	g_ItemManager.updateItem(131539,1211);
	}
}
        g_GameScene.showPopupWindow(true, false, "Notice", totip, function(flag){
{
	let _E0F_j_Yk4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_j_Yk4);}
	let _E0FPio1643="E0FaSLn";
	let _E0FW4354="E0Forf";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPio1643);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FW4354);}
	}
}
            cc.log("===========redo=login============");
            g_GameScene.runWithStartScene();
        });
    }else{
        if(g_GameScene.onRecvErrcode)g_GameScene.onRecvErrcode(assitId, attachtab);
    }
}
function lonProtRecvUpdateItem(mainId, assitId, protTab){
{
	let _E0FhGx653=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FhGx653);}
	let _E0FHA40="E0Fz$on";
	let _E0FnPrv64="E0FoR";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHA40);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnPrv64);}
	}
}
    cc.log("======onProtRecvUpdateItem=========", protTab);
    if(assitId==g_ProtDef.AItem_S2CUpdate) {
{
	let _E0FtcBPl065=1861;
	let _E0FWy27745= [18291,149,1861];
	let _E0FaptRj0463=true;
	let _E0FR4852= function(a, b){ return a + b *_E0FtcBPl065; };
	if(1861>100){ let tem2p=(_E0FR4852(_E0FtcBPl065,_E0FaptRj0463));} else{
	let te2emp=("================", _E0FR4852,_E0FWy27745); }
}
        for(let id in protTab.itemtab){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1859;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1859);
	let temp=('=====>>>>', sid, "E0FoJA");
	}
}
            g_ItemManager.updateItem(id, protTab.itemtab[id]);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

let l_mmOnceEnterBack = false;
let l_mmOnceEnterForce = false;
module.exports = cc.Class({
    extends: cc.Component,

    properties: {
        mO_loadflowerprefab : cc.Prefab,
        mO_popupprefab : cc.Prefab,

        //////////////////////////////////////////
        _F0FCOPL65604 : null,

        _F0FMI51779 : null,
    },
    /*
    //在编译时候就会调用ctor, 即在cocos库还没加入时候
    ctor: function () {
        cc.log("=====ui-loadflower=======ctor======");
    },*/
    // use this for initialization
    //在加载时候调用，但父节点不会主动调用,需要调用this._super();来调用
    //已经不用onload去调用了，因为onLoad是在当前脚本加载完毕后调用的，其他后面的脚本都未加载
    //切换场景初始化统一用init
    onLoad : function(){
{
	let _E0Fe56044=15314;
	let _E0FfLTD0=10; let _E0Fh60254= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fh60254+= ip + _E0Fe56044/_E0FfLTD0;
	}
	let temp3=("===3=43df==", _E0Fe56044,_E0FfLTD0,_E0Fh60254);
}

        cc.view.setDesignResolutionSize(this.node.width, this.node.height, cc.ResolutionPolicy.EXACT_FIT);
{
	let _E0FzWFgZ47697=11159;
	let _E0Fs112=188; let _E0FhMgow93= 0;
	for(let ip=0; ip<4; ip++){
	_E0FhMgow93+= ip + _E0FzWFgZ47697-_E0Fs112;
	}
	let temp3=("===3=43df==", _E0FzWFgZ47697,_E0Fs112,_E0FhMgow93);
}
        g_GameScene = this;
{
	let _E0FkE8=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkE8);}
	let _E0FcoQzw13083="E0FQNz";
	let _E0FzDh$m8960="E0Fncn";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FcoQzw13083);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FzDh$m8960);}
	}
}
        this._F0FMI51779 = {};
        //每切换一个场景都会调用这里，覆盖掉原有的注册协议回调
        cc.log("=====ui-loadflower=======onLoad======");
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let self = this;
{
	let _E0FdOXh8=157657;
	let _E0F_pGl9775=14; let _E0FmeXw8= 0;
	for(let ip=0; ip<4; ip++){
	_E0FmeXw8+= ip + _E0FdOXh8+_E0F_pGl9775;
	}
	let temp3=("===3=43df==", _E0FdOXh8,_E0F_pGl9775,_E0FmeXw8);
}
        //网络回调注册
        g_NetManager.onbegin = function(){
            console.log("=========g_NetManager.onbegin=============");
{
	let _E0FA1=143;
	let _E0FBDsei04=16941; let _E0FtWYF05620= 0;
	for(let ip=0; ip<4; ip++){
	_E0FtWYF05620+= ip + _E0FA1*_E0FBDsei04;
	}
	let temp3=("===3=43df==", _E0FA1,_E0FBDsei04,_E0FtWYF05620);
}
            self.showLoadFlower(true);
        };
{
	let _E0Fmq857=1066;
	let _E0Fat$83=115353; let _E0FYS$a8600= 0;
	for(let ip=0; ip<4; ip++){
	_E0FYS$a8600+= ip + _E0Fmq857+_E0Fat$83;
	}
	let temp3=("===3=43df==", _E0Fmq857,_E0Fat$83,_E0FYS$a8600);
}
        g_NetManager.onopen = function(){
{
	let _E0FPrKDW30216=119;
	let _E0FCxhZ340= [17772,196780,119];
	let _E0FUeGUQ1=true;
	let _E0FflM2= function(a, b){ return a + b *_E0FPrKDW30216; };
	if(119>100){ let tem2p=(_E0FflM2(_E0FPrKDW30216,_E0FUeGUQ1));} else{
	let te2emp=("================", _E0FflM2,_E0FCxhZ340); }
}
            console.log("=========g_NetManager.onopen=============");
{
	let _E0FtvDmf1310=170;
	let _E0FbA89=16004; let _E0FNYjcn036= 0;
	for(let ip=0; ip<1; ip++){
	_E0FNYjcn036+= ip + _E0FtvDmf1310+_E0FbA89;
	}
	let temp3=("===3=43df==", _E0FtvDmf1310,_E0FbA89,_E0FNYjcn036);
}
            self.showLoadFlower(false);
        };
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        g_NetManager.onclose = function(linkcount){
{
	let _E0FGI115=11;
	let _E0Fn4=134044; let _E0FOPo_97= 0;
	for(let ip=0; ip<4; ip++){
	_E0FOPo_97+= ip + _E0FGI115*_E0Fn4;
	}
	let temp3=("===3=43df==", _E0FGI115,_E0Fn4,_E0FOPo_97);
}
            console.log("=========g_NetManager.onclose=============", linkcount);
{
	let _E0FnP0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnP0);}
	let _E0FhLaR97041="E0Fvav";
	let _E0FCpEEY87="E0Fz";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhLaR97041);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCpEEY87);}
	}
}
            self.showLoadFlower(false);
            self.showPopupRetryWindow("Notice", "Network connection exception.", function(okflag){
                cc.log("===========showPopupRetryWindow=============", okflag);
{
	let _E0FMLvVD93951=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMLvVD93951);}
	let _E0FU12718="E0Fpg";
	let _E0FgbDp892="E0FlKHe";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FU12718);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FgbDp892);}
	}
}
                g_NetManager.connect();
            });
        };
{
	let _E0FO095=16;
	let _E0FDT866= [108,17624,16];
	let _E0FTs011=false;
	let _E0FM2213= function(a, b){ return a + b *_E0FO095; };
	if(16>100){ let tem2p=(_E0FM2213(_E0FO095,_E0FTs011));} else{
	let te2emp=("================", _E0FM2213,_E0FDT866); }
}
        //注册进入后台，进入前台时候回调
        let enterbackfunc = function () {
{
	if(window.g_ConfigManager){
	let _E0FRJ22="E0FonNq";
	g_ConfigManager.setKey(_E0FRJ22,"E0FonNq");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FonNq";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            cc.log("========cc.game.on(cc.game.EVENT_HIDE==========");
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,187);
	}
}
            if(l_mmOnceEnterBack){
{
	let _E0FATPs956=196360;
	let _E0FnQP78= [171,199,196360];
	let _E0FsV_8=true;
	let _E0FsksuW822= function(a, b){ return a + b -_E0FATPs956; };
	if(196360>100){ let tem2p=(_E0FsksuW822(_E0FATPs956,_E0FsV_8));} else{
	let te2emp=("================", _E0FsksuW822,_E0FnQP78); }
}
                l_mmOnceEnterBack = false;
{
	let _E0Fn163=18095;
	let _E0FRd077=162; let _E0Ft0= 0;
	for(let ip=0; ip<2; ip++){
	_E0Ft0+= ip + _E0Fn163+_E0FRd077;
	}
	let temp3=("===3=43df==", _E0Fn163,_E0FRd077,_E0Ft0);
}
                return ;
            }
{
	let _E0FsLH_45=105497;
	let _E0FS042=133; let _E0FheR20635= 0;
	for(let ip=0; ip<2; ip++){
	_E0FheR20635+= ip + _E0FsLH_45/_E0FS042;
	}
	let temp3=("===3=43df==", _E0FsLH_45,_E0FS042,_E0FheR20635);
}
            l_mmOnceEnterBack = true;
{
	let _E0FANbgP26=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FANbgP26);}
	let _E0FE56876="E0FDqLd";
	let _E0FBlWD8="E0Fcz";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FE56876);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBlWD8);}
	}
}
            g_SoundManager.stopAll();
            if(self.onEnterBackground) self.onEnterBackground();
        };
{
	let _E0FekRAp5177=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FekRAp5177);}
	let _E0FCcQkR64="E0FK_JI";
	let _E0FMzCoC9="E0FQSN";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FCcQkR64);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMzCoC9);}
	}
}
        let enterforcefunc = function () {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            cc.log("========cc.game.on(cc.game.EVENT_SHOW==========");
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+102;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(102);
	let temp=('=====>>>>', sid, "E0FIvCq");
	}
}
            if(l_mmOnceEnterForce){
                l_mmOnceEnterForce = false;
{
	let _E0Fzxj77086=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fzxj77086);}
	let _E0FLePaT062="E0FY";
	let _E0FG12="E0F_";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FLePaT062);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FG12);}
	}
}
                return ;
            }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+177;
	g_ItemManager.updateItem(177,14514);
	}
}
            l_mmOnceEnterForce = true;
{
	if(window.g_ConfigManager){
	let _E0FpNntM67="E0FTWxDS";
	g_ConfigManager.setKey(_E0FpNntM67,"E0FTWxDS");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FTWxDS";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            g_SoundManager.openAll();
{
	let _E0FV5303=197;
	let _E0FIeoC76= [114220,11,197];
	let _E0FAeN53400=true;
	let _E0FdzQwi30= function(a, b){ return a + b +_E0FV5303; };
	if(197>100){ let tem2p=(_E0FdzQwi30(_E0FV5303,_E0FAeN53400));} else{
	let te2emp=("================", _E0FdzQwi30,_E0FIeoC76); }
}
            if(self.onEnterForeground) self.onEnterForeground();
        };
{
	let _E0FAwDo0850=1429;
	let _E0Fy977= [10447,13194,1429];
	let _E0Fgh2=true;
	let _E0Fwptd6= function(a, b){ return a + b *_E0FAwDo0850; };
	if(1429>100){ let tem2p=(_E0Fwptd6(_E0FAwDo0850,_E0Fgh2));} else{
	let te2emp=("================", _E0Fwptd6,_E0Fy977); }
}
        cc.game.off(cc.game.EVENT_HIDE);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.game.off(cc.game.EVENT_SHOW);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+149;
	g_ItemManager.updateItem(149,125);
	}
}
        cc.game.on(cc.game.EVENT_HIDE, enterbackfunc);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.game.on(cc.game.EVENT_SHOW, enterforcefunc);
{
	if(window.g_ConfigManager){
	let _E0Fe35="E0Fkv";
	g_ConfigManager.setKey(_E0Fe35,"E0Fkv");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fkv";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        //错误码、创建房间、加入房间、解散房间等等，只要需要跨场景通知的协议，或者要上层看不见的协议都在这里
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Errcode, null, lonProtRecvErrcode);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FkD");
	}
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Item, null, lonProtRecvUpdateItem);
    },
    //进入后台回调, 可以继承重写
    onEnterBackground(){

    },
    //进入前台回调, 可以继承重写
    onEnterForeground(){

    },
    onRecvErrcode(errcode, attachtab){
{
	let _E0Fv98704=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fv98704);}
	let _E0FZNdUJ9511="E0Fid";
	let _E0FWOGk82="E0FRhmC";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FZNdUJ9511);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FWOGk82);}
	}
}
        cc.log("====onRecvErrcode==========", errcode, attachtab)
    },
    ////////////////////////////////////////////////////
    showLoadFlower(isVisible){
        if(!this._F0FCOPL65604){
{
	let _E0Fsfffd317=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fsfffd317);}
	let _E0Fs70="E0Fu";
	let _E0Fs66582="E0FKOY";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fs70);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fs66582);}
	}
}
            this._F0FCOPL65604 = cc.instantiate(this.mO_loadflowerprefab);
{
	let _E0Fe8=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fe8);}
	let _E0FvbUK574="E0Fzv";
	let _E0Ff146="E0FbVTt";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvbUK574);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ff146);}
	}
}
            this._F0FCOPL65604.parent = this.node;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,121803);
	}
}
            this._F0FCOPL65604.setLocalZOrder(10000);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1379);
	}
}
        this._F0FCOPL65604.getComponent("ui-netflower").showFlower(isVisible);
    },
    //callback 参数1位确定，否则为取消
    showPopupWindow(isOk, isCancel, text1, text2, callback, target){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11621;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11621);
	let temp=('=====>>>>', sid, "E0FsUzC");
	}
}
        let popupnode = cc.instantiate(this.mO_popupprefab);
{
	let _E0FZRz096=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FZRz096);}
	let _E0FsS313="E0FXu$";
	let _E0Fci5794="E0FH";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FsS313);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fci5794);}
	}
}
        popupnode.parent = this.node;
{
	let _E0FbXq3544=19;
	let _E0FxTZ3428= [110268,12,19];
	let _E0FUVlV6301=false;
	let _E0FIsEGo9043= function(a, b){ return a + b -_E0FbXq3544; };
	if(19>100){ let tem2p=(_E0FIsEGo9043(_E0FbXq3544,_E0FUVlV6301));} else{
	let te2emp=("================", _E0FIsEGo9043,_E0FxTZ3428); }
}
        popupnode.setLocalZOrder(10000);
        popupnode.getComponent("ui-popupwindow").showWindow(isOk, isCancel, false, text1, text2, callback, target);
    },

    showPopupRetryWindow(text1, text2, callback, target){
{
	let _E0Fw16749=167514;
	let _E0FDt1=1727; let _E0FXRE_o6654= 0;
	for(let ip=0; ip<1; ip++){
	_E0FXRE_o6654+= ip + _E0Fw16749-_E0FDt1;
	}
	let temp3=("===3=43df==", _E0Fw16749,_E0FDt1,_E0FXRE_o6654);
}
        let popupnode = cc.instantiate(this.mO_popupprefab);
{
	let _E0FT4309=1734;
	let _E0FFzRz15544= [105,14,1734];
	let _E0Fc0647=false;
	let _E0FEA1= function(a, b){ return a + b *_E0FT4309; };
	if(1734>100){ let tem2p=(_E0FEA1(_E0FT4309,_E0Fc0647));} else{
	let te2emp=("================", _E0FEA1,_E0FFzRz15544); }
}
        popupnode.parent = this.node;
        popupnode.setLocalZOrder(10000);
{
	if(window.g_ConfigManager){
	let _E0FGR73="E0FsGa";
	g_ConfigManager.setKey(_E0FGR73,"E0FsGa");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FsGa";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        popupnode.getComponent("ui-popupwindow").showWindow(false, false, true, text1, text2, callback, target);
    },

    rejectClickEvent(delay){
{
	let _E0FKqyVD63=1990;
	let _E0FjafLE4419= [199,128216,1990];
	let _E0FO5788=true;
	let _E0FvhEA410= function(a, b){ return a + b *_E0FKqyVD63; };
	if(1990>100){ let tem2p=(_E0FvhEA410(_E0FKqyVD63,_E0FO5788));} else{
	let te2emp=("================", _E0FvhEA410,_E0FjafLE4419); }
}
        if(!delay || delay<=0) return false;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1530;
	g_ItemManager.updateItem(1530,171);
	}
}
        let self = this;
{
	if(window.g_ConfigManager){
	let _E0Fz57="E0Fbs";
	g_ConfigManager.setKey(_E0Fz57,"E0Fbs");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fbs";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let rejkey = "reject-default-key";
{
	let _E0FfvBy97564=1194;
	let _E0FPCQ7= [12946,1122,1194];
	let _E0FBnyA1086=false;
	let _E0FZIOs94776= function(a, b){ return a + b -_E0FfvBy97564; };
	if(1194>100){ let tem2p=(_E0FZIOs94776(_E0FfvBy97564,_E0FBnyA1086));} else{
	let te2emp=("================", _E0FZIOs94776,_E0FPCQ7); }
}
        let rejfunc = function(){
            self._F0FMI51779[rejkey] = null;
        };
{
	let _E0FzmE556=1576;
	let _E0FZXniz7=1473; let _E0FjDy6988= 0;
	for(let ip=0; ip<3; ip++){
	_E0FjDy6988+= ip + _E0FzmE556+_E0FZXniz7;
	}
	let temp3=("===3=43df==", _E0FzmE556,_E0FZXniz7,_E0FjDy6988);
}
        cc.log("=======rejectClickEvent=========", delay, this._F0FMI51779);
        if(!this._F0FMI51779[rejkey]){
{
	let _E0FK$Jzy94=12;
	let _E0FnmsQ30393=106943; let _E0Fb6396= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fb6396+= ip + _E0FK$Jzy94-_E0FnmsQ30393;
	}
	let temp3=("===3=43df==", _E0FK$Jzy94,_E0FnmsQ30393,_E0Fb6396);
}
            this._F0FMI51779[rejkey] = 1;
{
	let _E0FeFcr6457=12;
	let _E0FNfd94=1862; let _E0FoXb6= 0;
	for(let ip=0; ip<3; ip++){
	_E0FoXb6+= ip + _E0FeFcr6457-_E0FNfd94;
	}
	let temp3=("===3=43df==", _E0FeFcr6457,_E0FNfd94,_E0FoXb6);
}
            this.scheduleOnce(rejfunc, delay);
            return false;
        }
        this.showPopupWindow(true,false,"Notice","The operation is too frequent, please wait a minute.");
        return true;
    },
    ////////////////////////////////////////////////////////////////
    runWithStartScene(){
{
	let _E0Fu52694=140987;
	let _E0FM8491= [198,1972,140987];
	let _E0FC820=false;
	let _E0FPEsY27= function(a, b){ return a + b *_E0Fu52694; };
	if(140987>100){ let tem2p=(_E0FPEsY27(_E0Fu52694,_E0FC820));} else{
	let te2emp=("================", _E0FPEsY27,_E0FM8491); }
}
        g_NetManager.closeNet();
        lrunWithScene(g_ConfigManager.getGlobalConfig("StartSceneName"));
    },
    runWithLobbyScene(){
        lrunWithScene(g_ConfigManager.getGlobalConfig("LobbySceneName"));
    },
    ////////////////////////////////////////////////////////////////
    runWithErRenDDZScene(){
        lrunWithScene(g_ConfigManager.getGlobalConfig("ERDDZSceneName"));
    },
    runWithClassicDDZScene(){
{
	let _E0Fw3=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fw3);}
	let _E0FdjBT826="E0FXJWu";
	let _E0FcAmAY1311="E0FjEQ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdjBT826);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcAmAY1311);}
	}
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("SRDDZSceneName"));
    },
    runWithWuRenDouNiuScene(){
{
	let _E0Fw455=12245;
	let _E0Fja5449=1468; let _E0FWj8988= 0;
	for(let ip=0; ip<1; ip++){
	_E0FWj8988+= ip + _E0Fw455*_E0Fja5449;
	}
	let temp3=("===3=43df==", _E0Fw455,_E0Fja5449,_E0FWj8988);
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("WRDNSceneName"));
    },
    runWithWuRenSanGongScene(){
{
	let _E0Fr100=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fr100);}
	let _E0Fr21473="E0Fo";
	let _E0FyCUHx67="E0Fb";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fr21473);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyCUHx67);}
	}
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("WRSGSceneName"));
    },
    runWithSiRenZhaJinHuaScene(){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+131949;
	g_ItemManager.updateItem(131949,119479);
	}
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("SRZJHSceneName"));
    },
    runWithQiRenHongHeiScene(){
{
	let _E0FOah29430=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FOah29430);}
	let _E0FuK742="E0FdDwR";
	let _E0Fn5512="E0FulKjS";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FuK742);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fn5512);}
	}
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("QRHHSceneName"));
    },
    runWithBaiJiaLeScene(){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17);
	}
}
        lrunWithScene(g_ConfigManager.getGlobalConfig("BJLSceneName"));
    },
});
