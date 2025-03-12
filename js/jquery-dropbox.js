$(document).ready(function() {
    // Při kliknutí na položku "Služby" přepnout třídu active
    $("li.dropdown > a").click(function(e) {
      e.preventDefault();  // Zamezit výchozímu chování odkazu
      var $this = $(this).parent(); // Odkaz je uvnitř <li>, přistoupíme k rodiči
      
      // Přepnout třídu active pro zobrazení / skrytí submenu
      $this.toggleClass("active");
      
      // Zabráníme zavření submenu při kliknutí mimo
      if ($this.hasClass("active")) {
        $this.find(".submenu").slideDown();
      } else {
        $this.find(".submenu").slideUp();
      }
    });
  
    // Možnost kliknutí mimo dropdown menu pro jeho zavření
    $(document).click(function(e) {
      if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown').removeClass('active').find('.submenu').slideUp();
      }
    });
  });
  