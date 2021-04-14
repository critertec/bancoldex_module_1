import Button from '../button/index'
import "./MenuHome.css"

const MenuHome = ({
    onCallHome,
    onCallMusic,
    stateSound
}) => {

    return (
        <div className="menu-home-container">
            <div className="menu-home-content">
                <div className="menu-home-btn">
                    <Button 
                        type={`${stateSound ? "music" : "music muted"}`}
                        onClick={onCallMusic}
                    />
                </div>
                <div className="menu-home-btn">
                    <Button 
                        type="home"
                        onClick={onCallHome}
                    />
                </div>
            </div>
        </div>
    )
}

export default MenuHome;