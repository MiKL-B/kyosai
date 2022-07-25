<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">Dessin</h1>
    <div
      class="flex flex-col flex-wrap items-center mx-auto my-10"
      v-html="dessinContent"
    ></div>
  </div>
</template>

<script>
import axios from "axios";
/** * @vue-data {String} dessinContent - Page content drawings */
export default {
  name: "DrawView",
  metaInfo: {
    title: "Dessin",
  },

  data() {
    return {
      dessinContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/327"
      )
      .then((response) => {
        this.dessinContent = response.data.content;
      });
  },
};
</script>
