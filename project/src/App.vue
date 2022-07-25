<template>
  <div id="app">
    <header class="container flex mx-auto">
      <!-- LOGO -->
      <router-link
        to="/"
        class="flex flex-col items-start p-4 -ml-4 sm:flex-row sm:items-center"
      >
        <img
          class="mx-4 mr-4 h-28 sm:h-32 md:h-40"
          src="./assets/logo.webp"
          alt="Logo Kyosai"
        />
        <span
          class="mx-4 text-2xl font-black text-red-400 uppercase font-papyrus"
          >Kyosai</span
        >
      </router-link>

      <Slide :closeOnNavigation="true" right>
        <ul class="text-gray-400 flex flex-col">
          <!-- COMPONENT BURGER -->
          <MenuBurgerLink
            v-for="burger in burgers"
            :key="burger.menu"
            :burger="burger"
          /></ul
      ></Slide>
    </header>
    <div class="container relative p-4 mx-auto text-gray-600">
      <router-view />
    </div>

    <footer class="w-full bg-gray-100">
      <div id="footer" class="container py-4 mx-auto">
        <section id="logo-footer" class="mx-auto">
          <img src="./assets/logo.webp" alt="Logo Kyosai" />
        </section>
        <section id="contact" class="m-4">
          <h2
            class="mb-10 text-xl font-bold tracking-widest text-center uppercase sm:text-2xl"
          >
            Restons en contact
          </h2>
          <p class="w-60 xl:w-96">
            Si vous souhaitez passer commande, contactez-nous par mail à
            l'adresse suivante:
          </p>
          <!--SUBMIT-->

          <span class="mx-auto text-2xl underline text-blue-400">
            kyosai.asso@gmail.com</span
          >
        </section>
        <!-- follow -->
        <section id="follow" class="m-4 sm:mx-auto">
          <h2
            class="mb-10 text-xl font-bold tracking-widest text-center uppercase sm:text-2xl"
          >
            Nous suivre
          </h2>

          <ul>
            <li
              class="mr-5 my-2 text-2xl text-gray-600"
              v-for="link in links"
              :key="link.url"
            >
              <a
                :href="link.url"
                class="rounded-lg hover:border-pink-400 hover:text-pink-400"
                ><i :class="[link.icone]" aria-hidden="true"></i>
                {{ link.text }}</a
              >
            </li>
          </ul>
          <!-- COPYRIGHT -->
          <router-link
            class="flex my-20 text-xl font-bold underline"
            to="/mentions"
            >Mentions légales</router-link
          >
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
import MenuBurgerLink from "@/components/MenuBurgerLink.vue";
import { Slide } from "vue-burger-menu";

/**
 * @vue-data {String} role - User role
 * @vue-data {String} name - User name
 * @vue-data {String} email - User email
 * @vue-data {String} message - User message
 * @vue-data {String} titre - Navigation menu title
 * @vue-data {Array} links - Social media link
 * @vue-data {Array} burgers - Page titles
 * @vue-data {Boolean} showSidenav - Navigation menu
 */
export default {
  components: { MenuBurgerLink, Slide },

  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "Association sur la pop-culture, le papercraft, le dessin et autres activités manuelles. L'association Kyosai est une association de loi 1901 qui base son activité sur la promotion de la pop-culture, qu'elle soit franco-belge, américaine ou japonaise. Cette association propose à ses membres de réaliser du papercraft, des illustrations, du cosplay et d'autres activités manuelle et digitale.",
      },
    ],
  },

  data() {
    return {
      links: [
        {
          text: "facebook",
          url: "https://www.facebook.com/kyosai.asso",
          icone: "fa-brands fa-facebook-square",
        },
        {
          text: "instagram",
          url: "https://www.instagram.com/asso_kyosai/?fbclid=IwAR1IxNP1jUFVc7XRr0R-Adpen4RHWzgB1Yia9MIPNu5a0o5YW6RjLwvJ0zY",
          icone: "fa-brands fa-instagram-square",
        },
        {
          text: "twitter",
          url: "https://twitter.com/AssoKyosai",
          icone: "fa-brands fa-twitter-square",
        },
      ],
      burgers: [
        {
          link: "/",
          menu: "Accueil",
        },
        {
          link: "/papercraft",
          menu: "Papercraft",
          color: "text-pink-400",
        },
        {
          link: "/dessin",
          menu: "Dessin",
          color: "text-blue-400",
        },
        {
          link: "/cosplay",
          menu: "Cosplay",
          color: "text-green-400",
        },
        {
          link: "/gaming",
          menu: "Art Gaming",
          color: "text-yellow-400",
        },
        {
          link: "/convention",
          menu: "Convention",
        },

        {
          link: "/about",
          menu: "About",
        },
      ],
    };
  },
};
</script>

<style>

@font-face {
  font-family: "Source Sans Pro";
  src: url("./assets/Source_Sans_Pro/SourceSansPro-Regular.ttf");

  font-weight: normal;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("./assets/Source_Sans_Pro/SourceSansPro-Bold.ttf");
  font-weight: bold;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("./assets/Source_Sans_Pro/SourceSansPro-Black.ttf");
  font-weight: 900;
}
@font-face {
  font-family: "Papyrus";
  src: url("./assets/Papyrus/Papyrus.ttf");
  font-weight: normal;
}
.font-papyrus {
  font-family: "Papyrus";
}
body {
  font-family: "Source Sans Pro";
}
#app {
  background-image: url("./assets/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

h2 {
  transition: 0.5s;
}
article h2 {
  text-shadow: 0px 0px 5px black;
}
article:hover h2 {
  transform: translateY(-20px);
}

article p {
  text-shadow: 0px 0px 5px black;
}
article:hover p {
  transform: translateY(-20px);
}
/*DISPLAY IMAGE POSTS */
/*impossible à supprimer */

.gallery-row {
  display: flex;
  flex-wrap: wrap;
}
.gallery-row,
.gallery-group {
  width: unset !important;
  height: unset !important;
  margin: 0 auto;
}
/* pas plus de 2 chemins  */
.c-content a {
  color: #60a5fa;
  font-weight: bold;
}

/*MENU BURGER STYLE */
.bm-burger-button {
  position: fixed;
  z-index: 10;
}

/* footer */
#footer {
  display: grid;
  grid-template-columns: 1fr;
}
@media screen and (min-width: 768px) {
  #footer {
    display: flex;
    justify-content: space-around;
  }
  #logo-footer {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  #logo-footer {
    display: block;
  }
}
</style>
