// Toda la información personal vive aquí. Edita este archivo para actualizar el sitio.

export type Lang = 'en' | 'es';

export const contact = {
  name: 'Felix Rafael Garcia Martinez',
  shortName: 'Felix Garcia',
  email: 'felixxrafaell@gmail.com',
  linkedin: 'https://www.linkedin.com/in/felix-rafael-garcia-martinez/',
  github: '', // añade tu URL de GitHub cuando la tengas
  location: 'Ocala, Florida, USA',
};

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Java', 'SQL'],
  backend: ['REST APIs', 'JSON', 'Third-party integrations', 'Data flow optimization'],
  mobile: ['Mobile apps', 'Firebase Analytics', 'Feature Flags'],
  tools: ['Git', 'Bitbucket', 'Jira', 'Confluence'],
};

const ui = {
  en: {
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    role: 'Full-Stack Software Developer',
    tagline:
      'I build software end to end: APIs, backend services and the interfaces people use every day, designed to stay reliable as they grow.',
    available: 'Open to full-stack roles',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    yearsLabel: 'years shipping production software',
    aboutTitle: 'About',
    about: [
      'Software engineer with 6+ years building production systems where reliability matters. Most of my work happens where systems meet: integrating third-party services, designing the data flows between them, and keeping everything stable as requirements change.',
      'I work across JavaScript, TypeScript and Java, from backend services to mobile apps. I like shipping in small, measurable steps, with analytics and feature flags, and working closely with product, tech leads and clients to turn loose requirements into software people actually use.',
      'Today I focus on full-stack development with TypeScript. This site collects what I build along the way, each project a different kind of problem.',
    ],
    skillsTitle: 'Toolbox',
    skillGroups: { languages: 'Languages', backend: 'Backend', mobile: 'Mobile & product', tools: 'Tools & platforms' },
    experienceTitle: 'Experience',
    present: 'Present',
    remote: 'Remote',
    projectsTitle: 'Projects',
    projectsEmpty: 'First projects are on the way. Check back soon — or follow along on GitHub.',
    status: { live: 'Live', 'in-progress': 'In progress', archived: 'Archived' },
    code: 'Code',
    demo: 'Demo',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    spokenLanguages: ['Spanish — native', 'English — professional'],
    contactTitle: 'Let’s talk',
    contactText: 'Have a product to build or a team that needs another engineer? Send me a message.',
    footer: 'Built with Astro.',
    switchLang: 'Español',
  },
  es: {
    navAbout: 'Sobre mí',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    role: 'Desarrollador de Software Full-Stack',
    tagline:
      'Construyo software de principio a fin: APIs, servicios backend y las interfaces que la gente usa a diario, diseñados para seguir siendo confiables a medida que crecen.',
    available: 'Disponible para roles full-stack',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    yearsLabel: 'años llevando software a producción',
    aboutTitle: 'Sobre mí',
    about: [
      'Ingeniero de software con más de 6 años construyendo sistemas en producción donde la confiabilidad importa. Gran parte de mi trabajo ocurre donde los sistemas se conectan: integrar servicios de terceros, diseñar los flujos de datos entre ellos y mantener todo estable cuando los requerimientos cambian.',
      'Trabajo con JavaScript, TypeScript y Java, desde servicios backend hasta aplicaciones móviles. Me gusta lanzar en pasos pequeños y medibles, con analítica y feature flags, y colaborar de cerca con producto, tech leads y clientes para convertir requerimientos difusos en software que la gente realmente usa.',
      'Hoy me enfoco en el desarrollo full-stack con TypeScript. Este sitio reúne lo que voy construyendo, cada proyecto un tipo de problema distinto.',
    ],
    skillsTitle: 'Herramientas',
    skillGroups: { languages: 'Lenguajes', backend: 'Backend', mobile: 'Móvil y producto', tools: 'Herramientas y plataformas' },
    experienceTitle: 'Experiencia',
    present: 'Presente',
    remote: 'Remoto',
    projectsTitle: 'Proyectos',
    projectsEmpty: 'Los primeros proyectos están en camino. Vuelve pronto o sígueme en GitHub.',
    status: { live: 'En línea', 'in-progress': 'En desarrollo', archived: 'Archivado' },
    code: 'Código',
    demo: 'Demo',
    educationTitle: 'Formación',
    languagesTitle: 'Idiomas',
    spokenLanguages: ['Español — nativo', 'Inglés — profesional'],
    contactTitle: 'Hablemos',
    contactText: '¿Tienes un producto que construir o un equipo que necesita otro ingeniero? Escríbeme.',
    footer: 'Hecho con Astro.',
    switchLang: 'English',
  },
} as const;

export const experience = [
  {
    company: 'TEVOLV',
    start: { en: 'Apr 2020', es: 'Abr 2020' },
    end: null,
    role: { en: 'Senior Software Developer', es: 'Senior Software Developer' },
    points: {
      en: [
        'Integrated a third-party digital wallet into a mobile banking app, coordinating data exchange between services.',
        'Integrated third-party risk-assessment and fraud-prevention APIs, with backend changes in JavaScript and Java.',
        'Improved NFI generation and optimized data flows.',
        'Used Firebase Analytics and Feature Flags to analyze app behavior and roll out features safely.',
      ],
      es: [
        'Integración de una billetera digital de terceros en una app bancaria móvil, coordinando el intercambio de datos entre servicios.',
        'Integración de APIs de terceros para evaluación de riesgo y prevención de fraude, con cambios backend en JavaScript y Java.',
        'Mejoras en la generación de NFI y optimización de flujos de datos.',
        'Uso de Firebase Analytics y Feature Flags para analizar el comportamiento de la app y habilitar funcionalidades de forma controlada.',
      ],
    },
    tags: ['JavaScript', 'Java', 'REST', 'Firebase', 'Feature Flags'],
  },
  {
    company: 'Hipostasys',
    start: { en: 'Jul 2025', es: 'Jul 2025' },
    end: { en: 'Apr 2026', es: 'Abr 2026' },
    role: { en: 'Software Developer — Temenos Infinity', es: 'Software Developer — Temenos Infinity' },
    points: {
      en: [
        'Built features and fixed defects on a Temenos Infinity digital banking project.',
        'Improved application state stability and performance.',
        'Analyzed business requirements, estimated tasks and advised clients on platform features.',
      ],
      es: [
        'Desarrollo de funcionalidades y corrección de defectos en un proyecto de banca digital con Temenos Infinity.',
        'Mejoras en la estabilidad del estado de la aplicación y optimización del rendimiento.',
        'Análisis de requerimientos de negocio, estimación de tareas y asesoría a clientes sobre la plataforma.',
      ],
    },
    tags: ['Temenos Infinity', 'Performance'],
  },
  {
    company: 'Temenos',
    start: { en: 'Aug 2025', es: 'Ago 2025' },
    end: { en: 'Dec 2025', es: 'Dic 2025' },
    role: { en: 'Software Developer — Temenos Infinity', es: 'Software Developer — Temenos Infinity' },
    points: {
      en: ['Development and service-integration initiatives in the digital banking ecosystem, adapting solutions to functional requirements.'],
      es: ['Iniciativas de desarrollo e integración de servicios en el ecosistema de banca digital, adaptando soluciones a requerimientos funcionales.'],
    },
    tags: ['Integrations'],
  },
];

export const education = {
  school: 'Instituto Tecnológico de las Américas (ITLA)',
  years: '2018 — 2021',
};

export function t(lang: Lang) {
  return ui[lang];
}
