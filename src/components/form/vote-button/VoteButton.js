import Vue from 'vue';
import template from './VoteButton.html';
import styles from './VoteButton.scss';

const VoteButton = Vue.extend({
    template,

    props: {
        label: {
            type: String,
            default: 'Submit',
        },
        type: {
            type: String,
            default: '',
            validator: (value) => {
                return ['like', 'dislike'].indexOf(value) > -1;
            },
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        vote: {
            type: Function,
            required: true,
        }
    },

    methods: {
        onClick () {
            this.vote();
        }
    }
});

export default VoteButton;
