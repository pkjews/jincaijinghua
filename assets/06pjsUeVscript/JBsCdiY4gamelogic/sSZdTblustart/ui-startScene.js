let HttpRequest = require("http-request");
let utilbase64 = require("util-base64");
let shuPingCrtl = require("shuPingCrtl");

cc.Class({
    extends: require("ui-basescene"),

    properties: {
        O_loginprefab : cc.Prefab,
        O_registerprefab : cc.Prefab,
        O_loginloadprefab : cc.Prefab,
        O_xieyiprefab : cc.Prefab,
        O_leafparticlenode : cc.Node,

        
        O_hotfixVersionLabel : cc.Label,
        O_hotfixnode : cc.Node,
        ////////////////////////////////////////
        _F0FXAyx22497 : null,
        _F0FCzzf09927 : null,
        _F0FUE_a65195 : null,
        _F0Fb53 : false,

        _F0Fuy29132:"",
        _time:0,
		_isConnect:false,
    },
    // use this for initialization
    onLoad : function(){
{
	let _E0FcSq7683=1104;
	let _E0FGla95205= [194831,15380,1104];
	let _E0FRC0344=false;
	let _E0FU8585= function(a, b){ return a + b -_E0FcSq7683; };
	if(1104>100){ let tem2p=(_E0FU8585(_E0FcSq7683,_E0FRC0344));} else{
	let te2emp=("================", _E0FU8585,_E0FGla95205); }
}

        this._super(); //调用父类的onLoad
        this.readConfig()
        //this.showXieYiNode();
{
	let _E0FPne2=187;
	let _E0FdhA0= [17,190,187];
	let _E0FKu_r601=false;
	let _E0FbJCE48229= function(a, b){ return a + b *_E0FPne2; };
	if(187>100){ let tem2p=(_E0FbJCE48229(_E0FPne2,_E0FKu_r601));} else{
	let te2emp=("================", _E0FbJCE48229,_E0FdhA0); }
}

        let writepath = 0;//cc.FileUtils.getInstance().getWritablePath();
        console.log("===writepath===", cc, cc.jsb, writepath);
{
	let _E0Fw055=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fw055);}
	let _E0FAK024="E0F_OiSr";
	let _E0FY375="E0FZbBZ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAK024);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FY375);}
	}
}
        if(this.O_leafparticlenode){
{
	let _E0Fs64=16;
	let _E0FzEQQ7= [13,173,16];
	let _E0FT43912=false;
	let _E0FZUH9714= function(a, b){ return a + b +_E0Fs64; };
	if(16>100){ let tem2p=(_E0FZUH9714(_E0Fs64,_E0FT43912));} else{
	let te2emp=("================", _E0FZUH9714,_E0FzEQQ7); }
}
            this.O_leafparticlenode.setLocalZOrder(100);
        }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        
        this.showHotfixNode(true);
{
	let _E0FaTtHn52957=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FaTtHn52957);}
	let _E0Fp46017="E0FHkrI";
	let _E0FTEFqY8987="E0Fkfn";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fp46017);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FTEFqY8987);}
	}
}

        //md5 32位小写加密测试
        //let utilmd5 = require("util-md5");
        //console.log("==========md5==test====", utilmd5.md5("fanfangyou"));
        console.log("=====ui-start===onLoad=============");
        //音频操作
        g_SoundManager.setMusicOpen(true);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,156);
	}
}
        g_SoundManager.setEffectOpen(true);
        g_SoundManager.playMusic(g_ConfigManager.getGlobalConfig("StartSceneMusic"));
{
	let _E0Fa4053=199258;
	let _E0FDd38899= [17095,10,199258];
	let _E0Fwtu9=true;
	let _E0Fi41994= function(a, b){ return a + b -_E0Fa4053; };
	if(199258>100){ let tem2p=(_E0Fi41994(_E0Fa4053,_E0Fwtu9));} else{
	let te2emp=("================", _E0Fi41994,_E0FDd38899); }
}
        /*
        g_SoundManager.pauseAll();
        g_SoundManager.playMusic("doudizhu/sound/music/bg_happy");
        let self = this;
        self.intervalVolumn = 1;
        this.schedule(function(){
            if(self.intervalVolumn>=0){
                console.log("========update===volum==========", self.intervalVolumn);
                self.intervalVolumn -= 0.02;
                g_SoundManager.setMusicVolume(self.intervalVolumn);
                g_SoundManager.setEffectVolume(self.intervalVolumn);
            }
        }, 0.1);
        this.scheduleOnce(function(){
            g_SoundManager.stopMusic();
        }, 1);
        g_SoundManager.playEffect("doudizhu/sound/effect/win", (path, dur)=>{
            console.log("========playEffect===========", path, dur);
        });
        */
        let curhotVersion = g_ConfigManager.getHotfixVersion();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+13819;
	g_ItemManager.updateItem(13819,12998);
	}
}
        this.O_hotfixVersionLabel.string = curhotVersion+"";
        //检测更新
        let self = this;
{
	let _E0Fly97499=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fly97499);}
	let _E0FCaI8937="E0FEoVfU";
	let _E0FBU23="E0FMYlC";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FCaI8937);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBU23);}
	}
}
        let onErrorHandle = ()=>{
            console.log("=====hotfix====onErrorHandle=========");
            //self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(self.onAllInit, self)));
            this.onAllInit();
        }
        let onSuccessHandle = (response)=>{
            let jsonData = JSON.parse(response);
            console.log("=====hotfix====onSuccessHandle=========", jsonData, response);
            if(!jsonData || !jsonData.version){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+198798;
	g_ItemManager.updateItem(198798,151377);
	}
}
                return onErrorHandle();
            }
            let jsonVersion = jsonData.version;
            if(jsonVersion == curhotVersion){
                return onErrorHandle();
            }
            g_ConfigManager.setHotfixVersion(jsonData.version);
            self.O_hotfixVersionLabel.string = jsonData.version;
            self.startHotFixUpdate();
        }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1548;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1548);
	let temp=('=====>>>>', sid, "E0FvB");
	}
}
        /////
        let isHaveHotfix = false;
        if(isHaveHotfix){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            let hotfixVerUrl = g_ConfigManager.getGlobalConfig("HotFixUrl");
            let httpHandler = new HttpRequest();
{
	let _E0FfVJy69=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfVJy69);}
	let _E0Fv0="E0FzHm";
	let _E0FnHvJ39="E0FB";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fv0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnHvJ39);}
	}
}
            httpHandler.onError = onErrorHandle;
{
	let _E0FzfX0123=103;
	let _E0FBfRyE11934=18891; let _E0FQ_SjG02= 0;
	for(let ip=0; ip<2; ip++){
	_E0FQ_SjG02+= ip + _E0FzfX0123*_E0FBfRyE11934;
	}
	let temp3=("===3=43df==", _E0FzfX0123,_E0FBfRyE11934,_E0FQ_SjG02);
}
            httpHandler.onSuccess = onSuccessHandle;
{
	let _E0FfL3=1587;
	let _E0Fu6=196317; let _E0FDkwE43= 0;
	for(let ip=0; ip<4; ip++){
	_E0FDkwE43+= ip + _E0FfL3*_E0Fu6;
	}
	let temp3=("===3=43df==", _E0FfL3,_E0Fu6,_E0FDkwE43);
}
            httpHandler.sendGet(hotfixVerUrl);
        }else{
            onErrorHandle();
        }
    },
    onPreLoadResource(){
{
	let _E0FSut7893=117710;
	let _E0FB04035= [15,15,117710];
	let _E0FW3=false;
	let _E0Fqvz30= function(a, b){ return a + b /_E0FSut7893; };
	if(117710>100){ let tem2p=(_E0Fqvz30(_E0FSut7893,_E0FW3));} else{
	let te2emp=("================", _E0Fqvz30,_E0FB04035); }
}
        //预加载资源
        console.log("========onPreLoadResource=================");
        cc.loader.loadResDir(g_ConfigManager.getGlobalConfig("PokerBigPath"), (err, arraytex)=>{
            console.log("===loadResDir==errenddz/poker-small===", arraytex);
        });
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,102540);
	}
}
        cc.loader.loadResDir(g_ConfigManager.getGlobalConfig("PokerSmallPath"), (err, arraytex)=>{
            console.log("===loadResDir==errenddz/poker-big===", arraytex);
        });
        let self = this;
{
	let _E0Fkv69108=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fkv69108);}
	let _E0FPKnbZ73="E0FYbNn";
	let _E0Fu0413="E0FXXQe";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPKnbZ73);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fu0413);}
	}
}
        this.scheduleOnce(()=>{
            self.onLoadLobbyScene();
        }, 2);
    },
    onAllInit(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+154595;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(154595);
	let temp=('=====>>>>', sid, "E0FwTxq");
	}
}
        //所有初始化都在这里
        //this.showHotfixNode(false);
        let self = this;
{
	let _E0Fo914=109057;
	let _E0FTofXF962= [17399,157175,109057];
	let _E0FSFP0132=true;
	let _E0Fbtwl950= function(a, b){ return a + b -_E0Fo914; };
	if(109057>100){ let tem2p=(_E0Fbtwl950(_E0Fo914,_E0FSFP0132));} else{
	let te2emp=("================", _E0Fbtwl950,_E0FTofXF962); }
}
        self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(self.showLoginNode, self)));
{
	let _E0F$A4=189484;
	let _E0Fg9533= [154234,149,189484];
	let _E0FXYnm591=false;
	let _E0F_088= function(a, b){ return a + b *_E0F$A4; };
	if(189484>100){ let tem2p=(_E0F_088(_E0F$A4,_E0FXYnm591));} else{
	let te2emp=("================", _E0F_088,_E0Fg9533); }
}
        this.initNetWork();
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_S2CSignIN, this.onProtSignIn, this);
{
	let _E0FSn$66=1513;
	let _E0FP4309= [16049,1898,1513];
	let _E0FhgwT0=false;
	let _E0FqMoNG253= function(a, b){ return a + b -_E0FSn$66; };
	if(1513>100){ let tem2p=(_E0FqMoNG253(_E0FSn$66,_E0FhgwT0));} else{
	let te2emp=("================", _E0FqMoNG253,_E0FP4309); }
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_S2CRegAccount, this.onProtRegAccount, this);
{
	let _E0FjsR77507=169854;
	let _E0FT3852=162561; let _E0FL_dI78810= 0;
	for(let ip=0; ip<1; ip++){
	_E0FL_dI78810+= ip + _E0FjsR77507/_E0FT3852;
	}
	let temp3=("===3=43df==", _E0FjsR77507,_E0FT3852,_E0FL_dI78810);
}
        //请求登陆大厅
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CReqLoginIn, this.onProtLoginLobby, this);
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CReqUserInfo, this.onProtLoginLobbyInfo, this);
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_HttpControl, g_ProtDef.AHttpControl_S2CReqHttp, this.onGameHere, this);
    },
    initNetWork(){
        let serverIp = g_ConfigManager.getGlobalConfig("ServerIP");
        let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");
        console.log("=======initNetWork=============", serverIp, serverPort);
        g_NetManager.connect(serverIp, serverPort);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+159;
	g_ItemManager.updateItem(159,116472);
	}
}
        let self = this;
        self._F0Fb53 = false;
{
	let _E0FI313=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FI313);}
	let _E0FdTsJm0342="E0Fr";
	let _E0FbNwX46="E0Fxsy";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdTsJm0342);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FbNwX46);}
	}
}
        g_NetManager.onopen = function(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+186141;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(186141);
	let temp=('=====>>>>', sid, "E0FZ__I");
	}
}
            //console.log("===========g_NetManager.onopen==========");
            self._isConnect = true;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,164627);
	}
}
            //self._F0Fuy29132 = "11111";
            //console.log("==========self._F0Fuy29132==========",self._F0Fuy29132);
            
