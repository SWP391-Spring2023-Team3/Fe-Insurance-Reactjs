import React from 'react'
import { useState, useEffect } from 'react'
import { featuresAdmin, featuresUser } from './Variable'
import './Style/sideBar.css'
import { Feature, FeatureDefault } from './Feature'


const SideBar = (props) => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        if (props.isAdmin) {
            setFeatures(featuresAdmin)
        } else {
            setFeatures(featuresUser)
        }
    }, [])


    const handleFeature = (id) => {
        console.log("handle")
        const reFeatures = features.map(item => {
            if (item.id == id) {
                props.setData(item.data)
                return {
                    ...item,
                    active: true
                }
            }
            return {
                ...item,
                active: false
            }
        })
        setFeatures(reFeatures)

    }

    return (
        props.isAdmin ?
            <div className='sidebar'>
                {features.map((item) =>
                    <Feature key={item.id} feature={item} event={handleFeature} />
                )}
            </div>
            : <div class="sidebar" style={{ zIndex: "-99" }}>
                <div class="sidebar-content">
                    <ul class="lists">
                        {features.map((item) =>
                            <FeatureDefault key={item.id} feature={item} event={handleFeature} />
                        )}
                    </ul>
                    <div class="bottom-cotent">
                        <li class="list">
                            <a href="#" class="nav-link">
                                <i class="bx bx-cog icon"></i>
                                <span class="link">Settings</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="login" class="nav-link">
                                <i class="bx bx-log-out icon"></i>
                                <span class="link">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
    )
}

export default SideBar