import Vue from 'vue';
// don't worry, we haven't created this yet!
import AppComponent from './components/AppComponent';

new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent
  }
});
