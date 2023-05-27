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
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px", alt="").me-3
            p.mb-0 Un editor de código es una herramienta que permite realizar el proceso de creación de un archivo de código fuente donde se colocan todas las instrucciones necesarias para que un programa pueda ser ejecutado de manera correcta.


        p Los editores de código actualmente permiten la integración de diversos lenguajes de programación, lo cual facilita tanto la escritura como la modificación de código fuente. Adicionalmente, los editores de código por su poco uso de recursos de computadora son una gran alternativa para aquellas máquinas que no poseen una gran capacidad de cómputo para la ejecución de código fuente.

        p Existen muchos aspectos que se pueden rescatar de los editores de código, pero una de las particularidades más asombrosa que se puede tener en cuenta es la capacidad de adaptación a la estructura del código que se está escribiendo en el mismo. En pocas palabras, #[strong.txt-c1 tiene la capacidad de adaptar el estilo del código de acuerdo con el lenguaje de programación que se esté utilizando.]
      .col-lg-5
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img1.png", alt="")


    .bg-c3
      .p-2.p-lg-5
        .bg-c4.py-4.px-5.mb-4
          .row.justify-content-xl-evenly.justify-content-lg-between.align-items-start.align-items-xl-center
            .col-xxl-4.col-xl-5.col-lg-5.d-none.d-lg-block
              .py-4.ps-xl-3.pe-xl-4.ps-lg-2.pe-lg-3
                figure.d-none.d-lg-block.position-relative
                  img(src="@/assets/curso/temas/tema1/img2.svg", style="width: 350px", alt="").d-lg-none
                  img(src="@/assets/curso/temas/tema1/img2d.svg", style="width: 350px", alt="").d-lg-block.d-xl-none
                  img(src="@/assets/curso/temas/tema1/img2b.svg", style="width: 350px", alt="").d-none.d-xl-block.mt-3
                  img.img-animada(src="@/assets/curso/temas/tema1/img2c.svg", style="width: 316px", alt="").d-none.d-lg-block

            .col-xxl-8.col-xl-7.col-lg-7
              .bg-c5
                .bg-c5-body
                  p Un ejemplo de ello es la sintaxis, por ejemplo, el lenguaje Python comparado con el lenguaje C# es totalmente distinto. En el lenguaje C# se puede utilizar llaves para abrir condicionales, ciclos y funciones, las cuales se pueden colocar en cualquier parte del código para darle un estilo de tabulación adecuado a ese diseño específico; es decir, adapta la tabulación del código de acuerdo con ese lenguaje. La sintaxis de Python, por su parte, no permite que se coloque una línea de código debajo de alguna instrucción; para evitar esto, el editor de código coloca un espacio de tabulación en el comando que se encuentra debajo de un comando #[em.txt-c1 #[strong if, else, for, while]] entre otros, con el fin de no generar un error por tabulación del código. Estos aspectos hacen de un editor de código una herramienta que ayuda a organizar el código fuente de manera sencilla y eficiente al programador y es muy valioso al momento de realizar la codificación de un programa.

        .cajon-b.p-3.mb-4
          .row.align-items-center.justify-content-center
            .col-lg.col-sm-12
              p.mb-0 En la siguiente figura se evidencia la manera en cómo un editor de código, en este caso Visual Studio Code, realiza el ordenamiento de la estructura del código fuente para evitar que puedan existir errores y también ayudar en el aspecto visual al usuario para identificar las líneas de código de una manera mucho más comprensible, contribuyendo, además, a la solución de errores o problemas que se puedan presentar en el momento de realizar la codificación del programa; este es un claro ejemplo de las ventajas que ofrecen los editores de código a los desarrolladores de #[em software].
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema1/img3.svg", style="width: 75px", alt="")


        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1. <br>#[span Estructura de código fuente en Python]
            figure.figura
              img(src="@/assets/curso/temas/tema1/img4.png", alt="La imagen muestra la estructura del código fuente, que consiste en una serie de instrucciones escritas en Python. La estructura se divide en tres partes: el código fuente original, la estructura en Python del programa y el resultado obtenido al ejecutar el programa.")
              figcaption Nota. Pantalla en Visual Studio Code.

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
