var express = require('express');
var app = express();

app.use(express.static(__dirname ));

var respForApiCall = {	
	'name' : 'FC Brasov'
	, 'description' : 'La înființare echipa brașoveană avea alb-albastru ca și culori oficiale ale clubului. Acestea au rămas culorile brașovenilor până în decembrie 1966. Schimbarea a venit în urma unui turneul al Echipei Olimpice de Fotbal a României în Uruguay. După un meci cu Peñarol Csaba Gyorffy, legitimat la brașoveni, a primit de la căpitanul Alberto Spencer tricoul cu care acesta jucase. Gyorffy a fost fascinat de combinația dungilor galben-negre și a decis ca la întoarcerea în țară să poarte la antrenamente tricoul primit. Decizia de a schimba culorile clubului a plecat de la Silviu Ploeșteanu, acesta considerând că în noile culori brașovenii se vor vedea mai bine pe teren. Din ianuarie 1967 echipa de sub Tâmpa are galben-negru ca și culori oficiale, amintind de echipa uruguayană Peñarol.[7]'
	, 'nrSuporters' : '122331' 
}

app.get('/api/:id', function(req, res){
  //res.send('this has the id: ' + req.params.id);
  res.send(JSON.stringify(respForApiCall));
});

app.listen(8080);
console.log('Running on 8080');