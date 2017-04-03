const example01 = require('./src/example01');
const html = require('bel');

const run = (fn) => (event) => {
    if (event) { event.preventDefault(); }
    fn();
}

const exampleDiv = html`<div id="example"></div>`;

const link01 = html`<a href="#">01</a>`;
link01.addEventListener('click', run(example01(exampleDiv)));

const menu = html`<div id="menu">
    <ol>
        <li>${link01}</li>
    </ol>
</div>`;

const mainDiv = html`<div id="root">
    ${menu}
    ${exampleDiv}
</div>`;

document.body.appendChild(mainDiv);
