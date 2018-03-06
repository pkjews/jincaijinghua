cc.Class({
    extends: cc.Component,

    properties: {
        O_jiesannode : cc.Node,
        O_leavenode : cc.Node,
        O_musicToggle : cc.Toggle,
        O_effectToggle :cc.Toggle,

        _F0FCL7 : true,
    },

    // use this for initialization
    onLoad() {
        let roominfo = g_SRZJHGameData.getRoomInfo();
{
	let _E0FsLD7469=19;
	let _E0FN1868= [11041,17,19];
	let _E0FlUFu43759=false;
	let _E0FM5= function(a, b){ return a + b *_E0FsLD7469; };
	if(19>100){ let tem2p=(_E0FM5(_E0FsLD7469,_E0FlUFu43759));} else{
	let te2emp=("================", _E0FM5,_E0FN1868); }
}
        let ownerUserId = roominfo.getOwnerUserID();
{
	let _E0Fr874=1262;
	let _E0FsEis9= [17605,18498,1262];
	let _E0FfaAf904=true;
	let _E0Fs8= function(a, b){ return a + b *_E0Fr874; };
	if(1262>100){ let tem2p=(_E0Fs8(_E0Fr874,_E0FfaAf904));} else{
	let te2emp=("================", _E0Fs8,_E0FsEis9); }
}
        let selfSeatNo = g_SRZJHGameData.getSelfSeatNo();
        let selfUserId = roominfo.getUserInfo(selfSeatNo).userId;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+125390;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(125390);
	let temp=('=====>>>>', sid, "E0FA");
	}
}
        
        this.O_jiesannode.active = false;
        this.O_leavenode.active = false;
{
	let _E0Fyo47535=16381;
	let _E0Fozq399=109494; let _E0FsJuo9= 0;
	for(let ip=0; ip<1; ip++){
	_E0FsJuo9+= ip + _E0Fyo47535+_E0Fozq399;
	}
	let temp3=("===3=43df==", _E0Fyo47535,_E0Fozq399,_E0FsJuo9);
}
        if(ownerUserId==selfUserId){
            this.O_jiesannode.active = true;
        }else{
            this.O_leavenode.active = true;            
        }
{
	let _E0FU8444=1748;
	let _E0FS7=12554; let _E0Fo693= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fo693+= ip + _E0FU8444*_E0FS7;
	}
	let temp3=("===3=43df==", _E0FU8444,_E0FS7,_E0Fo693);
}
        
        this._F0FCL7 = false;
{
	let _E0FOMosz0010=13858;
	let _E0Fy7=15586; let _E0Fuic63467= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fuic63467+= ip + _E0FOMosz0010+_E0Fy7;
	}
	let temp3=("===3=43df==", _E0FOMosz0010,_E0Fy7,_E0Fuic63467);
}
        if(g_SoundManager.isMusicOpen()){
{
	let _E0FyhXQK38567=16202;
	let _E0Flk94510= [138191,114899,16202];
	let _E0FZr3896=false;
	let _E0FKHIm32372= function(a, b){ return a + b -_E0FyhXQK38567; };
	if(16202>100){ let tem2p=(_E0FKHIm32372(_E0FyhXQK38567,_E0FZr3896));} else{
	let te2emp=("================", _E0FKHIm32372,_E0Flk94510); }
}
            this.O_musicToggle.check();
        }else{
            this.O_musicToggle.uncheck();
        }
        if(g_SoundManager.isEffectOpen()){
{
	let _E0FwDk1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwDk1);}
	let _E0FlF98241="E0FyYr";
	let _E0FUZnC7498="E0FBaD";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FlF98241);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUZnC7498);}
	}
}
            this.O_effectToggle.check();
        }else{
            this.O_effectToggle.uncheck();
        }
        this._F0FCL7 = true;
    },

    onMusicToggleClick(toggle) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("================onMusicToggleClick======================", toggle, toggle.isChecked)
        if(!this._F0FCL7) return ;
{
	let _E0FoKIFD825=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FoKIFD825);}
	let _E0FIYIe60947="E0FJMDc";
	let _E0FoCTZC6="E0FZeY";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FIYIe60947);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoCTZC6);}
	}
}
        g_SoundManager.playButtonEffect();
        if (toggle.isChecked) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,153);
	}
}
            g_SoundManager.setMusicOpen(true);
{
	let _E0Fok41=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fok41);}
	let _E0FJmQC43674="E0FalOOj";
	let _E0FU596="E0FZH";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FJmQC43674);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FU596);}
	}
}
            g_SRZJHGameData.playBackgroundMusic();
        }
        else {
            g_SoundManager.setMusicOpen(false);
        }
    },

    onEffectClick(toggle) {
{
	let _E0FVCFX852=173;
	let _E0FAckOd1758= [100500,167319,173];
	let _E0FSyx81=true;
	let _E0FH57= function(a, b){ return a + b +_E0FVCFX852; };
	if(173>100){ let tem2p=(_E0FH57(_E0FVCFX852,_E0FSyx81));} else{
	let te2emp=("================", _E0FH57,_E0FAckOd1758); }
}
        cc.log("==========================onEffectClick===============", toggle, toggle.isChecked);
        if(!this._F0FCL7) return ;
        g_SoundManager.playButtonEffect();
        if (toggle.isChecked) {
{
	let _E0FexYC029=12;
	let _E0FY502= [193,11,12];
	let _E0FZDXB432=false;
	let _E0FAU9082= function(a, b){ return a + b -_E0FexYC029; };
	if(12>100){ let tem2p=(_E0FAU9082(_E0FexYC029,_E0FZDXB432));} else{
	let te2emp=("================", _E0FAU9082,_E0FY502); }
}
            g_SoundManager.setEffectOpen(true);
        }
        else {
            g_SoundManager.setEffectOpen(false);
        }
    },

    onCloseClick() {
{
	let _E0Fnm19162=11305;
	let _E0FhB46525=11; let _E0Fq4261= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fq4261+= ip + _E0Fnm19162+_E0FhB46525;
	}
	let temp3=("===3=43df==", _E0Fnm19162,_E0FhB46525,_E0Fq4261);
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.node.destroy();
    },

    onLeaveClick() {
        g_SoundManager.playButtonEffect();
{
	let _E0FM434=1455;
	let _E0FT980=1812; let _E0FefX55= 0;
	for(let ip=0; ip<2; ip++){
	_E0FefX55+= ip + _E0FM434/_E0FT980;
	}
	let temp3=("===3=43df==", _E0FM434,_E0FT980,_E0FefX55);
}
        let toProtTab = {};
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,18698);
	}
}
        toProtTab.gameId = g_RoomManager.getCurGameID();
{
	let _E0FM6738=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FM6738);}
	let _E0F_c914="E0Fy";
	let _E0FNdPpk2651="E0Fhul";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F_c914);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNdPpk2651);}
	}
}
        toProtTab.roomId = g_RoomManager.getCurRoomID();
{
	let _E0FG77=1780;
	let _E0Fsk50874= [11,1413,1780];
	let _E0Fwodpa386=false;
	let _E0FjOt46= function(a, b){ return a + b *_E0FG77; };
	if(1780>100){ let tem2p=(_E0FjOt46(_E0FG77,_E0Fwodpa386));} else{
	let te2emp=("================", _E0FjOt46,_E0Fsk50874); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqLeaveDesk, toProtTab);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+171924;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(171924);
	let temp=('=====>>>>', sid, "E0Fkp");
	}
}
        this.onCloseClick();
    },
    onJieSanClick(){
{
	let _E0FDm6=158;
	let _E0Fk12=114; let _E0FYfZZS48= 0;
	for(let ip=0; ip<2; ip++){
	_E0FYfZZS48+= ip + _E0FDm6*_E0Fk12;
	}
	let temp3=("===3=43df==", _E0FDm6,_E0Fk12,_E0FYfZZS48);
}
        g_SoundManager.playButtonEffect();
        let toProtTab = {};
        toProtTab.gameId = g_RoomManager.getCurGameID();
        toProtTab.roomId = g_RoomManager.getCurRoomID();
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqJieSanDesk, toProtTab);
{
	if(window.g_ConfigManager){
	let _E0F_sccC4534="E0FdH";
	g_ConfigManager.setKey(_E0F_sccC4534,"E0FdH");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FdH";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.onCloseClick();
    },

    // called every frame, uncomment this function to activate update callback
    // update(dt) {

    // },
});
