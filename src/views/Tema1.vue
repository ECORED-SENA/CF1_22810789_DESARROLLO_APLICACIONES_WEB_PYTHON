<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es un editor de código?


    .row
      .col-lg-7
        .bg-c2.mb-4.py-3.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px").me-3
            p.mb-0 Un editor de código es una herramienta que permite realizar el proceso de creación de un archivo de código fuente donde se colocan todas las instrucciones necesarias para que un programa pueda ser ejecutado de manera correcta.


        p Los editores de código actualmente permiten la integración de diversos lenguajes de programación, lo cual facilita tanto la escritura como la modificación de código fuente, adicionalmente los editores de código por su poco uso de recursos de computadora son una gran alternativa para aquellas máquinas que no poseen una gran capacidad de cómputo para la ejecución de código fuente.

        p Existen muchos aspectos que se pueden rescatar de los editores de código, pero una de las particularidades más asombrosa que se puede tener en cuenta es la capacidad de adaptación a la estructura del código que se está escribiendo en el mismo. En pocas palabras, #[strong.txt-c1 tiene la capacidad de adaptar el estilo del código de acuerdo con el lenguaje de programación que se esté utilizando.]
      .col-lg-5
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img1.png")


    .bg-c3
      .p-md-5.p-4
        .bg-c4.py-5.px-4.mb-4
          .row.justify-content-evenly.align-items-center
            .col-auto
              figure.d-none.d-lg-block
                img(src="@/assets/curso/temas/tema1/img2.svg", style="width: 350px")
            .col-7
              .bg-c5.p-5
                p Un ejemplo de ello es la sintaxis, por ejemplo, el lenguaje Python comparado con el lenguaje C# es totalmente distinto, mientras que el lenguaje C# permite colocar utilizar llaves para abrir condicionales, ciclos y funciones, las cuales se pueden colocar en cualquier parte del código, este permite darle un estilo de tabulación adecuado a ese diseño específico, es decir adapta la tabulación del código de acuerdo con ese lenguaje. Mientras que la sintaxis de Python no permite que se coloque una línea de código debajo de alguna instrucción, para evitar esto el editor de código coloca un espacio de tabulación en el comando que se encuentra debajo de un comando #[em.txt-c1 #[strong if, else, for, while]] entre otros, para evitar que se genere un error por tabulación del código, estos aspectos hacen de un editor de código una herramienta que ayuda a organizar el código fuente de una manera sencilla y eficiente al programador y es muy valioso al momento de realizar la codificación de un programa.

        p.mb-4 Como se puede observar en la siguiente figura 1 se evidencia la manera en cómo un editor de código, en este caso visual studio, realiza el ordenamiento de la estructura del código fuente para evitar que puedan existir errores y también ayudar en el aspecto visual al usuario para identificar las líneas de código de una manera mucho más comprensible y ayude a la solución de errores o problemas que se puedan presentar en el momento de realizar la codificación del programa; este es un claro ejemplo de las ventajas que ofrecen los editores de código a los desarrolladores de software:

      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br



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
