'use strict';
module.exports = (sequelize, DataTypes) => {
  const tour = sequelize.define('tour', {
    city: DataTypes.STRING,
    preferences: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  sequelize.sync();

  return tour;
};
