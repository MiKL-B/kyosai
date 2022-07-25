<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">Cosplay</h1>
    <span
      class="flex flex-col flex-wrap items-center mx-auto my-10"
      v-html="cosplayContent"
    ></span>
  </div>
</template>

<script>
import axios from "axios";
/** * @vue-data {String} cosplayContent - Page content cosplay */
export default {
  name: "CosplayView",
  metaInfo: {
    title: "Cosplay",
  },

  data() {
    return {
      cosplayContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/2187/"
      )
      .then((response) => {
        this.cosplayContent = response.data.content;
      });
  },
};
</script>
