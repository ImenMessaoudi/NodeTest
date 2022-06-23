var express = require('express');
var router = express.Router();
var produit=require('../model/produit')


router.get('/',(req, res, next) => {
    produit.find((error, result) => {
        res.render('home.twig',{result})
    })
})
router.post('/add',(req, res, next) => {
    var newProduit=new produit({
        libelle:req.body.libelle,
        prix:req.body.prix,
        quantite:req.body.quantite
    })
    newProduit.save()
    res.redirect('/home/')
})
router.get('/details/:id',(req, res, next) => {
    produit.findById({_id:req.params.id},(err,result)=>{
        if (err)throw err
        res.render('details.twig',{result})
    })
})
router.get('/delete/:id',(req, res, next) => {
    produit.findOneAndRemove({_d:req.params.id},(err)=>{
        if (err)throw err

    })
    res.redirect('/home/')
})
router.get('/update/:id',(req, res, next) => {
    produit.findById({_id:req.params.id},(err,result)=>{
        if (err)throw err
        res.render('update.twig',{result})
    })
})
router.post('/update',(req, res, next) => {
    produit.findById({_id:req.body.secretId},(err,result)=>{
        if (err)throw err
        result.libelle=req.body.libelle
        result.prix=req.body.prix
        result.quantite=req.body.quantite
        result.save()
    })
    res.redirect('/home/')
})


module.exports = router;
