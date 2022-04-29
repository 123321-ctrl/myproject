//导入我们requset文件中封装好的request函数
import {request} from './request'

// export function denglu() { 
//     return request({
//         url: "/login/cellphone",
//         params: {
//             phone:1,
//             password: '',
//         }
//     })
// }

export function getHotData() { 
    return request({
        url: "/playlist/track/all",
        params: {
            id:5001,
            limit: 10,
            offset:1
        }
    })
}
export function getNewData() { 
    return request({
        url: "/playlist/track/all",
        params: {
            id:2008,
            limit: 10,
            offset:0
        }
    })
}
export function getListenData() { 
    return request({
        url: "/playlist/track/all",
        params: {
            id:10001,
            limit: 10,
            offset:0
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
export function getMSinger(){
    return request({
        url:'/artist/list',
        params:{
            limit:50,
            type:1,
        }
    })
}
export function getFSinger(){
    return request({
        url:'/artist/list',
        params:{
            limit:50,
            type:2,
        }
    })
}
export function getCnzhuangji(){
    return request({
        url:'/album/list/style',
        params:{
            area:"Z_H",
            offset:1,
        }
    })
}
export function getRedioId(){
    return request({
        url:'/personalized/djprogram',
        // params:{
        //     area:"Z_H",
        //     offset:1,
        // }
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