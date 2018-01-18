import { combineReducers } from 'redux';

const Reducer = (() => {
    const actions = {
        PROJECTS: {
            "ADD_LIST": "add_projects",
            "SELECT": "select_project"
        },
        COLLABORATORS: {
            "ADD_LIST": "add_collaborators"
        },
        BUILDS: {
            "ADD_LIST": "add_builds",
            "SELECT": "select_build",
            "REMOVE": "remove_build",
            "REMOVE_ALL": "remove_all",
            "CLEAN": "clean"
        },
        CENTERNAV: {
            ADD_NAV: "add_screen",
            VIEW_NAV: "view_screen"
        },
        LEFTNAV: {
            SHARE: "share_screen",
            BUILD_DETAIL: "build_screen",
            SHARE_SINGLE: "share_single_screen"
        }
    };

    let prState = {
        list: [],
        selectedProject: {}
    };

    const projects = (state = prState, action) => {
        var list = [...state.list];
        var selectedProject = {...state.selectedProject};
        switch (action.type) {
            case actions.PROJECTS.ADD_LIST:
                if (Array.isArray(action.item)) {
                    list.concat(action.item)
                }
                else {
                    list.push(action.item)
                }
                break;
            case actions.PROJECTS.SELECT:
                {
                    let ids = list.map(it => it["_id"]);
                    var index = ids.indexOf(action.id);
                    if (index !== -1) {
                        selectedProject = Object.assign({...list[index]}, (action.details ? {...action.details} : {}));
                    }
                }
                break;
            default:
        }
        return {
            list,
            selectedProject
        }
    }

    let clState = []

    const collaborators = (state = clState, action) => {
        var list = [...state];
        switch (action.type) {
            case actions.COLLABORATORS.ADD_LIST:
                if (Array.isArray(action.item)) {
                    list.concat(action.item)
                }
                else {
                    list.push(action.item)
                }
                break;
            default:
        }
        return [...list];
    }

    let bdState = {
        list: [],
        selectedBuilds: []
    };

    const builds = (state = bdState, action) => {
        var list = [...state.list];
        var selectedBuilds = [...state.selectedBuilds];
        switch (action.type) {
            case actions.BUILDS.ADD_LIST:
                if (Array.isArray(action.item)) {
                    list.concat(action.item)
                }
                else {
                    list.push(action.item)
                }
                break;
            case actions.BUILDS.SELECT:
                {
                    let ids = list.map(it => it["_id"]);
                    let selids = selectedBuilds.map(it => it["_id"]);
                    let index = ids.indexOf(action.id);
                    var selindex = selids.indexOf(action.id);
                    if (index !== -1 && selindex === -1) {
                        selectedBuilds.push(list[index]);
                    }
                }
                break;
            case actions.BUILDS.REMOVE:
                {
                    let ids = selectedBuilds.map(it => it["_id"]);
                    let index = ids.indexOf(action.id);
                    if (index !== -1) {
                        selectedBuilds.splice(index, 1);
                    }
                }
                break;
            case actions.BUILDS.REMOVE_ALL:
                selectedBuilds = [];
                break;
            case actions.BUILDS.CLEAN:
                list = [];
                selectedBuilds = [];
                break;
            default:
        }
        return {
            list,
            selectedBuilds
        }
    }

    let scrState = {
        mid_screen: "None",
        right_screen: "None"
    };

    const screens = (state = scrState, action) => {
        var mid_screen = state.mid_screen;
        var right_screen = state.right_screen;

        switch(action.type) {
            case actions.CENTERNAV.ADD_NAV:
            case actions.CENTERNAV.VIEW_NAV:
                mid_screen = action.type;
                break;
            case actions.LEFTNAV.BUILD_DETAIL:
            case actions.LEFTNAV.SHARE:
            case actions.LEFTNAV.SHARE_SINGLE:
                right_screen = action.type;
                break;
            default:
        }

        return {
            mid_screen,
            right_screen
        }
    }

    return {
        actions,
        reducer: combineReducers({
            projects, builds, collaborators, screens
        })
    }
})()

export default Reducer;