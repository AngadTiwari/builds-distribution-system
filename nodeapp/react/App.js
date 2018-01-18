import React, { Component } from 'react';
import './App.css';
import ProjectNavigator from './ProjectNavigator';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import ProjectAdd from './ProjectAdd';
import {connect} from 'react-redux';
import Reducer from './Reducers';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="projectBar">
            <ProjectNavigator />
        </div>
        <div className="projectItems">
            {
              this.props.centerScreen === Reducer.actions.CENTERNAV.ADD_NAV ? 
                <ProjectAdd />
                :
                <Project />
            }
        </div>
        <div className="projectDetail">
          <ProjectDetail />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  centerScreen: state.screens.mid_screen
})

export default connect(mapStateToProps)(App);
