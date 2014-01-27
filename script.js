
$(document).ready(function () {
    var ViewModel = function () {

        this.cons_slider_1 = ko.observable(123);
       
    };

    ko.bindingHandlers.sliderValue = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            $(element).slider('setValue', value())
            $(element).on('slide', function (ev) {
                value(ev.value);
            });
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            $(element).slider('setValue', value());
        }
    };
    
    
    ko.applyBindings(new ViewModel(products));
    
});
