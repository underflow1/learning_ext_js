Ext.onReady(

    function(){
        var newdVType = {
            newd: function(val, field){
                var newdRegex = /^\d{4}\s\d{6}$/;
                return newdRegex.test(val);
            },
            newdText: 'Серия и номер паспорта должны содержать только цифры и между ними должен стоять пробел!',
            newdMask: /[\d\s]/
        };

        Ext.apply(Ext.form.field.VTypes, newdVType);

        Ext.define('Phones', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'phonenumber', type: 'string'}
            ],
            idProperty: 'phonenumber'
        });

        var genres = new Ext.data.Store({
            model:"Phones",
            proxy:{

                type: 'ajax',
                url: '/app/getdata.php',
                reader: {
                type: 'json',
                    root: 'data'
                }
            },
            autoLoad: true
        });


        var movie_form = new Ext.FormPanel({
            url:"movie_form-submit.php",
            renderTo:document.body,
            frame:true,
            title: "информационная форма",
            width:250,
            items: [{
                xtype: "combo",
                name:"genre",
                fieldLabel:"genre",
                mode:"local",
                store:genres,
                displayField:"phonenumber",
                width:240
            },{
                xtype:"textfield",
                fieldLabel: "passport",
                name:"passport",
                allowBlank: false,
                vtype: "newd"
            },{
                xtype:"datefield",
                fieldLabel: "date",
                name:"date",
                disabledDays:[1,2,3],
                width:240
            },{
                xtype:"textfield",
                fieldLabel: "reliz",
                name:"reliz"
            },{
                xtype: "checkbox",
                fieldLabel: "bad film",
                name:"bad_film"
            },{
                xtype: "radiogroup",
                fieldLabel: 'radio buttons',
                items: [
                    { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
                    { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true},
                    { boxLabel: 'Item 3', name: 'rb', inputValue: '3' }]
            }]
        });
    });

