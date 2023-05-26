<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo y control de versiones

    p.mb-4 Para el manejo y control de versiones que se realizan a los proyectos es importante tener en cuenta que existen muchas herramientas en el mercado que se pueden utilizar para llevar a cabo este proceso.

    .bg-c10.mb-5
      .px-5
        .row.align-items-center
          .col-lg-7
            p.mb-4 Para este caso en particular de este componente formativo, se ha establecido trabajar con dos herramientas que son líderes a nivel mundial  #[strong.txt-c1 (Git y Visual Studio Code)] para realizar este proceso, por lo cual se abordará la manera en cómo estas son usadas y su importancia en los proyectos de #[em software]:

            .bg-c9
              p.mb-4 #[strong Git:] es un programa que permite controlar las versiones que se trabajan en un #[em software]. Esto contribuye en el mejoramiento y desempeño de las aplicaciones, lo que permite realizar una actualización de los archivos de código fuente que se trabajan en el proyecto de #[em software]. También permite llevar un control detallado de todos los sucesos que ocurren al interior del código y así poder realizar cambios y que estos queden registrados para un mayor control. Esto ayuda a que se controle quién y cuándo se realiza un cambio en el código fuente de la aplicación.

              p
                strong Con Git es importante que se tenga en cuenta que esta herramienta tiene un entorno gráfico para realizar la administración de los procesos que se llevan a cabo con ella; entonces, lo primero que se hará es realizar su instalación. Se deja un video en el material complementario denominado  #[span.txt-c1 “Instalación de Git en Windows paso a paso”] para que se pueda observar el proceso de instalación de la herramienta Git.


          .col-lg-5
            figure
              img(src="@/assets/curso/temas/tema5/img1.png", alt="")


        .bg-c6.my-4
          .row
            .col-auto.d-none.d-md-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
            .col
              h4.text-white Nota:
              p.text-white.mb-0 en el video del material complementario se explica de manera detallada cómo realizar la instalación de la herramienta Git. Cuando se le pregunte el editor de código que se integrará, en ese paso se debe seleccionar la opción que dice #[code.etiqueta “Visual Studio Code”] para que el editor de código quede conectado con la herramienta #[code.etiqueta Git]. También se puede ver que existe una versión de Git llamada GUI, la cual permite crear los repositorios de una manera mucho más cómoda, ya que tiene una interfaz gráfica muy sencilla de operar.

        .cajon-b.p-3.mb-4
          .row.align-items-center.justify-content-center
            .col-lg.col-sm-12
              p.mb-0 A continuación, se explica cómo crear un repositorio utilizando la herramienta  #[code.etiqueta Git] y luego cómo integrarlo a #[code.etiqueta Visual Studio Code]; es importante estar atentos a los pasos, para lograr realizar el proceso de manera correcta:
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema1/img3.svg", style="width: 75px", alt="").m-auto


        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/m01LAOzOiKA" title="Pasos para crear un repositorio y su integración con Visual Studio Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Pasos para crear un repositorio y su integración con Visual Studio Code.


        .bg-c6.my-4
          .row
            .col-auto.d-none.d-md-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
            .col
              h4.text-white Nota:
              p.text-white.mb-0 Para mayor comprensión, es importante tener en cuenta que #[code.etiqueta Git] y #[code.etiqueta GitHub] son dos entidades diferentes que ayudan a administrar y alojar archivos. En otras palabras, Git sirve para controlar las versiones de los archivos gestionando el código fuente, mientras que GitHub es una plataforma para alojar o descargar repositorios Git.

    .row.align-items-center
      .col-lg-7
        p.mb-4 Como conclusión, se ha trabajado con los repositorios de códigos, los cuales permiten llevar un control de los cambios realizados en el código fuente y adicional a ello tener una copia en la nube para darle mejor seguridad a los archivos de código fuente de la aplicación.

        .bg-c11
          p.mb-0 Es importante tener en cuenta que este tipo de aplicaciones son muy utilizadas en las empresas y equipos de desarrollo a nivel mundial ya que proponen un nivel de seguridad alto para el código, seguimiento y la colaboración.

      .col-lg-5
        img(src="@/assets/curso/temas/tema5/img2.svg", alt="")

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
