<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="itme-icon"></slot></div>
    <div v-else><slot name="itme-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="itme-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if (this.$router.path !== this.path){
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 1px;
    vertical-align: middle;
  }
</style>
