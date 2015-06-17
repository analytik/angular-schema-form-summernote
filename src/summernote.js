(function (angular) {
  'use strict';

  angular
      .module('schemaForm')
      .config(configure);

  // @ngInject
  function configure(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

    schemaFormDecoratorsProvider.addMapping(
        'bootstrapDecorator',
        'summernote',
        'directives/decorators/bootstrap/summernote/summernote.html'
    );

    schemaFormDecoratorsProvider.createDirective('summernote', 'directives/decorators/bootstrap/summernote/summernote.html');

    var summernote = function (name, schema, options) {

      if (schema.type === 'string' && (schema.format === 'format-multiline')) {
        var f     = schemaFormProvider.stdFormObj(name, schema, options);
        f.key     = options.path;
        f.type    = 'summernote';

        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(summernote);

  }

})(angular);
