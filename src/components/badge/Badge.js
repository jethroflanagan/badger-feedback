import Vue from 'vue';
import RatingForm from '../form/RatingForm';

import template from './Badge.html';
import styles from './Badge.scss';

const Badge = Vue.extend({
    template,

    components: {
        'rating-form': RatingForm
    },

    props: {
        toggle: {
            type: Function,
            required: true,
        },
    },

    // data () {
    //     return {
    //         isOpen: false,
    //     };
    // },

    methods: {
        onClick: function () {
            this.toggle();
        },
    },
});

export default Badge;
