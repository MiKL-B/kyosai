<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">Papercraft</h1>
    <div
      class="flex flex-col flex-wrap items-center my-10 text-left content"
      v-html="papercraftContent"
    ></div>
  </div>
</template>

<script>
import axios from "axios";

/** * @vue-data {String} papercraftContent - Page content papercraft */
export default {
  name: "PapercraftView",
  metaInfo: {
    title: "Papercraft",
  },

  data() {
    return {
      papercraftContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/257/"
      )
      .then((response) => {
        this.papercraftContent = response.data.content;
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
