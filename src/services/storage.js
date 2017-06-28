/**
 * Stores everything in sessionStorage with the same API, but namespaced
 * Uses JSON strings to store
 */

const NAMESPACE = '[BadgerFeedback]';

export const setItem = (key, value) => {
    let data = getItem();
    if (!data) {
        data = {};
    }
    // merge and override keys
    data = Object.assign(data, { [key]: value });
    sessionStorage.setItem(NAMESPACE, JSON.stringify(data));
}

export const getItem = (key) => {
    const data = sessionStorage.getItem(NAMESPACE);
    if (data) {
        try {
            const fields = JSON.parse(data);
            if (!key) {
                return fields;
            }
            return fields[key];
        }
        // invalid JSON
        catch (e) {
            return null;
        }
    }
    return null;
}
