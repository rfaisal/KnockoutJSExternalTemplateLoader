/**
 * A simple library to load knockout templates asynchronously and apply viewmodel to the templates.
 */
if (KOExternalTemplateLoader === undefined) {
	var KOExternalTemplateLoader = {}
}
/**
 * Change this variable to override the default option.
 */
KOExternalTemplateLoader.config={};
/**
 * Place to append the templates, e.g., if you want to inject the templates to a div, change this to '#divId'
 */
KOExternalTemplateLoader.config.templateHolder='body';
/**
 * Loads a template, when load is completed calls the _callback with the template html.
 */
KOExternalTemplateLoader.load=function(_templateUrl,_callback){
	$.get(_templateUrl, function(_t) {
		_callback(_t);
	});
};
/**
 * Loads a template, when load is completed, append the html to config.templateHolder and calls the _callback with the template html (if it is defined).
 */
KOExternalTemplateLoader.loadAndInject=function(_templateUrl,_callback){
	KOExternalTemplateLoader.load(_templateUrl,function(_t){
		$(KOExternalTemplateLoader.config.templateHolder).append(_t);
		if(_callback!==undefined){
			_callback(_t);
		}
	});
};
/**
 * Loads a template, when load is completed, append the html to config.templateHolder, apply the knockout binding.
 * If _viewModelScopeId is defined, apply the viewmodel to that id instead of this.
 */
KOExternalTemplateLoader.loadInjectAndApply=function(_templateUrl,_viewModel,_viewModelScopeId){
	KOExternalTemplateLoader.loadAndInject(_templateUrl,function(_t){
		if(_viewModelScopeId!==undefined){
			ko.applyBindings(_viewModel,$('#'+_viewModelScopeId)[0]);
		}
		else{
			ko.applyBindings(_viewModel);
		}
	});
};
