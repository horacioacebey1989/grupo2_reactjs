import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings, Language} from '@material-ui/icons'

export default function topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className='logo'>Tarija onHand</span>
            </div>
        </div>
    </div>
  )
}
