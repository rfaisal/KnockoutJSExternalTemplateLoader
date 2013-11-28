var KOExternalTemplateLoader=function(_template_div,_url,_viewmodel){
$('#'+_template_div).load(_url, {}, function() {
    ko.applyBindings(_viewmodel);
});
}
