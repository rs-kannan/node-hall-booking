const mongo = require("mongoose");

const RoomSchema = mongo.Schema({
  Room_ID: {
    type: String,
    required: [true, "plese enter the product name"],
  },
  No_seats: {
    type: String,
    required: [true, "plese enter the email name"],
  },
  amenities: {
    type: String,
    required: [true, "plese enter the phone_no name"],
  },
  price: {
    type: String,
    required: [true, "plese enter the course name"],
  },
});

const Rooms = mongo.model("Rooms", RoomSchema);

module.exports = Rooms;