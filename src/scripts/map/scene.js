window.createGeoJsonLayers = function ({ GeoJSONLayer, assetPaths, layerDefinitions }) {
  return layerDefinitions.map(function (definition) {
    const layer = new GeoJSONLayer({
      url: assetPaths.geojsonBasePath + definition.fileName,
      title: definition.title || definition.id,
      popupTemplate: {
        title: "{componentName}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              { fieldName: "lodLevel", label: "LOD" },
              { fieldName: "lod3Category", label: "LoD3 category" },
              { fieldName: "componentId", label: "Component" },
              { fieldName: "sourceFile", label: "Source" },
              { fieldName: "lod3Evidence", label: "LoD3 evidence" },
            ],
          },
        ],
      },
    });

    layer.renderer = definition.renderer || {
      type: "simple",
      symbol: {
        type: definition.symbolType,
        symbolLayers: [definition.symbolLayer],
      },
    };

    return layer;
  });
};

window.loadDecorativeGraphics = function ({ esriRequest, GraphicsLayer, Graphic, map, assetPaths }) {
  const requestOptions = {
    query: { f: "json" },
    responseType: "json",
  };

  const graphicsLayer = new GraphicsLayer({ title: "Site decorations" });

  const createGraphic = function (data) {
    const geometry = { type: data.type };
    ["rings", "paths", "x", "y", "z", "longitude", "latitude", "spatialReference"].forEach(
      function (key) {
        if (data[key] !== undefined) {
          geometry[key] = data[key];
        }
      }
    );

    if (geometry.type === "polygon" && Array.isArray(geometry.rings?.[0]) && typeof geometry.rings[0][0] === "number") {
      geometry.rings = [geometry.rings];
    }

    return new Graphic({
      geometry: geometry,
      symbol: data.symbol,
      attributes: {
        decorationId: data.decorationId,
        sourceFile: data.sourceFile,
      },
      popupTemplate: data.popupTemplate,
    });
  };

  return Promise.all(
    assetPaths.decorativeGraphics.map(function (path) {
      return esriRequest(path, requestOptions).then(function (response) {
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
      });
    })
  ).then(function () {
    map.add(graphicsLayer);
    return graphicsLayer;
  });
};

window.createSceneMap = function ({ Map, layers }) {
  return new Map({
    basemap: window.defaultBasemap || "gray-vector",
    ground: "world-elevation",
    layers: layers,
  });
};

window.defaultCamera = {
  position: [106.69686000803644, 10.777206782229955, 73.85002393834293],
  heading: 262.8197452067017,
  tilt: 71.76522024538839,
};

window.createSceneView = function ({ SceneView, map }) {
  return new SceneView({
    container: "viewDiv",
    map: map,
    camera: window.defaultCamera,
    qualityProfile: "high",
  });
};
