import React from 'react'
import './Style/feature.css'

const feature = (props) => {
    const classNameItem = `feature ${props.feature.active?'active':''}`
    return(
        <div className={classNameItem} onClick={()=>{props.event(props.feature.id)}}>{props.feature.name}</div>
    )
}

export default feature

