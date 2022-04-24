<template>
  <div>
      <p>音乐人</p>
      <ul>
          <li></li>
      </ul>
  </div>
</template>

<script>
import {getSinger} from '../../network/finding'
export default {
    name:'mySinger',
    data(){
        return{
            singers:[]
        }
    },
    created(){
        this.getSinger()
    },
    methods:{
        getSinger(){
            getSinger().then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>