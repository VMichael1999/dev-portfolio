# Michael Valdiviezo — Portafolio

```dart
void main() {
  runApp(Portfolio(
    dev: 'Michael Valdiviezo',
    stack: ['Flutter', 'Kotlin', 'Swift', 'React'],
    focus: 'Mobile · Clean Architecture · Pagos Digitales',
  ));
}
```

Portafolio personal construido con **React + TypeScript + Tailwind CSS**. Diseño terminal-style con arquitectura limpia, sin hardcoding y con pruebas unitarias.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| UI | React 19 · TypeScript · Tailwind CSS v4 |
| Build | Vite 8 |
| Tests | Vitest 4 · React Testing Library |
| Fuentes | JetBrains Mono · Inter |

## Arquitectura

```
src/
├── types/          # Contratos (interfaces)
├── data/           # Única fuente de verdad — portfolio.data.ts
├── components/
│   ├── ui/         # Primitivos reutilizables (TerminalWindow, SectionHeader)
│   ├── Hero/
│   ├── About/
│   ├── Experience/
│   ├── Skills/
│   ├── Education/
│   └── Contact/
└── App.tsx
```

> Para actualizar el CV basta editar `src/data/portfolio.data.ts`.

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm test          # unit tests
npm run build     # producción
```

## Contacto

- **Email** vmmichael6@gmail.com
- **LinkedIn** [michael-valdiviezo-maza](https://www.linkedin.com/in/michael-valdiviezo-maza-143807298/)
- **GitHub** [VMichael1999](https://github.com/VMichael1999)
