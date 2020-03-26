<template>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
    <el-form ref="form" :rules="rules" :model="form">
      <el-form-item label="昵称" prop="nickname" :label-width="formLabelWidth">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="18">
          <el-form-item label="图形码" prop="code" :label-width="formLabelWidth">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <img class="registerimg" src="../../../assets/login_captcha.png" alt />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item label="验证码" prop="logincode" :label-width="formLabelWidth">
            <el-input v-model="form.logincode" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <button class="registerbut">获取用户验证码</button>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onsubmit">确 定</el-button>
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
        nickname: "",
        email: "",
        phone: "",
        password: "",
        code: "",
        logincode: ""
      },

      rules: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
        phone: [
          { required: true, message: "手机不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "长度在 11 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        code: [
          { required: true, message: "图形码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "长度在 4 个字符", trigger: "blur" }
        ],
        logincode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "长度在 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onsubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "注册成功",
            type: "success"
          });
        }else{
             this.$message.error('注册失败，请从新输入');
        }
      });
    }
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