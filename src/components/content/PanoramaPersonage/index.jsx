
import "./PanoramaPersonage.css"

import BG_JOSE_P from "../../../assets/FONDOS/BG_JOSE_P.svg"
import BG_DON_ALFONSO_P from "../../../assets/FONDOS/BG_DON_ALFONSO_P.svg"
import BG_GLORIA_P from "../../../assets/FONDOS/BG_GLORIA_P.svg"

const PanoramaPersonage = ({
    name = "don alfonso"
}) => {

    const img = () => {
        switch(name){
            case 'don alfonso':
                return BG_DON_ALFONSO_P;
            case 'gloria':
                return BG_GLORIA_P;
            case 'jose':
                return BG_JOSE_P;

        }
    }

    return (
        <div className="panorama-personage-container">
            <div className="panorama-personage">
                <img 
                    src={img()}
                    alt=""
                />
            </div>
        </div>
    )
}

export default PanoramaPersonage;