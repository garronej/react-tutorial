import type { Translations } from '../types';

export const translations: Translations<"fr"> = {
    /* spell-checker: disable */
    "Account": {
        "navigate to home": "Naviguer vers l'accueil",
        "your account": "Votre compte",
    },
    "Blog": {
        "blog": "Blog",
    },
    "LanguageSwitcher": {
        "language": "Langue",
    },
    "LeftBar": {
        "account": "Compte",
        "blog": "Blog",
        "home": "Accueil",
    },
    "Home": {
        "title": "Bienvenue",
        "welcome": ({ date }) => {
            const formattedDate = new Intl.DateTimeFormat('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            }).format(date);
            
            return (<>
                Bienvenue sur ce clone de <b>Facebook</b>, nous sommes le {formattedDate}
            </>);
        },
    }
    /* spell-checker: enable */
};
