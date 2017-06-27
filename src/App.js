import Vue from 'vue';
import Badge from './components/badge/Badge';
import RatingForm from './components/form/RatingForm';
import styles from './App.scss';
import template from './App.html';

export const createFeedbackBadge = (selector, options) => {
    new Vue({
        el: selector,
        template,
        components: {
            'badge-icon': Badge,
            'rating-form': RatingForm,
        },

        data () {
            const {
                style,
                badgeImage,
                badgeColor,
                formTitle,
                commentPlaceholder,
                commentLength,
                voteUpImage,
                voteDownImage,
                submitMessage,
                direction,
                zIndex,
            } = options;

            return {
                isOpen: false,
                appOptions: {
                    style,
                    zIndex,
                },
                badgeOptions: {
                    image: badgeImage,
                    color: badgeColor,
                },
                formOptions: {
                    formTitle,
                    commentPlaceholder,
                    commentLength,
                    voteUpImage,
                    voteDownImage,
                    direction,
                    submitMessage,
                }
            };
        },

        methods: {
            toggleForm () {
                this.isOpen = !this.isOpen;
            },
        },
    });
};
