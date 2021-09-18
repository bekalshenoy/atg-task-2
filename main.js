let sections = gsap.utils.toArray("section"),
  currentSection = sections[0];
let colors = [
  {
    backgroundColor: "#6411a9",
    head: "<h4>Sub Heading1</h4><h1>Heading1</h1><p>Details1</p>",
  },
  {
    backgroundColor: "#4e27ce",
    head: "<h4>Sub Heading2</h4><h1>Heading2</h1><p>Details2</p>",
  },
  {
    backgroundColor: "#0f113b",
    head: "<h4>Sub Heading3</h4><h1>Heading3</h1><p>Details3</p>",
  },
  {
    backgroundColor: "#17263c",
    head: "<h4>Sub Heading4</h4><h1>Heading4</h1><p>Details4</p>",
  },
  {
    backgroundColor: "#134ca2",
    head: "<h4>Sub Heading5</h4><h1>Heading5</h1><p>Details5</p>",
  },
  {
    backgroundColor: "#022b92",
    head: "<h4>Sub Heading6</h4><h1>Heading6</h1><p>Details6</p>",
  },
  {
    backgroundColor: "#01824d",
    head: "<h4>Sub Heading7</h4><h1>Heading7</h1><p>Details7</p>",
  },
];

document.body.style.backgroundColor = colors[0].backgroundColor;
document.querySelector("svg").style.backgroundColor = colors[0].backgroundColor;
document.getElementById("Opaque_Ring").style.strokeDasharray = "0 , 1000";
document.querySelector(".dotsst").style.fill = "rgb(0, 155, 255)";
document.querySelector(".dotsst").style.opacity = "1";

gsap.to(document.querySelectorAll("#slide1 img")[0], {
  duration: 1,
  y: -200,
});
gsap.to(document.querySelectorAll("#slide1 img")[1], {
  duration: 1,
  y: -200,
});
document.querySelector(".head .animates").innerHTML = colors[0].head;
gsap.to(document.querySelector(".head .animates"), {
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
    gsap.to(document.querySelectorAll("#slide1 img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide1 img")[1], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide2 img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide2 img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide3 img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide3 img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide7 img")[0], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide7 img")[1], {
      duration: 1.5,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide4 img")[0], {
      duration: 1,
      y: -200,
      x: -200,
    });
    gsap.to(document.querySelectorAll("#slide4 img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide4 img")[2], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide4 img")[3], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide4 img")[4], {
      duration: 1,
      y: 200,
      x: 200,
    });
    gsap.to(document.querySelectorAll("#slide5 img")[0], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide5 img")[1], {
      duration: 1,
      y: -200,
    });
    gsap.to(document.querySelectorAll("#slide5 img")[2], {
      duration: 1,
      x: 200,
    });
    gsap.to(document.querySelectorAll("#slide5 img")[3], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelectorAll("#slide5 img")[4], {
      duration: 1,
      y: 200,
    });
    gsap.to(document.querySelector("#slide6 img"), {
      duration: 1,
      y: 200,
    });
    gsap.to(currentSection, { duration: 1, autoAlpha: 0 });
    gsap.to(newSection, { duration: 1, autoAlpha: 1 });
    if (index == 0) {
      gsap.to(newSection.querySelectorAll("img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll("img")[1], {
        duration: 1,
        y: -200,
      });
    } else if (index == 1) {
      gsap.to(newSection.querySelectorAll("img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll("img")[1], {
        duration: 1,
        y: 200,
      });
    } else if (index == 2) {
      gsap.to(newSection.querySelectorAll("img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll("img")[1], {
        duration: 1,
        y: 200,
      });
    } else if (index == 3) {
      gsap.to(document.querySelectorAll("#slide4 img")[0], {
        duration: 1,
        y: 200,
        x: 200,
      });
      gsap.to(document.querySelectorAll("#slide4 img")[1], {
        duration: 1,
        y: 200,
      });
      gsap.to(document.querySelectorAll("#slide4 img")[2], {
        duration: 1,
        y: 200,
      });
      gsap.to(document.querySelectorAll("#slide4 img")[3], {
        duration: 1,
        y: -200,
      });
      gsap.to(document.querySelectorAll("#slide4 img")[4], {
        duration: 1,
        y: -200,
        x: -200,
      });
    } else if (index == 4) {
      gsap.to(document.querySelectorAll("#slide5 img")[0], {
        duration: 1,
        y: 200,
      });
      gsap.to(document.querySelectorAll("#slide5 img")[1], {
        duration: 1,
        y: 200,
      });
      gsap.to(document.querySelectorAll("#slide5 img")[2], {
        duration: 1,
        x: -200,
      });
      gsap.to(document.querySelectorAll("#slide5 img")[3], {
        duration: 1,
        y: -200,
      });
      gsap.to(document.querySelectorAll("#slide5 img")[4], {
        duration: 1,
        y: -200,
      });
    } else if (index == 5) {
      gsap.to(newSection.querySelector("img"), {
        duration: 1,
        y: -200,
      });
    } else if (index == 6) {
      gsap.to(newSection.querySelectorAll("img")[0], {
        duration: 1,
        y: -200,
      });
      gsap.to(newSection.querySelectorAll("img")[1], {
        duration: 1.5,
        y: -200,
      });
    }
    gsap.to(document.querySelector(".head .animates"), {
      y: 150,
      autoAlpha: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.to(document.querySelector(".head .animates"), {
          y: -150,
          autoAlpha: 0,
          duration: 0,
          onComplete: () => {
            document.querySelector(".head .animates").innerHTML =
              colors[index].head;
            gsap.to(document.querySelector(".head .animates"), {
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
