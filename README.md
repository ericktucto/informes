# Informes — Registro de asignación de territorios

Aplicación web de una sola página que muestra el **registro de asignación de territorios** de predicación: para cada territorio, a quién se asignó, en qué fecha y cuándo se completó.

Es una vista de solo lectura. No hay backend ni base de datos: los datos viven en un archivo TypeScript del repositorio y el sitio se publica como contenido estático en GitHub Pages.

## Qué muestra

Una tabla con el mismo formato del registro en papel:

| Columna | Significado |
| --- | --- |
| **Núm. de terr.** | Nombre del territorio (Bernal, Chancay, Rinconada, etc.) |
| **Última fecha en que se completó** | Se calcula sola (ver abajo) |
| **Asignado a** (×4) | Nombre del publicador, **fecha en que se asignó** y **fecha en que se completó** |

Cada territorio ocupa dos filas: la primera con los nombres y la segunda con las fechas. Cada ficha admite **4 asignaciones**.

La "última fecha en que se completó" es la `completed` de la última asignación que tenga fecha. Si ninguna la tiene, se usa el campo `lastCompleted` de la ficha.

## Stack

- [Vue 3](https://vuejs.org/) (`<script setup>`) y TypeScript
- [Vite](https://vite.dev/) como bundler
- [Tailwind CSS 4](https://tailwindcss.com/) (plugin `@tailwindcss/vite`) y `tw-animate-css`
- [shadcn-vue](https://www.shadcn-vue.com/) (estilo `new-york`): solo se usan los componentes de tabla, en `src/components/ui/table`
- [pnpm](https://pnpm.io/) como gestor de paquetes

## Requisitos

- Node.js 22 (la versión que usa el workflow de despliegue)
- pnpm 11 (la versión exacta está fijada en `packageManager` de `package.json`)

## Comandos

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo
pnpm build       # type-check (vue-tsc) + build de producción en dist/
pnpm preview     # previsualizar el build de producción
```

Como `vite.config.ts` define `base: '/informes/'`, en local la app se sirve bajo `/informes/` (por ejemplo `http://localhost:5173/informes/`).

## Estructura

```
src/
├── App.vue                  # Tabla de territorios
├── main.ts                  # Punto de entrada
├── types.ts                 # Tipos Territory y Assignment
├── style.css                # Tailwind y variables de tema
├── data/territories.ts      # Datos del registro (aquí se edita)
├── lib/utils.ts             # Helper cn() de shadcn-vue
└── components/ui/table/     # Componentes de tabla de shadcn-vue
```

## Actualizar los datos

Todo el contenido está en [`src/data/territories.ts`](src/data/territories.ts). Cada elemento del arreglo `territories` es una ficha:

```ts
{
    number: 'Chancay',        // nombre del territorio
    lastCompleted: '',        // solo se usa si ninguna asignación tiene fecha de completado
    assignments: [            // siempre exactamente 4
        { name: 'Nombre Apellido', assigned: '04/03/26', completed: '04/03/26' },
        { name: 'Nombre Apellido', assigned: '11/03/26', completed: '' },  // en curso
        emptyAssignment(),    // casilla libre
        emptyAssignment(),
    ],
}
```

- Las fechas son texto con formato `dd/mm/aa`.
- Si una asignación sigue en curso, deja `completed: ''`.
- Las casillas sin usar se rellenan con `emptyAssignment()`.
- Un territorio con más de 4 asignaciones se continúa en otra ficha con el mismo `number` (por ejemplo, `Bernal` tiene dos).
- `assignments` es una tupla de 4 elementos ([`src/types.ts`](src/types.ts)), así que `pnpm build` falla si una ficha tiene más o menos.

## Despliegue

Cada push a `main` (o una ejecución manual) dispara [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que instala dependencias, ejecuta `pnpm run build` y publica `dist/` en GitHub Pages. El sitio queda en <https://ericktucto.github.io/informes/>.
