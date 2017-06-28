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
                endpoint,
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
                isOpen: true,
                appOptions: {
                    endpoint,
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
            closeForm () {
                this.isOpen = false;
            },
            send (form) {
                const MIN_TIME = 1500; // ms to keep form on screen
                if (!fetch || !this.appOptions.endpoint) {
                    return Promise().resolve(false);
                }
                const startTime = new Date().getTime();

                const headers = new Headers();
                headers.set('Content-Type', 'application/json');

                return fetch(this.appOptions.endpoint, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status !== 200) {
                            // if the request resolves quickly, hold the form
                            // open for a bit
                            const diffTime = new Date().getTime() - startTime;
                            if (diffTime < MIN_TIME) {
                                // can't just do a simple timeout, needs to be a promise
                                return new Promise(resolve => {
                                    setTimeout(
                                        () => {
                                            this.closeForm();
                                            resolve();
                                        },
                                        MIN_TIME - diffTime
                                    );
                                });
                            }
                            else {
                                this.closeForm();
                                return Promise.resolve();
                            }
                        }
                    });
            }
        },
    });
};
