/**
 * Created by Dev on 11/14/2015.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        id: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        country: DataTypes.STRING,
        loc: DataTypes.ARRAY(Sequelize.FLOAT),
        description: DataTypes.STRING,
        website: DataTypes.STRING,
        image_url: DataTypes.STRING,
        images: DataTypes.ARRAY(Sequelize.STRING),
        accepts: DataTypes.ARRAY(Sequelize.STRING),
        tip_types: DataTypes.ARRAY(Sequelize.STRING),
        hours: DataTypes.ARRAY(Sequelize.STRING),
        tz: DataTypes.STRING,
        takeout: DataTypes.BOOLEAN,
        delivery: DataTypes.BOOLEAN,
        cuisine: DataTypes.BOOLEAN,
        support_phone: DataTypes.STRING,
        support_email: DataTypes.STRING,
        support_url: DataTypes.STRING,

    }, {
        classMethods: {
            associate: function(models) {
                Restaurant.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Restaurant;
};