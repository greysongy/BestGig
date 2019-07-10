module.exports = function(sequelize, DataTypes) {
    var Companies = sequelize.define("companies", {

        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1-50]
            }

        },

        average_rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1-10]
            }
        },

        average_pay_per_hour: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1-20]
            }
        },

        number_reviews: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1-20]
            }
        }
    })

    Companies.associate = function(models) {
        Companies.belongsTo(models.Reviews, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    return Companies;
}