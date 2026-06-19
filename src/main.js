// ==========================================
// 1. BASE DE DATOS TEÓRICA (MAPAS MENTALES)
// ==========================================
function slideGallery(folder, title, description, slideNumbers) {
  return {
    type: "gallery",
    title,
    description,
    slides: slideNumbers.map(number => `Recursos/${folder}/slide-${String(number).padStart(2, "0")}.png`)
  };
}

function flourishingGallery(title, description, slideNumbers) {
  return slideGallery("flourishing", title, description, slideNumbers);
}

function unitTwoGallery(title, description, slideNumbers) {
  return slideGallery("unidad-2/slides", title, description, slideNumbers);
}

function unitThreeGallery(title, description, slideNumbers) {
  return slideGallery("unidad-3/slides", title, description, slideNumbers);
}

const courseData = {
  1: {
    title: "Fundamentos de la Psicología Positiva",
    desc: "La psicología positiva estudia fortalezas humanas, emociones positivas y factores que permiten alcanzar bienestar y felicidad.",
    theoryNodes: [
      {
        id: "1.1",
        title: "¿Qué es la Psicología Positiva?",
        learnMoreResources: [
          {
            type: "image",
            title: "Principios de la Psicología Positiva",
            description: "Síntesis visual sobre el cambio de paradigma, el modelo PERMA, el estado de Flow, las acciones intencionales y el lenguaje positivo.",
            imageUrl: "Recursos/Principios_de_la_Psicología_Positiva.png"
          },
          flourishingGallery(
            "Origen y propósito de la Psicología Positiva",
            "Recorrido visual desde el enfoque centrado en reparar hasta la ciencia del florecimiento humano.",
            [1, 2, 3, 4]
          )
        ],
        learnMoreVideo: {
          title: "Aprende más: Psicología Positiva",
          description: "Video de apoyo para ampliar la primera tarjeta de teoría de la Unidad 1.",
          embedUrl: "https://www.youtube.com/embed/cSm4YE0hI6A",
          source: "YouTube"
        },
        content: `<p>La Psicología Positiva es una corriente de la psicología científica que estudia las emociones positivas, las fortalezas humanas y las condiciones que favorecen el bienestar y la felicidad.</p>
        <p>Según <strong>Martin Seligman (1998)</strong>, busca comprender y promover los factores que permiten a las personas y comunidades prosperar. Su objetivo no es únicamente tratar enfermedades mentales, sino potenciar las capacidades humanas y mejorar la calidad de vida.</p>
        <p>Seligman plantea que la psicología no debe limitarse a reparar lo que está mal, sino también construir lo mejor de la vida. Sonja Lyubomirsky afirma que la felicidad puede desarrollarse mediante actividades intencionales y hábitos positivos.</p>
        <p>Mihaly Csikszentmihalyi define la felicidad como un estado de experiencia óptima llamado <strong>Flow</strong>, donde la persona alcanza concentración profunda, satisfacción y motivación intrínseca. Tal Ben-Shahar considera que la felicidad puede aprenderse mediante equilibrio emocional, relaciones humanas y propósito de vida.</p>
        <h3>Historia</h3>
        <p>La Psicología Positiva surge oficialmente en 1998 cuando Martin Seligman propone cambiar el enfoque tradicional centrado solo en enfermedades y trastornos.</p>
        <ul><li>Antecedentes: filosofía griega, eudaimonía de Aristóteles, psicología humanista de Maslow y Rogers.</li><li>Estudia felicidad, optimismo, resiliencia, gratitud, esperanza, fortalezas personales y bienestar subjetivo.</li><li>Se aplica en educación, organizaciones, salud, neurociencias y desarrollo humano.</li></ul>`
      },
      {
        id: "1.2",
        title: "Mensaje Positivo y Comunicación",
        learnMoreResources: [
          flourishingGallery(
            "Lenguaje positivo y comunicación asertiva",
            "Tres vistas para comprender el optimismo aprendido, el impacto emocional de las palabras y la comunicación basada en empatía, respeto y escucha activa.",
            [9, 10, 11]
          )
        ],
        content: `<h3>Lenguaje positivo</h3>
        <p>El lenguaje positivo consiste en utilizar palabras y expresiones que generan bienestar, motivación y confianza. Según Tal Ben-Shahar, las palabras influyen directamente en las emociones y en la construcción de relaciones saludables.</p>
        <p>Martin Seligman afirma que el optimismo aprendido se desarrolla mediante el cambio del lenguaje interno negativo por pensamientos positivos y realistas.</p>
        <ul><li>Ejemplos: “Puedo mejorar”, “Voy a intentarlo nuevamente”, “Confío en mis capacidades”.</li><li>Favorece autoestima, motivación, resiliencia, aprendizaje y convivencia.</li></ul>
        <h3>Comunicación asertiva</h3>
        <p>La comunicación asertiva es la capacidad de expresar ideas, emociones y opiniones de manera clara, respetuosa y empática. Carl Rogers destaca que la comunicación debe promover aceptación y comprensión emocional.</p>
        <ul><li>Características: respeto mutuo, escucha activa, claridad, empatía y honestidad emocional.</li><li>Mejora relaciones interpersonales, trabajo colaborativo, resolución de conflictos y bienestar emocional.</li></ul>
        <h3>Impacto emocional de las palabras</h3>
        <p>Las palabras generan efectos emocionales y psicológicos. Según las neurociencias, el cerebro responde emocionalmente al lenguaje positivo y negativo. Daniel Kahneman plantea que las experiencias emocionales quedan almacenadas en la memoria y afectan la percepción de felicidad.</p>`
      },
      {
        id: "1.3",
        title: "Marco Teórico",
        learnMoreResources: [
          {
            type: "image",
            title: "Fundamentos de la Psicología Positiva",
            description: "Mapa visual de los aportes de Seligman, Csikszentmihalyi y Lyubomirsky: PERMA, Flow y actividades intencionales.",
            imageUrl: "Recursos/Fundamentos_de_la_Psicología_Positiva.png"
          },
          flourishingGallery(
            "Modelos centrales del bienestar",
            "Ampliación visual del 40% de actividades intencionales, los cinco pilares PERMA y el equilibrio entre reto y habilidad en el Flow.",
            [6, 7, 8]
          )
        ],
        content: `<h3>Martin Seligman</h3>
        <p>Desarrolla la teoría del bienestar PERMA: <strong>P</strong> emociones positivas, <strong>E</strong> compromiso, <strong>R</strong> relaciones positivas, <strong>M</strong> significado o propósito de vida y <strong>A</strong> logro. Sostiene que la felicidad puede aprenderse mediante hábitos positivos.</p>
        <h3>Mihaly Csikszentmihalyi</h3>
        <p>Desarrolla la teoría del Flow, un estado mental de concentración profunda donde la persona pierde la noción del tiempo, disfruta la actividad y alcanza satisfacción personal. Aparece cuando existe equilibrio entre habilidad, reto, motivación y concentración.</p>
        <h3>Tal Ben-Shahar</h3>
        <p>Define la felicidad como la experiencia general de placer y significado. Plantea que depende de relaciones humanas, gratitud, actividad física, propósito y bienestar emocional.</p>
        <h3>Sonja Lyubomirsky</h3>
        <p>Afirma que el 50% de la felicidad depende de genética, el 10% de circunstancias externas y el 40% de actividades intencionales. Destaca gratitud, optimismo, altruismo y pensamiento positivo.</p>`
      },
      {
        id: "1.4",
        title: "Métodos de Investigación",
        learnMoreResources: [
          flourishingGallery(
            "El rigor empírico del bienestar",
            "Resumen visual de los métodos cuantitativos, cualitativos, experimentales y de observación utilizados por la Psicología Positiva.",
            [5]
          )
        ],
        content: `<p>La Psicología Positiva utiliza distintos métodos para estudiar bienestar, emociones y experiencias humanas.</p>
        <ul><li><strong>Métodos cuantitativos:</strong> analizan datos numéricos, encuestas, escalas psicológicas, mediciones objetivas y análisis estadístico.</li><li><strong>Métodos cualitativos:</strong> comprenden experiencias humanas mediante entrevistas, observación, grupos focales y análisis de experiencias.</li><li><strong>Estudios experimentales:</strong> investigan causa y efecto con grupos experimentales, grupos control y manipulación de variables.</li><li><strong>Observación:</strong> analiza conductas en contextos reales; puede ser participante, no participante, estructurada o abierta.</li></ul>`
      },
      {
        id: "1.5",
        title: "La idea del hombre en la Psicología Positiva",
        learnMoreResources: [
          flourishingGallery(
            "Fortalezas y ser humano integral",
            "Vistas sobre fortalezas personales, dimensiones del ser humano y el bienestar entendido como una construcción consciente.",
            [12, 13, 14]
          )
        ],
        content: `<h3>Ser humano integral</h3>
        <p>La Psicología Positiva considera al ser humano como un ser integral con dimensiones emocionales, cognitivas, sociales, físicas y espirituales. Abraham Maslow señala que las personas buscan autorrealización y desarrollo pleno.</p>
        <h3>Desarrollo humano</h3>
        <p>Implica crecimiento personal y fortalecimiento de capacidades. Según Seligman, el bienestar requiere emociones positivas, relaciones saludables, sentido de vida y metas personales.</p>
        <h3>Fortalezas personales</h3>
        <p>Son capacidades positivas que ayudan a enfrentar desafíos. Seligman y Peterson clasifican fortalezas como valentía, gratitud, creatividad, liderazgo, perseverancia, empatía y amor por el aprendizaje.</p>`
      }
    ],
    quiz: [
      { q: "La psicología positiva se caracteriza por:", options: ["Estudiar solo enfermedades", "Potenciar fortalezas y bienestar", "Rechazar emociones", "Analizar conductas negativas"], correct: 1 },
      { q: "Autor del modelo PERMA:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Martin Seligman", "Tal Ben-Shahar"], correct: 2 },
      { q: "El modelo PERMA incluye:", options: ["Emociones, Compromiso, Relaciones, Sentido, Logro", "Dinero, Éxito, Poder, Fama", "Estrés, Rutina, Aislamiento", "Ninguna de las anteriores"], correct: 0 },
      { q: "Según Lyubomirsky, el 40% de la felicidad depende de:", options: ["Genética", "Circunstancias externas", "Actividades intencionales", "La suerte"], correct: 2 },
      { q: "El estado de Flow se relaciona con:", options: ["Desconexión total", "Falta de motivación", "Concentración profunda y disfrute", "Repetición mecánica"], correct: 2 },
      { q: "La comunicación asertiva implica:", options: ["Imponer opiniones", "Claridad, respeto y empatía", "Evitar toda emoción", "Responder con agresividad"], correct: 1 },
      { q: "Las fortalezas personales ayudan a:", options: ["Enfrentar desafíos y crecer", "Eliminar el aprendizaje", "Evitar relaciones", "Reducir la motivación"], correct: 0 },
      { q: "La psicología positiva complementa a la psicología tradicional porque:", options: ["La reemplaza por completo", "También estudia bienestar y capacidades", "Niega la salud mental", "Solo analiza estadísticas"], correct: 1 },
      { q: "Un método cualitativo permite estudiar:", options: ["Solo números", "Experiencias y percepciones", "Bases de datos únicamente", "Resultados automáticos"], correct: 1 },
      { q: "El lenguaje positivo puede fortalecer:", options: ["Autoestima y resiliencia", "Desconfianza", "Aislamiento", "Desmotivación"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Martin Seligman: nueva era de la psicología positiva",
        description: "Video base para comprender el origen del enfoque positivo, las fortalezas humanas y el bienestar.",
        embedUrl: "https://www.youtube.com/embed/9FBxfd7DL3E",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Infografía 1.1: Psicología Positiva",
        description: "Vista visual del concepto, historia y propósito de la psicología positiva.",
        imageUrl: "Recursos/infografia unidad 1.png",
        content: "<p>Esta infografía acompaña el subtema 1.1. Úsala para recordar visualmente qué estudia la Psicología Positiva y por qué se centra en fortalezas, bienestar y felicidad.</p>"
      },
      {
        type: "infografia",
        title: "Infografía 1.2: Mensaje positivo",
        description: "Vista visual sobre lenguaje positivo, comunicación asertiva e impacto de las palabras.",
        imageUrl: "Recursos/infografia unidad 1.2.png",
        content: "<p>Esta vista refuerza el subtema 1.2: lenguaje positivo, comunicación asertiva y el efecto emocional de las palabras en el aprendizaje y la convivencia.</p>"
      },
      {
        type: "infografia",
        title: "Infografía 1.3: Marco teórico",
        description: "Vista visual de Seligman, Csikszentmihalyi, Ben-Shahar y Lyubomirsky.",
        imageUrl: "Recursos/infografia unidad 1.3.png",
        content: "<p>Esta infografía resume los autores principales: PERMA, Flow, felicidad como placer y significado, y actividades intencionales.</p>"
      },
      {
        id: "gratitude-journal",
        type: "actividad",
        activityKind: "gratitudeJournal",
        title: "Bitácora de gratitud",
        description: "Actividad breve para conectar la teoría con una experiencia positiva personal.",
        content: "<p>Registra tres situaciones positivas de tu día, una fortaleza personal que usaste y una acción de gratitud. Esta actividad conecta con Sonja Lyubomirsky y los hábitos positivos.</p><ul><li>¿Qué ocurrió?</li><li>¿Qué emoción positiva sentiste?</li><li>¿Qué fortaleza utilizaste?</li><li>¿Cómo puedes repetir esa acción durante la semana?</li></ul>"
      }
    ]
  },
  2: {
    title: "La felicidad: ciencia y práctica",
    desc: "Estado de bienestar subjetivo influenciado por pensamientos, genética, neurociencias y relaciones.",
    theoryNodes: [
      {
        id: "2.1",
        title: "Enfoques de la felicidad",
        learnMoreVideo: {
          title: "Aprende más: ciencia de la felicidad",
          description: "Video de apoyo proporcionado para ampliar los enfoques científicos del bienestar en la Unidad 2.",
          embedUrl: "https://www.youtube.com/embed/sK9iKV2p9MU",
          source: "YouTube"
        },
        learnMoreResources: [
          {
            type: "image",
            title: "La ciencia y práctica del bienestar",
            description: "Síntesis visual de los pilares científicos, la percepción cognitiva, los hábitos y la dinámica de la felicidad.",
            imageUrl: "Recursos/La_Ciencia_de_la_Felicidad.png"
          },
          unitTwoGallery("Enfoques científicos de la felicidad", "De la definición multidimensional a los aportes de la Psicología Positiva, la Psicología Cognitiva y las Neurociencias.", [1, 2, 3, 4, 5, 13])
        ],
        content: `<p>La felicidad ha sido estudiada desde diferentes disciplinas científicas y humanísticas. Entre los enfoques más importantes están la Psicología Positiva, la Psicología Cognitiva y las Neurociencias.</p><h3>Psicología Positiva</h3><p>Estudia fortalezas humanas, emociones positivas y factores que permiten alcanzar bienestar y satisfacción personal. Martin Seligman define la felicidad como desarrollo del bienestar integral mediante emociones positivas, compromiso, relaciones saludables, sentido de vida y logros.</p><h3>Psicología Cognitiva</h3><p>Estudia pensamiento, memoria, percepción, aprendizaje, razonamiento y toma de decisiones. Aaron Beck y Albert Ellis demostraron que los pensamientos influyen directamente en emociones y comportamientos.</p><h3>Neurociencias</h3><p>Analizan cómo emociones, pensamientos y conductas se relacionan con procesos cerebrales. La felicidad involucra dopamina, serotonina, oxitocina y endorfinas. Richard Davidson destaca la plasticidad neuronal.</p>`
      },
      {
        id: "2.2",
        title: "El Gen de la felicidad",
        learnMoreResources: [
          {
            type: "image",
            title: "¿Qué determina nuestro bienestar?",
            description: "Vista visual de genética, circunstancias, vínculos, neurotransmisores, acciones intencionales y reentrenamiento cognitivo.",
            imageUrl: "Recursos/La_Ciencia_de_la_Felicidad (1).png"
          },
          unitTwoGallery("Biología, entorno y agencia personal", "Química cerebral, proporción 50-10-40, factores sociales y hábitos que favorecen la plasticidad neuronal.", [6, 7, 8, 14])
        ],
        content: `<p>El “gen de la felicidad” hace referencia a la influencia genética y biológica sobre el bienestar humano. Sonja Lyubomirsky plantea que la felicidad depende de factores biológicos, ambientales y sociales.</p><h3>Factores biológicos</h3><p>Incluyen genética, funcionamiento cerebral, hormonas y neurotransmisores. Aproximadamente el 50% de la felicidad se relaciona con predisposición genética.</p><ul><li>Serotonina: bienestar emocional.</li><li>Dopamina: placer y motivación.</li><li>Oxitocina: vínculos afectivos.</li><li>Endorfinas: sensación de bienestar.</li></ul><h3>Factores ambientales y sociales</h3><p>Las condiciones externas influyen, pero no determinan completamente la felicidad. Las relaciones humanas, el apoyo familiar, la amistad, la cultura y la participación comunitaria fortalecen el bienestar.</p>`
      },
      {
        id: "2.3",
        title: "Gráfico de la felicidad",
        learnMoreResources: [
          unitTwoGallery("Curva emocional y satisfacción vital", "Fluctuaciones emocionales y equilibrio entre condiciones objetivas y percepciones personales.", [9, 10])
        ],
        content: `<p>El gráfico de la felicidad representa cómo varían las emociones y los niveles de satisfacción a lo largo del tiempo. Permite comprender que la felicidad no es permanente, sino dinámica y cambiante.</p><h3>Curva emocional</h3><p>Según Daniel Kahneman, las experiencias emocionales tienen picos, momentos de intensidad y recuerdos significativos. Las emociones fluctúan por experiencias personales, relaciones, logros, estrés y acontecimientos cotidianos.</p><h3>Variables de satisfacción</h3><p>Incluyen salud física, relaciones sociales, autoestima, logros personales, estabilidad emocional, trabajo, educación y propósito de vida. Ed Diener afirma que la satisfacción con la vida es un indicador central de felicidad.</p>`
      },
      {
        id: "2.4",
        title: "Medición de la felicidad",
        learnMoreResources: [
          unitTwoGallery("Instrumentos e indicadores de bienestar", "Inventarios, escalas psicológicas, indicadores globales y criterios científicos para estudiar la felicidad.", [11, 12, 15])
        ],
        content: `<p>La felicidad puede evaluarse científicamente mediante instrumentos psicológicos y escalas de bienestar.</p><h3>Inventarios</h3><p>Cuestionarios diseñados para medir emociones, satisfacción y bienestar psicológico, como el Inventario de Felicidad de Oxford, la Escala de Bienestar Psicológico y cuestionarios de satisfacción vital.</p><h3>Escalas psicológicas</h3><p>Ed Diener desarrolló la Escala de Satisfacción con la Vida. Sonja Lyubomirsky creó instrumentos relacionados con bienestar subjetivo y felicidad.</p><h3>Indicadores de bienestar</h3><p>Incluyen salud física, estabilidad emocional, relaciones sociales, productividad, educación y satisfacción personal. Bután implementó el índice de Felicidad Nacional Bruta.</p>`
      }
    ],
    quiz: [
      { q: "Neurotransmisor asociado al placer y motivación:", options: ["Cortisol", "Adrenalina", "Dopamina", "Melatonina"], correct: 2 },
      { q: "Según neurociencias, el cerebro puede modificar sus conexiones mediante:", options: ["Cirugías", "Plasticidad neuronal", "Aislamiento", "Medicamentos"], correct: 1 },
      { q: "Porcentaje de felicidad que depende de genética:", options: ["10%", "100%", "40%", "50%"], correct: 3 },
      { q: "Habla del 'yo que experimenta' y el 'yo que recuerda':", options: ["Daniel Kahneman", "Carl Rogers", "Abraham Maslow", "Albert Ellis"], correct: 0 },
      { q: "País famoso por su índice de Felicidad Nacional Bruta:", options: ["Colombia", "Bután", "Noruega", "Japón"], correct: 1 },
      { q: "La felicidad se considera dinámica porque:", options: ["Nunca cambia", "Varía con experiencias y contextos", "Depende solo del dinero", "No puede estudiarse"], correct: 1 },
      { q: "Las relaciones sociales fuertes suelen asociarse con:", options: ["Mayor bienestar", "Menor apoyo emocional", "Aislamiento", "Ausencia de sentido"], correct: 0 },
      { q: "La serotonina se relaciona con:", options: ["Bienestar emocional", "Memoria mecánica", "Miedo permanente", "Bloqueo físico"], correct: 0 },
      { q: "Las escalas psicológicas sirven para:", options: ["Medir bienestar y satisfacción", "Eliminar emociones", "Reemplazar la reflexión", "Evitar datos"], correct: 0 },
      { q: "Daniel Kahneman diferencia entre:", options: ["Yo que experimenta y yo que recuerda", "Yo físico y yo virtual", "Yo externo y yo oculto", "Yo social y yo financiero"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Robert Waldinger: ¿qué hace una buena vida?",
        description: "Recurso para analizar felicidad, relaciones humanas y bienestar desde un estudio longitudinal.",
        embedUrl: "https://www.youtube.com/embed/8KkKuTCFvzI",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Felicidad y bienestar humano",
        description: "Infografía sobre emociones, pensamiento, procesos biológicos, relaciones, redes neuronales y escalas de bienestar.",
        imageUrl: "Recursos/infografia recursus del modulo.png",
        content: "<p>Este recurso integra los enfoques de la Unidad 2 y muestra cómo el bienestar se relaciona con el cerebro, las emociones, las redes sociales y la medición científica.</p>"
      },
      {
        id: "personal-happiness-curve",
        type: "actividad",
        activityKind: "happinessCurve",
        title: "Curva personal de felicidad",
        description: "Ejercicio interactivo para ubicar momentos de bienestar, estrés, aprendizaje, superación y logro."
      }
    ]
  },
  3: {
    title: "Felicidad y Bienestar Subjetivo",
    desc: "Evaluación personal de la vida, motivación, hábitos positivos y el poder de la inteligencia emocional.",
    theoryNodes: [
      {
        id: "3.1",
        title: "Bienestar subjetivo",
        learnMoreVideo: {
          title: "Aprende más: bienestar y felicidad",
          description: "Video de apoyo proporcionado para ampliar los pilares del bienestar subjetivo en la Unidad 3.",
          embedUrl: "https://www.youtube.com/embed/iyAZbuUlJTU",
          source: "YouTube"
        },
        learnMoreResources: [
          {
            type: "image",
            title: "Pilares de la felicidad y el bienestar subjetivo",
            description: "Mapa visual del bienestar subjetivo, PERMA, propósito, Flow, motivación, hábitos e inteligencia emocional.",
            imageUrl: "Recursos/Pilares_de_felicidad_y_bienestar.png"
          },
          unitThreeGallery("Arquitectura del bienestar subjetivo", "Visión integral del bienestar, sus dimensiones, el modelo PERMA y la relación entre los conceptos centrales.", [1, 2, 3, 4, 13, 15])
        ],
        content: `<p>El bienestar subjetivo hace referencia a la manera como las personas evalúan y perciben su propia vida, considerando emociones, satisfacción personal y equilibrio emocional.</p><p>Ed Diener lo define como la evaluación que las personas hacen de sus vidas, incluyendo juicios cognitivos y respuestas emocionales.</p><ul><li>Incluye satisfacción con la vida, emociones positivas, emociones negativas, percepción de felicidad y calidad de vida.</li><li>Se relaciona con PERMA: emociones positivas, compromiso, relaciones, significado y logros.</li></ul>`
      },
      {
        id: "3.2",
        title: "Flow y experiencia óptima",
        learnMoreResources: [
          unitThreeGallery("Mecánica y canal del Flow", "Características de la experiencia óptima, equilibrio entre reto y habilidad y beneficios para el aprendizaje y la creatividad.", [5, 6])
        ],
        content: `<p>El Flow fue desarrollado por Mihaly Csikszentmihalyi y se define como un estado de concentración profunda y disfrute total durante una actividad.</p><ul><li>Concentración absoluta.</li><li>Equilibrio entre reto y habilidad.</li><li>Pérdida de noción del tiempo.</li><li>Motivación intrínseca.</li><li>Sensación de control.</li></ul><p>Favorece creatividad, aprendizaje, autoestima, motivación y felicidad.</p>`
      },
      {
        id: "3.3",
        title: "Motivación y propósito de vida",
        learnMoreResources: [
          unitThreeGallery("Motivación y brújula existencial", "Comparación entre motivación intrínseca y extrínseca, y el propósito como fuente de dirección, resiliencia y sentido.", [7, 8])
        ],
        content: `<p>La motivación es la fuerza interna que impulsa a las personas a actuar, alcanzar metas y satisfacer necesidades. Herbert Petri la define como procesos que activan, dirigen y mantienen la conducta.</p><h3>Tipos de motivación</h3><p>La motivación intrínseca nace de la satisfacción personal. La motivación extrínseca depende de recompensas externas.</p><h3>Propósito de vida</h3><p>Viktor Frankl afirma: “Quien tiene un porqué para vivir, puede soportar casi cualquier cómo”. El propósito orienta decisiones, fortalece resiliencia, aumenta motivación y mejora bienestar psicológico.</p>`
      },
      {
        id: "3.4",
        title: "Hábitos de felicidad e inteligencia emocional",
        learnMoreResources: [
          {
            type: "image",
            title: "Los cinco pilares del bienestar y la felicidad",
            description: "Síntesis visual de Flow, propósito, hábitos positivos e inteligencia emocional.",
            imageUrl: "Recursos/Los_5_Pilares_del_Bienestar.png"
          },
          unitThreeGallery("Hábitos e inteligencia emocional", "Prácticas intencionales, auditoría de hábitos, componentes emocionales y aplicación del bienestar consciente.", [9, 10, 11, 12, 14])
        ],
        content: `<h3>Hábitos de felicidad</h3><p>Son acciones repetidas que favorecen bienestar emocional y calidad de vida. Sonja Lyubomirsky sostiene que la felicidad puede cultivarse mediante actividades intencionales.</p><ul><li>Gratitud, optimismo, actividad física, relaciones positivas, meditación, altruismo y buen descanso.</li></ul><h3>Inteligencia emocional</h3><p>Es la capacidad para reconocer, comprender y manejar emociones propias y ajenas. Daniel Goleman afirma que el éxito personal depende tanto de habilidades emocionales como de capacidades intelectuales.</p><ul><li>Componentes: autoconocimiento, autorregulación, motivación, empatía y habilidades sociales.</li></ul>`
      }
    ],
    quiz: [
      { q: "El concepto de 'Flow' fue desarrollado por:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Viktor Frankl", "Ed Diener"], correct: 1 },
      { q: "Motivación que nace de la satisfacción personal:", options: ["Extrínseca", "Laboral", "Intrínseca", "Económica"], correct: 2 },
      { q: "Autor de: 'Quien tiene un porqué para vivir...':", options: ["Martin Seligman", "Viktor Frankl", "Carl Rogers", "Tal Ben-Shahar"], correct: 1 },
      { q: "Popularizó la Inteligencia Emocional:", options: ["Daniel Goleman", "Aaron Beck", "Albert Ellis", "Ed Diener"], correct: 0 },
      { q: "NO es un componente de la inteligencia emocional:", options: ["Empatía", "Autorregulación", "Autoconocimiento", "Memoria fotográfica"], correct: 3 },
      { q: "El bienestar subjetivo fue trabajado por:", options: ["Ed Diener", "Nonaka", "Schumpeter", "Sveiby"], correct: 0 },
      { q: "La motivación intrínseca nace de:", options: ["Satisfacción personal", "Premios externos únicamente", "Castigos", "Obligación sin sentido"], correct: 0 },
      { q: "Un hábito positivo puede ser:", options: ["Gratitud diaria", "Aislamiento total", "Queja constante", "Evitar metas"], correct: 0 },
      { q: "La inteligencia emocional ayuda a:", options: ["Reconocer y manejar emociones", "Ignorar relaciones", "Evitar empatía", "Eliminar el autocontrol"], correct: 0 },
      { q: "El propósito de vida se relaciona con:", options: ["Sentido y motivación", "Rutina sin metas", "Desinterés", "Ausencia de valores"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Mihaly Csikszentmihalyi: Flow, el secreto de la felicidad",
        description: "Video para comprender experiencia óptima, concentración, reto y motivación intrínseca.",
        embedUrl: "https://www.youtube.com/embed/fXIeFJCqsPs",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Pilares de la felicidad humana",
        description: "Infografía integradora sobre bienestar subjetivo, Flow, motivación, hábitos positivos e inteligencia emocional.",
        imageUrl: "Recursos/infografia recursus del modulo unidad 3.png",
        content: "<p>Esta infografía resume los cinco ejes principales de la Unidad 3 y muestra prácticas conscientes para fortalecer el bienestar.</p>"
      },
      {
        id: "positive-habits-plan",
        type: "actividad",
        activityKind: "positiveHabitsPlan",
        title: "Plan de hábitos positivos",
        description: "Actividad interactiva para diseñar una práctica semanal de bienestar subjetivo."
      }
    ]
  },
  4: {
    title: "Gestión del Conocimiento",
    desc: "Cómo las organizaciones crean y comparten saberes para generar innovación.",
    theoryNodes: [
      { id: "4.1", title: "Tipos de Conocimiento", content: "<p>Tácito (experiencia) y Explícito (documentado).</p>" },
      { id: "4.2", title: "Modelo SECI", content: "<p>Socialización, Exteriorización, Combinación, Interiorización (Nonaka y Takeuchi).</p>" },
      { id: "4.3", title: "Aprendizaje Organizacional", content: "<p>Organizaciones Inteligentes (Peter Senge).</p>" },
      { id: "4.4", title: "Transformación Digital", content: "<p>Integrar TIC para optimizar procesos y cambiar la cultura.</p>" }
    ],
    quiz: [
      { q: "El conocimiento Tácito se caracteriza por:", options: ["Estar en manuales", "Ser fácil de documentar", "Ser basado en la experiencia", "Bases de datos"], correct: 2 },
      { q: "El modelo SECI fue creado por:", options: ["Peter Senge", "Nonaka y Takeuchi", "Joseph Schumpeter", "Karl Wiig"], correct: 1 },
      { q: "Transformar Explícito a Explícito se llama:", options: ["Socialización", "Combinación", "Interiorización", "Exteriorización"], correct: 1 },
      { q: "Autor de 'Organizaciones Inteligentes':", options: ["Peter Senge", "Sveiby", "Nonaka", "Takeuchi"], correct: 0 },
      { q: "La transformación digital requiere:", options: ["Comprar PC", "Transformar cultura con TIC", "Eliminar humanos", "Imprimir más"], correct: 1 }
    ]
  },
  5: {
    title: "Capitales Organizacionales y TIC",
    desc: "El valor de las personas, las relaciones y la tecnología.",
    theoryNodes: [
      { id: "5.1", title: "Capital Humano", content: "<p>Habilidades, experiencias y motivación de las personas.</p>" },
      { id: "5.2", title: "Capital Intelectual", content: "<p>Valor de los activos intangibles (patentes, manuales).</p>" },
      { id: "5.3", title: "Capital Relacional", content: "<p>Vínculos con el entorno (estudiantes, aliados).</p>" },
      { id: "5.4", title: "TIC", content: "<p>Facilitan el aprendizaje colaborativo (plataformas LMS).</p>" }
    ],
    quiz: [
      { q: "El capital humano representa:", options: ["Dinero", "Habilidades y experiencia", "Computadores", "Manuales"], correct: 1 },
      { q: "El capital relacional se refiere a:", options: ["Vínculos y redes", "Patentes", "Bases numéricas", "Software"], correct: 0 },
      { q: "Las TIC sirven para:", options: ["Aislar trabajadores", "Facilitar aprendizaje", "Eliminar creatividad", "Reducir inteligencia"], correct: 1 },
      { q: "El conocimiento documentado forma parte del:", options: ["Capital social", "Capital relacional", "Capital intelectual", "Capital emocional"], correct: 2 },
      { q: "¿Cuál es un recurso de transformación digital?", options: ["Ábaco", "LMS y simuladores", "Tiza", "Fotocopias"], correct: 1 }
    ]
  }
};

const MAX_MODULES = 3;
const companions = [
  { id: "robot", art: `<span class="animated-companion avatar-robot"><img src="Recursos/robot.png?v=2" alt="Robot"><span class="blink-layer"></span><span class="holo-ring"></span></span>`, name: "Robot", description: "Analítico, curioso y preciso" },
  { id: "explorador", art: `<span class="animated-companion avatar-explorador"><img src="Recursos/aventurero.png?v=2" alt="Explorador"><span class="blink-layer"></span><span class="compass-spin">✦</span></span>`, name: "Explorador", description: "Valiente, atento y perseverante" },
  { id: "creativo", art: `<span class="animated-companion avatar-creativo"><img src="Recursos/creativo.png?v=2" alt="Creativo"><span class="blink-layer"></span><span class="creative-shape one"></span><span class="creative-shape two"></span></span>`, name: "Creativo", description: "Imaginativo, flexible y expresivo" },
  { id: "mascota", art: `<span class="animated-companion avatar-mascota"><img src="Recursos/mascota.png?v=2" alt="Mascota virtual"><span class="blink-layer"></span><span class="pet-mark one">♥</span><span class="pet-mark two">•</span></span>`, name: "Mascota virtual", description: "Cercana, alegre y motivadora" }
];

const moduleCompanionMessages = {
  1: "estoy contigo en esta primera estación. Identifica fortalezas, emociones positivas y el modelo PERMA antes de responder.",
  2: "muy bien, avanzamos. Observa cómo la felicidad combina biología, ambiente, relaciones y actividades intencionales.",
  3: "ya tienes base para conectar bienestar subjetivo, Flow, hábitos positivos y propósito de vida."
};

const reinforcementData = {
  1: {
    title: "Parejas de Psicología Positiva",
    sprite: "Recursos/activity-sprites/unit-1-concepts.png",
    pairs: [
      { concept: "PERMA", answer: "Un programa de bienestar integra experiencias agradables, involucramiento, vínculos, sentido vital y percepción de logro." },
      { concept: "Flow", answer: "Una estudiante pierde la noción del tiempo mientras resuelve un reto exigente que corresponde con sus habilidades." },
      { concept: "Comunicación asertiva", answer: "Ante un desacuerdo, una persona expresa su postura con claridad, escucha la otra perspectiva y establece límites respetuosos." },
      { concept: "Fortalezas humanas", answer: "Una intervención identifica recursos personales estables y enseña a utilizarlos deliberadamente frente a nuevos desafíos." },
      { concept: "Gratitud", answer: "Una práctica dirige la atención hacia beneficios recibidos, reconoce su valor y la contribución de otras personas." },
      { concept: "Resiliencia", answer: "Después de un fracaso académico, la persona reorganiza estrategias, obtiene aprendizaje y retoma sus metas." }
    ]
  },
  2: {
    title: "Factores de la felicidad",
    sprite: "Recursos/activity-sprites/unit-2-concepts.png",
    pairs: [
      { concept: "Dopamina", answer: "Su liberación participa en la anticipación de recompensas y favorece la repetición de conductas orientadas a una meta." },
      { concept: "Plasticidad neuronal", answer: "La práctica sostenida modifica circuitos cerebrales y permite consolidar nuevas formas de responder y aprender." },
      { concept: "Relaciones sociales", answer: "El apoyo percibido, la pertenencia y los vínculos significativos actúan como factores protectores ante el estrés." },
      { concept: "Bienestar subjetivo", answer: "Integra la valoración cognitiva de la propia vida con la frecuencia relativa de afectos positivos y negativos." },
      { concept: "Predisposición genética", answer: "Explica una proporción de las diferencias individuales, pero interactúa con el contexto y las acciones intencionales." },
      { concept: "Curva emocional", answer: "Permite analizar variaciones del estado afectivo antes, durante y después de acontecimientos significativos." }
    ]
  },
  3: {
    title: "Bienestar y hábitos",
    sprite: "Recursos/activity-sprites/unit-3-concepts.png",
    pairs: [
      { concept: "Motivación intrínseca", answer: "La conducta se mantiene por el interés y la satisfacción inherentes a la tarea, incluso sin una recompensa externa." },
      { concept: "Inteligencia emocional", answer: "Supone percibir información afectiva, comprender sus causas y regular la respuesta sin negar lo que se siente." },
      { concept: "Propósito de vida", answer: "Organiza decisiones presentes alrededor de una dirección significativa que trasciende objetivos inmediatos." },
      { concept: "Hábito positivo", answer: "Una señal estable activa una conducta repetida cuya consecuencia facilita que vuelva a realizarse en el futuro." },
      { concept: "Flow", answer: "La atención se absorbe por completo cuando las demandas de la tarea y las capacidades disponibles se encuentran equilibradas." },
      { concept: "Empatía", answer: "Requiere comprender el marco de referencia ajeno y responder de manera sensible sin confundirlo con la experiencia propia." }
    ]
  }
};

const reviewActivitiesData = {
  1: {
    trueFalse: [
      { text: "La psicología positiva estudia únicamente enfermedades mentales.", answer: false },
      { text: "Martin Seligman es uno de los principales autores de la psicología positiva.", answer: true },
      { text: "Las emociones positivas favorecen el bienestar.", answer: true },
      { text: "El modelo PERMA reúne cinco dimensiones del bienestar.", answer: true }
    ],
    fill: [
      { text: "La psicología positiva busca desarrollar ______ humanas.", answer: "fortalezas" },
      { text: "El bienestar emocional mejora la ______ de vida.", answer: "calidad" },
      { text: "El modelo de Seligman se resume con las letras ______.", answer: "perma" },
      { text: "La concentración profunda entre reto y habilidad se llama ______.", answer: "flow" }
    ],
    distractors: ["rutina", "memoria", "competencia"]
  },
  2: {
    trueFalse: [
      { text: "La felicidad puede estudiarse desde la psicología, la cognición y las neurociencias.", answer: true },
      { text: "Las relaciones sociales no influyen en el bienestar.", answer: false },
      { text: "La dopamina se asocia con motivación y placer.", answer: true },
      { text: "La predisposición genética determina por completo la felicidad.", answer: false }
    ],
    fill: [
      { text: "La capacidad del cerebro para cambiar conexiones se llama ______ neuronal.", answer: "plasticidad" },
      { text: "El yo que experimenta y el yo que recuerda fueron estudiados por Daniel ______.", answer: "kahneman" },
      { text: "El neurotransmisor relacionado con placer y motivación es la ______.", answer: "dopamina" },
      { text: "La valoración personal de la vida se denomina ______ subjetivo.", answer: "bienestar" }
    ],
    distractors: ["adrenalina", "conducta", "costumbre"]
  },
  3: {
    trueFalse: [
      { text: "El Flow requiere equilibrio entre reto y habilidad.", answer: true },
      { text: "La inteligencia emocional implica ignorar las emociones.", answer: false },
      { text: "El propósito de vida se relaciona con sentido y motivación.", answer: true },
      { text: "Un hábito positivo se consolida mediante práctica intencional y repetida.", answer: true }
    ],
    fill: [
      { text: "La motivación que nace de la satisfacción personal es ______.", answer: "intrínseca" },
      { text: "Daniel ______ popularizó la inteligencia emocional.", answer: "goleman" },
      { text: "El sentido que orienta metas y decisiones se llama ______ de vida.", answer: "propósito" },
      { text: "El estado de concentración plena se conoce como ______.", answer: "flow" }
    ],
    distractors: ["impulso", "talento", "recuerdo"]
  }
};

// ==========================================
// 2. ESTADO Y SUPABASE
// ==========================================
const SUPABASE_URL = "https://bxxudrezbaxrmwekeyoe.supabase.co";
const SUPABASE_KEY = "sb_publishable_SnBuzPXugGRag9uAP4NbpQ_HzPhP6BK";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = JSON.parse(localStorage.getItem("fgc_currentUser")) || null;
let highestUnlocked = 1;
let currentModuleId = 1;
let selectedCompanion = null;
let isLoginMode = true;
let viewedTheoryByModule = {};
let viewedResourcesByModule = {};
let activityProgressByModule = {};
let quizResultsByModule = {};
let certificates = [];
let currentFinalQuestions = [];
let reinforcementCards = [];
let flippedReinforcementCards = [];
let matchedReinforcementPairs = 0;
let reinforcementAttempts = 0;
let reinforcementStreak = 0;
let selectedFillWord = null;
let activeTheoryResources = [];
const modalFocusStack = [];

// ==========================================
// 3. VISTAS Y RENDERIZADO BÁSICO
// ==========================================
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  const nextView = document.getElementById(viewId);
  nextView.classList.add('is-active');
  resetAccessibilityGuide(viewId);
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.setAttribute("href", `#${viewId}`);
  window.scrollTo(0, 0);
  nextView.setAttribute("tabindex", "-1");
  if (nextView.matches("main")) {
    window.setTimeout(() => nextView.focus({ preventScroll: true }), 0);
  }
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("is-visible");
  const liveRegion = document.getElementById("liveRegion");
  if (liveRegion) liveRegion.textContent = msg;
  setTimeout(() => t.classList.remove("is-visible"), 3500);
}

