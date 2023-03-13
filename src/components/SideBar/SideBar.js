import React from 'react'
import { useState,useEffect } from 'react'
import { featuresAdmin, featuresUser } from './Variable'
import './Style/sideBar.css'
import Feature from './Feature'


const SideBar = (props) => {
    const [features , setFeatures] = useState([])
    useEffect(() => {
        if(props.isAdmin){
            setFeatures(featuresAdmin)
        }else{
            setFeatures(featuresUser)
        }
    }, [])


    const handleFeature = (id) => {
        const reFeatures = features.map(item => {
           if(item.id == id){
                props.setData(item.data)
                return {
                    ...item,
                    active:true
                }
           }
           return {
                ...item,
                active:false
           }
        })
        setFeatures(reFeatures)
        
    }

    return(
        <div className='sidebar'>
            {features.map((item) => 
                <Feature key={item.id} feature={item} event={handleFeature}/>
            )}
        </div>
    )
}

export default SideBar