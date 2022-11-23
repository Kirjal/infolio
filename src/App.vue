<template>
  <Navigation/>
  <router-view></router-view>
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
:root{
  --main-bg-color:  #233;
  --main-text-color:  #eff;
  --transp-main-text-color: #eff0;
  --link-bg-color: #cdd;
  --link-bg-hover: #eff;
  --link-text-color: #233;
  --link-text-hover: #233;
  --warning-color: #fd5;
  --title-color: #344;
  --title-bg: #eff;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--main-text-color);
}

#app {
  font-family: "Century Gothic", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--main-bg-color);
}

body{
  background-color: var(--main-bg-color);
}

ul{
  list-style: none;
}

a{
  display: inline-block;
  text-align: center;
  line-height:100%;
  padding:5px 10px;
  border-radius:500px;
  color: var(--link-text-color);
  background-color: var(--link-bg-color);
  transition: all 0.3s;
  font-weight: bold;
  text-decoration: none;
}
a:hover{
  color: var(--link-text-hover);
  background-color: var(--link-bg-hover);
}
</style>
