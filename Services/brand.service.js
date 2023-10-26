const Brand = require("../Models/brands")

exports.createBrandService = async(data)=>{
   const result = Brand.create(data)
   return result
 };

exports.getBrandService = async()=>{
   const result = Brand.find({})
   return result
 };
 
 
