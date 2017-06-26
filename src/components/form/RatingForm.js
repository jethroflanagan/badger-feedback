import Vue from 'vue';
import TextInput from './text-input/TextInput';
import SubmitButton from './submit-button/SubmitButton';
import VoteButton from './vote-button/VoteButton';

import template from './RatingForm.html';

const RatingForm = Vue.extend({
    template,

    components: {
        'text-input': TextInput,
        'submit-button': SubmitButton,
        'vote-button': VoteButton,
    },

    data () {
        return {
            comment: '',
            isVisible: true,
            isLiked: null,
        };
    },

    methods: {
        vote (isLiked) {
            return () => {
                console.log('ok', isLiked);
                this.isLiked = isLiked;
            }
        },
        send () {
            console.log('sending to api');
        },
    },
});

export default RatingForm;
