<template>
  <div class="header">
    <el-dropdown  @command="handleCommand">
       <span class="el-dropdown-link">
       欢迎回来 , {{uname}}<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">注销登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "v-header",
    props: ['uname'],
    methods:{
      handleCommand(command) {
        if(command == 'logout'){
          console.log('logout is clicked');
          this.$http.get('http://localhost:8081/user/logout',{credentials: true}).then(function(res){
            var data = res.data;
            if(data.errno==0){
              this.$message({
                message: data.msg,
                type: 'success'
              });
              this.$router.push('/login');
            }else{
              this.$message({
                message: data.msg,
                type: 'warning'
              });
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
  }
  .el-dropdown {
    float: right;
  }
</style>
