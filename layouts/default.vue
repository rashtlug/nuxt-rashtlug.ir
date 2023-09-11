<template>
    <div>
        <section>
            <Header />
        </section>
        <section>
            <slot />

        </section>

        <section>
            <Footer />
        </section>
    </div>
</template>

<script setup>
import Header from '@/components/landing/header.vue'
import Footer from '@/components/landing/footer.vue'
</script>

<style scoped>
</style>