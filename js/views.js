//---------VIEWS----------
var TeamView = Backbone.Marionette.ItemView.extend({
	template: "#team-template",

	tagName: 'tr',

	className: 'team',

	events: {
		'click img': 'showDetails'
	},

	showDetails: function(){
		MyApp.vent.trigger('change:api',this.model.id);
	}
});

var TeamsView = Backbone.Marionette.CompositeView.extend({
	tagName: "table",
	
	id: "teams",
	
	className: "table table-striped table-hover",
	
	template: "#teams-template",
	
	itemView: TeamView,

	initialize: function(){
		this.listenTo(this.collection, "sort", this.renderCollection);
	},

	appendHtml: function(collectionView, itemView){
		collectionView.$("tbody").append(itemView.el);
	},

});

//---View-uri care se updateaza din colectie externa------- 

var DetailView = Backbone.Marionette.ItemView.extend({
  template: "#detail-template",
  tagName: 'tr',
  className: 'team'
  , templateHelpers: {
	    getDescription: function () {
	        return this.description ? this.description : 'noDescription'  ;
	    }
	}
});

var AllDetailsView = Backbone.Marionette.CompositeView.extend({
	tagName: "table",
	id: "all-details",
	className: "table table-striped table-hover",
	template: "#all-details-template",
	itemView: DetailView

	, appendHtml: function(collectionView, itemView){
		collectionView.$("tbody").append(itemView.el);
	}
});
