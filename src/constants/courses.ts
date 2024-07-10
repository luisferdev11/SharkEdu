import type { Course } from "../types/Course";
import type { Semester } from "../types/Semester";

export const coursesSemester1: Course[] = [
  {
    title: "Fundamentos de Programación",
    description: "Introducción a los conceptos básicos de programación.",
    link: "/course/fundamentos-programacion",
  },
  {
    title: "Matemáticas Discretas",
    description: "Estudio de estructuras matemáticas discretas.",
    link: "/course/matematicas-discretas",
  },

  {
    title: "Introducción a la Ingeniería de Software",
    description: "Conceptos básicos de la ingeniería de software.",
    link: "/course/introduccion-ingenieria-software",
  },

  {
    title: "Cálculo Diferencial",
    description: "Estudio de las derivadas y sus aplicaciones.",
    link: "/course/calculo-diferencial",
  },
  // Añadir más cursos
];

export const coursesSemester2: Course[] = [
  {
    title: "Estructuras de Datos",
    description: "Conceptos y técnicas para manipular estructuras de datos.",
    link: "/course/estructuras-datos",
  },
  {
    title: "Cálculo Multivariable",
    description: "Cálculo en varias variables y sus aplicaciones.",
    link: "/course/calculo-multivariable",
  },
  // Añadir más cursos
];

export const coursesSemester3: Course[] = [
  {
    title: "Paradigmas de programación",
    description:
      "Conceptos y técnicas para trabajar con diferentes paradigmas de programación.",
    link: "/course/estructuras-datos",
    teacher: "De la GOD",
  },
  {
    title: "Cálculo Multivariable",
    description: "Cálculo en varias variables y sus aplicaciones.",
    link: "/course/calculo-multivariable",
  },
  // Añadir más cursos
];

export const semesters: Semester[] = [
  { name: "Semestre 1", courses: coursesSemester1 },
  { name: "Semestre 2", courses: coursesSemester2 },
  { name: "Semestre 3", courses: coursesSemester3 },
  // Añadir más semestres
];
