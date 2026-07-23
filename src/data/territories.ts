import type { Assignment, Territory } from "@/types";

const emptyAssignment = (): Assignment => ({ name: '', assigned: '', completed: '' })

export const territories: Territory[] = [
    // ── BERNAL ── EMPEZAR abre; cierra con TERMINAR o al 3er CONTINUAR
    {
        number: 'Bernal',
        lastCompleted: '',
        assignments: [
            { name: 'Kevin Bazan', assigned: '22/01/26', completed: '07/02/26' },
            { name: 'Oziel Paisig', assigned: '10/02/26', completed: '04/03/26' },
            { name: 'Manuel Paiva', assigned: '14/03/26', completed: '09/04/26' },
            { name: 'Andrés Campos', assigned: '01/04/26', completed: '21/04/26' },
        ],
    },
    {
        number: 'Bernal',
        lastCompleted: '',
        assignments: [
            { name: 'Julio Prado', assigned: '24/04/26', completed: '02/05/26' },
            { name: 'Olivorio Chavez', assigned: '07/05/26', completed: '03/06/26' },
            { name: 'Walter Pintado', assigned: '16/06/26', completed: '23/06/26' },
            { name: 'Erick Tucto', assigned: '27/06/26', completed: '' },
        ],
    },

    // ── CHANCAY ── se completa el mismo día
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Andrés Campos', assigned: '04/02/26', completed: '04/02/26' },
            { name: 'Andrés Campos', assigned: '11/02/26', completed: '11/02/26' },
            { name: 'Oziel Paisig', assigned: '24/02/26', completed: '24/02/26' },
            { name: 'Andrés Campos', assigned: '25/02/26', completed: '25/02/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Andrés Campos', assigned: '04/03/26', completed: '04/03/26' },
            { name: 'Andrés Campos', assigned: '11/03/26', completed: '11/03/26' },
            { name: 'Oziel Paisig', assigned: '24/03/26', completed: '24/03/26' },
            { name: 'Andrés Campos', assigned: '25/03/26', completed: '25/03/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '01/04/26', completed: '01/04/26' },
            { name: 'Manuel Paiva', assigned: '11/04/26', completed: '11/04/26' },
            { name: 'Walter Pintado', assigned: '15/04/26', completed: '15/04/26' },
            { name: 'Olivorio Chavez', assigned: '23/04/26', completed: '23/04/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '05/05/26', completed: '05/05/26' },
            { name: 'Walter Pintado', assigned: '02/06/26', completed: '02/06/26' },
            { name: 'Walter Pintado', assigned: '17/06/26', completed: '17/06/26' },
            emptyAssignment(),
        ],
    },

    // ── DOS PUEBLOS ── pares: 1ª fecha asigna, 2ª completa
    {
        number: 'Dos Pueblos',
        lastCompleted: '',
        assignments: [
            { name: 'Erick Tucto', assigned: '07/02/26', completed: '28/02/26' },
            { name: 'Erick Tucto', assigned: '07/03/26', completed: '28/03/26' },
            { name: 'Erick Tucto', assigned: '13/06/26', completed: '' },
            { name: 'Julio Prado', assigned: '26/06/26', completed: '' },
        ],
    },

    // ── NUEVO CHANCAY ── pares
    {
        number: 'Nv. Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Oziel Paisig', assigned: '03/02/26', completed: '11/02/26' },
            { name: 'Andrés Campos', assigned: '18/02/26', completed: '25/02/26' },
            { name: 'Oziel Paisig', assigned: '03/03/26', completed: '11/03/26' },
            { name: 'Andrés Campos', assigned: '18/03/26', completed: '25/03/26' },
        ],
    },
    {
        number: 'Nv. Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Oziel Paisig', assigned: '31/03/26', completed: '07/04/26' },
            { name: 'Erick Tucto', assigned: '11/04/26', completed: '17/04/26' },
            { name: 'Erick Tucto', assigned: '25/04/26', completed: '01/05/26' },
            { name: 'Erick Tucto', assigned: '09/05/26', completed: '14/05/26' },
        ],
    },
    {
        number: 'Nv. Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '09/06/26', completed: '18/06/26' },
            { name: 'Erick Tucto', assigned: '20/06/26', completed: '' },
            emptyAssignment(),
            emptyAssignment(),
        ],
    },

    // ── SAN FRANCISCO ── pares
    {
        number: 'San Francisco',
        lastCompleted: '',
        assignments: [
            { name: 'Kevin Bazan', assigned: '05/02/26', completed: '12/02/26' },
            { name: 'Oziel Paisig', assigned: '17/02/26', completed: '18/02/26' },
            { name: 'Kevin Bazan', assigned: '26/02/26', completed: '28/02/26' },
            { name: 'Kevin Bazan', assigned: '05/03/26', completed: '12/03/26' },
        ],
    },
    {
        number: 'San Francisco',
        lastCompleted: '',
        assignments: [
            { name: 'Oziel Paisig', assigned: '17/03/26', completed: '18/03/26' },
            { name: 'Kevin Bazan', assigned: '26/03/26', completed: '28/03/26' },
            { name: 'Julio Prado', assigned: '03/04/26', completed: '08/04/26' },
            { name: 'Kevin Bazan', assigned: '16/04/26', completed: '22/04/26' },
        ],
    },
    {
        number: 'San Francisco',
        lastCompleted: '',
        assignments: [
            { name: 'Andrés Campos', assigned: '29/04/26', completed: '08/05/26' },
            { name: 'Juan Padilla', assigned: '15/05/26', completed: '03/06/26' },
            { name: 'Andrés Campos', assigned: '10/06/26', completed: '17/06/26' },
            { name: 'Olivorio Chavez', assigned: '25/06/26', completed: '' },
        ],
    },

    // ── VEGA DEL CHILCO ── se completa el mismo día
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '05/02/26', completed: '05/02/26' },
            { name: 'Olivorio Chavez', assigned: '12/02/26', completed: '12/02/26' },
            { name: 'Olivorio Chavez', assigned: '19/02/26', completed: '19/02/26' },
            { name: 'Olivorio Chavez', assigned: '26/02/26', completed: '26/02/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '05/03/26', completed: '05/03/26' },
            { name: 'Olivorio Chavez', assigned: '12/03/26', completed: '12/03/26' },
            { name: 'Olivorio Chavez', assigned: '19/03/26', completed: '19/03/26' },
            { name: 'Olivorio Chavez', assigned: '26/03/26', completed: '26/03/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '08/04/26', completed: '08/04/26' },
            { name: 'Andrés Campos', assigned: '22/04/26', completed: '22/04/26' },
            { name: 'Walter Pintado', assigned: '06/05/26', completed: '06/05/26' },
            { name: 'Walter Pintado', assigned: '12/05/26', completed: '12/05/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '04/06/26', completed: '04/06/26' },
            { name: 'Olivorio Chavez', assigned: '11/06/26', completed: '11/06/26' },
            { name: 'Walter Pintado', assigned: '24/06/26', completed: '24/06/26' },
            emptyAssignment(),
        ],
    },

    // RINCONADA
    {
        number: 'Rinconada',
        lastCompleted: '',
        assignments: [
            { name: 'Erick Tucto', assigned: '14/02/26', completed: '21/02/26' },
            { name: 'Erick Tucto', assigned: '14/03/26', completed: '21/03/26' },
            { name: 'Julio Prado', assigned: '10/04/26', completed: '29/04/26' },
            { name: 'Erick Tucto', assigned: '06/06/26', completed: '' },
        ],
    },

    // SAN CLEMENTE
    {
        number: 'San Clemente',
        lastCompleted: '',
        assignments: [
            { name: 'Julio Prado', assigned: '16/01/26', completed: '06/02/26' },
            { name: 'Julio Prado', assigned: '13/02/26', completed: '06/03/26' },
            { name: 'Julio Prado', assigned: '13/03/26', completed: '27/03/26' },
            { name: 'Manuel Paiva', assigned: '04/04/26', completed: '' },
        ],
    },
]
