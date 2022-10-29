const {Model, DataTypes, Sequelize} = require("sequelize");
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: false,
                len: [1, 30]
            }
        },

        // Character type
        characterType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },

        // Character Attributes
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 3,
                max: 20,
                isNumeric: true
            }
        },

        // AC
        ac: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 25,
                isNumeric: true
            }
        },

        // HP
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                isNumeric: true
            }
        },

        // AC Bonus
        acBonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                isNumeric: true
            }
        },

        // HP Bonus
        hpBonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                isNumeric: true
            }
        },

        // Level
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                isNumeric: true
            }
        },

        // XP
        xp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                isNumeric: true
            }
        },

        // NFNL
        nfnl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },

        // TODO: Define arrays for storing armor, weapons, money, and items

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