import React from 'react';
import './index.css';
import DetailSection from './DetailSection';
import {connect} from 'react-redux';

import Reducer from '../Reducers';
class ProjectDetail extends React.Component {

    render() {
        return (
            <div className="project_detail_body">
                <div className="user_header">
                    <div className="user_dropdown">
                        <div className="user_image_container">

                        </div>
                        <div className="user_name">
                            &lt;User Name&gt;
                        </div>
                        <button className="dropdown_arrow"/>
                    </div>
                </div>
                {/* Project Detail Section Starts*/}
                {this.navigator()}
            </div>
        );
    }

    navigator() {
        var view  = null
        switch (this.props.rightScreen) {
            case Reducer.actions.LEFTNAV.BUILD_DETAIL:
                view = <DetailSection />
                break;
            case Reducer.actions.LEFTNAV.SHARE:
            case Reducer.actions.LEFTNAV.SHARE_SINGLE:
                break;
            default:
                view = <div className="no_project_selected">No Project Selected</div>
        }
        return view;
    }
}

const mapStateToProps = (state) => ({
    rightScreen: state.screens.right_screen
})

export default connect(mapStateToProps)(ProjectDetail);