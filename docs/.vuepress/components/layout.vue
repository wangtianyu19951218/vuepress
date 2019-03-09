<template>
  <div>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple">此处是最近通知组件</div></el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple-dark">
                <swiper></swiper>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="grid-content bg-purple-dark">
                <shortNews></shortNews>
            </div>
        </el-col>      
    </el-row>
    <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">各种权限的人登录组件</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">采购信息公开</div></el-col>
    </el-row>
    <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">荣誉奖项</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">友情链接</div></el-col>
    </el-row>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple">版权声明</div></el-col>
    </el-row>    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
 methods: {
  }
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
