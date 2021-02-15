function animatedBottomLineNavigation() {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".main-nav");

  $mainNav.append("<li id='hover-line'></li>");
  var $hoverLine = $("#hover-line");

  $hoverLine
    .width($(".main-nav li.active").width())
    .css("left", $(".active a").position().left)
    .data("origLeft", $hoverLine.position().left)
    .data("origWidth", $hoverLine.width());

  $(".main-nav > li").hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.width();
      $hoverLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
      $hoverLine.stop().animate({
        left: $hoverLine.data("origLeft"),
        width: $hoverLine.data("origWidth")
      });
    }
  );
}

function updateAnimatedBottomLinePosition() {
  var $hoverLine = $("#magic-line");
  if ($hoverLine.length > 0) {
    $("#magic-line")
      .width($(".main-nav li.active").width())
      .css("left", $(".active a").position().left)
      .data("origLeft", $hoverLine.position().left)
      .data("origWidth", $hoverLine.width());
  }
}

function addCounter(format) {
  if ($(".animation-counter")) {
    $(".animation-counter .counter").each(function(index, ele) {
      var counterObj = {
        fromValue: parseInt($(this).attr("data-from"), 10),
        toValue: parseInt($(this).attr("data-to"), 10),
        speed: parseInt($(this).attr("data-speed"), 10)
      };
      var distanceMinMax =
        counterObj.fromValue < counterObj.toValue
          ? counterObj.toValue - counterObj.fromValue
          : counterObj.fromValue - counterObj.toValue;
      var animatedBlock = $(this).parent();

      if (counterObj.fromValue > counterObj.toValue) {
        for (var i = counterObj.toValue + 1; i <= counterObj.fromValue; i++) {
          switch (format) {
            case "thousand":
              animatedBlock.prepend("<i>" + number_format(i) + "</i>");
              break;
            default:
              animatedBlock.prepend("<i>" + i + "</i>");
              break;
          }
        }
      } else {
        for (var i = counterObj.toValue - 1; i >= counterObj.fromValue; i--) {
          switch (format) {
            case "thousand":
              animatedBlock.prepend("<i>" + number_format(i) + "</i>");
              break;
            default:
              animatedBlock.prepend("<i>" + i + "</i>");
              break;
          }
        }
      }

      setTimeout(function() {
        animatedBlock.animate(
          {
            top: -(animatedBlock.find("i").height() * distanceMinMax)
          },
          {
            duration: counterObj.speed,
            specialEasing: {
              top: "swing"
            }
          }
        );
      }, 100 + index * 50);
    });

    $(window).on("resize", function() {
      if ($(".animation-counter")) {
        $(".animation-counter .counter").each(function(index, ele) {
          var counterObj = {
            fromValue: parseInt($(this).attr("data-from"), 10),
            toValue: parseInt($(this).attr("data-to"), 10),
            speed: parseInt($(this).attr("data-speed"), 10)
          };
          var distanceMinMax =
            counterObj.fromValue < counterObj.toValue
              ? counterObj.toValue - counterObj.fromValue
              : counterObj.fromValue - counterObj.toValue;
          var animatedBlock = $(this).parent();
          animatedBlock.css({
            top: -(animatedBlock.find("i").height() * distanceMinMax)
          });
        });
      }
    });
  }
}

function slideDownMainMenu() {
  var mainList = $(".main-nav li a");
  var isOverSubMenu = false;
  var isOverMainMenu = false;

  mainList.hover(
    function() {
      isOverMainMenu = true;
      var directSubMenu = $(
        "#" +
          $(this)
            .attr("data-parent-menu")
            .replace(" ", "-") +
          "-sub-menu"
      );
      var header = $("header");
      var headerHeight =
        parseInt(header.height(), 10) +
        parseInt(header.css("padding-top"), 10) +
        parseInt(header.css("padding-bottom"), 10) +
        parseInt(header.css("margin-top"), 10) +
        parseInt(header.css("margin-bottom"), 10);
      $(".sub-menu").css({
        opacity: 0,
        top: headerHeight - 100,
        visibility: "hidden"
      });
      directSubMenu.find("li").each(function(index, ele) {
        $(ele).removeAttr("style");
      });
      directSubMenu.css({
        opacity: 1,
        top: headerHeight,
        visibility: "visible"
      });
      directSubMenu.find("li").each(function(index, ele) {
        setTimeout(function() {
          $(ele).animate(
            {
              opacity: 1.0,
              top: 0
            },
            {
              duration: 500
            }
          );
        }, 100 + index * 50);
      });
    },
    function() {
      isOverMainMenu = false;
      var directSubMenu = $(
        "#" +
          $(this)
            .attr("data-parent-menu")
            .replace(" ", "-") +
          "-sub-menu"
      );
      setTimeout(function() {
        if (!isOverSubMenu) {
          directSubMenu.css({
            opacity: 0,
            top: 100,
            visibility: "hidden"
          });
          directSubMenu.find("li").each(function(index, ele) {
            $(ele).removeAttr("style");
          });
        }
      }, 100);
    }
  );

  $(".sub-menu").hover(
    function() {
      isOverSubMenu = true;
    },
    function() {
      isOverSubMenu = false;
      $(".sub-menu")
        .find("li")
        .each(function(index, ele) {
          $(ele).removeAttr("style");
        });
      setTimeout(function() {
        if (!isOverMainMenu)
          $(".sub-menu").css({
            opacity: 0,
            top: 100,
            visibility: "hidden"
          });
      }, 100);
    }
  );
}

