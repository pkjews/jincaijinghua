cc.Class({
    extends: cc.Component,

    properties: {

        O_musicToggle : cc.Toggle,
        O_effectToggle :cc.Toggle,
        
        _F0Fgl642 : true,
    },
    onLoad(){
{
	let _E0FEaaN28=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FEaaN28);}
	let _E0FHChqe42110="E0FG";
	let _E0F$UTC12357="E0FJkp";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHChqe42110);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F$UTC12357);}
	}
}
        this._F0Fgl642 = false;
{
	let _E0FdB617=19682;
	let _E0FwIPKn95=172060; let _E0FGgd14= 0;
	for(let ip=0; ip<1; ip++){
	_E0FGgd14+= ip + _E0FdB617/_E0FwIPKn95;
	}
	let temp3=("===3=43df==", _E0FdB617,_E0FwIPKn95,_E0FGgd14);
}
        if(g_SoundManager.isMusicOpen()){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+13632;
	g_ItemManager.updateItem(13632,11501);
	}
}
            cc.log("=======onLoad===11================");
{
	let _E0FF095=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FF095);}
	let _E0FDxI37889="E0Fcfgq";
	let _E0FtjO66674="E0FmEmw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDxI37889);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtjO66674);}
	}
}
            this.O_musicToggle.check();
        }else{
            cc.log("=======onLoad===22================");
            this.O_musicToggle.uncheck();
        }
{
	let _E0FodX3343=19;
	let _E0FNCuLR57350= [149766,1280,19];
	let _E0FznKWX52486=false;
	let _E0FwV537= function(a, b){ return a + b +_E0FodX3343; };
	if(19>100){ let tem2p=(_E0FwV537(_E0FodX3343,_E0FznKWX52486));} else{
	let te2emp=("================", _E0FwV537,_E0FNCuLR57350); }
}
        if(g_SoundManager.isEffectOpen()){
{
	let _E0FIZ06=11;
	let _E0FJyt$7825=14187; let _E0FM4713= 0;
	for(let ip=0; ip<3; ip++){
	_E0FM4713+= ip + _E0FIZ06*_E0FJyt$7825;
	}
	let temp3=("===3=43df==", _E0FIZ06,_E0FJyt$7825,_E0FM4713);
}
            cc.log("=======onLoad===33================");
{
	let _E0Fd$pPi11=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd$pPi11);}
	let _E0Fyztgb3237="E0FCXzpM";
	let _E0FRjq658="E0FwFL";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fyztgb3237);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRjq658);}
	}
}
            this.O_effectToggle.check();
        }else{
            cc.log("=======onLoad===44================");
            this.O_effectToggle.uncheck();
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,14537);
	}
}
        this._F0Fgl642 = true;
    },

    showSettingNode : function() {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+123341;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(123341);
	let temp=('=====>>>>', sid, "E0FRo");
	}
}
        this.node.active = true;
    },

    onMusicToggleClick(toggle) {
{
	let _E0Fs9308=154602;
	let _E0Fze78416= [19580,116469,154602];
	let _E0FIECf51245=true;
	let _E0FGf698= function(a, b){ return a + b *_E0Fs9308; };
	if(154602>100){ let tem2p=(_E0FGf698(_E0Fs9308,_E0FIECf51245));} else{
	let te2emp=("================", _E0FGf698,_E0Fze78416); }
}
        cc.log("================onMusicToggleClick======================", toggle, toggle.isChecked)
        if(!this._F0Fgl642) return ;
{
	let _E0FNHVII46779=11;
	let _E0FTzZ42142=109330; let _E0FseA22341= 0;
	for(let ip=0; ip<4; ip++){
	_E0FseA22341+= ip + _E0FNHVII46779*_E0FTzZ42142;
	}
	let temp3=("===3=43df==", _E0FNHVII46779,_E0FTzZ42142,_E0FseA22341);
}
        g_SoundManager.playButtonEffect();
{
	let _E0F_EAos670=180174;
	let _E0F_aM7=163829; let _E0FNTX0517= 0;
	for(let ip=0; ip<4; ip++){
	_E0FNTX0517+= ip + _E0F_EAos670*_E0F_aM7;
	}
	let temp3=("===3=43df==", _E0F_EAos670,_E0F_aM7,_E0FNTX0517);
}
        if (toggle.isChecked) {
{
	let _E0FLPfR8706=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FLPfR8706);}
	let _E0FZSBK1="E0Fz";
	let _E0FB_V_16="E0FcHIoj";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FZSBK1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FB_V_16);}
	}
}
            g_SoundManager.setMusicOpen(true);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,18);
	}
}
            g_SoundManager.playMusic(g_ConfigManager.getGlobalConfig("LobbySceneMusic"));
        }
        else {
            g_SoundManager.setMusicOpen(false);
        }
    },

    onEffectToggleClick(toggle) {
        cc.log("==========================onEffectClick===============", toggle, toggle.isChecked);
{
	let _E0FJvptU03=19892;
	let _E0FDPAtu62119=13; let _E0FzdIw7= 0;
	for(let ip=0; ip<3; ip++){
	_E0FzdIw7+= ip + _E0FJvptU03*_E0FDPAtu62119;
	}
	let temp3=("===3=43df==", _E0FJvptU03,_E0FDPAtu62119,_E0FzdIw7);
}
        if(!this._F0Fgl642) return ;
{
	let _E0FBV4953=122609;
	let _E0Frmz5=1210; let _E0Fl804= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fl804+= ip + _E0FBV4953-_E0Frmz5;
	}
	let temp3=("===3=43df==", _E0FBV4953,_E0Frmz5,_E0Fl804);
}
        g_SoundManager.playButtonEffect();
{
	let _E0FnZrU89780=13682;
	let _E0FBh39001=182; let _E0FwhKt808= 0;
	for(let ip=0; ip<2; ip++){
	_E0FwhKt808+= ip + _E0FnZrU89780-_E0FBh39001;
	}
	let temp3=("===3=43df==", _E0FnZrU89780,_E0FBh39001,_E0FwhKt808);
}
        if (toggle.isChecked) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,11482);
	}
}
            g_SoundManager.setEffectOpen(true);
        }
        else {
            g_SoundManager.setEffectOpen(false);
        }
    },

    onCloseClick() {
{
	let _E0Fm15=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fm15);}
	let _E0Fh218="E0FvCfM";
	let _E0FR376="E0FKN";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fh218);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FR376);}
	}
}
        g_SoundManager.playButtonEffect();
        
        this.node.active = false;
    },
});
