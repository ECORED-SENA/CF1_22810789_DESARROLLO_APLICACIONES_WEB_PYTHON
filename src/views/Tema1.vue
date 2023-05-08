<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es un editor de código?
      
    p Un editor de código es una herramienta que permite realizar el proceso de creación de un archivo de código fuente donde se colocan todas las instrucciones necesarias para que un programa pueda ser ejecutado de manera correcta.

    p Los editores de código actualmente permiten la integración de diversos lenguajes de programación, lo cual facilita tanto la escritura como la modificación de código fuente, adicionalmente los editores de código por su poco uso de recursos de computadora son una gran alternativa para aquellas máquinas que no poseen una gran capacidad de cómputo para la ejecución de código fuente.

    p Existen muchos aspectos que se pueden rescatar de los editores de código, pero una de las particularidades más asombrosa que se puede tener en cuenta es la capacidad de adaptación a la estructura del código que se está escribiendo en el mismo. En pocas palabras, tiene la capacidad de adaptar el estilo del código de acuerdo con el lenguaje de programación que se esté utilizando.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
