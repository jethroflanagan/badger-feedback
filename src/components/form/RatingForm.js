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
            formTitle,
            commentPlaceholder = 'What you think?',
            commentLength,
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
            formTitle,
            commentPlaceholder,
            direction,
            style,
        };
    },

    mounted () {
        // add class after initial render to trigger the transition
        this.isVisible = true;
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
