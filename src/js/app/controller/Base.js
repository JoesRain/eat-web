define(['handlebarsHelper'], function (Handlebars) {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },
        setComponent: function (component) {
            this.component = component;
        },
        render: function (template) {
            $('#loadPageView').html(this.component);
            $('#loadPageView').html(Handlebars.compile($(template).html())(this.model));
        }
    };

    return controllerBase;
});
