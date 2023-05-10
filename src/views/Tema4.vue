<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Preparar entorno de desarrollo virtual


    p.mb-4 A continuación, se ven los pasos a seguir para la configuración de un entorno virtual de desarrollo, es importante tener en cuenta cada uno de los mismos, los cuales se deben seguir para realizar este proceso de manera correcta. Se debe comenzar con una exploración de qué es un entorno de desarrollo virtual.


    .bg-c7.mb-4
      .row.justify-content-center
        .col-lg-11
          .row.mb-2.mb--4.align-items-center
            .col-xl-4.d-none.d-xl-block
              figure.position-relative
                img(src='@/assets/curso/temas/tema4/img1.svg', style="max-width: 384px")
                img.img-animada(src="@/assets/curso/temas/tema4/float-1.svg", style="width: 378px")

            .col-xl-8.col-lg
              .ms-xl-3
                .bg-c6.mb-4
                  p.text-white.mb-0 Un entorno de desarrollo virtual es la creación de directorios aislados, los cuales permiten realizar la configuración de los componentes que sólo requiere el proyecto sin necesidad de afectar todo el sistema en general.

                .bg-c8.mb-4
                  .d-flex.align-items-center.flex-column.flex-md-row
                    p.mb-3.mb-md-0 Al suponer que se tiene dos aplicaciones una llamada App1 y otra llamada App2.
                    img(src='@/assets/curso/temas/tema4/img2.svg', style="max-width: 309px")

                .bg-c8.mb-4
                  .d-flex.align-items-center.flex-column.flex-md-row
                    p.mb-3.mb-md-0 Para el primer caso se requiere la instalación de las librerías L1 y L2 y para el segundo se necesita solo instalar la librería L2.
                    img(src='@/assets/curso/temas/tema4/img3.svg', style="max-width: 309px")


          p En tal caso la instalación se realizaría de manera independiente para cada aplicación sin que todas se vean afectadas, ya que cada una tiene su propio espacio de configuración y de instalación de componentes necesarios.


    p.mb-4 Esta es una excelente estrategia cuando se trabaja con sistemas de versionamiento, que en versiones superiores ya no se usen componentes y no se requiera instalar en las nuevas versiones.

    p.txt-c1.mb-5 #[strong Se pueden ver entonces los pasos para la instalación de un entorno de desarrollo virtual:]


    .tarjeta.tarjeta--celeste.p-4.mb-5
      .px-4
        SlyderA(tipo="b")
          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 1
              p Abrir la aplicación de visual studio code y hacer clic en la opción que dice #[code.etiqueta “New Terminal”] en la parte superior de nuestro entorno de desarrollo.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-1.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 2
              p Colocar el siguiente comando en nuestra terminal: #[code.etiqueta mkdir  NombreDirectorio]

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-2.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 3
              p Procedemos a abrir nuestro espacio de trabajo a través de la opción #[code.etiqueta “Add Folder to Workplace…”]

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-3.png')


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 4
              p.mb-4 Procedemos a buscar la ubicación de nuestra carpeta y luego presionamos el botón #[code.etiqueta “Add”], en este paso es importante tener en cuenta que la carpeta quedará ubicada en la posición en la que esté ubicado en la terminal es decir en un lugar diferente.
              p Nos aparecerá luego un mensaje donde colocaremos #[code.etiqueta “Yes”] en caso de confiar en los archivos contenidos en la carpeta.


            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-4.png')


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 5
              p.mb-4 Como podemos observar en nuestro explorador a mano izquierda nos aparece el directorio que está destinado para ser nuestro entorno de desarrollo virtual.
              p En esa misma sección hacemos clic y procedemos a abrir una nueva terminal #[code.etiqueta “Open in Integrated Terminal”] desde esa ubicación.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-5.png')



          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 6
              p Se abrirá una nueva terminal ubicada en la dirección correspondiente al espacio creado. Allí procedemos a ejecutar el comando que permite crear nuestro entorno de desarrollo virtual con los archivos correspondientes.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-6.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 7
              p Luego procedemos a realizar las actualizaciones de políticas a utilizar en el entorno virtual utilizando el siguiente comando que se puede apreciar en la imagen.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-7.png')

          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 8
              p Procedemos a ingresar a la carpeta de #[code.etiqueta Scripts] para que finalmente procedamos a activar nuestro entorno de desarrollo, como se observa en la imagen, se coloca de color verde indicando que se encuentra activo y listo para usar.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-8.png')


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 9
              p.mb-4 Procedemos a realizar la creación de nuestro archivo de código fuente en Python, al dar clic derecho y señalar la opción que dice #[code.etiqueta “new file”] encima del entorno de desarrollo. Luego escribiremos el nombre del archivo de código fuente con su extensión la cual es .py como podemos apreciar.


            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-9.png')


          .row.my-lg-4
            .col-md-4.mb-4.mb-md-0
              h4 Paso 10
              p.mb-4 En pantalla nos aparecerá el espacio donde escribiremos las líneas de código que a manera de ejemplo se llama #[code.etiqueta “App1.py”], con las cuales nuestro programa realizará sus funciones establecidas. Hemos codificado nuestra aplicación para que solicite 2 números al usuario y luego realice la suma con su posterior resultado de este proceso seguido del comando para realizar la ejecución de esta.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema4/slide-10.png')


    .bg-c6.mt-4
      .row
        .col-auto
          img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px")
        .col
          p.text-white.mb-0 Como se ve a través de esta ejemplificación, la creación de entornos de desarrollo virtuales ofrece grandes ventajas al momento de realizar desarrollos orientados al uso de librerías y extensiones propias de un proyecto independiente; el tema de versionamiento también toma gran fuerza, ya que se pueden establecer todos los componentes que este llevará y es mucho más fácil instalar y colocar en marcha las aplicaciones y su despliegue en servidores de producción.
</template>

<script>
export default {
  name: 'Tema4',
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
