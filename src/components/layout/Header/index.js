import { useState, useEffect } from 'react'

import BTN_RETURN from '../../../assets/INTERFACE/BTN_RETURN.svg'
import select_level from '../../../assets/INTERFACE/SELECT_LEVEL.svg'
import select_level_mobile from '../../../assets/INTERFACE/SELECT_LEVEL_BG_BLUE.svg'
import MenuHome from '../../content/MenuHome/index'
import Button from '../../content/button/index'

import "./header.css"

const showBtn = {
    "back": ['selectLevel', 'game-speak-intro'],
    "select-level": ['welcome', 'selectLevel']
};

const Header = ({
    scene,
    state,
    backScene,
    goToScene,
    modalHome,

    stateSound,
    setStateSound
}) => {
    const [mobile, setMobile] = useState(false);

    useEffect(()=>{
        setMobile(window.innerWidth < 650)
    }, [])

    return (
        <div className="header-container">
            <div className="header-content">
                
                {(showBtn['back'].includes(scene)) && 
                    <div 
                        className="btn-return"
                        onClick={backScene}
                    >
                        <img 
                            src={BTN_RETURN}
                            alt=""
                        />
                    </div>           
                }
                {(showBtn['select-level'].includes(scene)) && 
                    <div className="select-level">
                        <img 
                            src={mobile ? 
                                select_level_mobile 
                                : 
                                select_level
                            }
                            alt=""
                        />
                    </div>
                }

                <div className="menu-btns">
                    <MenuHome
                        onCallHome={modalHome}  
                        onCallMusic={()=> {setStateSound(!stateSound) }}
                        stateSound={stateSound}
                    />
                </div> 

                <div className="header-mobile">
                    <div className="header-mobile-btn-container">
                        <div className="header-mobile-btn">
                            <Button 
                                type="home"
                                onClick={modalHome}
                            />
                        </div>
                        <div className="header-mobile-btn">
                        {(showBtn['back'].includes(scene)) && 
                            <Button 
                                type="back"
                                onClick={backScene}
                            />
                        }   
                        </div>
                    </div>

                    <div className="header-mobile-btn-container">
                        <div className="header-mobile-btn">
                            <Button 
                                type={`${stateSound ? "music" : "music muted"}`}
                                onClick={()=> {setStateSound(!stateSound) }}
                                
                            />
                        </div>
                        <div className="header-mobile-btn">
                            <Button 
                                type="help"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;