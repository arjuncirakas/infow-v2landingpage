export const translations = {
  en: {
    nav: {
      platform: 'Platform',
      people: 'People',
      process: 'Process',
      industries: 'Industries',
      faq: 'FAQ',
      signIn: 'Sign in',
      requestDemo: 'Request Demo',
      navigation: 'Navigation',
      close: 'Close',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      inflowHome: 'InFlow home',
      selectLanguage: 'Select language',
      languageLabel: 'Language: {{label}}',
    },
    hero: {
      badge: 'One platform for your entire operation',
      headline1: 'One platform.',
      headline2: 'Complete operational control.',
      subtext:
        'Manage tasks, petty cash, funds, service requests, and your whole team across every site and industry, in real time.',
      contactUs: 'Contact us',
      cards: {
        construction: 'Construction',
        logistics: 'Logistics',
        healthcare: 'Healthcare',
        supplyChain: 'Supply chain',
        operations: 'Operations',
      },
    },
    workflow: {
      eyebrow: 'Where work breaks down',
      titleBefore: 'Work should flow. Most ',
      titleAccent: "organizations don't.",
      oldWay: 'The old way',
      withInflow: 'With inFlow',
      tools: {
        email: 'Email',
        calendar: 'Calendar',
        chats: 'Chats',
        cash: 'Cash book',
        sheets: 'Sheets',
      },
      hub: {
        onePlatform: 'One platform',
        allSynced: 'All synced',
        caption: 'Tasks, finance, chat, requests & reports — unified',
        modules: {
          tasks: 'Tasks',
          finance: 'Finance',
          requests: 'Requests',
          chat: 'Chat',
          reports: 'Reports',
        },
      },
    },
    people: {
      badge: 'Built around people',
      titleBefore: 'Made ',
      titleAccent1: 'for',
      titleMiddle: ' the ',
      titleAccent2: 'people',
      titleAfter: ' who keep work moving.',
      roles: {
        operations: 'Operations manager',
        construction: 'Construction supervisor',
        logistics: 'Logistics lead',
        healthcare: 'Healthcare coordinator',
        supplyChain: 'Supply chain lead',
      },
    },
    process: {
      badge: 'Everything in one platform',
      titleBefore: 'Built around the ',
      titleAccent: 'natural flow of work.',
      imageAlt: 'Operations team collaborating around a shared workspace',
      pillars: [
        {
          id: 'tasks',
          title: 'Tasks & workflows',
          description: 'Assign work, automate the routing, and keep every job moving to done.',
        },
        {
          id: 'cash',
          title: 'Cash & expenses',
          description: 'Track petty cash, funds, and expenses — with approvals and a clear trail.',
        },
        {
          id: 'requests',
          title: 'Service requests & approvals',
          description: 'Raise, route, and resolve service requests without the back-and-forth.',
        },
        {
          id: 'people',
          title: 'People & access',
          description: 'Manage your whole team — roles, permissions, and who owns what.',
        },
        {
          id: 'reports',
          title: 'Reports & decisions',
          description: 'Live dashboards across all of it, so you act with confidence.',
        },
      ],
      cta: 'One platform. Complete operational control.',
    },
    industries: {
      badge: 'One platform, every industry',
      titleBefore: 'Made for the way your ',
      titleAccent: 'industry actually works.',
      learnMore: 'Learn more',
      learnMoreAbout: 'Learn more about {{title}}',
      modalEyebrow: 'Industry',
      close: 'Close',
      items: [
        {
          id: 'construction',
          title: 'Construction & engineering',
          description: 'Site tasks, safety compliance, and contractor hand-offs.',
          tagline: 'Complete operational control, from blueprint to build.',
          imageAlt: 'Construction team reviewing plans on a building site',
          features: [
            {
              title: 'On-site resource allocation',
              description: 'Get more out of every crew, machine, and material.',
            },
            {
              title: 'Safety & compliance',
              description:
                'Track audits, certifications, and contractor hand-offs without the paperwork pile-up.',
            },
            {
              title: 'Absolute accountability',
              description: 'Know exactly who owns what, at any given moment.',
            },
            {
              title: 'Live site tracking',
              description: 'Real-time visibility across every site, every day.',
            },
          ],
        },
        {
          id: 'logistics',
          title: 'Logistics & transportation',
          description: 'Dispatch fleets and track every load in real time.',
          tagline: 'Move your fleet effortlessly — fast, simple, safe routing.',
          imageAlt: 'Fleet dispatcher monitoring trucks on the road',
          features: [
            {
              title: 'Fleet dispatch',
              description: 'Assign drivers and vehicles in a few taps.',
            },
            {
              title: 'Live route tracking',
              description: 'Every truck and load on one map, in real time.',
            },
            {
              title: 'Delivery status',
              description: "Know what's en route, delivered, or delayed, instantly.",
            },
            {
              title: 'Inventory in motion',
              description: 'Keep stock levels and shipments in sync.',
            },
          ],
        },
        {
          id: 'healthcare',
          title: 'Healthcare',
          description: 'Coordinate shifts, patient pathways, and secure staff chat.',
          tagline: 'Keeping work in flow when every second counts.',
          imageAlt: 'Healthcare professionals collaborating in a clinical setting',
          features: [
            {
              title: 'Secure collaboration',
              description: 'Encrypted, compliant coordination across every ward.',
            },
            {
              title: 'Smart scheduling',
              description: 'Cover shifts and patient pathways in a few taps.',
            },
            {
              title: 'Compliance built in',
              description: 'Track training, licenses, and certifications automatically.',
            },
            {
              title: 'Unified alignment',
              description: 'Keep every practitioner moving in the same direction.',
            },
          ],
        },
        {
          id: 'supplyChain',
          title: 'Supply chain',
          description: 'Monitor stock, vendors, and procurement end to end.',
          tagline: 'Keep the line moving — from stock to vendor to delivery.',
          imageAlt: 'Warehouse operations and inventory management',
          features: [
            {
              title: 'Stock visibility',
              description: 'Track inventory levels before anything runs short.',
            },
            {
              title: 'Vendor & procurement',
              description: 'Manage purchase orders and suppliers in one place.',
            },
            {
              title: 'Early alerts',
              description: 'Catch low-stock and bottlenecks before they cost you.',
            },
            {
              title: 'End-to-end traceability',
              description: 'Follow every item from order to arrival.',
            },
          ],
        },
        {
          id: 'operations',
          title: 'Operations',
          description: 'Run tasks, teams, and daily workflows across every site.',
          tagline: 'One platform for every team that keeps the business running.',
          imageAlt: 'Operations team collaborating in a meeting',
          features: [
            {
              title: 'Cross-team tasks',
              description: 'Coordinate work across departments, not silos.',
            },
            {
              title: 'Money & requests',
              description: 'Handle expenses, funds, and approvals in one flow.',
            },
            {
              title: 'People & access',
              description: 'Manage roles, permissions, and who owns what.',
            },
            {
              title: 'Full visibility',
              description: 'Live reporting across the whole operation.',
            },
          ],
        },
      ],
    },
    faq: {
      badge: "Let's clear things up",
      titleBefore: 'Everything you need to know about ',
      titleAccent: 'InFlow',
      titleAfter: '.',
      intro:
        "Whether you're exploring InFlow for the first time or evaluating it for your organization, here are answers to some of the most common questions about the platform.",
      items: [
        {
          id: 'industry',
          question: 'Is InFlow designed for a specific industry?',
          answer:
            'No. InFlow is built for operational teams across construction, logistics, healthcare, supply chain, and more. The platform adapts to how your industry works — with configurable workflows, roles, and permissions — without forcing you into a one-size-fits-all template.',
        },
        {
          id: 'departments',
          question: 'Can multiple departments use InFlow together?',
          answer:
            'Yes. Operations, finance, HR, and site teams can all work inside the same platform. Tasks, requests, approvals, and reports stay connected across departments, so nothing gets lost between hand-offs or siloed tools.',
        },
        {
          id: 'field-teams',
          question: 'Is InFlow suitable for both office and field teams?',
          answer:
            'Absolutely. Office staff and field teams share one live view of work — from dispatch and site tasks to expenses and service requests. Everyone sees the same status, updates, and accountability trail, whether they are at a desk or on site.',
        },
        {
          id: 'accountability',
          question: 'How does InFlow improve accountability?',
          answer:
            'Every task, request, approval, and expense is tracked with clear ownership and a full audit trail. Managers see who is responsible, what stage work is in, and when actions were taken — so follow-ups are based on facts, not guesswork.',
        },
        {
          id: 'scale',
          question: 'Can InFlow grow with our organization?',
          answer:
            'InFlow scales from a single site to multi-location operations. Add teams, roles, sites, and workflows as you grow — without rebuilding your setup or switching platforms as complexity increases.',
        },
        {
          id: 'work-types',
          question: 'What types of work can be managed in InFlow?',
          answer:
            'Tasks and workflows, petty cash and expenses, service requests and approvals, team access, and live reporting — all in one place. If it moves your operation forward day to day, InFlow is designed to handle it.',
        },
        {
          id: 'replace-tools',
          question: 'Does InFlow replace existing tools?',
          answer:
            'InFlow brings your core operational work into one platform, reducing the need to jump between spreadsheets, chat threads, and disconnected apps. Many teams start by consolidating daily workflows first, then expand as they see what can move in.',
        },
        {
          id: 'onboarding',
          question: 'How quickly can teams start using InFlow?',
          answer:
            'Most teams can be up and running in days, not months. InFlow is designed for fast onboarding — with clear roles, ready-to-use workflows, and a setup that mirrors how your teams already work.',
        },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Ready to bring your operations into one flow?',
      text: 'Talk to our team about demos, rollout plans, and how InFlow connects tasks, teams, finance, and field work across every site you run.',
      contactUs: 'Contact us',
      imageAlt: 'Operations team collaborating around a shared workspace',
    },
    footer: {
      homeAria: 'InFlow home',
      description:
        'An AI-powered work management platform that brings tasks, teams, communication, workflows, approvals, and insights into one intelligent workspace.',
      tagline: 'Empowering organizations to work smarter, move faster, and stay connected.',
      copyright: '© 2026 All rights reserved',
      googlePlayAria: 'Get it on Google Play',
      appStoreAria: 'Download on the App Store',
      getItOn: 'Get it on',
      googlePlay: 'Google Play',
      downloadOn: 'Download on the',
      appStore: 'App Store',
    },
  },

  nl: {
    nav: {
      platform: 'Platform',
      people: 'Mensen',
      process: 'Proces',
      industries: 'Sectoren',
      faq: 'FAQ',
      signIn: 'Inloggen',
      requestDemo: 'Demo aanvragen',
      navigation: 'Navigatie',
      close: 'Sluiten',
      openMenu: 'Menu openen',
      closeMenu: 'Menu sluiten',
      inflowHome: 'InFlow startpagina',
      selectLanguage: 'Taal kiezen',
      languageLabel: 'Taal: {{label}}',
    },
    hero: {
      badge: 'Eén platform voor uw volledige operatie',
      headline1: 'Eén platform.',
      headline2: 'Volledige operationele controle.',
      subtext:
        'Beheer taken, kleingeld, fondsen, serviceverzoeken en uw hele team op elke locatie en in elke sector, in realtime.',
      contactUs: 'Neem contact op',
      cards: {
        construction: 'Bouw',
        logistics: 'Logistiek',
        healthcare: 'Zorg',
        supplyChain: 'Supply chain',
        operations: 'Operaties',
      },
    },
    workflow: {
      eyebrow: 'Waar werk vastloopt',
      titleBefore: 'Werk zou moeten stromen. De meeste ',
      titleAccent: 'organisaties doen dat niet.',
      oldWay: 'De oude manier',
      withInflow: 'Met inFlow',
      tools: {
        email: 'E-mail',
        calendar: 'Agenda',
        chats: 'Chats',
        cash: 'Kasboek',
        sheets: 'Spreadsheets',
      },
      hub: {
        onePlatform: 'Eén platform',
        allSynced: 'Alles gesynchroniseerd',
        caption: 'Taken, financiën, chat, verzoeken en rapporten — verenigd',
        modules: {
          tasks: 'Taken',
          finance: 'Financiën',
          requests: 'Verzoeken',
          chat: 'Chat',
          reports: 'Rapporten',
        },
      },
    },
    people: {
      badge: 'Gebouwd rond mensen',
      titleBefore: 'Gemaakt ',
      titleAccent1: 'voor',
      titleMiddle: ' de ',
      titleAccent2: 'mensen',
      titleAfter: ' die het werk in beweging houden.',
      roles: {
        operations: 'Operations manager',
        construction: 'Bouwleider',
        logistics: 'Logistiek lead',
        healthcare: 'Zorgcoördinator',
        supplyChain: 'Supply chain lead',
      },
    },
    process: {
      badge: 'Alles in één platform',
      titleBefore: 'Gebouwd rond de ',
      titleAccent: 'natuurlijke flow van werk.',
      imageAlt: 'Operationeel team dat samenwerkt rond een gedeelde werkruimte',
      pillars: [
        {
          id: 'tasks',
          title: 'Taken en workflows',
          description:
            'Wijs werk toe, automatiseer de routing en houd elke taak op weg naar afronding.',
        },
        {
          id: 'cash',
          title: 'Kas en uitgaven',
          description:
            'Volg kleingeld, fondsen en uitgaven — met goedkeuringen en een helder spoor.',
        },
        {
          id: 'requests',
          title: 'Serviceverzoeken en goedkeuringen',
          description:
            'Dien in, routeer en los serviceverzoeken op zonder heen-en-weer.',
        },
        {
          id: 'people',
          title: 'Mensen en toegang',
          description:
            'Beheer uw hele team — rollen, rechten en wie waarvoor verantwoordelijk is.',
        },
        {
          id: 'reports',
          title: 'Rapporten en beslissingen',
          description:
            'Live dashboards over alles, zodat u met vertrouwen kunt handelen.',
        },
      ],
      cta: 'Eén platform. Volledige operationele controle.',
    },
    industries: {
      badge: 'Eén platform, elke sector',
      titleBefore: 'Gemaakt voor de manier waarop uw ',
      titleAccent: 'sector echt werkt.',
      learnMore: 'Meer informatie',
      learnMoreAbout: 'Meer informatie over {{title}}',
      modalEyebrow: 'Sector',
      close: 'Sluiten',
      items: [
        {
          id: 'construction',
          title: 'Bouw en engineering',
          description: 'Werkzaamheden op locatie, veiligheidscompliance en overdracht aan aannemers.',
          tagline: 'Volledige operationele controle, van blauwdruk tot oplevering.',
          imageAlt: 'Bouwteam dat plannen bekijkt op een bouwplaats',
          features: [
            {
              title: 'Resourceplanning op locatie',
              description: 'Haal meer uit elke ploeg, machine en elk materiaal.',
            },
            {
              title: 'Veiligheid en compliance',
              description:
                'Volg audits, certificeringen en overdrachten aan aannemers zonder papierstapels.',
            },
            {
              title: 'Absolute verantwoordelijkheid',
              description: 'Weet precies wie waarvoor verantwoordelijk is, op elk moment.',
            },
            {
              title: 'Live locatievolging',
              description: 'Realtime zicht op elke locatie, elke dag.',
            },
          ],
        },
        {
          id: 'logistics',
          title: 'Logistiek en transport',
          description: 'Plan vloten in en volg elke lading in realtime.',
          tagline: 'Beweeg uw vloot moeiteloos — snel, eenvoudig en veilig routeren.',
          imageAlt: 'Vlootdispatcher die vrachtwagens op de weg monitort',
          features: [
            {
              title: 'Vlootplanning',
              description: 'Wijs chauffeurs en voertuigen toe met een paar tikken.',
            },
            {
              title: 'Live routevolging',
              description: 'Elke vrachtwagen en lading op één kaart, in realtime.',
            },
            {
              title: 'Leveringsstatus',
              description: 'Weet direct wat onderweg, geleverd of vertraagd is.',
            },
            {
              title: 'Voorraad in beweging',
              description: 'Houd voorraadniveaus en zendingen synchroon.',
            },
          ],
        },
        {
          id: 'healthcare',
          title: 'Zorg',
          description: 'Coördineer diensten, patiënttrajecten en beveiligde teamchat.',
          tagline: 'Werk in flow houden wanneer elke seconde telt.',
          imageAlt: 'Zorgprofessionals die samenwerken in een klinische omgeving',
          features: [
            {
              title: 'Veilige samenwerking',
              description: 'Versleutelde, compliant coördinatie over elke afdeling.',
            },
            {
              title: 'Slimme planning',
              description: 'Plan diensten en patiënttrajecten met een paar tikken.',
            },
            {
              title: 'Compliance ingebouwd',
              description: 'Volg trainingen, licenties en certificeringen automatisch.',
            },
            {
              title: 'Eenduidige afstemming',
              description: 'Houd elke zorgverlener in dezelfde richting bezig.',
            },
          ],
        },
        {
          id: 'supplyChain',
          title: 'Supply chain',
          description: 'Monitor voorraad, leveranciers en inkoop van begin tot eind.',
          tagline: 'Houd de lijn in beweging — van voorraad tot leverancier tot levering.',
          imageAlt: 'Magazijnoperaties en voorraadbeheer',
          features: [
            {
              title: 'Voorraadzichtbaarheid',
              description: 'Volg voorraadniveaus voordat er iets opraakt.',
            },
            {
              title: 'Leveranciers en inkoop',
              description: 'Beheer inkooporders en leveranciers op één plek.',
            },
            {
              title: 'Vroege waarschuwingen',
              description: 'Signaleer lage voorraad en knelpunten voordat ze u geld kosten.',
            },
            {
              title: 'Traceerbaarheid van begin tot eind',
              description: 'Volg elk artikel van bestelling tot aankomst.',
            },
          ],
        },
        {
          id: 'operations',
          title: 'Operaties',
          description: 'Voer taken, teams en dagelijkse workflows uit op elke locatie.',
          tagline: 'Eén platform voor elk team dat het bedrijf draaiende houdt.',
          imageAlt: 'Operationeel team dat samenwerkt in een vergadering',
          features: [
            {
              title: 'Taken over teams heen',
              description: 'Coördineer werk over afdelingen, niet in silo\'s.',
            },
            {
              title: 'Geld en verzoeken',
              description: 'Behandel uitgaven, fondsen en goedkeuringen in één flow.',
            },
            {
              title: 'Mensen en toegang',
              description: 'Beheer rollen, rechten en wie waarvoor verantwoordelijk is.',
            },
            {
              title: 'Volledig overzicht',
              description: 'Live rapportage over de hele operatie.',
            },
          ],
        },
      ],
    },
    faq: {
      badge: 'Laten we het helder maken',
      titleBefore: 'Alles wat u moet weten over ',
      titleAccent: 'InFlow',
      titleAfter: '.',
      intro:
        'Of u InFlow nu voor het eerst verkent of het evalueert voor uw organisatie — hier vindt u antwoorden op de meest gestelde vragen over het platform.',
      items: [
        {
          id: 'industry',
          question: 'Is InFlow ontworpen voor een specifieke sector?',
          answer:
            'Nee. InFlow is gebouwd voor operationele teams in bouw, logistiek, zorg, supply chain en meer. Het platform past zich aan aan de manier waarop uw sector werkt — met configureerbare workflows, rollen en rechten — zonder u in een standaardsjabloon te dwingen.',
        },
        {
          id: 'departments',
          question: 'Kunnen meerdere afdelingen InFlow samen gebruiken?',
          answer:
            'Ja. Operaties, financiën, HR en locatieteams kunnen allemaal in hetzelfde platform werken. Taken, verzoeken, goedkeuringen en rapporten blijven verbonden over afdelingen heen, zodat er niets verloren gaat bij overdrachten of in losse tools.',
        },
        {
          id: 'field-teams',
          question: 'Is InFlow geschikt voor zowel kantoor- als veldteams?',
          answer:
            'Absoluut. Kantoorpersoneel en veldteams delen één live beeld van het werk — van planning en locatietaken tot uitgaven en serviceverzoeken. Iedereen ziet dezelfde status, updates en verantwoordelijkheidssporing, of ze nu aan een bureau zitten of op locatie zijn.',
        },
        {
          id: 'accountability',
          question: 'Hoe verbetert InFlow de verantwoordelijkheid?',
          answer:
            'Elke taak, elk verzoek, elke goedkeuring en elke uitgave wordt bijgehouden met duidelijke eigenaarschap en een volledig auditspoor. Managers zien wie verantwoordelijk is, in welke fase het werk zit en wanneer acties zijn ondernomen — zodat opvolging op feiten is gebaseerd, niet op giswerk.',
        },
        {
          id: 'scale',
          question: 'Kan InFlow meegroeien met onze organisatie?',
          answer:
            'InFlow schaalt van één locatie tot operaties op meerdere plekken. Voeg teams, rollen, locaties en workflows toe naarmate u groeit — zonder uw opzet opnieuw te bouwen of van platform te wisselen wanneer de complexiteit toeneemt.',
        },
        {
          id: 'work-types',
          question: 'Welke soorten werk kunnen in InFlow worden beheerd?',
          answer:
            'Taken en workflows, kleingeld en uitgaven, serviceverzoeken en goedkeuringen, teamtoegang en live rapportage — alles op één plek. Als het uw operatie dagelijks vooruit helpt, is InFlow ervoor ontworpen.',
        },
        {
          id: 'replace-tools',
          question: 'Vervangt InFlow bestaande tools?',
          answer:
            'InFlow brengt uw kernoperationele werk samen in één platform en vermindert de noodzaak om te springen tussen spreadsheets, chatthreads en losgekoppelde apps. Veel teams beginnen met het consolideren van dagelijkse workflows en breiden daarna uit naarmate ze zien wat er kan worden overgezet.',
        },
        {
          id: 'onboarding',
          question: 'Hoe snel kunnen teams InFlow gaan gebruiken?',
          answer:
            'De meeste teams zijn binnen dagen operationeel, niet maanden. InFlow is ontworpen voor snelle onboarding — met duidelijke rollen, kant-en-klare workflows en een opzet die aansluit bij hoe uw teams al werken.',
        },
      ],
    },
    contact: {
      eyebrow: 'Neem contact op',
      title: 'Klaar om uw operaties in één flow te brengen?',
      text: 'Praat met ons team over demo\'s, uitrolplannen en hoe InFlow taken, teams, financiën en veldwerk verbindt op elke locatie die u runt.',
      contactUs: 'Neem contact op',
      imageAlt: 'Operationeel team dat samenwerkt rond een gedeelde werkruimte',
    },
    footer: {
      homeAria: 'InFlow startpagina',
      description:
        'Een AI-gestuurd werkbeheerplatform dat taken, teams, communicatie, workflows, goedkeuringen en inzichten samenbrengt in één intelligente werkruimte.',
      tagline: 'Organisaties helpen slimmer te werken, sneller te bewegen en verbonden te blijven.',
      copyright: '© 2026 Alle rechten voorbehouden',
      googlePlayAria: 'Downloaden via Google Play',
      appStoreAria: 'Downloaden in de App Store',
      getItOn: 'Downloaden via',
      googlePlay: 'Google Play',
      downloadOn: 'Downloaden in de',
      appStore: 'App Store',
    },
  },

  pt: {
    nav: {
      platform: 'Plataforma',
      people: 'Pessoas',
      process: 'Processo',
      industries: 'Setores',
      faq: 'FAQ',
      signIn: 'Iniciar sessão',
      requestDemo: 'Pedir demonstração',
      navigation: 'Navegação',
      close: 'Fechar',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      inflowHome: 'Página inicial InFlow',
      selectLanguage: 'Selecionar idioma',
      languageLabel: 'Idioma: {{label}}',
    },
    hero: {
      badge: 'Uma plataforma para toda a sua operação',
      headline1: 'Uma plataforma.',
      headline2: 'Controlo operacional completo.',
      subtext:
        'Gira tarefas, pequenas despesas, fundos, pedidos de serviço e toda a equipa em cada local e setor, em tempo real.',
      contactUs: 'Contacte-nos',
      cards: {
        construction: 'Construção',
        logistics: 'Logística',
        healthcare: 'Saúde',
        supplyChain: 'Cadeia de abastecimento',
        operations: 'Operações',
      },
    },
    workflow: {
      eyebrow: 'Onde o trabalho falha',
      titleBefore: 'O trabalho devia fluir. A maioria das ',
      titleAccent: 'organizações não o faz.',
      oldWay: 'A forma antiga',
      withInflow: 'Com inFlow',
      tools: {
        email: 'E-mail',
        calendar: 'Calendário',
        chats: 'Conversas',
        cash: 'Livro de caixa',
        sheets: 'Folhas de cálculo',
      },
      hub: {
        onePlatform: 'Uma plataforma',
        allSynced: 'Tudo sincronizado',
        caption: 'Tarefas, finanças, conversas, pedidos e relatórios — unificados',
        modules: {
          tasks: 'Tarefas',
          finance: 'Finanças',
          requests: 'Pedidos',
          chat: 'Conversa',
          reports: 'Relatórios',
        },
      },
    },
    people: {
      badge: 'Construído em torno das pessoas',
      titleBefore: 'Feito ',
      titleAccent1: 'para',
      titleMiddle: ' as ',
      titleAccent2: 'pessoas',
      titleAfter: ' que mantêm o trabalho em movimento.',
      roles: {
        operations: 'Gestor de operações',
        construction: 'Supervisor de construção',
        logistics: 'Responsável de logística',
        healthcare: 'Coordenador de saúde',
        supplyChain: 'Responsável da cadeia de abastecimento',
      },
    },
    process: {
      badge: 'Tudo numa só plataforma',
      titleBefore: 'Construído em torno do ',
      titleAccent: 'fluxo natural de trabalho.',
      imageAlt: 'Equipa de operações a colaborar num espaço de trabalho partilhado',
      pillars: [
        {
          id: 'tasks',
          title: 'Tarefas e fluxos de trabalho',
          description:
            'Atribua trabalho, automatize o encaminhamento e mantenha cada tarefa a caminho da conclusão.',
        },
        {
          id: 'cash',
          title: 'Caixa e despesas',
          description:
            'Acompanhe pequenas despesas, fundos e despesas — com aprovações e um registo claro.',
        },
        {
          id: 'requests',
          title: 'Pedidos de serviço e aprovações',
          description:
            'Submeta, encaminhe e resolva pedidos de serviço sem idas e vindas.',
        },
        {
          id: 'people',
          title: 'Pessoas e acesso',
          description:
            'Gira toda a equipa — funções, permissões e quem é responsável por quê.',
        },
        {
          id: 'reports',
          title: 'Relatórios e decisões',
          description:
            'Painéis em tempo real sobre tudo, para que possa agir com confiança.',
        },
      ],
      cta: 'Uma plataforma. Controlo operacional completo.',
    },
    industries: {
      badge: 'Uma plataforma, todos os setores',
      titleBefore: 'Feito para a forma como o seu ',
      titleAccent: 'setor realmente funciona.',
      learnMore: 'Saber mais',
      learnMoreAbout: 'Saber mais sobre {{title}}',
      modalEyebrow: 'Setor',
      close: 'Fechar',
      items: [
        {
          id: 'construction',
          title: 'Construção e engenharia',
          description: 'Tarefas em obra, conformidade de segurança e transferências para empreiteiros.',
          tagline: 'Controlo operacional completo, do projeto à construção.',
          imageAlt: 'Equipa de construção a rever planos numa obra',
          features: [
            {
              title: 'Alocação de recursos em obra',
              description: 'Tire mais partido de cada equipa, máquina e material.',
            },
            {
              title: 'Segurança e conformidade',
              description:
                'Acompanhe auditorias, certificações e transferências para empreiteiros sem acumular papelada.',
            },
            {
              title: 'Responsabilidade absoluta',
              description: 'Saiba exatamente quem é responsável por quê, em qualquer momento.',
            },
            {
              title: 'Acompanhamento de obra em tempo real',
              description: 'Visibilidade em tempo real em cada obra, todos os dias.',
            },
          ],
        },
        {
          id: 'logistics',
          title: 'Logística e transporte',
          description: 'Despache frotas e acompanhe cada carga em tempo real.',
          tagline: 'Mova a sua frota sem esforço — encaminhamento rápido, simples e seguro.',
          imageAlt: 'Despachante de frota a monitorizar camiões na estrada',
          features: [
            {
              title: 'Despacho de frota',
              description: 'Atribua condutores e veículos com alguns toques.',
            },
            {
              title: 'Acompanhamento de rotas em tempo real',
              description: 'Cada camião e carga num único mapa, em tempo real.',
            },
            {
              title: 'Estado de entrega',
              description: 'Saiba instantaneamente o que está em trânsito, entregue ou atrasado.',
            },
            {
              title: 'Inventário em movimento',
              description: 'Mantenha níveis de stock e expedições sincronizados.',
            },
          ],
        },
        {
          id: 'healthcare',
          title: 'Saúde',
          description: 'Coordene turnos, percursos de doentes e conversas seguras da equipa.',
          tagline: 'Manter o trabalho em fluxo quando cada segundo conta.',
          imageAlt: 'Profissionais de saúde a colaborar num ambiente clínico',
          features: [
            {
              title: 'Colaboração segura',
              description: 'Coordenação encriptada e conforme em todos os serviços.',
            },
            {
              title: 'Agendamento inteligente',
              description: 'Cubra turnos e percursos de doentes com alguns toques.',
            },
            {
              title: 'Conformidade integrada',
              description: 'Acompanhe formações, licenças e certificações automaticamente.',
            },
            {
              title: 'Alinhamento unificado',
              description: 'Mantenha todos os profissionais a avançar na mesma direção.',
            },
          ],
        },
        {
          id: 'supplyChain',
          title: 'Cadeia de abastecimento',
          description: 'Monitorize stock, fornecedores e aquisições de ponta a ponta.',
          tagline: 'Mantenha a linha em movimento — do stock ao fornecedor à entrega.',
          imageAlt: 'Operações de armazém e gestão de inventário',
          features: [
            {
              title: 'Visibilidade de stock',
              description: 'Acompanhe níveis de inventário antes de faltar qualquer artigo.',
            },
            {
              title: 'Fornecedores e aquisições',
              description: 'Gira encomendas de compra e fornecedores num só local.',
            },
            {
              title: 'Alertas antecipados',
              description: 'Detete stock baixo e estrangulamentos antes de lhe custarem caro.',
            },
            {
              title: 'Rastreabilidade de ponta a ponta',
              description: 'Siga cada artigo desde a encomenda até à chegada.',
            },
          ],
        },
        {
          id: 'operations',
          title: 'Operações',
          description: 'Execute tarefas, equipas e fluxos de trabalho diários em cada local.',
          tagline: 'Uma plataforma para cada equipa que mantém o negócio a funcionar.',
          imageAlt: 'Equipa de operações a colaborar numa reunião',
          features: [
            {
              title: 'Tarefas entre equipas',
              description: 'Coordene o trabalho entre departamentos, não em silos.',
            },
            {
              title: 'Dinheiro e pedidos',
              description: 'Trate despesas, fundos e aprovações num único fluxo.',
            },
            {
              title: 'Pessoas e acesso',
              description: 'Gira funções, permissões e quem é responsável por quê.',
            },
            {
              title: 'Visibilidade total',
              description: 'Relatórios em tempo real em toda a operação.',
            },
          ],
        },
      ],
    },
    faq: {
      badge: 'Vamos esclarecer as coisas',
      titleBefore: 'Tudo o que precisa de saber sobre o ',
      titleAccent: 'InFlow',
      titleAfter: '.',
      intro:
        'Quer esteja a explorar o InFlow pela primeira vez ou a avaliá-lo para a sua organização, aqui estão respostas às perguntas mais comuns sobre a plataforma.',
      items: [
        {
          id: 'industry',
          question: 'O InFlow foi concebido para um setor específico?',
          answer:
            'Não. O InFlow foi criado para equipas operacionais em construção, logística, saúde, cadeia de abastecimento e muito mais. A plataforma adapta-se à forma como o seu setor funciona — com fluxos de trabalho, funções e permissões configuráveis — sem o forçar a um modelo único.',
        },
        {
          id: 'departments',
          question: 'Podem vários departamentos usar o InFlow em conjunto?',
          answer:
            'Sim. Operações, finanças, RH e equipas de campo podem trabalhar todos na mesma plataforma. Tarefas, pedidos, aprovações e relatórios permanecem ligados entre departamentos, para que nada se perca nas transferências ou em ferramentas isoladas.',
        },
        {
          id: 'field-teams',
          question: 'O InFlow é adequado para equipas de escritório e de campo?',
          answer:
            'Sem dúvida. O pessoal de escritório e as equipas de campo partilham uma visão em tempo real do trabalho — desde o despacho e tarefas em obra até despesas e pedidos de serviço. Todos veem o mesmo estado, atualizações e registo de responsabilidade, quer estejam numa secretária ou em obra.',
        },
        {
          id: 'accountability',
          question: 'Como é que o InFlow melhora a responsabilização?',
          answer:
            'Cada tarefa, pedido, aprovação e despesa é registada com responsabilidade clara e um registo de auditoria completo. Os gestores veem quem é responsável, em que fase está o trabalho e quando foram tomadas as ações — para que o acompanhamento se baseie em factos, não em suposições.',
        },
        {
          id: 'scale',
          question: 'O InFlow pode crescer com a nossa organização?',
          answer:
            'O InFlow escala de um único local a operações multi-sede. Adicione equipas, funções, locais e fluxos de trabalho à medida que cresce — sem reconstruir a configuração ou mudar de plataforma quando a complexidade aumenta.',
        },
        {
          id: 'work-types',
          question: 'Que tipos de trabalho podem ser geridos no InFlow?',
          answer:
            'Tarefas e fluxos de trabalho, pequenas despesas e despesas, pedidos de serviço e aprovações, acesso da equipa e relatórios em tempo real — tudo num só local. Se faz avançar a sua operação no dia a dia, o InFlow foi concebido para o gerir.',
        },
        {
          id: 'replace-tools',
          question: 'O InFlow substitui ferramentas existentes?',
          answer:
            'O InFlow reúne o seu trabalho operacional essencial numa só plataforma, reduzindo a necessidade de saltar entre folhas de cálculo, conversas e aplicações desligadas. Muitas equipas começam por consolidar os fluxos de trabalho diários e expandem depois à medida que veem o que pode ser migrado.',
        },
        {
          id: 'onboarding',
          question: 'Com que rapidez podem as equipas começar a usar o InFlow?',
          answer:
            'A maioria das equipas pode estar operacional em dias, não em meses. O InFlow foi concebido para uma integração rápida — com funções claras, fluxos de trabalho prontos a usar e uma configuração que espelha a forma como as suas equipas já trabalham.',
        },
      ],
    },
    contact: {
      eyebrow: 'Entre em contacto',
      title: 'Pronto para unir as suas operações num único fluxo?',
      text: 'Fale com a nossa equipa sobre demonstrações, planos de implementação e como o InFlow liga tarefas, equipas, finanças e trabalho de campo em cada local que gere.',
      contactUs: 'Contacte-nos',
      imageAlt: 'Equipa de operações a colaborar num espaço de trabalho partilhado',
    },
    footer: {
      homeAria: 'Página inicial InFlow',
      description:
        'Uma plataforma de gestão de trabalho com IA que reúne tarefas, equipas, comunicação, fluxos de trabalho, aprovações e insights num espaço de trabalho inteligente.',
      tagline: 'Capacitar organizações a trabalhar de forma mais inteligente, mover-se mais depressa e manter-se ligadas.',
      copyright: '© 2026 Todos os direitos reservados',
      googlePlayAria: 'Obter no Google Play',
      appStoreAria: 'Transferir na App Store',
      getItOn: 'Obter no',
      googlePlay: 'Google Play',
      downloadOn: 'Transferir na',
      appStore: 'App Store',
    },
  },
}
