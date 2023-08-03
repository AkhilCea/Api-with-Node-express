module.exports = (sequelize, DataTypes) => {
    const subscriptions = sequelize.define("subscriptions", {
        user.belongsToMany(course, { through: subscription });
        course.belongsToMany(user, { through: subscription });
    });
    return subscriptions
}
