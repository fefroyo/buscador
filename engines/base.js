var apiUrl = "http://go.infinise.com/api/2.5/";


/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google_fina2.png",
	places: {
		'Buscar'    : ["http://www.google.com/search?q=%query%&hl=es",		apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Gmail' : ["https://mail.google.com/mail/?shva=1#inbox"],
		'Maps'   : ["http://maps.google.com/maps?q=%query%",			false],
		'Feedly'   : ["http://feedly.com/i/my"],
		'Imagenes' : ["http://images.google.com/images?q=%query%&hl=es",	apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		//'Symbaloo'   : ["http://www.symbaloo.com/home/mix/13ePGX947G"],
		'imagen PNG' : ["https://www.pngwing.com/es/search?q=%query%"],
		'Fonts'   : ["https://fonts.google.com/?query=%query"],
		'Fonts2s'   : ["http://font2s.com/search.html?q=%query"],
		//'Fotos'   : ["http://picasaweb.google.com/home?hl=es&tab=iq"],
		'Pato'   : ["https://duckduckgo.com/?q=%query%&ia=about"]
	}
};


/*	FACEBOOK
	----------------------------------------------------- */
	
eng.facebook = {
	pageTitle: "Facebook",
	logo: "facebu_fina2.png",
	places: {
		'Ir a' : ["http://es-es.facebook.com/index.php?lh=ebb5ff86e7c6ee4c2f6b0fe5f47de350&eu=UO0bOJfQL9SZXBO6ew-BTg"],
		'Buscar en facebook'        : ["http://es.facebook.com/search.php?q=%query%&type=users"],
	},
	languages: {
		'ES': 'es',
		'EN': 'en',
		'FR': 'fr'
	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube_fina2.png",
	places: {
		'Buscar Videos' : ["http://www.youtube.com/results?search_query=%query%", apiUrl+"?eng=youtube&timestamp=%time%&q=%query%"],
		'Buscar Trailers' : ["http://www.trailersyestrenos.es/search?q=%query%"],		
	},
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter_fina2.png",
	places: {
		'Buscar en Twitter' : ["http://twitter.com/search?q=%query%", false]
	}
};

/*	SERIES
	----------------------------------------------------- */

eng.thetvdb = {
	pageTitle: "thetvdb",
	logo: "thetvdb_fina.png",
	places: {
		'Buscar series' : ["http://thetvdb.com/?string=%query%&searchseriesid=&tab=listseries&function=Search"],
		'Busca PeliTorrent' : ["http://www.mejortorrent.com/secciones.php?sec=buscador&valor=%query%"],
		'Serie Pokemon' : ["http://www.pokemonlaserielatino.com/search?q=%query%"]
	}
};

/*	OTROS
	----------------------------------------------------- */

eng.nube = {
	pageTitle: "varios",
	logo: "variado.png",
	places: {
		'texto Biblia' : ["http://wol.jw.org/es/wol/l/r4/lp-s?q=%query%"],
		'imagenes PNG' : ["https://www.pngwing.com/es/search?q=%query%"]
	}
};

/*	Apps varias
	----------------------------------------------------- */

eng.applis = {
	pageTitle: "aplicasiones",
	logo: "apps.png",
	places: {
		'IntercambiosVirtuales' : ["http://muack.net/?web=IV&q=%query%"],
		'filehippo-mac' : ["http://filehippo.com/es/mac/search?q=%query%"],
		'filehippo' : ["http://filehippo.com/es/search?q=%query%"],
		'fiuxy' : ["https://www.fiuxy.co/buscador.php?q=%query%"],
	},
	languages: {
		'ES': 'es'
	}

};

/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia_fina2.png",
	places: {
		'Ir a' : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&go=Go",				apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
		'Buscar'        : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search",	apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
	},
	languages: {
		'ES': 'es',
		'CA': 'ca',
		'EN': 'en',
		'FR': 'fr'
	}
};

/*	Programacion
	----------------------------------------------------- */
	
eng.procodes = {
	pageTitle: "Programación",
	logo: "codes.png",
	places: {
		'cdnjs' : ["https://cdnjs.com/"],
		'codepen.io' : ["http://codepen.io/fefro/pens/public/"],
		'jsfiddle' : ["https://jsfiddle.net/"],
		'plunker' : ["https://plnkr.co/edit/?p=catalogue"],
		'jsbin' : ["https://jsbin.com/?html,output"],
		'phpfiddle' : ["http://phpfiddle.org/lite/"],
		'pastebin' : ["https://pastebin.com/"],
	},
	languages: {
		'ES': 'es'
	}
};
