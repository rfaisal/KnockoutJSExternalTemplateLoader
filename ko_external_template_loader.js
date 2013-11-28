/*var KOExternalTemplateLoader=function(_template_div,_url,_viewmodel){
$('#'+_template_div).load(_url, {}, function() {
    ko.applyBindings(_viewmodel);
});
}*/

var KOExternalTemplateLoader=function(_template_div,_url,_viewmodel){
$('#'+_template_div).load('/echo/html/', {
    html: '<h3 data-bind="text: name"></h3><p>Credits: <span data-bind="text: credits"></span></p>'}, function() {
    ko.applyBindings(_viewmodel);
});
}
