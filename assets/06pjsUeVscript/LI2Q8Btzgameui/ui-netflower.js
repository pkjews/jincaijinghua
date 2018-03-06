let nativeExtend = require("native-extend")
cc.Class({
    extends: cc.Component,

    properties: {
        O_flowerNode : cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },
    showFlower : function(isVisible){
        
        if(!cc.sys.isNative){
{
	if(window.g_ConfigManager){
	let _E0FlVjkb19="E0FtCd";
	g_ConfigManager.setKey(_E0FlVjkb19,"E0FtCd");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FtCd";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            this.O_flowerNode.stopAllActions();
{
	let _E0FhFDKK8147=105454;
	let _E0Fi27= [12,19251,105454];
	let _E0FUZ0576=true;
	let _E0FfFG$5= function(a, b){ return a + b /_E0FhFDKK8147; };
	if(105454>100){ let tem2p=(_E0FfFG$5(_E0FhFDKK8147,_E0FUZ0576));} else{
	let te2emp=("================", _E0FfFG$5,_E0Fi27); }
}
            this.node.stopAllActions();
{
	let _E0FLS4293=17;
	let _E0FI8584= [1245,103996,17];
	let _E0Fva8=true;
	let _E0FVF72= function(a, b){ return a + b *_E0FLS4293; };
	if(17>100){ let tem2p=(_E0FVF72(_E0FLS4293,_E0Fva8));} else{
	let te2emp=("================", _E0FVF72,_E0FI8584); }
}
            this.node.opacity = 255;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,14);
	}
}
            this.node.active = isVisible;
            if(isVisible){
{
	let _E0FflB374=157;
	let _E0FzgX2=12539; let _E0FCU3= 0;
	for(let ip=0; ip<1; ip++){
	_E0FCU3+= ip + _E0FflB374/_E0FzgX2;
	}
	let temp3=("===3=43df==", _E0FflB374,_E0FzgX2,_E0FCU3);
}
                this.node.opacity = 0;
                //this.node.setScale(0);
                this.node.runAction(cc.fadeIn(0.4));
{
	let _E0Fu4474=10034;
	let _E0FYu910=18142; let _E0FPXiD565= 0;
	for(let ip=0; ip<1; ip++){
	_E0FPXiD565+= ip + _E0Fu4474-_E0FYu910;
	}
	let temp3=("===3=43df==", _E0Fu4474,_E0FYu910,_E0FPXiD565);
}
                this.O_flowerNode.runAction(cc.repeatForever(cc.rotateBy(Math.random()*0.3 + 0.2, 180)));
            }
        }else{
            this.node.active = false;
            if(isVisible){
{
	let _E0FtGi66251=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FtGi66251);}
	let _E0FI6="E0FLqt";
	let _E0Fxflfi745="E0FQ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FI6);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fxflfi745);}
	}
}
                nativeExtend.showLoading()
            }else{
                nativeExtend.hideLoading()
            }
        }
       
    },
});
