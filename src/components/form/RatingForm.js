import Vue from 'vue';
import TextInput from './text-input/TextInput';
import SubmitButton from './submit-button/SubmitButton';
import VoteButton from './vote-button/VoteButton';

import template from './RatingForm.html';
import styles from './RatingForm.scss';

const RatingForm = Vue.extend({
    template,

    components: {
        'text-input': TextInput,
        'submit-button': SubmitButton,
        'vote-button': VoteButton,
    },

    props: {
        options: {
            type: Object,
        }
    },

    data () {
        const {
            formTitle = 'Feedback',
            commentPlaceholder = 'What you think?',
            commentLength = 0,
            voteUpImage,
            voteDownImage,
            direction,
            submitMessage,
        } = this.options;

        const style = {};
        if (voteUpImage) {
            style.voteUp = {
                'background-image': `url(${voteUpImage})`,
            };
        }
        if (voteUpImage) {
            style.voteDown = {
                'background-image': `url(${voteDownImage})`,
            };
        }

        return {
            comment: '',
            isVisible: false,
            isLiked: null,
            title: formTitle,
            commentPlaceholder,
            commentLength: parseInt(commentLength),
            direction,
            style,
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
