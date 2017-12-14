<template>
    <img class="inline v-middle" @click="emit" width="24" src="../../../../assets/svg/back.svg">
</template>

<script>
export default {
    methods: {
        emit: function() {
            this.$emit("clickhandle");
        }
    }
};
</script>

<style scoped>

</style>
