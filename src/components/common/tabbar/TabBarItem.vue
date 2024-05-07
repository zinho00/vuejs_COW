<template>
    <div class="tab-bar-item" @click="itemClick">
      
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>

</template>

<script>
export default {
name: 'TabBarItem',
props: {
  path: String,
  activeColor: {
    type: String,
    default: 'red'
  }
},
// data() {
//   return {
//     isActive: true
//   }
// },
computed: {
  isActive() {
    // 动态决定是否为true
    return this.$route.path.indexOf(this.path) !== -1
  },
  activeStyle() {
    return this.isActive ? {
      color: this.activeColor
    } : {}
  }
},
methods: {
  itemClick() {
    this.$router.push(this.path)
  }
},

}
</script>


<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
  overflow: hidden;
  color: white;
  letter-spacing: 2px;
  font-size: 23px;
}


</style>

