<template>
  <div>
    <div class="flex flex-col my-32">
      <span class="mx-auto text-6xl">4😭4</span>
      <p class="mx-auto my-4 text-lg">
        La page que vous recherchez est introuvable.
      </p>
      <p class="mx-auto my-4 text-lg">
        Vous pouvez retourner à l'accueil pour continuer votre visite en
        cliquant sur le lien ci-dessous.
      </p>
      <router-link to="/" class="mx-auto text-2xl underline text-blue-400"> Accueil </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
