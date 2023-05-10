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
        p En la actualidad existen muchos editores de código que se encargan de ayudar a los programadores de aplicaciones a realizar este proceso de manera organizada y estructurada, se debe tener en cuenta que estas herramientas están con el propósito de mejorar la codificación de aplicaciones.
        br
        br

    p Es importante tener presente que actualmente existen muchas de estas herramientas que de acuerdo con las necesidades que se tengan para el desarrollo del proyecto a construir, deben ser seleccionadas por el programador. #[span.txt-c1 A continuación, se presentarán algunas de ellas:]

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Visual studio code")
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


    p Todas estas herramientas están a disposición para cualquier persona que desee incursionar en el mundo de la programación, son de descarga gratuita y poseen licencia #[strong.txt-c1 #[em “Free”]] lo que permite que se puedan usar sin necesidad de cobro de licencias; otro aspecto importante a tener en cuenta es que estas herramientas permiten la integración de la mayoría de lenguajes de programación lo cual facilita la depuración y codificación de aplicaciones informáticas en la actualidad, siendo alternativas muy utilizadas en la comunidad de programadores a nivel mundial.

    .row.align-items-start.align-items-xxl-center
      .col-xl-7.col-lg-8
        p.mb-0 #[strong.txt-c1 Es importante considerar] también que #[strong.txt-c1 estas herramientas incluyen actualizaciones continuas que agregan nuevos componentes tales como #[em plugin] y los que permiten a los desarrolladores integrar tecnologías y rutinas para mejorar la forma en cómo desarrollan las aplicaciones,] esto facilita la integración de diversos procesos en el software y es una ayuda significativa para cualquier desarrollador a nivel mundial.

        .bg-c6.d-lg-none.d-xl-block.mt-4
          .row
            .col-auto.d-xl-none.d-xxl-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px")
            .col
              p.text-white.mb-0 Una de estas herramientas que se traen a colación es #[em TABNINE] que es un #[em plugin] utilizado en diversos editores de código que trabaja con tecnología #[em Deep Learning], la cual puede predecir si se utilizará una rutina específica o código. Esto se puede hacer llevando un registro del estilo de programación que cada persona realiza y ayuda a reutilizar rutinas y a construir el código fuente de una manera mucho más sencilla y organizada.


      .col-xl-5.d-none.d-lg-block.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img2.png")

    .bg-c6.d-xl-none.mt-4
      .row
        .col-auto
          img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px")
        .col
          p.text-white.mb-0 Una de estas herramientas que se traen a colación es #[em TABNINE] que es un #[em plugin] utilizado en diversos editores de código que trabaja con tecnología #[em Deep Learning], la cual puede predecir si se utilizará una rutina específica o código. Esto se puede hacer llevando un registro del estilo de programación que cada persona realiza y ayuda a reutilizar rutinas y a construir el código fuente de una manera mucho más sencilla y organizada.

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
