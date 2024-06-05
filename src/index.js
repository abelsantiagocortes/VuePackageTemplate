import $ from 'jquery'
import  Vue from 'vue'
import Main from './components/Main.vue'
class Conversa {
  constructor(){

  }
  render(id){
    $(`#${id}`).html('<div id="conversa-js-vue-root" />')
    this.rootComponent = new Vue({
      el: '#conversa-js-vue-root',
      render: h => h(Main, {})
    })
  }
}

export { Conversa }