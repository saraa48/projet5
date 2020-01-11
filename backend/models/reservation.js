const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
    name:{type:String,required:true},
    date:{type:Number},
    phone:{type:Number},
    heure:{type:Number},
    table:{type:Number},
    email:{type:String},
    // reservationRestaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" }
}) 

module.exports = Reservation = mongoose.model('Reservation',ReservationSchema )