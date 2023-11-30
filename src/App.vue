<script>
import Section1 from './components/Section1.vue'
import axios from 'axios'
import { beers } from "./components/myBeers.js"

export default {
    components: {
		Section1
	},

    data() {
        return {
            beers,
        }
    },

    mounted() {
        this.getApi();
    },

    methods: {
        getApi() {
            axios.get(this.beers.apriUrl).then(result => {
                this.beers.beersArr = result.data;
                console.log(this.beers.beersArr);
                console.log(this.beers.beersArr[0].name);
            });
        }
    }
}
</script>

<template>
  <Section1 v-for="item in beers.beersArr" :birra="item"></Section1>/>
</template>

<style scoped>

</style>
