<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://simonsun.xyz" target="_blank">Simon's Blog</a>
        <br>created by Simon Sun
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#basicLayout .footer {
  background-color: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  padding: 24px;
  margin-bottom: 20px;
  background-color: linear-gradient(to right, #fefefe, #f9f9f9);
}

#basicLayout .header {
  background-color: #fff;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 2px;
}
</style>
