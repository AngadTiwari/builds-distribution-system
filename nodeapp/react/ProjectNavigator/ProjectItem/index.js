import React from 'react';

import './index.css';

export default class ProjItm extends React.Component {

    static defaultProps = {
        isSelected: false,
        title: "",
        data: {},
        selectProject: (data) => {console.log(data)}
    }

    onPress = () => {
        this.props.selectProject(this.props.data)
    }

    render() {
        return (
            <button className={`projectItem ${this.props.isSelected ? "base_rev corner_6" : "no_bg_color"}`}
                onClick={this.onPress}>
                {this.props.title}
            </button>
        )
    }
}