import bergamotteDesk from "../assets/images/projects-desktop/bergamotte.webp"
import bergamotteSmol from "../assets/images/projects-smol/bergamotte.webp"
import bergamotteMob from "../assets/images/projects-mobile/bergamotte.webp"
import vieuxGrimDesk from "../assets/images/projects-desktop/vieux-grimoire.webp"
import vieuxGrimSmol from "../assets/images/projects-smol/vieux-grimoire.webp"
import vieuxGrimMob from "../assets/images/projects-mobile/vieux-grimoire.webp"
import kasaDesk from "../assets/images/projects-desktop/kasa.webp"
import kasaSmol from "../assets/images/projects-smol/kasa.webp"
import kasaMob from "../assets/images/projects-mobile/kasa.webp"
import carducciDesk from "../assets/images/projects-desktop/ninacarducci.webp"
import carducciSmol from "../assets/images/projects-smol/ninacarducci.webp"
import carducciMob from "../assets/images/projects-mobile/ninacarducci.webp"
import bluelDesk from "../assets/images/projects-desktop/sophiebluel.webp"
import bluelSmol from "../assets/images/projects-smol/sophiebluel.webp"
import bluelMob from "../assets/images/projects-mobile/sophiebluel.webp"
import bookiDesk from "../assets/images/projects-desktop/booki.webp"
import bookiSmol from "../assets/images/projects-smol/booki.webp"
import bookiMob from "../assets/images/projects-mobile/booki.webp"
import morpionDesk from "../assets/images/projects-desktop/morpion.webp"
import morpionSmol from "../assets/images/projects-smol/morpion.webp"
import morpionMob from "../assets/images/projects-mobile/morpion.webp"
import spiralfolioDesk from "../assets/images/projects-desktop/spiralfolio.webp"
import spiralfolioSmol from "../assets/images/projects-smol/spiralfolio.webp"
import spiralfolioMob from "../assets/images/projects-mobile/spiralfolio.webp"
import festivalsDesk from "../assets/images/projects-desktop/festivals2023.webp"
import festivalsSmol from "../assets/images/projects-smol/festivals2023.webp"
import festivalsMob from "../assets/images/projects-mobile/festivals2023.webp"
import odaceDesk from "../assets/images/projects-desktop/odace.webp"
import odaceSmol from "../assets/images/projects-smol/odace.webp"
import odaceMob from "../assets/images/projects-mobile/odace.webp"

import { techsArr } from "./techs"

