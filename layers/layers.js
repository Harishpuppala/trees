var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_trees_1 = new ol.format.GeoJSON();
var features_trees_1 = format_trees_1.readFeatures(json_trees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trees_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trees_1.addFeatures(features_trees_1);
var lyr_trees_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trees_1, 
                style: style_trees_1,
                interactive: true,
                title: '<img src="styles/legend/trees_1.png" /> trees'
            });

lyr_OSMStandard_0.setVisible(true);lyr_trees_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_trees_1];
lyr_trees_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Namee': 'Namee', 'Book1_Type': 'Book1_Type', });
lyr_trees_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Namee': 'TextEdit', 'Book1_Type': 'TextEdit', });
lyr_trees_1.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Namee': 'no label', 'Book1_Type': 'no label', });
lyr_trees_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});