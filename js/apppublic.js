function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
$(".plate").plate({
  inverse: !1,
  perspective: 500,
  maxRotation: 30,
  animationDuration: 200
}), particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: !0,
        value_area: 800
      }
    },
    color: {
      value: "#FF6347"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#FF6347"
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: .5,
      random: !1,
      anim: {
        enable: !1,
        speed: .5,
        opacity_min: .1,
        sync: !1
      }
    },
    size: {
      value: 5,
      random: !0,
      anim: {
        enable: !1,
        speed: 26,
        size_min: .1,
        sync: !1
      }
    },
    line_linked: {
      enable: !0,
      distance: 170,
      color: "#FF6347",
      opacity: .43405175475286684,
      width: 1.8940440207397828
    },
    move: {
      enable: !0,
      speed: 3,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: !0,
        mode: "repulse"
      },
      onclick: {
        enable: !0,
        mode: "push"
      },
      resize: !0
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: .4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: !0
}), $(".contact-link").click(function () {
  $("#contact").modal("show")
});
var UI = function () {
    function t() {
      _classCallCheck(this, t), this.modalButtons = Array.from(document.querySelectorAll(".skill")), this.modalButtons.pop(), this.modalButtonClose = document.querySelector(".modal__button-close"), this.mainContent = document.getElementById("main-content"), this.modalContainer = document.getElementById("modal"), this.modalContent = document.querySelector(".modal__content"), this.pageOffsetY = 0, this.contactEmail = document.getElementById("form-email"), this.contactName = document.getElementById("form-name"), this.contactBody = document.getElementById("form-message"), this.formAlert = document.querySelector(".form__alert"), this.formAlert.style.display = "none"
    }
    return t.prototype.showModalContainer = function () {
      this.pageOffsetY = window.pageYOffset, this.modalContainer.style.left = "0", this.modalContent.style.display = "block", window.scrollTo(0, 0), this.mainContent.setAttribute("hidden", ""), this.modalButtonClose.style.display = "flex"
    }, t.prototype.hideModalContainer = function () {
      this.mainContent.removeAttribute("hidden"), window.scrollTo(0, this.pageOffsetY), this.modalContainer.style.left = "-100%", this.modalContent.style.display = "none", this.modalContent.innerHTML = "", this.modalButtonClose.style.display = "none"
    }, t.prototype.showContactAlert = function (t) {
      this.formAlert.style.display = "block", this.formAlert.textContent = t, "Thank you for contact! I will respond as soon I can." == t && (this.contactBody.value = "", this.contactEmail.value = "", this.contactName.value = "", setTimeout(function () {
        $("#contact").modal("hide")
      }, 2500))
    }, t
  }(),
  ui = new UI;
ui.modalButtons.forEach(function (t) {
  t.addEventListener("click", function () {
    ui.showModalContainer();
    var e = t.dataset.file;
    axios.get(e).then(function (t) {
      console.log("Data loaded."), ui.modalContent.innerHTML = t.data
    }).catch(function (t) {
      console.log(t)
    })
  })
}), ui.modalContainer.addEventListener("click", function (t) {
  (t.target.classList.contains("modal__button-close") || t.target.classList.contains("ion-close-round")) && ui.hideModalContainer()
}), document.getElementById("form-contact").addEventListener("submit", function (t) {
  t.preventDefault(), "" === ui.contactEmail.value || "" === ui.contactName.value || "" === ui.contactBody.value ? ui.showContactAlert("Fill form.") : $.ajax({
    method: "POST",
    url: "../contact.php",
    data: {
      email: ui.contactEmail.value,
      name: ui.contactName.value,
      body: ui.contactBody.value
    }
  }).done(function (t) {
    ui.showContactAlert(t)
  })
});