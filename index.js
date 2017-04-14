const example01 = require('./src/example01');
const html = require('bel');

const run = (fn) => (event) => {
    console.log('run')
    if (event) { event.preventDefault(); }
    console.log('click')
    fn();
}

const exampleDiv = html`<div id="example"></div>`;

const button01 = html`<button href="#" onclick=${example01(exampleDiv)}>01</button>`;

const menu = html`<div id="menu">
    <ol>
        <li>${button01}</li>
    </ol>
</div>`;

const mainDiv = html`<div id="root" style="background-color: #CCCCCC;">
    ${exampleDiv}
</div>`;

document.body.appendChild(mainDiv);
example01(exampleDiv)();
