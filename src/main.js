import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import VueFire from 'vuefire'

Vue.use(VueFire)

Vue.use(Vuetify,
{
    theme: {
   
 
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
        cyan: colors.cyan.base 
      
   
  },
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
