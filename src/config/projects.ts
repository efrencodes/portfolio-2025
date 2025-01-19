export interface ListProjectProps {
  name: string;
  description: string;
  url: string;
  alt: string;
  urlImage: string;
}

export const ListProject: ListProjectProps[] = [
  {
    name: "Calculadora de ISR - OCC Mundial",
    description: "Conoce tu ingreso real después de retenciones y enfoca tu búsqueda en empleos que cumplan tus metas.",
    url: "/proyectos/calculadora-de-isr",
    alt: "", // "Calculadora de ISR para empleados de OCC Mundial",
    urlImage: "" // "/proyectos/calculadora-de-isr/home.png"
  },
];
