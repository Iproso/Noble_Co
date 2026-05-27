## 2024-05-27 - [XSS Fix] Removed dangerouslySetInnerHTML in Client Component
**Vulnerability:** XSS risk in `src/components/features/global/GlobeHero.tsx`.
**Learning:** The `dangerouslySetInnerHTML` attribute was used to allow formatted text (e.g. bold, colored spans) in a hero title, which presents an XSS attack vector if the title comes from user-supplied data or external input.
**Prevention:** Rather than using `dangerouslySetInnerHTML`, pass a `React.ReactNode` directly as a prop (e.g., `title: React.ReactNode`) and supply JSX to the component. This allows Next.js/React to handle XSS prevention natively while still supporting rich formatting.
