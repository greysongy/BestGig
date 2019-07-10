module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1-100]
            }
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1-100]
            }
        }

        // company: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },

        // rating: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },

        // payment: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false
        // }
    })

    Users.associate = function(models) {
        Users.belongsTo(models.Reviews, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    return Users;
}