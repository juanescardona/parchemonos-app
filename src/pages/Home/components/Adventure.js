import React from 'react'
import { Score } from '../../../components/Score'
import{
    Link
} from 'react-router-dom'

export const Adventure = (props) => (
    <Link to={`/detail/${props.id}`}>  
        <div className="adventure-container">
            <img src={props.image} width="150" height="150"/>
            <article>
                <h3>{props.name}</h3>
                <p>{props.place}</p>
                <h2>COP <small>{props.price}</small></h2>
                <Score stars={props.stars} users={props.users}  size="16px" />
            </article>
        </div>
    </Link>
)