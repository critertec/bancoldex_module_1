// Module 1
import M_1_History_1 from './data/Module_1/1-1_History'
import M_1_History_2 from './data/Module_1/1-2_History'
import M_1_History_3 from './data/Module_1/1-3_History'

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

const stories = [
    M_1_History_1,
    M_1_History_2,
    M_1_History_3
];

export { instructions, stories }
