<template>
    <MDBContainer class="mt-5">
        <Navbar />
        <router-view />
    </MDBContainer>
</template>
  
<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from '../components/Navbar.vue';
</script>
  
<style scoped>

</style>
  