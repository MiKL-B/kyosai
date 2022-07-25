<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">À propos</h1>

    <div
      class="flex flex-col flex-wrap items-center mx-auto my-10 content c-content"
      v-html="aboutContent"
    ></div>
  </div>
</template>

<script>
import axios from "axios";
/**
 * @vue-data {String} aboutContent - Page content about
 */
export default {
  name: "AboutView",
  metaInfo: {
    title: "A propos",
  },

  data() {
    return {
      aboutContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/297/"
      )
      .then((response) => {
        this.aboutContent = response.data.content;
      });
  },
};
</script>
<style>
.content p,
ul,
h2,
strong {
  text-align: left !important;
  width: 100%;
}
</style>
