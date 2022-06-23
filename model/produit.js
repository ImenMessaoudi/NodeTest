var mongoose=require('mongoose')
var shema=mongoose.Schema
var produit=new shema({
    libelle:String,
    prix:Number,
    quantite:Number
})
module.exports=mongoose.model('produit',produit)