function getUserStorageSuffix() {
  const raw = currentUser?.id || currentUser?.email || "local";
  return encodeURIComponent(String(raw).toLowerCase());
}

function userKey(name) {
  return `${name}_${getUserStorageSuffix()}`;
}

function loadUserProgress() {
  selectedCompanion = companions.find(c => c.id === localStorage.getItem(userKey("fgc_selected_companion"))) || null;
  highestUnlocked = Math.min(parseInt(localStorage.getItem(userKey("fgc_highest_unlocked"))) || 1, MAX_MODULES);
  viewedTheoryByModule = JSON.parse(localStorage.getItem(userKey("fgc_viewed_theory")) || "{}");
  viewedResourcesByModule = JSON.parse(localStorage.getItem(userKey("fgc_viewed_resources")) || "{}");
  activityProgressByModule = JSON.parse(localStorage.getItem(userKey("fgc_activity_progress")) || "{}");
  quizResultsByModule = JSON.parse(localStorage.getItem(userKey("fgc_quiz_results")) || "{}");
  certificates = JSON.parse(localStorage.getItem(userKey("fgc_certificates")) || "[]");
}

function saveUserProgress() {
  localStorage.setItem(userKey("fgc_highest_unlocked"), highestUnlocked);
  localStorage.setItem(userKey("fgc_viewed_theory"), JSON.stringify(viewedTheoryByModule));
  localStorage.setItem(userKey("fgc_viewed_resources"), JSON.stringify(viewedResourcesByModule));
  localStorage.setItem(userKey("fgc_activity_progress"), JSON.stringify(activityProgressByModule));
  localStorage.setItem(userKey("fgc_quiz_results"), JSON.stringify(quizResultsByModule));
  localStorage.setItem(userKey("fgc_certificates"), JSON.stringify(certificates));
}

