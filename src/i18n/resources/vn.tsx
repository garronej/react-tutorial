import type { Translations } from '../types';

export const translations: Translations<"vn"> = {
    /* spell-checker: disable */
    "Account": {
        "navigate to home": "Điều hướng đến trang chủ",
        "your account": "Tài khoản của bạn",
    },
    "Blog": {
        "blog": "Nhật ký",
    },
    "LanguageSwitcher": {
        "language": "Ngôn ngữ",
    },
    "LeftBar": {
        "account": "Tài khoản",
        "blog": "Nhật ký",
        "home": "Trang chủ",
    },
    "Home": {
        "title": "Chào mừng",
        "welcome": ({ date }) => {
            const formattedDate = new Intl.DateTimeFormat('vi-VN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            }).format(date);

            return (<>
                Chào mừng đến với bản sao <b>Facebook</b>, hôm nay là {formattedDate}
            </>);
        },
    }
    /* spell-checker: enabled */
};
