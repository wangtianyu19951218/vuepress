<template>
  <div>
      <h1>AAAAAAA</h1>
      <h1>{{fatherSend}}</h1>
      <el-button type="primary">主要按钮</el-button>
      <i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">搜索</el-button>
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <el-button>下边</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    props:{
      fatherSend:[]
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

