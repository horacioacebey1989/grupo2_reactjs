import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings, Shop, Language} from '@material-ui/icons'

export default function topbar() {
    return (
        <div className= 'topbar'>
            <div className= 'topWrapper'>
                <div className= 'topleft'>
                    <span className='logo'>LOGO</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'></div>
                    <NotificationsNone />

                    <div className='topbarIconContainer'></div>
                    <Shop />

                    <div className='topbarIconContainer'></div>
                    <Language />  

                    <div className='topbarIconContainer'/>
                    <Settings/>

                    <div className='topbarIconContainer'/>
                    <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='' className='avatar'></img>
                </div>
            </div>
        </div>
    )
}


//export default topbar 