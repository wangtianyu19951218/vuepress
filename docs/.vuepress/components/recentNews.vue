<template>
  <div>
    <el-row>
      <el-col :span="6"><div class="ww">ss</div></el-col>
      <el-col :span="18"><div class="ww1">22</div></el-col>
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
.ww{
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.ww1{
  width: 500px;
  height: 500px;
  background-color: aqua;
}
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
