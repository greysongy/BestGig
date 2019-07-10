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
    })

    // Users.associate = function(models) {
    //     Users.belongsTo(models.Reviews, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }
    
    return Users;
}