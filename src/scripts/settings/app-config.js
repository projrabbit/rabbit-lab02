(function () {
  const colors = {
    limestone: [232, 225, 203],
    limestoneSoft: [222, 214, 190],
    warmStone: [207, 190, 152],
    shadowStone: [154, 137, 103],
    concrete: [202, 197, 180],
    oliveGlass: [68, 101, 88, 0.88],
    deepOlive: [55, 77, 64],
    agedBronze: [102, 86, 56],
    roofClay: [171, 92, 62],
    roofClayLight: [191, 119, 78],
    metal: [188, 181, 164],
  };

  const extrude = function (size, color, options) {
    return {
      type: "extrude",
      size: size,
      material: { color: color },
      ...(options || {}),
    };
  };

  const objectSymbol = function (width, height, depth, color, options) {
    return {
      type: "object",
      width: width,
      height: height,
      depth: depth,
      material: { color: color },
      ...(options || {}),
    };
  };

  const glassEdges = {
    edges: { type: "solid", color: colors.limestoneSoft, size: 1.5 },
  };

  const componentStyles = [
    {
      group: "base",
      id: "basement",
      label: "Basement plinth",
      symbolType: "polygon-3d",
      symbolLayer: extrude(3.6, colors.warmStone),
    },
    {
      group: "base",
      id: "stairs",
      label: "Front stairs",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.2, colors.limestoneSoft),
    },
    {
      group: "base",
      id: "ground-floor-base",
      label: "Ground floor slab",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.05, colors.limestoneSoft),
    },
    {
      group: "base",
      id: "ground-floor-walls",
      label: "Ground floor walls",
      symbolType: "polygon-3d",
      symbolLayer: extrude(5.5, colors.limestone),
    },
    {
      group: "base",
      id: "ground-floor-trim",
      label: "Ground floor trim",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.2, colors.shadowStone),
    },
    {
      group: "base",
      id: "ground-floor-railing",
      label: "Ground floor railing",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.agedBronze),
    },
    {
      group: "base",
      id: "entrance-gates",
      label: "Entrance gates",
      symbolType: "polygon-3d",
      symbolLayer: extrude(4, colors.deepOlive),
    },
    {
      group: "base",
      id: "first-floor-base",
      label: "First floor block",
      symbolType: "polygon-3d",
      symbolLayer: extrude(9, colors.limestone),
    },
    {
      group: "facade",
      id: "main-columns",
      label: "Main columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(17, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "secondary-columns",
      label: "Secondary columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(4.5, colors.concrete),
    },
    {
      group: "facade",
      id: "first-floor-main-columns",
      label: "Upper main columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(12.35, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "facade-divider-columns",
      label: "Facade divider columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(5, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "ground-floor-facade-trim",
      label: "Facade trim",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "canopy",
      label: "Canopy",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "basement-windows",
      label: "Basement windows",
      symbolType: "polygon-3d",
      symbolLayer: extrude(3.5, colors.oliveGlass, glassEdges),
    },
    {
      group: "facade",
      id: "window-crossbars",
      label: "Window crossbars",
      symbolType: "polygon-3d",
      symbolLayer: extrude(1, colors.agedBronze),
    },
    {
      group: "facade",
      id: "upper-glass-panels",
      label: "Upper glass panels",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2, colors.oliveGlass),
    },
    {
      group: "facade",
      id: "lower-glass-panels",
      label: "Lower glass panels",
      symbolType: "polygon-3d",
      symbolLayer: extrude(4, colors.oliveGlass),
    },
    {
      group: "facade",
      id: "ground-floor-windows",
      label: "Ground floor windows",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2, colors.oliveGlass, glassEdges),
    },
    {
      group: "facade",
      id: "horizontal-beams",
      label: "Horizontal beams",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.concrete),
    },
    {
      group: "facade",
      id: "horizontal-glass-panels",
      label: "Horizontal glass panels",
      symbolType: "polygon-3d",
      symbolLayer: extrude(1.5, colors.oliveGlass),
    },
    {
      group: "facade",
      id: "main-door",
      label: "Main door",
      symbolType: "polygon-3d",
      symbolLayer: extrude(5, colors.deepOlive),
    },
    {
      group: "facade",
      id: "main-door-upper-block",
      label: "Main door upper block",
      symbolType: "polygon-3d",
      symbolLayer: extrude(1.5, colors.limestoneSoft),
    },
    {
      group: "facade",
      id: "front-balcony-glass-door",
      label: "Balcony glass door",
      symbolType: "polygon-3d",
      symbolLayer: extrude(5, colors.oliveGlass),
    },
    {
      group: "facade",
      id: "front-balcony-glass-panel",
      label: "Balcony glass panel",
      symbolType: "polygon-3d",
      symbolLayer: extrude(7, colors.oliveGlass),
    },
    {
      group: "facade",
      id: "front-balcony-support-columns",
      label: "Balcony support columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(12.35, colors.limestoneSoft),
    },
    {
      group: "terrace",
      id: "front-balcony-floor",
      label: "Front balcony floor",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.limestoneSoft),
    },
    {
      group: "terrace",
      id: "front-balcony-railing",
      label: "Front balcony railing",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.8, colors.agedBronze),
    },
    {
      group: "terrace",
      id: "front-balcony-roof",
      label: "Front balcony roof",
      symbolType: "polygon-3d",
      symbolLayer: extrude(1, colors.limestoneSoft),
    },
    {
      group: "terrace",
      id: "front-terrace-floor-base",
      label: "Front terrace floor",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.55, colors.limestone),
    },
    {
      group: "terrace",
      id: "front-terrace-floor-trim",
      label: "Front terrace trim",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.limestoneSoft),
    },
    {
      group: "terrace",
      id: "main-terrace-floor",
      label: "Main terrace floor",
      symbolType: "polygon-3d",
      symbolLayer: extrude(1, colors.concrete),
    },
    {
      group: "terrace",
      id: "main-terrace-trim",
      label: "Main terrace trim",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.15, colors.shadowStone),
    },
    {
      group: "terrace",
      id: "upper-terrace-railing",
      label: "Upper terrace railing",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.7, colors.agedBronze),
    },
    {
      group: "terrace",
      id: "terrace-glass-guard",
      label: "Terrace glass guard",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2, colors.oliveGlass),
    },
    {
      group: "terrace",
      id: "terrace-glass-columns",
      label: "Terrace glass columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2, colors.oliveGlass),
    },
    {
      group: "terrace",
      id: "rear-terrace-floor",
      label: "Rear terrace floor",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.1, colors.limestone),
    },
    {
      group: "terrace",
      id: "rear-terrace-railing",
      label: "Rear terrace railing",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.7, colors.agedBronze),
    },
    {
      group: "terrace",
      id: "rear-terrace-trim",
      label: "Rear terrace trim",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.concrete),
    },
    {
      group: "terrace",
      id: "rear-terrace-support-beam",
      label: "Rear terrace support beam",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2.5, colors.shadowStone),
    },
    {
      group: "roof",
      id: "terrace-roof-panel",
      label: "Terrace roof panel",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.roofClay),
    },
    {
      group: "roof",
      id: "terrace-roof-mid-panel",
      label: "Terrace roof center panel",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.75, colors.roofClayLight),
    },
    {
      group: "roof",
      id: "rear-terrace-roof-panel",
      label: "Rear terrace roof panel",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.roofClay),
    },
    {
      group: "roof",
      id: "rear-upper-columns",
      label: "Rear upper columns",
      symbolType: "polygon-3d",
      symbolLayer: extrude(10, colors.concrete),
    },
    {
      group: "roof",
      id: "rear-wing-roof",
      label: "Rear wing roof",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.roofClay),
    },
    {
      group: "roof",
      id: "skylight-platform",
      label: "Skylight platform",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.2, colors.limestoneSoft),
    },
    {
      group: "roof",
      id: "skylight-well",
      label: "Skylight well",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.deepOlive),
    },
    {
      group: "roof",
      id: "skylight-railing",
      label: "Skylight railing",
      symbolType: "polygon-3d",
      symbolLayer: extrude(0.5, colors.agedBronze),
    },
    {
      group: "roof",
      id: "unused-roof-details",
      label: "Roof detail extras",
      symbolType: "polygon-3d",
      symbolLayer: extrude(2, colors.roofClayLight),
    },
  ];

  const layerComponents = {
    structuralShell: ["basement", "ground-floor-base", "ground-floor-walls", "first-floor-base"],
    stairsAndGates: ["stairs", "entrance-gates"],
    facadeTrims: [
      "ground-floor-trim",
      "ground-floor-railing",
      "ground-floor-facade-trim",
      "canopy",
      "horizontal-beams",
    ],
    columns: [
      "main-columns",
      "secondary-columns",
      "first-floor-main-columns",
      "facade-divider-columns",
      "front-balcony-support-columns",
      "rear-upper-columns",
    ],
    doors: ["main-door", "main-door-upper-block", "front-balcony-glass-door"],
    windowsAndGlass: [
      "basement-windows",
      "ground-floor-windows",
      "upper-glass-panels",
      "lower-glass-panels",
      "horizontal-glass-panels",
      "window-crossbars",
      "front-balcony-glass-panel",
    ],
    balconies: [
      "front-balcony-floor",
      "front-balcony-railing",
      "front-balcony-roof",
      "upper-terrace-railing",
      "terrace-glass-guard",
      "terrace-glass-columns",
    ],
    terraces: [
      "front-terrace-floor-base",
      "front-terrace-floor-trim",
      "main-terrace-floor",
      "main-terrace-trim",
      "rear-terrace-floor",
      "rear-terrace-railing",
      "rear-terrace-trim",
      "rear-terrace-support-beam",
    ],
    roofs: [
      "terrace-roof-panel",
      "terrace-roof-mid-panel",
      "rear-terrace-roof-panel",
      "rear-wing-roof",
      "unused-roof-details",
    ],
    skylights: [
      "skylight-platform",
      "skylight-well",
      "skylight-railing",
    ],
  };

  const rendererForComponents = function (componentIds, defaultSymbolType) {
    const componentSet = new Set(componentIds);
    const defaultLayer =
      defaultSymbolType === "point-3d"
        ? objectSymbol(0.2, 0.2, 0.2, colors.metal)
        : extrude(0.25, colors.limestoneSoft);

    return {
      type: "unique-value",
      field: "componentId",
      defaultSymbol: {
        type: defaultSymbolType,
        symbolLayers: [defaultLayer],
      },
      uniqueValueInfos: componentStyles
        .filter(function (style) {
          return componentSet.has(style.id);
        })
        .map(function (style) {
          return {
            value: style.id,
            label: style.label,
            symbol: {
              type: style.symbolType,
              symbolLayers: [style.symbolLayer],
            },
          };
        }),
    };
  };

  window.defaultBasemap = "gray-vector";

  window.assetPaths = {
    decorativeGraphics: [
      "./data/decorations/site-decorations.json",
      "./data/decorations/round-louver-columns.json",
    ],
    geojsonBasePath: "./data/main_data/",
  };

  window.layerDefinitions = [
    {
      id: "structural-shell",
      title: "Structural shell",
      fileName: "structural-shell.geojson",
      renderer: rendererForComponents(layerComponents.structuralShell, "polygon-3d"),
    },
    {
      id: "stairs-and-gates",
      title: "Stairs and gates",
      fileName: "stairs-and-gates.geojson",
      renderer: rendererForComponents(layerComponents.stairsAndGates, "polygon-3d"),
    },
    {
      id: "facade-trims",
      title: "Facade trims",
      fileName: "facade-trims.geojson",
      renderer: rendererForComponents(layerComponents.facadeTrims, "polygon-3d"),
    },
    {
      id: "columns",
      title: "Columns",
      fileName: "columns.geojson",
      renderer: rendererForComponents(layerComponents.columns, "polygon-3d"),
    },
    {
      id: "doors",
      title: "Doors",
      fileName: "doors.geojson",
      renderer: rendererForComponents(layerComponents.doors, "polygon-3d"),
    },
    {
      id: "windows-and-glass",
      title: "Windows and glass",
      fileName: "windows-and-glass.geojson",
      renderer: rendererForComponents(layerComponents.windowsAndGlass, "polygon-3d"),
    },
    {
      id: "balconies",
      title: "Balconies",
      fileName: "balconies.geojson",
      renderer: rendererForComponents(layerComponents.balconies, "polygon-3d"),
    },
    {
      id: "terraces",
      title: "Terraces",
      fileName: "terraces.geojson",
      renderer: rendererForComponents(layerComponents.terraces, "polygon-3d"),
    },
    {
      id: "roofs",
      title: "Roofs",
      fileName: "roofs.geojson",
      renderer: rendererForComponents(layerComponents.roofs, "polygon-3d"),
    },
    {
      id: "skylights",
      title: "Skylights",
      fileName: "skylights.geojson",
      renderer: rendererForComponents(layerComponents.skylights, "polygon-3d"),
    },
  ];

  window.uiText = {
    title: "LAB02 IE402.P21 GROUP 07",
    basemapLabel: "Basemap",
    basemapOptions: [
      { value: "gray-vector", label: "Light Gray" },
      { value: "streets-navigation-vector", label: "Navigation" },
      { value: "satellite", label: "Satellite" },
    ],
    resetView: "Reset view",
    cameraLoading: "Loading camera information...",
    cameraTitle: "Camera information",
    longitude: "Longitude",
    latitude: "Latitude",
    altitude: "Altitude",
    heading: "Heading",
    tilt: "Tilt",
  };
})();
