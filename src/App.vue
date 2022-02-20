<template>
  <q-layout view="lHh Lpr lFf">
    <q-card class="my-card bg-secondary text-white column items-center" style="min-width:50%">
      <div class="q-pa-md q-gutter-sm">
      <router-link style="text-decoration: none; color: inherit;" to="/"><q-btn color="primary" label="Список" /></router-link>
      <router-link style="text-decoration: none; color: inherit;" to="/converte"><q-btn color="amber" label="Конвертер" /></router-link>
      </div>
    </q-card>
    
    <q-page-container>
       <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  components: {
    // HelloWorld
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
