<template>
  <el-container>

    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1','2', '3']">
        <router-link to="/welcome"><el-menu-item index="0"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>订单管理</template>
            <router-link to="/order"><el-menu-item index="1-1">订单列表</el-menu-item></router-link>
            <router-link to="/noFound"><el-menu-item index="1-2">修改订单</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-goods"></i>商品管理</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
    import head from '../header/v-header';
    import foot from '../footer/v-footer';
    export default {
        name: "MainComponent",
        components:{
          'v-header': head,
          'v-footer': foot
        }
    }
</script>

<style scoped>

</style>
