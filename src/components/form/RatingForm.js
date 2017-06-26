import Vue from 'vue';
import TextInput from './TextInput';

import template from './RatingForm.template.html';

const RatingForm = Vue.extend({
    template,

    components: {
        'text-input': TextInput
    },

    data() {
        return {
            comment: '',
        };
    },

    methods: {
        send: () => {
            console.log('sending to api');
        },
    },
});

export default RatingForm;
