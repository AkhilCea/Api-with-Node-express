module.exports = (sequelize, DataTypes) => {
const user = sequelize.define("user", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return user
}