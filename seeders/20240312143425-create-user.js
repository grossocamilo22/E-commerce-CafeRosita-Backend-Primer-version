"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync();

    return await queryInterface.bulkInsert("users", [
      {
        name: "Maria Alejandra",
        surname: "Patiño Hernandez",
        email: "host@gmail.com",
        password: bcrypt.hashSync("123456789",salt),
        phoneNumber: 3215425452,
        adress: "El poblado",
        idRole: 1,
      },
      {
        name: "Juan Carlos",
        surname: "Perez Rojas",
        email: "host2i@gmail.com",
        password: bcrypt.hashSync("123456789",salt),
        phoneNumber: 3126525672,
        adress: "cuatro esquinas",
        idRole: 2,
      },
      {
        name: "Carlos Arturo",
        surname: "Agudelo Torres",
        email: "host3@gmail.com",
        password: bcrypt.hashSync("123456789",salt),
        phoneNumber: 3176252532,
        adress: "Aguada",
        idRole: 3,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
