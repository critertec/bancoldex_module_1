const HistoryJose = {
    id: "1-1",
    personage: 'jose',
    title: 'history-1',
    cover: 'bg-production-uniform',
    desc: "José tiene un negocio de producción de uniformes. Después de mucho trabajo, recibió una invitación para licitar un proyecto que será indispensable para la sostenibilidad de su emprendimiento. Sin embargo, tiene problemas para saber cuánto debe cobrar. ¿Podrás ayudarlo?",
    ptsMax: 9,
    answer: {
        pages: [
            {
                desc: "¡Hola! Mucho gusto. Mi nombre es José. He seguido el curso de Finanzas Lab y estoy listo para llevar los aprendizajes al mundo real. Dicen que tu me puedes ayudar con temas específicos.",
                question: "¿Podrías ayudarme con unas preguntas para poder ganarme una licitación?",
            }
        ],
        options: [ 
            { option: "A", id: '1'},
            { option: "B", id: '2'}
        ]
    },
    listOptions: [
// 1
        {
            id: '1',
            type: 'buena',
            desc: "¡Claro! En lo que pueda ayudarte cuenta conmigo. Es importante que sepas que cada historia tiene sus particularidades y que las respuestas que te daré están basadas en la información que me proveas. El mínimo cambio en la información podría variar la respuesta radicalmente.",
            answer: {
                pages: [
                    {
                        desc: [
                            "Sí, está perfecto. ¡Muchas gracias!",
                            "",
                            "Te cuento: me invitaron a participar en una licitación para un gran hospital, para producir 1.000 uniformes marcados y elaborados con material antiadherente. Pero, ¡no sé cuánto cobrar!",
                        ],
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: "1.1"},
                    { option: "B", id: "1.2"},
                    { option: "C", id: "1.3"}
                ]
            }
        },
        // 1.1
            {
                id: '1.1',
                type: "neutral",
                desc: "Revisando en internet veo que el precio promedio de uniformes similares está entre $ 100.000 COP y $ 150.000 COP cuando se compra por unidad. Podrías cobrar $ 125.000 COP.",
                feedback: "Elegiste la opción de revisar los precios en internet para dar el precio final. Si bien es importante analizar el mercado, si determinas un precio solo con factores externos es posible que vendas por debajo de los costos lo que te haría quebrar, o por encima de los costos unitarios en proyectos masivos con economía de escala, lo que te haría poco competitivo.",
                answer: {
                    pages: [
                        {
                            desc: "Claro, podría irme con este valor. Espero que no estemos cobrando demasiado, porque están comprando por cantidad."
                        }
                    ],
                    answer: {
                        pages: [
                            {
                                desc: "Estábamos por encima del precio de los competidores. Perdimos esta oportunidad por no hacer bien el costeo y la fijación del precio. Será en una próxima oportunidad."
                            }
                        ],
                        end: true
                    }
                }
            },
        // 1.2
            {
                id: '1.2',
                type: 'buena',
                desc: "¿Me podrías compartir el listado de costos?",
                feedback: "Elegiste revisar los costos antes de determinar el precio a cliente. ¡Muy bien! Cada negocio tiene sus particularidades y requerimientos, por eso es imporante siempre revisar el detalle para asegurar que el precio fijado cumpla con los costos y la utilidad esperada.",
                answer: {
                    pages: [
                        {
                            table: {
                                title: "¡Claro! Necesitamos producir todo a más tardar en un mes",
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                        description: 'Telas',
                                        value: '$1.000.000 COP para 100 unidades'                     
                                    },
                                    {
                                        description: 'Botones',
                                        value: '$150.000 COP para 100 unidades'                     
                                    },
                                    {
                                        description: 'Mano de obra',
                                        value: '$6.000.000 COP para 1.000 unidades'                     
                                    },
                                    {
                                        description: 'Alquiler de máquinas',
                                        value: '$9.000.000 COP para 1.000 unidades'                     
                                    },
                                    {
                                        description: 'Mercado de mi familia',
                                        value: '$500.000 COP mensuales'                     
                                    },
                                    {
                                        description: 'Servicios',
                                        value: '$1.100.000 COP mensuales'                     
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: '$2.000.000 COP mensuales'                     
                                    },
                                    {
                                        description: 'Transporte',
                                        value: '$100.000 COP '                     
                                    },
                                    {
                                        description: 'Elementos varios de producción',
                                        value: '$1.000.000 COP para 1.000 unidades'                     
                                    }
                                ]   
                            }                                    
                        }
                    ],
                    options: [
                        { option: "A", id: "1.2.1"},
                        { option: "B", id: "1.2.2"},
                        { option: "C", id: "1.2.3"}
                    ]                
                }
            },
            // 1.2.1
                {
                    id: '1.2.1',
                    type: "mala",
                    desc: "Podrías cobrar $ 30.750 COP por uniforme, ya que te compran por volumen.",
                    feedback: "Elegiste la opción de $30.700. Llegaste a este valor sumando los costos directos e indirectos, sin embargo no tuviste en cuenta la utilidad esperada. Si no tienes en cuenta la utilidad en tu fijación de precio nunca podrás hacer crecer tu negocio ni tener disponibilidad para responder a imprevistos.",
                    answer: {
                        pages: [
                            {
                                desc: "Me puse a hacer el ejercicio de costeo con calma y definitivamente no puedo cobrar $30.750, eso es lo que me cuesta producirlo. Voy a agregarle un 45% de utilidad. ¿Te parece bien? "
                            },
                            {
                                desc: "¡Ganamos la licitación! Muchas gracias por tu ayuda. Y fue justo a tiempo: me acaban de pagar el anticipo y necesito esa plata para pagar los servicios de mi casa que me los iban a cortar. ¿Está bien hacer eso?"
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.2.1.1"},
                            { option: 'B', id: "1.2.1.2"},
                            { option: 'C', id: "1.2.1.3"}
                        ]
                    }
                },
                // 1.2.1.1
                    {
                        id: '1.2.1.1',
                        type: "neutral",
                        desc: "¡Claro! Págalo como si fuera utilidad adelantada. Esa plata es tuya y debe servirte para vivir bien. ",
                        feedback: "Al elegir utilizar el dinero de los anticipos para gastos personales o para otros proyectos puedes desorganizar las finanzas y no podrás identificar si el negocio realmente fue rentable o no. Recuerda siempre anotar todo y usar el dinero exclusivamente para la operación a menos que sea una emergencia, para lo cual debes tener una utilidad lo suficientemente grande para asegurar que no afectará la operación del negocio.",
                        answer: {
                            pages: [
                                {
                                    desc: "¡Me tocó! Pero al final sentí que el negocio no dio utilidad."
                                }
                            ],
                            answer: {
                                pages: [
                                    {
                                        desc: "Gracias a tu ayuda, José logró sacar adelante su primer negocio grande de forma rentable y ya sabe cómo cotizar para futuras oportunidades. Definitivamente, saber cuáles son los costos directos e indirectos es fundamental para tener negocios en crecimiento."
                                    }
                                ],
                                end: true
                            }
                        }
                    },
                // 1.2.1.2
                    {
                        id: '1.2.1.2',
                        type: "buena",
                        desc: "Podrías utilizar el anticipo y anotar en tus cuentas del negocio para qué lo utilizaste. Apenas recibas tu sueldo, lo devuelves para no afectar el proyecto.",
                        feedback: "Trabajas para tener el estilo de vida que te mereces. En lo posible, mientras los negocios se establecen, procura no utilizar el dinero de operación para gastos personales y esperar a finalizar el proyecto para utilizar la utilidad, sin embargo, en situaciones de emergencia puedes disponer del dinero dejando todo anotado y devolviéndolo cuando sea posible. Así podrás evaluar la rentabilidad del proyecto y determinar si es bueno o no replicarlo en el futuro.",
                        answer: {
                            pages: [
                                {
                                    desc: "Listo. Logré solucionar lo de los servicios. Ya puedo dedicarme a pensar en nuevos proyectos con estos aprendizajes."
                                }
                            ],
                            answer: {
                                pages: [
                                    {
                                        desc: "Gracias a tu ayuda, José logró sacar adelante su primer negocio grande de forma rentable y ya sabe cómo cotizar para futuras oportunidades. Definitivamente, saber cuáles son los costos directos e indirectos es fundamental para tener negocios en crecimiento."
                                    }
                                ],
                                end: true
                            }
                        }
                    },
                // 1.2.1.3
                    {
                        id: '1.2.1.3',
                        type: "neutral",
                        desc: "No. Pide prestado por otro lado, pero no cruces cuentas personales con las del trabajo.",
                        feedback: "Se espera que los negocios se hayan cotizado lo suficientemente bien para que la utilidad pueda cubrir imprevistos o gastos personales. Recuerda que has creado empresa para tener autonomía y crear el proyecto de vida que quieres. Si requieres utilizar el dinero anticipadamente y estás seguro que no afectará la operación del negocio, podrías disponer del dinero dejándolo anotado como utilidad anticipada.",
                        answer: {
                            pages: [
                                {
                                    desc: "Increíble que haya ganado el contrato más grande de mi empresa y no pueda pagar los servicios. Debo seguir trabajando fuertemente para que no vuelva a pasar."
                                }
                            ],
                            end: true
                        }
                    },
            // 1.2.2
                {
                    id: '1.2.2',
                    type: "neutral",
                    desc: "Podrías cobrar $ 60.000 COP por uniforme.",
                    feedback: "Elegiste cobrar $60.000 por uniforme. Lo imporante de esta decisión es saber que al identificar los costos directos e indirectos puedes saber que el costo por uniforme es de $30.750 y que a esto debes sumarle la utilidad esperada. Es imporante fijar un valor lo suficientemente alto que te permita hacer crecer el negocio y responder a imprevistos, pero no tan alto para que sigan eligiendo tu solución frente a la competencia. No existe una fórmula mágica para elegir el porcentaje de utilidad. Cada negocio es único y depenederá de factores como el valor agregado en calidad, marca, servicio al cliente, etc.",
                    answer: {
                        pages: [
                            {
                                desc: "¡Suena bien! Así lo haré."
                            },
                            {
                                desc: "¡Ganamos la licitación! Muchas gracias por tu ayuda. Y fue justo a tiempo: me acaban de pagar el anticipo y necesito esa plata para pagar los servicios de mi casa que me los iban a cortar. ¿Está bien hacer eso?"
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.2.1.1"},
                            { option: 'B', id: "1.2.1.2"},
                            { option: 'C', id: "1.2.1.3"}
                        ]
                    }
                },
            // 1.2.3
                {
                    id: '1.2.3',
                    type: "mala",
                    desc: "Cobra $ 125.000 COP, que es el precio que pagarían si lo compran en un supermercado.",
                    feedback: "Elegiste cobrar 4 veces el valor del producto. No existe una fórmula mágica que diga cuanto puedes cobrar de utilidad pero es importante saber que si la utilidad es muy alta puedes estar dejando de ser comptetitivo si no ofreces un valor agregado lo suficientemente atractico para tus clientes que haga que estén dispuestos a pagar el excedente.",
                    answer: {
                        pages: [
                            {
                                desc: "Estábamos por encima del precio de los competidores. Perdimos esta oportunidad por no hacer bien el costeo y la fijación del precio. Será en una próxima oportunidad."
                            }
                        ],
                        end: true
                    }
                },
        // 1.3
            {
                id: "1.3",
                type: 'mala',
                desc: "Si quieres ganarte el negocio, pregúntale al cliente los valores máximos que están estimando recibir y cotiza sobre esa información.  ",
                feedback: "Elegiste que el cliente determinara el precio del producto. Si bien, para comenzar muchas veces el porcentaje de utilidad puede verse reducido mientras se fortalece una nueva marca, dejar que sean los factores externos los que determinan el precio puede hacerte vender por debajo de los costos, haciéndote peder dinero.",
                answer: {
                    pages: [
                        {
                            desc: "Me dice que lo más bajo posible, manteniendo la calidad. No me ayudó mucho."
                        }
                    ],
                    options: [
                        { option: 'A', id: "1.2"}
                    ]
                }
            },
// 2
        {
            id: '2',
            type: "mala",
            desc: "No. En este momento estoy ocupado.",
            answer: {
                pages: [
                    {
                        desc: 'Es una pena. Haber ayudado a José te habría permitido abordar mejor los temas de costos, fijación de precio y separación de cuentas.',
                        question: "¡Vuelve a intentarlo!"
                    }
                ],
                end: true
            }
        },
    ]

};

export default HistoryJose;