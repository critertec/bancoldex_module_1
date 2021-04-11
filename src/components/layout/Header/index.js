
import "./header.css"

import btn_return from '../../../assets/INTERFACE/BTN_RETURN.svg'
import select_level from '../../../assets/INTERFACE/SELECT_LEVEL.svg'
import btns_menu from '../../../assets/INTERFACE/BTNS_MENU.svg'

const Header = ({
    scene,
    state,
    backScene
}) => {
    return (
        <div className="header-container">
            <div className="header-content">
                {true && 
                    <div 
                        className="btn-return"
                        onClick={backScene}
                    >
                        <img 
                            src={btn_return}
                            alt=""
                        />
                    </div>           
                }
                {(['welcome', 'selectLevel'].includes(scene)) && 
                    <div className="select-level">
                        <img 
                            src={select_level}
                            alt=""
                        />
                    </div>
                }

                <div className="menu-btns">
                    <img 
                        src={btns_menu}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;