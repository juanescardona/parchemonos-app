import React from 'react'
import { Score } from '../../../components/Score'
import{
    Link
} from 'react-router-dom'

export const Adventure = (props) => (
    <Link to={`/detail/${props.id}`}>  
        <div className="adventure-container">
            <img src={props.image}/>
            <article>
                <h3>{props.title}</h3>
                <p>{props.place}</p>
                <h5>COP <small>{props.price}</small></h5>
                <Score stars={props.score} users={props.users}  size="16px" />
            </article>
        </div>
    </Link>
)