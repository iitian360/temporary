import express from 'express'
import jsonData from './temp.js';
const app=express();
const port=5000;
app.use(express.urlencoded({extended:false}));
app.set('views','./view')
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/geturl',(req,res)=>{
    res.render('view',{data:jsonData})
})

app.listen(port,()=>{
    console.log('server is running');
    
})
