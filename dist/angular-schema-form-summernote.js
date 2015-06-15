angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/summernote/summernote.html","<div class=\"content\"><labe ng-show=\"showTitle()\">{{ form.title }}</labe><summernote ng-show=\"form.key\" schema-validation=\"form\" config=\"form.options\" ng-model=\"$$value$$\"></summernote><span sf-message=\"form.description\" class=\"help-block\"></span></div>");}]);
(function (angular) {
  'use strict';

  angular
      .module('schemaForm')
      .config(configure);

 
  function configure(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

    schemaFormDecoratorsProvider.addMapping(
        'bootstrapDecorator',
        'summernote',
        'directives/decorators/bootstrap/summernote/summernote.html'
    );

    var summernote = function (name, schema, options) {
      var lineHeight         = 36;
      var defaultVisibleRows = 3;

      if (schema.type === 'string' && (schema.format === 'format-multiline')) {
        var f     = schemaFormProvider.stdFormObj(name, schema, options);
        f.key     = options.path;
        f.type    = 'summernote';
        f.options = {
          height: (schema.visibleRows || defaultVisibleRows) * lineHeight
        };

        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(summernote);

  }

})(angular);
