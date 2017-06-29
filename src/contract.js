const contract = dasherize({
    style: '',
    badgeImage: '',
    badgeColor: '',
    endpoint: '',
    title: '',
    commentPlaceholder: '',
    commentLength: '',
    voteUpImage: '',
    voteDownImage: '',
    submitMessage: '',
    direction: '',
    zIndex: '',
});

function showWarning (message) {
    console.warn(`[BadgerFeedback] ${message.replace(/  /g, '')}`);
}

// Setup dasherized versions for the data attributes
function dasherize (obj) {
    for (let prop in obj) {
        if (!Object.hasOwnProperty.call(obj, prop)) continue;
        obj[prop] = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
    return obj;
}

export const validateOptions = (options) => {
    const validDirections = [
        'auto',
        'up-left',
        'down-left',
        'up-right',
        'down-right',
    ];
    if (options.direction && validDirections.indexOf(options.direction) === -1) {
        showWarning(`Valid directions: ${validDirections.join(', ')}.
            You used "${options.direction}"`);
    }
    if (options.commentLength) {
        options.commentLength = parseInt(options.commentLength);
    }
    if (options.zIndex) {
        options.zIndex = parseInt(options.zIndex);
    }
    return options;
}

// Get options from the element attributes
export const extractOptions = (el) => {
    const options = {};
    for (let attr in contract) {
        if (!Object.hasOwnProperty.call(contract, attr)) continue;

        // use dasherized attribute name
        const data = el.getAttribute('data-' + contract[attr]);

        if (data) {
            // save as camelCase name
            options[attr] = data;
        }
    }
    return options;
}
