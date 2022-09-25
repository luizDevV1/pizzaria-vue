<template>
  <q-layout>
    <pz-header/>

    <q-page-container>
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import PzHeader from "~components/pz-header.vue";

//
</script>

<style scoped>

</style>
