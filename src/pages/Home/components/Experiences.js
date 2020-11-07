import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../services/HTTPServer'
import { Adventure } from './Adventure'

export const Experiences = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        loadExperiences()
    }, [] ) // Se va a ejecutar solo 1 vez

    const loadExperiences = async() =>{
        try {
            const response = await requestHttp('get', 'experiences')
            console.log('response', response)
            setExperiences(response.list)
        } catch (error) {
            console.log('Error', error)   
        }
    }

    return (
        <section className="experiences-container">
            {
                experiences.map((item, index) => <Adventure key ={ index} { ...item } />)
            }
        </section>
    )
}