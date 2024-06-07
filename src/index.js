import $ from 'jquery'
import  Vue from 'vue'
import Main from './components/Main.vue'
class VueComponent {
  constructor(){

  }
  render(id){
    $(`#${id}`).html('<div id="component-js-vue-root" />')
    this.rootComponent = new Vue({
      el: '#component-js-vue-root',
      render: h => h(Main, {})
    })
  }
}

export { VueComponent }