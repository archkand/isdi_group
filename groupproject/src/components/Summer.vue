<template>
    <div>
        <vue-p5
                @sketch="sketch"
                @preload="preload"
                @setup="setup"
                @draw="draw"
                @keypressed="keyPressed"
                @mousemoved="mouseMoved"
                @mousedragged="mouseDragged">
        </vue-p5>
        <p>
            In summer, the maximum temperature is --- and minimum temperature is ---
        </p>

    </div>
</template>

<script>
    import VueP5 from "vue-p5";
    export default {
        name: "Summer",
        components: {
            "vue-p5": VueP5
        },
        data: () => ({
            red: 100,
            green: 100,
            blue: 100,
            lines: [],
            backgroundImage: null
        }),
        methods: {
            sketch(sketch) {
                sketch.draw = () => {
                    // this.blue = (this.blue + 3) % 255;
                    const { red, green, blue } = this;
                    sketch.background(red, green, blue);

                    sketch.fill(245, 187, 87);
                    sketch.stroke(245, 187, 87);
                    sketch.push();
                    sketch. translate(100, 80);
                    sketch.rotate(sketch.radians(sketch.frameCount / 2));
                    sketch.ellipse(0, 0, 60, 60);
                    sketch.line(0, -60, 0, -40);
                    sketch.line(0, 40, 0, 60);
                    sketch.line(-45, -45, -30, -30);
                    sketch.line(45, -45, 30, -30);
                    sketch. line(-60, 0, -40, 0);
                    sketch.line(40, 0, 60, 0);
                    sketch.line(-45, 45, -30, 30);
                    sketch.line(45, 45, 30, 30);
                    sketch.pop();
                    sketch.noFill();
                };
            },
            // preload(sketch) {
            //     this.backgroundImage = sketch.loadImage("static/p5js.png");
            // },
            setup(sketch) {
                sketch.createCanvas(250, 400);
            },
            draw(sketch) {

            },

        }
    };
</script>