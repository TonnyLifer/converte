<template>
  <q-page>
    <div class="justify-center">
    <q-card class="my-card bg-secondary text-white" style="min-width:50%">
      <q-card-section>
        <div class="text-h4" style="text-align: center;">Конвертер валют</div>
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
          <div v-if="value_one && value_two" class="col-4" style="text-align: right;margin:10px;max-width: 300px">
              <q-input outlined :change="changer()" v-model="first_val">
                <template v-slot:prepend>
                  {{value_one.CharCode}}
                </template>
              </q-input>
          </div>
          <div v-if="value_two && value_one" class="text-h5" style="margin-top:10px">
             <q-btn round color="secondary" @click="reverse" icon="loop" />
          </div>
          <div v-if="value_two && value_one" class="col-4 text-h5" style="text-align: left;margin:10px;max-width: 300px">
           <q-input outlined disable readonly v-model="second_val">
              <template v-slot:prepend>
                {{value_two.CharCode}}
              </template>
           </q-input>
              
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
      value_one: '',
      value_two: '',
      first_val: 1,
      second_val:'',
      check:null

    }
  },
  methods:{
    ...mapActions(['getValute']),
    changer(){
      this.second_val = (((1/this.value_two.value)/(1/this.value_one.Value))*this.first_val).toFixed(2)
    },
    reverse(){
      this.check=this.value_one
      this.value_one=this.value_two
      this.value_two=this.check
      this.check=this.second_val
      this.second_val=this.first_val
      this.first_val=this.check
    }
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