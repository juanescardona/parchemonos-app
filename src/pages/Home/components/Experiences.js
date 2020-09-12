import React from 'react'
import { Adventure } from './Adventure'
import {EXPERIENCES_DATA} from './../../../data/Experiences.Data'

export const Experiences = () => (
    <section className="experiences-container">
        {
            EXPERIENCES_DATA.map((item, index) => <Adventure key ={ index} { ...item } />)
        }
    </section>
)
