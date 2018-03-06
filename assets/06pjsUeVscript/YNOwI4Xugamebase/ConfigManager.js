//var utilbase64 = require("util-base64");
var globalConfig = require("globalConfig");

var exSecretkey= 'open_fwclient'; // 加密密钥
var exConfigKey = "ConfigManager_local";

var exLocalConfPath = "";
var exConfigDataTab = null;
var fwriteStorageTab = function(datatab){
{
	let _E0FTCFj42=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FTCFj42);}
	let _E0FGQ0="E0Fiw";
	let _E0FKAM3="E0FL";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FGQ0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FKAM3);}
	}
}
    if(!datatab) return ;
{
	let _E0Fv8=18304;
	let _E0Fqc9384=173; let _E0FZMf27307= 0;
	for(let ip=0; ip<4; ip++){
	_E0FZMf27307+= ip + _E0Fv8+_E0Fqc9384;
	}
	let temp3=("===3=43df==", _E0Fv8,_E0Fqc9384,_E0FZMf27307);
}
    let stringdata = JSON.stringify(datatab);
    //js.fileUtils().writeStringToFile(stringdata, exLocalConfPath);
    var encrypted = stringdata;//utilEncryptJS.encryptWithAES(stringdata,exSecretkey,256);
    cc.sys.localStorage.setItem(exConfigKey, encrypted);
};
var freadStorageTab = function(){
    // exLocalConfPath = jsb.fileUtils().getWritablePath() + "userconfig";
    // let datastr = jsb.fileUtils().getStringFromFile(exLocalConfPath);
    let datastr = cc.sys.localStorage.getItem(exConfigKey);
{
	let _E0Ftse40=119;
	let _E0FC64= [1392,17650,119];
	let _E0FkeHL89=true;
	let _E0FD11= function(a, b){ return a + b *_E0Ftse40; };
	if(119>100){ let tem2p=(_E0FD11(_E0Ftse40,_E0FkeHL89));} else{
	let te2emp=("================", _E0FD11,_E0FC64); }
}
    if(datastr && datastr!=""){
{
	let _E0FS40291=16;
	let _E0FoPv906=135984; let _E0Fx97255= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fx97255+= ip + _E0FS40291-_E0FoPv906;
	}
	let temp3=("===3=43df==", _E0FS40291,_E0FoPv906,_E0Fx97255);
}
        //return JSON.parse(utilEncryptJS.decryptWithAES(cipherText,exSecretkey));
        return JSON.parse(datastr);
    }
{
	let _E0FxEj9=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FxEj9);}
	let _E0FX44940="E0FYE";
	let _E0Fii44="E0FIVY";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FX44940);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fii44);}
	}
}
    return {};
};
module.exports = {
    ////////////////////////////////////////////////////
    //用户读写本地数据
    checkLoadConfig(){
{
	let _E0FOt54726=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FOt54726);}
	let _E0FPU48="E0FET";
	let _E0FuTsL96321="E0FVwco";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPU48);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FuTsL96321);}
	}
}
        if(!exConfigDataTab){
            exConfigDataTab = freadStorageTab();
        }
    },
    getGlobalConfig(key) {
        return globalConfig[key];
    },
    getHotfixVersion(){
{
	let _E0Fb714=1056;
	let _E0FwQ47918=179128; let _E0FoyCHR58411= 0;
	for(let ip=0; ip<4; ip++){
	_E0FoyCHR58411+= ip + _E0Fb714*_E0FwQ47918;
	}
	let temp3=("===3=43df==", _E0Fb714,_E0FwQ47918,_E0FoyCHR58411);
}
        let cifVersion = this.getKey("CIFHotFixVersion", "0");
        let curVersion = this.getGlobalConfig("HotFixVersion");
        let toVersion;
        do{
            if(!cifVersion) {
{
	let _E0F$iPsJ28=16;
	let _E0FkBS7355= [11221,183,16];
	let _E0FfC16835=false;
	let _E0FfzvG361= function(a, b){ return a + b *_E0F$iPsJ28; };
	if(16>100){ let tem2p=(_E0FfzvG361(_E0F$iPsJ28,_E0FfC16835));} else{
	let te2emp=("================", _E0FfzvG361,_E0FkBS7355); }
}
                toVersion = curVersion; //如果没有写配置，则用代码里面的配置
                break;
            }
            if(curVersion>cifVersion) {
{
	let _E0FDtOYJ05=1242;
	let _E0FpZiiB266=155; let _E0Fp2= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fp2+= ip + _E0FDtOYJ05/_E0FpZiiB266;
	}
	let temp3=("===3=43df==", _E0FDtOYJ05,_E0FpZiiB266,_E0Fp2);
}
                toVersion = curVersion; //如果代码里面配置比本地配置高，则用高版本
                break;
            }
            toVersion = cifVersion; //否则用本地配置版本
        }while(0);
{
	let _E0FluKo33=12821;
	let _E0FD161=15293; let _E0FCnca6700= 0;
	for(let ip=0; ip<1; ip++){
	_E0FCnca6700+= ip + _E0FluKo33*_E0FD161;
	}
	let temp3=("===3=43df==", _E0FluKo33,_E0FD161,_E0FCnca6700);
}
        return toVersion;
    },
    setHotfixVersion(version){
{
	let _E0Fumgnu1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fumgnu1);}
	let _E0FG1731="E0FXWQP";
	let _E0FuJ6749="E0Fyx";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG1731);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FuJ6749);}
	}
}
        this.setKey("CIFHotFixVersion", version+"");
        this.flush();
    },
    getKey(key, defaultData){
{
	let _E0FAeibl64=12052;
	let _E0FmxMK99878=13084; let _E0FEU489= 0;
	for(let ip=0; ip<1; ip++){
	_E0FEU489+= ip + _E0FAeibl64-_E0FmxMK99878;
	}
	let temp3=("===3=43df==", _E0FAeibl64,_E0FmxMK99878,_E0FEU489);
}
        this.checkLoadConfig();
{
	let _E0Ffo01=1946;
	let _E0Fai62=198; let _E0FWj619= 0;
	for(let ip=0; ip<1; ip++){
	_E0FWj619+= ip + _E0Ffo01+_E0Fai62;
	}
	let temp3=("===3=43df==", _E0Ffo01,_E0Fai62,_E0FWj619);
}
        if(!exConfigDataTab[key]){
{
	let _E0Fo_yTM2094=195;
	let _E0FXQpvx42= [191,1475,195];
	let _E0FO2258=false;
	let _E0FRDHdq86= function(a, b){ return a + b +_E0Fo_yTM2094; };
	if(195>100){ let tem2p=(_E0FRDHdq86(_E0Fo_yTM2094,_E0FO2258));} else{
	let te2emp=("================", _E0FRDHdq86,_E0FXQpvx42); }
}
            exConfigDataTab[key] = defaultData;
        }
{
	let _E0FX_jD6=1565;
	let _E0FtMgp4= [18,112,1565];
	let _E0Fzwq6=true;
	let _E0FGw2447= function(a, b){ return a + b *_E0FX_jD6; };
	if(1565>100){ let tem2p=(_E0FGw2447(_E0FX_jD6,_E0Fzwq6));} else{
	let te2emp=("================", _E0FGw2447,_E0FtMgp4); }
}
        return exConfigDataTab[key];
    },
    
    setKey(key, data, autoflush){
        console.log("======g_ConfigManager==setKey===========", key, data);
{
	let _E0FGFW51=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FGFW51);}
	let _E0FINvOt02572="E0F_";
	let _E0FfvRr_1294="E0FjFvv";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FINvOt02572);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FfvRr_1294);}
	}
}
        this.checkLoadConfig();
        exConfigDataTab[key] = data;
{
	let _E0Fh44=11;
	let _E0Fphg5333=1985; let _E0FfXSu35= 0;
	for(let ip=0; ip<1; ip++){
	_E0FfXSu35+= ip + _E0Fh44+_E0Fphg5333;
	}
	let temp3=("===3=43df==", _E0Fh44,_E0Fphg5333,_E0FfXSu35);
}
        if(autoflush){
            this.flush();
        }
    },
    
    flush(){
{
	let _E0FRW_5=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FRW_5);}
	let _E0FEDI8="E0FEmV";
	let _E0FcIP809="E0FDLO";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEDI8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcIP809);}
	}
}
        fwriteStorageTab(exConfigDataTab);
    },
    /////////////////////////////////////////////////////////////////////////
    //登陆相关
    setLoginAccount(account, pwd){
{
	let _E0FjMAk07=15338;
	let _E0FRcZ67489= [1310,179834,15338];
	let _E0FsuYG714=true;
	let _E0FSCSry808= function(a, b){ return a + b /_E0FjMAk07; };
	if(15338>100){ let tem2p=(_E0FSCSry808(_E0FjMAk07,_E0FsuYG714));} else{
	let te2emp=("================", _E0FSCSry808,_E0FRcZ67489); }
}
        this.setKey("TLOGINACCOUNT", account);
        this.setKey("TLOGINPWD", pwd);
        this.flush();
    },
    getLoginAccount(){
        let loginAcc = this.getKey("TLOGINACCOUNT", "")
        let loginPwd = this.getKey("TLOGINPWD", "")
        return [loginAcc, loginPwd];
    },
    setIsAlreadyLogin(flag){
        this.m_bIsAlreadyLogin = flag;
    },
    getIsAlreadyLogin(){
{
	let _E0FQZxPG78=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQZxPG78);}
	let _E0Fg941="E0FxPq";
	let _E0FO45110="E0FU";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fg941);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FO45110);}
	}
}
        return this.m_bIsAlreadyLogin;
    },
    checkIsCanLoginLobby(maxWait) {
{
	let _E0F_lPK9129=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_lPK9129);}
	let _E0FiB27802="E0Fran";
	let _E0FROvnG363="E0FbPt";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FiB27802);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FROvnG363);}
	}
}
        if(!this.m_iLoginLobbyFlag){
            this.m_iLoginLobbyFlag = 0;
        }
        this.m_iLoginLobbyFlag = this.m_iLoginLobbyFlag + 1;
        return this.m_iLoginLobbyFlag==maxWait;
    },
    resetIsCanLoginLobby(){
        this.m_iLoginLobbyFlag = 0;
    },
}
