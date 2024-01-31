require(["esri/Map", "esri/layers/CSVLayer", "esri/views/MapView", "esri/widgets/Legend"], (
        Map,
        CSVLayer,
        MapView,
        Legend
      ) => {
        var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
;
        
        const template = {
          title: "Crime committed at {ILEADSStreet}"
        };

       
        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#8B008B", ratio: 0.2 },
            { color: "#9370DB", ratio: 0.3 },
            { color: "#BA55D3", ratio: 0.4 },
            { color: "#DA70D6", ratio: 0.5 },
            { color: "#FFC0CB", ratio: 0.8 },

            
          ],
          maxDensity: 0.01,
          minDensity: 0
        };

        const layer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Heatmap",
          copyright: "St. Louis Police Department",
          latitude: "Lat",
          longitude: "Lon",
          popupTemplate: template,
          renderer: renderer,
        });
        

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.29, 38.6393],
          zoom: 11,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });
