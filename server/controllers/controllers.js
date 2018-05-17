// Require Mongoose
const mongoose = require('mongoose');

// Require Author Model
var Product = require('./../models/models');

module.exports = {
    allProduct: (req, res)=>{
        Product.find({}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    createProduct: (req, res)=>{
        Product.create(req.body, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            } 
        });
    },
    grabProduct: (req, res)=>{
        Product.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    updateProduct: (req, res)=>{
        Product.findOneAndUpdate({_id: req.params.id}, {'$set': req.body }, {runValidators: true}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }         
        });
    },
    deleteProduct: (req, res)=>{
        Product.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json({'Success': 'Product Deleted'});
            } 
        });
    } 
};