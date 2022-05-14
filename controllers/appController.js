const Health = require('./../Models/appmodel')


exports.getallvalue = async (req,res) => {
    try {
        const healthvalues = await Health.find({},"-__v")
        res.status(200)
        res.json({
            "status":"success",
            "body": healthvalues
        })
    }
    catch(err) {
        res.status(400).json({
            err: err
        })
    }
    
}

exports.addvalue = async (req,res) => {
    try {
        const savedHealth = Health.create(req.body)
        res.status(201)
        res.json({
            "status":"success",
            "body": savedHealth
        })
    }
    catch(err) {
        res.status(400).json({
            err: err
        })
    }
    
}

exports.removevalue = async (req,res) => {
    try {
        Health.findByIdAndDelete({_id: req.params.id})
        res.status(204).json({
            "status":"success"
        }
        )
    } catch (err) {

    }
}