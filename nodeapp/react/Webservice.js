const Webservice = (()=> {
    let path = "https://builds.creatingwow.in:5050/api";

    function post(apiPath, request) {
        return fetch(path + apiPath, {
            method: "POST",
            body: JSON.stringify(request),
            headers: {"Authorization": "admin"}
        });
    }

    function get(apiPath) {
        return fetch(path + apiPath, {method: "GET", headers: {"Authorization": "admin"}});
    }

    return {
        profile: (user_id) => {
            return get(`/profile/${user_id}`);
        },
        projects: () => {
            return get('/projects');
        },
        addProject: (project) => {
            return post('/project', project);
        }
    }
})()

export default Webservice;