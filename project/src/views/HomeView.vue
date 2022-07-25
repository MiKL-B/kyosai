<template>
  <div id="main">
    <header>
      <!--presentation asso-->
      <h1
        class="mb-10 text-4xl font-black text-gray-900 lg:text-5xl lg:max-w-6xl"
      >
        Association sur la pop-culture, le papercraft, le dessin et autres
        activités manuelles.
        <br />
        <span class="text-blue-400">Bonne humeur incluse !</span>
      </h1>

      <p class="mb-10 text-2xl font-bold text-justify lg:text-3xl">
        L'association Kyosai est une association de loi 1901 qui base son
        activité sur la promotion de la pop-culture, qu'elle soit franco-belge,
        américaine ou japonaise. Cette association propose à ses membres de
        réaliser du papercraft, des illustrations, du cosplay et d'autres
        activités manuelle et digitale.
      </p>
    </header>

    <!--section articles-->
    <section class="flex flex-wrap justify-around">
      <GridImage
        v-for="section in sections"
        :key="section.title"
        :section="section"
        class="mb-8"
      />
    </section>
  </div>
</template>

<script>
import GridImage from "../components/GridImage.vue";
import papercraft from "../assets/papercraft.webp";
import dessin from "../assets/dessin.webp";
import cosplay from "../assets/cosplay.webp";
import artgaming from "../assets/artgaming.webp";
export default {
  components: { GridImage },
  name: "HomeView",
  metaInfo: {
    title: "Association Kyosai",
  },

  data() {
    return {
      sections: [
        {
          title: "papercraft",
          imageUrl: papercraft,
          link: "/papercraft",
          subtitle: "Atelier de papercraft",
          color: "bg-pink-400",
          alt: "Atelier de papercraft",
        },
        {
          title: "dessin",
          imageUrl: dessin,
          link: "/dessin",
          subtitle: "Atelier de dessin",
          color: "bg-blue-400",
          alt: "Atelier de dessin",
        },
        {
          title: "cosplay",
          imageUrl: cosplay,
          link: "/cosplay",
          subtitle: "Atelier de cosplay",
          color: "bg-green-300",
          alt: "Atelier de cosplay",
        },
        {
          title: "art gaming",
          imageUrl: artgaming,
          link: "/gaming",
          subtitle: "Atelier d'art gaming",
          color: "bg-yellow-200",
          alt: "Atelier de d'art gaming",
        },
      ],
    };
  },
};
</script>
