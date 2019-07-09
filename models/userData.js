module.exports = function(sequelize, DataTypes) {
    var userData = sequelize.define("Post", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },

        payment: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
    
    return userData;
}