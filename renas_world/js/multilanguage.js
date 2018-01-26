<script crossorigin="anonymous" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript">
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
</script>
