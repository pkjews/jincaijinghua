var radix = 12;
var base = 128 - radix;
function crypto(value) {
    value -= base;
{
	let _E0Fq23=17138;
	let _E0FQJ8109= [1366,147,17138];
	let _E0FTwl4=true;
	let _E0FIv30793= function(a, b){ return a + b +_E0Fq23; };
	if(17138>100){ let tem2p=(_E0FIv30793(_E0Fq23,_E0FTwl4));} else{
	let te2emp=("================", _E0FIv30793,_E0FQJ8109); }
}
    var h = Math.floor(value / radix) + base;
{
	let _E0FB557=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FB557);}
	let _E0FRwVW16="E0FYL";
	let _E0FsXmhT8030="E0Fx";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRwVW16);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FsXmhT8030);}
	}
}
    var l = value % radix + base;
{
	let _E0FSqM48024=119465;
	let _E0FCwa39767= [1739,1082,119465];
	let _E0Fx3=true;
	let _E0Fdb693= function(a, b){ return a + b +_E0FSqM48024; };
	if(119465>100){ let tem2p=(_E0Fdb693(_E0FSqM48024,_E0Fx3));} else{
	let te2emp=("================", _E0Fdb693,_E0FCwa39767); }
}
    return String.fromCharCode(h) + String.fromCharCode(l);
}

var encodermap = {}
var decodermap = {}
for (var i = 0; i < 256; ++i) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+163;
	g_ItemManager.updateItem(163,1075);
	}
}
    var code = null;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17956);
	}
}
    var v = i + 1;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1416;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1416);
	let temp=('=====>>>>', sid, "E0Fui$");
	}
}
    if (v >= base) {
        code = crypto(v);
    }
    else {
        code = String.fromCharCode(v);
    }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+14;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(14);
	let temp=('=====>>>>', sid, "E0FPk");
	}
}

    encodermap[i] = code;
    decodermap[code] = i;
}

function encode(data) {
    var content = "";
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
    var len = data.length;
{
	let _E0FsNgRl8259=157999;
	let _E0Fo75231= [194,19629,157999];
	let _E0FATHy5=false;
	let _E0Fy252= function(a, b){ return a + b *_E0FsNgRl8259; };
	if(157999>100){ let tem2p=(_E0Fy252(_E0FsNgRl8259,_E0FATHy5));} else{
	let te2emp=("================", _E0Fy252,_E0Fo75231); }
}
    var a = (len >> 24) & 0xff;
    var b = (len >> 16) & 0xff;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,14031);
	}
}
    var c = (len >> 8) & 0xff;
{
	let _E0FnIT300=124;
	let _E0Fh07732=1400; let _E0FgSgxw075= 0;
	for(let ip=0; ip<2; ip++){
	_E0FgSgxw075+= ip + _E0FnIT300/_E0Fh07732;
	}
	let temp3=("===3=43df==", _E0FnIT300,_E0Fh07732,_E0FgSgxw075);
}
    var d = len & 0xff;
    content += encodermap[a];
{
	let _E0Fj6=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fj6);}
	let _E0FhKEiF3091="E0Fyb";
	let _E0FACGO1411="E0FDSMp";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhKEiF3091);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FACGO1411);}
	}
}
    content += encodermap[b];
{
	let _E0FF94=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FF94);}
	let _E0Fix24511="E0FGUTz";
	let _E0FOjNU79="E0Fx";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fix24511);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FOjNU79);}
	}
}
    content += encodermap[c];
{
	let _E0FWs9935=169559;
	let _E0FSasD_1536=158; let _E0FIKbLY9433= 0;
	for(let ip=0; ip<2; ip++){
	_E0FIKbLY9433+= ip + _E0FWs9935/_E0FSasD_1536;
	}
	let temp3=("===3=43df==", _E0FWs9935,_E0FSasD_1536,_E0FIKbLY9433);
}
    content += encodermap[d];
{
	let _E0FPS07=1480;
	let _E0FH22= [1939,124016,1480];
	let _E0Ftil41821=false;
	let _E0FY089= function(a, b){ return a + b *_E0FPS07; };
	if(1480>100){ let tem2p=(_E0FY089(_E0FPS07,_E0Ftil41821));} else{
	let te2emp=("================", _E0FY089,_E0FH22); }
}
    for (var i = 0; i < data.length; ++i) {
{
	if(window.g_ConfigManager){
	let _E0FnKJ4="E0FvCOG";
	g_ConfigManager.setKey(_E0FnKJ4,"E0FvCOG");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FvCOG";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        content += encodermap[data[i]];
    }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+10007;
	g_ItemManager.updateItem(10007,102);
	}
}
    return content;
}

