<template>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="昵称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="18">
          <el-form-item label="图形码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <img class="registerimg" src="../../../assets/login_captcha.png" alt />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <button class="registerbut">获取用户验证码</button>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "67px",
      form: {
        name: "",
        region: ""
      }
    };
  }
};
</script>

<style lang="less">
.el-dialog {
  text-align: center;
  .el-dialog__header {
    padding: 0;
    line-height: 53px;
    height: 53px;
    background: linear-gradient(to right, #03c3f0, #1495fd);
    .el-dialog__title {
      color: #fff;
    }
    .el-icon-close:before {
      display: none;
    }
  }
  .el-col-6 {
      text-align: right;
    height: 41px;
    .registerimg {
      width: 143px;
      height: 41px;
    }
  }
  .registerbut {
    width: 143px;
    height: 41px;
  }
}
</style>