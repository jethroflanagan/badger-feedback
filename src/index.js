import Vue from 'vue';
// don't worry, we haven't created this yet!
import Badge from './components/badge/Badge';

new Vue({
    el: '#app',
    components: {
        'app-component': Badge
    }
});
