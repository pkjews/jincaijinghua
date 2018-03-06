let RoomInfo = require("RoomInfo");
let lAllGameRoomTab = {};
module.exports = {
    _F0Fyuhn85307 : null,
    _F0FtQ927 : null,
    ///////////////////////////////////////////////////////
    newRoomInfo(gameId, roomId){
        let rinfo = new RoomInfo(gameId, roomId);
        if(gameId && roomId){
{
	let _E0FAUfM66=14412;
	let _E0FCW686= [123,128,14412];
	let _E0FD65046=true;
	let _E0Fc2714= function(a, b){ return a + b /_E0FAUfM66; };
	if(14412>100){ let tem2p=(_E0Fc2714(_E0FAUfM66,_E0FD65046));} else{
	let te2emp=("================", _E0Fc2714,_E0FCW686); }
}
            return this.addRoomInfo(rinfo);
        }
    },
    addRoomInfo(roominfo){
{
	let _E0FDx_8=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FDx_8);}
	let _E0FAJ9385="E0FTGJU";
	let _E0Fo00583="E0FZb";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAJ9385);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fo00583);}
	}
}
        let gameId = roominfo.getGameID();
        let roomId = roominfo.getRoomID();
{
	let _E0F$lO09=17403;
	let _E0FjGgm815= [13,13935,17403];
	let _E0FWWhB238=true;
	let _E0FzT3= function(a, b){ return a + b *_E0F$lO09; };
	if(17403>100){ let tem2p=(_E0FzT3(_E0F$lO09,_E0FWWhB238));} else{
	let te2emp=("================", _E0FzT3,_E0FjGgm815); }
}
        if(!lAllGameRoomTab[gameId])lAllGameRoomTab[gameId] = {};
        lAllGameRoomTab[gameId][roomId] = roominfo;
        return roominfo;
    },
    getGameRoomInfo(gameId, roomId){
        if(!gameId) return ;
        if(!roomId) return lAllGameRoomTab[gameId];
{
	let _E0FVm30=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVm30);}
	let _E0FP96="E0FUe";
	let _E0FikcTr8="E0FjL";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FP96);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FikcTr8);}
	}
}
        return lAllGameRoomTab[gameId][roomId];
    },
    setCurGameRoom(gameId, roomId){
        this._F0Fyuhn85307 = gameId;
{
	let _E0FR94186=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FR94186);}
	let _E0FV$Of2133="E0FIBq";
	let _E0FcN4362="E0FA";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FV$Of2133);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcN4362);}
	}
}
        this._F0FtQ927 = roomId;
    },
    getCurGameID(){
{
	let _E0FIGt51928=1314;
	let _E0Fo4= [1313,15,1314];
	let _E0FmsgCh6092=false;
	let _E0FUbBY338= function(a, b){ return a + b -_E0FIGt51928; };
	if(1314>100){ let tem2p=(_E0FUbBY338(_E0FIGt51928,_E0FmsgCh6092));} else{
	let te2emp=("================", _E0FUbBY338,_E0Fo4); }
}
        return this._F0Fyuhn85307;
    },
    getCurRoomID(){
{
	let _E0FU83242=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FU83242);}
	let _E0Fd8="E0FH";
	let _E0Fr01016="E0FdRkY";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fd8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fr01016);}
	}
}
        return this._F0FtQ927;
    },
}
