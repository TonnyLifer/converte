import {createStore} from 'vuex'


// Create a new store instance.
export default createStore({
  state () {
    return {
      valute: null,
      search_name:[]
    }
  },
  mutations: {
    GET_VALUTE(state,data){
      // data:{
      //   CharCode: "RUB"
      //   ID: "R01075"
      //   Name: "Русский рубль"
      //   Nominal: 1
      //   NumCode: "7596"
      //   Previous: 1
      //   Value: 1
      //   label: "Русский рубль"
      // }
      state.valute = data
    },
    SEARCH_NAME(state,req){
      // req.forEach(element => {
        console.log(req)
        state.search_name = req
      // });
    }
  },
  getters:{
    currentValute(state){
        return state.valute
      }
  },
  actions:{
    getValute({commit}){
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let i = new Array
          let j=';';
          for (const [key, value] of Object.entries(data.Valute)){
            // commit('SEARCH_NAME',value)
            if(j==';'){
              value.CharCode= "RUB",
              value.ID = "R01075"
              value.Name = "Российский рубль"
              value.Nominal= 1
              value.NumCode = "9756"
              value.Previous=1
              value.Value=1
              value.label= "Российский рубль"
              j=0
            }
            i.push(value)
            i[j].label = i[j].Name
            i[j].value = i[j].Value
            j++
            console.log(key,value,j)
          }
          commit('GET_VALUTE',i)
          // commit('SEARCH_NAME',data)
        });
        
    }
}
})