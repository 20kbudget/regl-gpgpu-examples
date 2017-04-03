const html = require('bel');

const example = (root) => () => {
    const output = html`<p>foo</p>`;
    root.appendChild(output);
}

module.exports = example;

