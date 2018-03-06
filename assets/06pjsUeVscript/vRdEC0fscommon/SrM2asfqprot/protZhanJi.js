//战绩协议
let prottab = {}
module.exports = prottab
////////////////////////////////////////////////////////////-

prottab.AZhanJi_C2SQuery = 10   //战绩查询


////////////////////////////////////////////////////////////-
prottab.AZhanJi_S2CQuery = 200

////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
//协议结构体
/*
local C2SQuery = { // c_to_s
    userId = 0,	//用户id，主动请求
}
local S2CQuery = { // c_to_s 
	// [[协议内容如: [zhanjiId]={{userlist={ 
	// 		{userId=0, userName="", score=-10, },
	// 		{userId=0, userName="", score=-10, },
	// 		...
	// }}}
	// zhanjiId = 'gameId .. "_" .. roomId .. "_" .. jushu'字符串拼接的战绩Id
	// ]]
}
*/