<script>
import Section1 from './components/Section1.vue'
import AppSearch from './components/AppSearch.vue'

import axios from 'axios'
import { beers } from "./components/myBeers.js"

export default {
    components: {
		Section1,
        AppSearch
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
            let indirizzo = this.beers.apriUrl;

            console.log("La mia stringa", this.beers.selectedString);

            if(this.beers.selectedString == "") {

                axios.get(indirizzo).then(result => {
                console.log(result.data)
                this.beers.beersArr = result.data;
                });

            } else {
            // https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10
            indirizzo += this.beers.selectedString;
            console.log(indirizzo);

            axios.get(indirizzo).then(r => {
                console.log(r.data);
                this.beers.beersArr = r.data;
            });

            }

        }
    }
}
</script>

<template>
    <h1>Le nostre birre Irlandesi</h1>
    <main class="container">
        <AppSearch @search="getApi" />
        <Section1 v-for="item in beers.beersArr" :birra="item" />
    </main>
</template>

<style scoped>

</style>
