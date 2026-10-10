# Guía de diseño — Portafolio de Felix Garcia

Esta guía define la estética y los lineamientos del sitio. Todo cambio visual debe cumplirla. Si una decisión no está cubierta aquí, elige la opción más sobria y añádela a esta guía.

---

## 1. Principios

1. **Contenido primero.** El sitio existe para mostrar proyectos y experiencia. Ningún adorno debe competir con ellos.
2. **Sobrio y editorial.** Mucho espacio en blanco, tipografía con carácter, color usado con intención. Nada de gradientes llamativos, sombras pesadas, glassmorphism ni ilustraciones genéricas.
3. **Rápido por defecto.** HTML estático, cero JavaScript en el cliente salvo necesidad real. Cada kilobyte añadido debe justificarse.
4. **Accesible siempre.** Contraste AA como mínimo, foco visible, navegable con teclado, respeta `prefers-reduced-motion`.
5. **Consistente.** Los mismos tokens, componentes y patrones en todas las secciones y páginas.

---

## 2. Color

Todos los colores se definen como variables en `src/styles/global.css`. **Nunca uses un color directo (hex, rgb) en un componente**: usa siempre un token.

| Token | Oscuro (por defecto) | Claro | Uso |
|---|---|---|---|
| `--bg` | `#0e0f0c` | `#f6f5ef` | Fondo de página |
| `--surface` | `#16180f` | `#ffffff` | Tarjetas y superficies elevadas |
| `--line` | `#2a2d22` | `#dddbcf` | Bordes y separadores |
| `--text` | `#ecebe4` | `#17180f` | Texto principal |
| `--muted` | `#9a9a8c` | `#63634f` | Texto secundario, metadatos |
| `--accent` | `#c6f25d` | `#3d6b00` | Acento: CTA principal, enlaces activos, numeración, estados "live" |
| `--accent-ink` | `#0e0f0c` | `#ffffff` | Texto sobre fondo `--accent` |

**Reglas de uso**
- El acento es escaso: como referencia, no más de un elemento con acento fuerte (botón primario) por pantalla, más detalles pequeños (numeración de sección, punto de disponibilidad, `@ empresa`).
- El tema sigue `prefers-color-scheme`. Cualquier color nuevo necesita su valor en ambos temas y debe comprobarse en los dos.
- Para transparencias, usa `color-mix(in srgb, var(--token) X%, transparent)`.
- No añadas colores semánticos (rojo, azul, etc.) salvo que un componente lo requiera de verdad; en ese caso, defínelos como tokens nuevos aquí y en `global.css`.

---

## 3. Tipografía

Tres familias, cada una con un rol fijo:

| Token | Familia | Rol |
|---|---|---|
| `--serif` | Fraunces | Titulares: nombre, títulos de sección, títulos de tarjeta, email de contacto |
| `--sans` | Inter | Texto de lectura, navegación, botones |
| `--mono` | JetBrains Mono | Metadatos: eyebrows, fechas, etiquetas de tecnología, numeración, estados |

**Escala**
| Elemento | Estilo |
|---|---|
| H1 (nombre) | serif 400, `clamp(48px, 9vw, 104px)`, line-height .95, letter-spacing -.03em |
| H2 (sección) | serif 500, `clamp(28px, 4vw, 40px)`, line-height 1.1 |
| H3 (tarjeta) | serif 500, 22px |
| H3 (puesto, grupo) | sans 500, 14–19px |
| Cuerpo | sans 400, 16px (17px en "Sobre mí"), line-height 1.65 |
| Tagline | sans 400, `clamp(17px, 2vw, 20px)` |
| Eyebrow | mono 500, 12px, MAYÚSCULAS, letter-spacing .12em, color `--muted` |
| Etiqueta / tag | mono 12px |

**Reglas**
- La serif es solo para titulares; nunca para párrafos.
- La mono es solo para metadatos; nunca para frases largas.
- No uses negritas en párrafos para enfatizar; reescribe la frase.
- Máximo ~65 caracteres por línea en texto de lectura (`max-width: 640px`).

---

## 4. Espaciado y layout

