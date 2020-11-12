let db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({}).then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.json(err)
        })
    })

}