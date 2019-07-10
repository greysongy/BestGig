module.exports = function (sequalize, DataTypes) {
    var Reviews = sequalize.define("reviews", {
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 100]
            }
        },

        pay_per_hour: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1 - 100]
            }
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1 - 100]
            }
        }
    })
    return Reviews;
}