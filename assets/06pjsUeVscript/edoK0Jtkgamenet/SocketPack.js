let utilIconv = require("util-iconv")
let nethandshakekey = null;
let netcheckpackflag = "WTF\n";
let checknotip = 789632145;
console.log("nethandshakekey: >>>>>>>>>>>> ", nethandshakekey);
console.log("netcheckpackflag: >>>>>>>>>>>> ", netcheckpackflag);
console.log("checknotip: >>>>>>>>>>>> ", checknotip);
let SocketPack = function(sendfunc, endfunc, checkpackfunc){
{
	let _E0FVev0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVev0);}
	let _E0FTOErd781="E0FvSIKQ";
	let _E0FP214="E0Fh";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FTOErd781);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FP214);}
	}
}
    this.m_isclient = 1;
    this.m_sendfunc = sendfunc;
{
	let _E0FXga32=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXga32);}
	let _E0FQQlnw04="E0F_";
	let _E0FcjQgF98942="E0FK";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FQQlnw04);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcjQgF98942);}
	}
}
    this.m_endfunc = endfunc;
{
	if(window.g_ConfigManager){
	let _E0FcBhGT6="E0FyQ";
	g_ConfigManager.setKey(_E0FcBhGT6,"E0FyQ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FyQ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
    this.m_checkpackfunc = checkpackfunc;
{
	let _E0FsHC46618=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsHC46618);}
	let _E0FoFHX0="E0FGUVh";
	let _E0FyiTFK91505="E0FOaW";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FoFHX0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyiTFK91505);}
	}
}
    this.reset();
};
SocketPack.prototype = {
    constructor : SocketPack,
    start : function(){
        console.log("-----pack:start======");
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,179);
	}
}
        this.reset();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0FoEeo59(checknotip);
    },
    reset : function(){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+138699;
	g_ItemManager.updateItem(138699,18);
	}
}
        console.log("-----pack:reset======");
{
	let _E0Fj65=12;
	let _E0FDepsC37486= [16033,159,12];
	let _E0FRp3=false;
	let _E0FCcjw53795= function(a, b){ return a + b -_E0Fj65; };
	if(12>100){ let tem2p=(_E0FCcjw53795(_E0Fj65,_E0FRp3));} else{
	let te2emp=("================", _E0FCcjw53795,_E0FDepsC37486); }
}
        this.m_state = 1;
{
	let _E0FrL815=16;
	let _E0FxJOtt6=168; let _E0FQewJy5980= 0;
	for(let ip=0; ip<2; ip++){
	_E0FQewJy5980+= ip + _E0FrL815/_E0FxJOtt6;
	}
	let temp3=("===3=43df==", _E0FrL815,_E0FxJOtt6,_E0FQewJy5980);
}
        this.m_proto = ""
    },
    ishandshake : function(){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1357;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1357);
	let temp=('=====>>>>', sid, "E0Fz_sGt");
	}
}
        return this.m_state != 3;
    },
    packmsg : function(msg){
{
	let _E0Fau6402=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fau6402);}
	let _E0FPW52="E0FYIvpp";
	let _E0FtMdJ82="E0FtVA_X";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPW52);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtMdJ82);}
	}
}
        if(!msg) return ;
{
	let _E0FMaiK5117=1444;
	let _E0FHgvVP74258= [1971,19584,1444];
	let _E0FhwT26831=true;
	let _E0FemOTV735= function(a, b){ return a + b -_E0FMaiK5117; };
	if(1444>100){ let tem2p=(_E0FemOTV735(_E0FMaiK5117,_E0FhwT26831));} else{
	let te2emp=("================", _E0FemOTV735,_E0FHgvVP74258); }
}
        return this._F0FidMAe49567(msg, null, true);
    },
    unpackmsg : function(msg, sz, fd){
{
	if(window.g_ConfigManager){
	let _E0FuP7="E0FvSa";
	g_ConfigManager.setKey(_E0FuP7,"E0FvSa");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FvSa";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        console.log("======pack:unpackmsg======", msg,sz, fd, this.m_state);
{
	let _E0FhSr689=1684;
	let _E0FP4=126; let _E0FVf14= 0;
	for(let ip=0; ip<4; ip++){
	_E0FVf14+= ip + _E0FhSr689/_E0FP4;
	}
	let temp3=("===3=43df==", _E0FhSr689,_E0FP4,_E0FVf14);
}
        return this._F0Fqsu1(fd, msg, sz);
    },
    //-------------------------------------------------------------
    //-------------------------------------------------------------
    _F0Fqsu1 : function(fd, msg, sz){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let tomsg = this._F0FidMAe49567(msg, sz, false) ;  
{
	if(window.g_ConfigManager){
	let _E0Fil652="E0FFWatI";
	g_ConfigManager.setKey(_E0Fil652,"E0FFWatI");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FFWatI";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        console.log("-----pack:_F0Fqsu1---state---", tomsg, fd, this.m_state,this.m_proto);
{
	let _E0Fcg50=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fcg50);}
	let _E0FAnbO6073="E0FVNH";
	let _E0FJN590="E0FrL";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAnbO6073);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJN590);}
	}
}
        if(!this.ishandshake()) return tomsg;
{
	let _E0FpT6437=1410;
	let _E0FE6= [13,18422,1410];
	let _E0FUcVo98=true;
	let _E0FqUb3869= function(a, b){ return a + b +_E0FpT6437; };
	if(1410>100){ let tem2p=(_E0FqUb3869(_E0FpT6437,_E0FUcVo98));} else{
	let te2emp=("================", _E0FqUb3869,_E0FE6); }
}
        this._F0FDa59200(tomsg);
    },
    _F0FoEeo59 : function(proto, state){
{
	let _E0Fl07=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fl07);}
	let _E0FqNPBE64="E0FjFEwa";
	let _E0Fz65125="E0FNGamv";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqNPBE64);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fz65125);}
	}
}
        let nowt = new Date().getTime()/1000.0;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+108231;
	g_ItemManager.updateItem(108231,18562);
	}
}
        let tab = {};
{
	let _E0FdLeLa41886=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FdLeLa41886);}
	let _E0Fm2="E0FD";
	let _E0Flh$OI108="E0Fw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fm2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Flh$OI108);}
	}
}
        tab.state = state;
{
	let _E0FUsAQv55=138898;
	let _E0FPK55= [13,1865,138898];
	let _E0FURCb66844=true;
	let _E0FsIScc8582= function(a, b){ return a + b /_E0FUsAQv55; };
	if(138898>100){ let tem2p=(_E0FsIScc8582(_E0FUsAQv55,_E0FURCb66844));} else{
	let te2emp=("================", _E0FsIScc8582,_E0FPK55); }
}
        tab.proto = proto;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,13835);
	}
}
        tab.isclient = this.m_isclient;
{
	let _E0FqP2=128;
	let _E0FD2=12; let _E0FuJmph64169= 0;
	for(let ip=0; ip<2; ip++){
	_E0FuJmph64169+= ip + _E0FqP2/_E0FD2;
	}
	let temp3=("===3=43df==", _E0FqP2,_E0FD2,_E0FuJmph64169);
}
        if(state==3 && this.m_isclient==0){
{
	let _E0FJs249=16;
	let _E0FZ67338=13; let _E0FkwPeR96826= 0;
	for(let ip=0; ip<2; ip++){
	_E0FkwPeR96826+= ip + _E0FJs249*_E0FZ67338;
	}
	let temp3=("===3=43df==", _E0FJs249,_E0FZ67338,_E0FkwPeR96826);
}
            tab.ckey = this.m_ckey;
        }
{
	let _E0FXs7=1752;
	let _E0Fy_LAY56=153; let _E0FBBEGC67121= 0;
	for(let ip=0; ip<3; ip++){
	_E0FBBEGC67121+= ip + _E0FXs7+_E0Fy_LAY56;
	}
	let temp3=("===3=43df==", _E0FXs7,_E0Fy_LAY56,_E0FBBEGC67121);
}
        tab[nowt] = nowt;
        console.log("=============pack:_F0FoEeo59====", proto, state);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,190);
	}
}
        this.m_sendfunc(tab);
{
	if(window.g_ConfigManager){
	let _E0FZXB56028="E0FihKgI";
	g_ConfigManager.setKey(_E0FZXB56028,"E0FihKgI");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FihKgI";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        return tab;
    },
    _F0FDa59200 : function(msgtab){
        msgtab.ffy = utilIconv.GBKToUTF8(msgtab.ffy);
        for(let k in (msgtab)){            
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,177745);
	}
}
            console.log("----pack:_F0FDa59200---1---", k,msgtab[k]);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,130456);
	}
}
        
        if(this.m_state==1){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            //对方是client
            if(this._F0FTanyU10693(msgtab)){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+16;
	g_ItemManager.updateItem(16,173);
	}
}
                if(msgtab.proto==checknotip){
{
	let _E0FtkS03700=102;
	let _E0FD60= [169,1646,102];
	let _E0Fjd08=false;
	let _E0FOWtPI2966= function(a, b){ return a + b -_E0FtkS03700; };
	if(102>100){ let tem2p=(_E0FOWtPI2966(_E0FtkS03700,_E0Fjd08));} else{
	let te2emp=("================", _E0FOWtPI2966,_E0FD60); }
}
                    this.m_state = 2;
{
	let _E0FgbPAx7=1463;
	let _E0FaPb$851=1466; let _E0FVdx79403= 0;
	for(let ip=0; ip<1; ip++){
	_E0FVdx79403+= ip + _E0FgbPAx7+_E0FaPb$851;
	}
	let temp3=("===3=43df==", _E0FgbPAx7,_E0FaPb$851,_E0FVdx79403);
}
                    this._F0FoEeo59(checknotip, this.m_state);
{
	let _E0FQfAU9063=1135;
	let _E0FRGY62904=171244; let _E0FMpIH0684= 0;
	for(let ip=0; ip<4; ip++){
	_E0FMpIH0684+= ip + _E0FQfAU9063-_E0FRGY62904;
	}
	let temp3=("===3=43df==", _E0FQfAU9063,_E0FRGY62904,_E0FMpIH0684);
}
                    return;
                }
            }
            else if(this._F0Fi$5132(msgtab)){//对方是server
                if(msgtab.proto==checknotip){
                    this.m_state = msgtab.state;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+14;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(14);
	let temp=('=====>>>>', sid, "E0Fp");
	}
}
                    this._F0FoEeo59(checknotip, this.m_state);
                    return;
                }
            }
        }
        else if(this.m_state==2){
{
	let _E0Fpl_2589=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fpl_2589);}
	let _E0FBw233="E0FIA";
	let _E0Fnx_31643="E0FPxSt";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FBw233);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fnx_31643);}
	}
}
            if(this._F0FTanyU10693(msgtab)){//对方是client
                if(msgtab.state==2 && msgtab.proto==checknotip){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+15089;
	g_ItemManager.updateItem(15089,1574);
	}
}
                    let state = 3;
{
	let _E0FOmcSf0=1070;
	let _E0FoOR6= [10994,1262,1070];
	let _E0FUV21=false;
	let _E0FXrPW0= function(a, b){ return a + b /_E0FOmcSf0; };
	if(1070>100){ let tem2p=(_E0FXrPW0(_E0FOmcSf0,_E0FUV21));} else{
	let te2emp=("================", _E0FXrPW0,_E0FoOR6); }
}
                    this._F0FoEeo59(this.m_proto, state);
{
	let _E0FDOh597=115764;
	let _E0FdjZVv48465= [17,193414,115764];
	let _E0FAl54=false;
	let _E0FkqKcK6511= function(a, b){ return a + b /_E0FDOh597; };
	if(115764>100){ let tem2p=(_E0FkqKcK6511(_E0FDOh597,_E0FAl54));} else{
	let te2emp=("================", _E0FkqKcK6511,_E0FdjZVv48465); }
}
                    this.m_state = state;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19);
	}
}
                    if (this.m_state==3 && this.m_endfunc) this.m_endfunc();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,148870);
	}
}
                    return;
                }
            }	
            else if(this._F0Fi$5132(msgtab)){//对方是server
                this.m_state = msgtab.state;
{
	let _E0FOY38=1780;
	let _E0FbDnlt983=162; let _E0FXxc9578= 0;
	for(let ip=0; ip<4; ip++){
	_E0FXxc9578+= ip + _E0FOY38+_E0FbDnlt983;
	}
	let temp3=("===3=43df==", _E0FOY38,_E0FbDnlt983,_E0FXxc9578);
}
                this.m_proto = msgtab.proto;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+191;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(191);
	let temp=('=====>>>>', sid, "E0FtSqle");
	}
}
                this.m_ckey = msgtab.ckey;
{
	let _E0Fwbzb7843=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fwbzb7843);}
	let _E0Fg982="E0FRoj";
	let _E0FRblSX4="E0FgUivL";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fg982);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRblSX4);}
	}
}
                console.log("======handshake=success=========");
{
	let _E0FZIt6748=10;
	let _E0Fy77662= [13,111183,10];
	let _E0FB377=false;
	let _E0Fsa30355= function(a, b){ return a + b /_E0FZIt6748; };
	if(10>100){ let tem2p=(_E0Fsa30355(_E0FZIt6748,_E0FB377));} else{
	let te2emp=("================", _E0Fsa30355,_E0Fy77662); }
}
                if (this.m_state==3 && this.m_endfunc) this.m_endfunc();
{
	let _E0Fso23=1036;
	let _E0Fyow3=113633; let _E0Fcpe34792= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fcpe34792+= ip + _E0Fso23+_E0Fyow3;
	}
	let temp3=("===3=43df==", _E0Fso23,_E0Fyow3,_E0Fcpe34792);
}
                return ;
            } 
        }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.m_state = 1; 	//若握手不成功则重置
        this.m_proto = "";
    },
    _F0Fi$5132 : function(tab){
{
	let _E0FN79=181;
	let _E0FDC2560= [16,157,181];
	let _E0FSEd$U2039=false;
	let _E0FoonkZ25933= function(a, b){ return a + b -_E0FN79; };
	if(181>100){ let tem2p=(_E0FoonkZ25933(_E0FN79,_E0FSEd$U2039));} else{
	let te2emp=("================", _E0FoonkZ25933,_E0FDC2560); }
}
        return parseInt(tab.isclient)==0 && this.m_isclient==1;
    },
    _F0FTanyU10693 : function(tab){
        return parseInt(tab.isclient)==1 && this.m_isclient==0;
    },
    _F0FidMAe49567 : function(data, size, bsend){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12687;
	g_ItemManager.updateItem(12687,146);
	}
}
        return this.m_checkpackfunc(data, size, bsend);
    },    
    
}

module.exports = SocketPack;