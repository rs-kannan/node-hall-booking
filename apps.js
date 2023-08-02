const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const PORT = process.env.PORT || 3006;
const app = express();
const mongo = require("mongoose");
const link = "mongodb+srv://kannansrinivasanrs:okHDNzOrUGfI7qPc@cluster0.qwwuhnb.mongodb.net/";

// Define MongoDB schema and model
const mentorSchema = new mongo.Schema({
  name: String,
});

const Mentor = mongo.model("Mentor", mentorSchema);

app.use(express.json());

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is Running on", PORT);
  }
});

mongo
  .connect(link)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => console.log(error));

app.get("/", async (req, res) => {
  try {
    const filename = await fs.writeFile(
      path.join(__dirname, "demo.txt"),
      "Gowtham"
    );
    const mentors = await Mentor.find({}); // Use the Mentor model to find data from the MongoDB collection
    res.status(200).send(mentors);
  } catch (error) {
    res.status(404).json({ error: "The file is not found" });
  }
});