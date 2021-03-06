(function ($) {
  "use strict";

  $(function () {
    for (
      var nk = window.location,
        o = $(".nano-content li a")
          .filter(function () {
            return this.href == nk;
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      if (!o.is("li")) break;
      o = o.parent().addClass("d-block").parent().addClass("active");
    }
  });

  /* 
    ------------------------------------------------
    Sidebar open close animated humberger icon
    ------------------------------------------------*/

  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });

  /* TO DO LIST 
    --------------------*/
  $(".tdl-new").on("keypress", function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      var v = $(this).val();
      var s = v.replace(/ +?/g, "");
      if (s == "") {
        return false;
      } else {
        $(".tdl-content ul").append(
          "<li><label><input type='checkbox'><i></i><span>" +
            v +
            "</span><a href='#' class='ti-close'></a></label></li>"
        );
        $(this).val("");
      }
    }
  });

  $(".tdl-content a").on("click", function () {
    var _li = $(this).parent().parent("li");
    _li
      .addClass("remove")
      .stop()
      .delay(100)
      .slideUp("fast", function () {
        _li.remove();
      });
    return false;
  });

  // for dynamically created a tags
  $(".tdl-content").on("click", "a", function () {
    var _li = $(this).parent().parent("li");
    _li
      .addClass("remove")
      .stop()
      .delay(100)
      .slideUp("fast", function () {
        _li.remove();
      });
    return false;
  });

  $("#question-type").change(function (e) {
    var type = $(this).val();
    $("#answer").empty();
    if (type == "0") {
      $("#quiz").removeClass("d-none");
      [
        {
          value: "answer-1",
          text: "1. Cevap",
        },
        {
          value: "answer-2",
          text: "2. Cevap",
        },
        {
          value: "answer-3",
          text: "3. Cevap",
        },
        {
          value: "answer-4",
          text: "4. Cevap",
        },
      ].map(function (option) {
        $("#answer").append($("<option>", option));
      });
    } else {
      [
        {
          value: "answer-true",
          text: "Do??ru",
        },
        {
          value: "answer-false",
          text: "Yanl????",
        },
      ].map(function (option) {
        $("#answer").append($("<option>", option));
      });

      $("#quiz").addClass("d-none");
    }
  });
})(jQuery);