function searchPlaceHolder() {
  var bgUrl = "url('../images/search.png')";
  $("#search-sub-menu .input-form").on(
    "change keydown paste input",
    function() {
      if ($(this).val() == "") {
        $(this).css("background-image", bgUrl);
      } else {
        $(this).css("background-image", "none");
      }
    }
  );
}

function hideMenuNavigation() {
  // for resize to hide menu navigation
  if ($(".main-nav-responsive").css("display") != "none") {
    $(".main-nav-responsive").hide();
    $(".icon").removeClass("open");
    $(".sub-menu-responsive").hide();
    $(".sub-menu-responsive")
      .parent()
      .find("a")
      .css("border-bottom", "1px solid #777777");
    $(".sub-menu-responsive")
      .parent()
      .find(".nav-arrow")
      .removeClass("fa-angle-up")
      .addClass("fa-angle-down");
  }
}

function hoverOnTouchDevices(element, classToRemove) {
  $(element).on("touchstart MSPointerDown", function(event) {
    if (event.touches.length > 1) return;
    $(".type-of-categories ul li").removeClass(classToRemove);
    $(this).addClass(classToRemove);
  });
}

$(window).on("resize", function() {
  updateAnimatedBottomLinePosition();
});

$(window).on("orientationchange", function() {
  hideMenuNavigation();
});

$(document).ready(function() {
  hoverOnTouchDevices(".type-of-categories ul li", "active");
  // slide toggle
  $(".btn-toggle").click(function() {
    var timeLineFull = $(this)
      .parent()
      .parent()
      .find(".timeline-full");
    var isVisible = $(timeLineFull).is(":visible");
    var sectionTimeline = $(this).closest(".section-timeline");
    sectionTimeline
      .find(".btn-toggle")
      .removeClass("fa-angle-up")
      .addClass("fa-angle-down");
    sectionTimeline.find(".timeline-full").slideUp();
    if (isVisible) {
      $(timeLineFull).slideUp();
      $(this)
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(timeLineFull).slideDown();
      $(this)
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
    }
  });

  //RESPONSIVE: header navigation

  $(".icon").on("click", function() {
    $(".main-nav-responsive").slideToggle();
    $(this).toggleClass("open");

    return false;
  });

  if (
    $(".main-nav-responsive li .sub-menu-responsive").css("display") != "none"
  )
    $(".main-nav-responsive li .sub-menu")
      .parent()
      .find("a")
      .css("border", "none");
  $(".main-nav-responsive > li > .nav-arrow").on("click", function() {
    var hasSub = $(this)
      .parent()
      .has(".sub-menu-responsive");
    var sub = $(this)
      .parent()
      .find(".sub-menu-responsive");
    if (sub.css("display") == "none") {
      sub
        .parent()
        .find("a")
        .css("border", "none");
      sub.slideDown();
      $(this)
        .parent()
        .find(".nav-arrow")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
    } else {
      sub.slideUp(function() {
        sub
          .parent()
          .find("a")
          .css("border-bottom", "1px solid #777777");
      });
      $(this)
        .parent()
        .find(".nav-arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    }
    if ($(this).attr("href") == "#") return false;
  });

  // RESPONSIVE: add clear-input button to clear text in search text box
  $(".form-search .clear-input").on("click", function() {
    $(this)
      .parent()
      .find(".input-form")
      .val("");
    $(this)
      .parent()
      .find(".input-form")
      .val("");
    return false;
  });

  slideDownMainMenu();
  searchPlaceHolder();
  scrollingEffects(".quote-module", "fadeInUp");
});
$(window).load(function() {
  animatedBottomLineNavigation();
  updateAnimatedBottomLinePosition();
});
