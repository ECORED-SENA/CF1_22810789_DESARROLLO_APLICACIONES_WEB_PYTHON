<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estándares para la codificación de #[em software]

    p.mb-4 Conocer la importancia del proceso de codificación y su manejo de estándares es importante para abordar y comprender esta temática de una manera mucho más específica en cuanto a su uso y aplicación.

    .bg-c13.mb-5
      .px-lg-5
        .row
          .col-lg-7
            .bg-c12.mb-3.ps-0.pe-4.py-2
              .d-flex.justify-content-start.align-items-center
                img(src="@/assets/curso/temas/tema6/icon-lila2.svg", style="width: 53px", alt="").me-3
                div
                  p.mb-3 El concepto estándar es un modelo que se toma como referencia para construir, diseñar o fabricar un producto. Los estándares tienen en su teoría una serie de pasos y reglas que se deben cumplir para garantizar que la calidad y/o procesos se realicen de manera correcta.
                  p.mb-0 Un estándar garantiza que un producto sea bueno o de calidad ya que se siguen ciertas reglas de fabricación y medición en cada fase del proceso.

            p Un ejemplo de lo anterior, puede ser la fabricación de una motocicleta:

          .col-lg-5
            figure.d-none.d-lg-block
              img(src="@/assets/curso/temas/tema6/img1.png", alt="")

        figure.mb-4.d-none.d-md-block
          img(src="@/assets/curso/temas/tema6/moto-desktop.png", alt="Ejemplo de estandar de fabricación de una moticicleta. Los tiempos de las válvulas requieren de una calibración especial, cada pieza funcional del motor va a requerir de un proceso de estandarizacón, se debe tener en cuenta para todas las motocicletas un modelos especifico y deberá tener una marca específica, lo que hace que todas presenten característica y capacidades técnicas similares")

        figure.mb-4.d-md-none
          img(src="@/assets/curso/temas/tema6/moto-movil.svg", style="max-width: 464px", alt="Ejemplo de estandar de fabricación de una moticicleta. Los tiempos de las válvulas requieren de una calibración especial, cada pieza funcional del motor va a requerir de un proceso de estandarizacón, se debe tener en cuenta para todas las motocicletas un modelos especifico y deberá tener una marca específica, lo que hace que todas presenten característica y capacidades técnicas similares").m-auto

        p.mb-4 Ahora bien, no solamente se hace referencia al proceso de fabricación, sino que también se debe tener en cuenta que se fabrica la motocicleta por primera vez y esta sirve de referencia para todas las demás fabricadas, ya que ha sido probada y ajustados sus valores de calibración y fondo que se tendrán en cuenta para todas las demás.

        .row.align-items-center.mb-4
          .col-lg-5
            img(src="@/assets/curso/temas/tema6/img2.svg", alt="").mb-4.mb-md-0
          .col-lg-7
            p.mb-4 Así mismo, funciona en programación, el estándar sirve para mantener un estilo y una forma de escribir el código fuente y que este sea interpretado de una manera estandarizada.

            .bg-c12.p-3.px-4
              p.mb-0 Eso quiere decir que pueda ser entendible por otros programadores para cuando se requiera realizar una modificación o agregar nuevas funciones y se pueda realizar este proceso sin traumatismos causados por el no entendimiento. Esto incluye nombres de variables, nombre de funciones, atributos, clases, entre otros componentes.

        p.mb-4 Ahora bien, sabiendo lo que representan, es importante presentar los estándares de programación más utilizados para Python:


    TabsA.color-acento-contenido
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Camel Case")
        h4 Camel Case
        p.mb-4 Combina las palabras directamente, sin usar ningún símbolo, estableciendo que la primera letra de cada palabra esté en mayúscula a excepción de la primera palabra, estando el resto de las letras en minúsculas.
        p.mb-4 Este tipo de notación está muy extendida, siendo su uso muy común tanto en la declaración de variables como en el nombre de funciones y métodos.
        p.mb-3 Unos ejemplos de sintaxis pueden ser:

        p.mb-2 #[i.fas.fa-check.me-2.txt-c2] De contar palabras, en notación Camel Case sería: #[strong.txt-c2 contarPalabras]
        p #[i.fas.fa-check.me-2.txt-c2] De aumentar nivel dificultad, en notación Camel Case sería: #[strong.txt-c2 aumentarNivelDificultad]


      .tarjeta.color-acento-contenido--borde.p-4(titulo="Pascal Case")
        h4 Pascal Case
        p.mb-4 La notación #[em Pascal Case] combina las palabras directamente, sin usar ningún símbolo, estableciendo que la primera letra de cada palabra esté en mayúscula sin excepciones, estando el resto de las letras en minúsculas.
        p.mb-4 Su uso es muy habitual en la definición de los nombres de las clases de múltiples lenguajes, como #[code.etiqueta JavaScript] o #[code.etiqueta PHP].
        p.mb-3 Unos ejemplos de sintaxis pueden ser:

        p.mb-2 #[i.fas.fa-check.me-2.txt-c2] De contar palabras, en notación Pascal Case sería: #[strong.txt-c2 #[em ContarPalabras]]
        p #[i.fas.fa-check.me-2.txt-c2] De aumentar nivel dificultad, en notación Pascal Case sería: #[strong.txt-c2 #[em AumentarNivelDificultad]]

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Snake Case")
        h4 Snake Case
        p.mb-4 La notación #[em Snake Case] combina las palabras usando un #[strong guion bajo _] como nexo.
        p.mb-4 Existen dos versiones de esta notación, una en la que todas las letras están en minúscula y otra en la que todas las letras están en minúscula. Esta notación, cuando se usa en mayúscula, es habitual en la declaración de constantes de lenguajes como #[code.etiqueta PHP] o #[code.etiqueta JavaScript].

        p.mb-4 La notación #[em Snake Case] en su versión minúscula también es muy utilizada en la declaración de los nombres de los campos de las bases de datos. Además, también se utilizaba en la declaración de variables de #[code.etiqueta PHP] y, de hecho, aún es el estándar de muchos desarrolladores cuando programan #[em plugin] o temas para #[code.etiqueta WordPress].

        p.mb-3 Unos ejemplos de sintaxis pueden ser:

        p.mb-2 #[i.fas.fa-check.me-2.txt-c2] De contar palabras, en notación Snake Case sería: #[strong.txt-c2 #[em contar_palabras]]
        p #[i.fas.fa-check.me-2.txt-c2] De aumentar nivel dificultad, en notación Snake Case sería: #[strong.txt-c2 #[em aumentar_nivel_dificultad]]

    .bg-c14
      .px-lg-5
        .bg-c6.my-5
          .row
            .col-auto.d-none.d-md-block
              img(src="@/assets/curso/temas/tema2/img3.svg", style="width: 85px", alt="")
            .col
              h4.text-white Camel Case:
              p.text-white.mb-0 Es el estándar más utilizado por la mayoría de las comunidades de desarrolladores en el mundo y se ha convertido en una de las que mayor referencia tiene en el código fuente que se ha estudiado. Es el preferido por los programadores por su sencilla manera de uso y practicidad.

        p.mb-5 Se puede ver en la siguiente figura 2 un ejemplo de Camel Case con Python:

        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 2. <br>#[span Estándar Camel Case en Python]
            figure.figura
              img(src="@/assets/curso/temas/tema6/img3.png", alt="La imagen muestra un ejemplo del estándar Camel Case en Python. La variable se llama 'primerNota', y sigue la convención Camel Case. En este estándar, las palabras se escriben juntas sin espacios, y cada palabra adicional comienza con una letra mayúscula, a excepción de la primera palabra. En este caso, 'primer' es la primera palabra en minúsculas, mientras que 'Nota'  comienzancon letra mayúscula.")
              figcaption Nota. Pantalla en Visual Studio Code.

        p.mb-5 Como se puede observar se utiliza el estándar de codificación #[em Camel Case], uno de los más utilizados y preferido por los programadores como se comentó previamente.


        .row.align-items-center
          .col-lg-7
            .bg-c12.p-3.px-4.mb-4
              p.mb-0 El proceso de construcción del código sigue un patrón específico, pero es importante tener en cuenta que la manera en cómo se estructura el código es fácil de interpretar y de modificar las veces que sea necesarias, también se debe mencionar que este tipo de forma de codificar permite que otros programadores o miembros de un equipo de desarrollo puedan entender y trabajar de una manera mucho más fluida y ordenada.

            p.mb-4 Los estándares de desarrollo son una manera de no solo organizar el código, sino de trabajar en equipos de desarrollo.

            .row
              .col-auto
                img(src="@/assets/curso/temas/tema6/img5.svg", style="width: 85px", alt="")
              .col
                p.txt-c1(style="font-size: 0.92rem") #[strong Estos aportan calidad al producto de #[em software] que se desea construir y se debe tener en cuenta la palabra calidad, ya que el #[em software] es un producto y como tal requiere no solo de unos estándares para reflejar calidad, sino que también requiere llevar a cabo un proceso de documentación donde se consagra un documento llamado el manual del programador. ]

          .col-lg-5
            img(src="@/assets/curso/temas/tema6/img4.png", alt="")

        p.mt-5 En este, se documenta el código y cada una de las funciones que realizan ciertas líneas de código y dicho documento se utiliza para generar una guía por si se requiere más adelante modificar o agregar nuevas funcionalidades al #[em software], se tenga un punto de partida para que el proceso se lleve a cabo con los menores contratiempos esperados.
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
