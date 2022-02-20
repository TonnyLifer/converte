<template>
  <q-page>
    <div class="justify-center">
    <q-card class="my-card bg-secondary text-white" style="min-width:50%">
      <q-card-section>
        <div class="text-h4" style="text-align: center;">Список валют</div>
      </q-card-section>
        <div class="row justify-evenly">
          <q-select style="min-width: 300px"
          v-model="value_one" 
          bg-color="white"
          :options="currentValute" />
          <q-select style="min-width: 300px"
          bg-color="white"
          v-model="value_two" 
          :options="currentValute" />
        </div>
      <q-separator dark />
    </q-card>
    <div class="row justify-center" style="margin-top:10px">
          <div v-if="value_one && value_two" class="col-4 text-h5" style="text-align: right;margin:10px">
              1 {{value_one.CharCode}}
          </div>
          <div v-if="value_two && value_one" class="text-h5" style="margin-top:10px">
              =
          </div>
          <div v-if="value_two && value_one" class="col-4 text-h5" style="text-align: left;margin:10px">
              {{((1/value_two.value)/(1/value_one.Value)).toFixed(4)}} {{value_two.CharCode}} <i class="bi bi-arrow-up"></i>
              <span v-if="(value_two.Previous>value_two.value)" style="margin-left:20px">
                <q-icon name="north" color="green" size="1.2em"/>
                {{(value_two.Previous-value_two.Value).toFixed(4)}}
              </span>
              <span v-else style="margin-left:20px">
                <q-icon name="south" color="red" size="1.2em"/>
                {{(value_two.Value-value_two.Previous).toFixed(4)}}
              </span>
              
          </div>
        </div>
        
    </div>
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  data(){
    return{
      value_one: null,
      value_two: '',
            value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]

    }
  },
  methods:{
    ...mapActions(['getValute'])
  },
  mounted(){
    this.getValute()
    // this.value_one=this.currentValute[5]
  },
  computed:{
      ...mapGetters(['currentValute'])
    }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>