require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
], function (Map, SceneView, GeoJSONLayer, GraphicsLayer, Graphic, esriRequest) {
  const geoJsonLayers = window.createGeoJsonLayers({
    GeoJSONLayer,
    assetPaths: window.assetPaths,
    layerDefinitions: window.layerDefinitions,
  });

  const map = window.createSceneMap({
    Map,
    layers: geoJsonLayers,
  });

  const view = window.createSceneView({
    SceneView,
    map,
  });

  window.view = view;
  view.popup.defaultPopupTemplateEnabled = true;

  window.loadDecorativeGraphics({
    esriRequest,
    GraphicsLayer,
    Graphic,
    map,
    assetPaths: window.assetPaths,
  });

  window.setupBasemapControl({ map });
  window.setupResetView({
    view,
    defaultCamera: window.defaultCamera,
  });
  window.setupCameraInfo({
    view,
    uiText: window.uiText,
  });
});
