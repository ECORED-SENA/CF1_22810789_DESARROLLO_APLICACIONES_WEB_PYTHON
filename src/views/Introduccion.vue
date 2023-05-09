<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-c1.mb-4.px-5.py-3
      .row.align-items-center
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/temas/intro/img1.svg", style="max-width: 193px")
        .col
          p Bienvenidos a este componente formativo en el cual se abordarán temáticas de suma importancia para el desarrollo de nuestro programa, sus contenidos están orientados a sumergirnos en un mar de conocimiento y aprendizaje sobre los conceptos y conocimientos de instalación y puesta en marcha de un entorno de trabajo en el lenguaje de programación Python. #[strong.txt-c1 Se invita a ver el siguiente video:]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Título del video.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
