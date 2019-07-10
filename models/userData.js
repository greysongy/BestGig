module.exports = function(sequelize, DataTypes) {
    var UserData = sequelize.define("userData", {
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

    UserData.associate = function(models) {
        UserData.belongsTo(models.Reviews, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    return UserData;
}