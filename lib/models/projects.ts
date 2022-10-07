import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database"

const Project = db.sequelize.define("oauth_clients", {
  client_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  client_secret: {
    type: DataTypes.STRING,
    allowNull: false
  },
  redirect_uri: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grant_types: {
    type: DataTypes.STRING,
    allowNull: true
  },
  scope: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
});

export default Project