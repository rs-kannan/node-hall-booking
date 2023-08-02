const mongo = require("mongoose");

const bookingSchema = mongo.Schema({
  BookingId: {
    type: String,
    required: [true, "plese enter the product name"],
  },
  customerName: {
    type: String,
    required: [true, "plese enter the email name"],
  },
  Date: {
    type: String,
    required: [true, "plese enter the phone_no name"],
  },
  StartTime: {
    type: String,
    required: [true, "plese enter the course name"],
  },
  EndTime: {
    type: String,
    required: [true, "plese enter the course name"],
  },
  Room_ID: {
    type: String,
    required: [true, "plese enter the course name"],
  },
});

const Booking = mongo.model("Booking", bookingSchema);

module.exports = Booking;