<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>

#tab-bar{
  display: flex;
  background-color: #008fd7;

  box-shadow: 0px 3px 1px rgba(100,100,100,.2);
}


</style>