require("dotenv").config({ quiet: true });

const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;

// The MongoDB Atlas connection string is loaded from .env so it stays private.
if (mongoUri && !mongoUri.includes("<")) {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Person schema built with basic Mongoose types required by the checkpoint.
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

// Create one Person document, then save it with the Node callback convention.
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["pizza", "rice", "beans"],
  });

  person.save(function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Seed the database with several Person documents at once.
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Find every person whose name matches the provided search value.
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Return the first person whose favoriteFoods array contains the given food.
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Look up one person directly by the MongoDB _id value.
const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Classic update flow: find a document, edit it, then save the edited document.
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, function (err, person) {
    if (err) return done(err);
    if (!person) return done(null, null);

    person.favoriteFoods.push(foodToAdd);

    person.save(function (saveErr, updatedPerson) {
      if (saveErr) return done(saveErr);
      return done(null, updatedPerson);
    });
  });
};

// Update one matching document by name and return the updated version.
const findAndUpdate = (personName, done) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    function (err, data) {
      if (err) return done(err);
      return done(null, data);
    }
  );
};

// Remove one person by id and return the deleted document.
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Delete every document named Mary and return MongoDB's operation result.
const removeManyPeople = (done) => {
  Person.remove({ name: "Mary" }, function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// Chain query helpers: filter burrito fans, sort by name, limit, and hide age.
const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec(function (err, data) {
      if (err) return done(err);
      return done(null, data);
    });
};

module.exports = {
  Person,
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};
