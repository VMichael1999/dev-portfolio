import type { PortfolioData } from '@/types/portfolio.types'

export const portfolioData: PortfolioData = {
  name: 'Michael Valdiviezo Maza',
  firstName: 'Michael',
  lastName: 'Valdiviezo',
  title: 'Mobile Developer · Flutter · Android (Kotlin) · Swift · Clean Architecture',
  terminalSummary:
    'Mobile Developer con +3 años en producción, especializado en Flutter/Dart, Swift y Android nativo (Kotlin). Integración de pagos internacionales (Stripe, Wompi) y Binance P2P. Aplicación de Clean Architecture y gestión de estado avanzada (Bloc, Riverpod) en equipos colaborativos.',
  fullSummary:
    'Mobile Developer con más de 3 años de experiencia en producción, especializado en Flutter/Dart, Swift y Android nativo (Kotlin). He desarrollado aplicaciones reales para los sectores de transporte y fintech, integrando pasarelas de pago internacionales (Stripe, Wompi y Afinia) y sistemas como Binance P2P. Aplico Clean Architecture y gestión de estado avanzada (Bloc, Riverpod, Provider) en proyectos colaborativos con equipos de producto, backend, QA y diseño.',
  contact: {
    phone: '+51 929 760 277',
    email: 'vmmichael6@gmail.com',
    location: 'Lima, Perú',
  },
  profiles: [
    {
      label: 'linkedin.com/in/michael-valdiviezo-maza',
      url: 'https://www.linkedin.com/in/michael-valdiviezo-maza-143807298/',
      icon: 'linkedin',
    },
    {
      label: 'github.com/VMichael1999',
      url: 'https://github.com/VMichael1999',
      icon: 'github',
    },
  ],
  education: [
    {
      degree: 'Ingeniería de Software',
      institution: 'Universidad Tecnológica del Perú',
      period: '2019 – 2025',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2 Intermedio Alto' },
  ],
  specialties: [
    {
      icon: 'mobile',
      title: 'Mobile Dev',
      description: 'Flutter, Swift, Android — apps publicadas en producción',
    },
    {
      icon: 'layers',
      title: 'Arquitectura',
      description: 'Clean Architecture, MVVM, modularización por capas',
    },
    {
      icon: 'card',
      title: 'Pagos Digitales',
      description: 'Stripe, Google Pay, Apple Pay, Wompi, Binance P2P',
    },
    {
      icon: 'team',
      title: 'Trabajo en Equipo',
      description: 'Scrum, equipos de producto, backend, QA y diseño',
    },
  ],
  skillGroups: [
    {
      category: 'Mobile',
      icon: 'mobile',
      items: ['Flutter / Dart', 'React Native', 'Android (Kotlin · Java)', 'Swift · SwiftUI', 'Jetpack Compose'],
    },
    {
      category: 'Arquitectura',
      icon: 'architecture',
      items: ['Clean Architecture', 'MVVM · Modularización', 'Bloc · Riverpod', 'Provider · GetX'],
    },
    {
      category: 'Integraciones & Pagos',
      icon: 'payments',
      items: ['Stripe · Google Pay · Apple Pay', 'Wompi · Tilopay · Afina', 'Binance P2P', 'Firebase · GCP', 'REST APIs · WebSockets'],
    },
    {
      category: 'DevOps & Tools',
      icon: 'tools',
      items: ['Git · GitHub', 'Google Play · App Store', 'Postman · Gradle · Maven', 'Scrum · Lean'],
    },
  ],
  experience: [
    {
      role: 'Mobile Developer',
      company: 'Toolrides SAC',
      period: 'Nov 2024 – Abr 2026',
      description:
        'Aplicaciones multiplataforma Android/iOS con Flutter/Dart y Kotlin nativo. Integración de pagos internacionales: Stripe, Google Pay, Apple Pay, Wompi, Tilopay y Afina. Ciclos completos de despliegue en Google Play y App Store (versionado, certificados, TestFlight).',
      tags: ['Flutter', 'Kotlin', 'Stripe', 'Clean Architecture', 'Bloc', 'Riverpod'],
    },
    {
      role: 'Mobile Developer (Contractor)',
      company: 'Métrica Perú · Cliente: Ligo',
      period: 'Feb 2024 – Abr 2026',
      description:
        'Funcionalidades críticas de la app Ligo en Flutter. Integración de Binance P2P: vinculación, API Key/Secret Key y validación. Módulos de autenticación, geolocalización y QR dinámico. Colaboración con backend, QA y diseño bajo Scrum.',
      tags: ['Flutter', 'Binance P2P', 'QR Dinámico', 'Scrum', 'Firebase'],
    },
    {
      role: 'Mobile Developer',
      company: 'Abexa Cloud Company SAC',
      period: 'Abr 2023 – Oct 2024',
      description:
        'Apps Flutter y Kotlin para el sector de transporte urbano. Gestión operativa en campo: incidencias, asistencia e inspecciones. Soluciones de pago digital (QR y billetera digital). Integración de APIs REST, geolocalización, mapas y notificaciones push.',
      tags: ['Flutter', 'Kotlin', 'REST APIs', 'Google Play', 'App Store'],
    },
    {
      role: 'Especialista Soporte TI',
      company: 'Abexa Cloud Company SAC',
      period: 'Ene 2020 – Abr 2023',
      description:
        'Soporte técnico especializado para sistemas GPS y validadores electrónicos de transporte. Instalación, configuración y diagnóstico de fallas en campo, reduciendo tiempos de inactividad. Capacitación de usuarios y operadores.',
      tags: ['Soporte TI', 'GPS', 'Hardware', 'Diagnóstico'],
    },
  ],
  nav: [
    { label: 'inicio()', href: '#inicio' },
    { label: 'sobreMi()', href: '#sobre-mi' },
    { label: 'experiencia()', href: '#experiencia' },
    { label: 'skills()', href: '#skills' },
    { label: 'educacion()', href: '#educacion' },
    { label: 'contacto()', href: '#contacto' },
  ],
}
