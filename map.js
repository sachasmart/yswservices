
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[43.67459680375241,-79.53099641425088],[43.7284010320873,-79.42531296625681]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('Developed by the Office of Hon. Ahmed Hussen');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            map.setMaxBounds(map.getBounds());
        }
        map.createPane('pane_GoogleMaps_0');
        map.getPane('pane_GoogleMaps_0').style.zIndex = 400;
        var layer_GoogleMaps_0 = L.tileLayer('http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleMaps_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 22
        });
        layer_GoogleMaps_0;
        map.addLayer(layer_GoogleMaps_0);
        function pop_OfficeAdditions_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Agency Name</th>\
                        <td>' + (feature.properties['Agency Nam'] !== null ? autolinker.link(feature.properties['Agency Nam'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Phone Number</th>\
                        <td>' + (feature.properties['Office Pho'] !== null ? autolinker.link(feature.properties['Office Pho'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Website</th>\
                        <td>' + (feature.properties['Website'] !== null ? autolinker.link(feature.properties['Website'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Languages</th>\
                        <td>' + (feature.properties['Languages'] !== null ? autolinker.link(feature.properties['Languages'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Hours</th>\
                        <td>' + (feature.properties['Hours'] !== null ? autolinker.link(feature.properties['Hours'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Services</th>\
                        <td>' + (feature.properties['Programs'] !== null ? autolinker.link(feature.properties['Programs'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_OfficeAdditions_1_0() {
            return {
                pane: 'pane_OfficeAdditions_1',
                radius: 6.4,
                opacity: 1,
                color: 'rgba(128,17,25,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,30,42,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_OfficeAdditions_1');
        map.getPane('pane_OfficeAdditions_1').style.zIndex = 401;
        map.getPane('pane_OfficeAdditions_1').style['mix-blend-mode'] = 'normal';
        var layer_OfficeAdditions_1 = new L.geoJson(json_OfficeAdditions_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_OfficeAdditions_1',
            layerName: 'layer_OfficeAdditions_1',
            pane: 'pane_OfficeAdditions_1',
            onEachFeature: pop_OfficeAdditions_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_OfficeAdditions_1_0(feature));
            },
        });
        bounds_group.addLayer(layer_OfficeAdditions_1);
        map.addLayer(layer_OfficeAdditions_1);
        function pop_YouthServices_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Agency Name</th>\
                        <td>' + (feature.properties['AGENCY_NAM'] !== null ? autolinker.link(feature.properties['AGENCY_NAM'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Organization</th>\
                        <td>' + (feature.properties['ORGANIZATI'] !== null ? autolinker.link(feature.properties['ORGANIZATI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Neighbourhood</th>\
                        <td>' + (feature.properties['NEIGHBOURH'] !== null ? autolinker.link(feature.properties['NEIGHBOURH'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Phone</th>\
                        <td>' + (feature.properties['OFFICE_PHO'] !== null ? autolinker.link(feature.properties['OFFICE_PHO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Email</th>\
                        <td>' + (feature.properties['EMAIL'] !== null ? autolinker.link(feature.properties['EMAIL'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Website</th>\
                        <td>' + (feature.properties['WEBSITE'] !== null ? autolinker.link(feature.properties['WEBSITE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Languages</th>\
                        <td>' + (feature.properties['LANGUAGES'] !== null ? autolinker.link(feature.properties['LANGUAGES'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Accessibility</th>\
                        <td>' + (feature.properties['ACCESSIBIL'] !== null ? autolinker.link(feature.properties['ACCESSIBIL'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Hours</th>\
                        <td>' + (feature.properties['HOURS'] !== null ? autolinker.link(feature.properties['HOURS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_YouthServices_2_0() {
            return {
                pane: 'pane_YouthServices_2',
                radius: 6.399999999999999,
                opacity: 1,
                color: 'rgba(128,17,25,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,30,42,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_YouthServices_2');
        map.getPane('pane_YouthServices_2').style.zIndex = 402;
        map.getPane('pane_YouthServices_2').style['mix-blend-mode'] = 'normal';
        var layer_YouthServices_2 = new L.geoJson(json_YouthServices_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_YouthServices_2',
            layerName: 'layer_YouthServices_2',
            pane: 'pane_YouthServices_2',
            onEachFeature: pop_YouthServices_2,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_YouthServices_2_0(feature));
            },
        });
        bounds_group.addLayer(layer_YouthServices_2);
        map.addLayer(layer_YouthServices_2);
        setBounds();
    