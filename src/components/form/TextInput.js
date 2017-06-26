import Vue from 'vue';
import template from './TextInput.template.html';

const TextInput = Vue.extend({
    template,

    props: {
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            value: '',
        };
    }
});

export default TextInput;
