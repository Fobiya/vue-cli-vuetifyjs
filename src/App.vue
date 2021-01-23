<template>
  <v-app>
    <app-header></app-header> 
    <router-view/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">

</style>
