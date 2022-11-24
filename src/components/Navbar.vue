<template>
    <MDBNavbar light bg="light" container>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <form class="d-flex input-group w-auto">
            <input type="search" class="form-control" placeholder="Type query" aria-label="Search" />
            <MDBBtn outline="primary"> Search </MDBBtn>
        </form>
    </MDBNavbar>
</template>

<script setup lang="ts">
import { MDBBtn, MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
</script>