function getStudentName() {
  return currentUser?.name?.trim() || "estudiante";
}

function getCompanionMessage(moduleId) {
  const message = moduleCompanionMessages[moduleId] || "sigue avanzando. Lee la teoría, realiza la actividad y completa la evaluación.";
  return `Hola ${getStudentName()}, ${message}`;
}

function getViewedTheorySet(moduleId) {
  return new Set(viewedTheoryByModule[moduleId] || []);
}

function saveViewedTheory(moduleId, nodeId) {
  const viewed = getViewedTheorySet(moduleId);
  viewed.add(nodeId);
  viewedTheoryByModule[moduleId] = [...viewed];
  saveUserProgress();
}

function hasViewedAllTheory(moduleId) {
  const nodes = courseData[moduleId]?.theoryNodes || [];
  const viewed = getViewedTheorySet(moduleId);
  return nodes.length > 0 && nodes.every(node => viewed.has(node.id));
}

function getTheoryProgress(moduleId) {
  const nodes = courseData[moduleId]?.theoryNodes || [];
  const total = nodes.length;
  const viewedSet = getViewedTheorySet(moduleId);
  const viewed = nodes.filter(node => viewedSet.has(node.id)).length;
  return { viewed, total };
}

function getRequiredResourceItems(moduleId) {
  return (courseData[moduleId]?.media || []).filter(item => item.type !== "video");
}

