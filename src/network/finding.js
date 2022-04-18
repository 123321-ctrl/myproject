//导入我们requset文件中封装好的request函数
import {request} from './request'

export function getBannerData() { 
    return request({
        url: "/search/hot/detail",
        params: {
             limit: 10
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