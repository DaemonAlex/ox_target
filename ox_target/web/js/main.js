import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eyeSvg");

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return eye.classList.remove("eye-hover");
    }

    case "leftTarget": {
      return eye.classList.remove("eye-hover");
    }

    case "setTarget": {
      eye.classList.add("eye-hover");

      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});

// Register NUI callback
window.addEventListener("message", (event) => {
  if (event.data.type === "select") {
    const targetType = event.data.targetType;
    const targetId = event.data.targetId;
    const zoneId = event.data.zoneId;

    // Handle the selection based on targetType, targetId, and zoneId
    // Example: Trigger an event or perform an action based on the selection
    console.log(`Selected: ${targetType}, ${targetId}, ${zoneId}`);
  }
});
