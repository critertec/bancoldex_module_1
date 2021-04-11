import { useState, useEffect } from 'react';

import "./DialogHistory.css"
import Button from '../../../../../content/button/index'
import PanoramaPersonage from '../../../../../content/PanoramaPersonage/index'

const DialogHistory = ({
    Personage,
    currentQuestion,
    nextScene
}) => {

    const [page, setPage]= useState(0);

    const TextDesc = ({desc}) => {
        if (!desc) return '';
        return (
            <div>
                { Array.isArray(desc) ? 
                        desc.map( (t, index) => (
                            <div 
                                key={index}
                                className="dialogHistory-text"
                            >
                                { t }
                            </div> 
                        ))
                    :
                    <div className="dialogHistory-text">
                        { desc }
                    </div>  
                }
            </div>
        )
    }

    const BoxText = () => {
        const infoPage = currentQuestion?.pages[page];

        return (
            <div className="dialogHistory-boxText">
                    
                {/* <div className="avatar-mobile-container">
                    <div className="avatar-mobile">
                        <Personage />
                    </div>
                </div> */}
                
                {/* <PanoramaPersonage /> */}

                <TextDesc 
                    desc = {infoPage.desc}
                />     

                { (infoPage && infoPage.question ) &&
                    (
                        <div className="dialogHistory-text-question">
                            { infoPage.question }
                        </div>
                    )
                }

            </div>
        )
    }

    useEffect(()=> {
        console.log('DialogHistory', currentQuestion)
    }, [])

    return (
        <div className="dialogHistory-container">
            <div className="dialogHistory-content">
                <BoxText />
            </div>
            <div className="dialogHistory-footer">
                <div className="dialogHistory-btn-next">
                    { (
                        page >= 0 
                        && page !== (currentQuestion?.pages.length -1)
                      )
                        && (
                            <div className="dialogHistory-btn-right">
                                <Button 
                                    type="arrow right"
                                    onClick={()=>{
                                        setPage(page + 1)
                                    }}
                                />
                            </div>
                        )
                    }
                    
                    { page === (currentQuestion?.pages.length -1) &&

                        <Button 
                            type="next"
                            onClick={nextScene}
                        />
                    }

                    { page > 0 &&
                        <div className="dialogHistory-btn-left">
                            <Button 
                                type="arrow left"
                                onClick={()=>{
                                    setPage(page - 1)
                                }}
                            />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default DialogHistory;