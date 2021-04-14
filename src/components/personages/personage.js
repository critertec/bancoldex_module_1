import "./personage.css"

//Girl Intro
import GIRL from '../../assets/PERSONAJES/GIRL_INTRO.svg';

// Jose
import JOSE from '../../assets/PERSONAJES/JOSE.svg';
import JOSE_OKAY from '../../assets/PERSONAJES/JOSE_OKAY.svg';
import JOSE_UPSET from '../../assets/PERSONAJES/JOSE_UPSET.svg';
import JOSE_THINKING from '../../assets/PERSONAJES/JOSE_THINKING.svg';

// Don Alfonso
import DON_ALFONSO from '../../assets/PERSONAJES/DON_ALFONSO.svg';
import DON_ALFONSO_OKAY from '../../assets/PERSONAJES/DON_ALFONSO_OKAY.svg';
import DON_ALFONSO_UPSET from '../../assets/PERSONAJES/DON_ALFONSO_UPSET.svg';
import DON_ALFONSO_THINKING from '../../assets/PERSONAJES/DON_ALFONSO_THINKING.svg';

// Gloria
import GLORIA from '../../assets/PERSONAJES/GLORIA.svg';
import GLORIA_OKAY from '../../assets/PERSONAJES/GLORIA_OKAY.svg';
import GLORIA_UPSET from '../../assets/PERSONAJES/GLORIA_UPSET.svg';
import GLORIA_THINKING from '../../assets/PERSONAJES/GLORIA_THINKING.svg';

export default ({
    name,
    action
}) => {

    const fotoPersonage = () => {
        switch(name){
            case 'jose':
                switch(action){
                    case "ok":
                        return JOSE_OKAY;
                    case "upset":
                        return JOSE_UPSET;
                    case "thinking":
                        return JOSE_THINKING;
                    default:
                        return JOSE;
                }
            case 'don alfonso':
                switch(action){
                    case "ok":
                        return DON_ALFONSO_OKAY;
                    case "upset":
                        return DON_ALFONSO_UPSET;
                    case "thinking":
                        return DON_ALFONSO_THINKING;
                    default:
                        return DON_ALFONSO;
                }
            case 'gloria':
                switch(action){
                    case "ok":
                        return GLORIA_OKAY;
                    case "upset":
                        return GLORIA_UPSET;
                    case "thinking":
                        return GLORIA_THINKING;
                    default:
                        return GLORIA;
                }
            default:
                return GIRL;
        }
    }

    return (
        <div className="personage">
            <img
                className="img" 
                src={fotoPersonage()} 
                alt=""
            />
        </div>
    )
}