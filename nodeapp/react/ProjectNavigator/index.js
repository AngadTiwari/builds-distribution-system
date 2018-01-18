import React from 'react';
import ProjectItem from './ProjectItem';
import './index.css';
import { connect } from 'react-redux';
import Reducer from '../Reducers';

class ProjNav extends React.Component {

    static defaultProps = {
        projectList: [{"title": "My Project"}, {"title": "Old Project"}],
        addPress: () => {console.log(`Add was pressed`)}
    }

    buttonPressed = () => {
        this.props.addPress()
    }

    render() {
        return (
            <div className="projectContent">
                <div className="projectSection">
                    <div className="projectTitle base">PROJECTS</div>
                    <button className="projectAdd base" onClick={this.buttonPressed}>+</button>
                </div>
                <div className="projectListSection">
                    {
                        this.props.projectList.map((item, idx) => {
                            return (
                                <ProjectItem key={idx} title={item.title} isSelected={item.title === "Old Project"}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    projectList: [...state.projects.list]
});

const mapDispatchToProps = (dispatch) => ({
    selectProject: id => {
        dispatch({id, type: Reducer.actions.PROJECTS.SELECT})
    },
    addPress: () => {
        dispatch({type: Reducer.actions.CENTERNAV.ADD_NAV})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjNav);