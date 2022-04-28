(data => {
  let enableTouchInput = _ => {
    document.addEventListener("mousemove", disableTouchInput, true);
    data.lastTouchEventTimestamp = new Date();

    data.type = "touch";
    document.documentElement.dataset.input = data.type;
  };
  
  let disableTouchInput = _ => {
    document.removeEventListener("mousemove", disableTouchInput, true);
    if (new Date() - data.lastTouchEventTimestamp < 500) return;

    data.type = "mouse";
    document.documentElement.dataset.input = data.type;
  };

  window.addEventListener("load", _ => {
    document.addEventListener("touchstart", enableTouchInput, true);
    document.addEventListener("mousemove", disableTouchInput, true);
  });

})({
  lastTouchEventTimestamp: 0,
  type: "touch"
})
