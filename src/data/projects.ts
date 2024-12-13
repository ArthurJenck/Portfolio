import BergamotteDesk from "../assets/images/projects-desktop/bergamotte.webp"
import BergamotteSmol from "../assets/images/projects-smol/bergamotte.webp"
import BergamotteMob from "../assets/images/projects-mobile/bergamotte.webp"
import VieuxGrimDesk from "../assets/images/projects-desktop/vieux-grimoire.webp"
import VieuxGrimSmol from "../assets/images/projects-smol/vieux-grimoire.webp"
import VieuxGrimMob from "../assets/images/projects-mobile/vieux-grimoire.webp"
import KasaDesk from "../assets/images/projects-desktop/kasa.webp"
import KasaSmol from "../assets/images/projects-smol/kasa.webp"
import KasaMob from "../assets/images/projects-mobile/kasa.webp"
import CarducciDesk from "../assets/images/projects-desktop/ninacarducci.webp"
import CarducciSmol from "../assets/images/projects-smol/ninacarducci.webp"
import CarducciMob from "../assets/images/projects-mobile/ninacarducci.webp"
import BluelDesk from "../assets/images/projects-desktop/sophiebluel.webp"
import BluelSmol from "../assets/images/projects-smol/sophiebluel.webp"
import BluelMob from "../assets/images/projects-mobile/sophiebluel.webp"
import BookiDesk from "../assets/images/projects-desktop/booki.webp"
import BookiSmol from "../assets/images/projects-smol/booki.webp"
import BookiMob from "../assets/images/projects-mobile/booki.webp"
import MorpionDesk from "../assets/images/projects-desktop/morpion.webp"
import MorpionSmol from "../assets/images/projects-smol/morpion.webp"
import MorpionMob from "../assets/images/projects-mobile/morpion.webp"
import SpiralfolioDesk from "../assets/images/projects-desktop/spiralfolio.webp"
import SpiralfolioSmol from "../assets/images/projects-smol/spiralfolio.webp"
import SpiralfolioMob from "../assets/images/projects-mobile/spiralfolio.webp"

import { techsArr } from "./techs"

