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
            axios.get(this.beers.apriUrl).then(result => {
                console.log(result.data)
                this.beers.beersArr = result.data;
            });
        }
    }
}
</script>

<template>
    <h1>Le nostre birre Irlandesi</h1>
    <main class="container">
        <AppSearch />
        <Section1 v-for="item in beers.beersArr" :birra="item" />
    </main>
</template>

<style scoped>

</style>
