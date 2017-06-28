import Vue from 'vue';
import * as storage from '../../services/storage';
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
        },
        isVisible: {
            type: Boolean,
        },
        submit: {
            type: Function,
            required: true,
        },
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
            isSending: false,
            comment: '',
            email: '',
            isLiked: null,
            title: formTitle,
            commentPlaceholder,
            commentLength: parseInt(commentLength),
            direction,
            submitMessage,
            style,
        };
    },

    mounted () {
        // TODO handle bounds checking for auto direction
    },

    methods: {
        vote (isLiked) {
            return () => {
                if (this.isSending) {
                    return;
                }
                this.isLiked = isLiked;
                this.isSending = true;
                this.submit({
                    email: this.email,
                    comment: this.comment,
                    isLiked,
                })
                    // fetch equivalent of `finally` is a `then` after `catch`
                    .catch()
                    .then(() => this.reset());
            }
        },
        reset () {
            this.isSending = false;
            this.isLiked = null;
            this.comment = '';
            // don't remove email otherwise it saves empty to store
            // this.email = '';
        },
    },

    watch: {
        email: function (val) {
            // save email for sharing
            storage.setItem('email', val);
        },
        isVisible: function (val) {
            if (val) {
                this.email = storage.getItem('email');
            }
        }
    }
});

export default RatingForm;
