<template>
  <div class="form">

    <el-row>
      <el-col :xs="{span:12,offset:3}" :sm="{span:6,offset:9}" :md="{span:6,offset:9}">
        <h1>管理员登录</h1>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="{span:12,offset:3}" :sm="{span:6,offset:9}" :md="{span:6,offset:9}">
        <el-form :model="userInfo" status-icon :rules="rules" ref="userInfo"  label-position="left">
          <el-form-item prop="username">
            <el-input v-model="userInfo.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="userInfo.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="borderBottom"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="{span:12,offset:3}" :sm="{span:6,offset:9}" :md="{span:6,offset:9}">
        <h2><i></i>爱家家居后台管理系统</h2>
      </el-col>
    </el-row>

  </div>
</template>

<script>

    const ERR_OK = 0;

    export default {
        name: "Login",
      data() {
        var validateName = (rule,value,callback)=>{
          if(value === ''){
            callback(new Error("请输入账号"))
          }else{
            if(value.length<4){
              callback(new Error("账号名不能少于4位数"))
            }else{
              callback()
            }
          }
        };
        var validatePass = (rule,value,callback)=>{
          if(value === ''){
            callback(new Error("请输入密码"))
          }else{
            if(value.length<4){
              callback(new Error("密码的长度必须大于6位"))
            }else if(value.length>18) {
              callback(new Error("密码的长度不能大于16位"))
            }else{
              callback();
            }
          }
        };
        return {
          userInfo:{
            username:'',
            password:''
          },
          rules:{
            username:[
              {validator:validateName, trigger:'blur'}
            ],
            password:[
              {validator:validatePass, trigger:'blur'}
            ]
          },
          isLogin:0,
          nickname:'',

        }
      },
      methods:{
          submitForm(formName){
            var username = this.userInfo.username;
            var password = this.userInfo.password;
            var url = "http://localhost:8081/user/login";
            this.$http.post(url,{uname:username,upwd:password},{emulateJSON: true,credentials: true}).then(function(res){
              var data = res.data;
              if(data.errno === ERR_OK) {
                this.$router.push('/main');
              }else{
                alert(data.msg);
              }
            })
          }
      }
    }
</script>

<style scoped>
  .form{
    margin-top: 150px;
  }
  .el-col{
    position: relative;
  }
  .el-col>h1 {
    text-align: center;
    font: normal 25px Helvetica, Arial, sans-serif;
    letter-spacing: -0.05em;
    line-height: 20px;
    margin: 10px 0 30px;
  }
  .el-col>h1:before,
  .el-col>h1:after {
    content: "";
    height: 1px;
    position: absolute;
    top: 20px;
    width: 25%
  }
  .el-col>h1:after {
    background: linear-gradient(left, #7e7e7e 0%, #fff 100%);
    right: 0
  }
  .el-col>h1:before {
    background: linear-gradient(right, #7e7e7e 0%, #fff 100%);
    left: 0
  }
  .el-button{
    width: 100%;
  }
  .borderBottom{
    width: 100%;
    margin-top: 30px;
    border-bottom: 1px solid #D8D8D8;
  }
  .el-col>h2{
    text-align: center;
    color: #73879C;
    font: normal 20px Helvetica, Arial, sans-serif;
    letter-spacing: 0.05em;
    line-height: 20px;
  }
  .el-col>h2>i{
    display: inline-block;
    width: 50px;
    height:50px;
    margin-right: 10px;
    vertical-align: middle;
    background-image: url("../../assets/img/logo.jpg");
    background-size:50px 50px;
  }
</style>
