Ext.onReady(function () {
    var view = new Ext.Viewport({
        layout: 'fit',
        items: [
            {
                xtype: 'form',
                formId: 'Ext Test Form',
                id: 'testForm',
                defaults: {
                    xtype: 'textfield',
                    height: 30,
                    width: 200,
                },
                items: [
                    {
                        fieldLabel: 'Name',
                        name: 'ext_text_field1'
                    },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field2'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field3'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field4'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field5'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field6'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field7'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field8'
                    // }, 
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field9'
                    // }, 
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field10'
                    // }
                    // , 
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field11'
                    // },
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field12'
                    // }, 
                    // {
                    //     fieldLabel: 'Name',
                    //     name: 'ext_text_field13'
                    // },
                    {
                        xtype: 'button',
                        text: 'submit',
                        width: 50,
                        handler: function () {
                            var form = Ext.getCmp('testForm').getForm();
                            form.url='http://localhost/piwiktest';
                            form.method='POST';
                            form.submit({
                                success: function (form, action) {
                                   alert('success');
                                },
                                failure: function (form, action) {
                                      alert('fail');
                                }
                            });
                        }
                    }
                ]
            },
        ]
    })
});