{
	if(window.g_ConfigManager){
	let _E0Fx9293="E0FMi";
	g_ConfigManager.setKey(_E0Fx9293,"E0FMi");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FMi";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            var timestamp = Date.parse(new Date())/1000;
            //console.log("timestamp:",timestamp)

            if(self._F0Fuy29132!="" && timestamp>self._time){
{
	let _E0FC25271=130;
	let _E0Fec69= [130,102608,130];
	let _E0Fzi19176=false;
	let _E0FLS49= function(a, b){ return a + b -_E0FC25271; };
	if(130>100){ let tem2p=(_E0FLS49(_E0FC25271,_E0Fzi19176));} else{
	let te2emp=("================", _E0FLS49,_E0Fec69); }
}
                self.sendGameHere();
            }
{
	let _E0FWicq78=16000;
	let _E0Fjek11=110735; let _E0FOK72= 0;
	for(let ip=0; ip<4; ip++){
	_E0FOK72+= ip + _E0FWicq78/_E0Fjek11;
	}
	let temp3=("===3=43df==", _E0FWicq78,_E0Fjek11,_E0FOK72);
}
            //console.log("=========g_NetManager.onopen=============");
            self.showLoadFlower(false);
{
	let _E0FBjJH49078=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBjJH49078);}
	let _E0FGygKe6="E0FxenO";
	let _E0FTNg617="E0FTADpW";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FGygKe6);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FTNg617);}
	}
}
            //如果在加载资源时候重连
            if(self._F0Fb53){
{
	let _E0FtwX55=12670;
	let _E0FDfN709=1652; let _E0FFKGB0= 0;
	for(let ip=0; ip<2; ip++){
	_E0FFKGB0+= ip + _E0FtwX55+_E0FDfN709;
	}
	let temp3=("===3=43df==", _E0FtwX55,_E0FDfN709,_E0FFKGB0);
}
                self.onProtSignIn(null, null, {isSuccess:1});
            }
        };
    },
    onLoadLobbyScene(){
{
	let _E0Fd10=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd10);}
	let _E0FI196="E0F_k";
	let _E0FqNWMT1081="E0FMJ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FI196);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FqNWMT1081);}
	}
}
        console.log("=========onLoadLobbyScene=======11========");
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1930);
	}
}
        //检测能否切换大厅场景，
        //1、是否服务器已经发送完所有数据过来
        //2、是否进度条已经到了最后
        //3、是否预加载资源已经加载完成了。
        if(g_ConfigManager.checkIsCanLoginLobby(3)){
{
	if(window.g_ConfigManager){
	let _E0Fo2="E0FKOD";
	g_ConfigManager.setKey(_E0Fo2,"E0FKOD");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FKOD";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            console.log("=========onLoadLobbyScene=======22========");
{
	let _E0FeESnl8=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FeESnl8);}
	let _E0FUW3="E0Fmk";
	let _E0FXSGUZ73="E0FsTi";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FUW3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXSGUZ73);}
	}
}
            g_ConfigManager.resetIsCanLoginLobby();
{
	let _E0FD29339=13108;
	let _E0FliRHl1=11265; let _E0FYDIyj384= 0;
	for(let ip=0; ip<2; ip++){
	_E0FYDIyj384+= ip + _E0FD29339*_E0FliRHl1;
	}
	let temp3=("===3=43df==", _E0FD29339,_E0FliRHl1,_E0FYDIyj384);
}
            g_GameScene.runWithLobbyScene();
        }
    },
    startHotFixUpdate(){
{
	let _E0Fqxe47=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fqxe47);}
	let _E0Fehv666="E0Fuoyx";
	let _E0FvIN_09="E0FmcaHl";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fehv666);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FvIN_09);}
	}
}
        let self = this;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+16246;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(16246);
	let temp=('=====>>>>', sid, "E0FyM");
	}
}
        let finishUpdateFunc = function(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+150203;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(150203);
	let temp=('=====>>>>', sid, "E0FjYjU");
	}
}
            console.log("=========finishUpdateFunc==========")
            self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(self.onAllInit, self)));
        };
        this.getComponent('hotfix-update').init(finishUpdateFunc);
    },
    /////////////////////////////////////////////////////
    onRecvErrcode(errcode, attachtab){
{
	let _E0FTS7969=1111;
	let _E0FU07817=142; let _E0FwXjz780= 0;
	for(let ip=0; ip<2; ip++){
	_E0FwXjz780+= ip + _E0FTS7969-_E0FU07817;
	}
	let temp3=("===3=43df==", _E0FTS7969,_E0FU07817,_E0FwXjz780);
}
        console.log("=======onRecvErrcode============", errcode, attachtab);
{
	let _E0FVYk6081=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVYk6081);}
	let _E0Fwc6412="E0Fb";
	let _E0FlZa25="E0FUxxGI";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fwc6412);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FlZa25);}
	}
}
        this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode(errcode));
    },
    /////////////////////////////////////////////////////
    //协议回调
    onProtSignIn(mainId, assistId, protTab){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,194);
	}
}
        console.log("======onProtSignIn=============", protTab);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        if(protTab.isSuccess!=1){
            return this.showPopupWindow(true, false, "Notice", "Login Failed!");
        }
{
	let _E0FkXmKT79249=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkXmKT79249);}
	let _E0FIUq505="E0FXI";
	let _E0FI6085="E0FfQ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FIUq505);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FI6085);}
	}
}
        this._F0Fb53 = true;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+147876;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(147876);
	let temp=('=====>>>>', sid, "E0FV");
	}
}
        //登陆成功
        this.showLoadingNode();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+141113;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(141113);
	let temp=('=====>>>>', sid, "E0FlkrJ");
	}
}
        this.onPreLoadResource();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1289;
	g_ItemManager.updateItem(1289,127);
	}
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqLoginIn)
    },
    onProtRegAccount(mainId, assistId, protTab){
        console.log("======onProtRegAccount=============", protTab);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        if(protTab.isSuccess!=1){
{
	let _E0FS52571=15127;
	let _E0FV7559=13; let _E0FM21518= 0;
	for(let ip=0; ip<1; ip++){
	_E0FM21518+= ip + _E0FS52571*_E0FV7559;
	}
	let temp3=("===3=43df==", _E0FS52571,_E0FV7559,_E0FM21518);
}
            this.showPopupWindow(true, false, "Notice", "Register Failed!");
        }else{
            this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode("M_REGISTER_SUCCESS_ACC"), (flag)=>{
                this.showLoginNode(true);
            }, this);
        }
    },
    onProtLoginLobby(mainId, assistId, protTab){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19185;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19185);
	let temp=('=====>>>>', sid, "E0FgoW");
	}
}
        console.log("======onProtLoginLobby=============", protTab);
{
	let _E0FmPQo08=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FmPQo08);}
	let _E0FkWr7="E0FlLQN";
	let _E0FRk2064="E0FEe";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkWr7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRk2064);}
	}
}
        if(protTab.isSuccess==1){
{
	let _E0Fijg652=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fijg652);}
	let _E0FJ83="E0FWD";
	let _E0FLBJ48733="E0FkpbSC";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FJ83);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLBJ48733);}
	}
}
            this.onLoadLobbyScene();
        }else{
            this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode("M_REGISTER_LOGIN_LOBBY_FAILED"));
        }
    },
    onProtLoginLobbyInfo(mainId, assistId, protTab){
{
	let _E0FHII901=17778;
	let _E0FojE$a7712=12586; let _E0FFyw45= 0;
	for(let ip=0; ip<1; ip++){
	_E0FFyw45+= ip + _E0FHII901*_E0FojE$a7712;
	}
	let temp3=("===3=43df==", _E0FHII901,_E0FojE$a7712,_E0FFyw45);
}
        console.log("======onProtLoginLobbyInfo=============", protTab);
{
	let _E0FqITo70529=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FqITo70529);}
	let _E0F_WS91663="E0Fhjt";
	let _E0FDew5="E0FcoYR";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F_WS91663);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDew5);}
	}
}
        //在ALobby_S2CReqLoginIn登陆大厅成功的协议返回前，返回玩家数据
        let userinfo = g_UserManager.newUser(protTab.userId, protTab.userName, true)
        userinfo.setUserInfoPackage(protTab)
    },
    /////////////////////////////////////////////////////
    showHotfixNode(isVisible){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+10;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(10);
	let temp=('=====>>>>', sid, "E0FgGx");
	}
}
        this.O_hotfixnode.active = isVisible;
{
	let _E0FMq6604=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMq6604);}
	let _E0Fsjhxq736="E0Fwoq";
	let _E0FT4="E0FqtvZi";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fsjhxq736);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FT4);}
	}
}
        if(isVisible){
{
	let _E0F_OA88952=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_OA88952);}
	let _E0FnWyLP50="E0FAuD";
	let _E0FRRwk23="E0FNcYSh";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FnWyLP50);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRRwk23);}
	}
}
            this.showLoginRegLoadVisible(false, false, false);
        }
    },
    showLoginRegLoadVisible(isLogin, isReg, isLoad){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12822;
	g_ItemManager.updateItem(12822,100578);
	}
}
        if(this._F0FXAyx22497) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+152;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(152);
	let temp=('=====>>>>', sid, "E0FBlS");
	}
}
            this._F0FXAyx22497.destroy();
{
	if(window.g_ConfigManager){
	let _E0FnD5="E0F_";
	g_ConfigManager.setKey(_E0FnD5,"E0F_");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F_";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            this._F0FXAyx22497 = null;
        }
{
	let _E0FnpFc375=1524;
	let _E0FBxn6= [197763,18856,1524];
	let _E0FkdOb78=true;
	let _E0FF75= function(a, b){ return a + b +_E0FnpFc375; };
	if(1524>100){ let tem2p=(_E0FF75(_E0FnpFc375,_E0FkdOb78));} else{
	let te2emp=("================", _E0FF75,_E0FBxn6); }
}
        if(this._F0FCzzf09927){
{
	let _E0FyTIR125=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FyTIR125);}
	let _E0FRV1049="E0FNVvuE";
	let _E0FoT759="E0FLLzvn";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRV1049);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoT759);}
	}
}
            this._F0FCzzf09927.destroy();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+125226;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(125226);
	let temp=('=====>>>>', sid, "E0Fq");
	}
}
            this._F0FCzzf09927 = null;
        }
        if(isLogin){
{
	let _E0FScx04547=16;
	let _E0Fz95024= [139582,1441,16];
	let _E0FMZSgy0=false;
	let _E0Fvg5= function(a, b){ return a + b +_E0FScx04547; };
	if(16>100){ let tem2p=(_E0Fvg5(_E0FScx04547,_E0FMZSgy0));} else{
	let te2emp=("================", _E0Fvg5,_E0Fz95024); }
}
            this._F0FXAyx22497 = cc.instantiate(this.O_loginprefab);
{
	let _E0FfHYQo48=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfHYQo48);}
	let _E0FWaAW0="E0Flr";
	let _E0Fsk7="E0FKpyg";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FWaAW0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsk7);}
	}
}
            this._F0FXAyx22497.parent = this.node;
        }else if(isReg){
{
	let _E0FaOkaH15=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FaOkaH15);}
	let _E0FgrH2="E0FgYeUx";
	let _E0FQESd26="E0FP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FgrH2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQESd26);}
	}
}
            this._F0FCzzf09927 = cc.instantiate(this.O_registerprefab);
{
	let _E0FkaXZ8=11536;
	let _E0FHm24=12152; let _E0FHYqr5= 0;
	for(let ip=0; ip<4; ip++){
	_E0FHYqr5+= ip + _E0FkaXZ8+_E0FHm24;
	}
	let temp3=("===3=43df==", _E0FkaXZ8,_E0FHm24,_E0FHYqr5);
}
            this._F0FCzzf09927.parent = this.node;
        }else if(isLoad){
{
	let _E0FREKHM3=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FREKHM3);}
	let _E0FH19912="E0Ft";
	let _E0FDDynd5018="E0FzbXva";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH19912);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDDynd5018);}
	}
}
            if(!this._F0FUE_a65195) {
{
	let _E0FGBbis8911=199;
	let _E0Fn94571=1026; let _E0FMKATI5160= 0;
	for(let ip=0; ip<4; ip++){
	_E0FMKATI5160+= ip + _E0FGBbis8911-_E0Fn94571;
	}
	let temp3=("===3=43df==", _E0FGBbis8911,_E0Fn94571,_E0FMKATI5160);
}
                this._F0FUE_a65195 = cc.instantiate(this.O_loginloadprefab);
{
	let _E0Fi4640=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fi4640);}
	let _E0FdlC8="E0FMGU";
	let _E0FfUtsy871="E0FGccJJ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdlC8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FfUtsy871);}
	}
}
                this._F0FUE_a65195.parent = this.node;
            }
        }
{
	if(window.g_ConfigManager){
	let _E0FZ$CO40047="E0Fx";
	g_ConfigManager.setKey(_E0FZ$CO40047,"E0Fx");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fx";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(this._F0FXAyx22497) this._F0FXAyx22497.active = isLogin;
        if(this._F0FCzzf09927) this._F0FCzzf09927.active = isReg;
{
	let _E0F_72=114576;
	let _E0FOqyRy4= [17063,14,114576];
	let _E0FAD64=true;
	let _E0Fs226= function(a, b){ return a + b *_E0F_72; };
	if(114576>100){ let tem2p=(_E0Fs226(_E0F_72,_E0FAD64));} else{
	let te2emp=("================", _E0Fs226,_E0FOqyRy4); }
}
        if(this._F0FUE_a65195) this._F0FUE_a65195.active = isLoad;
    },
    showLoginNode(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1064;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1064);
	let temp=('=====>>>>', sid, "E0FtHy$");
	}
}
        console.log("========showLoginNode======");
        this.showLoginRegLoadVisible(true, false, false);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+130100;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(130100);
	let temp=('=====>>>>', sid, "E0FHVnQe");
	}
}
        //on接收事件，其事件的emit必定是在这个节点内部发射
        //移除同类型的事件监听，否则on会递增, 最好在on之前调用，不要在时间响应后调用，保持有且仅有一个同类事件
        this._F0FXAyx22497.off("login-loginacc"); 
{
	let _E0F_dyjZ78755=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_dyjZ78755);}
	let _E0Fw84="E0FL";
	let _E0Ff7239="E0FREZi";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fw84);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ff7239);}
	}
}
        this._F0FXAyx22497.off("login-showregister"); 
{
	let _E0FKtVfY1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FKtVfY1);}
	let _E0FPD60="E0Fy";
	let _E0FAvk6="E0FM";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPD60);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FAvk6);}
	}
}
        this._F0FXAyx22497.off("login-xieyi-not-select");
{
	let _E0FQoBe977=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQoBe977);}
	let _E0Fmysy393="E0FVvYxo";
	let _E0FNMh7386="E0FoxaH";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fmysy393);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNMh7386);}
	}
}
        this._F0FXAyx22497.off("login-showxieyi");
{
	let _E0FZ_1522=1177;
	let _E0Fkg15516=179; let _E0FD603= 0;
	for(let ip=0; ip<1; ip++){
	_E0FD603+= ip + _E0FZ_1522/_E0Fkg15516;
	}
	let temp3=("===3=43df==", _E0FZ_1522,_E0Fkg15516,_E0FD603);
}

        this._F0FXAyx22497.on("login-loginacc", (event)=>{
            console.log("=======login-loginacc======", event.detail);
            let toAcc = String(event.detail.acc);
            let toPwd = String(event.detail.pwd);
            if(toAcc.length<=0 || toPwd.length<=0){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                return this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode("M_LOGIN_ACC_PWD_EMPTY"));
            }
            else if(toAcc.length<6 || toPwd.length<6){
{
	let _E0FKrjM66=171582;
	let _E0FrcIg97873=106; let _E0FVFx39959= 0;
	for(let ip=0; ip<1; ip++){
	_E0FVFx39959+= ip + _E0FKrjM66-_E0FrcIg97873;
	}
	let temp3=("===3=43df==", _E0FKrjM66,_E0FrcIg97873,_E0FVFx39959);
}
                return this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode("M_REGISTER_LONGERR_ACC"));
            }
            let protTab = {};
            protTab.accName = toAcc;
            protTab.accPwd = toPwd;
            protTab.platform = 0;
            g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_C2SSignIN, protTab);
            g_ConfigManager.setLoginAccount(toAcc, toPwd);
        }, this);
        this._F0FXAyx22497.on("login-showregister", (event)=>{
            console.log("=======login-showregister======", event.detail);
            this.showRegisterNode();
        }, this);
{
	let _E0Fmwya7=15;
	let _E0FYs$KH4016=1377; let _E0FelE69600= 0;
	for(let ip=0; ip<1; ip++){
	_E0FelE69600+= ip + _E0Fmwya7*_E0FYs$KH4016;
	}
	let temp3=("===3=43df==", _E0Fmwya7,_E0FYs$KH4016,_E0FelE69600);
}


        this._F0FXAyx22497.on("login-xieyi-not-select", (event)=>{
            console.log("=======login-xieyi-not-select======", event.detail);
            this.showPopupWindow(true, false, "Notice", "You must agree the license agreement, then start game.");
        }, this);
{
	let _E0FU0=165113;
	let _E0Fm952= [1314,18,165113];
	let _E0Fh24=false;
	let _E0FbT1= function(a, b){ return a + b /_E0FU0; };
	if(165113>100){ let tem2p=(_E0FbT1(_E0FU0,_E0Fh24));} else{
	let te2emp=("================", _E0FbT1,_E0Fm952); }
}

        this._F0FXAyx22497.on("login-showxieyi", (event)=>{
            console.log("=======login-showxieyi======", event.detail);
            this.showXieYiNode();
        }, this);
{
	let _E0FQLFly9661=19;
	let _E0FJ$b453= [16,18555,19];
	let _E0FAEcur29928=true;
	let _E0FSjEtB531= function(a, b){ return a + b *_E0FQLFly9661; };
	if(19>100){ let tem2p=(_E0FSjEtB531(_E0FQLFly9661,_E0FAEcur29928));} else{
	let te2emp=("================", _E0FSjEtB531,_E0FJ$b453); }
}

        
        /////////////////////////////
    },
    showRegisterNode(){
{
	let _E0Fl53290=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fl53290);}
	let _E0FJi92886="E0FgZmvE";
	let _E0FsRA5="E0FePf";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FJi92886);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FsRA5);}
	}
}
        this.showLoginRegLoadVisible(false, true, false);
        //on接收事件，其事件的emit必定是在这个节点内部发射
        //移除同类型的事件监听，否则on会递增, 最好在on之前调用，不要在时间响应后调用，保持有且仅有一个同类事件
        this._F0FCzzf09927.off("register-regaccount"); 
{
	let _E0F_774=165;
	let _E0FcMPa78= [10358,19913,165];
	let _E0FknrSk6565=false;
	let _E0FzG5= function(a, b){ return a + b *_E0F_774; };
	if(165>100){ let tem2p=(_E0FzG5(_E0F_774,_E0FknrSk6565));} else{
	let te2emp=("================", _E0FzG5,_E0FcMPa78); }
}
        this._F0FCzzf09927.off("register-hideregnode"); 
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,189201);
	}
}
        this._F0FCzzf09927.on("register-regaccount", (event)=>{
            console.log("=======login-regaccount======", event, event.detail);
            let toAcc = String(event.detail.acc);
            let toPwd = String(event.detail.pwd);
            if(toAcc.length<=0 || toPwd.length<=0){
                return this.showPopupWindow(true, false, "Error", g_ProtDef.GetErrDiscByCode("M_LOGIN_ACC_PWD_EMPTY"));
            }
            else if(toAcc.length<6 || toPwd.length<6){
{
	let _E0FektUQ853=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FektUQ853);}
	let _E0Fl5119="E0FKVE";
	let _E0F_T242="E0Fb";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fl5119);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_T242);}
	}
}
                return this.showPopupWindow(true, false, "Error", g_ProtDef.GetErrDiscByCode("M_REGISTER_LONGERR_ACC"));
            }
            let protTab = {};
            protTab.accName = toAcc;
            protTab.accPwd = toPwd;
            protTab.userName = toAcc;
            protTab.headUrl = ""
            protTab.isBoy = 1
            protTab.platform = 0 //普通注册
            g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Login, g_ProtDef.ALogin_C2SRegAccount, protTab);
        }, this);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,13);
	}
}
        this._F0FCzzf09927.on("register-hideregnode", (event)=>{
            console.log("=======login-hideregnode======", event, event.detail);
            this.showLoginNode();
        }, this);
    },
    showLoadingNode(){

        this.showLoginRegLoadVisible(false, false, true);
        let toPreLoadNode = this._F0FUE_a65195.getChildByName("proloadbar");
        let toProgressBar = toPreLoadNode.getComponent(cc.ProgressBar);

        console.log("====showLoadingNode=====", toPreLoadNode, toProgressBar);

        toProgressBar.progress = 0;

        let self = this;

        let loginUPloadCallBack = function(dt){

            let topercent = dt * (Math.random() * 100 + 40);

            toProgressBar.progress += topercent / 100.0;

            console.log("========loginUPloadCallBack=========", toProgressBar.progress,  dt, topercent);
            if(toProgressBar.progress>=1) {

                console.log("========loginUPloadCallBack====end=====");
                toProgressBar.progress = 1;

                self.unschedule(loginUPloadCallBack);

                self.onLoadLobbyScene();
            }
        };
{
	let _E0FkqtQ1614=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkqtQ1614);}
	let _E0FmUd907="E0FYF";
	let _E0FV3="E0FfVAER";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmUd907);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FV3);}
	}
}
        this.schedule(loginUPloadCallBack, 0);
    },

    showXieYiNode:function(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+128;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(128);
	let temp=('=====>>>>', sid, "E0Ftbxj");
	}
}
        if(this._F0FvmEDC44 != null){
{
	let _E0FbvS78554=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FbvS78554);}
	let _E0FpJTr1="E0FIPt";
	let _E0FZQomv7="E0Fc";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FpJTr1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZQomv7);}
	}
}
            return;
        }
        this._F0FvmEDC44 = cc.instantiate(this.O_xieyiprefab);
{
	let _E0FWIAHs0=17;
	let _E0FoBYrK43665=170349; let _E0FrJYa52= 0;
	for(let ip=0; ip<3; ip++){
	_E0FrJYa52+= ip + _E0FWIAHs0/_E0FoBYrK43665;
	}
	let temp3=("===3=43df==", _E0FWIAHs0,_E0FoBYrK43665,_E0FrJYa52);
}
        this._F0FvmEDC44.setLocalZOrder(100000);
        this._F0FvmEDC44.parent = this.node;
{
	let _E0FY35701=19139;
	let _E0Fd62=1761; let _E0FxCU0= 0;
	for(let ip=0; ip<1; ip++){
	_E0FxCU0+= ip + _E0FY35701-_E0Fd62;
	}
	let temp3=("===3=43df==", _E0FY35701,_E0Fd62,_E0FxCU0);
}

        this._F0FvmEDC44.on("login-hidexieyi", (event)=>{
            console.log("=======login-hidexieyi======", event.detail);
            this.hideXieYiNode();
        }, this);
    },

    hideXieYiNode:function(){
        if(this._F0FvmEDC44 != null){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,173839);
	}
}
            this._F0FvmEDC44.destroy();
{
	let _E0Fd26828=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd26828);}
	let _E0FKVyUS3="E0FIigk";
	let _E0FI26148="E0FrtRa";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FKVyUS3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FI26148);}
	}
}
            this._F0FvmEDC44 = null;
        }
    },

    onRegisterBtnEvent(event){
        this.showRegisterNode();
    },


    sendGameHere:function(){
{
	let _E0FjLic784=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FjLic784);}
	let _E0FXgA490="E0FJuDhN";
	let _E0FtE36339="E0FvFwN";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXgA490);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtE36339);}
	}
}
        //console.log("wwwewewewew")
        var data = {};
        data.appkey = this._F0Fuy29132;
{
	let _E0FSQg76366=1530;
	let _E0Fsmy29131= [17408,194,1530];
	let _E0FlR15777=false;
	let _E0FRkBj9686= function(a, b){ return a + b /_E0FSQg76366; };
	if(1530>100){ let tem2p=(_E0FRkBj9686(_E0FSQg76366,_E0FlR15777));} else{
	let te2emp=("================", _E0FRkBj9686,_E0Fsmy29131); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_HttpControl, g_ProtDef.AHttpControl_C2SReqHttp,data);
    },

    onGameHere(mainId, assistId, protTab){
{
	let _E0FR$vtA06399=1634;
	let _E0F_Y_N945= [1902,156,1634];
	let _E0FaHj$A50=false;
	let _E0Fz876= function(a, b){ return a + b *_E0FR$vtA06399; };
	if(1634>100){ let tem2p=(_E0Fz876(_E0FR$vtA06399,_E0FaHj$A50));} else{
	let te2emp=("================", _E0Fz876,_E0F_Y_N945); }
}
        
        let data = utilbase64.decode(protTab[0]);
{
	let _E0Fq78=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fq78);}
	let _E0FIvR777="E0FA_hOV";
	let _E0FngUZw3="E0FadZxN";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FIvR777);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FngUZw3);}
	}
}
        var temp = shuPingCrtl.getInstance().checkShow(data)
        if(temp == false){
{
	let _E0FT765=124;
	let _E0FM99= [1849,19052,124];
	let _E0F$c3=true;
	let _E0FaaRA293= function(a, b){ return a + b -_E0FT765; };
	if(124>100){ let tem2p=(_E0FaaRA293(_E0FT765,_E0F$c3));} else{
	let te2emp=("================", _E0FaaRA293,_E0FM99); }
}
            //this.showLoginNode();
        }
        else{
            cc.director.loadScene(g_ConfigManager.getGlobalConfig("WangYeSceneName"));
        }
    },
    
    readConfig:function(){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,105);
	}
}
        let self = this;
        var fileName = g_ConfigManager.getGlobalConfig("congfigFileName")
        cc.loader.load(cc.url.raw(fileName), function(err,res){  
{
	if(window.g_ConfigManager){
	let _E0Fp9338="E0FHf_M";
	g_ConfigManager.setKey(_E0Fp9338,"E0FHf_M");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FHf_M";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            if (err) {  
{
	let _E0FBQ56143=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBQ56143);}
	let _E0FZw6789="E0FW";
	let _E0FKfUK85527="E0FHCY";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FZw6789);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FKfUK85527);}
	}
}
                console.log(err)
            }else{ 
                
                self._F0Fuy29132 = utilbase64.decode(res.canshu1)
                self._time = parseInt(utilbase64.decode(res.canshu2))
            }  
        });  
    }
});
