//导入我们requset文件中封装好的request函数
import {request} from './request'

export function getBannerData() { 
    return request({
        url: "/playlist/track/all",
        params: {
            id:5001,
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