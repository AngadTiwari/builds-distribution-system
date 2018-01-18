import React from 'react';
import './index.scss';

export default class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0
        }
    }

    static defaultProps = {
        buildList: [{}, {}],
        title: "Title"
    }

    onPress({item, index}) {

    }

    render() {
        const {buildList, title} = this.props;
        return (
            <div className="project_list_container padding_20_28">
                <div className="project_list_title">
                    <div className="title_section space_between_row">
                        <div className="font_22 font_normal">
                            {title}
                        </div>
                        <button className="add_build font_26 base_rev no_bg_color">+</button>
                    </div>
                </div>
                <div className="srollable_items">
                    {buildList.map((item, idx) => {
                        return (
                            <button key={idx} className={`projectButton ${this.state.selectedItem === idx ? "selected_build" : ""}`} onClick={this.onPress.bind(this, {item, index: idx})}>
                                <span>{item.name || "Item"}</span><span>{item.build_no || "1.2"}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        );
    }
}