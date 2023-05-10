<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Creación y manejo de variables, estructuras de control, funciones, clases y objetos


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p En Python es fundamental el manejo de variables, teniendo en cuenta que este lenguaje de programación propone un uso muy particular de las mismas, permitiendo que una variable pueda recibir prácticamente cualquier tipo de información. Es decir, que en Python a diferencia de otros lenguajes de programación las variables, dependiendo del valor que se les asigne, así es su tipo de dato.
        br
        br
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
