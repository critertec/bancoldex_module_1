
import "./Footer.css"
import btn_help from '../../../assets/INTERFACE/BTN_HELP.svg'

const Footer = ({
    modalHelp
}) => {
    return (
        <div className="footer-container">
            <div className="btn-help" onClick={modalHelp}>
                <img 
                    src={btn_help}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Footer;