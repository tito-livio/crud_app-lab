import Userdb from '../model/model.js';

//Create & save new user 
export const createUser = (req, res) => {
    //Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    //Create new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    //save user into database
    user
        .save(user)
        .then(data => {
            res.redirect('/api/car');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        })
}
export const findUser = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id).then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "User not found with id: " + id
                });
            } else {
                res.send(data);
            }
        }).catch((err) => {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving user." });
        });
    } else {

        Userdb.find()
            .then((id) => {
                res.send(id)
            })
            .catch(err => {
                res.status(500).send({
                    message: "User not found with id: " + id
                });
            });
    }
}
export const updateUser = (req, res) => {
    //Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    const id = req.params.id;
    // Find user and update it with the request body
    Userdb.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update the user with this ${id}` });
            }
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the user."
            });
        })

}
export const deleteUser = (req, res) => {
    //Validate request 
    let id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete the user with this ${id}`
                });
            } else {
                res.send({ message: `User id: ${id} deleted successfully!` });
            };
        }).catch(err => {
            res.status(500).send({
                message: "Some error occurred while deleting the user."
            });
        });

}