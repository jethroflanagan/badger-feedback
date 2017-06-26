import Vue from 'vue';
import Badge from './components/badge/Badge';
import RatingForm from './components/form/RatingForm';
import styles from './App.scss';
import template from './App.html';

new Vue({
    el: '#app',
    template,
    components: {
        'badge-icon': Badge,
        'rating-form': RatingForm,
    },

    data() {
        return {
            isOpen: true,
        };
    },

    methods: {
        toggleForm: function () {
            this.isOpen = !this.isOpen;
        },
    },
});
