function cambioTexto(message, obj) {
        if (message=='ingles'){
          alert(message);
        }
        
        if (message=='espanyol'){
          alert(message);
        }
        
        alert($(this).parent().html());
        
  /*      var a = $(obj).parent();
        var b = $(a).parent();
        $.each(a[0], function(key,value){
          if (key=='id'){
            alert(value);
          }
        });

        $.each(b[0], function(key,value){
          if (key=='id'){
            alert(value);
          }
        });
        alert($(b).attr('id'));
        alert($(b).innerHTML);*/
      }