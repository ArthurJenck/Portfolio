import htmlCssIcon from "../assets/icons/techs/html-css.svg"
import htmlCssActive from "../assets/icons/skills/filters/html-css-active.svg"
import htmlCssInactive from "../assets/icons/skills/filters/html-css-inactive.svg"
import scssIcon from "../assets/icons/techs/scss.svg"
import scssActive from "../assets/icons/skills/filters/scss-active.svg"
import scssInactive from "../assets/icons/skills/filters/scss-inactive.svg"
import jsTsIcon from "../assets/icons/techs/js-ts.svg"
import jsTsActive from "../assets/icons/skills/filters/js-ts-active.svg"
import jsTsInactive from "../assets/icons/skills/filters/js-ts-inactive.svg"
import reactIcon from "../assets/icons/techs/react.svg"
import reactActive from "../assets/icons/skills/filters/react-active.svg"
import reactInactive from "../assets/icons/skills/filters/react-inactive.svg"
import nodeIcon from "../assets/icons/techs/node.svg"
import nodeActive from "../assets/icons/skills/filters/node-active.svg"
import nodeInactive from "../assets/icons/skills/filters/node-inactive.svg"
import mongoIcon from "../assets/icons/techs/mongo.svg"
import mongoActive from "../assets/icons/skills/filters/mongo-active.svg"
import mongoInactive from "../assets/icons/skills/filters/mongo-inactive.svg"

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

const techsArr = [
    {
        title: "HTML / CSS",
        icon: htmlCssIcon,
        activeIcon: htmlCssActive,
        inactiveIcon: htmlCssInactive,
        order: 1,
        active: true,
    },
    {
        title: "Sass / Scss",
        icon: scssIcon,
        activeIcon: scssActive,
        inactiveIcon: scssInactive,
        order: 2,
        active: true,
    },
    {
        title: "Javascript / TS",
        icon: jsTsIcon,
        activeIcon: jsTsActive,
        inactiveIcon: jsTsInactive,
        order: 3,
        active: true,
    },
    {
        title: "React",
        icon: reactIcon,
        activeIcon: reactActive,
        inactiveIcon: reactInactive,
        order: 4,
        active: true,
    },
    {
        title: "Node.js",
        icon: nodeIcon,
        activeIcon: nodeActive,
        inactiveIcon: nodeInactive,
        order: 5,
        active: true,
    },
    {
        title: "MongoDB",
        icon: mongoIcon,
        activeIcon: mongoActive,
        inactiveIcon: mongoInactive,
        order: 6,
        active: true,
    },
]

const projectsArr = [
    {
        name: "Bergamotte",
        date: new Date("2023-01-19"),
        picDesk: BergamotteDesk,
        picSmol: BergamotteSmol,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[1]],
        desc: "Projet d'intégration réalisé dans le cadre de mon premier partiel en 2ème année à l'ECV Digital Paris. Une maquette Figma nous était fournie, il fallait reproduire le plus fidèlement possible la landing page demandée.\nLe site est conçu entièrement en HTML et CSS, accompagné de Sass comme pré-processeur. Le site complet a été réalisé dans un délai de 4 heures.",
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
        desc: "Développement d'une API et du back-end d'un site de notation de livres, produit comme 6ème projet de mon parcours chez OpenClassrooms. Le serveur tourne sous Express, alimenté par Node.js. Une API MongoDB en NoSQL y est liée.\nUn déploiement sur Vercel est prévu prochainement, pour avoir un aperçu en ligne du projet complété.",
        gitLink: "https://github.com/ArthurJenck/OC_VieuxGrimoire",
    },
    {
        name: "Kasa",
        date: new Date("2024-08-30"),
        picDesk: KasaDesk,
        picSmol: KasaSmol,
        picMobile: KasaMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Découverte de React lors du 5ème projet réalisé dans mon cursus OpenClassrooms, en intégrant un site de location d'appartement entre particuliers.\nLa totalité du projet a été réalisée en TypeScript ainsi qu'en JavaScript, de mon propre chef. Les deux codes terminés sont disponibles sur des branches du projet. Des animations CSS avec Sass ont également été ajoutées pour l'expérience utilisateur.",
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
        desc: "Intégration de la page d'accueil d'une agence de voyages à partir d'une maquette Figma, réalisée comme 2ème projet de mon parcours chez OpenClassrooms. Le site est réalisé intégralement en HTML et CSS.\nÀ l'aide du tout récent pseudo-sélecteur :has, j'ai rendu les boutons filtrant les hébergements fonctionnels, le tout sans JavaScript, sur une deuxième branche du repository. Conformément au W3C, la branche principale ne contient pas ce pseudo-sélecteur.",
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
        desc: "Au cours de mon apprentissage de JavaScript pendant ma 2ème année à l'ECV Digital Paris, j'ai été amené à créer un jeu de Morpion. Ma méthode de création s'est basée sur les classes CSS, ainsi qu'un tableau contenant toutes les conditions de victoire.",
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
        desc: "Projet basé sur l'optimisation, l'accessibilité et le référencement, avec une partie de débogage Jquery, réalisé comme 4ème projet lors de mon parcours OpenClassrooms. Le site est un portfolio de photographie, contenant des images de très haute qualité ralentissant énormément le chargement du site. \nL'enjeu était de diminuer au maximum leur impact sur le chargement, tout en conservant leur qualité et leurs détails.",
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
        desc: "3ème projet de mon parcours OpenClassrooms, consistant à intégrer une page de connexion ainsi qu'une modale sur la page d'admin du site d'une designeuse. Une API fournie dans la base de code est liée aux projets, et stockée dans le localStorage.\nJ'ai fait plusieurs ajouts au design de la page, améliorant l'expérience utilisateur, comme des alertes informant la réussite ou l'échec des opérations effectuées.",
        gitLink: "https://github.com/ArthurJenck/OC_SophieBluel",
        webLink: "https://arthurjenck.github.io/OC_SophieBluel/",
    },
]

export default {
    techsArr,
    projectsArr,
}
