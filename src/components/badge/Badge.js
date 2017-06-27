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
        isOpen: {
            type: Boolean,
        },
        options: {
            type: Object,
        }
    },

    data () {
        const { image, color } = this.options;
        const style = {};
        if (image) {
            style.image = {
                'background-image': `url(${image})`,
            };
        }
        if (color) {
            style.color = {
                'background-color': `${color}`,
            };
        }
        return {
            style,
        };
    },

    methods: {
        onClick: function () {
            this.toggle();
        },
    },
});

export default Badge;
