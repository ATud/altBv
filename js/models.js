//Modelele aplicatiei
var TeamModel = Backbone.Model.extend({
});

var DetailModel = Backbone.Model.extend({
	defaults: {
		aProperty: ''
	}
	// , initialize: function(){
	// 	this.set('aProperty',"A property");
	// }
});

//colectia care fac referinta la  modelele noastre
var TeamsCollection = Backbone.Collection.extend({
  model: TeamModel
});

var DetailsCollection = Backbone.Collection.extend({
	url: function(){
		return 'https://api.github.com/users/'+ this.id + '/repos'
	}

	,changeUrl : function(id){
		this.url = 'https://api.github.com/users/'+ id + '/repos';
		this.fetch(); 	
	}
	, initialize: function(options){
		this.id = options.id;
		this.fetch();
		this.on('change:id',function(){
			this.changeUrl();
		})
	}
	, model: DetailModel
});

//
var NodeModel = Backbone.Model.extend({
	defaults: {
		id: ''
		, description: ''
		, nrSuporters: ''
	}

	, url: function(){
		return '/api/22';
	}

	,initialize: function(){
		this.set('id',1);
		this.fetch();
	}
});