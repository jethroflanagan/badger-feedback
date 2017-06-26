import Vue from 'vue';
import TextInput from './text-input/TextInput';
import VoteButton from './vote-button/VoteButton';

import template from './RatingForm.html';

const RatingForm = Vue.extend({
    template,

    components: {
        'text-input': TextInput,
        'vote-button': VoteButton,
    },

    data() {
        return {
            comment: '',
            isVisible: true,
            isLiked: null,
        };
    },

    methods: {
        send: () => {
            console.log('sending to api');
        },
        vote: function (isLiked) {
            this.isLiked = isLiked;
        }
    },
});

export default RatingForm;
