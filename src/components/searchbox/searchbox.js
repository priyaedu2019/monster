import React, { Component } from 'react'

export default class Searchbox extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <div>
                <input
                    name="searchtxt"
                    type="search"
                    placeholder="Search Monsters"
                    onChange={this.props.onSearchChange} />
            </div>
        )
    }
}
