import {SurveyModel} from "src/model/Survey/SurveyModel";
import {PrivateEmployeeCategories} from "src/model/Survey/ocupationCategories/PrivateEmployeeCategories";
import {PublicEmployeeCategories} from "src/model/Survey/ocupationCategories/PublicEmployeeCategories";
import {StudentCategories} from "src/model/Survey/ocupationCategories/StudentCategories";
import {generateUniqSerial} from "src/utils/GeneralUtils";

export const Survey: Array<SurveyModel> = [
    {
        id: generateUniqSerial(),
        surveyTitle: "Información General",
        backgroundColor: "#8f02a5",
        questionsGroups: [
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Cual es tu genero?",
                        type: "select",
                        field: "gender",
                        options: [
                            {
                                id: "gender01",
                                value: "Masculino"
                            },
                            {
                                id: "gender02",
                                value: "Femenino"
                            },
                            {
                                id: "gender03",
                                value: "No binario"
                            }
                        ]
                    },
                    {
                        id: generateUniqSerial(),
                        title: "¿Cuando naciste?",
                        type: "date",
                        field: "birthday",
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Donde vives actualmente?",
                        type: "address",
                        field: "address",
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Cuando llegue el momento \ncómo podemos contactarte?",
                        type: "multiple-inputs",
                        field: '',
                        inputs: [
                            {
                                id: generateUniqSerial(),
                                name: "email",
                                placeHolder: "algo@algo.com",
                                label: "Ingresa tu correo electronico",
                                field: "email"
                            },
                            {
                                id: generateUniqSerial(),
                                name: "telefono celular a diez digitos",
                                placeHolder: "(555) 555 5555",
                                label: "Ingresa tu número a 10 digitos",
                                field: "phone"
                            }
                        ]
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "Ahora sí, saca tu credencial de elector\nrecuerda que este campo es opcional, \nsi decides ponerlo nos ayudas a saber \ndónde tenemos presencia y validar tu información.\nSi aún no cumples 18 años no te preocupes\ndéjalo vacío.",
                        type: "multiple-inputs",
                        field: "",
                        inputs: [
                            {
                                id: generateUniqSerial(),
                                name: "Clave de elector",
                                placeHolder: "987987987989",
                                label: "Ingresa clave",
                                field: "electorkey"
                            },
                            {
                                id: generateUniqSerial(),
                                name: "Seccion Electoral",
                                placeHolder: "9999",
                                label: "Ingresa Seccion",
                                field: "electoralDistrict"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: generateUniqSerial(),
        surveyTitle: "Información Laboral",
        backgroundColor: "#7147c2",
        questionsGroups: [
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Cuál ha sido tu último grado de estudios que hayas concluido?",
                        type: "select",
                        field: "level_edu",
                        options: [
                            {
                                id: "Primaria",
                                value: "Primaria"
                            },
                            {
                                id: "Secundaria",
                                value: "Secundaria"
                            },
                            {
                                id: "Preparatoria",
                                value: "Preparatoria"
                            },
                            {
                                id: "Universidad",
                                value: "Universidad"
                            },
                            {
                                id: "Posgrado",
                                value: "Posgrado"
                            },
                            
                        ]
                    },
                    {
                        id: generateUniqSerial(),
                        title: "¿Trabajas en lo que estudiaste?",
                        type: "options",
                        options: [
                            {
                                id: "workInYourStudy01",
                                value: "Si"
                            },
                            {
                                id: "workInYourStudy02",
                                value: "No"
                            }
                        ],
                        field: "workInYourStudy"
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Actualmente cuál es tu ocupación? \nPuedes seleccionar hasta tres casillas",
                        type: "checkbox",
                        field: "ocupation",
                        options: [
                            {
                                id: "ocupation01",
                                value: "Empleado en el sector privado"
                            },
                            {
                                id: "ocupation02",
                                value: "Empleado en el sector publico"
                            },
                            {
                                id: "ocupation03",
                                value: "Estudiante"
                            },
                            {
                                id: "ocupation04",
                                value: "Desemplead@ / Pensionad@"
                            },
                            {
                                id: "ocupation05",
                                value: "Emplead@ informal"
                            },
                            {
                                id: "ocupation06",
                                value: "Trabajo doméstico y/o de cuidado"
                            },
                            {
                                id: "ocupation07",
                                value: "Negocio propio y/o familiar"
                            },
                            {
                                id: "ocupation08",
                                value: "Freelancer"
                            },
                            {
                                id: "ocupation09",
                                value: "Docencia / Academía"
                            },
                            {
                                id: "ocupation10",
                                value: "Nivel de Estudios"
                            }

                        ]
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Puedes especificar un poco más?",
                        type: "select",
                        placeHolder: "Selecciona una categoria de empleado privado",
                        options: [
                            ...PrivateEmployeeCategories
                        ],
                        field: "employeeSelect"
                    },
                    {
                        id: generateUniqSerial(),
                        title: "",
                        type: "select",
                        placeHolder: "Selecciona una categoria de empleado publico",
                        options: [
                            ...PublicEmployeeCategories
                        ],
                        field: "publicSelect"
                    },
                    {
                        id: generateUniqSerial(),
                        title: "",
                        type: "select",
                        placeHolder: "Selecciona una categoria de Estudiante",
                        options: [
                            ...StudentCategories
                        ],
                        field: "studenSelect"
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "Ahora queremos conocer más sobre tu formación académica \nSelecciona el área de conocimiento en el que te especializas",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Negocios y administración"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Ciencias sociales y estudios del comportamiento"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Ingeniería, manufactura y construcción "
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Educación"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Ciencias naturales, exactas y de la computación"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Matemáticas y estadística"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Servicios"
                            },{
                                id: generateUniqSerial(),
                                value: "Artes y humanidades"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Salud"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Agronomía y veterinaria"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Otro"
                            }

                        ],
                        field: "studyArea"
                    },
                    {
                        id: generateUniqSerial(),
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Primaria"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Secundaria"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Preparatoria"
                            }
                        ],
                        field: "studyspecialitiy"
                    }
                    
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿En que actividades participas que no son de trabajo?\nPuedes seleccionar hasta tres casillas",
                        type: "checkbox",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Artisticas"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Artisticas"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Politicas"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "ONG, organizaciones sin findes de lucro"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Labor comunitaria"
                            }
                        ],
                        field: "hobby"
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "Hablanos más de tus actividades e intereses",
                        type: "select",
                        placeHolder: "Selecciona una categoria de empleado privado",
                        options: [
                            ...PrivateEmployeeCategories
                        ],
                        field: "employeeSelect"
                    },
                    {
                        id: generateUniqSerial(),
                        title: "",
                        type: "select",
                        placeHolder: "Selecciona una categoria de empleado publico",
                        options: [
                            ...PublicEmployeeCategories
                        ],
                        field: "publicSelect"
                    },
                    {
                        id: generateUniqSerial(),
                        title: "",
                        type: "select",
                        placeHolder: "Selecciona una categoria de Estudiante",
                        options: [
                            ...StudentCategories
                        ],
                        field: "hobbySelect"
                    }
                ]
            }
        ]
    },
    {
        id: generateUniqSerial(),
        surveyTitle: "Como podrias apoyar al proyecto",
        backgroundColor: "#9c9ba0",
        questionsGroups: [
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Cómo te gustaría participar en este proyecto?\nContesta con honestidad, no pasa nada y selecciona solo una opción.",
                        type: "checkbox",
                        field: "workInMigala",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Tienen mi apoyo, pero no puedo participar de forma activa."
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Me gustaría integrarme en algunas actividades digitales específicas \nque no me requieran mucho tiempo."
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Podría participar en actividades de conformación del partido de forma activa\nsiempre y cuando no intervengan con mis otras actividades."
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Podría dedicar la mitad de mi tiempo de forma física y digital a la \nconformación del partido."
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Podría dedicarme de tiempo completo de forma física y digital a la \nconfomación del partido"
                            }
                        ]
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿A qué actividades podrías integrarte?\nPuedes seleccionar hasta tres casillas.",
                        type: "checkbox",
                        field: "workActivities",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Grupos de discusión de temas específicos"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Labores de organización en linea"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Diseño y/o comunicación"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Desarrollo web"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Labores administrativas"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Redacción de documentos legales"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Difusión y promocion"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Organización de eventos publicos"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Organización de asambleas"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Tramites frente a gobierno"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Organización territorial y visita domiciliaria"
                            }
                        ]
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "¿Cuantas horas podrias dedicarle a la semana a dichas actividades?.",
                        type: "radio",
                        field: "hoursForWeek",
                        options: [
                            {
                                id: "hoursForweek01",
                                value: "2-4"
                            },
                            {
                                id: "hoursForweek02",
                                value: "4-8"
                            },
                            {
                                id: "hoursForweek03",
                                value: "8-12"
                            },
                            {
                                id: "hoursForweek04",
                                value: "12-16"
                            },
                            {
                                id: "hoursForweek05",
                                value: "16 o mas"
                            },
                        ]
                    }
                ]
            },
            {
                id: generateUniqSerial(),
                questions: [
                    {
                        id: generateUniqSerial(),
                        title: "Nuestra forma de organización digital requiere\n" +
                            "que tengamos la capacidad para que estemos todos conectad@s\n" +
                            "¿cuentas con lo siguiente?",
                        type: "checkbox",
                        field: "digitalDevices",
                        options: [
                            {
                                id: generateUniqSerial(),
                                value: "Servicio de internet en casa"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Servicio de datos moviles"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Telefono celular con conexión a internet"
                            },
                            {
                                id: generateUniqSerial(),
                                value: "Laptop o computadora de escritorio"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]