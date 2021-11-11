const cars = [
  { name: "Civic" },
  { name: "Accord" },
  { name: "Prelude" },
  { name: "S2000" },
];

exports.seed = function (knex, Promise) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert(cars);
    });
};

exports.cars = cars;
