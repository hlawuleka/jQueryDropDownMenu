$(document).ready(function() {

  var dropDownMenuOpened = false;
  var targetIterm = $('.targetIterm, .mySubMenu ul ');
  var hoverCounter = 0;
  var toggleDropDownMenu = function(counter, subMenuOpenClass, subMenuCloseClass, childULVisibilityClass) {

    if (counter % 2 == 1) {
      $('.mySubMenu').addClass(subMenuOpenClass).removeClass(subMenuCloseClass);
      $('.mySubMenu ul').removeClass(childULVisibilityClass);
    } else {

      $('.mySubMenu').removeClass(subMenuOpenClass).addClass(subMenuCloseClass);
      $('.mySubMenu ul').addClass(childULVisibilityClass);

    }
  }
  $(targetIterm).on('mouseenter', function(e) {

    $('.mySubMenu ul').mouseenter(function() {
      dropDownMenuOpened = true;
    }).mouseout(function() {
      dropDownMenuOpened = false;
    });

    hoverCounter++;
    toggleDropDownMenu(hoverCounter, 'isSubMenuOpen', 'isSubMenuClosed', 'isMenuNotVisible');

  }).mouseleave(function() {

    hoverCounter++;
    toggleDropDownMenu(hoverCounter, 'isSubMenuOpen', 'isSubMenuClosed', 'isMenuNotVisible');
  });
});
