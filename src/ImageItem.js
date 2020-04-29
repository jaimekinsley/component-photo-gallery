import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.creatures.title}</h2>
                <p className="description">{this.props.creatures.description}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.creatures.url}
                    src={this.props.creatures.url} />
            </div>
            <p className="keyword">{this.props.creatures.keyword}</p>
        </li>
    }
}
