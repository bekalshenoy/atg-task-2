let sections = gsap.utils.toArray("section"),
  currentSection = sections[0];
let colors = [
  {
    backgroundColor: "#6411a9",
    head: "<h1>25M+ Downloads</h1><p style='text-align: right'>on appstore & google playstore</p>",
  },
  {
    backgroundColor: "#4e27ce",
    head: "<h4>The Next Big</h4><h1>Blockchain</h1><p style='text-align: right'>Revolution</p>",
  },
  {
    backgroundColor: "#0f113b",
    head: "<h4>Powered by advanced</h4><img src='./images/nasa-mobile-app.png' style='height:60px;' alt='nasa' /><p style='text-align: right'>algorithms</p>",
  },
  {
    backgroundColor: "#17263c",
    head: "<h4>Redefining</h4><h1>UX Strategy</h1><p style='text-align: right'>and UI design</p>",
  },
  {
    backgroundColor: "#134ca2",
    head: "<h4>Text Headline</h4><h1>Text Headline</h1><p style='text-align: right'>Footer headline</p>",
  },
  {
    backgroundColor: "#022b92",
    head: "<h4>Developing ERP Solutions for</h4><h1>Text Headline</h1><p style='text-align: right'>in furniture industry</p>",
  },
  {
    backgroundColor: "#01824d",
    head: "<h4>Biggest Classifieds</h4><h1>East Asia</h1><p style='text-align: right'>Countries</p>",
  },
];

document.body.style.backgroundColor = colors[0].backgroundColor;
document.querySelector("svg").style.backgroundColor = colors[0].backgroundColor;
document.getElementById("Opaque_Ring").style.strokeDasharray = "0 , 1000";
document.querySelector(".dotsst").style.fill = "rgb(0, 155, 255)";
document.querySelector(".dotsst").style.opacity = "1";

gsap.to(document.querySelectorAll(".com #slide1 .images img")[0], {
  duration: 1,
  y: -200,
});
gsap.to(document.querySelectorAll(".com #slide1 .images img")[1], {
  duration: 1,
  y: -200,
});
document.querySelector(".head .animates").innerHTML = colors[0].head;
gsap.to(".head .animates", {
  duration: 0.5,
  autoAlpha: 1,
  y: 50,
});

gsap.defaults({ overwrite: "auto", duration: 0.3 });

// stretch out the body height according to however many sections there are.
gsap.set("body", { height: sections.length * 100 + "vh" });

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: (self) => self.isActive && setSection(section),
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    let index = sections.indexOf(newSection);
    gsap.to(document.querySelectorAll(".com #slide1 .images img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide1 .images img")[1], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide2 .images img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide2 .images img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide3 .images img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide7 .images img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide7 .images img")[1], {
      duration: 1.5,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide4 .images img")[0], {
      duration: 1,
      y: -200,
      x: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide4 .images img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide4 .images img")[2], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide4 .images img")[3], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide4 .images img")[4], {
      duration: 1,
      y: 200,
      x: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide5 .images img")[0], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide5 .images img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll(".com #slide5 .images img")[2], {
      duration: 1,
      x: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide5 .images img")[3], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll(".com #slide5 .images img")[4], {
      duration: 1,
      y: 200,
    });
    gsap.to(".com #slide6 .images img", {
      duration: 1,
      y: 200,
    });
    gsap.to(currentSection.querySelector(".text p"), 1, {
      autoAlpha: 0,
      y: 25,
    });
    gsap.to(currentSection, { duration: 1, autoAlpha: 0 });
    gsap.to(newSection, { duration: 1, autoAlpha: 1 });
    gsap.to(newSection.querySelector(".text p"), 1, { autoAlpha: 1, y: -25 });
    if (index == 0) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1,
        y: -200,
      });
    } else if (index == 1) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1,
        y: 200,
      });
    } else if (index == 2) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1,
        y: 200,
      });
    } else if (index == 3) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: 200,
        x: 200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1,
        y: 200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[2], {
        duration: 1,
        y: 200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[3], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[4], {
        duration: 1,
        y: -200,
        x: -200,
      });
    } else if (index == 4) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: 200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1,
        y: 200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[2], {
        duration: 1,
        x: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[3], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[4], {
        duration: 1,
        y: -200,
      });
    } else if (index == 5) {
      gsap.to(newSection.querySelector(".com .images img"), {
        duration: 1,
        y: -200,
      });
    } else if (index == 6) {
      gsap.to(newSection.querySelectorAll(".com .images img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll(".com .images img")[1], {
        duration: 1.5,
        y: -200,
      });
    }
    gsap.to(".head .animates", {
      y: 150,
      autoAlpha: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.to(".head .animates", {
          y: -150,
          autoAlpha: 0,
          duration: 0,
          onComplete: () => {
            document.querySelector(".head .animates").innerHTML =
              colors[index].head;
            gsap.to(".head .animates", {
              y: 50,
              autoAlpha: 1,
              duration: 0.5,
            });
          },
        });
      },
    });

    currentSection = newSection;
    document.body.style.backgroundColor = colors[index].backgroundColor;
    let slideCount = index * 140;
    if (index == 4 || index == 5) {
      slideCount -= 20;
    }
    document.querySelector("svg").style.backgroundColor =
      colors[index].backgroundColor;
    document.getElementById("Opaque_Ring").style.strokeDasharray =
      slideCount + ", 1000";
    document.querySelectorAll(".dotsst").forEach((dot, i) => {
      if (i <= index) {
        dot.style.fill = "rgb(0, 155, 255)";
        dot.style.opacity = "1";
      } else {
        dot.style.fill = "#ffffff";
        dot.style.opacity = "0.4";
      }
    });
  }
}

// handles the infinite part, wrapping around at either end....
ScrollTrigger.create({
  start: 1,
  end: () => ScrollTrigger.maxScroll(window) - 1,
  onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  onLeave: (self) => self.scroll(2),
}).scroll(2);

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 0,
  responsive: {
    0: {
      items: 1,
    },
  },
  autoplay: true,
  autoplayTimeout: 5000,
});

$(".owl-carousel").on("changed.owl.carousel", function (event) {
  document.querySelector(".owl-carousel").style.backgroundColor =
    colors[event.page.index].backgroundColor;
  try {
    document.querySelectorAll(".owl-carousel .content img")[
      event.page.index
    ].style.backgroundColor = colors[event.page.index].backgroundColor;
  } catch {}
});

if (window.innerWidth < 600) {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  document.querySelector(".owl-carousel").style.backgroundColor =
    colors[0].backgroundColor;
  document.querySelectorAll(
    ".owl-carousel .content img"
  )[0].style.backgroundColor = colors[0].backgroundColor;
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    document.querySelector(".owl-carousel").style.backgroundColor =
      colors[0].backgroundColor;
    document.querySelectorAll(
      ".owl-carousel .content img"
    )[0].style.backgroundColor = colors[0].backgroundColor;
  } else {
    if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
    }
  }
});
