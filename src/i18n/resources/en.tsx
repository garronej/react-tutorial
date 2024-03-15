import type { Translations } from '../types';

export const translations: Translations<"en"> = {
    "Account": {
        "navigate to home": "Navigate to home",
        "your account": "Your account",
    },
    "Blog": {
        "blog": "Journal",
    },
    "LanguageSwitcher": {
        "language": "Language",
    },
    "LeftBar": {
        "account": "Account",
        "blog": "Blog",
        "home": "Home",
    },
    "Home": {
        "title": "Welcome",
        "welcome": ({ date }) => {
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            }).format(date);
            
            return (<>
                Welcome to this <b>Facebook</b> clone, it's {formattedDate}
            </>);
        },
    }
};
