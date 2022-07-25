<template>
  <article
    class="relative transition duration-500 transform h-72 w-72 2xl:h-80 2xl:w-80 hover:scale-110 group"
  >
    <div class="inline">
      <img
        class="object-cover h-full mx-auto rounded-lg"
        :src="section.imageUrl"
        :alt="section.alt"
      />
    </div>

    <router-link
      class="absolute inset-0 flex flex-col items-center justify-center transition duration-500 rounded-lg opacity-90 hover:bg-transparent"
      :to="section.link"
      :class="[section.color]"
    >
      <h2
        class="z-30 mt-8 text-2xl font-bold tracking-widest text-white uppercase title-section"
      >
        {{ section.title }}
      </h2>
      <p
        class="z-10 mt-2 text-lg text-white transition duration-500 opacity-0 group-hover:opacity-100"
      >
        {{ section.subtitle }}
      </p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "GridImage",
  props: ["section"],
};
</script>
<style>
.title-section {
  text-align: center !important;
}
</style>
