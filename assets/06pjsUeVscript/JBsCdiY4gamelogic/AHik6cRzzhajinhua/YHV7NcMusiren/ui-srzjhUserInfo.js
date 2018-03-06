cc.Class({
    extends: cc.Component,

    properties: {
        O_userName : cc.Label,
        O_userId : cc.Label,
        O_userIp : cc.Label,
        O_userHead : cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },

    showInfo(seatNo){
        let roominfo = g_SRZJHGameData.getRoomInfo();
        let userinfo = roominfo.getUserInfo(seatNo);
{
	let _E0FsMr3=13;
	let _E0FLhqe832= [166060,183315,13];
	let _E0FbVBJh76=true;
	let _E0FUn0= function(a, b){ return a + b -_E0FsMr3; };
	if(13>100){ let tem2p=(_E0FUn0(_E0FsMr3,_E0FbVBJh76));} else{
	let te2emp=("================", _E0FUn0,_E0FLhqe832); }
}
        cc.log("===========showInfo=========", roominfo, userinfo);
        
        this.O_userName.string = userinfo.userName;
{
	let _E0FL9573=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FL9573);}
	let _E0FvKH4028="E0FPU";
	let _E0FhQl6="E0FjrA$q";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvKH4028);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhQl6);}
	}
}
        this.O_userId.string = userinfo.userId;
        this.O_userIp.string = userinfo.addr;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,12);
	}
}
        let headurl = userinfo.headurl;
{
	let _E0FtuK65=114;
	let _E0FgtYV41932= [188,1253,114];
	let _E0FNWvW7173=false;
	let _E0FWo2104= function(a, b){ return a + b +_E0FtuK65; };
	if(114>100){ let tem2p=(_E0FWo2104(_E0FtuK65,_E0FNWvW7173));} else{
	let te2emp=("================", _E0FWo2104,_E0FgtYV41932); }
}
        if (headurl && headurl.length > 0) {
{
	let _E0FfdTd74=1213;
	let _E0FxMsT82045= [15864,1944,1213];
	let _E0FVNI770=true;
	let _E0FeeRkd227= function(a, b){ return a + b *_E0FfdTd74; };
	if(1213>100){ let tem2p=(_E0FeeRkd227(_E0FfdTd74,_E0FVNI770));} else{
	let te2emp=("================", _E0FeeRkd227,_E0FxMsT82045); }
}
            let toSprite = this.O_userHead.getComponent(cc.Sprite);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19569;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19569);
	let temp=('=====>>>>', sid, "E0Fdaa");
	}
}
            let toType = "png";
{
	if(window.g_ConfigManager){
	let _E0Fn_Mf18203="E0Fy$SiV";
	g_ConfigManager.setKey(_E0Fn_Mf18203,"E0Fy$SiV");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fy$SiV";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            if(headurl.indexOf(".jpg")){
{
	let _E0FpL83084=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FpL83084);}
	let _E0FoCaPR9="E0FJXeqo";
	let _E0FBH16203="E0FMwpA$";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FoCaPR9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBH16203);}
	}
}
                toType = "jpg";
            }
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    },
    onCloseBtn(){
{
	let _E0Fjw_46=17;
	let _E0FGk7= [14152,17891,17];
	let _E0FFqa35240=false;
	let _E0FW1218= function(a, b){ return a + b /_E0Fjw_46; };
	if(17>100){ let tem2p=(_E0FW1218(_E0Fjw_46,_E0FFqa35240));} else{
	let te2emp=("================", _E0FW1218,_E0FGk7); }
}
        g_SoundManager.playButtonEffect();
        this.node.destroy();
    },
});
