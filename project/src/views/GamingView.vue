<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">Art Gaming</h1>
    <div
      class="flex flex-col flex-wrap items-center mx-auto my-10 c-content content"
      v-html="gamingContent"
    ></div>
  </div>
</template>

<script>
import axios from "axios";
/** * @vue-data {String} gamingContent - Page content gaming */
export default {
  name: "GamingView",
  metaInfo: {
    title: "Art Gaming",
  },

  data() {
    return {
      gamingContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/2536/"
      )
      .then((response) => {
        this.gamingContent = response.data.content;
      });
  },
};
</script>
<style>
.content p {
  text-align: left !important;
  width: 100%;
}
</style>
