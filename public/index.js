var root = document.getElementById("root");

root.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
  });
});