export const projectsArr = [
    {
        name: "Bergamotte",
        date: new Date("2023-01-19"),
        picDesk: BergamotteDesk,
        picSmol: BergamotteSmol,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[1]],
        desc: "Projet d'intégration réalisé dans le cadre de mon premier partiel en 2ème année à l'ECV Paris. Une maquette Figma nous était fournie, il fallait reproduire le plus fidèlement possible la landing page demandée.\nIntégration HTML & CSS • Implémentation Responsive • Stylisation en SCSS • Délais serrés – 4 heures",
        gitLink: "https://github.com/ArthurJenck/ECV_Bergamotte",
        webLink: "https://arthurjenck.github.io/ECV_Bergamotte/",
    },
    {
        name: "Mon Vieux Grimoire",
        date: new Date("2024-09-30"),
        picDesk: VieuxGrimDesk,
        picSmol: VieuxGrimSmol,
        picMobile: VieuxGrimMob,
        techs: [techsArr[2], techsArr[3], techsArr[4], techsArr[5]],
        desc: "Développement d'une API et du back-end d'un site de notation de livres, produit comme 6ème projet de mon parcours chez OpenClassrooms. Le serveur tourne sous Express, alimenté par Node.js. Une API MongoDB en NoSQL y est liée.\nLancer un serveur Express sous Node.js • Ajouter des modèles logiques de données • Mettre en place les opérations du CRUD • Stocker de façon sécurisée des données d'authentification • Concevoir une API à partir d'un cahier des charges • Gérer l'upload de fichiers volumineux et les optimiser avec Sharp",
        gitLink: "https://github.com/ArthurJenck/OC_VieuxGrimoire",
    },
    {
        name: "Kasa",
        date: new Date("2024-08-30"),
        picDesk: KasaDesk,
        picSmol: KasaSmol,
        picMobile: KasaMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Découverte de React lors du 5ème projet réalisé dans mon cursus OpenClassrooms, en intégrant un site de location d'appartement entre particuliers.\nInitialiser une application React avec CRA et Vite • Routage avec react-router-dom • Structuration en composants réutilisables • Stylisation en SCSS • Typage strict avec TypeScript • Animations CSS • Hébergement via GitHub Actions",
        gitLink: "https://github.com/ArthurJenck/OC_Kasa",
        webLink: "https://arthurjenck.github.io/OC_Kasa/",
    },
    {
        name: "Booki",
        date: new Date("2024-04-17"),
        picDesk: BookiDesk,
        picSmol: BookiSmol,
        picMobile: BookiMob,
        techs: [techsArr[0]],
        desc: "Intégration de la page d'accueil d'une agence de voyages à partir d'une maquette Figma, réalisée comme 2ème projet de mon parcours chez OpenClassrooms. Le site est réalisé intégralement en HTML et CSS.\nDécoupage de maquette • Intégration HTML & CSS • Implémentation Responsive • Veille et application des dernières évolutions techniques • Système en CSS-only • Validité W3C • Versioning Git sur GitHub",
        gitLink: "https://github.com/ArthurJenck/OC_Booki",
        webLink: "https://arthurjenck.github.io/OC_Booki/",
    },
    {
        name: "Morpion JS",
        date: new Date("2023-03-06"),
        picDesk: MorpionDesk,
        picSmol: MorpionSmol,
        picMobile: MorpionMob,
        techs: [techsArr[0], techsArr[1], techsArr[2]],
        desc: "Au cours de mon apprentissage de JavaScript pendant ma 2ème année à l'ECV Paris, j'ai été amené à créer un jeu de Morpion. Ma méthode de création s'est basée sur les classes CSS, ainsi qu'un tableau contenant toutes les conditions de victoire.\nCréation d'un jeu en JavaScript • Gérer les conditions de victoire • Prendre en compte les égalités • Stylisation en SCSS",
        gitLink: "https://github.com/ArthurJenck/ECV_TicTacToe",
        webLink: "https://arthurjenck.github.io/ECV_TicTacToe/",
    },
    {
        name: "Nina Carducci",
        date: new Date("2024-07-26"),
        picDesk: CarducciDesk,
        picSmol: CarducciSmol,
        picMobile: CarducciMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "Projet basé sur l'optimisation, l'accessibilité et le référencement, avec une partie de débogage Jquery, réalisé comme 4ème projet lors de mon parcours OpenClassrooms. Le site est un portfolio de photographie, contenant des images de très haute qualité ralentissant énormément le chargement du site.\nOptimisation d'une page conséquente • Compression d'images haute qualité sans perte • Debugging Jquery • Rédaction d'un cahier de recettes • Validité W3C • Application des règles d'accessibilité WCAG 2 • Audits Lighthouse, Wave, aXe DevTools et GT Metrix",
        gitLink: "https://github.com/ArthurJenck/OC_NinaCarducci",
        webLink: "https://arthurjenck.github.io/OC_NinaCarducci/",
    },
    {
        name: "Sophie Bluel",
        date: new Date("2024-06-10"),
        picDesk: BluelDesk,
        picSmol: BluelSmol,
        picMobile: BluelMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "3ème projet de mon parcours OpenClassrooms, consistant à intégrer une page de connexion ainsi qu'une modale sur la page d'admin du site d'une designeuse. Une API fournie dans la base de code est liée aux projets, et stockée dans le localStorage.\nCréation d'une page dynamique en Vanilla JS • Utiliser des formulaires pour récupérer des données utilisateur • Manipuler les éléments du DOM • Gérer les événements et leurs écouteurs • Stocker des données dans le localStorage • Communiquer dynamiquement avec l'API • Authentification d'administrateur • Implémenter le CRUD",
        gitLink: "https://github.com/ArthurJenck/OC_SophieBluel",
        webLink: "https://arthurjenck.github.io/OC_SophieBluel/",
    },
    {
        name: "Portfolio",
        date: new Date("2024-12-10"),
        picDesk: SpiralfolioDesk,
        picSmol: SpiralfolioSmol,
        picMobile: SpiralfolioMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Le site sur lequel vous vous trouvez actuellement. J'ai commencé à y réfléchir en 2022, pendant ma 2ème année à l'ECV Paris. Entre temps, je notais mes idées de design et de fonctionnalités dans un carnet, dont vous trouverez des images dans le lien ci-dessous, à droite du repository GitHub. Vous remarquerez qu'à l'époque, il était prévu que le site soit une représentation de la forme qu'est la Spirale, idée diminuée pour garder le site lisible\nDesign de maquette Figma • Conception UX / UI pour le confort utilisateur • Déploiement en ligne d'une Single Page Application sous React • Stylisation en SCSS • Animations CSS et JS • Typage strict avec TypeScript",
        gitLink: "https://github.com/ArthurJenck/Portfolio/",
        webLink:
            "https://drive.google.com/drive/folders/1f4fpOMN-B1Bi42T_U0PUSnKu0sPL1yy7",
    },
    {
        name: "Festivals 2023",
        date: new Date("2023-03-21"),
        picDesk: SpiralfolioDesk,
        picSmol: SpiralfolioSmol,
        picMobile: SpiralfolioMob,
        techs: [techsArr[0], techsArr[1], techsArr[2]],
        desc: "Projet d'intégration réalisé dans le cadre de mes derniers partiels en 2ème année à l'ECV Paris. À partir d'un document PDF et de guides de style, le but était de reproduire fidèlement la landing page en tenant compte de la sémantique HTMl, de la stylisation Sass et la gestion du DOM.\nIntégration HTML & CSS • Implémentation Responsive • Stylisation en SCSS • Contrôle du DOM en JavaScript • Délais serrés – 4 heures",
        gitLink: "https://github.com/ArthurJenck/ECV_Festivals2023",
        webLink: "https://arthurjenck.github.io/ECV_Festivals2023/",
    },
]
