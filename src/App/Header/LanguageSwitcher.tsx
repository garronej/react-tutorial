import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import { languages, useLang, declareComponentKeys, useTranslation } from "i18n";

type Props = {
    className?: string;
}

export function LanguageSwitcher(props: Props) {

    const { className } = props;

    const { lang, setLang } = useLang();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { t } = useTranslation({ LanguageSwitcher });

    const open = anchorEl !== null;


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={className}>
            <Button
                //id="language-switcher-button"
                //aria-controls={open ? 'language-switcher-menu' : undefined}
                //aria-haspopup="true"
                //aria-expanded={open ? 'true' : undefined}
                onClick={event => setAnchorEl(event.currentTarget)}
                startIcon={<TranslateIcon />}
            >
                {t("language")}
            </Button>
            <Menu
                //id="language-switcher-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    //'aria-labelledby': 'language-switcher-button',
                }}
            >
                {languages.map(lang_i => (
                    <MenuItem 
                        key={lang_i} 
                        selected={lang === lang_i}
                        onClick={() => {
                            setLang(lang_i);
                        }}
                    >
                        {(()=>{
                            switch(lang_i){
                                case "en": return "English";
                                case "fr": return "Français";
                                case "vn": return "Tiếng Việt";
                            }
                        })()}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}


export const { i18n } = declareComponentKeys<
    "language"
>()({ LanguageSwitcher });
