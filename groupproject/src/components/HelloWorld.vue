<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="hello">
<VueScrollProgress></VueScrollProgress>
      <header id="site-header" class="nav is-fixed">
          <div class="container">
              <scrollactive ref="scrollactive" :offset="offset" :always-track="alwaysTrack" :duration="duration" :click-to-scroll="clickToScroll" :bezier-easing-value="easing">
                  <a href="#about" class="scrollactive-item nav-item">ABOUT</a>
                  <a href="#history" class="scrollactive-item nav-item">HISTORY</a>
                  <a href="#tourism" class="scrollactive-item nav-item">TOURISM</a>
                  <a href="#climate" class="scrollactive-item nav-item">CLIMATE</a>
              </scrollactive>
          </div>
      </header>
      <img alt="Vue logo" src="../assets/Logo_NC.svg">
      <section id="about" class="section hero is-primary is-fullheight">
              <v-app id="inspire">
                  <v-carousel class="display">
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                  <h4>This website gives the complete information about North Carolina in terms of population, traffic and abc of the cities in NC. It is an interactive website where users can get information through reading and also interacting with the bot which helps in giving answers to the questions asked by the users.  </h4>
              </v-app>
      </section>
      <section id="history" class="section hero is-success is-fullheight">
          <div class="container">
              <h1 class="heading title is-1">History</h1>
          </div>
      </section>
      <section id="tourism" class="section hero is-danger is-fullheight">
          <div class="container">
              <h1 class="heading title is-1">Tourism</h1>
              <Tourism></Tourism>
          </div>
      </section>
      <section id="climate" class="section hero is-info is-fullheight">
          <v-container grid-list-md text-xs-center>
                <h1 class="heading title is-1">Explore the Seasons of North Carolina</h1>
              <v-layout row wrap>
                <v-flex xs6 sm4 md3 x12 class="custom">
                    <v-card class="summer">
                        <v-card-title primary-title>
                            <h3>Summer</h3>
                            <Summer></Summer>
                        </v-card-title>
                    </v-card>
                </v-flex>
                  <v-flex xs6 sm4 md3 x12 class="custom">
                  <v-card class="fall">
                      <v-card-title primary-title>
                          <h3>Fall Oct - Nov</h3>
                      </v-card-title>
                  </v-card>
              </v-flex>
                  <v-flex xs6 sm4 md3 x12 class="custom">
                      <v-card class="winter">
                          <v-card-title primary-title>
                              <h3>Winter</h3>
                              <Winter></Winter>
                          </v-card-title>
                      </v-card>
                  </v-flex>
                  <v-flex xs6 sm4 md3 x12 class="custom">
                      <v-card class="spring">
                          <v-card-title primary-title>
                              <h3>Spring</h3>
                          </v-card-title>
                      </v-card>
                  </v-flex>
              </v-layout>
          </v-container>
        </section>
    </div>


</template>

<script>


    import Summer from "./Summer";
    import Winter from "./Winter";
    import Tourism from "./Tourism";
    export default {
  name: 'HelloWorld',
        components: {Tourism, Winter, Summer},
        data () {
    return {

      items: [
          {
              src: 'https://ak6.picdn.net/shutterstock/videos/14388466/thumb/1.jpg'
          },
          {
              src: 'https://ak3.picdn.net/shutterstock/videos/3605723/thumb/4.jpg'
          },
          {
              src: 'http://www.newwavemarching.com/wp-content/uploads/2017/11/savetreessaveearth-Global-Warming.jpg'
          },
          {
              src: 'https://ak1.picdn.net/shutterstock/videos/740161/thumb/1.jpg'
          }
      ],


    }
  },

  props:{
      activeClass: {
          type: String,
          default: 'is-active',
      },
      duration: {
          type: Number,
          default: 600,
      },
      alwaysTrack: {
          type: Boolean,
          default: false,
      },
      bezierEasingValue: {
          type: String,
          default: '.5,0,.35,1',
      },
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .display{
    margin: auto;
    width: 80%;
    height: 100%;
  }
  a {
      display: inline-block;
      padding: 20px;
      color: black;

  }
  .nav.is-fixed
  {
      z-index: 1;
      position: fixed;
      background-color: whitesmoke;
      height: 100px;
      width: 100%;
      right: 0;
      top: 0;
      margin: 0;
  }
  .nav.is-fixed .is-active
  {
      color:#00d1b2
  }
  .section{padding-top:100px}
</style>
