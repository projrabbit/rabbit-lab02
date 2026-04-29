window.setupBasemapControl = function ({ map }) {
  const control = document.getElementById("basemapControl");
  if (!control) return;

  control.value = window.defaultBasemap || control.value;
  window.changeBasemap = function (basemap) {
    map.basemap = basemap;
  };

  control.addEventListener("change", function () {
    window.changeBasemap(this.value);
  });
};

window.setupResetView = function ({ view, defaultCamera }) {
  const resetButton = document.getElementById("resetViewBtn");
  if (!resetButton) return;

  resetButton.addEventListener("click", function () {
    view.goTo(defaultCamera, {
      speedFactor: 0.5,
      easing: "in-out",
    });
  });
};

window.setupCameraInfo = function ({ view, uiText }) {
  const cameraInfo = document.getElementById("cameraInfo");
  if (!cameraInfo) return;

  view.watch("camera", function (camera) {
    const { latitude, longitude, z } = camera.position;
    const heading = camera.heading.toFixed(2);
    const tilt = camera.tilt.toFixed(2);

    cameraInfo.innerHTML = `
      <strong>${uiText.cameraTitle}</strong><br>
      ${uiText.longitude}: ${longitude.toFixed(5)}<br>
      ${uiText.latitude}: ${latitude.toFixed(5)}<br>
      ${uiText.altitude}: ${z.toFixed(2)}<br>
      ${uiText.heading}: ${heading}&deg;<br>
      ${uiText.tilt}: ${tilt}&deg;
    `;
  });
};
