import English from './en.json';
import Spanish from './es.json';

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',

}

export const getI18N = ({currentLocale = 'es'}: { currentLocale ?: string}) =>{
    if (currentLocale === LANGUAGES.ENGLISH) return English;
    if (currentLocale === LANGUAGES.SPANISH) return Spanish;
    return Spanish
}