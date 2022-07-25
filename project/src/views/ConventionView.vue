<template>
  <div>
    <h1 class="text-4xl text-center text-blue-400">Convention</h1>
    <span
      class="flex flex-col mx-auto my-10 c-content"
      v-html="conventionContent"
    ></span>
  </div>
</template>

<script>
import axios from "axios";
/**
 * @vue-data {String} conventionContent - Page content convention
 */
export default {
  name: "ConventionView",
  metaInfo: {
    title: "Convention",
  },

  data() {
    return {
      conventionContent: "",
    };
  },

  created() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/assokyosai.wordpress.com/posts/267/"
      )
      .then((response) => {
        this.conventionContent = response.data.content;
      });
  },
};
</script>
