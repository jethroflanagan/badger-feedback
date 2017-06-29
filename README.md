# Badger Feedback
Badger your users for their comments.

## Features

- Custom styling, positioning, images and messages
- Multiple open directions
- Handles resizing comment field
- Character limits on form inputs (indicator only shows on focus)
- Endpoint posting via fetch
- Element attributes to set options or run via JS object
- Options can be used globally and overriden per element
- Shares email field between all instances (stored per session)
- Sets focus on comment field on opening
- Accessibility highlights on focus (tabindex)
- Basic validation

## Usage

The badges can be added to multiple elements by class or id.

```javascript
<div class="my-feedback-badge"></div>
window.badgerFeedback.addAll('.my-feedback-badge');
```

or you can pass in options

```javascript
window.badgerFeedback.addAll('.my-feedback-badge', { title: 'Comments' });
```

Please note that elements are replaced in their entirety so if you need to style or add classes,
wrap it in another element.

## Options

Options are applied to all elements, but individual elements can override them as needed.

| Parameter          | Type   |  Description                                                                  |
|--------------------|--------|-------------------------------------------------------------------------------|
| style              | String |  Affects to badge and container                                               |
| badgeImage         | String |  URL to image, will be used in css via url()                                  |
| badgeColor         | String |  #fff or red                                                                  |
| endpoint           | String |  Fetch must exist or be polyfilled to run this                                |
| title              | String |  Form title                                                                   |
| commentPlaceholder | String |  On the form                                                                  |
| commentLength      | Number |  Defaults to infinity (value 0)                                               |
| voteUpImage        | String |  URL to image, will be used in css via url()                                  |
| voteDownImage      | String |  URL to image, will be used in css via url()                                  |
| submitMessage      | String |  Message that shows after voting                                              |
| direction          | String |  Direction the form shows in 'up-left', 'up-right', 'down-left', 'down-right' |
| zIndex             | Number |  Force the form above stuff if your site uses more than 1000 for z-index      |

To override the options on an element, set the data attribute with a dasherized version of the property name e.g.

```html
<div data-comment-placeholder="Blah" class="badger-feedback" />
```

## Things to extend upon

- Use CSS-modules to prevent clashing with site styles
- Production build e.g. ExtractText for CSS
- Communication between forms to close others when one opens and adjust z-index
- Theming
- Fully implement contract (some options don't work)
- Allow endpoint to be a function that returns promises so site can handle actual request
- Test integration e.g. Mocha
- Flow type checker
- Hot reloading
- Allow preventing or editing feedback once sent (use gen'd key per session)
- Better form validation
- Auto mode layout based on getBoundingClientRect and window
