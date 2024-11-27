import htmlCssIcon from "../assets/icons/techs/html-css.svg"
import scssIcon from "../assets/icons/techs/scss.svg"
import jsTsIcon from "../assets/icons/techs/js-ts.svg"
import reactIcon from "../assets/icons/techs/react.svg"
import nodeIcon from "../assets/icons/techs/node.svg"
import mongoIcon from "../assets/icons/techs/mongo.svg"

import BergamotteDesk from "../assets/images/bergamotte_desk.webp"
import BergamotteMob from "../assets/images/bergamotte_mobile.webp"

const techsArr = [
    {
        title: "HTML / CSS",
        icon: htmlCssIcon,
        order: 1,
    },
    {
        title: "Sass / Scss",
        icon: scssIcon,
        order: 2,
    },
    {
        title: "Javascript / TS",
        icon: jsTsIcon,
        order: 3,
    },
    {
        title: "React",
        icon: reactIcon,
        order: 4,
    },
    {
        title: "Node.js",
        icon: nodeIcon,
        order: 5,
    },
    {
        title: "MongoDB",
        icon: mongoIcon,
        order: 6,
    },
]

const projectsArr = [
    {
        name: "Bergamotte",
        date: new Date("2023-01-19"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[1]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/ECV_Bergamotte",
        webLink: "https://arthurjenck.github.io/ECV_Bergamotte/",
    },
    {
        name: "Mon Vieux Grimoire",
        date: new Date("2024-09-30"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[2], techsArr[3], techsArr[4], techsArr[5]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/OC_VieuxGrimoire",
    },
    {
        name: "Kasa",
        date: new Date("2024-08-30"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[1], techsArr[2], techsArr[3]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/OC_Kasa",
        webLink: "https://arthurjenck.github.io/OC_Kasa/",
    },
    {
        name: "Booki",
        date: new Date("2024-04-17"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[0]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/OC_Booki",
        webLink: "https://arthurjenck.github.io/OC_Booki/",
    },
    {
        name: "Morpion",
        date: new Date("2023-03-06"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[1], techsArr[2]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/ECV_TicTacToe",
        webLink: "https://arthurjenck.github.io/ECV_TicTacToe/",
    },
    {
        name: "Nina Carducci",
        date: new Date("2024-07-26"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/OC_NinaCarducci",
        webLink: "https://arthurjenck.github.io/OC_NinaCarducci/",
    },
    {
        name: "Sophie Bluel",
        date: new Date("2024-06-10"),
        picDesk: BergamotteDesk,
        picMobile: BergamotteMob,
        techs: [techsArr[0], techsArr[2]],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate ipsum vehicula neque tincidunt scelerisque. Praesent ut justo id odio elementum mattis. Curabitur nec eleifend orci. Quisque nec ullamcorper odio, a dictum neque.\n\n Nulla ornare tellus venenatis hendrerit placerat. Morbi augue odio, mollis id molestie id, eleifend ut turpis. Phasellus odio tellus, sollicitudin pretium mi et, ultrices dignissim lectus.",
        gitLink: "https://github.com/ArthurJenck/OC_SophieBluel",
        webLink: "https://arthurjenck.github.io/OC_SophieBluel/",
    },
]

export default {
    techsArr,
    projectsArr,
}
