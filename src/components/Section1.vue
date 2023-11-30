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
        {{ birra.name }}
    </div>
</template>

<style scoped>

</style>