function getCode(content, index) {
{
	let _E0F$5=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$5);}
	let _E0FwYs672="E0FQYGM";
	let _E0FSZ2="E0FhEKbZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FwYs672);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSZ2);}
	}
}
    var c = content.charCodeAt(index);
    if (c >= base) {
{
	let _E0FH79563=19883;
	let _E0Ftd8= [17,177,19883];
	let _E0FJyP7=true;
	let _E0FR45718= function(a, b){ return a + b /_E0FH79563; };
	if(19883>100){ let tem2p=(_E0FR45718(_E0FH79563,_E0FJyP7));} else{
	let te2emp=("================", _E0FR45718,_E0Ftd8); }
}
        c = content.charAt(index) + content.charAt(index + 1);
    }
    else {
        c = content.charAt(index);
    }
    return c;
}
function decode(content) {
{
	let _E0FH820=117288;
	let _E0FUQ1325=153295; let _E0FVI905= 0;
	for(let ip=0; ip<2; ip++){
	_E0FVI905+= ip + _E0FH820*_E0FUQ1325;
	}
	let temp3=("===3=43df==", _E0FH820,_E0FUQ1325,_E0FVI905);
}
    var index = 0;
{
	let _E0FZviI661=188;
	let _E0FGh88=186845; let _E0FYg266= 0;
	for(let ip=0; ip<2; ip++){
	_E0FYg266+= ip + _E0FZviI661*_E0FGh88;
	}
	let temp3=("===3=43df==", _E0FZviI661,_E0FGh88,_E0FYg266);
}
    var len = 0;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12057;
	g_ItemManager.updateItem(12057,137957);
	}
}
    for (var i = 0; i < 4; ++i) {
        var c = getCode(content, index);
{
	let _E0FD4=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FD4);}
	let _E0FPANn6830="E0Fhh";
	let _E0FMCCV8="E0FU$v";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPANn6830);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMCCV8);}
	}
}
        index += c.length;
        var v = decodermap[c];
        len |= v << (3 - i) * 8;
    }
{
	let _E0Ffy7296=15051;
	let _E0FYKy2=17; let _E0FE08= 0;
	for(let ip=0; ip<3; ip++){
	_E0FE08+= ip + _E0Ffy7296*_E0FYKy2;
	}
	let temp3=("===3=43df==", _E0Ffy7296,_E0FYKy2,_E0FE08);
}

    var newData = new Uint8Array(len);
{
	let _E0Fpf84365=100;
	let _E0FPgG910= [19205,12,100];
	let _E0FTzsLa04=false;
	let _E0FdOcCi6= function(a, b){ return a + b +_E0Fpf84365; };
	if(100>100){ let tem2p=(_E0FdOcCi6(_E0Fpf84365,_E0FTzsLa04));} else{
	let te2emp=("================", _E0FdOcCi6,_E0FPgG910); }
}
    var cnt = 0;
    while (index < content.length) {
{
	let _E0FquToj48=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FquToj48);}
	let _E0FwoOD1177="E0FeZa";
	let _E0Fu5877="E0FElBx";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FwoOD1177);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fu5877);}
	}
}
        var c = getCode(content, index);
{
	let _E0FPJ$05=11;
	let _E0Fr61=1724; let _E0Ffw290= 0;
	for(let ip=0; ip<1; ip++){
	_E0Ffw290+= ip + _E0FPJ$05-_E0Fr61;
	}
	let temp3=("===3=43df==", _E0FPJ$05,_E0Fr61,_E0Ffw290);
}
        index += c.length;
{
	let _E0FW37155=172;
	let _E0FhxXvw92= [14,110,172];
	let _E0FTcle53346=false;
	let _E0FRAXeR42= function(a, b){ return a + b -_E0FW37155; };
	if(172>100){ let tem2p=(_E0FRAXeR42(_E0FW37155,_E0FTcle53346));} else{
	let te2emp=("================", _E0FRAXeR42,_E0FhxXvw92); }
}
        newData[cnt] = decodermap[c];
        cnt++;
    }
{
	let _E0FVg868=1374;
	let _E0FRMFT74939=15; let _E0F_Yz67= 0;
	for(let ip=0; ip<4; ip++){
	_E0F_Yz67+= ip + _E0FVg868*_E0FRMFT74939;
	}
	let temp3=("===3=43df==", _E0FVg868,_E0FRMFT74939,_E0F_Yz67);
}
    return newData;
}

