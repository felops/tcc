module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Professor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {
    tableName: 'Professor'
  })
}
