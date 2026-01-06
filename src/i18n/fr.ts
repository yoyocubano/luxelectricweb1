export const FR_TRANSLATIONS = {
  header: {
    nav: {
      home: 'Accueil',
      theory: 'Théorie',
      practice: 'Pratique',
      games: 'Jeux',
      simulator: 'Simulateur',
      resources: 'Ressources',
      calculators: 'Calculatrices',
    },
    luxelectric: 'LuxÉlectrique',
    chismecito: 'Le Potin Électrique'
  },
  dashboard: {
    hero: {
      title: 'Le compte à rebours commence !',
      subtitle: 'Allez, le temps presse. Mettons-nous au travail, cet examen au Luxembourg ne s\'obtiendra pas tout seul !',
      countdown: 'Jours avant l\'examen (19 Janvier)',
      cta: 'Commencer à étudier !',
    },
    progress: {
      title: 'Votre Progression',
      general: 'Progression Générale',
      streak: 'Série Actuelle',
      streakUnit: 'Jours',
      streakSub: 'Créez une nouvelle série !',
      approved: 'Examens Réussis',
      level: 'Niveau : Novice Électrique',
    },
    studyPlan: {
      title: 'Votre Plan d\'Attaque Quotidien',
      description1: 'Pour être prêt pour l\'examen, nous vous recommandons une moyenne de',
      description2: 'heures d\'étude par jour.',
      ratio: 'Pratique / Théorie',
    },
    modules: {
      title: 'Modules d\'Apprentissage',
      theory: {
        title: 'Théorie',
        description: 'Maîtrisez les fondamentaux et les réglementations du Luxembourg.',
        cta: 'Étudier',
      },
      practice: {
        title: 'Pratique',
        description: 'Simulations d\'examens réels pour vous tester.',
        cta: 'Commencer le Test',
      },
      games: {
        title: 'Jeux',
        description: 'Apprenez en jouant : Connectez des câbles et résolvez des énigmes.',
        cta: 'Jouer Maintenant',
      },
      resources: {
        title: 'Ressources',
        description: 'Documents officiels, schémas et matériel d\'étude.',
        cta: 'Ouvrir la Réserve',
      },
      calculators: {
        title: 'Calculatrices',
        description: 'Sections de câbles, paramètres moteur et lois de base.',
        cta: 'Calculer',
      },
    },
    footer: '© 2024 LuxÉlectrique. Préparation officielle pour les électriciens au Luxembourg.',
    trainer_nav: 'ENTRAÎNEUR IA',
    ai_coach: {
      title: 'Entraîneur Cubain (IA)',
      subtitle: 'Simulation d\'examen oral. Préparez-vous avec le maître des maîtres. Allez-y !',
      cta: 'PARLER À L\'IA',
    },
    achievements: {
      title: 'Succès Récents',
      viewAll: 'Tout voir',
      perfect_score_vv: {
        title: 'Voltage Parfait',
        description: '10/10 en Voltage Véloce',
      },
      master_wirer: {
        title: 'Câblage Maître',
        description: 'Complétez le défi d\'inversion de sens',
      },
      perfect_assembly: {
        title: 'Montage Impeccable',
        description: '100 pts en Maître du Montage',
      },
      streak_5: {
        title: 'Constance',
        description: 'Série de 5 jours consécutifs',
      },
      locked: 'Verrouillé',
    },
  },
  practice: {
    workshop_title: 'Atelier Virtuel de Montage',
    workshop_subtitle: 'Sélectionnez une cabine de pratique pour démarrer votre simulation STEAM.',
    online_tag: 'Atelier en Ligne',
    roadmap: 'Feuille de Route',
    back_to_workshop: 'Retour à l\'Atelier',
    status: {
      title: 'État du Montage',
      validated: 'Validé',
      pending: 'En attente',
    },
    cabins: {
      enter: 'Entrer dans la Cabine',
      level: 'Niveau',
      c1: {
        title: 'Démarrage de Moteurs',
        desc: 'Montage de contacteurs et le fameux Étoile-Triangle. Attention aux ponts !',
      },
      c2: {
        title: 'Domotique KNX',
        desc: 'Configuration du bus vert et des actionneurs. Donnez de l\'intelligence à ce bâtiment.',
      },
      c3: {
        title: 'Tableau de Distribution',
        desc: 'Câblage propre et protections. Que ce soit esthétique et sûr, sans bricolage.',
      },
      c4: {
        title: 'Logique Programmée',
        desc: 'Programmation de relais intelligents (LOGO!). La magie de l\'automatisation.',
      },
    },
    montage: {
      reset_cables: 'Réinitialiser les Câbles',
      power_panel: 'Panneau de Bornes / Moteur',
      knx_panel: 'Dispositifs EIB-KNX',
      din_panel: 'Rail DIN / Protections',
      logo_panel: 'Relais Intelligent (LOGO!)',
      protocol: 'Protocole de Vérification',
      physical_address: 'Adresse Physique',
      validate_btn: 'Valider le Montage',
      pending_btn: 'Montage Incomplet',
      feedback: 'Excellent travail ! Montage validé et enregistré dans votre progression.',
      steps: {
        step1: 'Schéma de Commande',
        step2: 'Schéma de Puissance',
        step3: 'Câblage',
        step4: 'Test de Tension',
        step5: 'Validation',
      },
      components: {
        iga: 'IGA (Interrupteur Général)',
        id: 'Différentiel 40A/30mA',
        c1: 'C1: Éclairage (10A)',
        c2: 'C2: Prises de Courant (16A)',
        knx_ps: 'Alimentation Bus 640mA',
        knx_switch: 'Bouton Multifonction',
        knx_actuator: 'Actionneur de Commutation',
      },
      hints: {
        c1: '"Pontez W2-U2-V2 pour Étoile."',
        c2: '"Assignez 1/1/1 aux deux équipements."',
        c3: '"Connectez dans l\'ordre : IGA -> Différentiel -> Disjoncteurs."',
        c4: '"Q1 doit être TRUE"',
      }
    }
  },
  trainer: {
    title: 'Zone d\'Entraînement IA',
    subtitle: 'Posez vos questions à l\'entraîneur expert en électricité.',
    mode: 'MODE IA',
    sync: 'Synchronisé',
    placeholder: 'Écrivez votre réponse ici...',
    student: 'Étudiant',
    coach: 'Entraîneur',
  },
  games: {
    title: 'Zone d\'Entraînement Gamer',
    subtitle: 'Apprenez des concepts complexes en vous amusant. Montez le volume !',
    play: 'Jouer',
    hero_title: 'Maîtrisez l\'électricité en jouant',
    hero_subtitle: 'Venez, ce n\'est pas de la physique nucléaire. Testez-vous avec ces jeux et vous verrez comment tout restera gravé dans votre mémoire.',
    available_games: 'Jeux Disponibles',
    difficulty: {
      easy: 'Facile',
      medium: 'Intermédiaire',
      hard: 'Difficile',
      exam: 'Examen',
    },
    duration: {
      min: 'min',
      unlimited: 'Illimité',
    },
    voltaje_veloz: {
      title: 'Voltage Véloce',
      desc: 'Questions rapides sur la réglementation. Réfléchissez vite ou le courant vous rattrape !',
    },
    laboratorio_logico: {
      title: 'Laboratoire Logique',
      desc: 'Simulez les portes AND, OR, NOT de l\'examen. Comprenez la logique numérique !',
    },
    maestro_montaje: {
      title: 'Maître du Montage',
      subtitle: 'Concevez le layout, placez les composants et réalisez le câblage.',
      states: {
        layout: 'Layout et Goulottes',
        components: 'Placement des Équipements',
        wiring: 'Câblage Propre',
      },
      inventory: 'Inventaire',
      workshop: 'Plan de Travail',
      feedback: {
        missing: 'Il vous manque des câbles ou des composants ! Vérifiez le schéma, quelque chose est mal connecté.',
        messy: 'Ça fonctionne, mais quel désordre ! Utilisez les goulottes, elles sont là pour ça. La propreté est essentielle.',
        perfect: 'Excellent travail ! Un travail de maître. Propre, ordonné et fonctionnel. Vous êtes prêt pour l\'examen !',
      }
    },
    cableado_maestro: {
      title: 'Câblage Maître',
      subtitle: 'Connectez le schéma Étoile-Triangle sans vous tromper.',
      instruction: 'Cliquez sur deux bornes pour les connecter.',
    }
  },
  lang: {
    es: 'Espagnol',
    fr: 'Français',
  },
  theory: {
    title: 'Bibliothèque de Connaissances',
    subtitle: 'Tout ce que vous devez savoir pour l\'examen théorique au Luxembourg.',
    dashboard: 'Tableau de Bord',
    backToHome: 'Retour à l\'Accueil',
    modules: {
      title: 'Modules',
    },
    dashboard_view: {
      title: 'Généralités Techniques',
      description: 'Bienvenue au cœur de la connaissance. Ici, chaque fenêtre vous ouvre un monde de théorie et de pratique directe.',
    },
    topics: {
      motors: {
        title: 'Moteurs et Démarrages',
        tabs: {
          general: 'Généralités',
          direct: 'Démarrage Direct',
          stardelta: 'Étoile-Triangle',
          inversion: 'Inversion de Sens',
        }
      },
      formulas: {
        title: 'Formules Clés',
        tabs: {
          resistance: 'Résistance',
          power: 'Puissance',
          threephase: 'Triphasé',
        }
      },
      installations: {
        title: 'Installations',
        tabs: {
          voltageDrop: 'Chute de Tension',
          conduits: 'Goulottes',
          grounding: 'Mise à la Terre',
        }
      },
      schematics: {
        title: 'Schémas Électriques',
        tabs: {
          powerControl: 'Puissance et Commande',
          standard: 'Norme',
        }
      }
    }
  }
};
