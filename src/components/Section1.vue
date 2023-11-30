<script>
    console.log("Main collegato");

export default {
	props: {
		birra: Object
	},
}

</script>

<template>
    <div>
        <p>{{ birra.name }}</p>
    </div>
</template>

<style scoped>
    p {
        padding: 1em 0;
    }
</style>
