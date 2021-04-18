import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.component('hello-world',HelloWorld);

Vue.directive('changepad',
  function(el,binding){
    if(binding.value=='full'){
      el.style.padding="0";
    }else if(binding.value=='basic'){
      el.style.padding="10% 20%";
    }
  }
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
