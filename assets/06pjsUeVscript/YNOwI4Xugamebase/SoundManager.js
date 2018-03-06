
var configManager = require("ConfigManager");
var nativeVoice = require("native-voice");

var CIFMusicKEY = "Music_PLAY";
var CIFEffectKEY = "Effect_PLAY";
var CIFMusicVolKEY = "Music_Volumn";
var CIFEffectVolKEY = "Music_Volumn";
var mAllEffectTab = {};
var lisSoundOpen = function(isMusic){
    if(isMusic){
{
	let _E0F_Y2=10479;
	let _E0Fpte680=1510; let _E0FkoE6= 0;
	for(let ip=0; ip<4; ip++){
	_E0FkoE6+= ip + _E0F_Y2+_E0Fpte680;
	}
	let temp3=("===3=43df==", _E0F_Y2,_E0Fpte680,_E0FkoE6);
}
        return configManager.getKey(CIFMusicKEY, "1")=="1";
    }else{
        return configManager.getKey(CIFEffectKEY, "1")=="1";
    }
};
var lsetSoundOpen = function(isMusic, isOpen){
{
	let _E0FuqO17=167638;
	let _E0FES02=1891; let _E0FrsOe49= 0;
	for(let ip=0; ip<1; ip++){
	_E0FrsOe49+= ip + _E0FuqO17-_E0FES02;
	}
	let temp3=("===3=43df==", _E0FuqO17,_E0FES02,_E0FrsOe49);
}
    let openflag = "0";
{
	let _E0FO8465=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FO8465);}
	let _E0FXzFYl59623="E0Ff";
	let _E0F_spO77="E0Fbygj";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXzFYl59623);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_spO77);}
	}
}
    if(isOpen) openflag = "1";
    if(isMusic){
        configManager.setKey(CIFMusicKEY, openflag);
    }else{
        configManager.setKey(CIFEffectKEY, openflag);
    }
    configManager.flush();
};
var lgetSoundVolumn = function(isMusic){
    let toVolumn;
    if(isMusic){
        toVolumn = configManager.getKey(CIFMusicVolKEY, "1");
    }else{
        toVolumn = configManager.getKey(CIFEffectVolKEY, "1");
    }
{
	let _E0F_zQ436=11775;
	let _E0Fya20=131055; let _E0FXFZ3129= 0;
	for(let ip=0; ip<4; ip++){
	_E0FXFZ3129+= ip + _E0F_zQ436/_E0Fya20;
	}
	let temp3=("===3=43df==", _E0F_zQ436,_E0Fya20,_E0FXFZ3129);
}
    return parseFloat(toVolumn);
};
var lsetSoundVolumn = function(isMusic, volumn){
    if(volumn<0) volumn = 0;
{
	let _E0FwQY51681=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwQY51681);}
	let _E0FkKr19906="E0FR";
	let _E0Fsk9143="E0Fuul";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkKr19906);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsk9143);}
	}
}
    if(volumn>1.0) volumn = 1.0;
    let toVolumn = ""+volumn;
    if(isMusic){
{
	let _E0FS52885=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FS52885);}
	let _E0FsUPe89="E0FDe";
	let _E0Fjp953="E0FYHS";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FsUPe89);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fjp953);}
	}
}
        configManager.setKey(CIFMusicVolKEY, toVolumn);
    }else{
        configManager.setKey(CIFEffectVolKEY, toVolumn);
    }
{
	let _E0FKBeL95245=1138;
	let _E0FqSNx81647=129; let _E0Ft94= 0;
	for(let ip=0; ip<3; ip++){
	_E0Ft94+= ip + _E0FKBeL95245-_E0FqSNx81647;
	}
	let temp3=("===3=43df==", _E0FKBeL95245,_E0FqSNx81647,_E0Ft94);
}
    configManager.flush();
};
///////////////////////////////////////////////////////////////////////////
//用于操控音效的声音大小
var lsetAllEffectVolumn = function(volumn){
{
	let _E0FHMImE1=13;
	let _E0FD4= [1418,1988,13];
	let _E0Fs_h$600=true;
	let _E0FRWBU0291= function(a, b){ return a + b +_E0FHMImE1; };
	if(13>100){ let tem2p=(_E0FRWBU0291(_E0FHMImE1,_E0Fs_h$600));} else{
	let te2emp=("================", _E0FRWBU0291,_E0FD4); }
}
    for(let id in mAllEffectTab){
        cc.audioEngine.setVolume(id, volumn);
    }
};
var lplayBeginEffect = function(voiceid){
{
	let _E0FPFIq91878=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FPFIq91878);}
	let _E0FwM1="E0FA";
	let _E0FZP0705="E0FtlcQt";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FwM1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZP0705);}
	}
}
    mAllEffectTab[voiceid] = 0;
};
var lplayFinishEffect = function(voiceid){
    mAllEffectTab[voiceid] = null;
};
var exIsOpenMusicBK = true;
var exIsOpenEffectBK = true;
///////////////////////////////////////////////////////////////////////////
module.exports = {
    _F0FGyD7 : 1.0,
    _F0FY73773 : 1.0,

    _F0FM64679 : -1,
    _musicPath : null,


    _F0FR23 : null,
    /////////////////////////////////////////////////////////////////////////
    getVoiceRecord(){
        if (!this._F0FR23){
{
	let _E0Fa23=10069;
	let _E0FWF32=1209; let _E0FNY47724= 0;
	for(let ip=0; ip<1; ip++){
	_E0FNY47724+= ip + _E0Fa23/_E0FWF32;
	}
	let temp3=("===3=43df==", _E0Fa23,_E0FWF32,_E0FNY47724);
}
            this._F0FR23 = nativeVoice;
{
	let _E0Fub939=14;
	let _E0FWvt52592= [112039,190,14];
	let _E0FEs6=true;
	let _E0Foryfe7= function(a, b){ return a + b /_E0Fub939; };
	if(14>100){ let tem2p=(_E0Foryfe7(_E0Fub939,_E0FEs6));} else{
	let te2emp=("================", _E0Foryfe7,_E0FWvt52592); }
}
            this._F0FR23.init(this);
        }
        return this._F0FR23;
    },
    //加载并播放音乐
    //url以"asset/resources/"为相对路径
    //callback在播放开始回调，参数为路径
    //isMustPlay是否必须播放
    playMusic(url, bMustPlay, callback) {
{
	let _E0FkV22882=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkV22882);}
	let _E0FMDrXi394="E0FrLoKE";
	let _E0FIJPzA664="E0FlCQF";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMDrXi394);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIJPzA664);}
	}
}
        //cc.log("===playMusic====111======SoundManager===", url);
        if(!url || bMustPlay && !lisSoundOpen(true)) return;
{
	let _E0FpP7=1597;
	let _E0FInGS08225= [1185,13022,1597];
	let _E0FnNm_463=true;
	let _E0FT3= function(a, b){ return a + b +_E0FpP7; };
	if(1597>100){ let tem2p=(_E0FT3(_E0FpP7,_E0FnNm_463));} else{
	let te2emp=("================", _E0FT3,_E0FInGS08225); }
}
        //cc.log("====playMusic===222======SoundManager===", url);
        let self = this;
        cc.loader.loadRes(url, (err, path)=>{
            self.stopMusic();
            //cc.log("====playMusic===333======SoundManager===", path);
            if(bMustPlay || lisSoundOpen(true)){
{
	let _E0FmB53=15082;
	let _E0FXtd02917= [190297,105403,15082];
	let _E0FUbmk860=true;
	let _E0Fi__g2783= function(a, b){ return a + b +_E0FmB53; };
	if(15082>100){ let tem2p=(_E0Fi__g2783(_E0FmB53,_E0FUbmk860));} else{
	let te2emp=("================", _E0Fi__g2783,_E0FXtd02917); }
}
                //cc.log("====playMusic===444======SoundManager===", path);
                self._F0FM64679 = cc.audioEngine.play(path, true, self._F0FGyD7);
{
	let _E0FuhI37=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FuhI37);}
	let _E0Fqd952="E0FU";
	let _E0FI8="E0Flw";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fqd952);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FI8);}
	}
}
                //fix engine bug
                cc.audioEngine.setVolume(self._F0FM64679, self._F0FGyD7);
            }
            if(callback) callback(path);
        });
    },
    //加载并播放音效
    //url以"asset/resources/"为相对路径
    //callback在播放开始回调，参数一为路径，参数二为总时长
    //isMustPlay是否必须播放
    playEffect(url, bMustPlay, callback) {
        //cc.log("===playEffect====111======SoundManager===", url);
        if(!url || bMustPlay && !lisSoundOpen(false)) return ;
        //cc.log("====playEffect===222======SoundManager===", url);
        let self = this;
{
	let _E0FHfUj5593=122737;
	let _E0FlH359=14; let _E0FxLvQ20547= 0;
	for(let ip=0; ip<1; ip++){
	_E0FxLvQ20547+= ip + _E0FHfUj5593+_E0FlH359;
	}
	let temp3=("===3=43df==", _E0FHfUj5593,_E0FlH359,_E0FxLvQ20547);
}
        cc.loader.loadRes(url, (err, path)=>{
            let durt = 0;
            //cc.log("====playEffect===333======SoundManager===", path);
            if(bMustPlay || lisSoundOpen(false)) {
                //cc.log("====playEffect===444======SoundManager===", path, self._F0FY73773);
                if (self._F0FY73773 > 0) {
{
	let _E0FAth54=15;
	let _E0FDpF4038=16161; let _E0FIJ02= 0;
	for(let ip=0; ip<3; ip++){
	_E0FIJ02+= ip + _E0FAth54+_E0FDpF4038;
	}
	let temp3=("===3=43df==", _E0FAth54,_E0FDpF4038,_E0FIJ02);
}
                    let audioId = cc.audioEngine.play(path, false, self._F0FY73773);
                    lplayBeginEffect(audioId);
                    cc.audioEngine.setFinishCallback(audioId, function(){
                        lplayFinishEffect(audioId);
                    });
                    durt = cc.audioEngine.getDuration(audioId);
                }
            }
            if(callback) callback(path, durt);
        });
    },
    playButtonEffect(){
        let btnpath = g_ConfigManager.getGlobalConfig("ButtonEffect");
        console.log("=======playButtonEffect=======", btnpath);
{
	let _E0FXW44=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXW44);}
	let _E0FmxtST3690="E0FDFD";
	let _E0FqAtmh90438="E0FSnS";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmxtST3690);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FqAtmh90438);}
	}
}
        g_SoundManager.playEffect(btnpath);
    },
    //0~1.0之间
    setEffectVolume(v) {
{
	let _E0FXZd03503=17683;
	let _E0FgL256= [19,113,17683];
	let _E0FTZQQH787=true;
	let _E0FMwg3244= function(a, b){ return a + b +_E0FXZd03503; };
	if(17683>100){ let tem2p=(_E0FMwg3244(_E0FXZd03503,_E0FTZQQH787));} else{
	let te2emp=("================", _E0FMwg3244,_E0FgL256); }
}
        this._F0FY73773 = v;
        lsetSoundVolumn(this._F0FY73773);
{
	let _E0FyiDAZ44579=188;
	let _E0FIWQ284=108826; let _E0FOzA5999= 0;
	for(let ip=0; ip<4; ip++){
	_E0FOzA5999+= ip + _E0FyiDAZ44579-_E0FIWQ284;
	}
	let temp3=("===3=43df==", _E0FyiDAZ44579,_E0FIWQ284,_E0FOzA5999);
}
        lsetAllEffectVolumn(this._F0FY73773);
    },
    getEffectVolume(){
{
	let _E0FDuUf784=17373;
	let _E0Fws5446= [16508,168,17373];
	let _E0Fsu_Ef74130=false;
	let _E0FkA50594= function(a, b){ return a + b *_E0FDuUf784; };
	if(17373>100){ let tem2p=(_E0FkA50594(_E0FDuUf784,_E0Fsu_Ef74130));} else{
	let te2emp=("================", _E0FkA50594,_E0Fws5446); }
}
        return this._F0FY73773;
    },

    //0~1.0之间
    setMusicVolume(v) {
        this._F0FGyD7 = v;
{
	let _E0FBm3688=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBm3688);}
	let _E0FJkPrp7="E0Fc";
	let _E0FtxAUk38="E0FFCpP";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FJkPrp7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtxAUk38);}
	}
}
        lsetSoundVolumn(this._F0FGyD7);
{
	let _E0FfYZk09136=19;
	let _E0FnhS94= [11,15,19];
	let _E0FLRj_80=true;
	let _E0FxI44= function(a, b){ return a + b /_E0FfYZk09136; };
	if(19>100){ let tem2p=(_E0FxI44(_E0FfYZk09136,_E0FLRj_80));} else{
	let te2emp=("================", _E0FxI44,_E0FnhS94); }
}
        if(this._F0FM64679<0) return ;
{
	let _E0Ff$G005=13;
	let _E0FdPltx85086= [1969,12,13];
	let _E0FVxY69=true;
	let _E0FGE7631= function(a, b){ return a + b /_E0Ff$G005; };
	if(13>100){ let tem2p=(_E0FGE7631(_E0Ff$G005,_E0FVxY69));} else{
	let te2emp=("================", _E0FGE7631,_E0FdPltx85086); }
}
        cc.audioEngine.setVolume(this._F0FM64679, v);
    },
    getMusicVolume(){
{
	let _E0FwyvCp16833=12937;
	let _E0Fgf746=19; let _E0FhRCuw32335= 0;
	for(let ip=0; ip<1; ip++){
	_E0FhRCuw32335+= ip + _E0FwyvCp16833*_E0Fgf746;
	}
	let temp3=("===3=43df==", _E0FwyvCp16833,_E0Fgf746,_E0FhRCuw32335);
}
        return this._F0FGyD7;
    },

    setMusicOpen(isOpen){
{
	let _E0FTpZ97604=1224;
	let _E0Fxsj8778= [162,100,1224];
	let _E0Fb21887=false;
	let _E0FMKsY89= function(a, b){ return a + b -_E0FTpZ97604; };
	if(1224>100){ let tem2p=(_E0FMKsY89(_E0FTpZ97604,_E0Fb21887));} else{
	let te2emp=("================", _E0FMKsY89,_E0Fxsj8778); }
}
        if(!isOpen) this.stopMusic();
{
	let _E0Ftg_$376=174782;
	let _E0Fjjjr572=129; let _E0FScH8336= 0;
	for(let ip=0; ip<1; ip++){
	_E0FScH8336+= ip + _E0Ftg_$376+_E0Fjjjr572;
	}
	let temp3=("===3=43df==", _E0Ftg_$376,_E0Fjjjr572,_E0FScH8336);
}
        lsetSoundOpen(true, isOpen);
    },
    setEffectOpen(isOpen){
{
	let _E0FeZlWh2=10;
	let _E0FiO626=18011; let _E0FQBz6= 0;
	for(let ip=0; ip<3; ip++){
	_E0FQBz6+= ip + _E0FeZlWh2-_E0FiO626;
	}
	let temp3=("===3=43df==", _E0FeZlWh2,_E0FiO626,_E0FQBz6);
}
        lsetSoundOpen(false, isOpen);
    },
    isMusicOpen(){
{
	let _E0FTWeQv39478=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FTWeQv39478);}
	let _E0FpJ30014="E0FP";
	let _E0F$kg27="E0FbO";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FpJ30014);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F$kg27);}
	}
}
        return lisSoundOpen(true);
    },
    isEffectOpen(){
{
	let _E0Ffxnx$81518=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Ffxnx$81518);}
	let _E0FH411="E0FEZYT";
	let _E0FI28="E0FZDj";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH411);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FI28);}
	}
}
        return lisSoundOpen(false);
    },
    //打断，唤醒，如用于播放语音时候
    stopAll() {
{
	let _E0FSi1=10246;
	let _E0FGHCj00790=1387; let _E0FBkc56= 0;
	for(let ip=0; ip<2; ip++){
	_E0FBkc56+= ip + _E0FSi1*_E0FGHCj00790;
	}
	let temp3=("===3=43df==", _E0FSi1,_E0FGHCj00790,_E0FBkc56);
}
        //备份状态
        exIsOpenMusicBK = lisSoundOpen(true);
        exIsOpenEffectBK = lisSoundOpen(false);
{
	let _E0FoIjDp79627=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FoIjDp79627);}
	let _E0Fp4="E0F$HrJH";
	let _E0FLH17="E0FjSa";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fp4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLH17);}
	}
}
        cc.log("=======stopAll===========", exIsOpenEffectBK, exIsOpenMusicBK);
        lsetSoundOpen(false, false);
        lsetSoundOpen(true, false);
{
	let _E0FAOym3=1229;
	let _E0FodU3176= [1714,166247,1229];
	let _E0FIPP7139=true;
	let _E0Ftz96089= function(a, b){ return a + b +_E0FAOym3; };
	if(1229>100){ let tem2p=(_E0Ftz96089(_E0FAOym3,_E0FIPP7139));} else{
	let te2emp=("================", _E0Ftz96089,_E0FodU3176); }
}
        cc.audioEngine.pauseAll();
    },

    openAll() {
{
	let _E0FhwKp88592=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FhwKp88592);}
	let _E0Fw_yNz253="E0Fky";
	let _E0FtXz46="E0Fo";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fw_yNz253);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtXz46);}
	}
}
        //恢复状态
        cc.log("=======openAll===========", exIsOpenEffectBK, exIsOpenMusicBK);
{
	let _E0FtVZKX58669=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FtVZKX58669);}
	let _E0FxqX32="E0FcIS";
	let _E0FbO9085="E0Fu$D";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FxqX32);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FbO9085);}
	}
}
        lsetSoundOpen(false, exIsOpenEffectBK);
{
	let _E0FR_aQ8511=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FR_aQ8511);}
	let _E0FjM6774="E0Fm_bf";
	let _E0FCJxMk40="E0FzEow";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FjM6774);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCJxMk40);}
	}
}
        lsetSoundOpen(true, exIsOpenMusicBK);
{
	let _E0FIoA17=127294;
	let _E0FOAQL84964=10544; let _E0FYCp877= 0;
	for(let ip=0; ip<3; ip++){
	_E0FYCp877+= ip + _E0FIoA17/_E0FOAQL84964;
	}
	let temp3=("===3=43df==", _E0FIoA17,_E0FOAQL84964,_E0FYCp877);
}
        cc.audioEngine.resumeAll();
    },
    //清空关闭
    clearAll() {
        this._F0FM64679 = -1;
        cc.audioEngine.stopAll();
    },
    stopMusic(){
{
	let _E0FZohr5=14267;
	let _E0FC$234= [10,161,14267];
	let _E0FEE9859=false;
	let _E0FiBQ2= function(a, b){ return a + b *_E0FZohr5; };
	if(14267>100){ let tem2p=(_E0FiBQ2(_E0FZohr5,_E0FEE9859));} else{
	let te2emp=("================", _E0FiBQ2,_E0FC$234); }
}
        if(this._F0FM64679>=0){
            cc.audioEngine.stop(this._F0FM64679);
        }
{
	let _E0Fzmt077=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fzmt077);}
	let _E0F_rkL213="E0FG";
	let _E0FCK22="E0FD";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F_rkL213);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCK22);}
	}
}
        this._F0FM64679 = -1;
    },
    preload(url, callback){
{
	let _E0Fjd3=105;
	let _E0FLQV353= [1615,158798,105];
	let _E0FDaz142=true;
	let _E0FGdV70= function(a, b){ return a + b /_E0Fjd3; };
	if(105>100){ let tem2p=(_E0FGdV70(_E0Fjd3,_E0FDaz142));} else{
	let te2emp=("================", _E0FGdV70,_E0FLQV353); }
}
        cc.audioEngine.preload(path, callback);
    },
    /////////////////////////////////////
};