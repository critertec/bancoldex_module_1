import Modal from '../Modal'
import "./HomeConfirm.css"
import Button from '../../button/index'

const ModalConfirm = ({
    onCall,
    handleChange,
    show = false,
    message = "¿ Seguro que quieres regresar al home, perderas tu progreso ?"
}) => {
    return (
        <Modal show={show} handleChange={handleChange}>
            <div className='modalHome'>
                <div className="modalHome-boxText">
                    <div className="modalHome-text">
                        { message }
                    </div>
                </div>
                <div className="modalHome-btn-container">
                    <div className="modalHome-btn">
                        <Button 
                            type="next"
                            onClick={onCall}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalConfirm;