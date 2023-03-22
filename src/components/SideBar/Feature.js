import React from 'react'
import './Style/feature.css'

export const Feature = (props) => {
    const classNameItem = `feature ${props.feature.active ? 'active' : ''}`
    return (
        <div className={classNameItem} onClick={() => { props.event(props.feature.id) }}>{props.feature.name}</div>
    )
}

export const FeatureDefault = (props) => {
    const classNameItem = `nav-link ${props.feature.active?'active' : ''}`
    return (
        <li className={"list"}  onClick={() => { props.event(props.feature.id) }}>
            <a href="#" className={classNameItem}>
                <i class="bx bx-log-out icon"></i>
                <span class="link">{props.feature.name}</span>
            </a>
        </li>
    )
}

