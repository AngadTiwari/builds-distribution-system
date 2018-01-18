import React from 'react';
import { connect } from 'react-redux';
import Reducer from '../Reducers';
import './index.css';

class AddProject extends React.Component {

    close = () => {
        this.props.close();
    }

    render() {
        return (
            <div className="add_project">
                <button className="close" onClick={this.close}>╳</button>
                <h2>Add Project</h2>
                <form>
                    <label for="project_name">Project Name</label>
                    <input name="project_name" type="text"/>
                    <label for="ios_bundle_id">iOS Bundle Id</label>
                    <input name="ios_bundle_id" type="text"/>
                    <label for="android_bundle_id">Android Bundle Id</label>
                    <input name="android_bundle_id" type="text"/>
                    <input type="checkbox" name="type" />
                    <label for="type">Both</label>
                    <textarea name="description" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    close: () => {dispatch({type: Reducer.actions.CENTERNAV.VIEW_NAV})}
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);