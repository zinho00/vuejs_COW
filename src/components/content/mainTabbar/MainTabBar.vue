<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#FFD700">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/goods" activeColor="#FFD700">
        <div slot="item-text">医疗产品</div>
      </tab-bar-item>
      <tab-bar-item path="/news" activeColor="#FFD700">
        <div slot="item-text">新闻中心</div>
      </tab-bar-item>
      <tab-bar-item path="/about" activeColor="#FFD700">
        <div slot="item-text">关于我们</div>
      </tab-bar-item>
      <tab-bar-item path="/download" activeColor="#FFD700">
        <div slot="item-text">资源下载</div>
      </tab-bar-item>
    </tab-bar>
  </div>  
    
  
</template>



<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}

</script>