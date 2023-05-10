<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Creación y manejo de variables, estructuras de control, funciones, clases y objetos

    .bg-c15.mb-5
      .px-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            p En Python es fundamental el manejo de variables, teniendo en cuenta que este lenguaje de programación propone un uso muy particular de las mismas, permitiendo que una variable pueda recibir prácticamente cualquier tipo de información. Es decir, que en Python a diferencia de otros lenguajes de programación las variables, dependiendo del valor que se les asigne, así es su tipo de dato.
            br
            br

        p.mb-5.txt-c1 #[strong A continuación se ve un ejemplo de ello (ver figura 3):]


        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 3. #[span Ejemplos de sintaxis de las variables]
            figure
              img(src="@/assets/curso/temas/tema7/img2.png")
              figcaption Nota. Pantalla en Visual Studio Code.

        .row.justify-content-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema7/img3.svg", style= "width: 85px")
          .col-lg
            p.mb-0 Como se puede observar en la figura las variables (a, b, c y d) tienen asignados diferentes tipos de datos y con la utilización de la función type permite saber qué tipo de variable es. En otros lenguajes de programación es necesario declarar el tipo de dato que soportará la variable, pero en el caso de Python una misma variable puede cambiar de tipo de dato sin tener ningún inconveniente.

        .row.justify-content-center.mb-5
          .col-lg-5.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema7/img4.png")
          .col-lg-7
            .bg-c16.p-3.px-4.mb-4
              p.mb-0 Esto refleja lo poderoso y versátil que es el lenguaje Python, en este caso particular se ha utilizado la misma variable para almacenar diferentes tipos de datos. Esta particularidad genera una ventaja al momento de realizar la codificación de un software puesto que se pueden reutilizar variables y por supuesto hacer un uso mucho más eficiente de la memoria RAM del equipo.

            p A continuación, se pueden ver los conceptos que junto al manejo de variables forman parte del entorno de trabajo Python, #[strong.txt-c1 a continuación se ven las estructuras de control, funciones, clases y objetos, conceptos claves para desarrollar en lenguaje de programación Python:]


    h4.mb-5 #[span.btn-subtitulo Estructuras de control]

    .row
      .col-lg-7

        p.mb-4 Para comenzar, en los lenguajes de programación, las estructuras de control permiten modificar el flujo de ejecución de las instrucciones de un programa.

        p.mb-4 Las estructuras de control permiten, a través de que se cumpla alguna condición, realizar la ejecución de una secuencia de código.

        .bg-c2.mb-4.py-3.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px").me-3
            p.mb-0 En la programación son muy importantes, así como las funciones, las clases y objetos, porque como bien se sabe los programas de computadora deben decidir de acuerdo con la información que se le suministra al sistema, realizar validaciones de acuerdo con las necesidades que este tenga que realizar y luego entregar al usuario los resultados esperados.

      .col-lg-5
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema7/img5.png")


    p.mb-5.txt-c1 #[strong A continuación se pueden ver todos estos conceptos relacionados:]

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Estructuras de control simple")
        .col-lg.mb-4.mb-md-0
          p.mb-4 #[em Visual Studio Code] es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web.

          p.mb-4 Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.

          p.mb-4 Este editor de código permite la integración de diferentes lenguajes de programación y realizar la codificación de cada uno de ellos teniendo en cuenta la sintaxis y estructura que cada uno de ellos maneja, es importante destacar que es una de las herramientas más utilizadas actualmente en el mercado para la codificación de aplicaciones informáticas con preferencia a la programación web.

        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_1.svg', alt='Visual studio code', style= "width: 263px")


      .row(titulo="SublimeText")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es un editor de texto y editor de código fuente. Está escrito en C++ y Python para los #[em plugin]. Desarrollado originalmente como una extensión de Vim, que con el tiempo fue creando una identidad propia.

          p.mb-4 Aún conserva un modo de edición tipo #[em vi] llamado #[em Vintage mode], este editor de código es muy utilizado por su gran compatibilidad con los diferentes lenguajes de programación actuales en el mercado y por tener un gran rendimiento sin utilizar gran cantidad de recursos de la máquina tales como memoria RAM y procesador.

        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_2.svg', alt='SublimeText', style= "width: 263px")

      .row(titulo="NotePad++")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es un editor de texto y de código fuente libre con soporte para varios lenguajes de programación. Con soporte nativo para Microsoft Windows.


          p.mb-4 Se parece al Bloc de notas en cuanto al hecho de que puede editar texto sin formato y de forma simple, adicionalmente es importante destacar su versatilidad al momento de realizar la codificación ya que permite por su simple entorno gráfico encontrar los problemas presentados en el código fuente de la aplicación y esto permite que los desarrolladores inviertan menos tiempo en encontrar las fallas que se puedan presentar en el código.

        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_3.svg', alt='SublimeText', style= "width: 263px")

      .row(titulo="Google Colab")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es una herramienta de Google permite a cualquier persona escribir código fuente en el lenguaje Python utilizando solamente un navegador de internet y por supuesto conectividad.


          p.mb-4 Esta herramienta ha recibido tanto comentarios positivos y otros negativos por parte de la comunidad de desarrolladores puesto que podemos decir que la herramienta es una muy buena opción para aquellas personas que desean aprender este lenguaje de programación pero se queda corto en algunos aspectos de integración de algunas rutinas y manejo de ciertos procesos al momento de desarrollar pero no podemos destacar su facilidad de uso y sobre todo que es online y no requiere instalar ningún componente en la computadora para ser utilizada.

        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_4.svg', alt='SublimeText', style= "width: 263px")

    p.mb-4 A continuación, se puede mostrar a través del siguiente video, una ejemplificación de lo visto hasta este momento, empezando a aplicar dentro de un entorno de desarrollo, esto se seguirá desarrollando con mayor profundidad conforme se siga avanzando en el proceso formativo; pero a través de este video ya se podrá ir familiarizando con los conceptos y uso del aplicativo (Visual Studio Code) seleccionado:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Título del video.

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
