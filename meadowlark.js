var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({'defaultLayout':'main'});

var fortunes = [
    "Conquer your fears or they will conquer you.", "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'))

app.get('/home',function(req,res){
    res.render('home',{fortune:fortunes});
})

app.use(function(req,res,next){
    res.status(404);
    res.render('404');
})

app.listen(app.get('port'), function(){
    console.log('start')
})

