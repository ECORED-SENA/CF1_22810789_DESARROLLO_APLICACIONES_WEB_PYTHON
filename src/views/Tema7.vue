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
              h5 Figura 3. <br>#[span #[em Ejemplos de sintaxis de las variables]]
            figure.figura
              img(src="@/assets/curso/temas/tema7/img2.png", alt="La imagen muestra un ejemplo de la sintaxis de variables en Python. Se declara una variable llamada 'a' y se le asigna el valor numérico de '5'. En Python, la sintaxis para declarar una variable es simplemente escribir el nombre de la variable seguido de un signo igual ('=') y el valor que se le asignará.")
              figcaption Nota. Pantalla en Visual Studio Code.

        .row.justify-content-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema7/img3.svg", style= "width: 85px", alt="")
          .col-lg
            p.mb-0 Como se puede observar en la figura las variables (a, b, c y d) tienen asignados diferentes tipos de datos y con la utilización de la función #[em type] permite saber qué tipo de variable es. En otros lenguajes de programación es necesario declarar el tipo de dato que soportará la variable, pero en el caso de Python una misma variable puede cambiar de tipo de dato sin tener ningún inconveniente.

        .row.justify-content-center.mb-5
          .col-lg-5.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema7/img4.png", alt="")
          .col-lg-7
            .bg-c16.p-3.px-4.mb-4
              p.mb-0 Esto refleja lo poderoso y versátil que es el lenguaje Python, en este caso particular se ha utilizado la misma variable para almacenar diferentes tipos de datos. Esta particularidad genera una ventaja al momento de realizar la codificación de un #[em software] puesto que se pueden reutilizar variables y por supuesto hacer un uso mucho más eficiente de la memoria RAM del equipo.

            p A continuación, se pueden ver los conceptos que junto al manejo de variables forman parte del entorno de trabajo Python. #[strong.txt-c1 Ahora es tiempo de ver las estructuras de control, funciones, clases y objetos y conceptos claves para desarrollar en lenguaje de programación Python.]



    h4.mb-5 #[span.btn-subtitulo Estructuras de control]

    .row
      .col-lg-7

        p.mb-4 Para comenzar, en los lenguajes de programación, las estructuras de control permiten modificar el flujo de ejecución de las instrucciones de un programa.

        p.mb-4 Las estructuras de control permiten, a través de que se cumpla alguna condición, realizar la ejecución de una secuencia de código.

        .bg-c2.mb-4.py-3.ps-0.pe-4
          .d-flex.justify-content-start.align-items-center
            img(src="@/assets/curso/temas/tema1/icon-azul-2.svg", style="width: 53px", alt="").me-3
            p.mb-0 En la programación son muy importantes, así como las funciones, las clases y objetos. Los programas de computadora deben decidir de acuerdo con la información que se le suministra al sistema, realizar validaciones de acuerdo con las necesidades que este tenga que ejecutar y luego entregar al usuario los resultados esperados.

      .col-lg-5
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema7/img5.png", alt="")


    p.mb-5.txt-c1 #[strong A continuación se pueden ver todos estos conceptos relacionados:]

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Estructuras de control simple")
        .col-lg
          p.mb-4 Las estructuras de control simple permiten evaluar una condición dada y de acuerdo con la condición, y si esta se cumple, ejecutar las líneas de código que se encuentran dentro de la misma.


          p.mb-4 Estas se utilizan para tomar decisiones que solo dependen de que se cumpla una única condición.


          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img6.png', alt='La imagen muestra un ejemplo de una estructura de control simple en Python utilizando la sentencia if', style= "max-width: 820px").m-auto

          p.mb-4 Como se puede observar, este es el resultado de la aplicación de una estructura de control simple, la cual permite validar si una variable establecida en una condición, se cumple para realizar las acciones que se le programan. Para este ejemplo, se envía el mensaje, pero se puede colocar cualquier tipo de instrucción o conjunto de instrucciones que, en caso de cumplirse la condición, realizarán las acciones que allí se establecen.



      .row(titulo="Estructuras de control dobles")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Las estructuras de control dobles o también llamadas compuestas permiten evaluar una condición inicial y si esta condición no se cumple permite negar el resultado de la primera condición y establecer nuevas acciones.


          p.mb-4 Acciones que se ejecutarán si ese proceso se llega a cumplir. Este tipo de estructuras se utilizan cuando se ncesita validar más de una condición al tiempo.


          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img7.png', alt='La imagen muestra un ejemplo de una estructura de control simple en Python utilizando la sentencia if-else', style= "width: 820px").m-auto

          p.mb-4 Como se puede observar, se utiliza un comando de negación para la condición principal.


          p.mb-4 En este caso se ha cambiado el valor de la variable (a) de 5 a 7, por lo tanto la primera condición que verifica es si es el valor de la variable.

          p La instrucción #[em else] permite negar la condición principal y realizar otro grupo de acciones que pueden ejecutarse. Esto adicionalmente le da mayor versatilidad al programa ya que se pueden realizar muchas más acciones que en el condicional simple.




      .row(titulo="Estructuras de control múltiples")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Las estructuras de control múltiples permiten evaluar el valor que puede tener una variable teniendo en cuenta que muchas de esas condiciones, dependen de otras condiciones para poder ejecutar sus acciones.

          p.mb-4 De esta manera se ejecuta una serie de instrucciones por cada condición evaluada.

          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img8.png', alt='La imagen muestra un ejemplo de una estructura de control simple en Python utilizando la sentencia if-else if-else', style= "width: 820px").m-auto

          p.mb-4 Como se puede observar, a diferencia de la estructura de control anterior, esta permite que se realicen evaluaciones de condiciones si la negación de la primera falla. Lo que hace tener un árbol de decisión que contempla la posibilidad de realizar la elección de una cantidad de instrucciones a ejecutar dependiendo de los valores posibles que se puedan evaluar para una variable o conjunto de ellas.


      .row(titulo="Estructuras de control anidadas")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Las estructuras condicionales anidadas permiten elegir entre varias opciones o alternativas posibles de forma encadenada, en función del cumplimiento o no de una determinada condición.


          p.mb-4 Este tipo de condicionales son muy útiles al momento de negar o aceptar el primer bloque condicional, es decir, si el bloque principal falla. Automáticamente no ingresa en ninguno de los condicionales, pero si ingresa permite evaluar diferentes opciones.



          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img9.png', alt='La imagen muestra un ejemplo de una estructura de control anidada en Python. En el código, se utilizan múltiples sentencias if dentro de otras sentencias if para crear una estructura de control anidada', style= "width: 820px").m-auto


          p.mb-4 Claramente en la variable, se aprecia el uso de otra variable para realizar una evaluación inicial. Si esta se cumple, se validan las condiciones internas.

          p.mb-4 En caso de no cumplirse se niegan todas las condiciones e ingresa por el else para enviar el respectivo mensaje de rechazo.



      .row(titulo="Funciones")
        .col-lg.mb-4.mb-md-0
          p.mb-4 El uso de funciones para cualquier programa de computadora es necesario.

          p.mb-4 Las funciones son como una especie de caja, las cuales, pueden contener una serie de códigos, que a su vez pueden ser invocados las veces que sean necesarios dentro del programa; entra dentro de los conceptos llamados recursividad. Es importante tener en cuenta que se debe contar con unas reglas para crear y llamar las funciones en el caso de Python.

          p.mb-4 Entra dentro de los conceptos llamados recursividad, es importante tener en cuenta que se debe contar con unas reglas para crear y llamar las funciones en el caso de Python.

          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img10.png', alt='La imagen muestra un ejemplo de una función en Python. La función se llama fnt_Suma y tiene un parámetro nombre. Está definida utilizando la palabra clave def, seguida del nombre de la función y los paréntesis que contienen los parámetros', style= "width: 820px").m-auto

          p.mb-4 Como se observa, para este caso, de aplicación de funciones se debe utilizar la palabra reservada  #[code.etiqueta def] seguido del nombre de la función.
          p.mb-4 Es importante utilizar un estándar en el caso de las funciones, se utiliza la palabra fnt seguida del símbolo  #[code.etiqueta fnt] seguida del símbolo “_“ para dar a entender que se trata de una función; y de esta manera se puede identificar de manera correcta dentro del código.

          p.mb-4 Otro aspecto es que las funciones reciben parámetros, en el caso de la función llamada   #[code.etiqueta fnt_Suma], recibe dos parámetros uno llamado #[strong n1] y otro llamado #[strong n2] los cuales se pueden evidenciar en la última línea de código.

          p.mb-4 Cuando se invoca la función, recibe los valores recolectados en las variables para ser enviados y realizar el proceso que se muestra en la imagen.

          p.mb-4 Esta es una manera de realizar toda la lógica del código dentro de un mismo espacio y ayuda también a entender mucho mejor el código fuente del programa.


      .row(titulo="Clases y objetos")
        .col-lg.mb-4.mb-md-0
          p.mb-4 Una clase es una plantilla para el objetivo de la creación de objetos de datos, según un modelo predefinido.

          p.mb-4 Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje. Ejemplo de una clase: Persona, Usuario, Cliente

          p.mb-4 En Python las clases se crean de la siguiente manera:  #[code.etiqueta class] y el nombre de la clase - #[code.etiqueta #[em class] Persona]:
          p.mb-4 Las clases están compuestas por atributos los cuales representan una característica de la misma; por ejemplo, si se sabe qué características tiene una persona, en este caso sería: Identificación, nombre, edad, contacto, sexo, entre otras. Estos atributos permiten almacenar la información dentro de la clase para luego poder ser utilizados cuando se requiera.


          figure.mb-4
            img(src='@/assets/curso/temas/tema7/img11.png', alt='Clases y objetos', style= "width: 820px").m-auto

          p.mb-4 Como se puede observar, se ha creado una clase llamada Persona la cual tiene los atributos de nombre, contacto, edad y sexo. Luego se ha creado un objeto, ya que el mismo permite poder acceder a los atributos de la clase y  modificar sus valores. Haciendo por último, una impresión de la información contenida en los atributos nombre y sexo.



    p.mb-4 A continuación, se puede mostrar a través del siguiente video una ejemplificación de lo visto hasta este momento, en el que se irá también familiarizando con los conceptos y uso del aplicativo Visual Studio Code seleccionado:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_LEroFtltXQ" title="Iniciando e interactuando con nuestro entorno de desarrollo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Iniciando e interactuando con nuestro entorno de desarrollo.

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
