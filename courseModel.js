module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return course
}