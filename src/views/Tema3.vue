<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso de instalación de Visual Studio Code

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p Como se ha abordado hasta este momento, existen diferentes editores de código, los cuales permiten realizar el proceso de codificación de las aplicaciones informáticas. Cada uno de ellos ofrece diversas ventajas y desventajas, llegando a un punto de no poder establecer cuál de todos es el mejor, sino que de forma individual cada programador elegirá aquel con el que se sienta más cómodo y terminará convirtiéndose en su editor de preferencia.
        br
        br

    p.mb-4 Sabiendo esto, se presentan los pasos a seguir para realizar la instalación de la herramienta en el computador; para este caso Visual Studio Code, el editor que se utilizará para el desarrollo temático. Por favor tener en cuenta cada paso que se deberá llevar a cabo para realizar la instalación de esta herramienta de manera correcta:

    .tarjeta.tarjeta--lila.p-4
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 1
              p Realizar la descarga de la aplicación. Lo primero que debemos hacer es dirigirnos a la página oficial para la descarga de los instaladores que utilizaremos para hacer el proceso de instalación en nuestra computadora. Ingresar al enlace <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a> como se muestra en la imagen:

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-1.png', alt="")

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 2
              p Seleccionar el sistema operativo instalado en la computadora para descargar los instaladores, este paso es importante ya que si seleccionamos el sistema operativo que no corresponde al de nuestra computadora no podremos realizar la instalación de manera correcta.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-2.png', alt="")

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 3
              p Descargar el instalador teniendo en cuenta el sistema operativo seleccionado, localiza la descarga e inicia el archivo para proceder a la instalación. Lo primero que tendrás que hacer es aceptar los términos de la licencia y completar los primeros pasos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-3.png', alt="")


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 4
              p Seleccionar las opciones de “Agregar PATH”, “Registrar code como editor de tipos de datos admitidos” y marca la opción “Crear un acceso directo en el escritorio” para que se pueda acceder a la aplicación de una manera más fácil luego de realizar la instalación de la aplicación, luego vamos al siguiente paso y seleccionamos instalar.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-4.png', alt="")


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 5
              p Una vez realizada la instalación del programa debemos poder visualizar la pantalla principal de la herramienta Visual Studio Code, por lo cual nuestro proceso de instalación habrá culminado con éxito.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema3/slide-5.png', alt="")



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
