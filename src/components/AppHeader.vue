<template>

    <v-app-bar dark class="primary">
      <v-app-bar-title v-text="'demo'"></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn v-for="(item, i) in menuItems" icon :key="`menuitem${i}`" :to="item.route">
        {{item.title}}
        </v-btn> 
      </v-toolbar-items>
    </v-app-bar>

</template>

<script>
  export default {
    computed:{
      menuItems(){
        return[
          {
            icon: 'chart-tree',
            title:'info',
            router:'/info'
          }
        ]
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
