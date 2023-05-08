export default {
  global: {
    componenteFormativo: 'Entornos de desarrollo y codificación',
    descripcionCurso:
      'Este componente formativo está orientado a entregar los conceptos y conocimientos en instalación y puesta en marcha de entorno de trabajo, conocer los estándares de codificación, manejo de variables, funciones, estructuras de control, clases objetos y gestión de proyectos en Python.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es un editor de código?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diferentes editores de código',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proceso de instalación de visual estudio code',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparar entorno de desarrollo virtual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo y control de versiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estándares para la codificación de software',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Creación y manejo de variables, estructuras de control, funciones, clases y objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Gestión de proyectos en Python',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es un editor de código?',
      referencia:
        'Visual Studio Code. (s.f.).  <em>Getting Started.</em> Docs.',
      tipo: 'Manual de referencia',
      link: 'https://code.visualstudio.com/docs',
    },
    {
      tema: 'Manejo y control de versiones',
      referencia:
        'Dauzon, S. (2022). <em>Git: Controle la gestión de sus versiones (conceptos, utilización y casos prácticos).</em>  Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3GIT',
    },
    {
      tema: 'Manejo y control de versiones',
      referencia:
        'Don Eber. (2021). <em>Instalación de Git en Windows paso a paso | [2021|2022].</em> [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cYLapo1FFmA',
    },
    {
      tema: 'Manejo y control de versiones',
      referencia:
        'Espitia, W. (2021). <em>Cómo crear una cuenta de GitHub desde cero en 2021.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jwFSIEi_d7E',
    },
    {
      tema:
        'Creación y manejo de variables, estructuras de control, funciones, clases y objetos',
      referencia:
        'Commit That Line! (2020). <em>Las funciones en Python | ¿Para qué sirven y cómo se usan?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hLRoDs4wNCU',
    },
    {
      tema: '. Gestión de proyectos en Python',
      referencia:
        'Hinojosa Gutiérrez, Á. P. (2016). <em>Python: Paso a paso.</em> Ediciones de la U, Ra-Ma.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks0004998',
    },
    {
      tema: 'Gestión de proyectos en Python',
      referencia: 'Python.org (s.f.). <em>Python 3.10.5 documentation.</em>',
      tipo: 'Manual de referencia',
      link: 'https://docs.python.org/3/',
    },
  ],
  glosario: [
    {
      termino: '<em>Clase</em>',
      significado:
        'Es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje.',
    },
    {
      termino: '<em>Editor de código</em>',
      significado:
        'Es un programa que permite la creación y edición de archivos de código fuente.',
    },
    {
      termino: '<em>Entornos virtuales de desarrollo</em>',
      significado:
        'Es la creación de directorios aislados los cuales permiten realizar la configuración y componentes que sólo requiere tu proyecto sin necesidad de afectar todo el sistema en general.',
    },
    {
      termino: '<em>Estructuras de control</em>',
      significado:
        'Son utilizadas para validar y tomar decisiones dentro de un programa y que a su vez permiten la ejecución de bloques de código.',
    },
    {
      termino: '<em>Función</em>',
      significado:
        'Las funciones son como una especie de caja las cuales pueden contener una serie de códigos los cuales pueden ser invocados las veces que sea necesaria dentro del programa.',
    },
    {
      termino: '<em>GitHub</em>',
      significado:
        'GitHub es un repositorio de código que se encuentra alojado en la nube y se utiliza para guardar archivos de código fuente y realizarle seguimiento a los mismos con respecto a los cambios o actualizaciones que estos puedan recibir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dauzon, S. (2022). <em>Git: controle la gestión de sus versiones (conceptos, utilización y casos prácticos).</em> 2ª Edición. ed. Ediciones ENI.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3GIT',
    },
    {
      referencia:
        'Hinojosa Gutiérrez, Á. P. (2016). <em>Python: Paso a Paso.</em> Primera Edición. ed. Ediciones De La U, Ra-Ma,',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks0004998',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
