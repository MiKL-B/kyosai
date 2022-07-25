<template>
  <router-link :to="burger.link" :data-cy="burger.cy"
    ><li
      class="py-3 pl-10 text-xl uppercase hover:text-white"
      :class="burger.color"
    >
      {{ burger.menu }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: "MenuBurgerLink",
  props: ["burger"],
};
</script>
