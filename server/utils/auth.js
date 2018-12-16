module.exports = {

    auth: (req, res, next) => {

        if (! req.user) {
            res.status(401);
            res.json('You are not logged in.');
        }

        next();

    },

    guest: (req, res, next) => {

        if (req.user) {
            res.status(401);
            res.json('You are already logged in.');
        }

        next();

    },
};
