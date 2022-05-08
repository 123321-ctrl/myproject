//导入我们requset文件中封装好的request函数
import {request} from './request'

export function denglu(phone,password) { 
    return request({
        url: "/login/cellphone",
        params: {
            phone:phone,
            password: password,
        }
    })
}
//得到关注列表
export function watchList(uid) { 
    return request({
        url: "/user/follows",
        params: {
            uid:uid,
        }
    })
}
export function getHotData(id) { 
    return request({
        url: "/playlist/track/all",
        params: {
            id:id,
            limit: 10,
            offset:1
        }
    })
}
export function getPlaylistHot(){
    return request({
        url:'/playlist/hot',
        params:{
            limit:20
        }
    })
}
//得到歌手名字
export function getSinger(type){
    return request({
        url:'/artist/list',
        params:{
            limit:50,
            type:type,
        }
    })
}
//得到歌手的所有歌曲  id为歌手的id
export function getSingerSongs(id){
    return request({
        url:'/artist/songs',
        params:{
            id:id,
            order:"hot",
            limit:50
        }
    })
}

//得到专辑
export function getzhuangji(area){
    return request({
        url:'/album/list/style',
        params:{
            area:area,
            offset:1,
            limit:12
        }
    })
}
//得到专辑详情
export function getzhuangjiDetail(id){
    return request({
        url:'/album',
        params:{
            id:id
        }
    })
}
//得到电台的ID   推荐电台接口
export function getRedioId(){
    return request({
        url:'/personalized/djprogram',
    })
}
export function getRedioId2(){
    return request({
        url:'/dj/hot',
        params:{
            limit:10
        }
    })
}
//得到电台的歌曲列表  需登录
export function getRedioIdSongs(rid){
    return request({
        url:'/dj/program',
        params:{
            rid:rid,
            limit:40
        }
    })
}
//得到搜索关键字
export function getSearchValue(value){
    return request({
        url:'/search/suggest',
        params:{
            keywords: value
        }
    })
}
//得到歌曲的播放地址
export function getSongUrl(id){
    return request({
        url:'/song/url',
        params:{
            id: id
        }
    })
}