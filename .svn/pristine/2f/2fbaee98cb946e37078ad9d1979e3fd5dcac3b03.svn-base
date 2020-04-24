const bcrypt = require('bcrypt-nodejs');
const promisify = require('util').promisify

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        },
        dateOfBirth: {
            type: DataTypes.DATE
        },
        gender: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
        {
            tableName: 'user'
        })

    user.beforeCreate(async (user) => {
        const salt = await promisify(bcrypt.genSalt)(10);
        const hash = await promisify(bcrypt.hash)(user.password, salt, null);
        user.password = hash;
    });

    user.associate = function (models) {
        user.hasMany(models.tour, { as: 'Tours' })
    };

    sequelize.sync();

    return user
}


