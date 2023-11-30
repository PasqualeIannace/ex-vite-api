<script>
import Section1 from './components/Section1.vue'
import axios from 'axios'

export default {
    components: {
		Section1
	},

    mounted() {
        this.test();
    },

    methods: {
        test() {
            axios.get("https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10").then(prova => {
                console.log(prova);
            });
        }
    }
}
</script>

<template>
  <Section1 />
</template>

<style scoped>

</style>
