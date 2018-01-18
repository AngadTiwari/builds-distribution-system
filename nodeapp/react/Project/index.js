import React from 'react';
import ProjectInfo from './ProjectInfo';
import './index.scss';

import { connect } from 'react-redux';
import Reducer from '../Reducers';

class Project extends React.Component {

    static defaultProps = {
        projectDetail: null
    };

    render() {
        const {projectDetail} = this.props;
        return (
            <div className={`detailContainer ${!projectDetail ? "display-flex-centered" : "padded"}`}>
                {
                    !projectDetail ?
                        <div className="no_detail">
                            No Project Selected
                        </div>
                        :
                        <ProjectInfo />
                }
            </div>
        );
    }
}

const matchStateToProps = (state) => ({
    projectDetail: state.projects.selectedProject
})

export default connect(matchStateToProps)(Project)