function getViewedResourceSet(moduleId) {
  return new Set(viewedResourcesByModule[moduleId] || []);
}

function saveViewedResource(moduleId, mediaIndex) {
  const viewed = getViewedResourceSet(moduleId);
  viewed.add(String(mediaIndex));
  viewedResourcesByModule[moduleId] = [...viewed];
  saveUserProgress();
}

function hasViewedAllResources(moduleId) {
  const required = getRequiredResourceItems(moduleId);
  const mediaItems = courseData[moduleId]?.media || [];
  const viewed = getViewedResourceSet(moduleId);
  return required.length === 0 || required.every(item => viewed.has(String(mediaItems.indexOf(item))));
}

function getResourceProgress(moduleId) {
  const required = getRequiredResourceItems(moduleId);
  const mediaItems = courseData[moduleId]?.media || [];
  const viewed = getViewedResourceSet(moduleId);
  const viewedCount = required.filter(item => viewed.has(String(mediaItems.indexOf(item)))).length;
  return { viewed: viewedCount, total: required.length };
}

function markActivityComplete(moduleId, activityName) {
  activityProgressByModule[moduleId] = {
    ...(activityProgressByModule[moduleId] || {}),
    [activityName]: true
  };
  saveUserProgress();
  updateModuleLocks();
  renderQuizLaunch();
}

function clearActivityProgress(moduleId, activityName) {
  activityProgressByModule[moduleId] = {
    ...(activityProgressByModule[moduleId] || {}),
    [activityName]: false
  };
  if (activityName === "review") {
    delete activityProgressByModule[moduleId].reviewAnswers;
  }
  saveUserProgress();
  updateModuleLocks();
  renderQuizLaunch();
}

function hasCompletedReviewActivities(moduleId) {
  const progress = activityProgressByModule[moduleId] || {};
  return !!progress.memory && !!progress.review;
}

function hasUnlockedEvaluation(moduleId) {
  return hasViewedAllTheory(moduleId) && hasViewedAllResources(moduleId) && hasCompletedReviewActivities(moduleId);
}

function getModuleCompletion(moduleId) {
  const theory = getTheoryProgress(moduleId);
  const resources = getResourceProgress(moduleId);
  const activity = activityProgressByModule[moduleId] || {};
  const evaluationDone = !!quizResultsByModule[moduleId]?.passed;
  const total = theory.total + resources.total + 3;
  const complete = theory.viewed + resources.viewed + (activity.memory ? 1 : 0) + (activity.review ? 1 : 0) + (evaluationDone ? 1 : 0);
  return {
    percent: total ? Math.min(100, Math.round((complete / total) * 100)) : 0,
    theoryDone: hasViewedAllTheory(moduleId),
    resourcesDone: hasViewedAllResources(moduleId),
    activitiesDone: hasCompletedReviewActivities(moduleId),
    evaluationDone
  };
}

function setHeaderIdentity() {
  const student = document.getElementById("headerStudentName");
  const greeting = document.getElementById("homeGreeting");
  const firstName = getStudentName().split(/\s+/)[0];
  if (student) student.textContent = getStudentName();
  if (greeting) greeting.textContent = `Hola, ${firstName}. Tu recorrido continúa aquí.`;
}

function renderHomeProgress() {
  const progress = Array.from({ length: MAX_MODULES }, (_, index) => getModuleCompletion(index + 1));
  const overall = Math.round(progress.reduce((sum, item) => sum + item.percent, 0) / MAX_MODULES);
  const completedUnits = progress.filter(item => item.evaluationDone).length;
  const value = document.getElementById("homeProgressValue");
  const bar = document.getElementById("homeProgressBar");
  const track = document.getElementById("homeProgressTrack");
  const text = document.getElementById("homeProgressText");
  const continueButton = document.getElementById("btnContinueJourney");

  if (value) value.textContent = `${overall}%`;
  if (bar) bar.style.width = `${overall}%`;
  if (track) track.setAttribute("aria-valuenow", String(overall));
  if (text) {
    text.textContent = !selectedCompanion
      ? "Selecciona tu acompañante para iniciar el recorrido."
      : completedUnits === MAX_MODULES
        ? "Has aprobado las tres unidades. La evaluación final ya está disponible."
        : `${completedUnits} de ${MAX_MODULES} unidades aprobadas. Tu siguiente destino es la Unidad ${highestUnlocked}.`;
  }
  if (continueButton) {
    continueButton.disabled = !selectedCompanion;
    continueButton.textContent = !selectedCompanion
      ? "Elige un acompañante"
      : completedUnits === MAX_MODULES ? "Ir a la evaluación final" : `Continuar con Unidad ${highestUnlocked}`;
  }
}

function renderAvatars() {
  document.getElementById("companionGrid").innerHTML = companions.map(c => `
    <button type="button" class="companion-card ${selectedCompanion?.id === c.id ? 'is-selected' : ''}" onclick="selectCompanion('${c.id}')" id="card-${c.id}" aria-pressed="${selectedCompanion?.id === c.id}">
      <span class="companion-check" aria-hidden="true">✓</span>
      <div class="companion-art">${c.art}</div>
      <span class="companion-name">${c.name}</span>
      <small>${c.description}</small>
    </button>
  `).join("");
  renderSelectedCompanion();
  renderHomeProgress();
}

window.selectCompanion = function(id) {
  selectedCompanion = companions.find(c => c.id === id);
  localStorage.setItem(userKey("fgc_selected_companion"), id);
  document.querySelectorAll('.companion-card').forEach(c => {
    c.classList.remove('is-selected');
    c.setAttribute("aria-pressed", "false");
  });
  const selectedCard = document.getElementById(`card-${id}`);
  selectedCard.classList.add('is-selected');
  selectedCard.setAttribute("aria-pressed", "true");
  renderSelectedCompanion();
  renderMap();
  showToast(`${selectedCompanion.name} será tu acompañante.`);
}

function renderSelectedCompanion() {
  const preview = document.getElementById("selectedPreview");
  const name = document.getElementById("selectedName");
  if (!selectedCompanion) {
    preview.innerHTML = '<span class="preview-placeholder" aria-hidden="true">+</span>';
    name.textContent = "Aún no has elegido";
    return;
  }
  preview.innerHTML = selectedCompanion.art;
  name.textContent = `${selectedCompanion.name} te acompañará durante el recorrido`;
}

function getMapGuideMessage() {
  if (!selectedCompanion) return "";
  if (highestUnlocked === 1) return "Listo para iniciar. Entra al Módulo 1 y construye tus primeras bases de felicidad.";
  if (highestUnlocked === 2) return "¡Buen avance! El Módulo 2 ya está abierto para estudiar la felicidad desde ciencia y práctica.";
  return "Vas muy bien. Continúa con el Módulo 3 y fortalece tu bienestar subjetivo.";
}

function renderMap() {
  let html = "";
  for (let i = 1; i <= MAX_MODULES; i++) {
    const isUnlocked = i <= highestUnlocked;
    const isCurrent = i === highestUnlocked;
    const completion = getModuleCompletion(i);
    const status = completion.evaluationDone ? "Completada" : isUnlocked ? `${completion.percent}% completado` : "Bloqueada";
    html += `
      <button type="button" class="course-unit-node ${isUnlocked ? 'is-open' : 'is-locked'} ${isCurrent ? 'is-current' : ''} ${completion.evaluationDone ? 'is-complete' : ''}" onclick="openModule(${i})" aria-disabled="${!isUnlocked}" aria-label="Unidad ${i}: ${isUnlocked ? courseData[i].title : 'bloqueada'}">
        <span class="course-orb"><strong>${isUnlocked ? i : '🔒'}</strong></span>
        <span class="course-unit-label">Unidad ${i}</span>
        <strong class="course-unit-title">${courseData[i].title}</strong>
        <small>${status}</small>
      </button>
    `;
  }
  if (selectedCompanion) {
    html += `
      <aside class="map-guide-bubble">
        <div class="map-guide-avatar">${selectedCompanion.art}</div>
        <p>${getMapGuideMessage()}</p>
      </aside>
    `;
  }
  document.getElementById("unitTrack").innerHTML = html;
  renderHomeProgress();
  renderFinalEvaluationPanel();
}

// ==========================================
// 4. MÓDULOS Y EVALUACIÓN
// ==========================================
window.openModule = function(id) {
  if (id > highestUnlocked) return showToast("Debes aprobar el módulo anterior primero.");
  if (!selectedCompanion) return showToast("Por favor, selecciona un acompañante virtual antes de iniciar.");
  
  currentModuleId = id;
  const modData = courseData[id];
  if (!modData || id > MAX_MODULES) return showToast("Este módulo estará disponible en una próxima fase.");
  
  // Llenar info del módulo
  document.getElementById("moduleCompanionArt").innerHTML = selectedCompanion.art;
  document.getElementById("modKicker").textContent = `Módulo ${id}`;
  document.getElementById("modTitle").textContent = modData.title;
  document.getElementById("modDesc").textContent = modData.desc;
  document.getElementById("companionSpeech").textContent = getCompanionMessage(id);
  
  // Mapa Mental
  const viewedTheory = getViewedTheorySet(id);
  document.getElementById("mindmapContainer").innerHTML = modData.theoryNodes.map(node => `
    <button type="button" class="mindmap-node ${viewedTheory.has(node.id) ? 'is-viewed' : ''}" id="theory-card-${node.id.replace('.', '-')}" onclick="openTheory('${id}', '${node.id}')">
      <span class="theory-node-number">${node.id}</span>
      <span class="theory-node-status">${viewedTheory.has(node.id) ? 'Revisado' : 'Pendiente'}</span>
      <h3>${node.title}</h3>
      <p>${viewedTheory.has(node.id) ? 'Teoría revisada. Puedes volver a abrirla.' : 'Haz clic para leer la teoría oficial...'}</p>
    </button>
  `).join("");

  renderModuleMedia(modData.media || []);
  renderReinforcement(reinforcementData[id]);
  renderReviewActivities(reviewActivitiesData[id]);
  renderQuizLaunch();
  updateModuleLocks();

  switchView("moduleView");
}

