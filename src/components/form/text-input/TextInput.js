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
        isFocused: {
            type: Boolean,
            default: false,
        },
        maxLength: {
            type: Number,
            default: 0,
        },
    },

    data () {
        return {
            value: '',
            charactersRemaining: this.maxLength,
        };
    },

    mounted () {
        if (this.$refs.field && this.isFocused) {
            this.$refs.field.focus();
        }
    },

    watch: {
        value (val) {
            if (!this.maxLength) {
                return;
            }
            this.charactersRemaining = this.maxLength - val.length;
        },
    },
});

export default TextInput;
