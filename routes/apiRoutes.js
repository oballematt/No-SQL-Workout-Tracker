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

    app.put("/api/workouts:id", function({body, params}, res){
        db.Workout.findByIdAndUpdate(
            params.id,
            {$push: {exercies: body}},
            {new: true}
        )
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.json(err)
        })
    })

    app.get("api/workouts/range", function (req, res){
        db.Workout.find({}).then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.json(err)
        })
    })

}