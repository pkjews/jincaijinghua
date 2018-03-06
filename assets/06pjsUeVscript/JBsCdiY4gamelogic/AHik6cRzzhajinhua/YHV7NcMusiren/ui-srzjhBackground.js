var exFangHaoNodePos = null;
var exJuShuNodePos = null;
cc.Class({
    extends: cc.Component,

    properties: {
        O_fanghaonode : cc.Node,
        O_jushunode : cc.Node,
        O_timetext : cc.Label,
        O_clocknode : cc.Node,
        O_basescorelabel : cc.Label,
        
        _backcardparent : null,
        _F0Fo0358 : null,
        _F0FXlwWM6 : false,
        _F0FTQWU08 : -1,
    },

    // use this for initialization
    onLoad: function () {
        this._F0Fd14(this.O_fanghaonode, 0);

        let self = this;
{
	let _E0FtnGPH3709=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FtnGPH3709);}
	let _E0FfI70="E0FIkNu$";
	let _E0FuKkR52="E0FnH";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FfI70);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FuKkR52);}
	}
}
        let uptimerfunc = function(dt){
            let date = new Date();
{
	let _E0FWwffr011=145;
	let _E0FjozC81=16; let _E0F_8275= 0;
	for(let ip=0; ip<2; ip++){
	_E0F_8275+= ip + _E0FWwffr011-_E0FjozC81;
	}
	let temp3=("===3=43df==", _E0FWwffr011,_E0FjozC81,_E0F_8275);
}
            let tostr = "";
{
	let _E0Fo813=128;
	let _E0FZ8= [17102,11,128];
	let _E0Fn699=false;
	let _E0FUO6824= function(a, b){ return a + b -_E0Fo813; };
	if(128>100){ let tem2p=(_E0FUO6824(_E0Fo813,_E0Fn699));} else{
	let te2emp=("================", _E0FUO6824,_E0FZ8); }
}
            if(date.getHours()<10){
                tostr += "0";
            }
{
	let _E0FtJYnk8170=13853;
	let _E0FXMw21487=17; let _E0Fj_P25= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fj_P25+= ip + _E0FtJYnk8170/_E0FXMw21487;
	}
	let temp3=("===3=43df==", _E0FtJYnk8170,_E0FXMw21487,_E0Fj_P25);
}
            tostr += date.getHours();
{
	let _E0FDGlF8937=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FDGlF8937);}
	let _E0FNV96840="E0FNJbk";
	let _E0FXhLR039="E0FfHbTE";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FNV96840);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXhLR039);}
	}
}
            tostr += ":";
{
	let _E0Fxm3=1585;
	let _E0FHNL82749=16430; let _E0FJfjAO81= 0;
	for(let ip=0; ip<3; ip++){
	_E0FJfjAO81+= ip + _E0Fxm3/_E0FHNL82749;
	}
	let temp3=("===3=43df==", _E0Fxm3,_E0FHNL82749,_E0FJfjAO81);
}
            if(date.getMinutes()<10){
{
	let _E0Fc$pTB0904=147;
	let _E0FSWpW2=1510; let _E0FAp1147= 0;
	for(let ip=0; ip<4; ip++){
	_E0FAp1147+= ip + _E0Fc$pTB0904*_E0FSWpW2;
	}
	let temp3=("===3=43df==", _E0Fc$pTB0904,_E0FSWpW2,_E0FAp1147);
}
                tostr += "0";
            }
{
	let _E0FCPW0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCPW0);}
	let _E0FDrBST722="E0FAf$u";
	let _E0FiS8="E0Fe";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDrBST722);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FiS8);}
	}
}
            tostr += date.getMinutes();
{
	let _E0FW79979=10052;
	let _E0FpQapC293= [13860,1873,10052];
	let _E0Fj353=true;
	let _E0F_LI259= function(a, b){ return a + b +_E0FW79979; };
	if(10052>100){ let tem2p=(_E0F_LI259(_E0FW79979,_E0Fj353));} else{
	let te2emp=("================", _E0F_LI259,_E0FpQapC293); }
}
            self.O_timetext.string = tostr;
        };
        uptimerfunc();
{
	let _E0FwuT53=19642;
	let _E0Fno132= [173,115630,19642];
	let _E0FOJH295=false;
	let _E0FUP278= function(a, b){ return a + b /_E0FwuT53; };
	if(19642>100){ let tem2p=(_E0FUP278(_E0FwuT53,_E0FOJH295));} else{
	let te2emp=("================", _E0FUP278,_E0Fno132); }
}
        this.schedule(uptimerfunc, 1);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+103;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(103);
	let temp=('=====>>>>', sid, "E0FeEuM");
	}
}
        this.showLeftClock(false);
    },

    showBaseTip(){
        let roominfo = g_SRZJHGameData.getRoomInfo();
        if(roominfo){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1637;
	g_ItemManager.updateItem(1637,13297);
	}
}
            this._F0Fd14(this.O_fanghaonode, roominfo.getRoomID());
{
	let _E0Fss7=197905;
	let _E0FI72= [1218,124,197905];
	let _E0FAhHq62098=true;
	let _E0Fkigcs86523= function(a, b){ return a + b *_E0Fss7; };
	if(197905>100){ let tem2p=(_E0Fkigcs86523(_E0Fss7,_E0FAhHq62098));} else{
	let te2emp=("================", _E0Fkigcs86523,_E0FI72); }
}
            
            if(!exFangHaoNodePos){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                exFangHaoNodePos = new cc.Vec2(this.O_fanghaonode.position.x, this.O_fanghaonode.position.y);
            }
            if(!exJuShuNodePos){
{
	let _E0FjzAL1811=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FjzAL1811);}
	let _E0FLWE08861="E0FxF";
	let _E0FIXx6="E0FBPUab";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FLWE08861);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIXx6);}
	}
}
                exJuShuNodePos = new cc.Vec2(this.O_jushunode.position.x, this.O_jushunode.position.y);
            }
{
	let _E0FJOCL8=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FJOCL8);}
	let _E0FtX8093="E0Fg";
	let _E0F_63="E0FnQqNV";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtX8093);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_63);}
	}
}
            let curjushu = roominfo.getCurJuShu();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,121874);
	}
}
            let maxjushu = roominfo.getMaxJuShu();
{
	let _E0FKVz8=17242;
	let _E0FD0=154; let _E0FJhR989= 0;
	for(let ip=0; ip<1; ip++){
	_E0FJhR989+= ip + _E0FKVz8*_E0FD0;
	}
	let temp3=("===3=43df==", _E0FKVz8,_E0FD0,_E0FJhR989);
}
            if(maxjushu>0){
{
	if(window.g_ConfigManager){
	let _E0FwEd033="E0FmP$BI";
	g_ConfigManager.setKey(_E0FwEd033,"E0FmP$BI");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FmP$BI";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                this._F0Fd14(this.O_jushunode, curjushu + "/" + maxjushu);
            }else{
                this.O_jushunode.active = false;
                this.O_fanghaonode.position = exJuShuNodePos; 
            }
{
	let _E0FPps$L6907=16;
	let _E0FfS035= [145,109578,16];
	let _E0FF880=false;
	let _E0Fagf01= function(a, b){ return a + b *_E0FPps$L6907; };
	if(16>100){ let tem2p=(_E0Fagf01(_E0FPps$L6907,_E0FF880));} else{
	let te2emp=("================", _E0Fagf01,_E0FfS035); }
}
            this.O_basescorelabel.string = roominfo.getBaseScore();
        }
{
	let _E0FXRFh4526=116;
	let _E0FXB83=15; let _E0Fc0= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fc0+= ip + _E0FXRFh4526-_E0FXB83;
	}
	let temp3=("===3=43df==", _E0FXRFh4526,_E0FXB83,_E0Fc0);
}
        cc.log("======ScoreTip===resetTip=============", roominfo);
    },   
    showLeftClock(bVisible, ltime, func){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_clocknode.active = bVisible;
{
	let _E0FW96412=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FW96412);}
	let _E0FMqatp485="E0FFp";
	let _E0FHR39375="E0FxJ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMqatp485);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FHR39375);}
	}
}
        this._F0Fo0358 = func;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+16584;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(16584);
	let temp=('=====>>>>', sid, "E0F_blkC");
	}
}
        this._F0FXlwWM6 = false;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+192036;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(192036);
	let temp=('=====>>>>', sid, "E0FluOkd");
	}
}
        this._F0FTQWU08 = ltime;
        if(!bVisible) {
{
	let _E0FTkkMY5=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FTkkMY5);}
	let _E0FFcH_z11995="E0FQClP";
	let _E0FYE2="E0FxLsD";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FFcH_z11995);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FYE2);}
	}
}
            return ;
        }
        this._F0Fd14(this.O_clocknode, Math.floor(this._F0FTQWU08));
{
	let _E0FXnx105=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXnx105);}
	let _E0F_8798="E0FH$";
	let _E0FJ15076="E0FDBw";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F_8798);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJ15076);}
	}
}
        this._F0FXlwWM6 = true;
    },
    update(dt){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,18483);
	}
}
        if(!this._F0FTQWU08 || this._F0FTQWU08<=0) return ;
{
	let _E0F_x7310=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_x7310);}
	let _E0FzRv3="E0FwDa";
	let _E0F_qKt68685="E0Fdys";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FzRv3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_qKt68685);}
	}
}
        this._F0FTQWU08 -= dt;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,183);
	}
}
        this._F0Fd14(this.O_clocknode, Math.floor(this._F0FTQWU08));
        if(this._F0FTQWU08<=0){
{
	let _E0Fo559=183299;
	let _E0F_G125=1476; let _E0FIVn7= 0;
	for(let ip=0; ip<3; ip++){
	_E0FIVn7+= ip + _E0Fo559/_E0F_G125;
	}
	let temp3=("===3=43df==", _E0Fo559,_E0F_G125,_E0FIVn7);
}
            if(this._F0Fo0358) this._F0Fo0358();
{
	let _E0FxvOv85493=110839;
	let _E0FHu433= [108423,1439,110839];
	let _E0FLD0=true;
	let _E0Fo6971= function(a, b){ return a + b *_E0FxvOv85493; };
	if(110839>100){ let tem2p=(_E0Fo6971(_E0FxvOv85493,_E0FLD0));} else{
	let te2emp=("================", _E0Fo6971,_E0FHu433); }
}
            this._F0Fo0358 = null;
            this.showLeftClock(false);
        }
    },
    /////////////////////////////////////////////////////////////////////////////
    _F0Fd14(node, str){
{
	let _E0Fglp6447=16;
	let _E0FPA37=13807; let _E0F_TJp0274= 0;
	for(let ip=0; ip<4; ip++){
	_E0F_TJp0274+= ip + _E0Fglp6447+_E0FPA37;
	}
	let temp3=("===3=43df==", _E0Fglp6447,_E0FPA37,_E0F_TJp0274);
}
        node.getChildByName("num").getComponent(cc.Label).string = str;
    },
});