function updateModuleLocks() {
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const resourcesUnlocked = hasViewedAllTheory(currentModuleId);
  const activitiesUnlocked = resourcesUnlocked && hasViewedAllResources(currentModuleId);
  const evaluationUnlocked = hasUnlockedEvaluation(currentModuleId);
  const message = `Avance requerido: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.`;

  const resourcesSection = document.getElementById("moduleResourcesSection");
  const reinforcementSection = document.getElementById("reinforcementSection");
  const quizSection = document.getElementById("quizSection");

  resourcesSection.classList.toggle("is-locked", !resourcesUnlocked);
  resourcesSection.dataset.lockMessage = `Primero revisa toda la teoría: ${theory.viewed} de ${theory.total} tarjetas vistas.`;

  reinforcementSection.classList.toggle("is-locked", !activitiesUnlocked);
  reinforcementSection.dataset.lockMessage = `Primero abre los recursos e infografías: ${resources.viewed} de ${resources.total} vistos.`;

  quizSection.classList.toggle("is-locked", !evaluationUnlocked);
  quizSection.dataset.lockMessage = message;

  if (!evaluationUnlocked) {
    document.getElementById("quizContainer").innerHTML = `<div class="locked-message">${message}</div>`;
  }
  renderModuleProgress();
}

function renderModuleProgress() {
  const completion = getModuleCompletion(currentModuleId);
  const value = document.getElementById("moduleProgressValue");
  const bar = document.getElementById("moduleProgressBar");
  const track = document.getElementById("moduleProgressTrack");
  const stages = document.getElementById("moduleStageTrack");
  const stageData = [
    { label: "Teoría", done: completion.theoryDone, active: !completion.theoryDone },
    { label: "Recursos", done: completion.resourcesDone, active: completion.theoryDone && !completion.resourcesDone },
    { label: "Práctica", done: completion.activitiesDone, active: completion.resourcesDone && !completion.activitiesDone },
    { label: "Evaluación", done: completion.evaluationDone, active: completion.activitiesDone && !completion.evaluationDone }
  ];

  if (value) value.textContent = `${completion.percent}%`;
  if (bar) bar.style.width = `${completion.percent}%`;
  if (track) track.setAttribute("aria-valuenow", String(completion.percent));
  if (stages) {
    stages.innerHTML = stageData.map((stage, index) => `
      <span class="stage-step ${stage.done ? 'is-done' : ''} ${stage.active ? 'is-active' : ''}">
        <b>${stage.done ? '✓' : index + 1}</b>${stage.label}
      </span>
    `).join("");
  }
}

function renderQuizLaunch() {
  const unlocked = hasUnlockedEvaluation(currentModuleId);
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const result = quizResultsByModule[currentModuleId];
  if (unlocked && result?.passed) {
    document.getElementById("quizContainer").innerHTML = `
      <div class="evaluation-summary ${result.score === 100 ? 'is-perfect' : ''}">
        <strong>Evaluación Unidad ${currentModuleId} completada: ${result.score}%</strong>
        <span>${result.score === 100 ? 'Felicidades, lograste el 100%.' : 'Aprobaste. Puedes intentar subir al 100%.'}</span>
        <div class="summary-actions">
          <button type="button" class="ghost-button" onclick="reviewStoredModuleEvaluation()">Ver respuestas guardadas</button>
          ${result.score < 100 ? `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>` : ''}
        </div>
      </div>
    `;
    return;
  }
  document.getElementById("quizContainer").innerHTML = unlocked
    ? `<button type="button" class="start-button evaluation-launch" onclick="startModuleEvaluation()">Evaluación Unidad ${currentModuleId}</button>`
    : `<div class="locked-message">Para desbloquear: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.</div>`;
}

window.startModuleEvaluation = function(forceRetry = false) {
  if (!hasUnlockedEvaluation(currentModuleId)) return updateModuleLocks();
  const result = quizResultsByModule[currentModuleId];
  if (result?.passed && !forceRetry) return reviewStoredModuleEvaluation();
  openQuizModal(`Evaluación Unidad ${currentModuleId}`, `Unidad ${currentModuleId}`);
  renderQuizForm(courseData[currentModuleId].quiz, "submitQuiz()", "Calificar evaluación", "quizModalBody");
}

function renderQuizForm(questions, submitAction, buttonText, targetId = "quizContainer", storedAnswers = null, disabled = false) {
  let quizHtml = `<form id="quizForm" class="quiz-form">`;
  questions.forEach((q, idx) => {
    quizHtml += `
      <div class="quiz-question">
        <h4>${idx + 1}. ${q.q}</h4>
        ${q.options.map((opt, optIdx) => `
          <label class="quiz-option ${storedAnswers?.[idx] === optIdx ? 'is-selected-answer' : ''}">
            <input type="radio" name="q${idx}" value="${optIdx}" ${storedAnswers?.[idx] === optIdx ? 'checked' : ''} ${disabled ? 'disabled' : ''} required> ${opt}
          </label>
        `).join("")}
      </div>`;
  });
  quizHtml += disabled ? `</form>` : `<button type="button" class="start-button" onclick="${submitAction}" style="width:100%; margin-top:10px;">${buttonText}</button></form>`;
  document.getElementById(targetId).innerHTML = quizHtml;
}

window.reviewStoredModuleEvaluation = function() {
  const result = quizResultsByModule[currentModuleId];
  if (!result) return startModuleEvaluation(true);
  openQuizModal(`Evaluación Unidad ${currentModuleId}`, `Resultado ${result.score}%`);
  const intro = `
    <div class="evaluation-summary ${result.score === 100 ? 'is-perfect' : ''}">
      <strong>${result.score === 100 ? 'Felicidades, completaste la evaluación con 100%.' : 'Evaluación aprobada.'}</strong>
      <span>Resultado guardado: ${result.correctas} de ${result.total} respuestas correctas (${result.score}%).</span>
      ${result.score < 100 ? `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>` : ''}
    </div>
  `;
  renderQuizForm(courseData[currentModuleId].quiz, "submitQuiz()", "Calificar evaluación", "quizModalBody", result.answers, true);
  document.getElementById("quizModalBody").insertAdjacentHTML("afterbegin", intro);
}

function renderModuleMedia(mediaItems) {
  const container = document.getElementById("mediaContainer");
  if (!container) return;
  const visibleItems = mediaItems.filter(item => item.type !== "video");
  const viewedResources = getViewedResourceSet(currentModuleId);

  container.innerHTML = visibleItems.map((item) => {
    const originalIndex = mediaItems.indexOf(item);
    const icon = item.type === "infografia" ? "▦" : "✦";
    const isCompleted = item.type === "actividad"
      ? !!activityProgressByModule[currentModuleId]?.[item.activityKind]
      : viewedResources.has(String(originalIndex));
    const actionLabel = item.type === "actividad"
      ? isCompleted ? "Actividad guardada · Editar" : "Realizar actividad"
      : isCompleted ? "Revisado · Volver a abrir" : "Ver contenido completo";

    return `
      <button class="media-card ${isCompleted ? 'is-completed' : ''}" type="button" onclick="openResource(${currentModuleId}, ${originalIndex})">
        ${isCompleted ? '<span class="media-complete-badge">✓ Completado</span>' : ''}
        <span class="media-icon">${icon}</span>
        <span class="media-type">${item.type}</span>
        <strong>${item.title}</strong>
        <small>${item.description}</small>
        <em>${actionLabel}</em>
      </button>
    `;
  }).join("");
}

window.openResource = function(modId, mediaIndex) {
  const item = courseData[modId]?.media?.[mediaIndex];
  if (!item) return;
  if (item.type === "video") return openVideo(modId, mediaIndex);
  if (item.activityKind === "gratitudeJournal") return openGratitudeJournal(modId, mediaIndex, item);
  if (item.activityKind === "happinessCurve") return openHappinessCurve(modId, mediaIndex, item);
  if (item.activityKind === "positiveHabitsPlan") return openPositiveHabitsPlan(modId, mediaIndex, item);
  saveViewedResource(modId, mediaIndex);
  updateModuleLocks();

  const image = item.imageUrl ? `<img class="resource-image" src="${item.imageUrl}" alt="${item.title}">` : "";
  const body = `
    ${image}
    <p>${item.description}</p>
    ${item.content || "<p>Recurso preparado para ampliar la teoría de esta unidad.</p>"}
  `;
  openContentModal(item.title, body);
}

function openGratitudeJournal(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.gratitudeJournal || {};
  const body = `
    <p>${item.description}</p>
    <p>Reconoce experiencias concretas del día y relaciónalas con tus emociones y fortalezas personales.</p>
    <form id="gratitudeJournalForm" class="journal-form" onsubmit="saveGratitudeJournal(event, ${modId}, ${mediaIndex})">
      <fieldset>
        <legend>Tres momentos positivos de hoy</legend>
        <label>1. ¿Qué situación positiva ocurrió?<textarea name="positive1" rows="3" required></textarea></label>
        <label>2. ¿Qué segundo momento deseas recordar?<textarea name="positive2" rows="3" required></textarea></label>
        <label>3. ¿Qué otra experiencia te produjo bienestar?<textarea name="positive3" rows="3" required></textarea></label>
      </fieldset>
      <div class="journal-grid">
        <label>¿Qué emoción positiva predominó?
          <select name="emotion" required>
            <option value="">Selecciona una emoción</option>
            <option>Alegría</option><option>Gratitud</option><option>Esperanza</option>
            <option>Serenidad</option><option>Orgullo</option><option>Inspiración</option>
          </select>
        </label>
        <label>¿Qué fortaleza personal utilizaste?<input name="strength" type="text" placeholder="Ej. perseverancia, empatía o creatividad" required></label>
      </div>
      <label>¿A quién o a qué deseas agradecer y por qué?<textarea name="gratitudeAction" rows="4" required></textarea></label>
      <label>¿Cómo repetirás una de estas acciones durante la semana?<textarea name="repeatAction" rows="4" required></textarea></label>
      <div class="journal-actions">
        <p id="journalSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu bitácora está guardada. Puedes actualizarla." : "Completa todos los campos para guardar tu reflexión."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar bitácora" : "Guardar bitácora"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("gratitudeJournalForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

window.saveGratitudeJournal = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const journal = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = {
    ...(activityProgressByModule[modId] || {}),
    gratitudeJournal: journal
  };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("journalSaveStatus");
  if (status) status.textContent = "Bitácora guardada correctamente. Puedes volver cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar bitácora";
  showToast("Tu bitácora de gratitud quedó guardada.");
}

function openHappinessCurve(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.happinessCurve || {};
  const moments = [
    ["inicio", "Punto de partida", 45],
    ["aprendizaje", "Momento de aprendizaje", 60],
    ["dificultad", "Dificultad o estrés", 35],
    ["superacion", "Momento de superación", 75],
    ["logro", "Logro significativo", 90]
  ];
  const rows = moments.map(([key, label, defaultValue]) => `
    <div class="curve-entry">
      <label>${label}<textarea name="${key}Text" rows="2" placeholder="Describe brevemente este momento" required></textarea></label>
      <label class="curve-range-label">Nivel de bienestar: <output for="${key}Level">${defaultValue}</output>
        <input type="range" name="${key}Level" id="${key}Level" min="0" max="100" value="${defaultValue}" oninput="updateCurveValue(this)">
      </label>
    </div>
  `).join("");

  const body = `
    <p>${item.description}</p>
    <p>La felicidad es dinámica. Representa cinco momentos y valora cómo percibiste tu bienestar en cada uno.</p>
    <form id="happinessCurveForm" class="journal-form curve-form" onsubmit="saveHappinessCurve(event, ${modId}, ${mediaIndex})">
      ${rows}
      <label>¿Qué aprendiste al observar tu curva?<textarea name="reflection" rows="4" required></textarea></label>
      <div class="journal-actions">
        <p id="curveSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu curva está guardada. Puedes actualizarla." : "Completa los momentos para guardar tu curva."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar curva" : "Guardar curva"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("happinessCurveForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (!field) return;
    field.value = value;
    if (field.type === "range") field.closest("label").querySelector("output").value = value;
  });
}

window.updateCurveValue = function(input) {
  input.closest("label").querySelector("output").value = input.value;
}

window.saveHappinessCurve = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const curve = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = { ...(activityProgressByModule[modId] || {}), happinessCurve: curve };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("curveSaveStatus");
  if (status) status.textContent = "Curva guardada correctamente. Puedes actualizarla cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar curva";
  showToast("Tu curva personal de felicidad quedó guardada.");
}

