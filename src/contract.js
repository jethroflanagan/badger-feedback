const contract = dasherize({
    position: '',
    style: '',
    badgeImage: '',
    formTitle: '',
    commentPlaceholder: '',
    commentLength: '',
    voteUpImage: '',
    voteDownImage: '',
    submitMessage: '',
    direction: '',
});

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
    if (options.openDirection && validDirections.indexOf(options.openDirection) === -1) {
        showWarning(`Valid openDirections: ${validDirections.join(', ')}.
            You used "${options.openDirection}"`);
    }
    return options;
}

// Check if it's a dom node
// Taken from https://stackoverflow.com/a/384380
export const isElement = (obj) => {
    try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return obj instanceof HTMLElement;
    } catch (e) {
        //Browsers not supporting W3 DOM2 don't have HTMLElement
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
}

// Get options from the element attributes
export const extractOptions = (el) => {
    const options = {};
    for (let attr in contract) {
        if (!Object.hasOwnProperty.call(contract, attr)) continue;

        const data = el.getAttribute('data-' + attr);
        if (data) {
            options[attr] = data;
        }
    }
    return options;
}
