import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.creature.title}</h2>
                <p className="description">{this.props.creature.description}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.creature.url}
                    src={this.props.creature.url} />
            </div>
            <p className="keyword">{this.props.creature.keyword}</p>
        </li>
    }
}
