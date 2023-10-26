const Category = require("../Models/categories")

exports.createCategoryService = async(data)=>{
   const result = await Category.create(data);
   return result
}
;
exports.getCategoryService = async()=>{
   const result = await Category.find({});
   return result
}
