const HistoryDonAlfonso = {
    id: "1-2",
    cover: 'bg-mechanics',
    title: 'history-2',
    personage: "don alfonso",
    desc: "Don Alfonso es dueño de un taller de mecánica hace varios años. Entró al curso de Educación Financiera para mejorar sus habilidades empresariales y le ha servido bastante, pero ahora necesita tu ayuda. Aunque trabaja mucho y gana más de lo que se gasta, al final del mes no ve los excedentes. ¿Le puedes ayudar?",
    ptsMax: 11,
    answer: {
        pages: [
            {
                desc: [
                    "Sumercé, buenas tardes.",
                    "    ‎",
                    "Imagínese que durante los últimos años mi tallercito ha ido creciendo y tengo clientes fieles. Todos pagan en efectivo porque saben que a mí eso de la tecnología se me dificulta.",
                ],
            },
            {
                desc: [
                    "Sin embargo, por más que sienta que vendo más, al final del mes ya no tengo plata en la caja registradora.", 
                    "    ‎",
                    "Yo soy el único que tiene acceso al dinero en el taller.",
                ],
                question: "¿Qué puede estar pasando?"
            }
        ],
        options: [ 
            { option: "A", id: '1'},
            { option: "B", id: '2'},
            { option: "C", id: '3'}
        ]
    },
    listOptions: [
// 1
    {
        id: "1",
        type: "neutral",
        desc: "Don Alfonso, lo primero que podría hacer es organizarse y no sacar la plata del taller para sus gastos personales. Así podremos saber si realmente el taller está generando utilidad o no.",
        feedback: "Has tomado una decisión lógica, sin embargo, sabemos que para lograrlo se requiere de un proceso de tiempo y constancia. También es importante incentivar el control de los gastos para saber como se usan los ingresos.",
        answer: {
            personageAction: 'ok',
            pages: [
                {
                    desc: [
                        "¡Gracias!",
                        "    ‎",
                         "Con esa nueva metodología me di cuenta de que me estaba gastando la plata del taller en bobadas. Definitivamente tengo un buen negocio y ahora quiero abrir otro taller en otro barrio de la ciudad.",
                    ],
                    question: "¿Qué debería hacer?"
                }
            ],
            options: [
                { option: "A", id: '1.1'},
                { option: "B", id: '1.2'},
            ]
        }
    },
    // 1.1
        {
            id: "1.1",
            type: "buena",
            desc: "Primero, revisemos la estructura de costos del negocio actual.",
            feedback: "¡Muy bien! Analizar el detalle del negocio te permitirá encontrar opciones de optimización, o identificar variaciones en los costos que podrían cambiar las proyecciones de ventas esperadas. Cada negocio tiene sus particularidades y como tal, no podemos tomar decisiones desde las generalidades.",
            answer: {
                pages: [
                    {
                        table: {
                            title: 'El taller tiene los siguientes costos',
                            columns: [
                                { key: 'description', label: 'descripción' },
                                { key: 'value', label: 'valor' }
                            ],
                            values: [
                                {
                                   description: 'Mano de Obra',
                                   value: '$5.000.000'
                                },
                                {
                                    description: 'Salario Gerente',
                                    value: '$5.000.000'
                                },
                                {
                                    description: 'Materiales y Herramientas',
                                    value: '$2.000.000'
                                },
                                {
                                    description: 'Alquiler de Maquinaria',
                                    value: '$5.000.000'
                                }
                            ]
                        },
                    }
                ],
                options: [
                    { option: "A", id: "1.1.1" },
                    { option: "B", id: "1.1.2" }
                ]
            }
        },
            // 1.1.1
            {
                id: "1.1.1",
                type: "mala",
                desc: "Lo veo bien. Si cree que puede prestar servicios por más de $17.000.000 mensuales, debería abrir otro local.",
                feedback: "Hay que revisar con cuidado los costos de cada proyecto. Existen costos ocultos que no se tienen en cuenta. En este caso no se tomó en cuenta que se debe pagar un arriendo para el nuevo local, lo que hace que los $17.000.000 de ventas no sean suficientes para pagar los costos.",
                answer: {
                    pages: [
                        {
                            desc: [
                                "¡Un momento!", 
                                "Casi cometo una imprudencia.",
                                "    ‎",
                                "No estoy contando el arriendo del local. Como el que tengo ahora está debajo de mi casa, nunca lo he contemplado en los costos",
                                "    ‎",
                                "Tampoco estoy contemplando cuánto me puede costar la adecuación inicial.",
                            ],
                            question: "Debo tener en cuenta todos estos gastos antes de tomar la decisión."
                        },
                        {
                            table: {
                                title: 'Haciendo bien los cálculos de los gastos, la tabla de costos quedaría así:',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                       description: 'Mano de Obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario Gerente 50%',
                                        value: '$3.500.000 (El otro local paga el otro 50%)'
                                    },
                                    {
                                        description: 'Materiales y Herramientas',
                                        value: '$2.000.000'
                                    },
                                    {
                                        description: 'Alquiler de Maquinaria',
                                        value: '$5.000.000'
                                    },
                                    {
                                        description: 'Servicios',
                                        value: '$1.000.000'
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: '$2.500.000'
                                    },
                                    {
                                        description: 'Adecuación Inicial, una sola vez.',
                                        value: '$4.000.000'
                                    },
                                ]
                            }
                        },
                        {
                            desc: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000.",
                            question: "¿Debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
                //1.1.1.1
                {
                    id: "1.1.1.1",
                    type: "mala",
                    desc: "No. Sus gastos son $23.000.000, si presta servicios por $21.000.000 mensuales iría a pérdida.",
                    feedback: "La adecuación del local es un gasto de una sola vez. Los gastos mensuales son en promedio $19.000.000, y la proyección mínima de ventas es de $21.000.000. Por no tener claridad en los gastos podemos estar perdiendo oportunidades de negocio o adentrarnos en negocios poco rentables.",
                    answer: {
                        feedback: [
                            "Don Alfonso decidió seguir tu consejo y no invertir en su nuevo taller.",
                            "    ‎",
                            "Le daba miedo no superar los $23.000.000 que necesitaba, como mínimo, para superar los costos.", 
                            "Tiempo después, se dio cuenta de que los costos eran solo de $19.000.000 y que habria sido un buen negocio haber abierto el nuevo taller.",
                        ],
                        end: true
                    },
                },
                //1.1.1.2
                {
                    id: "1.1.1.2",
                    type: "buena",
                    desc: "¡Sí! Los números dan. Tenga en cuenta que será mucho trabajo, pero esa es la forma de alcanzar el éxito.",
                    feedback: "Los costos directos e indirectos son de $19.000.000 y las proyecciones muestran un mínimo de facturación de $21.000.000. Esto significa que el negocio podría generar utilidad. El objetivo es encontrar negocios con utilidades altas que puedan absorver los imprevistos o meses de poca facturación.",
                    answer: {
                        feedback: [
                            "Gracias a tus consejos, Don Alfonso está mejor que nunca.", 
                            "    ‎",
                            "Su nuevo taller ha sido todo un éxito y no solo fue capaz de pagar todos los costos y la adecuación inicial, sino que ya está pensando en crecer por todo el país.", 
                            "    ‎",
                            "Cada vez está más cerca de cumplir su sueño gracias a tu ayuda.",
                        ],
                        end: true
                    },
                },
            //1.1.2
            {
                id: "1.1.2",
                type: "buena",
                desc: "¿Está seguro que son todos los costos que debe tener el nuevo taller?. Podríamos revisar a más profundidad. Cada local tiene sus particularidades.",
                feedback: "Identificar que cada local, o cada proyecto debe revisarse al detalle es vital para no tomar una decisión desfaborable. En este caso no se está tomando en cuenta el costo del alquiler del local, lo que puede hacer entender que los costos de operación son solo de 17 millones cuando realmente serían más altos.",
                answer: {
                    pages: [
                        {
                            desc: ["Tiene razón.", 
                            "    ‎",
                            "El taller que tengo está debajo de mi casa y no tengo que pagar arriendo.",
                            "Debería agregar el precio del arriendo y la adecuación inicial.",
                        ],
                            question: "¡Casi tomo una decisión acelerada!"
                        },
                        {
                            table: {
                                title: 'Haciendo bien los cálculos de los gastos, la tabla de costos quedaría así',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                       description: 'Mano de obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario gerente 50%',
                                        value: '$3.500.000 (El otro local paga el otro 50%)'
                                    },
                                    {
                                        description: 'Materiales y herramientas',
                                        value: '$2.000.000'
                                    },
                                    {
                                        description: 'Alquiler de maquinaria',
                                        value: '$5.000.000'
                                    },
                                    {
                                        description: 'Servicios',
                                        value: '$1.000.000'
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: '$2.500.000'
                                    },
                                    {
                                        description: 'Adecuación Inicial',
                                        value: '$4.000.000, una sola vez.'
                                    },
                                ]
                            }
                        },
                        {
                            desc: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000.",
                            question: "¿Debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
        // 1.2
            {
                id: "1.2",
                type: "neutral",
                desc: "Si este negocio le da plata, puede montar otro igualito sin problema. ",
                feedback: "Decidir duplicar los costos de un taller a otro puede ahorrar bastante trabajo, pero debe hacerse una revisión al detalle. Cada proyecto tiene sus particularidades y deben tenerse en cuenta para analizar los costos directos e indirectos y su punto de equilibrio para poder decidir si hacer o no el negocio.",
                answer: {
                    personageAction: 'upset',
                    pages: [
                        {
                            desc: [
                                "No podría montarlo igualito.", 
                                "    ‎",
                                "El nuevo taller será un poco más pequeño que el que tengo actualmente, y seguramente los gastos podrían variar. Y debo cotizar la adecuación inicial, por ejemplo.",
                                "    ‎",
                                "Tengo proyectada la siguiente tabla de costos: ",
                            ],
                            
                        },
                        {
                            table: {
                                title: 'El taller tiene los siguientes costos',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],  
                                values: [
                                    {
                                       description: 'Mano de obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario gerente 50%',
                                        value: '$3.500.000, (El otro local paga el otro 50%)'                                        
                                    },
                                    {
                                        description: "Materiales y herramientas",
                                        value: "$2.000.000"
                                    },
                                    {
                                        description: "Alquiler de maquinaria",
                                        value: "$5.000.000"
                                    },

                                    {
                                        description: "Servicios",
                                        value: "$1.000.000"
                                    },
                                    {
                                        description: "Arriendo",
                                        value: "$2.500.000"
                                    },
                                    {
                                        description: "Adecuación Inicial",
                                        value: "$4.000.000 000, una sola vez. "
                                    }
                                ]                              
                            }
                        },
                        {
                            question: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000. ¿debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
// 2
    {
        id: "2",
        type: "neutral",
        desc: "Montar un sistema de ingresos y gastos en el computador le dará tranquilidad al saber cuánto dinero entró y cuánto salió en el día. Además, ingresar el dinero en una cuenta de ahorros permitirá tener mejor control de la salida de efectivo.",
        feedback: "¡Bien! Es imporante tener registrado todos los ingresos y todos los gastos, en lo posible, de forma diaria para que sea fácil de analizar la información. Se puede hacer de forma manual, en computador o al estar bancarizado, se podría hacer de forma automática con los extractos y movimientos.",
        answer: {
            pages: [
                {
                    desc: [
                        "¡Muchas gracias!",
                        "    ‎",
                        "Entonces empezaré anotando todos los ingresos diarios y en qué me los gasto.", 
                        "También iré al banco a ver cómo es eso de tener la plata en una cuenta de ahorros. "
                    ],
                    }
            ],
            options: [
                { option: "A", id: "2.1"},
                { option: "B", id: "2.2"},
                { option: "C", id: "2.3"}
            ]
        }
    },
        // 2.1
        {
            id: '2.1',
            type: "mala",
            desc: "Una sola cuenta para usted y el negocio para ahorrar en gastos financieros.",
            feedback: "Elegir ahorrar en gastos financieros uniendo las cuentas personales y empresariales no es un buen consejo. Los costos bancarios son mínimos en comparación del desgaste operativo que generan las cuentas compartidas.",
            answer: {
                pages: [
                    {
                        desc: [
                            "En el curso de Educación Financiera hacían mucho énfasis en separar las cuentas personales y las del negocio.", 
                            "Creo que es exactamente lo que necesito para empezar a organizarme ya que quiero abrir otro taller.",
                        ],
                        question: "¿Qué debería hacer primero?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
        // 2.2
        {
            id: '2.2',
            type: "neutral",
            desc: "Abra una cuenta de ahorros para manejar el dinero del taller y solicite un datáfono para recibir pagos electrónicos.",
            feedback: "Los datáfonos y las cuentas de ahorro permitirán tener un control automático de los ingresos recibidos, y con los extractos podrá identificar la fecha y la cantidad del dinero utilizado. Es importante combinar este sistema con un registro de gastos diario.",
            answer: {
                pages: [
                    {
                        desc: [
                            "¡Gracias!",
                            "    ‎",
                            "Con esa nueva metodología me di cuenta de que me estaba gastando la plata del taller en bobadas. Definitivamente tengo un buen negocio y ahora quiero abrir otro taller en otro barrio de la ciudad.",
                         ],
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
        // 2.3
        {
            id: '2.3',
            type: "neutral",
            desc: "Abra una cuenta para usted y otra para el taller. Sí, puede costar más, pero es mejor no revolver cuentas. También pida un datáfono para recibir pagos electrónicos.",
            feedback: "Los datáfonos y las cuentas de ahorro permitirán tener un control automático de los ingresos recibidos, y con los extractos podrá identificar la fecha y la cantidad del dinero utilizado. Es importante combinar este sistema con un registro de gastos diario.",
            answer: {
                pages: [
                    {
                        desc: "¡Gracias! Con esa nueva metodología para organizarme me di cuenta de que me estaba gastando la plata del taller en bobadas. Desde que me organicé me di cuenta de que tengo un buen negocio y ahora quiero abrir otro taller en otro barrio de la ciudad.",
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
// 3
    {
        id: "3",
        type: "neutral",
        desc: "Don Alfonso, ha llegado la hora de empezar a recibir tarjeta débito y realizar transferencias. Es más fácil seguir los ingresos y gastos si están en formato digital.",
        feedback: "La transformación digital será siempre una buena opción, pero todo es un proceso. La naturaleza del negocio te permite utilizar efectivo y pagos digitales, y se debe tener un sistema de control que combine ambas opciones.",
        answer: {
            pages: [
                {
                    desc: [
                        "¡Uy! Sabía que tarde o temprano iba a pasar.", 
                        "Bueno, que mejor momento que el presente para hacerlo. ¿No?",
                        "Iré al banco inmediatamente.",
                    ],
                    question: "¿Qué debería sacar?"
                }
            ],
            options: [
                { option: "A", id: "2.1"},
                { option: "B", id: "2.2"},
                { option: "C", id: "2.3"}
            ]
        }
    }
]
}


export default HistoryDonAlfonso;


// {
//     table: {
//         title: '',
//         columns: [
//             { key: 'description', label: 'descripción' },
//             { key: 'value', label: 'valor' }
//         ],
//         values: [
//             {
//                description: '',
//                value: ''
//             },
//             {
//                 description: '',
//                 value: ''
//             },
//         ]
//     }
// },