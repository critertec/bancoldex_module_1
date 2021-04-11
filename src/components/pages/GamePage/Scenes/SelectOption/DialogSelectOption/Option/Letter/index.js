import "./letter.css"

import LETTER_A from '../../../../../../../../assets/INTERFACE/LETTER_A.svg'
import LETTER_A_ACTIVE from '../../../../../../../../assets/INTERFACE/LETTER_A_ACTIVE.svg'

import LETTER_B from '../../../../../../../../assets/INTERFACE/LETTER_B.svg'
import LETTER_B_ACTIVE from '../../../../../../../../assets/INTERFACE/LETTER_B_ACTIVE.svg'

import LETTER_C from '../../../../../../../../assets/INTERFACE/LETTER_C.svg'
import LETTER_C_ACTIVE from '../../../../../../../../assets/INTERFACE/LETTER_C_ACTIVE.svg'

const Letter = ({
    option = "A",
    active
}) => {

    const imgLetter = () => {
        switch(option) {
            case "A":{
                return active ? LETTER_A_ACTIVE : LETTER_A;
            }
            case "B":
                return active ? LETTER_B_ACTIVE : LETTER_B;
            case "C":
                return active ? LETTER_C_ACTIVE : LETTER_C;
        }
    }

    return (
        <div 
            className="letter-container"
        >
            <img 
                className="img"
                src={imgLetter()}
                alt=""
            />
        </div>
    )
}

export default Letter;