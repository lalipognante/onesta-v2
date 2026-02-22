export interface TeamMember {
  id: number
  name: string
  position: string
  curriculum: string[]
  linkedin: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Gabriel Pognante',
    position: 'DIRECTOR',
    curriculum: [
      "Abogado (UCC)",
      "Especialista en Derecho Penal Económico (U.B.P)",
      "Doctorando en Derecho Penal y Ciencias Penales (Univ. Del Salvador)",
      "Diplomado en Crimen Organizado, Corrupción y Terrorismo (Univ. De Salamanca, España)",
      "Programa en Compliance y Prevención de la Corrupción Corporativa (Univ. S21)",
      "Certificación Internacional en Ética y Compliance (IFCA-AAEC)",
      "Miembro Asociado del Asociación Argentina de Compliance (AAEC)",
      "Director Sala de Compliance del Colegio de Abogados de Córdoba"
    ],
    linkedin: "https://www.linkedin.com/in/gabriel-pognante-329910165/",
    image: "/gabrielPognante.jpg"
  },
  {
    id: 2,
    name: 'Leonardo Javier Mazzei',
    position: 'ASOCIADO',
    curriculum: [
      "Abogado (UBA)",
      "MBA – Administración y Gestión de las Organizaciones (UBP)",
      "Maestría en Derecho Empresario (UBP)",
      "Diplomatura en Medios Alternativos de Resolución de Conflictos (UBP)",
      "Programa Universitario en Finanzas (UADE)",
      "Programa en Gestión del Cliente Pyme (UBP)"
    ],
    linkedin: "https://www.linkedin.com/in/leonardo-mazzei-6ba06814a/",
    image: "/leonardoJavierMazzei.jpg"
  },
  {
    id: 7,
    name: 'Concepción Bonetto',
    position: 'ASOCIADA',
    curriculum: [
      "Abogada (U.N.C)",
      "Notaria (Univ. Siglo XXI)",
      "Diplomada en Derecho Penal Económico y Tributario (UCASAL)"
    ],
    linkedin: "https://www.linkedin.com/in/concepcion-bonetto-4864471ba/",
    image: "/concepcionBonetto.jpg"
  },
  {
    id: 6,
    name: 'Constanza Zucchella',
    position: 'ASOCIADA',
    curriculum: [
      "Abogado (U.C.C)",
      "Master en Derecho Empresario (Univ. Austral)",
      "Diplomada en Fideicomisos (U.C.C)",
      "Diplomatura en Desarrollo de Ecosistemas Emprendedores (U.C.C)",
      "Derecho de los negocios internacionales (Univ. Complutense de Madrid)",
      "Experta en Derecho Comercial y Empresarial"
    ],
    linkedin: "https://www.linkedin.com/in/constanza-zucchella-2979b08/",
    image: "/constanzaZucchella2.jpeg"
  },
  {
    id: 4,
    name: 'Edgardo Ruibal',
    position: 'ASOCIADO',
    curriculum: [
      "Abogado (U.N.C)",
      "Maestría en Derecho Empresario (Univ. Siglo XXI)",
      "Especialidad en Derecho Penal Económico y Tributario (Univ. Siglo XXI)",
      "Experto en Derecho Bancario y Financiero"
    ],
    linkedin: "https://www.linkedin.com/in/edgardo-ruibal-03b3a6242/",
    image: "/edgardoRuibal.jpg"
  },
  {
    id: 3,
    name: 'Agustín Pascualini',
    position: 'ASOCIADO',
    curriculum: [
      "Abogado (U.C.C)",
      "Maestría en Derecho Empresario (Univ. Siglo XXI)",
      "Diplomatura en Derecho del Trabajo y Relaciones Laborales (Univ. Austral)",
      "Experto en Derecho Laboral de Empresas"
    ],
    linkedin: "https://www.linkedin.com/in/agust%C3%ADn-pascualini-244483114/",
    image: "/agustinPascualini.jpg"
  },
  {
    id: 5,
    name: 'Federico Alfaro',
    position: 'ASOCIADO',
    curriculum: [
      "Abogado Notario (U.C.C)",
      "Maestrando en Derecho Empresario (UBP)",
      "Diplomado en procesos ejecutivos, civiles, comerciales y en defensa del consumidor."
    ],
    linkedin: "https://www.linkedin.com/in/federico-alfaro-seghieri-52a5701a9/",
    image: "/federicoAlfaro.jpg"
  },
  // {
  //   id: 7,
  //   name: 'Concepción Bonetto',
  //   position: 'ASOCIADA',
  //   curriculum: [
  //     "Abogada (U.N.C)",
  //     "Notaria (Univ. Siglo XXI)",
  //     "Diplomada en Derecho Penal Económico y Tributario (UCASAL)"
  //   ],
  //   linkedin: "https://www.linkedin.com/in/concepcion-bonetto-4864471ba/",
  //   image: "/concepcionBonetto.jpg"
  // },
  // {
  //   id: 10,
  //   name: 'Florencia Luz Márquez Bonino',
  //   position: 'ASOCIADA',
  //   curriculum: [
  //     "Abogada (UBP)",
  //     "Doctorando en Ciencias Jurídicas (UMSA)",
  //     "Especialización en Derecho Penal Económico (UBP)",
  //     "Maestría en Criminología y Ciencias Forenses (UES21)",
  //     "LLM Candidate Maestría en Derecho con Orientación en Arbitraje Comercial y de Inversión, y en Contratos y Litigios (Univ. Austral)",
  //     "Diplomatura en Governance, Compliance, Control & Assurance (Univ. San Andrés)",
  //     "Programa de Prevención de Crímenes Financieros (IAE)",
  //     "Certificación Internacional en Compliance International Federation of Compliance Associations (IFCA)"
  //   ],
  //   linkedin: "https://www.linkedin.com/in/florenciamarquezbonino/",
  //   image: "/florenciaBonino2.jpeg"
  // }
]
