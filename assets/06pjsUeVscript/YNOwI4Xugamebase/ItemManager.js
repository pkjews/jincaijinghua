
module.exports = {
    _F0FZq4 : {},
    updateItem(itemid, count) {
        itemid = Math.floor(parseInt(itemid) / 1000);
        this._F0FZq4[itemid] = count;
    },

    getItem(itemid){
{
	let _E0FIPDTP3461=1712;
	let _E0FsB47883= [182920,14,1712];
	let _E0Fief8836=false;
	let _E0FMT6957= function(a, b){ return a + b -_E0FIPDTP3461; };
	if(1712>100){ let tem2p=(_E0FMT6957(_E0FIPDTP3461,_E0Fief8836));} else{
	let te2emp=("================", _E0FMT6957,_E0FsB47883); }
}
        itemid = parseInt(itemid);
        return this._F0FZq4[itemid];
    },
    getGold(){
{
	let _E0Fv0482=137;
	let _E0FMNin976= [1506,196,137];
	let _E0F$pxD6459=true;
	let _E0Fcndv839= function(a, b){ return a + b /_E0Fv0482; };
	if(137>100){ let tem2p=(_E0Fcndv839(_E0Fv0482,_E0F$pxD6459));} else{
	let te2emp=("================", _E0Fcndv839,_E0FMNin976); }
}
        if(!this._F0FZq4[1001]) return 0;
        return this._F0FZq4[1001];
    },
};