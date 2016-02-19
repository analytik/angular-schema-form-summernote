Angular Schema Form Summernote Add-on
======================================

This is an add-on for [Angular Schema Form](https://github.com/Textalk/angular-schema-form/).


Installation
------------

**To be done**

The easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install --save angular-schema-form-summernote
```

After including other for ASF files, Summernote and Angular-Summernote, include `bower_components\angular-schema-form-summernote\dist\angular-schema-form-summernote.js` or `angular-schema-form-summernote.min.js`.

Usage
-----

In your controller, do something like this:
```javascript
function BlogPostEditCtrl() {
    var vm = this;
    var summernoteOptions = {height: '500px'};
    vm.schema = {
        type: "object", properties: {
            title: {
                type: "object",
                title: "Title",
                properties: {
                    en: { type: "string", minLength: 4, title: "Name (EN)"},
                    fi: { type: "string", minLength: 4, title: "Name (FI)"},
                }
            },
            body: {
                type: "object",
                title: "Body",
                properties: {
                    en: {
                        type: "string", format: "format-multiline", 
                        summernoteOptions: summernoteOptions
                    },
                    fi: {
                        type: "string", format: "format-multiline", 
                        summernoteOptions: summernoteOptions
                    },
                }
            }
        }
    };
    vm.form = [
        {
            type: "section",
            htmlClass: 'row',
            items: [
            {
                type: "fieldset",
                title: "English",
                htmlClass: 'col-lg-6',
                "items": [
                    {key: "title.en", feedback: false},
                    {key: "body.en", "type": "summernote",
                        "placeholder": "Write content", feedback: false}
                ]
            },
            {
                type: "tabs",
                htmlClass: 'col-lg-6',
                fieldHtmlClass: 'talltabs',
                tabs: [
                {
                    title: "Finnish",
                    items: [
                        {key: "title.fi", feedback: false},
                        {key: "body.fi", "type": "summernote",
                        "placeholder": "Write content", feedback: false}
                    ]
                }]
            }
        },
        {
            type: "section",
            htmlClass: 'row',
            items:[{
                type: "submit",
                title: "Save",
                "htmlClass": 'col-md-2',
                fieldHtmlClass: 'btn-action'
            }]
        }
    ];
}
```


