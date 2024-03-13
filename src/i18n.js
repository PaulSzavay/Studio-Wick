import i18n from 'i18next'
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    debug:true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue:false,
    },
    resources: {
        en: {
            translation: {
                about : 'About',
                contact: 'Contact',
                book: 'Book Now',
                mission_statement_title: 'Redefining Beauty Standards',
                mission_statement_phrase: 'Where self-expression knows no bounds.',
                mission_statement_button: `Learn More`,
                about_mission_statement: `At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.`,
                about_title1 : `Who is Steff?`,
                about_section1: `Steff's lifelong dream was to pursue a career as a hairstylist. After completing her studies at Algonquin College, she dedicated the first six years of her professional life to refining her skills in Ottawa. In 2021, she made the decision to return to her hometown of Montreal. Finally, in 2023, she realized her dream by opening StudioWick. Specializing in precision cutting, Steff takes great pride in her work. Her true passion lies in creating beautiful highlights and transformative color treatments.`,
                about_title2 : `What makes Steff different?`,
                about_section2: `Steff is driven by a desire to challenge society's beauty standards and cultivate an environment where people feel comfortable without the pressure of conforming to a specific image. Her philosophy revolves around attentive listening to her clients and providing thoughtful input that harmonizes with their individual preferences.`,
                about_title3 : `Steff's Goal`,
                about_section3: `At StudioWick, clients are welcomed into a safe and inclusive space where they are encouraged to express their true selves. Steff is committed to actively listening, empathizing, and helping clients achieve their hair aspirations. Her goal is to cultivate an atmosphere that promotes comfort and a sense of belonging for everyone who walks through the door.`,
                contact_title : `How to reach me?`,
                contact_info : `Please feel free to reach out to me via text message (514-898-9425) or DM me on `,
                contact_instagram : `Instagram`,
                contact_name: `Name:`,
                contact_email : `Email:`,
                contact_subject: `Subject`,
                contact_message: `Message:`,
                contact_submit: `Submit`,
                footer_follow: `Follow Us:`,
                footer_rights: `©2024, Studio Wick All Rights Reserved`,
                footer_website: `Website by`
        },
    },
        fr: {
            translation: {
                about : 'À propos',
                contact: 'Contact',
                book: 'Réserver',
                mission_statement_title: 'Redéfinir les normes de beauté',
                mission_statement_phrase: `Là où l'expression de soi ne connaît aucune limite`,
                mission_statement_button: 'En savoir plus',
                about_mission_statement: `Au StudioWick, nous sommes dédiés à redéfinir les normes de beauté et à promouvoir l'inclusivité. Nous croyons en un monde où les coupes de cheveux n'ont pas de genre, où les femmes fortes sont célébrées, et où chaque individu se sent en sécurité, confiant et à l'aise dans sa propre peau. Notre mission est d'autonomiser et d'élever, en créant un espace où l'authenticité prospère et où l'expression de soi ne connaît aucune limite.`,
                about_title1 : `Qui est Steff ?`,
                about_section1: `Depuis qu'elle était jeune, Steff voulait être coiffeuse. Après avoir terminé ses études au Collège Algonquin, elle a consacré les six premières années de sa vie professionnelle à perfectionner ses compétences à Ottawa. En 2021, elle a pris la décision de retourner dans sa ville natale de Montréal. Enfin, en 2023, elle a réalisé son rêve en ouvrant StudioWick. Spécialisée dans la coupe de précision, Steff est très fière de son travail. Sa véritable passion réside dans la création de magnifiques mèches et de traitements colorés transformateurs.`,
                about_title2 : `Qu'est-ce qui rend Steff différente ?`,
                about_section2: `Steff est animée par le désir de défier les normes de beauté de la société et de cultiver un environnement où les gens se sentent à l'aise sans la pression de se conformer à une image spécifique. Sa philosophie tourne autour de l'écoute attentive de ses clients et de la fourniture d'avis réfléchis qui s'harmonisent avec leurs préférences individuelles.`,
                about_title3 : `L'objectif de Steff`,
                about_section3: `Au StudioWick, les clients sont accueillis dans un espace sûr et inclusif où ils sont encouragés à exprimer leur vraie nature. Steff s'engage à écouter activement, à faire preuve d'empathie et à aider les clients à réaliser leurs aspirations capillaires. Son objectif est de cultiver une atmosphère qui favorise le confort et un sentiment d'appartenance pour tous ceux qui franchissent la porte.`,
                contact_title : `Comment me joindre ?`,
                contact_info : `N'hésitez pas à me contacter par message texte (514-898-9425) ou en m'envoyant un message direct sur `,
                contact_instagram : `Instagram`,
                contact_name: `Nom:`,
                contact_email : `E-mail:`,
                contact_subject: `Sujet`,
                contact_message: `Message:`,
                contact_submit: `Envoyer`,
                footer_follow: `Suivez-nous:`,
                footer_rights: `©2024, Studio Wick. Tous droits réservés.`,
                footer_website: `Site web réalisé par`
            }
        }
    }
})

export default i18n;