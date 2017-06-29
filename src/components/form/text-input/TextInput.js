import Vue from 'vue';
import template from './TextInput.html';
import styles from './TextInput.scss';

const TextInput = Vue.extend({
    template,

    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        },
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
        isMultiline: {
            type: Boolean,
            default: false,
        },
        // HACK to get 2-way binding on v-model
        nextValue: {
            type: String,
            default: '',
        },
        error: {
            type: [String, Boolean],
            default: false,
        }
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
        isFocused (val) {
            if (this.$refs.field && this.isFocused) {
                this.$refs.field.focus();
            }
        },

        value (val) {
            if (!this.maxLength || typeof(val) !== 'string') {
                return;
            }
            this.charactersRemaining = this.maxLength - val.length;

            // v-model binding
            this.$emit('input', val);
        },

        // Update value from parent
        nextValue (val) {
            this.value = val;
        },
    },
});

export default TextInput;
