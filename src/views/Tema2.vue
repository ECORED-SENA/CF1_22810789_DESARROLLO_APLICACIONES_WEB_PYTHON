<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diferentes editores de código

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p En la actualidad existen muchos editores de código que se encargan de ayudar a los programadores de aplicaciones a realizar este proceso de manera organizada y estructurada. Se debe tener en cuenta que estas herramientas están con el propósito de mejorar la codificación de aplicaciones.
        br
        br

    p También, es importante conocer que muchas de estas herramientas deben ser seleccionadas por el programador, de acuerdo con las necesidades que se tengan para el desarrollo del proyecto a construir. #[span.txt-c1 A continuación, se presentarán algunas de ellas: ]

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Visual Studio Code")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y #[em Web].

          p.mb-4 Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.


          p.mb-4 Este editor de código permite la integración de diferentes lenguajes de programación y realiza la codificación de cada uno de ellos, teniendo en cuenta su sintaxis y estructura. Actualmente, es una de las herramientas más utilizadas en el mercado para la codificación de aplicaciones informáticas con preferencia a la programación #[em web].


        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_1.svg', alt='Visual Studio Code', style= "width: 263px")


      .row(titulo="SublimeText")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es un editor de texto y editor de código fuente. Está escrito en C++ y Python para los #[em plugin]. Desarrollado originalmente como una extensión de Vim, que con el tiempo fue creando una identidad propia.


          p.mb-4 Aún conserva un modo de edición tipo vi llamado #[em Vintage mode], el cual es muy utilizado por su gran compatibilidad con los diferentes lenguajes de programación actuales en el mercado y por tener un gran rendimiento sin utilizar gran cantidad de recursos de la máquina tales como memoria RAM y procesador.


        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_2.svg', alt='SublimeText', style= "width: 263px")

      .row(titulo="NotePad++")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es un editor de texto y de código fuente libre con soporte para varios lenguajes de programación y soporte nativo para Microsoft Windows.

          p.mb-4 Se parece al #[em Bloc] de notas en cuanto al hecho de que puede editar texto sin formato y de forma simple. Adicional a ello, se destaca por su versatilidad al momento de realizar la codificación, ya que permite, por su simple entorno gráfico, encontrar los problemas presentados en el código fuente de la aplicación, lo que a su vez hace que los desarrolladores inviertan menos tiempo en encontrar las fallas que se puedan presentar en el código.


        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_3.svg', alt='NotePad++', style= "width: 263px")

      .row(titulo="Google Colab")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Es una herramienta de Google que le permite a cualquier persona escribir código fuente en el lenguaje Python utilizando solamente un navegador de Internet y por supuesto conectividad. No requiere instalar componentes adicionales en la computadora para ser utilizada.


          p.mb-4 Esta herramienta ha recibido tanto comentarios positivos y otros negativos por parte de la comunidad de desarrolladores. Se puede decir que la herramienta es una muy buena opción para aquellas personas que desean aprender este lenguaje de programación. Sin embargo, se queda corto en algunos aspectos de integración de ciertas rutinas y manejo de procesos al momento de desarrollar.

        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/ac_4.svg', alt='Google Colab', style= "width: 263px")


    p Todas estas herramientas están a disposición para cualquier persona que desee incursionar en el mundo de la programación, son de descarga gratuita y poseen licencia #[em “Free”] (es decir, se pueden usar sin tener que pagar). Estas herramientas también permiten la integración de la mayoría de lenguajes de programación, lo que facilita la depuración y codificación de aplicaciones informáticas en la actualidad; por lo tanto, son alternativas muy utilizadas en la comunidad de programadores a nivel mundial.

    .row.align-items-start.align-items-xxl-center
      .col-xl-7.col-lg-8
        p.mb-0 Sumado a lo anterior, estas herramientas incluyen actualizaciones continuas en las que se agregan nuevos componentes tales como #[em plugins]. Esto le permite a los desarrolladores integrar tecnologías y rutinas para mejorar la forma en cómo desarrollan las aplicaciones.

        .bg-c6.d-none.d-xl-block.mt-4
          .row
            .col-auto.d-xl-none.d-xxl-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
            .col
              p.text-white.mb-0 Una de estas herramientas que se traen a colación es TABNINE. Es un plugin utilizado en diversos editores de código que trabaja con tecnología #[em Deep Learning], la cual puede predecir si se utilizará una rutina específica o código. Esto sucede al llevar un registro del estilo de programación de cada persona y luego la herramienta ayuda a reutilizar dichas rutinas y a construir el código fuente de una manera mucho más sencilla y organizada.


      .col-xl-5.d-none.d-lg-block.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img2.png", alt="")

    .bg-c6.d-xl-none.mt-4
      .row
        .col-auto
          img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
        .col
          p.text-white.mb-0 Una de estas herramientas que se traen a colación es TABNINE. Es un plugin utilizado en diversos editores de código que trabaja con tecnología #[em Deep Learning], la cual puede predecir si se utilizará una rutina específica o código. Esto sucede al llevar un registro del estilo de programación de cada persona y luego la herramienta ayuda a reutilizar dichas rutinas y a construir el código fuente de una manera mucho más sencilla y organizada.

</template>

<script>
export default {
  name: 'Tema2',
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
