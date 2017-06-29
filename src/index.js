/**
 * Badger Feedback API
 *
 */
import { createFeedbackBadge } from './App';
import { isElement, validateOptions, extractOptions } from './contract';

// Vue replaces the nodes entirely with the templates, running this multiple times will
// replace each element in sequence
function add (selector = '.badger-feedback', options = {}, element = null) {
    if (element) {
        const extracted = extractOptions(element);

        // light clone, then override with extracted
        options = Object.assign({}, options, extracted);
    }

    // Get data attribute options from element, override options with them
    options = validateOptions(options);
    createFeedbackBadge(selector, options);
}

// API
window.badgerFeedback = {
    addAll: (selector, options) => {
        document.querySelectorAll(selector).forEach((element) => {
            // light clone since this isn't nested, but options are passed by reference
            add(selector, options, element);
        });
    },
    add: (selector, options) => {
        add({ selector }, options);
    },
}