function openPositiveHabitsPlan(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.positiveHabitsPlan || {};
  const body = `
    <p>${item.description}</p>
    <p>Elige una acción pequeña, concreta y sostenible que puedas practicar durante los próximos siete días.</p>
    <form id="positiveHabitsForm" class="journal-form" onsubmit="savePositiveHabitsPlan(event, ${modId}, ${mediaIndex})">
      <div class="journal-grid">
        <label>Hábito que deseas fortalecer
          <select name="habit" required>
            <option value="">Selecciona un hábito</option>
            <option>Gratitud</option><option>Ejercicio físico</option><option>Meditación</option>
            <option>Relaciones positivas</option><option>Altruismo</option><option>Descanso saludable</option>
          </select>
        </label>
        <label>Frecuencia semanal<input type="number" name="frequency" min="1" max="7" placeholder="Días por semana" required></label>
      </div>
      <label>¿Por qué este hábito es importante para ti?<textarea name="purpose" rows="3" required></textarea></label>
      <label>Señal de inicio: ¿cuándo y dónde lo realizarás?<textarea name="trigger" rows="3" placeholder="Ej. después del desayuno, en mi habitación" required></textarea></label>
      <div class="journal-grid">
        <label>Posible obstáculo<textarea name="obstacle" rows="3" required></textarea></label>
        <label>Estrategia para superarlo<textarea name="strategy" rows="3" required></textarea></label>
      </div>
      <label>¿Cómo sabrás que cumpliste tu plan al finalizar la semana?<textarea name="evidence" rows="3" required></textarea></label>
      <div class="journal-actions">
        <p id="habitsSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu plan está guardado. Puedes actualizarlo." : "Completa el plan para guardar tu compromiso."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar plan" : "Guardar plan"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("positiveHabitsForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

window.savePositiveHabitsPlan = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const plan = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = { ...(activityProgressByModule[modId] || {}), positiveHabitsPlan: plan };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("habitsSaveStatus");
  if (status) status.textContent = "Plan guardado correctamente. Puedes actualizarlo cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar plan";
  showToast("Tu plan de hábitos positivos quedó guardado.");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function getSpritePosition(index) {
  return `${[0, 50, 100][index % 3]}% ${index < 3 ? 0 : 100}%`;
}

function renderReinforcement(activity, practiceMode = false) {
  const container = document.getElementById("reinforcementContainer");
  if (!container || !activity) return;
  const progressSolved = !!activityProgressByModule[currentModuleId]?.memory;
  const isSolved = progressSolved && !practiceMode;
  const baseCards = activity.pairs.flatMap((pair, index) => [
    { id: `c-${index}`, pairId: index, label: pair.concept, kind: "concept" },
    { id: `a-${index}`, pairId: index, label: pair.answer, kind: "answer" }
  ]);

  reinforcementCards = (isSolved ? baseCards : shuffleArray(baseCards)).map((card, index) => ({ ...card, cardId: `card-${index}` }));
  flippedReinforcementCards = [];
  matchedReinforcementPairs = isSolved ? activity.pairs.length : 0;
  reinforcementAttempts = 0;
  reinforcementStreak = 0;

  container.innerHTML = `
    <div class="activity-command-bar">
      <div>
        <span class="activity-kicker">Desafío de análisis</span>
        <h3>${activity.title}</h3>
        <p>Interpreta cada caso y relaciónalo con el concepto correcto. No hay pistas visuales repetidas.</p>
      </div>
      <div class="activity-stats" aria-label="Progreso de la actividad">
        <span><strong id="memoryCounter">${matchedReinforcementPairs}/${activity.pairs.length}</strong> parejas</span>
        <span><strong id="memoryAttempts">0</strong> intentos</span>
        <span><strong id="memoryAccuracy">--</strong> precisión</span>
      </div>
    </div>
    <div class="memory-grid" role="group" aria-label="Tablero de parejas">
      ${reinforcementCards.map((card, index) => `
        <button type="button" class="memory-card ${isSolved ? 'is-flipped is-matched' : ''}" id="${card.cardId}"
          aria-label="${isSolved ? `${card.kind === "concept" ? "Concepto" : "Caso aplicado"}: ${escapeHtml(card.label)}` : `Carta oculta ${index + 1} de ${baseCards.length}`}"
          data-hidden-label="Carta oculta ${index + 1} de ${baseCards.length}"
          onclick="flipReinforcementCard('${card.cardId}')">
          <span class="memory-front">
            <span class="memory-cover-symbol" aria-hidden="true">?</span>
            <span class="memory-front-hint">Analizar carta</span>
          </span>
          <span class="memory-back">
            ${card.kind === "concept"
              ? `<span class="memory-visual memory-visual-small" style="background-image:url('${activity.sprite}');background-position:${getSpritePosition(card.pairId)}" aria-hidden="true"></span>`
              : `<span class="definition-marker" aria-hidden="true">CASO</span>`}
            <small>${card.kind === "concept" ? "Concepto" : "Situación aplicada"}</small>
            <span>${escapeHtml(card.label)}</span>
          </span>
        </button>
      `).join("")}
    </div>
    <div class="reinforcement-actions">
      <button type="button" class="ghost-button" onclick="resetReinforcement()">Reiniciar y mezclar</button>
      <span class="activity-tip">Las imágenes aparecen solo en los conceptos. Para acertar debes interpretar cada situación.</span>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reinforcementFeedback" role="status">${isSolved ? 'Actividad resuelta. Tus parejas permanecen guardadas; puedes mezclarlas y practicar de nuevo.' : practiceMode ? 'Nueva ronda preparada. Tu logro anterior sigue guardado.' : 'Selecciona dos cartas para comenzar.'}</p>
  `;
}

window.flipReinforcementCard = function(cardId) {
  const activity = reinforcementData[currentModuleId];
  const feedback = document.getElementById("reinforcementFeedback");
  if (!activity || !feedback || flippedReinforcementCards.length >= 2) return;

  const card = reinforcementCards.find(item => item.cardId === cardId);
  const element = document.getElementById(cardId);
  if (!card || !element || element.classList.contains("is-matched") || element.classList.contains("is-flipped")) return;

  element.classList.add("is-flipped");
  element.setAttribute("aria-label", `${card.kind === "concept" ? "Concepto" : "Situación aplicada"}: ${card.label}`);
  flippedReinforcementCards.push(card);
  if (flippedReinforcementCards.length !== 2) return;

  reinforcementAttempts++;
  document.getElementById("memoryAttempts").textContent = reinforcementAttempts;
  const [first, second] = flippedReinforcementCards;
  const isMatch = first.pairId === second.pairId && first.kind !== second.kind;

  setTimeout(() => {
    const firstEl = document.getElementById(first.cardId);
    const secondEl = document.getElementById(second.cardId);
    if (!firstEl || !secondEl) return;

    if (isMatch) {
      firstEl.classList.add("is-matched");
      secondEl.classList.add("is-matched");
      matchedReinforcementPairs++;
      reinforcementStreak++;
      document.getElementById("memoryCounter").textContent = `${matchedReinforcementPairs}/${activity.pairs.length}`;
      document.getElementById("memoryAccuracy").textContent = `${Math.round((matchedReinforcementPairs / reinforcementAttempts) * 100)}%`;
      feedback.className = "reinforcement-feedback is-success";
      const performance = reinforcementAttempts <= 8 ? "Dominio sobresaliente" : reinforcementAttempts <= 12 ? "Análisis sólido" : "Reto superado";
      feedback.textContent = matchedReinforcementPairs === activity.pairs.length
        ? `${performance}: completaste el reto en ${reinforcementAttempts} intentos.`
        : `¡Pareja correcta! Llevas una racha de ${reinforcementStreak}.`;
      if (matchedReinforcementPairs === activity.pairs.length) {
        markActivityComplete(currentModuleId, "memory");
        launchActivityCelebration("reinforcementContainer");
        const speech = document.getElementById("companionSpeech");
        if (speech) speech.textContent = `¡Excelente, ${getStudentName()}! Ya dominas las conexiones clave de esta unidad. Continúa con el siguiente reto.`;
      }
    } else {
      reinforcementStreak = 0;
      document.getElementById("memoryAccuracy").textContent = `${Math.round((matchedReinforcementPairs / reinforcementAttempts) * 100)}%`;
      firstEl.classList.remove("is-flipped");
      secondEl.classList.remove("is-flipped");
      firstEl.setAttribute("aria-label", firstEl.dataset.hiddenLabel);
      secondEl.setAttribute("aria-label", secondEl.dataset.hiddenLabel);
      feedback.className = "reinforcement-feedback is-warning";
      feedback.textContent = "La relación conceptual no es correcta. Contrasta el mecanismo del caso con los conceptos disponibles.";
    }
    flippedReinforcementCards = [];
  }, 780);
}

window.resetReinforcement = function() {
  renderReinforcement(reinforcementData[currentModuleId], true);
}

function launchActivityCelebration(containerId) {
  const host = document.getElementById(containerId);
  if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const celebration = document.createElement("div");
  celebration.className = "activity-celebration";
  celebration.setAttribute("aria-hidden", "true");
  celebration.innerHTML = Array.from({ length: 18 }, (_, index) => `<i style="--i:${index}"></i>`).join("");
  host.appendChild(celebration);
  setTimeout(() => celebration.remove(), 1800);
}

function renderFillPrompt(item, index, savedValue, isSolved) {
  const [before, after] = item.text.split("______");
  const safeValue = escapeHtml(savedValue || "");
  return `
    <div class="fill-row ${isSolved ? 'is-correct' : ''}" data-fill-row="${index}">
      <span class="fill-number">${index + 1}</span>
      <p>${escapeHtml(before)}
        <button type="button" class="drop-blank ${savedValue ? 'has-value' : ''}" data-fill-drop="${index}" data-value="${safeValue}"
          ondragover="event.preventDefault()" ondrop="dropFillWord(event, ${index})" onclick="placeSelectedFillWord(${index})"
          aria-label="Espacio ${index + 1}: ${safeValue || 'sin respuesta'}">${safeValue || 'Suelta aquí'}</button>
        ${escapeHtml(after || "")}
      </p>
      <button type="button" class="clear-drop" onclick="clearFillWord(${index})" aria-label="Quitar palabra del espacio ${index + 1}" ${savedValue ? '' : 'hidden'}>&times;</button>
    </div>`;
}

function renderReviewActivities(activity, practiceMode = false) {
  const container = document.getElementById("reviewActivitiesContainer");
  if (!container || !activity) return;
  const progressSolved = !!activityProgressByModule[currentModuleId]?.review;
  const saved = practiceMode ? {} : activityProgressByModule[currentModuleId]?.reviewAnswers || {};
  const isSolved = progressSolved && !practiceMode;
  const words = shuffleArray([...activity.fill.map(item => item.answer), ...(activity.distractors || [])]);
  selectedFillWord = null;

  container.innerHTML = `
    <div class="activity-command-bar review-command-bar">
      <div>
        <span class="activity-kicker">Laboratorio de repaso</span>
        <h3>Decide, arrastra y comprueba</h3>
        <p>Resuelve las dos misiones. Puedes arrastrar una palabra o seleccionarla y luego tocar el espacio.</p>
      </div>
      <div class="review-progress" aria-live="polite"><strong id="reviewAnswered">0</strong><span>de ${activity.trueFalse.length + activity.fill.length}<br>respondidas</span></div>
    </div>
    <div class="review-activities-grid">
      <article class="mini-activity-card decision-activity">
        <div class="mini-activity-heading"><span>01</span><div><h3>Detecta la afirmación</h3><p>Decide si cada idea es verdadera o falsa.</p></div></div>
        ${activity.trueFalse.map((item, index) => `
          <fieldset class="truefalse-row ${isSolved ? 'is-correct' : ''}" data-tf-row="${index}">
            <legend><span>${index + 1}</span>${escapeHtml(item.text)}</legend>
            <div class="truth-options">
              <label><input type="radio" name="tf${index}" value="true" onchange="updateReviewProgress()" ${saved.trueFalse?.[index] === true ? 'checked' : ''}><span>Verdadero</span></label>
              <label><input type="radio" name="tf${index}" value="false" onchange="updateReviewProgress()" ${saved.trueFalse?.[index] === false ? 'checked' : ''}><span>Falso</span></label>
            </div>
          </fieldset>
        `).join("")}
      </article>
      <article class="mini-activity-card word-activity">
        <div class="mini-activity-heading"><span>02</span><div><h3>Construye la idea</h3><p>Lleva cada palabra al espacio correcto.</p></div></div>
        <div class="word-bank" aria-label="Banco de palabras">
          ${words.map(word => `<button type="button" class="word-chip" draggable="true" data-word="${escapeHtml(word)}" ondragstart="startFillDrag(event, '${escapeHtml(word)}')" onclick="selectFillWord('${escapeHtml(word)}', this)">${escapeHtml(word)}</button>`).join("")}
        </div>
        <div class="fill-prompts">
          ${activity.fill.map((item, index) => renderFillPrompt(item, index, saved.fill?.[index] || "", isSolved)).join("")}
        </div>
      </article>
    </div>
    <div class="reinforcement-actions review-actions">
      <button type="button" class="ghost-button" onclick="resetReviewActivities()">Reiniciar y cambiar orden</button>
      <button type="button" class="start-button" onclick="checkReviewActivities()">Comprobar respuestas</button>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reviewFeedback" role="status">${isSolved ? 'Actividad resuelta correctamente. Tus respuestas quedaron guardadas.' : practiceMode ? 'Nueva ronda preparada. Tu logro anterior sigue guardado.' : 'Completa ambas misiones y comprueba tu resultado.'}</p>
  `;
  updateWordBankState();
  updateReviewProgress();
}

window.startFillDrag = function(event, word) {
  event.dataTransfer.setData("text/plain", word);
  event.dataTransfer.effectAllowed = "move";
}

window.selectFillWord = function(word, button) {
  if (button.disabled) return;
  selectedFillWord = selectedFillWord === word ? null : word;
  document.querySelectorAll(".word-chip").forEach(chip => chip.classList.toggle("is-selected", chip === button && !!selectedFillWord));
  document.querySelectorAll(".drop-blank").forEach(blank => blank.classList.toggle("is-ready", !!selectedFillWord));
}

function assignFillWord(index, word) {
  if (!word) return;
  const blank = document.querySelector(`[data-fill-drop="${index}"]`);
  if (!blank) return;
  blank.dataset.value = word;
  blank.textContent = word;
  blank.classList.add("has-value");
  blank.classList.remove("is-correct", "is-wrong", "is-ready");
  blank.setAttribute("aria-label", `Espacio ${index + 1}: ${word}`);
  const clearButton = document.querySelector(`[data-fill-row="${index}"] .clear-drop`);
  if (clearButton) clearButton.hidden = false;
  selectedFillWord = null;
  updateWordBankState();
  updateReviewProgress();
}

window.dropFillWord = function(event, index) {
  event.preventDefault();
  assignFillWord(index, event.dataTransfer.getData("text/plain"));
}

window.placeSelectedFillWord = function(index) {
  if (selectedFillWord) assignFillWord(index, selectedFillWord);
}

window.clearFillWord = function(index) {
  const blank = document.querySelector(`[data-fill-drop="${index}"]`);
  if (!blank) return;
  blank.dataset.value = "";
  blank.textContent = "Suelta aquí";
  blank.className = "drop-blank";
  blank.setAttribute("aria-label", `Espacio ${index + 1}: sin respuesta`);
  const clearButton = document.querySelector(`[data-fill-row="${index}"] .clear-drop`);
  if (clearButton) clearButton.hidden = true;
  updateWordBankState();
  updateReviewProgress();
}

function updateWordBankState() {
  const used = [...document.querySelectorAll("[data-fill-drop]")].map(blank => blank.dataset.value).filter(Boolean);
  document.querySelectorAll(".word-chip").forEach(chip => {
    const isUsed = used.includes(chip.dataset.word);
    chip.disabled = isUsed;
    chip.classList.toggle("is-used", isUsed);
    chip.classList.remove("is-selected");
  });
  document.querySelectorAll(".drop-blank").forEach(blank => blank.classList.remove("is-ready"));
}

window.updateReviewProgress = function() {
  const answeredTruth = document.querySelectorAll('.truefalse-row input:checked').length;
  const answeredFill = [...document.querySelectorAll("[data-fill-drop]")].filter(blank => blank.dataset.value).length;
  const counter = document.getElementById("reviewAnswered");
  if (counter) counter.textContent = answeredTruth + answeredFill;
}

window.checkReviewActivities = function() {
  const activity = reviewActivitiesData[currentModuleId];
  const feedback = document.getElementById("reviewFeedback");
  if (!activity || !feedback) return;

  let correct = 0;
  const total = activity.trueFalse.length + activity.fill.length;
  const savedAnswers = { trueFalse: [], fill: [] };

  activity.trueFalse.forEach((item, index) => {
    const selected = document.querySelector(`input[name="tf${index}"]:checked`);
    const row = document.querySelector(`[data-tf-row="${index}"]`);
    const isCorrect = selected && selected.value === String(item.answer);
    row.classList.toggle("is-correct", !!isCorrect);
    row.classList.toggle("is-wrong", !isCorrect);
    savedAnswers.trueFalse[index] = selected ? selected.value === "true" : null;
    if (isCorrect) correct++;
  });

  document.querySelectorAll("[data-fill-drop]").forEach(blank => {
    const index = Number(blank.dataset.fillDrop);
    const item = activity.fill[index];
    const clean = (blank.dataset.value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const answer = item.answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const isCorrect = clean === answer;
    blank.classList.toggle("is-correct", isCorrect);
    blank.classList.toggle("is-wrong", !isCorrect);
    const row = document.querySelector(`[data-fill-row="${index}"]`);
    row.classList.toggle("is-correct", isCorrect);
    row.classList.toggle("is-wrong", !isCorrect);
    savedAnswers.fill[index] = blank.dataset.value || "";
    if (isCorrect) correct++;
  });

  const wasSolved = !!activityProgressByModule[currentModuleId]?.review;
  if (!wasSolved || correct === total) {
    activityProgressByModule[currentModuleId] = {
      ...(activityProgressByModule[currentModuleId] || {}),
      reviewAnswers: savedAnswers
    };
    saveUserProgress();
  }
  feedback.className = `reinforcement-feedback ${correct === total ? "is-success" : "is-warning"}`;
  feedback.textContent = correct === total
    ? "¡Excelente! Completaste las dos misiones y tus respuestas quedaron guardadas."
    : `Lograste ${correct} de ${total}. Las respuestas marcadas te muestran dónde ajustar.`;
  if (correct === total) {
    markActivityComplete(currentModuleId, "review");
    launchActivityCelebration("reviewActivitiesContainer");
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = `¡Lo hiciste, ${getStudentName()}! Completaste las actividades de repaso. La evaluación de esta unidad ya está lista para ti.`;
  }
}

window.resetReviewActivities = function() {
  renderReviewActivities(reviewActivitiesData[currentModuleId], true);
}

function openContentModal(title, bodyHtml, learnMoreResources = []) {
  modalFocusStack.push(document.activeElement);
  const learnMore = learnMoreResources.length ? `
    <aside class="theory-learn-more" aria-label="Recursos para aprender más">
      <div>
        <span class="space-kicker">Amplía este tema</span>
        <h3>¿Quieres aprender más?</h3>
        <p>Explora estos apoyos relacionados directamente con el contenido de esta tarjeta.</p>
      </div>
      <div class="learn-more-actions">
        ${learnMoreResources.map((resource, index) => `
          <button type="button" class="learn-more-button" onclick="openTheoryLearningResource(${index})">
            ${resource.type === "video" ? "Ver video" : resource.type === "image" ? "Ver infografía" : "Explorar vistas"}: ${resource.title}
          </button>
        `).join("")}
      </div>
    </aside>
  ` : "";
  document.getElementById("theoryTitle").textContent = title;
  document.getElementById("theoryBody").innerHTML = `${bodyHtml}${learnMore}`;
  document.querySelector("#theoryModal .activity-modal-content").classList.toggle("resource-modal-content", bodyHtml.includes("resource-image") || bodyHtml.includes("journal-form"));
  document.getElementById("theoryModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeTheoryBtn").focus();
}

window.openTheory = function(modId, nodeId) {
  const node = courseData[modId].theoryNodes.find(n => n.id === nodeId);
  activeTheoryResources = [...(node.learnMoreResources || [])];
  if (node.learnMoreVideo) activeTheoryResources.unshift({ ...node.learnMoreVideo, type: "video" });
  saveViewedTheory(modId, nodeId);
  const card = document.getElementById(`theory-card-${nodeId.replace('.', '-')}`);
  if (card) {
    card.classList.add("is-viewed");
    const status = card.querySelector(".theory-node-status");
    if (status) status.textContent = "Revisado";
    const p = card.querySelector("p");
    if (p) p.textContent = "Teoría revisada. Puedes volver a abrirla.";
  }
  openContentModal(node.title, node.content, activeTheoryResources);
  updateModuleLocks();
}
function closeTheoryModal() {
  document.getElementById("theoryModal").classList.remove("is-active");
  document.querySelector("#theoryModal .activity-modal-content").classList.remove("resource-modal-content");
  if (document.getElementById("moduleView").classList.contains("is-active")) {
    renderQuizLaunch();
    updateModuleLocks();
  }
  syncModalState();
  restorePreviousFocus();
}
document.getElementById("closeTheoryBtn").onclick = closeTheoryModal;
document.getElementById("theoryOverlay").onclick = closeTheoryModal;

window.openTheoryLearningResource = function(index) {
  const resource = activeTheoryResources[index];
  if (!resource) return;
  if (resource.type === "video") return openVideoItem(resource);
  openLearningItem(resource);
}

function openLearningItem(resource) {
  modalFocusStack.push(document.activeElement);
  document.getElementById("learningTitle").textContent = resource.title;

  const visualContent = resource.type === "image"
    ? `<img class="learning-feature-image" src="${resource.imageUrl}" alt="${resource.title}">`
    : `<div class="learning-gallery">
        ${resource.slides.map((slide, index) => `
          <figure>
            <span>Vista ${index + 1} de ${resource.slides.length}</span>
            <img src="${slide}" alt="${resource.title}, vista ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}">
          </figure>
        `).join("")}
      </div>`;

  document.getElementById("learningBody").innerHTML = `
    <p class="learning-description">${resource.description}</p>
    ${visualContent}
  `;
  document.getElementById("learningModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeLearningBtn").focus();
}

function closeLearningModal() {
  document.getElementById("learningModal").classList.remove("is-active");
  document.getElementById("learningBody").innerHTML = "";
  syncModalState();
  restorePreviousFocus();
}

window.openVideo = function(modId, mediaIndex) {
  const item = courseData[modId]?.media?.[mediaIndex];
  if (!item?.embedUrl) return showToast("Este recurso multimedia estará disponible pronto.");
  openVideoItem(item);
}

function openVideoItem(item) {
  modalFocusStack.push(document.activeElement);
  document.getElementById("videoTitle").textContent = item.title;
  document.getElementById("videoDescription").textContent = `${item.description}${item.source ? ` Fuente: ${item.source}.` : ""}`;
  document.getElementById("videoFrame").src = item.embedUrl;
  document.getElementById("videoModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeVideoBtn").focus();
}

function openQuizModal(title, kicker = "Evaluación") {
  modalFocusStack.push(document.activeElement);
  document.getElementById("quizModalTitle").textContent = title;
  document.getElementById("quizModalKicker").textContent = kicker;
  document.getElementById("quizModalBody").innerHTML = "";
  document.getElementById("quizModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeQuizBtn").focus();
}

function closeQuizModal() {
  document.getElementById("quizModal").classList.remove("is-active");
  document.getElementById("quizModalBody").innerHTML = "";
  syncModalState();
  restorePreviousFocus();
}

function closeVideoModal() {
  document.getElementById("videoModal").classList.remove("is-active");
  document.getElementById("videoFrame").src = "";
  syncModalState();
  restorePreviousFocus();
}

function syncModalState() {
  document.body.classList.toggle("modal-open", !!document.querySelector(".activity-modal.is-active"));
}

function restorePreviousFocus() {
  const previousFocus = modalFocusStack.pop();
  if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
}

document.getElementById("closeVideoBtn").onclick = closeVideoModal;
document.getElementById("videoOverlay").onclick = closeVideoModal;
document.getElementById("closeLearningBtn").onclick = closeLearningModal;
document.getElementById("learningOverlay").onclick = closeLearningModal;
document.getElementById("closeQuizBtn").onclick = closeQuizModal;
document.getElementById("quizOverlay").onclick = closeQuizModal;

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (document.getElementById("certificateModal").classList.contains("is-active")) {
    closeCertificateModal();
  } else if (document.getElementById("learningModal").classList.contains("is-active")) {
    closeLearningModal();
  } else if (document.getElementById("videoModal").classList.contains("is-active")) {
    closeVideoModal();
  } else if (document.getElementById("quizModal").classList.contains("is-active")) {
    closeQuizModal();
  } else if (document.getElementById("theoryModal").classList.contains("is-active")) {
    closeTheoryModal();
  }
});

window.submitQuiz = function() {
  const form = document.getElementById("quizForm");
  const modData = courseData[currentModuleId];
  let correctas = 0;
  const answers = [];
  
  for(let i=0; i<modData.quiz.length; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if(!selected) return showToast("Por favor responde todas las preguntas.");
    const value = parseInt(selected.value);
    answers[i] = value;
    if(value === modData.quiz[i].correct) correctas++;
  }

  const porcentaje = Math.round((correctas / modData.quiz.length) * 100);
  const previous = quizResultsByModule[currentModuleId];
  if (!previous || porcentaje >= previous.score) {
    quizResultsByModule[currentModuleId] = {
      score: porcentaje,
      correctas,
      total: modData.quiz.length,
      answers,
      passed: porcentaje >= 80,
      date: new Date().toLocaleDateString('es-CO')
    };
    saveUserProgress();
  }

  if(porcentaje >= 80) {
    const perfect = porcentaje === 100;
    showToast(`¡Aprobado con ${porcentaje}%! Módulo ${currentModuleId} completado.`);
    saveCertificate(currentModuleId, modData.title);
    
    if(highestUnlocked === currentModuleId && highestUnlocked < MAX_MODULES) {
      highestUnlocked++;
      saveUserProgress();
    }
    document.getElementById("quizModalBody").innerHTML = `
      <div class="final-result ${perfect ? 'is-success' : 'is-warning'}">
        <h3>${perfect ? '¡Felicidades, completaste la evaluación con 100%!' : 'Evaluación aprobada'}</h3>
        <p>Resultado: ${correctas} de ${modData.quiz.length} respuestas correctas (${porcentaje}%).</p>
        <div class="summary-actions">
          ${perfect ? '' : `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>`}
          <button type="button" class="ghost-button" onclick="closeQuizModal(); renderMap(); switchView('homeView');">Continuar</button>
        </div>
      </div>
    `;
    renderQuizLaunch();
    renderFinalEvaluationPanel();
  } else {
    document.getElementById("quizModalBody").innerHTML = `
      <div class="final-result is-warning">
        <h3>Necesitas reforzar un poco más</h3>
        <p>Resultado: ${correctas} de ${modData.quiz.length} respuestas correctas (${porcentaje}%). Necesitas mínimo 80%.</p>
        <button type="button" class="start-button" onclick="startModuleEvaluation(true)">Repetir evaluación</button>
      </div>
    `;
  }
}

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function areCoreModulesApproved() {
  return [1, 2, 3].every(id => certificates.some(cert => cert.modId === id));
}

function renderFinalEvaluationPanel() {
  const panel = document.getElementById("finalEvaluationPanel");
  if (!panel) return;
  panel.hidden = !areCoreModulesApproved();
  if (!panel.hidden) {
    document.getElementById("finalEvaluationContainer").innerHTML = "";
  }
}

function buildFinalQuestions() {
  currentFinalQuestions = [1, 2, 3].flatMap(unitId =>
    shuffleArray(courseData[unitId].quiz).slice(0, 5).map(question => ({
      ...question,
      unitId
    }))
  );
  currentFinalQuestions = shuffleArray(currentFinalQuestions);
}

window.startFinalEvaluation = function() {
  if (!areCoreModulesApproved()) return showToast("Primero aprueba las tres unidades.");
  buildFinalQuestions();
  openQuizModal("Evaluación final integradora", "Reto final");

  let html = `<form id="finalQuizForm" class="quiz-form final-quiz-form">`;
  currentFinalQuestions.forEach((q, idx) => {
    html += `
      <div class="quiz-question">
        <span class="space-kicker">Unidad ${q.unitId}</span>
        <h4>${idx + 1}. ${q.q}</h4>
        ${q.options.map((opt, optIdx) => `
          <label class="quiz-option"><input type="radio" name="fq${idx}" value="${optIdx}" required> ${opt}</label>
        `).join("")}
      </div>`;
  });
  html += `<button type="button" class="start-button" onclick="submitFinalEvaluation()" style="width:100%; margin-top:10px;">Calificar evaluación final</button></form>`;
  document.getElementById("quizModalBody").innerHTML = html;
}

window.submitFinalEvaluation = function() {
  const form = document.getElementById("finalQuizForm");
  if (!form || currentFinalQuestions.length === 0) return;

  let correctas = 0;
  for (let i = 0; i < currentFinalQuestions.length; i++) {
    const selected = form.querySelector(`input[name="fq${i}"]:checked`);
    if (!selected) return showToast("Por favor responde todas las preguntas de la evaluación final.");
    if (parseInt(selected.value) === currentFinalQuestions[i].correct) correctas++;
  }

  const porcentaje = Math.round((correctas / currentFinalQuestions.length) * 100);
  document.getElementById("quizModalBody").innerHTML = `
    <div class="final-result ${porcentaje >= 80 ? 'is-success' : 'is-warning'}">
      <h3>${porcentaje >= 80 ? 'Evaluación final aprobada' : 'Puedes repetir la evaluación'}</h3>
      <p>Resultado: ${correctas} de ${currentFinalQuestions.length} respuestas correctas (${porcentaje}%).</p>
      <button type="button" class="start-button" onclick="startFinalEvaluation()">Repetir con nuevas preguntas</button>
    </div>
  `;
}

// ==========================================
// 5. PERFIL Y CERTIFICADOS
// ==========================================

function saveCertificate(modId, modTitle) {
  if(!certificates.find(c => c.modId === modId)) {
    certificates.push({ modId, title: modTitle, date: new Date().toLocaleDateString('es-CO') });
    saveUserProgress();
  }
}

function renderProfile() {
  document.getElementById("profileNameDisplay").textContent = currentUser?.name || "Estudiante";
  document.getElementById("profileEmailDisplay").textContent = currentUser?.email || "correo@uptc.edu.co";
  
  let pic = localStorage.getItem(userKey("fgc_profile_pic"));
  const legacyPic = localStorage.getItem("fgc_profile_pic");
  if (!pic && legacyPic) {
    pic = legacyPic;
    localStorage.setItem(userKey("fgc_profile_pic"), legacyPic);
    localStorage.removeItem("fgc_profile_pic");
  }
  document.getElementById("profileAvatarDisplay").innerHTML = pic ? `<img src="${pic}" alt="Foto de perfil de ${getStudentName()}">` : `<span aria-hidden="true">👤</span>`;

  const certContainer = document.getElementById("profileCertCard");
  if(certificates.length === 0) {
    certContainer.innerHTML = `<h3 style="color:#34f5e1;">Aún no tienes certificados</h3><p style="color:#aeb9d3;">Completa las evaluaciones con 80% para obtenerlos.</p>`;
  } else {
    certContainer.innerHTML = certificates.map(c => `
      <div class="certificate-list-item">
        <div><strong>Unidad ${c.modId}</strong><br><small>${c.title} · Aprobado: ${c.date}</small></div>
        <button class="ghost-button" onclick="openCertificate('${c.title}')">Ver Diploma</button>
      </div>
    `).join("");
  }
}

document.getElementById("profileImageInput").onchange = (e) => {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = () => { localStorage.setItem(userKey("fgc_profile_pic"), reader.result); renderProfile(); };
    reader.readAsDataURL(file);
  }
}

window.openCertificate = function(moduleName) {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  modalFocusStack.push(document.activeElement);

  const finishCertificate = () => {
    ctx.font = 'bold 50px "Inter", sans-serif'; ctx.fillStyle = '#0f6074'; ctx.textAlign = 'center';
    ctx.fillText((currentUser?.name || "Estudiante").toUpperCase(), canvas.width / 2, 400); 
    ctx.font = 'bold 30px "Inter", sans-serif'; ctx.fillStyle = '#157a8c';
    ctx.fillText(`Por aprobar: ${moduleName}`, canvas.width / 2, 480);
    const fecha = new Date().toLocaleDateString('es-CO');
    ctx.font = 'italic 25px "Inter", sans-serif'; ctx.fillStyle = '#5f7480';
    ctx.fillText(`Duitama, Colombia - ${fecha}`, canvas.width / 2, 550);

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("landscape", "px", [1200, 850]);
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1200, 850);
    
    document.getElementById("certPreviewFrame").src = URL.createObjectURL(pdf.output("blob"));
    document.getElementById("certificateModal").classList.add("is-active");
    syncModalState();
    document.getElementById("closeCertBtn").focus();
    document.getElementById("downloadCertBtn").onclick = () => pdf.save(`Cert_${moduleName.replace(/\s+/g, '')}.pdf`);
  };

  const drawCertificateBase = () => {
    ctx.fillStyle = '#f7fbfc'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#157a8c'; ctx.lineWidth = 12; ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);
    ctx.strokeStyle = '#d2b24b'; ctx.lineWidth = 3; ctx.strokeRect(54, 54, canvas.width - 108, canvas.height - 108);
    ctx.fillStyle = '#0f6074'; ctx.fillRect(70, 75, canvas.width - 140, 12);
    ctx.font = 'bold 54px "Inter", sans-serif'; ctx.fillStyle = '#0f6074'; ctx.textAlign = 'center';
    ctx.fillText('CERTIFICADO DE APROBACIÓN', canvas.width / 2, 205);
    ctx.font = '26px "Inter", sans-serif'; ctx.fillStyle = '#5f7480';
    ctx.fillText('Felicidad y Gestión del Conocimiento', canvas.width / 2, 258);
    ctx.font = '22px "Inter", sans-serif';
    ctx.fillText('Se otorga a', canvas.width / 2, 326);
    ctx.beginPath(); ctx.arc(canvas.width / 2, 680, 62, 0, Math.PI * 2); ctx.fillStyle = '#157a8c'; ctx.fill();
    ctx.beginPath(); ctx.arc(canvas.width / 2, 680, 48, 0, Math.PI * 2); ctx.strokeStyle = '#d2b24b'; ctx.lineWidth = 5; ctx.stroke();
    ctx.font = 'bold 25px "Inter", sans-serif'; ctx.fillStyle = '#ffffff'; ctx.fillText('FGC', canvas.width / 2, 689);
  };

  drawCertificateBase();
  finishCertificate();
}
function closeCertificateModal() {
  document.getElementById("certificateModal").classList.remove("is-active");
  syncModalState();
  restorePreviousFocus();
}
document.getElementById("closeCertBtn").onclick = closeCertificateModal;
document.getElementById("certOverlay").onclick = closeCertificateModal;

// ==========================================
// 6. LOGIN Y FLUJO DE ENTRADA
// ==========================================
document.getElementById("toggleAuthBtn").onclick = () => {
  isLoginMode = !isLoginMode;
  document.getElementById("loginTitle").textContent = isLoginMode ? "Iniciar sesión" : "Crear cuenta";
  document.getElementById("loginSubtitle").textContent = isLoginMode ? "Ingresa tus credenciales para continuar" : "Crea tu perfil para guardar el recorrido";
  document.getElementById("submitBtn").textContent = isLoginMode ? "Ingresar" : "Registrarse";
  document.getElementById("toggleAuthBtn").textContent = isLoginMode ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión";
  document.getElementById("nameGroup").style.display = isLoginMode ? "none" : "block";
  document.getElementById("passwordInput").setAttribute("autocomplete", isLoginMode ? "current-password" : "new-password");
  document.getElementById("nameInput").required = !isLoginMode;
};

document.getElementById("loginForm").onsubmit = async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  btn.disabled = true; btn.textContent = "Cargando...";
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value;
  const name = document.getElementById("nameInput").value.trim();

  try {
    if (isLoginMode) {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      currentUser = { id: data.user.id, email: data.user.email, name: data.user.user_metadata?.full_name || email.split("@")[0] };
    } else {
      const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { full_name: name } } });
      if (error) throw error;
      currentUser = { id: data.user.id, email: data.user.email, name: name };
    }
    localStorage.setItem("fgc_currentUser", JSON.stringify(currentUser));
    loadUserProgress();
    document.getElementById("appHeader").hidden = false;
    setHeaderIdentity();
    renderAvatars(); renderMap();
    switchView("homeView");
    showToast(`Bienvenido, ${currentUser.name}`);
  } catch (error) {
    let msg = error.message;
    if(msg.includes("already registered")) msg = "El correo ya está registrado. Inicia sesión.";
    else if(msg.includes("Invalid login")) msg = "Credenciales incorrectas.";
    alert(msg);
  } finally {
    btn.disabled = false; btn.textContent = isLoginMode ? "Ingresar" : "Registrarse";
  }
};

document.getElementById("logoutBtn").onclick = async () => {
  await supabaseClient.auth.signOut();
  currentUser = null; localStorage.removeItem("fgc_currentUser");
  highestUnlocked = 1;
  selectedCompanion = null;
  viewedTheoryByModule = {};
  viewedResourcesByModule = {};
  activityProgressByModule = {};
  certificates = [];
  document.getElementById("appHeader").hidden = true;
  switchView("loginView");
};

// ==========================================
// 7. INICIALIZACIÓN DE NAVEGACIÓN
// ==========================================
document.getElementById("brandHomeLink").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnBackToMap").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnGoProfile").onclick = () => { renderProfile(); switchView("profileView"); };
document.getElementById("btnBackFromProfile").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnStartFinalEvaluation").onclick = () => startFinalEvaluation();
document.getElementById("btnContinueJourney").onclick = () => {
  if (areCoreModulesApproved()) {
    document.getElementById("finalEvaluationPanel").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  openModule(highestUnlocked);
};

const accessibilityGuideAudio = document.getElementById("accessibilityGuideAudio");
const accessibilityGuideButton = document.getElementById("btnAccessibilityGuide");
const accessibilityGuideLabel = document.getElementById("accessibilityGuideLabel");

function setAccessibilityGuideButton(text, ariaLabel) {
  accessibilityGuideLabel.textContent = text;
  accessibilityGuideButton.setAttribute("aria-label", ariaLabel);
}

function getAccessibilityGuide(viewId) {
  const guides = {
    loginView: {
      src: "Recursos/guia-inicio-sesion.wav",
      name: "inicio de sesion"
    },
    homeView: {
      src: "Recursos/guia-pagina-inicial.wav",
      name: "pagina inicial y mapa de unidades"
    },
    profileView: {
      src: "Recursos/guia-perfil.wav",
      name: "perfil"
    }
  };

  if (viewId === "moduleView") {
    const unitGuides = {
      1: "Recursos/guia-unidad-1.wav",
      2: "Recursos/guia-unidad-2.wav",
      3: "Recursos/guia-unidad-3.wav"
    };
    return {
      src: unitGuides[currentModuleId] || unitGuides[1],
      name: `Unidad ${currentModuleId}`
    };
  }

  return guides[viewId] || guides.homeView;
}

function resetAccessibilityGuide(viewId) {
  if (!accessibilityGuideAudio || !accessibilityGuideButton) return;

  const guide = getAccessibilityGuide(viewId);
  accessibilityGuideAudio.pause();
  accessibilityGuideAudio.currentTime = 0;
  accessibilityGuideButton.classList.remove("is-playing");
  accessibilityGuideAudio.src = guide.src;
  accessibilityGuideAudio.load();
  accessibilityGuideButton.dataset.guideName = guide.name;
  setAccessibilityGuideButton(`Escuchar guía: ${guide.name}`, `Escuchar guía accesible de ${guide.name} desde el inicio`);
}

accessibilityGuideButton.onclick = async () => {
  const guideName = accessibilityGuideButton.dataset.guideName || "esta pantalla";
  try {
    if (accessibilityGuideAudio.paused) {
      await accessibilityGuideAudio.play();
      accessibilityGuideButton.classList.add("is-playing");
      setAccessibilityGuideButton(`Pausar guía: ${guideName}`, `Pausar guía accesible de ${guideName}`);
    } else {
      accessibilityGuideAudio.pause();
      accessibilityGuideButton.classList.remove("is-playing");
      setAccessibilityGuideButton(`Continuar guía: ${guideName}`, `Continuar guía accesible de ${guideName}`);
    }
  } catch (error) {
    accessibilityGuideButton.classList.remove("is-playing");
    showToast("No se pudo reproducir la guia accesible en este navegador.");
  }
};
accessibilityGuideAudio.onended = () => {
  const guideName = accessibilityGuideButton.dataset.guideName || "esta pantalla";
  accessibilityGuideAudio.currentTime = 0;
  accessibilityGuideButton.classList.remove("is-playing");
  setAccessibilityGuideButton(`Repetir guía: ${guideName}`, `Repetir guía accesible de ${guideName} desde el inicio`);
};

// La primera guia corresponde a la pantalla de acceso.
resetAccessibilityGuide("loginView");

document.addEventListener("DOMContentLoaded", () => {
  if (currentUser) {
    loadUserProgress();
    document.getElementById("appHeader").hidden = false;
    setHeaderIdentity();
    renderAvatars(); renderMap();
    switchView("homeView");
    showToast(`Hola de nuevo, ${currentUser.name}`);
  }
});
