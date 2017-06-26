import Vue from 'vue';
import RatingForm from '../form/RatingForm';

import template from './Badge.template.html';
import styles from './Badge.scss';

const Badge = Vue.extend({
    template,

    components: {
        'rating-form': RatingForm
    },

    data() {
        return {};
    },

    methods: {
        open: () => {
            console.log('clicked');
        },
    },
});

export default Badge;
