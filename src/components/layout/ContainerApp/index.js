import "./containerApp.css"

import Header from '../Header/index'
import Footer from '../Footer/index'

const ContainerApp = ({ children, ...rest }) => {

    return (
        <div className="layout-container">
            <Header  {...rest} />

            <div className="layout-content">
                { children }
            </div>

            <div className="layout-footer">
                <Footer  {...rest} />
            </div>
        </div>
    )
}

export default ContainerApp;