let gameconfig = require("gameconfig");

cc.Class({
    extends: cc.Component,

    properties: {
        //所有根节点
        O_doudizhunode : cc.Node,
        O_douniunode : cc.Node,
        O_sangongnode : cc.Node,
        O_zhajinhuanode : cc.Node,
        O_hongheinode : cc.Node,
        O_baijialenode : cc.Node,

        //斗地主
        O_erddztoggleBtn : cc.Toggle,
        O_srddztoggleBtn : cc.Toggle,

        O_ddz8toggleBtn : cc.Toggle,
        O_ddz16toggleBtn : cc.Toggle,
        //斗牛
        O_dn8toggleBtn : cc.Toggle,
        O_dn16toggleBtn : cc.Toggle,
        O_dnwfQiangZhuang : cc.Toggle,
        O_dnwfLunZhuang : cc.Toggle,
        O_dnwfBaZhuang : cc.Toggle,
        //三公
        O_sg8toggleBtn : cc.Toggle,
        O_sg16toggleBtn : cc.Toggle,
        O_sgwfQiangZhuang : cc.Toggle,
        O_sgwfLunZhuang : cc.Toggle,
        O_sgwfBaZhuang : cc.Toggle,
        //扎金花
        O_zjh8toggleBtn : cc.Toggle,
        O_zjh16toggleBtn : cc.Toggle,
        O_zjhdizhuYi : cc.Toggle,
        O_zjhdizhuEr : cc.Toggle,
        O_zjhdizhuWu : cc.Toggle,
        //红黑
        O_hh8toggleBtn : cc.Toggle,
        O_hh16toggleBtn : cc.Toggle,
        O_hhdizhuYi : cc.Toggle,
        O_hhdizhuWu : cc.Toggle,
        
        //百家乐
        O_bjl8toggleBtn : cc.Toggle,
        O_bjl16toggleBtn : cc.Toggle,
        O_bjldizhuYi : cc.Toggle,
        O_bjldizhuWu : cc.Toggle,
        //////////////////////////////////////////////////////
        _F0FRf3197 : true,
        _F0FxXXz69 : null,
        _F0F_rR72993 : null,
        
        _F0FbWKS25 : 0, //选择斗牛玩法
        _F0FX1 : 0, //选择三公玩法
        _F0Fcq89216 : 0, //选择扎金花底分
        _F0FMtg54850 : 0, //选择红黑底分
        _F0FmsNY7569 : 0, //选择百家乐低分
    },

    // use this for initialization
    onLoad: function (data01, data02, data03) {
        cc.log("=======createroom===onload===", data01, data02, data03);
{
	let _E0FsTR18719=17640;
	let _E0Fbfh0= [13,15858,17640];
	let _E0Fc825=true;
	let _E0FvuzU38= function(a, b){ return a + b -_E0FsTR18719; };
	if(17640>100){ let tem2p=(_E0FvuzU38(_E0FsTR18719,_E0Fc825));} else{
	let te2emp=("================", _E0FvuzU38,_E0Fbfh0); }
}
        this._F0FRf3197 = true;
{
	let _E0FWw0=11;
	let _E0FGli1= [1807,14003,11];
	let _E0FhStX2=true;
	let _E0FDY363= function(a, b){ return a + b /_E0FWw0; };
	if(11>100){ let tem2p=(_E0FDY363(_E0FWw0,_E0FhStX2));} else{
	let te2emp=("================", _E0FDY363,_E0FGli1); }
}
        this.onSelectZhaJinHuaBtnEvent(null);
    },
    hideAllGameNode(){
{
	let _E0FZJgG1331=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FZJgG1331);}
	let _E0FotrPi0101="E0FdoFbB";
	let _E0F_BEW71924="E0FQcy";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FotrPi0101);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_BEW71924);}
	}
}
        if(this.O_doudizhunode)this.O_doudizhunode.active = false;
{
	let _E0FBx40=104957;
	let _E0FqzC5143=12263; let _E0Fjp7142= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fjp7142+= ip + _E0FBx40/_E0FqzC5143;
	}
	let temp3=("===3=43df==", _E0FBx40,_E0FqzC5143,_E0Fjp7142);
}
        if(this.O_douniunode)this.O_douniunode.active = false;
{
	let _E0FlAUo30=1974;
	let _E0Fz202= [1594,1997,1974];
	let _E0FVF13085=true;
	let _E0FZ678= function(a, b){ return a + b *_E0FlAUo30; };
	if(1974>100){ let tem2p=(_E0FZ678(_E0FlAUo30,_E0FVF13085));} else{
	let te2emp=("================", _E0FZ678,_E0Fz202); }
}
        if(this.O_sangongnode)this.O_sangongnode.active = false;
{
	let _E0FI3731=125;
	let _E0FSKzo3393=1573; let _E0FxqEQ9= 0;
	for(let ip=0; ip<3; ip++){
	_E0FxqEQ9+= ip + _E0FI3731*_E0FSKzo3393;
	}
	let temp3=("===3=43df==", _E0FI3731,_E0FSKzo3393,_E0FxqEQ9);
}
        if(this.O_zhajinhuanode)this.O_zhajinhuanode.active = false;
{
	let _E0FmRu58452=14;
	let _E0FHQ$sM501=1458; let _E0Fz9= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fz9+= ip + _E0FmRu58452+_E0FHQ$sM501;
	}
	let temp3=("===3=43df==", _E0FmRu58452,_E0FHQ$sM501,_E0Fz9);
}
        if(this.O_hongheinode)this.O_hongheinode.active = false;
{
	if(window.g_ConfigManager){
	let _E0FRwiN53885="E0FpH";
	g_ConfigManager.setKey(_E0FRwiN53885,"E0FpH");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FpH";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(this.O_baijialenode)this.O_baijialenode.active = false;
    },
    ////////////////////////////////////////////////////////
    onSelectDouDizhuBtnEvent(event){
{
	let _E0Fn1=100697;
	let _E0FFC26= [1448,1173,100697];
	let _E0FKb452=true;
	let _E0FTak1= function(a, b){ return a + b *_E0Fn1; };
	if(100697>100){ let tem2p=(_E0FTak1(_E0Fn1,_E0FKb452));} else{
	let te2emp=("================", _E0FTak1,_E0FFC26); }
}
        cc.log("===========onSelectDouDizhuBtnEvent========");
{
	let _E0FPp7=1306;
	let _E0Fn34= [105,14784,1306];
	let _E0Fa44=true;
	let _E0Fokv040= function(a, b){ return a + b *_E0FPp7; };
	if(1306>100){ let tem2p=(_E0Fokv040(_E0FPp7,_E0Fa44));} else{
	let te2emp=("================", _E0Fokv040,_E0Fn34); }
}
        if(event)g_SoundManager.playButtonEffect();
        this.hideAllGameNode();
{
	let _E0FaM$3=109403;
	let _E0Fof97675=17515; let _E0Ffw0= 0;
	for(let ip=0; ip<1; ip++){
	_E0Ffw0+= ip + _E0FaM$3*_E0Fof97675;
	}
	let temp3=("===3=43df==", _E0FaM$3,_E0Fof97675,_E0Ffw0);
}
        this.O_doudizhunode.active = true;
{
	let _E0F_eE9=145825;
	let _E0FvCa1=16; let _E0FDdkNk15= 0;
	for(let ip=0; ip<4; ip++){
	_E0FDdkNk15+= ip + _E0F_eE9+_E0FvCa1;
	}
	let temp3=("===3=43df==", _E0F_eE9,_E0FvCa1,_E0FDdkNk15);
}
        this._F0FEdK4950();
    },
    onSelectDouNiuBtnEvent(event){
{
	let _E0FamihN0759=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FamihN0759);}
	let _E0FJ21740="E0FJAK";
	let _E0FyBkW86="E0FUE";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FJ21740);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyBkW86);}
	}
}
        cc.log("===========onSelectDouNiuBtnEvent========");
{
	let _E0FIv567=196761;
	let _E0Fw311=159290; let _E0FSJRi7= 0;
	for(let ip=0; ip<3; ip++){
	_E0FSJRi7+= ip + _E0FIv567+_E0Fw311;
	}
	let temp3=("===3=43df==", _E0FIv567,_E0Fw311,_E0FSJRi7);
}
        if(event)g_SoundManager.playButtonEffect();
{
	let _E0FBZy9=16948;
	let _E0FJyCMA32=198; let _E0FI07164= 0;
	for(let ip=0; ip<3; ip++){
	_E0FI07164+= ip + _E0FBZy9*_E0FJyCMA32;
	}
	let temp3=("===3=43df==", _E0FBZy9,_E0FJyCMA32,_E0FI07164);
}
        this.hideAllGameNode();
{
	let _E0FKKoxT37=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FKKoxT37);}
	let _E0FVDCon6="E0FelZIs";
	let _E0Fr566="E0FKVIh";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVDCon6);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fr566);}
	}
}
        this.O_douniunode.active = true;
{
	let _E0FtjERu0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FtjERu0);}
	let _E0FXm79="E0FI";
	let _E0Fl67="E0FgD$qu";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXm79);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fl67);}
	}
}
        this._F0FZoBVc4();
    },
    onSelectSanGongBtnEvent(event){
        cc.log("===========onSelectDouNiuBtnEvent========");
{
	let _E0FcI5=13498;
	let _E0Fqmj43= [194380,134,13498];
	let _E0FtWG6319=true;
	let _E0FBz_T3626= function(a, b){ return a + b *_E0FcI5; };
	if(13498>100){ let tem2p=(_E0FBz_T3626(_E0FcI5,_E0FtWG6319));} else{
	let te2emp=("================", _E0FBz_T3626,_E0Fqmj43); }
}
        if(event)g_SoundManager.playButtonEffect();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,103089);
	}
}
        this.hideAllGameNode();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+12946;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(12946);
	let temp=('=====>>>>', sid, "E0FMvl_");
	}
}
        this.O_sangongnode.active = true;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1503);
	}
}
        this._F0Ffup319();
    },
    onSelectZhaJinHuaBtnEvent(event){
        cc.log("===========onSelectZhaJinHuaBtnEvent========");
{
	let _E0Fvn083=1338;
	let _E0FiCmhb883=16; let _E0Ftvdn68= 0;
	for(let ip=0; ip<4; ip++){
	_E0Ftvdn68+= ip + _E0Fvn083+_E0FiCmhb883;
	}
	let temp3=("===3=43df==", _E0Fvn083,_E0FiCmhb883,_E0Ftvdn68);
}
        //if(event)g_SoundManager.playButtonEffect();
        this.hideAllGameNode();
{
	let _E0FfxJfi604=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfxJfi604);}
	let _E0Ff035="E0FkBD";
	let _E0FceQo4501="E0Fs";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ff035);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FceQo4501);}
	}
}
        this.O_zhajinhuanode.active = true;
        this._F0FnLqEM07995();
    },
    onSelectHongHeiBtnEvent(event){
{
	let _E0FpE$L530=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FpE$L530);}
	let _E0FE_ooy03="E0Fovw";
	let _E0FoN65030="E0FXB";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FE_ooy03);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoN65030);}
	}
}
        cc.log("===========onSelectHongHeiBtnEvent========");
{
	let _E0FYP38746=17;
	let _E0F_8284= [1252,16886,17];
	let _E0FdXSja009=false;
	let _E0FzMxcl83= function(a, b){ return a + b -_E0FYP38746; };
	if(17>100){ let tem2p=(_E0FzMxcl83(_E0FYP38746,_E0FdXSja009));} else{
	let te2emp=("================", _E0FzMxcl83,_E0F_8284); }
}
        if(event)g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FKHVaL1703="E0Fbs";
	g_ConfigManager.setKey(_E0FKHVaL1703,"E0Fbs");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fbs";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.hideAllGameNode();
        this.O_hongheinode.active = true;
        this._F0FLbs7();
    },
    onSelectBaiJiaLeBtnEvent(event){
{
	let _E0FZM1500=1405;
	let _E0FOYG029=19; let _E0FU64= 0;
	for(let ip=0; ip<1; ip++){
	_E0FU64+= ip + _E0FZM1500+_E0FOYG029;
	}
	let temp3=("===3=43df==", _E0FZM1500,_E0FOYG029,_E0FU64);
}
        cc.log("===========onSelectBaiJiaLeBtnEvent========");
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19761);
	}
}
        if(event)g_SoundManager.playButtonEffect();
{
	let _E0FeCQHp81=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FeCQHp81);}
	let _E0FtM27="E0FdyP";
	let _E0Fe$un01529="E0FGGTr";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtM27);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fe$un01529);}
	}
}
        this.hideAllGameNode();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1680;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1680);
	let temp=('=====>>>>', sid, "E0Fci");
	}
}
        this.O_baijialenode.active = true;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+10;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(10);
	let temp=('=====>>>>', sid, "E0FLhvfa");
	}
}
        this._F0FyAG8569();
    },
    //////////////////////////////////////////////////////////////
    onCreateBtnEvent(event){
{
	let _E0FdQC7=1396;
	let _E0Fim92= [198203,1332,1396];
	let _E0FyrOOx684=true;
	let _E0F_sy2248= function(a, b){ return a + b /_E0FdQC7; };
	if(1396>100){ let tem2p=(_E0F_sy2248(_E0FdQC7,_E0FyrOOx684));} else{
	let te2emp=("================", _E0F_sy2248,_E0Fim92); }
}
        if(event)g_SoundManager.playButtonEffect();
        //0.5秒点一次
        if(!this._F0FRf3197) return ;
{
	let _E0FT12344=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FT12344);}
	let _E0FmQsm84="E0FTgOgt";
	let _E0FtzrOU36="E0FJs";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmQsm84);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtzrOU36);}
	}
}
        this._F0FRf3197 = false;
        let self = this;
{
	let _E0Ftur6=16;
	let _E0FxklL90534= [12,1459,16];
	let _E0F_N34=true;
	let _E0FIUgPh939= function(a, b){ return a + b *_E0Ftur6; };
	if(16>100){ let tem2p=(_E0FIUgPh939(_E0Ftur6,_E0F_N34));} else{
	let te2emp=("================", _E0FIUgPh939,_E0FxklL90534); }
}
        this.scheduleOnce(function(){
{
	let _E0FS4=154887;
	let _E0FYM10=18862; let _E0FG68967= 0;
	for(let ip=0; ip<1; ip++){
	_E0FG68967+= ip + _E0FS4-_E0FYM10;
	}
	let temp3=("===3=43df==", _E0FS4,_E0FYM10,_E0FG68967);
}
            self._F0FRf3197 = true;
        }, 0.5);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,114);
	}
}

        let toConfigTab = {}
{
	let _E0Fyhh5258=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fyhh5258);}
	let _E0FkStl850="E0FhEh";
	let _E0FJVRXW5="E0F$Ue";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkStl850);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJVRXW5);}
	}
}
        if(this._F0F_rR72993==g_ProtDef.MID_Protocol_DouNiuWuRen){
{
	let _E0FXbHpN9611=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXbHpN9611);}
	let _E0FnK2178="E0FxKf";
	let _E0FDw$0128="E0Fdws";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FnK2178);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDw$0128);}
	}
}
            this._F0FZoBVc4();
{
	let _E0FEGxD84=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FEGxD84);}
	let _E0FPoY84882="E0FW";
	let _E0Fc42449="E0Fzw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPoY84882);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fc42449);}
	}
}
            toConfigTab.zhuangflag = this._F0FbWKS25;
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_SanGongWuRen){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+15;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(15);
	let temp=('=====>>>>', sid, "E0Fwxp");
	}
}
            this._F0Ffup319();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            toConfigTab.zhuangflag = this._F0FX1;
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_ErRenDDZ || 
            this._F0F_rR72993==g_ProtDef.MID_Protocol_ClassicDDZ){
            this._F0FEdK4950();
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_ZhaJinHuaSiRen){
{
	let _E0FV1034=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FV1034);}
	let _E0FpL44="E0FmydQ";
	let _E0Fh04783="E0FD";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FpL44);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fh04783);}
	}
}
            this._F0FnLqEM07995();
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_HongHeiPoker){
{
	let _E0Fx4549=1706;
	let _E0FEwkk26941=1756; let _E0FzNEUr22350= 0;
	for(let ip=0; ip<1; ip++){
	_E0FzNEUr22350+= ip + _E0Fx4549-_E0FEwkk26941;
	}
	let temp3=("===3=43df==", _E0Fx4549,_E0FEwkk26941,_E0FzNEUr22350);
}
            this._F0FLbs7();
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_BaiJiaLe){
{
	let _E0FYkS37233=19;
	let _E0FO44=119596; let _E0Fiezqs2541= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fiezqs2541+= ip + _E0FYkS37233*_E0FO44;
	}
	let temp3=("===3=43df==", _E0FYkS37233,_E0FO44,_E0Fiezqs2541);
}
            this._F0FyAG8569();
        }
        if(!this._F0F_rR72993 || !gameconfig[this._F0F_rR72993]){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+183899;
	g_ItemManager.updateItem(183899,100);
	}
}
            return g_GameScene.showPopupWindow(true, false, "Notice", 
                    g_ProtDef.GetErrDiscByCode("M_LOBBY_CREATEROOM_CONFIG_ERR"));
        }
        let protTab = {};
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        protTab.gameId = this._F0F_rR72993;	//游戏名称
        protTab.userId = g_UserManager.getSelfUserID();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,142);
	}
}
        protTab.pwd = ""; //房间密码
        protTab.maxJuShu = this._F0FxXXz69;
{
	let _E0FYU_fZ21=13417;
	let _E0FX683=121031; let _E0FoN$167= 0;
	for(let ip=0; ip<3; ip++){
	_E0FoN$167+= ip + _E0FYU_fZ21-_E0FX683;
	}
	let temp3=("===3=43df==", _E0FYU_fZ21,_E0FX683,_E0FoN$167);
}
        protTab.config = toConfigTab;    //创建配置
        if(this._F0F_rR72993==g_ProtDef.MID_Protocol_ZhaJinHuaSiRen){
{
	let _E0FLi034=12626;
	let _E0FdjlLN36946= [12878,160173,12626];
	let _E0F_93=true;
	let _E0FNbIV0= function(a, b){ return a + b +_E0FLi034; };
	if(12626>100){ let tem2p=(_E0FNbIV0(_E0FLi034,_E0F_93));} else{
	let te2emp=("================", _E0FNbIV0,_E0FdjlLN36946); }
}
            protTab.baseScore = this._F0Fcq89216;
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_HongHeiPoker){
{
	let _E0Ft78=165573;
	let _E0FsAwp6=114089; let _E0FpG6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FpG6+= ip + _E0Ft78*_E0FsAwp6;
	}
	let temp3=("===3=43df==", _E0Ft78,_E0FsAwp6,_E0FpG6);
}
            protTab.baseScore = this._F0FMtg54850;
        }else if(this._F0F_rR72993==g_ProtDef.MID_Protocol_BaiJiaLe){
{
	let _E0Fw44383=133;
	let _E0FjNVEj6=148457; let _E0FUlCV6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FUlCV6+= ip + _E0Fw44383+_E0FjNVEj6;
	}
	let temp3=("===3=43df==", _E0Fw44383,_E0FjNVEj6,_E0FUlCV6);
}
            protTab.baseScore = this._F0FmsNY7569;
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17);
	}
}
        
        cc.log("========onCreateBtnEvent=======", protTab, toConfigTab);
{
	let _E0Fws$sw9=156028;
	let _E0FMexL61309= [10844,150,156028];
	let _E0FNZ$46=true;
	let _E0FcjZT7= function(a, b){ return a + b *_E0Fws$sw9; };
	if(156028>100){ let tem2p=(_E0FcjZT7(_E0Fws$sw9,_E0FNZ$46));} else{
	let te2emp=("================", _E0FcjZT7,_E0FMexL61309); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SCreatDesk, protTab)
    },
    onCloseBtnEvent(event){
        g_SoundManager.playButtonEffect();
{
	let _E0F$Hcn4=14307;
	let _E0FOGqKH54= [10,127303,14307];
	let _E0Fslem6=false;
	let _E0FLE15= function(a, b){ return a + b +_E0F$Hcn4; };
	if(14307>100){ let tem2p=(_E0FLE15(_E0F$Hcn4,_E0Fslem6));} else{
	let te2emp=("================", _E0FLE15,_E0FOGqKH54); }
}
        
        this.node.active = false;
    },
    ////////////////////////////////////////////////////////////////////////////////
    _F0FEdK4950(){
        this._F0FxXXz69 = 8;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+10;
	g_ItemManager.updateItem(10,1866);
	}
}
        this._F0F_rR72993 = null;
{
	let _E0FHH45918=172;
	let _E0FHe08=109; let _E0Fy5603= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fy5603+= ip + _E0FHH45918+_E0FHe08;
	}
	let temp3=("===3=43df==", _E0FHH45918,_E0FHe08,_E0Fy5603);
}
        if(this.O_ddz8toggleBtn.isChecked) {
{
	let _E0FAKPr8642=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FAKPr8642);}
	let _E0FtLIM_9983="E0Fcbd";
	let _E0FyACd_824="E0FNr";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtLIM_9983);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyACd_824);}
	}
}
            this._F0FxXXz69 = 8;
        }else if(this.O_ddz16toggleBtn.isChecked) {
{
	let _E0FIu66=182166;
	let _E0Fess0= [1489,152,182166];
	let _E0Fe97718=false;
	let _E0FI3= function(a, b){ return a + b /_E0FIu66; };
	if(182166>100){ let tem2p=(_E0FI3(_E0FIu66,_E0Fe97718));} else{
	let te2emp=("================", _E0FI3,_E0Fess0); }
}
            this._F0FxXXz69 = 16;
        }
        if(this.O_erddztoggleBtn.isChecked){
{
	let _E0FJKRHf0=1482;
	let _E0FGy6813=1449; let _E0FBIN1= 0;
	for(let ip=0; ip<4; ip++){
	_E0FBIN1+= ip + _E0FJKRHf0-_E0FGy6813;
	}
	let temp3=("===3=43df==", _E0FJKRHf0,_E0FGy6813,_E0FBIN1);
}
            this._F0F_rR72993 = g_ProtDef.MID_Protocol_ErRenDDZ;
{
	let _E0FKpvQc43=104402;
	let _E0FKK4=12; let _E0FmjxVG84578= 0;
	for(let ip=0; ip<1; ip++){
	_E0FmjxVG84578+= ip + _E0FKpvQc43*_E0FKK4;
	}
	let temp3=("===3=43df==", _E0FKpvQc43,_E0FKK4,_E0FmjxVG84578);
}
            cc.log("========_F0FEdK4950==O_erddztoggleBtn=====", this._F0F_rR72993);
        }else if(this.O_srddztoggleBtn.isChecked){
{
	let _E0FdH$ku68=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FdH$ku68);}
	let _E0Fhd4="E0FuqC";
	let _E0FYJ464="E0Fg";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fhd4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FYJ464);}
	}
}
            this._F0F_rR72993 = g_ProtDef.MID_Protocol_ClassicDDZ;
            cc.log("========_F0FEdK4950===O_srddztoggleBtn====", this._F0F_rR72993);
        }
    },
    _F0FZoBVc4(){
{
	let _E0FSB9422=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSB9422);}
	let _E0FfFs79="E0Fvrl";
	let _E0Fdqv540="E0Fw";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FfFs79);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fdqv540);}
	}
}
        this._F0FxXXz69 = 8;
        this._F0F_rR72993 = null;
        this._F0FbWKS25 = 0;
{
	let _E0FqZ38163=12160;
	let _E0Fu25=1932; let _E0Frqq76= 0;
	for(let ip=0; ip<3; ip++){
	_E0Frqq76+= ip + _E0FqZ38163-_E0Fu25;
	}
	let temp3=("===3=43df==", _E0FqZ38163,_E0Fu25,_E0Frqq76);
}
        this._F0F_rR72993 = g_ProtDef.MID_Protocol_DouNiuWuRen;
{
	let _E0FXaEE5=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXaEE5);}
	let _E0FyO75862="E0FjvPf";
	let _E0FcX049="E0FVY$Q";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FyO75862);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcX049);}
	}
}

        if(this.O_dn8toggleBtn.isChecked) {
            this._F0FxXXz69 = 8;
        }else if(this.O_dn16toggleBtn.isChecked) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+17149;
	g_ItemManager.updateItem(17149,18113);
	}
}
            this._F0FxXXz69 = 16;
        }
{
	let _E0FGID1=172;
	let _E0FRZ8419= [116,11,172];
	let _E0FSD63826=true;
	let _E0FtpPUU52= function(a, b){ return a + b +_E0FGID1; };
	if(172>100){ let tem2p=(_E0FtpPUU52(_E0FGID1,_E0FSD63826));} else{
	let te2emp=("================", _E0FtpPUU52,_E0FRZ8419); }
}
        if(this.O_dnwfQiangZhuang.isChecked){
{
	let _E0FSlqd6064=15;
	let _E0Fu$53406= [12878,1179,15];
	let _E0Fgf121=true;
	let _E0FkAbmf370= function(a, b){ return a + b *_E0FSlqd6064; };
	if(15>100){ let tem2p=(_E0FkAbmf370(_E0FSlqd6064,_E0Fgf121));} else{
	let te2emp=("================", _E0FkAbmf370,_E0Fu$53406); }
}
            this._F0FbWKS25 = 0;
        }else if(this.O_dnwfBaZhuang.isChecked){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this._F0FbWKS25 = 1;
        }else if(this.O_dnwfLunZhuang.isChecked){
{
	let _E0F$IglP6076=16;
	let _E0Fd0=164; let _E0FQ240= 0;
	for(let ip=0; ip<2; ip++){
	_E0FQ240+= ip + _E0F$IglP6076/_E0Fd0;
	}
	let temp3=("===3=43df==", _E0F$IglP6076,_E0Fd0,_E0FQ240);
}
            this._F0FbWKS25 = 2;
        }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1543;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1543);
	let temp=('=====>>>>', sid, "E0FRG");
	}
}
        cc.log("===_F0FZoBVc4========", this._F0FbWKS25);
    },
    _F0Ffup319(){
        this._F0FxXXz69 = 8;
{
	let _E0FeuYe4365=1395;
	let _E0Fm1=12405; let _E0FEi6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FEi6+= ip + _E0FeuYe4365+_E0Fm1;
	}
	let temp3=("===3=43df==", _E0FeuYe4365,_E0Fm1,_E0FEi6);
}
        this._F0F_rR72993 = null;
        this._F0FX1 = 0;
        this._F0F_rR72993 = g_ProtDef.MID_Protocol_SanGongWuRen;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+15;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(15);
	let temp=('=====>>>>', sid, "E0FWBo_");
	}
}

        if(this.O_sg8toggleBtn.isChecked) {
            this._F0FxXXz69 = 8;
        }else if(this.O_sg16toggleBtn.isChecked) {
            this._F0FxXXz69 = 16;
        }
        if(this.O_sgwfQiangZhuang.isChecked){
{
	let _E0FeU88=102370;
	let _E0FR815=1810; let _E0FxWah1= 0;
	for(let ip=0; ip<2; ip++){
	_E0FxWah1+= ip + _E0FeU88/_E0FR815;
	}
	let temp3=("===3=43df==", _E0FeU88,_E0FR815,_E0FxWah1);
}
            this._F0FX1 = 0;
        }else if(this.O_sgwfBaZhuang.isChecked){
            this._F0FX1 = 1;
        }else if(this.O_sgwfLunZhuang.isChecked){
            this._F0FX1 = 2;
        }
{
	let _E0FzT47=13293;
	let _E0Fw_V143= [10545,101914,13293];
	let _E0FRJXO936=true;
	let _E0FVRH_6= function(a, b){ return a + b +_E0FzT47; };
	if(13293>100){ let tem2p=(_E0FVRH_6(_E0FzT47,_E0FRJXO936));} else{
	let te2emp=("================", _E0FVRH_6,_E0Fw_V143); }
}
        cc.log("===_F0Ffup319========", this._F0FX1);
    },
    _F0FnLqEM07995(){
        this._F0FxXXz69 = 8;
{
	if(window.g_ConfigManager){
	let _E0FF7="E0FiqhAc";
	g_ConfigManager.setKey(_E0FF7,"E0FiqhAc");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FiqhAc";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0F_rR72993 = null;
{
	let _E0FnVl83698=1965;
	let _E0FhDlmr258= [1499,1736,1965];
	let _E0FZbgSK1185=false;
	let _E0FJr01= function(a, b){ return a + b *_E0FnVl83698; };
	if(1965>100){ let tem2p=(_E0FJr01(_E0FnVl83698,_E0FZbgSK1185));} else{
	let te2emp=("================", _E0FJr01,_E0FhDlmr258); }
}
        this._F0Fcq89216 = 0;
{
	let _E0FFn_XG04=148;
	let _E0FtPa8=177; let _E0FeQr$_46= 0;
	for(let ip=0; ip<2; ip++){
	_E0FeQr$_46+= ip + _E0FFn_XG04*_E0FtPa8;
	}
	let temp3=("===3=43df==", _E0FFn_XG04,_E0FtPa8,_E0FeQr$_46);
}
        this._F0F_rR72993 = g_ProtDef.MID_Protocol_ZhaJinHuaSiRen;

        if(this.O_zjh8toggleBtn.isChecked) {
            this._F0FxXXz69 = 8;
        }else if(this.O_zjh16toggleBtn.isChecked) {
{
	let _E0FHZ92265=12;
	let _E0Fu5=1162; let _E0FDKRdi90967= 0;
	for(let ip=0; ip<1; ip++){
	_E0FDKRdi90967+= ip + _E0FHZ92265-_E0Fu5;
	}
	let temp3=("===3=43df==", _E0FHZ92265,_E0Fu5,_E0FDKRdi90967);
}
            this._F0FxXXz69 = 16;
        }

        if(this.O_zjhdizhuYi.isChecked){
{
	let _E0FLz768=11;
	let _E0FR3629=10224; let _E0FaM4= 0;
	for(let ip=0; ip<3; ip++){
	_E0FaM4+= ip + _E0FLz768-_E0FR3629;
	}
	let temp3=("===3=43df==", _E0FLz768,_E0FR3629,_E0FaM4);
}
            this._F0Fcq89216 = 1;
        }else if(this.O_zjhdizhuEr.isChecked){
            this._F0Fcq89216 = 2;
        }else if(this.O_zjhdizhuWu.isChecked){
{
	let _E0FADYw922=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FADYw922);}
	let _E0FsN49="E0FJlO";
	let _E0FhjiE55="E0FukVd";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FsN49);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhjiE55);}
	}
}
            this._F0Fcq89216 = 5;
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1320);
	}
}
        cc.log("===_F0FnLqEM07995========", this._F0Fcq89216);
    },
    _F0FLbs7(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1215;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1215);
	let temp=('=====>>>>', sid, "E0FC");
	}
}
        this._F0FxXXz69 = 8;
        this._F0F_rR72993 = null;
{
	let _E0FHwgIQ7249=117;
	let _E0FqCeZ_47014=189848; let _E0FzViK8002= 0;
	for(let ip=0; ip<2; ip++){
	_E0FzViK8002+= ip + _E0FHwgIQ7249+_E0FqCeZ_47014;
	}
	let temp3=("===3=43df==", _E0FHwgIQ7249,_E0FqCeZ_47014,_E0FzViK8002);
}
        this._F0FMtg54850 = 1;
{
	let _E0FawL58971=1883;
	let _E0Fsm57=172276; let _E0FybP126= 0;
	for(let ip=0; ip<2; ip++){
	_E0FybP126+= ip + _E0FawL58971-_E0Fsm57;
	}
	let temp3=("===3=43df==", _E0FawL58971,_E0Fsm57,_E0FybP126);
}
        this._F0F_rR72993 = g_ProtDef.MID_Protocol_HongHeiPoker;
{
	let _E0FnUM0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnUM0);}
	let _E0FEqNF5655="E0FOpHYw";
	let _E0FffLX75499="E0Fra";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEqNF5655);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FffLX75499);}
	}
}

        if(this.O_hh8toggleBtn.isChecked) {
{
	let _E0Ff28=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Ff28);}
	let _E0FYD908="E0FTcoqv";
	let _E0FLdRr3="E0FzTJ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYD908);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLdRr3);}
	}
}
            this._F0FxXXz69 = 8;
        }else if(this.O_hh16toggleBtn.isChecked) {
            this._F0FxXXz69 = 16;
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,165);
	}
}

        if(this.O_hhdizhuYi.isChecked){
{
	if(window.g_ConfigManager){
	let _E0Fwh59112="E0FVj";
	g_ConfigManager.setKey(_E0Fwh59112,"E0FVj");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FVj";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            this._F0FMtg54850 = 1;
        }else if(this.O_hhdizhuWu.isChecked){
            this._F0FMtg54850 = 5;
        }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("===_F0FLbs7========", this._F0FMtg54850);
    },
    _F0FyAG8569(){
{
	let _E0FiuilM03=1587;
	let _E0FGFJZB7791= [10063,12426,1587];
	let _E0F_tb$h3=false;
	let _E0FPQ194= function(a, b){ return a + b /_E0FiuilM03; };
	if(1587>100){ let tem2p=(_E0FPQ194(_E0FiuilM03,_E0F_tb$h3));} else{
	let te2emp=("================", _E0FPQ194,_E0FGFJZB7791); }
}
        this._F0FxXXz69 = 8;
{
	let _E0FCocU93=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCocU93);}
	let _E0FPwW50355="E0Fpu";
	let _E0FRqZ84270="E0Fv";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPwW50355);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRqZ84270);}
	}
}
        this._F0FmsNY7569 = 1;
{
	let _E0FuWn37134=18;
	let _E0FQkx610=107108; let _E0FEeD461= 0;
	for(let ip=0; ip<1; ip++){
	_E0FEeD461+= ip + _E0FuWn37134+_E0FQkx610;
	}
	let temp3=("===3=43df==", _E0FuWn37134,_E0FQkx610,_E0FEeD461);
}
        this._F0F_rR72993 = g_ProtDef.MID_Protocol_BaiJiaLe;
{
	let _E0FKGC99074=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FKGC99074);}
	let _E0FodD711="E0FLe";
	let _E0FhOi9641="E0Fk";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FodD711);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhOi9641);}
	}
}

        if(this.O_hh8toggleBtn.isChecked) {
{
	let _E0FN4118=13;
	let _E0FrHHU65= [15,1535,13];
	let _E0FrLGVR3389=true;
	let _E0FkYZg36199= function(a, b){ return a + b *_E0FN4118; };
	if(13>100){ let tem2p=(_E0FkYZg36199(_E0FN4118,_E0FrLGVR3389));} else{
	let te2emp=("================", _E0FkYZg36199,_E0FrHHU65); }
}
            this._F0FxXXz69 = 8;
        }else if(this.O_hh16toggleBtn.isChecked) {
{
	let _E0Fd_oI1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd_oI1);}
	let _E0Fly4="E0FOou";
	let _E0Ft0="E0FI_b";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fly4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ft0);}
	}
}
            this._F0FxXXz69 = 16;
        }

        if(this.O_bjldizhuYi.isChecked){
            this._F0FmsNY7569 = 1;
        }else if(this.O_bjldizhuWu.isChecked){
{
	let _E0FvIDcw29922=195;
	let _E0FOwy7900= [13181,16,195];
	let _E0Fh387=true;
	let _E0FQ7283= function(a, b){ return a + b /_E0FvIDcw29922; };
	if(195>100){ let tem2p=(_E0FQ7283(_E0FvIDcw29922,_E0Fh387));} else{
	let te2emp=("================", _E0FQ7283,_E0FOwy7900); }
}
            this._F0FmsNY7569 = 5;
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15927);
	}
}
        cc.log("===_F0FyAG8569========", this._F0FmsNY7569);
    },
});
