import type { Course } from "../types/Course";
import type { Semester } from "../types/Semester";

export const coursesSemester1: Course[] = [
  {
    title: "Fundamentos de Programación",
    description: "Introducción a los conceptos básicos de programación.",
    link: "/course/fundamentos-programacion",
    teacher: "Ana Belem",
  },
  {
    title: "Matemáticas Discretas",
    description: "Estudio de estructuras matemáticas discretas.",
    link: "/course/matematicas-discretas",
    teacher: "DarwinCoito",
  },
];

export const coursesSemester2: Course[] = [
  {
    title: "Algoritmos y Estructuras de Datos",
    description: "Conceptos y técnicas para manipular estructuras de datos.",
    link: "/course/estructuras-datos",
    teacher: "GGG god ",
  },
];

export const coursesSemester3: Course[] = [
  {
    title: "Paradigmas de programación",
    description:
      "Conceptos y técnicas para trabajar con diferentes paradigmas de programación.",
    link: "/course/paradigmas-programacion",
    teacher: "De la GOD",
  },
  {
    title: "Bases de Datos",
    description: "Introducción a las bases de datos.",
    link: "/course/bases-datos",
    teacher: "Ivan Blanco",
  },

  {
    title: "Análisis y Diseño de Algoritmos",
    description: "Introducción a la Análisis y Diseño de Algoritmos",
    link: "/course/analisis-algoritmos",
    teacher: "Ana Belem",
  },
  // Añadir más cursos
];

export const coursesSemester4: Course[] = [
  {
    title: "Tecnologías para el Desarrollo de Aplicaciones Web",
    description:
      "Conceptos y técnicas para trabajar con diferentes Tecnologías para el Desarrollo de Aplicaciones Web",
    link: "/course/estructuras-datos",
    teacher: "Alex Soto",
  },
];

export const semesters: Semester[] = [
  { name: "Semestre 1", courses: coursesSemester1 },
  { name: "Semestre 2", courses: coursesSemester2 },
  { name: "Semestre 3", courses: coursesSemester3 },
  { name: "Semestre 4", courses: coursesSemester4 },
  // Añadir más semestres
];
