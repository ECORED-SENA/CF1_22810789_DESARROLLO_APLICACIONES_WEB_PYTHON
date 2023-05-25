<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Gestión de proyectos en Python


    p.mb-4 La gestión de proyectos en Python es la forma en cómo se pueden administrar diferentes espacios, carpetas y directorios que se puedan llegar a utilizar dentro del aplicativo a desarrollar.

    .bg-c17.mb-5
      .px-5
        .row.mb-5
          .col-lg-8.col-md
            .bg-c16.p-4.mb-4(style="border-radius: 12px")
              p.mb-0 Es importante tener en cuenta que esto va a permitir organizar de manera mucho más específica el programa, ya que de acuerdo con las necesidades que este requiera se crearán dichos espacios.

            p.mb-4 Como se puede ver en la imagen del proyecto en Python, se requiere el uso de más de una carpeta para su organización.

            p.mb-4 En la imagen se visualiza la manera en cómo se puede gestionar y visualizar un proyecto en Python, a diferencia de los observados anteriormente este se encuentra distribuido en diferentes carpetas y directorios los cuales de acuerdo con la necesidad del programador puede agregar o quitar carpetas y directorios.

            .bg-c6.my-4
              .row
                .col-auto.d-none.d-md-block
                  img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
                .col
                  p.text-white.mb-0 Es importante tener en cuenta que la gestión del proyecto no solamente se requiere para la realización y organización del proyecto en sí, sino que también permite realizar una interpretación de cómo está distribuido el programa en términos de lógica.

            p Un ejemplo de esto es que muchas veces en las empresas cuando los proyectos son demasiado extensos se procede a asignar responsabilidades funcionales a diferentes miembros del proyecto. Por ejemplo, a un programador se le puede asignar el módulo de factura y al otro el módulo de inventarios, ambos módulos pertenecen al mismo proyecto pero están en dos espacios distintos; esto ayuda adicionalmente a mejorar la seguridad y el orden dentro del proyecto.

          .col-lg-4.col-md-12.my-md-4.my-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 4. #[span  Espacios en un proyecto Python]
            figure.figura
              img(src="@/assets/curso/temas/tema8/img1.png", alt="La imagen muestra una captura de pantalla de los espacios de un proyecto en Python. En la interfaz de desarrollo, se puede observar la estructura de directorios y archivos del proyecto. ")
              figcaption Nota. Pantalla en Visual Studio Code.

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            p Ahora bien, es importante comprender que el uso de las herramientas que se han estado explorando a través de este componente formativo juegan un papel importante, ya que permiten en este caso particular controlar ciertos aspectos del proyecto que requieren de un gran cuidado y verificación constante.
            br
            br

    .row.mb-5
      .col-lg-8.col-md
        p.mb-4 Como es el caso de los repositorios para el almacenamiento del código fuente del programa, se hace referencia a la herramienta GitHub, esta herramienta permite almacenar en un servidor de repositorio el código fuente del programa de una manera segura y sencilla. En muchas ocasiones uno de los problemas que se presentan en el trabajo de proyectos de #[em software] es precisamente dónde reposarán los archivos fuentes ya que estos son los que no solamente tienen las instrucciones y la lógica para hacer funcionar el proyecto, sino que también van a permitir realizar la modificación o agregación de nuevas funcionalidades al programa.

        .bg-c6.my-4
          .row
            .col-auto.d-none.d-md-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
            .col
              p.text-white.mb-0 En algunas ocasiones se almacenan estos archivos en discos duros y/o computadoras de respaldo las cuales pueden llegar a fallar en cualquier momento; por eso, la recomendación #[strong siempre] está dirigida a la utilización de este tipo de servicios (como GitHub) para evitar pérdidas de archivos o en su defecto código fuente construido.

        p.mb-4 Se puede poner como ejemplo el siguiente escenario:

      .col-lg-4
        img(src="@/assets/curso/temas/tema8/img3.png", alt="")


    .bg-c18.mb-5
      .px-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            .fondo-box-t8.h-100.p-4
              img(src="@/assets/curso/temas/tema8/icon-1.svg", style="width: 77px")

              p.mt-4.mb-0 Se está desarrollando un proyecto importante y se está construyendo una parte de la lógica del código la cual tiene un grado de complejidad que lleva varias horas de realización, pero se ha olvidado guardar los respectivos cambios.
          .col-lg-3.mb-3.mb-lg-0
            .fondo-box-t8.h-100.p-4
              img(src="@/assets/curso/temas/tema8/icon-2.svg", style="width: 77px", alt="")

              p.mt-4.mb-0 Se va el fluido eléctrico, esto significa que se ha perdido el trabajo realizado y en el peor de los casos, no se vuelve a recuperar.
          .col-lg-3.mb-3.mb-lg-0
            .fondo-box-t8.h-100.p-4
              img(src="@/assets/curso/temas/tema8/icon-3.svg", style="width: 77px", alt="")

              p.mt-4.mb-0 Se contempla la idea que en la computadora donde se está realizando la codificación del proyecto se puede averiguar. Pero si no se realizó una copia de seguridad puede afectar de gran manera el correcto desenlace del proyecto.
          .col-lg-3.mb-3.mb-lg-0
            .fondo-box-t8.h-100.p-4
              img(src="@/assets/curso/temas/tema8/icon-4.svg", style="width: 77px", alt="")

              p.mt-4.mb-0 Para evitar casos comunes como este ejemplo, los repositorios de código son utilizados por millones de programadores, ingenieros y entusiastas de la programación a nivel mundial, para mitigar el error de perder información que pueda comprometer el proyecto que estamos trabajando.

        p.mb-4 Todo lo desarrollado hasta este momento, lleva a la reflexión sobre la importancia de almacenar el código fuente de manera segura y confiable para evitar que este se pueda perder o pueda ser afectado por temas de virus o cualquier otro tipo de amenazas que se encuentran en el día a día de la industria del #[em software].

        .row.mt-4
          .col-lg-8
            .bg-c19.p-4.mb-4
              p.mb-0 También es importante la utilización de las buenas prácticas al momento de codificar, el uso de una aplicación para hacer que el programa mantenga un esquema de orden y nomenclaturas que permitan tanto su modificación como agregación de nuevas funciones de manera sencilla y eficiente.

            .row
              .col-auto.d-none.d-lg-block
                img(src="@/assets/curso/temas/tema8/img5.svg", style="width: 85px", alt="")
              .col
                p.mb-0 Finalmente, se ha podido explorar las diferentes estructuras de control que se utilizan para validar las opciones y operaciones que se deben llevar a cabo dentro de un programa, el manejo de clases y objetos para organizar la información de una manera adecuada. Es importante tener en cuenta que el manejo de funciones permite separar las diferentes operaciones que se deben realizar en el programa y cómo este debe recibir la información que le entregará al usuario y la respuesta que se debe dar de acuerdo con los procesos necesarios por los requerimientos y necesidades del cliente para su desarrollo.

          .col-lg-4
            img(src="@/assets/curso/temas/tema8/img4.png", alt="").mt-4.mt-lg-0

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
