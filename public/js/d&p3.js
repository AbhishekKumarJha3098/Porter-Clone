  var prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos, "fkodo")
  window.onscroll = function () {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
              document.getElementById("navbar1").style.top = "0";
              document.getElementById("navbar1").style.opacity = "5";

          } else if (prevScrollpos < currentScrollPos) {
              document.getElementById("navbar1").style.transition.opacity = "5s";

              document.getElementById("navbar1").style.opacity = "0";
          } else {
              document.getElementById("navbar1").style.top = "-50px";
              // document.getElementById("navbar1").style.opacity ="1";
          }
          prevScrollpos = currentScrollPos;
      } 