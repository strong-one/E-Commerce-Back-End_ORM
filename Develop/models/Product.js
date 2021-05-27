// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const Category = require("./Category");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // will not allow null values
      primaryKey: true, // setting as primary key
      autoIncrement: true, // the id will auto increment
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true, // making sure that the value is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // setting default value to 10
      validate: {
        isNumeric: true, // making sure that the value is a number
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      // Reference the `Category` model's `id`.
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false, // no timestamps in table
    freezeTableName: true, // table name will remain the same, will not pluralize
    underscored: true, // will add underscore to text with multiple words
    modelName: "product",
  }
);

module.exports = Product;
