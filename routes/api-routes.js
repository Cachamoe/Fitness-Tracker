const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).then(results => {
        res.json(results);
    });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(results => {
        res.json(results);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(results => {
        res.json(results);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body,
            }
        }).then(results => {
            res.json(results);
        });
});

module.exports = router;