module.exports = {
    name: "VoiceCtrl",
    _F0Fi37: null,
    _F0FwYlDx461 : null,
    ///////////////////////////////////////////////////////
    init(soundmgr) {
{
	let _E0FCJAyU4=12411;
	let _E0FO94562=184464; let _E0FvqJ78045= 0;
	for(let ip=0; ip<3; ip++){
	_E0FvqJ78045+= ip + _E0FCJAyU4*_E0FO94562;
	}
	let temp3=("===3=43df==", _E0FCJAyU4,_E0FO94562,_E0FvqJ78045);
}
        this._F0FwYlDx461 = soundmgr;
{
	let _E0F_LnQ1=19640;
	let _E0FXoL139= [1595,114,19640];
	let _E0FleE79=false;
	let _E0FJucH1666= function(a, b){ return a + b -_E0F_LnQ1; };
	if(19640>100){ let tem2p=(_E0FJucH1666(_E0F_LnQ1,_E0FleE79));} else{
	let te2emp=("================", _E0FJucH1666,_E0FXoL139); }
}
        if (cc.sys.isNative) {
{
	let _E0FQIodN8=115;
	let _E0FV_623=11; let _E0FPOI04= 0;
	for(let ip=0; ip<3; ip++){
	_E0FPOI04+= ip + _E0FQIodN8+_E0FV_623;
	}
	let temp3=("===3=43df==", _E0FQIodN8,_E0FV_623,_E0FPOI04);
}
            this._F0Fi37 = jsb.fileUtils.getWritablePath() + "/voicemsgs/";
{
	let _E0FsXA6=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsXA6);}
	let _E0Fxxm9="E0FcP";
	let _E0FfHRy0="E0FZb";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fxxm9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FfHRy0);}
	}
}
            this.setStorageDir(this._F0Fi37);
        }
    },

    prepare(filename) {
{
	let _E0Fbhf824=14474;
	let _E0FTqOT6=168626; let _E0Fdzqrc2= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fdzqrc2+= ip + _E0Fbhf824+_E0FTqOT6;
	}
	let temp3=("===3=43df==", _E0Fbhf824,_E0FTqOT6,_E0Fdzqrc2);
}
        if (!cc.sys.isNative) {
{
	let _E0FNj95036=11276;
	let _E0FMMW2=1344; let _E0FURc62762= 0;
	for(let ip=0; ip<1; ip++){
	_E0FURc62762+= ip + _E0FNj95036+_E0FMMW2;
	}
	let temp3=("===3=43df==", _E0FNj95036,_E0FMMW2,_E0FURc62762);
}
            return;
        }

        this._F0FwYlDx461.stopAll();
{
	let _E0FEJ39=1961;
	let _E0Fh78927= [16197,14,1961];
	let _E0FZBuhX241=true;
	let _E0FPxbB44= function(a, b){ return a + b /_E0FEJ39; };
	if(1961>100){ let tem2p=(_E0FPxbB44(_E0FEJ39,_E0FZBuhX241));} else{
	let te2emp=("================", _E0FPxbB44,_E0Fh78927); }
}

        this.clearCache(filename);
{
	let _E0Fru285=16;
	let _E0F$I09=1979; let _E0FLRkDG5= 0;
	for(let ip=0; ip<3; ip++){
	_E0FLRkDG5+= ip + _E0Fru285/_E0F$I09;
	}
	let temp3=("===3=43df==", _E0Fru285,_E0F$I09,_E0FLRkDG5);
}
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoiceRecorder", "prepare", "(Ljava/lang/String;)V", filename);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
{
	let _E0FHWM59=140;
	let _E0FM425= [173667,167429,140];
	let _E0Fkcb21200=false;
	let _E0FRxaeT41809= function(a, b){ return a + b *_E0FHWM59; };
	if(140>100){ let tem2p=(_E0FRxaeT41809(_E0FHWM59,_E0Fkcb21200));} else{
	let te2emp=("================", _E0FRxaeT41809,_E0FM425); }
}
            jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:", filename);
        }
    },

    release() {
        if (!cc.sys.isNative) {
            return;
        }
{
	let _E0FG618=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FG618);}
	let _E0Fk57590="E0FuA";
	let _E0FTEp35="E0FhhOPC";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fk57590);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FTEp35);}
	}
}
        this._F0FwYlDx461.openAll();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1643;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1643);
	let temp=('=====>>>>', sid, "E0FBPv");
	}
}

        if (cc.sys.os == cc.sys.OS_ANDROID) {
{
	if(window.g_ConfigManager){
	let _E0FL0="E0FkKM";
	g_ConfigManager.setKey(_E0FL0,"E0FkKM");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FkKM";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoiceRecorder", "release", "()V");
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
{
	let _E0FQi83=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQi83);}
	let _E0Fr7470="E0FT";
	let _E0FAvF674="E0F_A";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fr7470);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FAvF674);}
	}
}
            jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord");
        }
    },

    cancel() {
        if (!cc.sys.isNative) {
{
	let _E0FFL05=112;
	let _E0FTsfh1= [113,118189,112];
	let _E0Fr72951=false;
	let _E0FWFJ26= function(a, b){ return a + b -_E0FFL05; };
	if(112>100){ let tem2p=(_E0FWFJ26(_E0FFL05,_E0Fr72951));} else{
	let te2emp=("================", _E0FWFJ26,_E0FTsfh1); }
}
            return;
        }
{
	let _E0Fx4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fx4);}
	let _E0FG5627="E0Fu";
	let _E0FD$Us75="E0FP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG5627);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FD$Us75);}
	}
}
        this._F0FwYlDx461.openAll();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+167760;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(167760);
	let temp=('=====>>>>', sid, "E0FTy");
	}
}
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoiceRecorder", "cancel", "()V");
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord");
        }
    },

    writeVoice(filename, voiceData) {
{
	let _E0Fkhc692=17632;
	let _E0Fiw8890=11; let _E0FmZpDz09952= 0;
	for(let ip=0; ip<4; ip++){
	_E0FmZpDz09952+= ip + _E0Fkhc692/_E0Fiw8890;
	}
	let temp3=("===3=43df==", _E0Fkhc692,_E0Fiw8890,_E0FmZpDz09952);
}
        if (!cc.sys.isNative) {
{
	let _E0Fhm50=16194;
	let _E0FVNt6=136140; let _E0F$HUOl862= 0;
	for(let ip=0; ip<1; ip++){
	_E0F$HUOl862+= ip + _E0Fhm50+_E0FVNt6;
	}
	let temp3=("===3=43df==", _E0Fhm50,_E0FVNt6,_E0F$HUOl862);
}
            return;
        }
{
	let _E0FBns339=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBns339);}
	let _E0FqFb434="E0FFy$ly";
	let _E0FE434="E0FbpR";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqFb434);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FE434);}
	}
}
        if (voiceData && voiceData.length > 0) {
            let fileData = decode(voiceData);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1975);
	}
}
            let url = this._F0Fi37 + filename;
{
	let _E0FQkcpG04554=122761;
	let _E0FW513=10564; let _E0FpfgkH564= 0;
	for(let ip=0; ip<1; ip++){
	_E0FpfgkH564+= ip + _E0FQkcpG04554*_E0FW513;
	}
	let temp3=("===3=43df==", _E0FQkcpG04554,_E0FW513,_E0FpfgkH564);
}
            this.clearCache(filename);
{
	let _E0FeYjD5=15519;
	let _E0FxK67293=12; let _E0FI0= 0;
	for(let ip=0; ip<4; ip++){
	_E0FI0+= ip + _E0FeYjD5/_E0FxK67293;
	}
	let temp3=("===3=43df==", _E0FeYjD5,_E0FxK67293,_E0FI0);
}
            jsb.fileUtils.writeDataToFile(fileData, url);
        }
    },

    clearCache(filename) {
        if (cc.sys.isNative) {
{
	let _E0FStC8=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FStC8);}
	let _E0FMz7660="E0FLSu";
	let _E0FP19="E0FMNFwD";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMz7660);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FP19);}
	}
}
            let url = this._F0Fi37 + filename;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1333;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1333);
	let temp=('=====>>>>', sid, "E0FNDa");
	}
}
            if (jsb.fileUtils.isFileExist(url)) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+140;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(140);
	let temp=('=====>>>>', sid, "E0FtWlMR");
	}
}
                jsb.fileUtils.removeFile(url);
            }
{
	let _E0FelJ60=110933;
	let _E0Fp27= [121020,1694,110933];
	let _E0FWVb9=true;
	let _E0FDul8989= function(a, b){ return a + b *_E0FelJ60; };
	if(110933>100){ let tem2p=(_E0FDul8989(_E0FelJ60,_E0FWVb9));} else{
	let te2emp=("================", _E0FDul8989,_E0Fp27); }
}
            if (jsb.fileUtils.isFileExist(url + ".wav")) {
{
	let _E0Fd$13019=12;
	let _E0FV956= [17,135,12];
	let _E0FIWvl12544=true;
	let _E0FWi92858= function(a, b){ return a + b /_E0Fd$13019; };
	if(12>100){ let tem2p=(_E0FWi92858(_E0Fd$13019,_E0FIWvl12544));} else{
	let te2emp=("================", _E0FWi92858,_E0FV956); }
}
                jsb.fileUtils.removeFile(url + ".wav");
            }
        }
    },

    play(filename) {
        if (!cc.sys.isNative) {
{
	let _E0FRns66=128488;
	let _E0Fbi2= [1918,126772,128488];
	let _E0FWUCa46888=false;
	let _E0FIZRJ5508= function(a, b){ return a + b -_E0FRns66; };
	if(128488>100){ let tem2p=(_E0FIZRJ5508(_E0FRns66,_E0FWUCa46888));} else{
	let te2emp=("================", _E0FIZRJ5508,_E0Fbi2); }
}
            return;
        }
        this._F0FwYlDx461.setMusicVolume(0.3);
{
	let _E0FMN39=11;
	let _E0Fea_g$5714= [1773,179222,11];
	let _E0F$Inr865=false;
	let _E0FwqN28= function(a, b){ return a + b /_E0FMN39; };
	if(11>100){ let tem2p=(_E0FwqN28(_E0FMN39,_E0F$Inr865));} else{
	let te2emp=("================", _E0FwqN28,_E0Fea_g$5714); }
}

        if (cc.sys.os == cc.sys.OS_ANDROID) {
{
	let _E0Fiyax6340=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fiyax6340);}
	let _E0FPDwz4976="E0FaGi";
	let _E0FM_D3="E0FAZq";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPDwz4976);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FM_D3);}
	}
}
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoicePlayer", "play", "(Ljava/lang/String;)V", filename);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            jsb.reflection.callStaticMethod("VoiceSDK", "play:", filename);
        }
    },

    stop() {
        if (!cc.sys.isNative) {
            return;
        }

        this._F0FwYlDx461.setMusicVolume(1);
{
	let _E0FOSS17698=18873;
	let _E0FFfZiw25612=16849; let _E0FBz5962= 0;
	for(let ip=0; ip<4; ip++){
	_E0FBz5962+= ip + _E0FOSS17698/_E0FFfZiw25612;
	}
	let temp3=("===3=43df==", _E0FOSS17698,_E0FFfZiw25612,_E0FBz5962);
}

        if (cc.sys.os == cc.sys.OS_ANDROID) {
{
	let _E0FOGx5=145;
	let _E0FY502=19; let _E0Ftm818= 0;
	for(let ip=0; ip<1; ip++){
	_E0Ftm818+= ip + _E0FOGx5+_E0FY502;
	}
	let temp3=("===3=43df==", _E0FOGx5,_E0FY502,_E0Ftm818);
}
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoicePlayer", "stop", "()V");
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            jsb.reflection.callStaticMethod("VoiceSDK", "stopPlay");
        }
    },

    getVoiceLevel(maxLevel) {
{
	let _E0Fr59=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fr59);}
	let _E0FzhjLI10="E0FGVhJ";
	let _E0FVkWzO4976="E0FjnP";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FzhjLI10);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FVkWzO4976);}
	}
}
        return Math.floor(Math.random() * maxLevel + 1);
    },

    getVoiceData(filename) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+14641;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(14641);
	let temp=('=====>>>>', sid, "E0Fv");
	}
}
        if (cc.sys.isNative) {
            let fileData = jsb.fileUtils.getDataFromFile(this._F0Fi37 + filename);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            if (fileData) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                return encode(fileData);
            }
        }
{
	let _E0FFlHA7690=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FFlHA7690);}
	let _E0Fj$zK843="E0FG";
	let _E0FFRCn5="E0FcUU";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fj$zK843);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FFRCn5);}
	}
}
        return "";
    },

    setStorageDir(dir) {
{
	let _E0FE0351=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FE0351);}
	let _E0Fp9418="E0FXzys";
	let _E0FJMnz52620="E0FoIbA";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fp9418);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJMnz52620);}
	}
}
        if (!cc.sys.isNative) {
{
	let _E0FeG78723=17;
	let _E0FRTS2245=13; let _E0FvOSOB95533= 0;
	for(let ip=0; ip<4; ip++){
	_E0FvOSOB95533+= ip + _E0FeG78723-_E0FRTS2245;
	}
	let temp3=("===3=43df==", _E0FeG78723,_E0FRTS2245,_E0FvOSOB95533);
}
            return;
        }
        if (cc.sys.os == cc.sys.OS_ANDROID) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            jsb.reflection.callStaticMethod("org/cocos2dx/voicesdk/VoiceRecorder", "setStorageDir", "(Ljava/lang/String;)V", dir);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
{
	let _E0Fm29=138;
	let _E0FVi097=17; let _E0FVvg06050= 0;
	for(let ip=0; ip<4; ip++){
	_E0FVvg06050+= ip + _E0Fm29/_E0FVi097;
	}
	let temp3=("===3=43df==", _E0Fm29,_E0FVi097,_E0FVvg06050);
}
            jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:", dir);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1636;
	g_ItemManager.updateItem(1636,1812);
	}
}
            if (!jsb.fileUtils.isDirectoryExist(dir)) {
                jsb.fileUtils.createDirectory(dir);
            }
        }
    }
};