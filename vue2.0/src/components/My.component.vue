
<template>
    <div>
        start
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            mg: this.message,
            name: "bingbing"
        };
    },
    template: `
	  <p> this is p </p>
	`,
    props: {
        message: [String]
    }
};
</script>

<style>
body {
    display: block;
}
</style>
