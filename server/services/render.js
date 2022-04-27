import axios from "axios";

export const homeRoutes = (req, res) => {
    //making a get request to /api/user
    axios.get('http://localhost:4000/api/user')
        .then((response) => {
            res.render('index', { user: response.data });
        })
        .catch(error => {
            res.send(error)
        });
}

export const add_user = (req, res) => {
    res.render('add_user');
}

export const update_user = (req, res) => {
    axios.get('http://localhost:4000/api/user/', { params: { id: req.query.id } })
        .then(userdata => {
            res.render("update_user", { user: userdata.data })
        })
        .catch(error => {
            res.send(error);
        })
}
export const delete_user = (req, res) => {

}