const Regl = require('regl');

const example = root =>
    () => {
        const regl = Regl(root);
        regl({
            attributes: {
                position: [[-1, -1], [1, 1], [-1, 1], [1, -1]]
            },
            primitive: 'points',
            count: 4,
            vert: `
        attribute vec2 position;
        void main(){
            gl_PointSize = 10.0;
            gl_Position = vec4(position, 0, 1);
        }
        `,
            frag: `
        void main() {
            gl_FragColor = vec4(0.5, 0.5, 0.5, 1);
        
        }
        `,
            framebuffer: regl.framebuffer(4, 1)
        })(() => {
            regl.draw();
            console.log(regl.read().toString());
        });
    };

module.exports = example;
