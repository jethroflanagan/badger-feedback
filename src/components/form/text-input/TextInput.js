import Vue from 'vue';
import template from './TextInput.html';
import styles from './TextInput.scss';

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

    data () {
        return {
            value: '',
        };
    }
});

export default TextInput;
