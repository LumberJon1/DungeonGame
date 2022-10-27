const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

// Create player model
class Player extends Model {}

// Define columns and initialize with configuration options
Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // TODO: Fill in the rest of the properties that a Player class would have

        // Name

        // Strength

        // Intelligence

        // Wisdom

        // Dexterity

        // Constitution

        // Charisma

        // AC

        // HP

        // AC Bonus

        // HP Bonus

        // Level

        // XP

        // NFNL

        // Armor

        // Weapons

        // Money

        // Stats

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "player"
    }
);

module.exports = Player;