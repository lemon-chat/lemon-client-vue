<template>
  <div>
    <div class="login_head_bg"></div>
    <div class="login_page">
      <div class="login_head_wrap">Lemon</div>
      <div class="login_form_wrap">
        <h3 class="login_form_head">登录</h3>
        <p class="login_form_lead">请输入用户名和密码进行登录</p>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLogin"
        >
          <div class="form-item">
            <el-input v-model="formLogin.name"></el-input>
          </div>
          <div class="form-item">
            <el-input v-model="formLogin.password"></el-input>
          </div>

          <div class="form-item">
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>退出</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Component = defineComponent({
  name: "Login",
  data() {
    return {
      formLogin: {
        name: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码不能少于6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
});

export default Component;
</script>

<style scoped>
.login_head_bg {
  background: #5682a3;
  height: 226px;
}

.login_page {
  margin: -131px auto 90px;
  max-width: 404px;
}

.login_head_wrap {
  height: 75px;
  color: white;
  font-size: 23px;
}

.login_form_wrap {
  background: #fff;
  padding: 44px 65px;
  -webkit-box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2),
    1px 0 0 rgba(97, 127, 152, 0.1), -1px 0 0 rgba(97, 127, 152, 0.1);
  -moz-box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2),
    1px 0 0 rgba(97, 127, 152, 0.1), -1px 0 0 rgba(97, 127, 152, 0.1);
  box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2), 1px 0 0 rgba(97, 127, 152, 0.1),
    -1px 0 0 rgba(97, 127, 152, 0.1);
  border-radius: 2px;
  border: 0;
  margin: 0;
  max-width: none;
}

.login_form_head {
  color: #222;
  margin: 0 0 20px;
  font-size: 15px;
  font-weight: 700;
}

.login_form_lead {
  color: #999;
  margin: 15px 0 30px;
  font-size: 13px;
  line-height: 160%;
}

.loginBtn {
  position: relative;
  margin: 0 auto;
  text-align: center;
}

.form-item {
  margin: 25px;
}
</style>
