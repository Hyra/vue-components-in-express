<template>
    <div class="cruel">
        Cruels
        <span>{{ who }}</span>
    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            who: "World"
        }
    },
    mounted () {
        setTimeout(() => {
            console.log('We can use ES6 too!')
        }, 1000)
    }
}
</script>

<style scoped lang="scss">
.cruel {
    color: green;
    span {
        color: orange;
    }
}
</style>