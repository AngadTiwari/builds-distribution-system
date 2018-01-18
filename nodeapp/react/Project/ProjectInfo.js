import React from 'react';
import ProjectList from './ProjectList';

import './index.scss';

export default class ProjectInfo extends React.Component {

    static defaultProps = {
        projectTitle: "Some Project",
        projectCoordinator: "Role",
        projectUser: "User Name",
        projectEmail: "User.Name@email.com",
    }

    render() {
        const { projectTitle, projectCoordinator, projectUser, projectEmail } = this.props;
        return (
            <div>
                <div className="projectHeader">
                    <p className="font_bold font_26">{projectTitle}</p>
                    <p className="font_normal font_16">{projectCoordinator}</p>
                    <p className="font_normal font_16">{projectUser}</p>
                    <p className="font_normal font_16">{projectEmail}</p>
                    <div className="projectButtons space_between_row">
                        <button className="project_edit_button corner_6 base">COLLABORATOR</button>
                        <button className="project_edit_button corner_6 base">SHARE</button>
                    </div>
                </div>
                <div className="projectBuild">
                    <ProjectList title="iOS Builds"/>
                    <ProjectList title="Android Builds"/>
                </div>
            </div>
        );
    }
}