export const projectsArr = [
    {
        name: "Bergamotte",
        date: new Date("2023-01-19"),
        picDesk: bergamotteDesk,
        picSmol: bergamotteSmol,
        picMobile: bergamotteMob,
        techs: [techsArr[0], techsArr[1]],
        desc: "Projet d'intégration réalisé dans le cadre de mon premier partiel en 2ème année à l'ECV Paris. Une maquette Figma nous était fournie, il fallait reproduire le plus fidèlement possible la landing page demandée.\nIntégration HTML & CSS • Implémentation Responsive • Stylisation en SCSS • Délais serrés – 4 heures",
        gitLink: "https://github.com/ArthurJenck/ECV_Bergamotte",
        webLink: "https://arthurjenck.github.io/ECV_Bergamotte/",
    },
    {
        name: "Mon Vieux Grimoire",
        date: new Date("2024-09-30"),
        picDesk: vieuxGrimDesk,
        picSmol: vieuxGrimSmol,
        picMobile: vieuxGrimMob,
        techs: [techsArr[2], techsArr[3], techsArr[4], techsArr[5]],
        desc: "Développement d'une API et du back-end d'un site de notation de livres, produit comme 6ème projet de mon parcours chez OpenClassrooms. Le serveur tourne sous Express, alimenté par Node.js. Une API MongoDB en NoSQL y est liée. Ce projet fut complexe à aborder par le code source fourni, qui comportait de nombreuses erreurs liées au linter. Il fallut prendre du temps avant de commencer à travailler sur le projet pour le rendre utilisable.\nLancer un serveur Express sous Node.js • Ajouter des modèles logiques de données • Mettre en place les opérations du CRUD • Stocker de façon sécurisée des données d'authentification • Concevoir une API à partir d'un cahier des charges • Gérer l'upload de fichiers volumineux et les optimiser avec Sharp",
        gitLink: "https://github.com/ArthurJenck/OC_VieuxGrimoire",
    },
    {
        name: "Kasa",
        date: new Date("2024-08-30"),
        picDesk: kasaDesk,
        picSmol: kasaSmol,
        picMobile: kasaMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Découverte de React lors du 5ème projet réalisé dans mon cursus OpenClassrooms, en intégrant un site de location d'appartement entre particuliers.\nInitialiser une application React avec CRA et Vite • Routage avec react-router-dom • Structuration en composants réutilisables • Stylisation en SCSS • Typage strict avec TypeScript • Animations CSS • Hébergement via GitHub Actions",
        gitLink: "https://github.com/ArthurJenck/OC_Kasa",
        webLink: "https://arthurjenck.github.io/OC_Kasa/",
    },
    {
        name: "Booki",
        date: new Date("2024-04-17"),
        picDesk: bookiDesk,
        picSmol: bookiSmol,
        picMobile: bookiMob,
        techs: [techsArr[0]],
        desc: "Intégration de la page d'accueil d'une agence de voyages à partir d'une maquette Figma, réalisée comme 2ème projet de mon parcours chez OpenClassrooms. Le site est réalisé intégralement en HTML et CSS.\nDécoupage de maquette • Intégration HTML & CSS • Implémentation Responsive • Veille et application des dernières évolutions techniques • Système en CSS-only • Validité W3C • Versioning Git sur GitHub",
        gitLink: "https://github.com/ArthurJenck/OC_Booki",
        webLink: "https://arthurjenck.github.io/OC_Booki/",
    },
    {
        name: "Morpion JS",
        date: new Date("2023-03-06"),
        picDesk: morpionDesk,
        picSmol: morpionSmol,
        picMobile: morpionMob,
        techs: [techsArr[0], techsArr[1], techsArr[2]],
        desc: "Au cours de mon apprentissage de JavaScript pendant ma 2ème année à l'ECV Paris, j'ai été amené à créer un jeu de Morpion. Ma méthode de création s'est basée sur les classes CSS, ainsi qu'un tableau contenant toutes les conditions de victoire.\nCréation d'un jeu en JavaScript • Gestion des conditions de victoire • Prendre en compte les égalités • Stylisation en SCSS",
        gitLink: "https://github.com/ArthurJenck/ECV_TicTacToe",
        webLink: "https://arthurjenck.github.io/ECV_TicTacToe/",
    },
    {
        name: "Nina Carducci",
        date: new Date("2024-07-26"),
        picDesk: carducciDesk,
        picSmol: carducciSmol,
        picMobile: carducciMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "Projet basé sur l'optimisation, l'accessibilité et le référencement, avec une partie de débogage Jquery, réalisé comme 4ème projet lors de mon parcours OpenClassrooms. Le site est un portfolio de photographie, contenant des images de très haute qualité ralentissant énormément le chargement du site. Réussir à atteindre un temps de chargement optimal, tout en conservant les détails des photographies à haute résolution fut la principale problématique.\nOptimisation d'une page conséquente • Compression d'images haute qualité sans perte • Debugging Jquery • Rédaction d'un cahier de recettes • Validité W3C • Application des règles d'accessibilité WCAG 2 • Audits Lighthouse, Wave, aXe DevTools et GT Metrix",
        gitLink: "https://github.com/ArthurJenck/OC_NinaCarducci",
        webLink: "https://arthurjenck.github.io/OC_NinaCarducci/",
    },
    {
        name: "Sophie Bluel",
        date: new Date("2024-06-10"),
        picDesk: bluelDesk,
        picSmol: bluelSmol,
        picMobile: bluelMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "3ème projet de mon parcours OpenClassrooms, consistant à intégrer une page de connexion ainsi qu'une modale sur la page d'admin du site d'une designeuse. Une API fournie dans la base de code est liée aux projets, et stockée dans le localStorage.\nCréation d'une page dynamique en Vanilla JS • Utiliser des formulaires pour récupérer des données utilisateur • Manipuler les éléments du DOM • Gérer les événements et leurs écouteurs • Stocker des données dans le localStorage • Communiquer dynamiquement avec l'API • Authentification d'administrateur • Implémenter le CRUD",
        gitLink: "https://github.com/ArthurJenck/OC_SophieBluel",
        webLink: "https://arthurjenck.github.io/OC_SophieBluel/",
    },
    {
        name: "Portfolio",
        date: new Date("2024-12-10"),
        picDesk: spiralfolioDesk,
        picSmol: spiralfolioSmol,
        picMobile: spiralfolioMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Le site sur lequel vous vous trouvez actuellement. J'ai commencé à y réfléchir en 2022, pendant ma 2ème année à l'ECV Paris. Entre temps, je notais mes idées de design et de fonctionnalités dans un carnet, dont vous trouverez des images dans le lien ci-dessous, à droite du repository GitHub.\nDesign de maquette Figma • Conception UX / UI pour le confort utilisateur • Déploiement en ligne d'une Single Page Application sous React • Stylisation en SCSS • Animations CSS et JS • Typage strict avec TypeScript",
        gitLink: "https://github.com/ArthurJenck/Portfolio/",
        webLink:
            "https://drive.google.com/drive/folders/1f4fpOMN-B1Bi42T_U0PUSnKu0sPL1yy7",
    },
    {
        name: "Festivals 2023",
        date: new Date("2023-03-21"),
        picDesk: festivalsDesk,
        picSmol: festivalsSmol,
        picMobile: festivalsMob,
        techs: [techsArr[0], techsArr[1], techsArr[2]],
        desc: "Projet d'intégration réalisé dans le cadre de mes derniers partiels en 2ème année à l'ECV Paris. À partir d'un document PDF et de guides de style, le but était de reproduire fidèlement la landing page en tenant compte de la sémantique HTMl, de la stylisation Sass et la gestion du DOM.\nIntégration HTML & CSS • Implémentation Responsive • Stylisation en SCSS • Contrôle du DOM en JavaScript • Délais serrés – 4 heures",
        gitLink: "https://github.com/ArthurJenck/ECV_Festivals2023",
        webLink: "https://arthurjenck.github.io/ECV_Festivals2023/",
    },
    {
        name: "Odace",
        date: new Date("2025-02-13"),
        picDesk: odaceDesk,
        picSmol: odaceSmol,
        picMobile: odaceMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Dans le cadre du processus de recrutement chez Odace, j’ai développé en une journée une landing page dynamique affichant des formats vidéo issus de l’API d’Odace+. Le design, conçu sur Figma, s’inspire de l’identité visuelle de l’entreprise pour offrir une expérience fluide et immersive.\nSingle Page Application en React • Intégration d'API REST • Ajout de carrousel avec Glide.js • Animations au scroll via AOS • Conception UX/UI sur Figma • Réalisation en 24h sur 48h allouées",
        gitLink: "https://github.com/ArthurJenck/Odace_LandingPage",
        webLink: "https://odace.arthurjenck.com/",
    },
]
