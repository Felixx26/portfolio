# CLAUDE.md — Portafolio de Felix Garcia

## Propósito del proyecto

Sitio personal de **Felix Rafael Garcia Martinez**, desarrollador de software full-stack. Tiene un único objetivo: **conseguir oportunidades laborales full-stack** presentando su perfil profesional y un índice de sus proyectos de software.

**Audiencia:** reclutadores técnicos y no técnicos, y engineering managers, principalmente de EE. UU. (inglés) y de Latinoamérica y España (español). Revisan el sitio en menos de un minuto: lo importante debe entenderse de un vistazo.

**Mensaje que debe transmitir:** un ingeniero full-stack con experiencia real en producción, confiable, que sabe integrar sistemas y resolver distintos tipos de problema. Los textos del sitio son generales y no se centran en un sector concreto; la amplitud de su perfil se demuestra a través de los proyectos.

## Alcance: qué se hace y qué no

**Dentro del alcance**
- Mantener y mejorar el contenido del perfil (`src/i18n/profile.ts`).
- Añadir, editar o archivar proyectos en `src/content/projects/`.
- Mejoras de diseño que respeten `docs/DESIGN.md`.
- Mejoras de rendimiento, accesibilidad y SEO.
- Páginas de detalle de proyecto, cuando se pidan.

**Fuera del alcance (no hacer sin que Felix lo pida explícitamente)**
- Convertir el sitio en blog, tienda, landing de servicios o app con login.
- Añadir frameworks de UI (React, Vue, Tailwind, etc.), CMS, analíticas de terceros, chatbots o widgets.
- Añadir JavaScript en el cliente, animaciones vistosas o cambios de identidad visual.
- Modificar la experiencia laboral (`experience` en `profile.ts`): son datos reales del CV.
- Inventar datos: logros, cifras, empresas, fechas, tecnologías o enlaces que Felix no haya dado.
- Publicar teléfono, dirección exacta u otros datos personales sensibles.
- Instalar dependencias nuevas.

Si una petición choca con estas reglas, explícalo brevemente y propone la alternativa que sí encaja con el objetivo, en lugar de ejecutarla.

## Stack

- **Astro 7** + **TypeScript** (modo estricto). Sitio 100% estático, sin JavaScript en el cliente.
- **pnpm** como gestor de paquetes. **Node 24** (ver `.nvmrc` y `engines` en `package.json`).
- CSS propio: tokens globales en `src/styles/global.css` y `<style>` con scope en cada componente.
- Despliegue en Vercel desde la rama `main`.
- Bilingüe: inglés por defecto en `/`, español en `/es/`.

## Estructura

```
src/
  i18n/profile.ts        → TODO el contenido: contacto, skills, experiencia y textos de UI (en/es)
  components/Home.astro  → la página: hero, sobre mí, experiencia, proyectos, contacto
  layouts/Base.astro     → <head>, SEO, navegación, footer
  content.config.ts      → esquema de los proyectos
  content/projects/*.md  → un archivo por proyecto (los que empiezan con "_" se ignoran)
  styles/global.css      → tokens de diseño y estilos base
  pages/index.astro      → versión en inglés
  pages/es/index.astro   → versión en español
docs/
  DESIGN.md              → guía de diseño (obligatoria para cualquier cambio visual)
  PROJECT_IDEAS.md       → ideas y criterios de los proyectos del portafolio
```

## Reglas

1. **Contenido en un solo lugar.** Ningún texto visible va escrito directamente en un componente: todo vive en `profile.ts` o en el `.md` del proyecto.
2. **Siempre bilingüe.** Todo texto nuevo existe en `en` y `es`, con la misma información y redacción natural en cada idioma.
3. **Diseño.** Lee `docs/DESIGN.md` antes de cualquier cambio visual. Usa solo sus tokens y componentes. Si creas un componente o token nuevo, documéntalo allí.
4. **Tono.** Profesional, concreto, sin superlativos vacíos. Mostrar, no declarar (ver sección 8 de `docs/DESIGN.md`).
5. **Cambios pequeños.** Modifica solo lo que se pide. No refactorices ni "mejores" otras partes sin preguntar.
6. **Rendimiento.** No añadas JavaScript al cliente. Imágenes con `<Image />` de `astro:assets`.

## Tareas frecuentes

### Añadir un proyecto
1. Copia `src/content/projects/_plantilla.md` a `src/content/projects/<slug>.md` (slug en kebab-case).
2. Completa los campos con la información que dé Felix: `title`, `summary_en`, `summary_es`, `stack`, `repo`, `demo`, `date`, `status` (`live` | `in-progress` | `archived`), `featured`.
3. Los resúmenes describen el problema y el resultado en 1–2 frases, no la lista de tecnologías (para eso está `stack`).
4. Si falta un dato obligatorio, pregúntalo; no lo inventes. Si falta un enlace opcional, omite el campo.
5. Como máximo 3 proyectos con `featured: true`.
6. Ejecuta `pnpm build` para validar el esquema.

### Actualizar el perfil
Edita `src/i18n/profile.ts`. Mantén la estructura de tipos y la equivalencia entre idiomas.

### Revisar el sitio
Al terminar un cambio, comprueba: tema claro y oscuro, ancho 390px y 1280px, ambos idiomas, y la checklist de la sección 9 de `docs/DESIGN.md`.

## Comandos

```bash
pnpm install    # instalar dependencias
pnpm dev        # servidor local en http://localhost:4321
pnpm build      # build de producción en dist/ (debe pasar sin errores)
pnpm preview    # servir el build localmente
```

## Antes de dar una tarea por terminada

- `pnpm build` termina sin errores.
- El cambio respeta el alcance, `docs/DESIGN.md` y las reglas de este archivo.
- Resume a Felix en pocas líneas qué cambiaste y en qué archivos.
