import Modal from '../Modal'
import "./Help.css"
import Button from '../../button/index'

import { InfoModalHelp } from '../../../pages/AppPage/data'

const ModalHelp = ({
    onCall,
    handleChange,
    show = true
}) => {
    return (
        <Modal show={show} handleChange={handleChange}>
            <div className='modalHelp'>
                <div className="modalHelp-boxText">
                    <div className="modalHelp-text">
                        {
                            InfoModalHelp.map(text => (
                                <div style={{ 
                                    marginBottom: '10px'
                                }}>
                                    { text }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="modalHelp-btn-container">
                    <div className="modalHelp-btn">
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

export default ModalHelp;