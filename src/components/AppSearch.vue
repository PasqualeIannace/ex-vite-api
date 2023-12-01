<script>
import { beers } from "./myBeers.js"

export default {
    data() {
        return {
            beers
        }
    },

    methods: {
        search() {
            console.log("Sei nel search");
            this.$emit("search");
        }
    },

    mounted() {
        console.log("App search collegata!");
    }
}
</script>

<template>

    <div>Filtra per birreria: {{ beers.selectedString }}</div>

    <select v-model="beers.selectedString">
        <option disabled value="">Scegli qui</option>
        <option value="&by_type=brewpub">BrewPub</option>
        <option>Micro</option>
        <option>C</option>
    </select>
    <button @click="search">Filtra</button>

</template>

<style scoped>

</style>