// Modules
import Module_1 from './data/Module_1'
// import Module_2 from './data/Module_2'
// import Module_3 from './data/Module_3'

const instructions = {
    title: "¡Hola de nuevo!",
    p: [
        'Últimamente se han acercado bastantes personas a perdir ayuda para mejorar sus habitos financiros en sus empresas.',
        'Gracias por ayudarnos con algunos de ellos!',
        'No te preocupes, estaré acompañandote en el proceso, dando retroalimentación inmediata de los consejos que les des.',
        'Por ahí dicen que no hay mejor forma de aprender que enseñando, espero que así sea contigo.',
        'En este momento tengo tres historias que requiren tu ayuda. Elige con cuál quisieras empezar.'
    ]
}

const InfoModalHelp = [ 
    "Recuerda explorar todas las historias a profundidad.",
    "Nunca sabes que puedes aprender mientras ayudas a otros"
];

const stories = Module_1;

export { instructions, stories, InfoModalHelp }
