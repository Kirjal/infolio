<template>
  <Navigation/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
/*import axios from 'axios';*/
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation },
  /*data:()=>({
    images: undefined,
    api: "kirjale523.mysql.db"
  }),
  methods: {
    getImages(){
      this.error = '';
      axios.get(`${this.api}`, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8080/'
        }
      })
        .then(({data}) => this.images = data, console.log(this.images))
        .catch(err => {
          this.images = undefined;
          this.error = `${err.response.status} : ${err.message}`
        })
    },
  },
  mounted(){
    this.getImages();
  }*/
}
</script>

<style>
@import url("https://use.typekit.net/zhc2dwp.css");

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Century Gothic", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul{
  list-style: none;
}
</style>
