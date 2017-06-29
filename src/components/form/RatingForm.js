import Vue from 'vue';
import * as storage from '../../services/storage';
import TextInput from './text-input/TextInput';
import VoteButton from './vote-button/VoteButton';

import template from './RatingForm.html';
import styles from './RatingForm.scss';

const RatingForm = Vue.extend({
    template,

    components: {
        'text-input': TextInput,
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
        closeForm: {
            type: Function,
            required: true,
        },
    },

    data () {
        const {
            title = 'Feedback',
            commentPlaceholder = 'What you think?',
            commentLength = 0,
            voteUpImage,
            voteDownImage,
            direction,
            submitMessage,
            zIndex,
        } = this.options;

        const style = { form: {} };
        if (voteUpImage) {
            style.voteUp = {
                'background-image': `url(${voteUpImage})`,
            };
        }
        if (voteDownImage) {
            style.voteDown = {
                'background-image': `url(${voteDownImage})`,
            };
        }
        if (zIndex) {
            style.form['z-index'] = zIndex;
        }

        return {
            isSending: false,
            comment: '',
            email: '',
            emailError: false,
            error: false,
            isLiked: null,

            // options
            title,
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
                if (!this.validateEmail(this.email)) {
                    this.emailError = 'Invalid email';
                    return;
                }
                this.isLiked = isLiked;
                this.isSending = true;
                this.submit({
                    email: this.email,
                    comment: this.comment,
                    isLiked,
                })
                    .catch((err) => {
                        console.log(err);
                        setTimeout(() => {
                            this.isSending = false;
                        }, 1500);
                        this.error = err;
                    });
            }
        },

        reset () {
            console.log('reset');

            this.isSending = false;
            this.isLiked = null;
            this.comment = '';
            this.error = false;
            // don't remove email otherwise it saves empty to store
            // this.email = '';
        },

        validateEmail (val) {
            // very simple check on email
            if (val.indexOf('@') === -1) {
                return false;
            }
            // find problem emails
            const hasError = [
                /[@\.]$/, // @ or . at end
                /^[@\.]/, // @ or . at start
                /[@\.]{2}/, // double up of @ or .
            ].find((test) => (val.match(test) != null));

            return hasError == null;
        },
    },

    watch: {
        email: function (val) {
            // save email for sharing
            storage.setItem('email', val);
            this.emailError = false;
        },

        isVisible: function (val) {
            console.log('isVis', val);
            if (val) {
                this.email = storage.getItem('email');
            }
            else {
                this.reset();
            }
        }
    }
});

export default RatingForm;