- Ancho máximo del contenido: `--max` = 1080px, con 20px de margen lateral (`.wrap`).
- Secciones: `padding: 88px 0`, separadas por `border-top: 1px solid var(--line)`.
- Escala de espacios preferida: **4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 56, 72, 88**. No inventes valores intermedios.
- Radios: 4px (tags, botón de idioma), 6px (botones), 10px (tarjetas y contenedores).
- Breakpoints de referencia: 560px, 640px, 720px, 820px. Diseña mobile-friendly desde el inicio y comprueba siempre a 390px de ancho.

---

## 5. Componentes

**Encabezado de sección** — número en mono con acento (`01`, `02`…) + H2 serif. Toda sección nueva lleva el siguiente número correlativo.

**Botones** — dos variantes únicamente:
- `.btn.primary`: fondo `--accent`, texto `--accent-ink`. Uno por sección como máximo.
- `.btn`: borde `--line`, fondo transparente.
- Hover: `translateY(-1px)`. Enlaces externos terminan en `↗`; acciones internas en `→`.

**Tags** (`.tag`) — mono 12px, borde `--line`, color `--muted`. Para tecnologías y palabras clave; nunca para frases.

**Tarjeta de proyecto** (`.card`) — fondo `--surface`, borde `--line`, radio 10px, padding 24px. Orden fijo: estado + año → título (serif) → resumen → tags de stack → enlaces (Código ↗, Demo ↗). Hover: el borde pasa a `--accent`.

**Estados de proyecto** — mono 11px en mayúsculas. `live` usa `--accent`; `in-progress` y `archived` usan `--muted`.

**Timeline de experiencia** — dos columnas (fechas en mono | contenido); en móvil, una columna.

**Estado vacío** — borde discontinuo, `// TODO` en mono con acento, mensaje breve.

Antes de crear un componente nuevo, comprueba si uno existente lo resuelve. Si creas uno, documéntalo en esta sección.

---

## 6. Movimiento

- Transiciones de 150ms solo en `color`, `background`, `border-color` y `transform`.
- Sin animaciones de entrada, parallax ni efectos al hacer scroll.
- Todo movimiento se desactiva con `prefers-reduced-motion: reduce` (ya está en `global.css`).

---

## 7. Imágenes y medios

- Capturas de proyectos: formato WebP o AVIF, usando `<Image />` de `astro:assets` para optimización automática.
- Proporción 16:10 para capturas en tarjetas; siempre con `alt` descriptivo en ambos idiomas.
- Sin fotos de stock, ilustraciones genéricas ni emojis decorativos.
- Iconos: solo si aportan información; SVG en línea, trazo de 1.5px, color `currentColor`.

---

## 8. Voz y tono del contenido

- **Profesional, directo, concreto.** Frases cortas. Verbos de acción (construyo, integré, optimicé).
- **Mostrar, no declarar.** En vez de "soy versátil", describe proyectos de tipos distintos y deja que el lector lo concluya.
- **Generalista con sutileza.** La experiencia laboral es en banca digital, pero el resto del sitio (resúmenes, textos de proyectos, llamadas a la acción) no debe centrarse en un sector. No escribas frases como "no solo hago fintech"; la variedad se demuestra con los proyectos.
- **Resultados antes que herramientas.** "Redujo el tiempo de carga a la mitad" vale más que "usé Redis".
- **Bilingüe equivalente.** Inglés y español deben decir lo mismo con naturalidad, no traducción literal.
- Nada de superlativos vacíos ("apasionado", "experto", "ninja", "rockstar").

---

## 9. Checklist antes de publicar un cambio visual

- [ ] Usa solo tokens de color, tipografía y espaciado de esta guía.
- [ ] Se ve bien en tema oscuro y claro.
- [ ] Se ve bien a 390px y a 1280px de ancho.
- [ ] Todo el texto existe en inglés y en español.
- [ ] Contraste suficiente y foco visible con teclado.
- [ ] No añade JavaScript al cliente (o está justificado).
- [ ] `pnpm build` termina sin errores ni advertencias nuevas.
