MyApp = new Backbone.Marionette.Application();
 
// --- Aplicatia Globala
MyApp.addRegions({
  tableRegion: "#content"
  , detailRegion: "#details"
  , nodeRegion: "#node"
});


// ---- Backbone Event Agregator ----- 
MyApp.vent.on('change:api', function(newId){
	MyApp.detailRegion.currentView.collection.changeUrl(newId);
})

MyApp.vent.on("routing:started", function(){
	if( ! Backbone.History.started) Backbone.history.start();
});


$(document).ready(function(){
    MyApp.start();
});