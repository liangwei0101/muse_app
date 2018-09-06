<template>
  <mu-flex fill>
    <mu-container class="content">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label-position="right" label="账户" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label-position="right" label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <br>
        <mu-form-item>
          <mu-button color="cyan" @click="submit">登录</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </mu-flex>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  mounted() {
    this.validateForm.username = "19145";
    this.validateForm.password = "123456";
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        this.$store.commit("setUserInfo", this.validateForm.username);
        console.log(Cookies.get("userId"));
        this.$router.push({
          name: "Home"
        });
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 100%;
}
.content {
  margin-top: 150px;
  margin-left: 50px;
  margin-right: 50px;
  width: 100%;
}
</style>