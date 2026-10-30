import type { Assignment, Territory } from "@/types";

const emptyAssignment = (): Assignment => ({ name: '', assigned: '', completed: '' })

export const territories: Territory[] = [
    // ── BERNAL ── EMPEZAR abre; cierra con TERMINAR, Antonia o al 3er CONTINUAR
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
            { name: 'Erick Tucto', assigned: '27/06/26', completed: '10/07/26' },
        ],
    },
    {
        number: 'Bernal',
        lastCompleted: '',
        assignments: [
            { name: 'Julio Prado', assigned: '17/07/26', completed: '07/08/26' },
            { name: 'Julio Prado', assigned: '14/08/26', completed: '28/08/26' },
            { name: 'Julio Prado', assigned: '11/09/26', completed: '30/09/26' },
            { name: 'Andrés Campos', assigned: '07/10/26', completed: '08/10/26' },
        ],
    },
    {
        number: 'Bernal',
        lastCompleted: '',
        assignments: [
            { name: 'Julio Hipolito', assigned: '17/10/26', completed: '23/10/26' },
            { name: 'Olivorio Chavez', assigned: '29/10/26', completed: '30/10/26' },
            emptyAssignment(),
            emptyAssignment(),
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
            { name: 'Walter Pintado', assigned: '07/07/26', completed: '07/07/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '22/07/26', completed: '22/07/26' },
            { name: 'Walter Pintado', assigned: '28/07/26', completed: '28/07/26' },
            { name: 'Walter Pintado', assigned: '04/08/26', completed: '04/08/26' },
            { name: 'Walter Pintado', assigned: '18/08/26', completed: '18/08/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '08/09/26', completed: '08/09/26' },
            { name: 'Julio Prado', assigned: '25/09/26', completed: '25/09/26' },
            { name: 'Kevin Bazan', assigned: '08/10/26', completed: '08/10/26' },
            { name: 'Julio Ruiz', assigned: '16/10/26', completed: '16/10/26' },
        ],
    },
    {
        number: 'Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Andrés Campos', assigned: '28/10/26', completed: '28/10/26' },
            emptyAssignment(),
            emptyAssignment(),
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
            { name: 'Erick Tucto', assigned: '13/06/26', completed: '26/06/26' },
            { name: 'Erick Tucto', assigned: '04/07/26', completed: '22/08/26' },
        ],
    },
    {
        number: 'Dos Pueblos',
        lastCompleted: '',
        assignments: [
            { name: 'Erick Tucto', assigned: '29/08/26', completed: '26/09/26' },
            { name: 'Julio Prado', assigned: '02/10/26', completed: '09/10/26' },
            { name: 'Manuel Paiva', assigned: '17/10/26', completed: '' },
            emptyAssignment(),
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
            { name: 'Erick Tucto', assigned: '20/06/26', completed: '08/07/26' },
            { name: 'Walter Pintado', assigned: '15/07/26', completed: '31/07/26' },
            { name: 'Walter Pintado', assigned: '11/08/26', completed: '25/08/26' },
        ],
    },
    {
        number: 'Nv. Chancay',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '15/09/26', completed: '06/10/26' },
            { name: 'Andrés Campos', assigned: '14/10/26', completed: '20/10/26' },
            { name: 'Julio Hipolito', assigned: '31/10/26', completed: '' },
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
            { name: 'Olivorio Chavez', assigned: '25/06/26', completed: '15/07/26' },
        ],
    },
    {
        number: 'San Francisco',
        lastCompleted: '',
        assignments: [
            { name: 'Andrés Campos', assigned: '22/07/26', completed: '29/07/26' },
            { name: 'Andrés Campos', assigned: '05/08/26', completed: '12/08/26' },
            { name: 'Andrés Campos', assigned: '19/08/26', completed: '26/08/26' },
            { name: 'Andrés Campos', assigned: '09/09/26', completed: '16/09/26' },
        ],
    },
    {
        number: 'San Francisco',
        lastCompleted: '',
        assignments: [
            { name: 'Manuel Paiva', assigned: '10/10/26', completed: '13/10/26' },
            { name: 'Julio Hipolito', assigned: '24/10/26', completed: '27/10/26' },
            emptyAssignment(),
            emptyAssignment(),
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
            { name: 'Olivorio Chavez', assigned: '02/07/26', completed: '02/07/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '09/07/26', completed: '09/07/26' },
            { name: 'Olivorio Chavez', assigned: '16/07/26', completed: '16/07/26' },
            { name: 'Julio Prado', assigned: '24/07/26', completed: '24/07/26' },
            { name: 'Olivorio Chavez', assigned: '30/07/26', completed: '30/07/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '06/08/26', completed: '06/08/26' },
            { name: 'Olivorio Chavez', assigned: '13/08/26', completed: '13/08/26' },
            { name: 'Olivorio Chavez', assigned: '20/08/26', completed: '20/08/26' },
            { name: 'Olivorio Chavez', assigned: '27/08/26', completed: '27/08/26' },
        ],
    },
    {
        number: 'Vega del Chilco',
        lastCompleted: '',
        assignments: [
            { name: 'Olivorio Chavez', assigned: '10/09/26', completed: '10/09/26' },
            { name: 'Olivorio Chavez', assigned: '17/09/26', completed: '17/09/26' },
            { name: 'Olivorio Chavez', assigned: '24/09/26', completed: '24/09/26' },
            { name: 'Olivorio Chavez', assigned: '22/10/26', completed: '22/10/26' },
        ],
    },

    // ── RINCONADA ── Cirilo es la parte final; se completa en 4 salidas
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
    {
        number: 'Rinconada',
        lastCompleted: '',
        assignments: [
            { name: 'Erick Tucto', assigned: '11/07/26', completed: '18/07/26' },
            { name: 'Erick Tucto', assigned: '01/08/26', completed: '' },
            { name: 'Erick Tucto', assigned: '08/08/26', completed: '15/08/26' },
            { name: 'Erick Tucto', assigned: '12/09/26', completed: '29/09/26' },
        ],
    },
    {
        number: 'Rinconada',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '07/10/26', completed: '' },
            emptyAssignment(),
            emptyAssignment(),
            emptyAssignment(),
        ],
    },

    // ── SAN CLEMENTE ── EMPEZAR asigna; el CONTINUAR previo al siguiente EMPEZAR completa
    {
        number: 'San Clemente',
        lastCompleted: '',
        assignments: [
            { name: 'Julio Prado', assigned: '16/01/26', completed: '06/02/26' },
            { name: 'Julio Prado', assigned: '13/02/26', completed: '06/03/26' },
            { name: 'Julio Prado', assigned: '13/03/26', completed: '27/03/26' },
            { name: 'Manuel Paiva', assigned: '04/04/26', completed: '26/08/26' },
        ],
    },
    {
        number: 'San Clemente',
        lastCompleted: '',
        assignments: [
            { name: 'Walter Pintado', assigned: '09/09/26', completed: '01/10/26' },
            { name: 'Erick Tucto', assigned: '10/10/26', completed: '' },
            emptyAssignment(),
            emptyAssignment(),
        ],
    },
]
