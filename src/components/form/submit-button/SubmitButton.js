import Vue from 'vue';
import template from './SubmitButton.html';

const SubmitButton = Vue.extend({
    template,

    props: {
        label: {
            type: String,
            default: '',
        },
    },

    methods: {
        onClick: function () {
            console.log('submit');
        },
    }
});

export default SubmitButton;
