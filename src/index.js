/**
 * Badger Feedback API
 *
 */
import { createFeedbackBadge } from './App';
import { isElement, validateOptions, extractOptions } from './contract';

function showWarning (message) {
    console.warn(`[BadgerFeedback] ${message.replace(/  /g, '')}`);
}

// Vue replaces the nodes entirely with the templates, running this multiple times will
// replace each element in sequence
function add (selector = '.js-feedback', options = {}) {

    if (isElement(selector)) {

    }

    // Get data attribute options from element, override options with them
    options = validateOptions(options);
    const extracted = extractOptions(el);
    console.log(extracted);
    // createFeedbackBadge(selector, options);
}

// API
window.badgerFeedback = {
    addAll: (selector, options) => {
        if (typeof(selector) !== 'string') {
            // Not enough time to implement array of elements support
            showWarning('You can only target a single element');
            return;
        }
        document.querySelectorAll(selector).forEach((el) => {
            // light clone since this isn't nested, but options are passed by reference
            add(selector, Object.assign({}, options));
        });
    },
    add: (selector, options) => {
        add(selector, options);
    },
}

// demo
window.badgerFeedback.addAll('.js-feedback', {
    position: '',
    style: '',
    badgeImage: '',
    form: {
        title: '',
        commentPlaceholder: '',
        commentLength: 0,
    },
    vote: {
        upImage: '',
        downImage: '',
    },
    submitMessage: '',
    openDirection: '',
});
