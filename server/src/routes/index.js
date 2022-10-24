const { GetUser, CreateUser, UpdateUser, DeleteUser } = require("../controller");


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to the homepage!");
    });

    app.get('/404', (req, res) => {
        res.status(404).send({"msg": "Route not found"});
    });

    app.get("/api/user", async (req, res) => {
        const userData = await GetUser(req.body.id);

        res.status(200).send(userData);
    });

    app.get("/*", (req, res) => {
        res.redirect('/404');
    });

    app.post("/api/user", async (req, res) => {
        const user = await CreateUser({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });

        res.status(201).send({ user });
    });

    app.patch("/api/user", async (req, res) => {
        const id = req.body.id;
        const update = {}

        if (req.body.email) {
            update.email = req.body.email;
        }

        if (req.body.firstName) {
            update.firstName = req.body.firstName;
        }

        if (req.body.lastName) {
            update.lastName = req.body.lastName;
        }
        
        const user = await UpdateUser(id, update);

        res.status(200).send(user);
    });

    app.delete("/api/user", async (req, res) => {
        await DeleteUser(req.body.id);

        res.status(204);
    });
}