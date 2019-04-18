<template>
    <div>
        <vue-p5
                @sketch="sketch"
                @setup="setup"
                @draw="draw"
        >
        </vue-p5>
    </div>
</template>

<script>
    import VueP5 from "vue-p5";
    export default {
        name: "Winter",
        components:{
            "vue-p5": VueP5
        },
        data(){
            return{
                card_text: 'Fall',
                red: 255,
                green: 0,
                blue: 0,
                lines: [],
                snowflakes:[],
                width: 250,
                height: 400,
                t:0,
            }
        },
        methods: {
            sketch(sketch) {
                sketch.draw = () => {
                    // this.blue = (this.blue + 3) % 255;
                    // const {red, green, blue} = this;
                    // sketch.background(red, green, blue);
                };
            },
            //preload(sketch) {
            //this.backgroundImage = sketch.loadImage("static/p5js.png");
            //},
            setup(sketch) {
                sketch.createCanvas(this.width, this.height);
                sketch.fill(240);
                sketch.noStroke();
            },
            draw(sketch) {
                sketch.background('brown');
                this.t = sketch.frameCount / 60;
                //    console.log(this.t);
                for (let i = 0; i < sketch.random(5); i++) {
                    this.snowflakes.push(new this.snowflake(sketch)); // append snowflake object
                }

                // loop through snowflakes with a for..of loop
                for (let flake of this.snowflakes) {
                    flake.update(this.t); // update snowflake position
                    flake.display(); // draw snowflake
                }
            },
            snowflake(sketch){
                let posX = 0;
                let posY = sketch.random(-50, 0);
                let initialangle = sketch.random(0, 2 * sketch.PI);
                let size = sketch.random(2, 5);

                // radius of snowflake spiral
                // chosen so the snowflakes are uniformly spread out in area
                let radius = sketch.sqrt(sketch.random(sketch.pow(this.width / 2, 2)));

                this.update = function(time) {
                    // x position follows a circle
                    let w = 0.6; // angular speed
                    let angle = w * time + initialangle;
                    posX = this.width / 2 + radius * sketch.sin(angle);

                    // different size snowflakes fall at slightly different y speeds
                    sketch.posY += sketch.pow(sketch.size, 0.5);

                    // delete snowflake if past end of screen
                    if (posY > this.height) {
                        let index = this.snowflakes.indexOf(this);
                        this.snowflakes.splice(index, 1);
                    }
                };

                this.display = function() {
                    sketch.ellipse(posX,posY,size);
                };
            }

        },
    }
</script>

<style scoped>

</style>