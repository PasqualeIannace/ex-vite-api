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
                console.log(this.beers.beersArr[0]);
            });
        }
    }
}
</script>

<template>
    <h1>Le nostre birre Irlandesi</h1>
    <div class="container">
        <Section1 v-for="item in beers.beersArr" :birra="item" />
    </div>
</template>

<style scoped>

</style>
