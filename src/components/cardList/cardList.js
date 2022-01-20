import React, { Component } from 'react'
import './cardlist.css'

export default class CardList extends Component {
    constructor(props){
        super()
    }
    render() {
        const monster = this.props.monster
        return (
                <div className="card">
                    <img 
                        src={`https://robohash.org/${monster.id}?set=set2`}
                        alt={monster.name}
                    />
                    <h3>{monster.name}</h3>
                    <p>{monster.email}</p>
                </div>
        )
    }
}
