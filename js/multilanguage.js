$(document).ready(function() {
  $('.texto_ingles').hide();
  $('.banderas > a').click(function() {
    changeLanguage($(this).attr("class"), $(this));
  });
});

function changeLanguage(lang, obj) {
  var parent = obj.closest('.father');

  parent.find('.contenido > div').hide();
  parent.find('.texto_' + lang).show();
}
