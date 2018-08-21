var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 2100 - margin.left - margin.right,
    height = 1600 - margin.top - margin.bottom;


var canvas = d3.select(".MAP").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

// GEOJSON data of NYC
var NYCGJ = {
"type": "FeatureCollection",
"name": "NYC",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "name": "Queens"}, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.940573712483996, 40.543483273001094 ], [ -73.940247, 40.554582 ], [ -73.9387793935351, 40.555822933053697 ], [ -73.935354, 40.557322 ], [ -73.931367, 40.558176 ], [ -73.928785, 40.559926 ], [ -73.928326, 40.560145 ], [ -73.926157, 40.561553 ], [ -73.921078, 40.56208 ], [ -73.917661, 40.562826 ], [ -73.913867, 40.564608 ], [ -73.911883, 40.56499 ], [ -73.912145, 40.565779 ], [ -73.907914, 40.564069 ], [ -73.906839, 40.562856 ], [ -73.902939, 40.563475 ], [ -73.900058, 40.563387 ], [ -73.89581, 40.565633 ], [ -73.895369, 40.566953 ], [ -73.89261, 40.568587 ], [ -73.889595, 40.567942 ], [ -73.883501, 40.568465 ], [ -73.883904, 40.568906 ], [ -73.878693, 40.568666 ], [ -73.875859, 40.56958 ], [ -73.862883, 40.57606 ], [ -73.853055, 40.581255 ], [ -73.850444, 40.58213 ], [ -73.845181, 40.581581 ], [ -73.839354, 40.581857 ], [ -73.838665, 40.582711 ], [ -73.835841, 40.582879 ], [ -73.828525, 40.584854 ], [ -73.828048, 40.58608 ], [ -73.823262, 40.587468 ], [ -73.82146, 40.58677 ], [ -73.819322, 40.587964 ], [ -73.819133, 40.588048 ], [ -73.818001, 40.588601 ], [ -73.818894, 40.589567 ], [ -73.820712, 40.595171 ], [ -73.821358, 40.594691 ], [ -73.824803, 40.595083 ], [ -73.832326, 40.594619 ], [ -73.834847, 40.595543 ], [ -73.834201, 40.596657 ], [ -73.83159, 40.597942 ], [ -73.828345, 40.597646 ], [ -73.826048, 40.599461 ], [ -73.8243, 40.598332 ], [ -73.82441, 40.600342 ], [ -73.822945, 40.602583 ], [ -73.822483, 40.605583 ], [ -73.820032, 40.608924 ], [ -73.819952, 40.611006 ], [ -73.82086, 40.612265 ], [ -73.820473, 40.610195 ], [ -73.821631, 40.608496 ], [ -73.821843, 40.609878 ], [ -73.823825, 40.611499 ], [ -73.823998, 40.612512 ], [ -73.820781, 40.615244 ], [ -73.817571, 40.614163 ], [ -73.816527, 40.614947 ], [ -73.814796, 40.613194 ], [ -73.816156, 40.612942 ], [ -73.814771, 40.608851 ], [ -73.815708, 40.606439 ], [ -73.814447, 40.600543 ], [ -73.811576, 40.598141 ], [ -73.809661, 40.593561 ], [ -73.804284, 40.591311 ], [ -73.804164, 40.591846 ], [ -73.80803, 40.593669 ], [ -73.807104, 40.595289 ], [ -73.80606, 40.595558 ], [ -73.80401, 40.594133 ], [ -73.804044, 40.59324 ], [ -73.802438, 40.59264 ], [ -73.803243, 40.594087 ], [ -73.805112, 40.597151 ], [ -73.80285, 40.598916 ], [ -73.796768, 40.599384 ], [ -73.794096, 40.599513 ], [ -73.793012, 40.600019 ], [ -73.792242, 40.60001 ], [ -73.791413, 40.600396 ], [ -73.787823, 40.603124 ], [ -73.787379, 40.603238 ], [ -73.786639, 40.603256 ], [ -73.78789, 40.601041 ], [ -73.789541, 40.599944 ], [ -73.791101, 40.596806 ], [ -73.790651, 40.594783 ], [ -73.789179, 40.595197 ], [ -73.789148, 40.597509 ], [ -73.783989, 40.602104 ], [ -73.783137, 40.60359 ], [ -73.78395, 40.60488 ], [ -73.779357, 40.609254 ], [ -73.775264, 40.609718 ], [ -73.774129, 40.608747 ], [ -73.774256, 40.607457 ], [ -73.776036, 40.602525 ], [ -73.77703, 40.601666 ], [ -73.776673, 40.601186 ], [ -73.776354, 40.600948 ], [ -73.774972, 40.601744 ], [ -73.774204, 40.598995 ], [ -73.77305, 40.597876 ], [ -73.769422, 40.598249 ], [ -73.76819, 40.597825 ], [ -73.770982, 40.598894 ], [ -73.771177, 40.600405 ], [ -73.770186, 40.602749 ], [ -73.770565, 40.60484 ], [ -73.769088, 40.609578 ], [ -73.773971, 40.612113 ], [ -73.773448, 40.613646 ], [ -73.766819, 40.614291 ], [ -73.763454, 40.61369 ], [ -73.760021, 40.611349 ], [ -73.754732, 40.610405 ], [ -73.748216, 40.612011 ], [ -73.746942, 40.611775 ], [ -73.745633, 40.611756 ], [ -73.74307, 40.607886 ], [ -73.738151, 40.60271 ], [ -73.738309, 40.598208 ], [ -73.737637, 40.594415 ], [ -73.737521, 40.59392 ], [ -73.737185, 40.592965 ], [ -73.744469, 40.592904 ], [ -73.747749, 40.591503 ], [ -73.750978, 40.589049 ], [ -73.751158, 40.591806 ], [ -73.751885, 40.591299 ], [ -73.755266524050398, 40.590862400834602 ], [ -73.755269, 40.590895 ], [ -73.756028216284506, 40.590889747778895 ], [ -73.767535621142599, 40.590810140115195 ], [ -73.769643677806698, 40.590795556682401 ], [ -73.774928, 40.590759 ], [ -73.801434586431796, 40.585658064731 ], [ -73.806834, 40.584619 ], [ -73.809865933052606, 40.583803344694793 ], [ -73.815495604296999, 40.582288841855501 ], [ -73.834408, 40.577201 ], [ -73.837038958705392, 40.576283881537293 ], [ -73.866559334229493, 40.565993457227599 ], [ -73.872586517435295, 40.563892458460494 ], [ -73.878681, 40.561768 ], [ -73.882370720573888, 40.560844991662194 ], [ -73.89623, 40.557378 ], [ -73.905141, 40.556401 ], [ -73.917774, 40.55285 ], [ -73.940591, 40.542896 ], [ -73.940573712483996, 40.543483273001094 ] ] ], [ [ [ -73.96262, 40.739033 ], [ -73.961381, 40.742802 ], [ -73.959124, 40.746119 ], [ -73.957732, 40.747775 ], [ -73.956842, 40.748828 ], [ -73.951367, 40.754524 ], [ -73.95084, 40.755219 ], [ -73.944715, 40.762879 ], [ -73.941312, 40.766918 ], [ -73.935323, 40.770485 ], [ -73.934956, 40.77173 ], [ -73.937466, 40.772504 ], [ -73.937858, 40.774088 ], [ -73.93638, 40.776921 ], [ -73.934412, 40.778093 ], [ -73.931847, 40.777892 ], [ -73.929881, 40.776222 ], [ -73.928605, 40.776593 ], [ -73.924234, 40.779101 ], [ -73.919965, 40.782635 ], [ -73.917171, 40.784193 ], [ -73.916833, 40.785191 ], [ -73.9126, 40.789376 ], [ -73.910296, 40.790657 ], [ -73.910673, 40.793116 ], [ -73.912456, 40.796096 ], [ -73.892182, 40.790394 ], [ -73.89057, 40.790108 ], [ -73.888307, 40.787006 ], [ -73.885303, 40.786685 ], [ -73.878307, 40.785357 ], [ -73.876973, 40.785778 ], [ -73.873088, 40.785855 ], [ -73.871631, 40.786798 ], [ -73.870809, 40.787897 ], [ -73.870973, 40.789057 ], [ -73.870207, 40.790909 ], [ -73.862965, 40.79767 ], [ -73.853072, 40.800113 ], [ -73.846654, 40.801024 ], [ -73.844076, 40.801023 ], [ -73.835409, 40.802199 ], [ -73.830676, 40.803108 ], [ -73.823438, 40.80481 ], [ -73.817418, 40.80579 ], [ -73.811299, 40.805397 ], [ -73.793559, 40.80038 ], [ -73.787918, 40.800362 ], [ -73.786422499002299, 40.801457355595097 ], [ -73.781738032220687, 40.795385340308499 ], [ -73.781369, 40.794907 ], [ -73.77885, 40.797193 ], [ -73.775558, 40.795613 ], [ -73.770293, 40.788376 ], [ -73.774138909725394, 40.786320279879497 ], [ -73.774334, 40.786216 ], [ -73.774078759154705, 40.785969423938901 ], [ -73.767545145468404, 40.779657609991901 ], [ -73.767441, 40.779557 ], [ -73.767034859614597, 40.778480439557192 ], [ -73.76554, 40.774518 ], [ -73.763502104127298, 40.772864410561596 ], [ -73.758885, 40.769118 ], [ -73.755798218862296, 40.771789252907595 ], [ -73.755557, 40.771998 ], [ -73.753656, 40.773438 ], [ -73.755881, 40.776573 ], [ -73.75547359639701, 40.777584 ], [ -73.755426369416796, 40.777701196992304 ], [ -73.754606, 40.779737 ], [ -73.753001862574493, 40.781125613100492 ], [ -73.751451010087408, 40.782468100375205 ], [ -73.749664, 40.782106 ], [ -73.733893, 40.772527 ], [ -73.723777, 40.766278 ], [ -73.721143, 40.764873 ], [ -73.713325, 40.75973 ], [ -73.712761, 40.759415 ], [ -73.707825, 40.756216 ], [ -73.705271, 40.75477 ], [ -73.701633, 40.752493 ], [ -73.70002, 40.73939 ], [ -73.700016, 40.739272 ], [ -73.700811, 40.738439 ], [ -73.707647, 40.727796 ], [ -73.71047, 40.727173 ], [ -73.716684, 40.726375 ], [ -73.725672, 40.724038 ], [ -73.729652, 40.722535 ], [ -73.730326, 40.722157 ], [ -73.729661, 40.720483 ], [ -73.729176, 40.719167 ], [ -73.726971, 40.710715 ], [ -73.726895, 40.7058 ], [ -73.726713, 40.701448 ], [ -73.725534, 40.698924 ], [ -73.726503, 40.696886 ], [ -73.725926, 40.686225 ], [ -73.725798, 40.684354 ], [ -73.725861, 40.683223 ], [ -73.72563, 40.679588 ], [ -73.72807, 40.671608 ], [ -73.728224, 40.665965 ], [ -73.727875, 40.664695 ], [ -73.727834, 40.663976 ], [ -73.728331, 40.663044 ], [ -73.726444, 40.659162 ], [ -73.724874, 40.653447 ], [ -73.725203, 40.652319 ], [ -73.731055, 40.650231 ], [ -73.735135, 40.649732 ], [ -73.741437, 40.646889 ], [ -73.741428, 40.640502 ], [ -73.742283, 40.640121 ], [ -73.739471, 40.635706 ], [ -73.73996, 40.635144 ], [ -73.74265, 40.635045 ], [ -73.74127, 40.637257 ], [ -73.742361, 40.638093 ], [ -73.744177, 40.637356 ], [ -73.746022, 40.635212 ], [ -73.748001, 40.634631 ], [ -73.767425, 40.626606 ], [ -73.768709, 40.624386 ], [ -73.768761, 40.624352 ], [ -73.768553, 40.623155 ], [ -73.767571, 40.621477 ], [ -73.769745, 40.621126 ], [ -73.77139, 40.620153 ], [ -73.770911, 40.623078 ], [ -73.775119, 40.619234 ], [ -73.77186, 40.623765 ], [ -73.775381, 40.627056 ], [ -73.7785, 40.627584 ], [ -73.785708, 40.632095 ], [ -73.787331, 40.632517 ], [ -73.789427, 40.634263 ], [ -73.790793, 40.634282 ], [ -73.798119, 40.631038 ], [ -73.791308, 40.634532 ], [ -73.792353, 40.635914 ], [ -73.794514, 40.636453 ], [ -73.797257, 40.638008 ], [ -73.806702, 40.641776 ], [ -73.808646, 40.642815 ], [ -73.816295, 40.645964 ], [ -73.818634, 40.646587 ], [ -73.821765, 40.649797 ], [ -73.823484, 40.65537 ], [ -73.822392, 40.659383 ], [ -73.821483, 40.66 ], [ -73.818812, 40.661076 ], [ -73.811514, 40.660767 ], [ -73.819334, 40.661944 ], [ -73.823522, 40.660075 ], [ -73.824969, 40.655659 ], [ -73.822907, 40.648093 ], [ -73.824678, 40.649731 ], [ -73.82641, 40.648261 ], [ -73.828872, 40.649357 ], [ -73.830937, 40.651626 ], [ -73.831292, 40.653471 ], [ -73.832175, 40.653361 ], [ -73.831046, 40.649089 ], [ -73.831669, 40.647972 ], [ -73.835567, 40.648457 ], [ -73.836827, 40.652667 ], [ -73.837757, 40.656 ], [ -73.838554, 40.655892 ], [ -73.83763, 40.652508 ], [ -73.836331, 40.645321 ], [ -73.847175, 40.644242 ], [ -73.850169, 40.644625 ], [ -73.852698, 40.646917 ], [ -73.85202, 40.648667 ], [ -73.849873, 40.651506 ], [ -73.852302, 40.65053 ], [ -73.854911, 40.650952 ], [ -73.856537, 40.649916 ], [ -73.859755, 40.654104 ], [ -73.860483, 40.654659 ], [ -73.863171, 40.658277 ], [ -73.86036, 40.659646 ], [ -73.857615, 40.660119 ], [ -73.85843, 40.663453 ], [ -73.855685, 40.663867 ], [ -73.857633, 40.671656 ], [ -73.860389, 40.671269 ], [ -73.861318, 40.675021 ], [ -73.862346, 40.679165 ], [ -73.863349, 40.679352 ], [ -73.864101, 40.682373 ], [ -73.866295, 40.683189 ], [ -73.868717, 40.694622 ], [ -73.868917, 40.69515 ], [ -73.874021, 40.694191 ], [ -73.879456, 40.691231 ], [ -73.883777, 40.687863 ], [ -73.884517, 40.686691 ], [ -73.889607, 40.684214 ], [ -73.892523, 40.683424 ], [ -73.894403, 40.685084 ], [ -73.896466, 40.682336 ], [ -73.901162, 40.687878 ], [ -73.900425, 40.688184 ], [ -73.902073, 40.691999 ], [ -73.9058, 40.694128 ], [ -73.90426, 40.6957 ], [ -73.911808, 40.699938 ], [ -73.910679, 40.701046 ], [ -73.912904, 40.702362 ], [ -73.911807, 40.703435 ], [ -73.921892, 40.709396 ], [ -73.920745, 40.71053 ], [ -73.92404, 40.714008 ], [ -73.924327, 40.715568 ], [ -73.922711, 40.716478 ], [ -73.92418, 40.72002 ], [ -73.927801, 40.726494 ], [ -73.929058, 40.727688 ], [ -73.934425, 40.728818 ], [ -73.937525, 40.729815 ], [ -73.93966, 40.731487 ], [ -73.940318, 40.733195 ], [ -73.942163, 40.735678 ], [ -73.947064, 40.737516 ], [ -73.95254, 40.739228 ], [ -73.953907, 40.739421 ], [ -73.95706, 40.739167 ], [ -73.962478, 40.736802 ], [ -73.96262, 40.739033 ] ] ] ] } },
{ "type": "Feature", "properties": { "name": "Manhattan"}, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -74.00020638065601, 40.6992102540544 ], [ -73.998763, 40.69711 ], [ -74.001039, 40.697899 ], [ -74.00020638065601, 40.6992102540544 ] ] ], [ [ [ -74.006512105830794, 40.688728249233797 ], [ -74.0060272619275, 40.689552220526302 ], [ -74.005167870788398, 40.691012718684298 ], [ -74.004744196431304, 40.691732734972497 ], [ -74.004320454192893, 40.692452866622098 ], [ -74.003890244212997, 40.693183989919198 ], [ -74.003392228350492, 40.694030346387898 ], [ -74.00296338600829, 40.694759145444003 ], [ -74.002408, 40.695703 ], [ -74.000617379114288, 40.6951221683874 ], [ -74.001277, 40.693298 ], [ -74.001744, 40.692407 ], [ -74.001969, 40.691843 ], [ -74.000699, 40.690612 ], [ -74.001963, 40.690136 ], [ -74.002993, 40.690427 ], [ -74.00382, 40.68893 ], [ -74.004593, 40.688215 ], [ -74.007374912135404, 40.687261947149402 ], [ -74.006512105830794, 40.688728249233797 ] ] ], [ [ [ -74.021117, 40.727417 ], [ -74.020388368307096, 40.730316820990794 ], [ -74.016923327560789, 40.7441070499749 ], [ -74.013784, 40.756601 ], [ -74.009184, 40.763601 ], [ -74.001394633740091, 40.7744220068627 ], [ -74.000222888101092, 40.776049798800898 ], [ -73.984697580911003, 40.797617593926397 ], [ -73.978854742559392, 40.805734479407299 ], [ -73.968082, 40.8207 ], [ -73.963182, 40.8269 ], [ -73.958611432707386, 40.837382496725496 ], [ -73.953982, 40.848 ], [ -73.948281, 40.858399 ], [ -73.948277888107484, 40.858403972926197 ], [ -73.938081, 40.874699 ], [ -73.933407922938102, 40.882074964842694 ], [ -73.924974, 40.879144 ], [ -73.922602, 40.878779 ], [ -73.919808, 40.876577 ], [ -73.9152, 40.875581 ], [ -73.911405, 40.879278 ], [ -73.909505, 40.878878 ], [ -73.907105, 40.876277 ], [ -73.907, 40.873455 ], [ -73.907104, 40.872978 ], [ -73.908526, 40.871792 ], [ -73.908605, 40.871678 ], [ -73.909804, 40.868282 ], [ -73.91434, 40.862521 ], [ -73.91929, 40.857475 ], [ -73.923904, 40.850488 ], [ -73.928159, 40.845492 ], [ -73.929503, 40.842381 ], [ -73.933006, 40.835679 ], [ -73.933459, 40.833184 ], [ -73.933059, 40.828156 ], [ -73.932327, 40.819503 ], [ -73.932401, 40.814151 ], [ -73.93257, 40.809256 ], [ -73.931801, 40.807876 ], [ -73.927525, 40.802764 ], [ -73.923022, 40.802425 ], [ -73.921742, 40.801689 ], [ -73.919861, 40.799353 ], [ -73.913624, 40.796786 ], [ -73.912456, 40.796096 ], [ -73.910673, 40.793116 ], [ -73.910296, 40.790657 ], [ -73.9126, 40.789376 ], [ -73.916833, 40.785191 ], [ -73.917171, 40.784193 ], [ -73.919965, 40.782635 ], [ -73.924234, 40.779101 ], [ -73.928605, 40.776593 ], [ -73.929881, 40.776222 ], [ -73.931847, 40.777892 ], [ -73.934412, 40.778093 ], [ -73.93638, 40.776921 ], [ -73.937858, 40.774088 ], [ -73.937466, 40.772504 ], [ -73.934956, 40.77173 ], [ -73.935323, 40.770485 ], [ -73.941312, 40.766918 ], [ -73.944715, 40.762879 ], [ -73.95084, 40.755219 ], [ -73.951367, 40.754524 ], [ -73.956842, 40.748828 ], [ -73.957732, 40.747775 ], [ -73.959124, 40.746119 ], [ -73.961381, 40.742802 ], [ -73.96262, 40.739033 ], [ -73.962478, 40.736802 ], [ -73.962229, 40.732649 ], [ -73.96108, 40.729148 ], [ -73.961611, 40.724951 ], [ -73.961543, 40.723876 ], [ -73.962645, 40.722747 ], [ -73.967578, 40.716496 ], [ -73.96905, 40.712482 ], [ -73.969941, 40.70931 ], [ -73.969613, 40.707634 ], [ -73.970318, 40.707332 ], [ -73.97306, 40.709179 ], [ -73.974431, 40.708169 ], [ -73.97482, 40.707883 ], [ -73.975476, 40.707492 ], [ -73.979233, 40.705769 ], [ -73.986866, 40.705161 ], [ -73.992722, 40.705544 ], [ -73.994498, 40.704318 ], [ -73.995138, 40.70298 ], [ -73.996698, 40.700877 ], [ -73.998137, 40.701525 ], [ -74.003776809385897, 40.703554339596394 ], [ -74.004051, 40.703653 ], [ -74.006784742137199, 40.701975625768 ], [ -74.007229416096493, 40.701702781950395 ], [ -74.009043, 40.70059 ], [ -74.009889800271708, 40.700493792942005 ], [ -74.013796, 40.70005 ], [ -74.014251915132704, 40.700314685749497 ], [ -74.0168, 40.701794 ], [ -74.019485432935198, 40.706907749951007 ], [ -74.019526, 40.706985 ], [ -74.024543, 40.709436 ], [ -74.021117, 40.727417 ] ] ], [ [ [ -74.027106, 40.685092 ], [ -74.025442, 40.687976 ], [ -74.0195, 40.693382 ], [ -74.01546, 40.693382 ], [ -74.014959834192595, 40.692975765571695 ], [ -74.012132, 40.690679 ], [ -74.013083, 40.687795 ], [ -74.016173, 40.687075 ], [ -74.019976, 40.685813 ], [ -74.025442, 40.684191 ], [ -74.026029126327288, 40.684508909147198 ], [ -74.027106, 40.685092 ] ] ], [ [ [ -74.04692, 40.691139 ], [ -74.04086, 40.700117 ], [ -74.040018, 40.700678 ], [ -74.039401, 40.700454 ], [ -74.037998, 40.698995 ], [ -74.043441, 40.68968 ], [ -74.044451, 40.688445 ], [ -74.046359, 40.689175 ], [ -74.047313, 40.690466 ], [ -74.04692, 40.691139 ] ] ] ] } },
{ "type": "Feature", "properties": { "name": "statan Island"}, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -74.161704, 40.64586 ], [ -74.160604785787186, 40.645431021175497 ], [ -74.158583, 40.644642 ], [ -74.157552, 40.643239 ], [ -74.159192, 40.641448 ], [ -74.161255, 40.64179 ], [ -74.161704, 40.64586 ] ] ], [ [ [ -74.256088, 40.507903 ], [ -74.252702, 40.513895 ], [ -74.248511002776098, 40.516887715360198 ], [ -74.247584242534401, 40.517549498096493 ], [ -74.247485856540891, 40.517619753756001 ], [ -74.246140673730494, 40.5185803244851 ], [ -74.242888, 40.520903 ], [ -74.242859764405594, 40.521156289890897 ], [ -74.241846579993094, 40.530245150061901 ], [ -74.241732, 40.531273 ], [ -74.2441961785606, 40.536189595900197 ], [ -74.245226767323402, 40.538245854552599 ], [ -74.247647324793007, 40.543075416468895 ], [ -74.247808, 40.543396 ], [ -74.229002, 40.555041 ], [ -74.216997, 40.554991 ], [ -74.216495746340897, 40.555475928048899 ], [ -74.213171900843903, 40.558691517366896 ], [ -74.211221167830502, 40.560578715868097 ], [ -74.210887, 40.560902 ], [ -74.208703704504401, 40.569987295495601 ], [ -74.2074652824152, 40.5751407118114 ], [ -74.2064130996187, 40.579519134998101 ], [ -74.206268545132488, 40.580120666135301 ], [ -74.204339037514686, 40.588149880185398 ], [ -74.204054, 40.589336 ], [ -74.19682, 40.597037 ], [ -74.195407, 40.601806 ], [ -74.196096, 40.616169 ], [ -74.200523505646387, 40.616835204912498 ], [ -74.200994, 40.616906 ], [ -74.201812, 40.619507 ], [ -74.201495790244493, 40.622571821989602 ], [ -74.20058, 40.631448 ], [ -74.198847308337704, 40.633102116110102 ], [ -74.1964546854975, 40.635386236286699 ], [ -74.191802543462501, 40.639827409089897 ], [ -74.1894, 40.642121 ], [ -74.189116628558494, 40.642225621880897 ], [ -74.1868204209173, 40.643073391017602 ], [ -74.1824082385683, 40.644702386563999 ], [ -74.180191, 40.645521 ], [ -74.178690407758907, 40.645419748116097 ], [ -74.174085, 40.645109 ], [ -74.173989374267691, 40.645037660946798 ], [ -74.170187, 40.642201 ], [ -74.154499431152303, 40.639179953716102 ], [ -74.152973, 40.638886 ], [ -74.148861213446693, 40.639301731003897 ], [ -74.143096173175906, 40.639884617772999 ], [ -74.142319524240406, 40.639963142530405 ], [ -74.129277009453304, 40.641281833978802 ], [ -74.120568259557189, 40.6421623508271 ], [ -74.120186, 40.642201 ], [ -74.104733628089591, 40.645135488004094 ], [ -74.101469556071692, 40.645755352723704 ], [ -74.08730452241511, 40.648445368313794 ], [ -74.086485, 40.648601 ], [ -74.079374456361904, 40.648265628637006 ], [ -74.075884, 40.648101 ], [ -74.072818717360292, 40.644688245961397 ], [ -74.0704037402149, 40.641999514129999 ], [ -74.0697, 40.641216 ], [ -74.068198070458692, 40.628818293305898 ], [ -74.068168165998998, 40.628571446359899 ], [ -74.067598, 40.623865 ], [ -74.063711600704991, 40.617506801456798 ], [ -74.062251270586501, 40.615117682859399 ], [ -74.060345, 40.611999 ], [ -74.056887905417014, 40.608014722434199 ], [ -74.053125, 40.603678 ], [ -74.057891087587194, 40.595673427085799 ], [ -74.059184, 40.593502 ], [ -74.068184, 40.584102 ], [ -74.090797, 40.566463 ], [ -74.090863397634806, 40.566400196200604 ], [ -74.093740116149093, 40.563679182824004 ], [ -74.099217663786291, 40.558498112685399 ], [ -74.09951794921389, 40.5582140804934 ], [ -74.10389629455949, 40.554072717272298 ], [ -74.105272695198195, 40.552770815633096 ], [ -74.106468, 40.553352 ], [ -74.109127, 40.55191 ], [ -74.112545084307698, 40.5475780974811 ], [ -74.112585, 40.547603 ], [ -74.112828868387396, 40.547471176348701 ], [ -74.112901977236788, 40.547431657182003 ], [ -74.114392, 40.548035 ], [ -74.117916, 40.545992 ], [ -74.119078, 40.544597 ], [ -74.122761, 40.543596 ], [ -74.129336299842592, 40.536480893858695 ], [ -74.137241, 40.530076 ], [ -74.140162703241202, 40.533655550775897 ], [ -74.13967, 40.535087 ], [ -74.134142, 40.535259 ], [ -74.128379, 40.540372 ], [ -74.127459, 40.542533 ], [ -74.129467, 40.545379 ], [ -74.132199, 40.546225 ], [ -74.135683, 40.546373 ], [ -74.139699, 40.544151 ], [ -74.141474, 40.542254 ], [ -74.142169, 40.537293 ], [ -74.14517, 40.535756 ], [ -74.145060690027705, 40.535060553991904 ], [ -74.148697, 40.534489 ], [ -74.149788648682105, 40.533797945633701 ], [ -74.159960361335592, 40.527358871820198 ], [ -74.160859, 40.52679 ], [ -74.176586956968805, 40.520190080181301 ], [ -74.177986, 40.519603 ], [ -74.182157, 40.520634 ], [ -74.193728534530294, 40.514833903467697 ], [ -74.199829402846291, 40.511775914480097 ], [ -74.201197, 40.512934 ], [ -74.207319, 40.511903 ], [ -74.20997, 40.510475 ], [ -74.210760565608695, 40.509237375970002 ], [ -74.219787, 40.502603 ], [ -74.221761940075694, 40.502411568954194 ], [ -74.226294434104091, 40.501972234068795 ], [ -74.228144853796096, 40.501792872790396 ], [ -74.232474895919992, 40.501373161578904 ], [ -74.23324, 40.501299 ], [ -74.246688, 40.496103 ], [ -74.250188, 40.496703 ], [ -74.254588, 40.502303 ], [ -74.255447037963691, 40.505510075064699 ], [ -74.256088, 40.507903 ] ] ] ] } },
{ "type": "Feature", "properties": { "name": "Bronx"}, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.773361, 40.859449 ], [ -73.772442895165398, 40.859736949576096 ], [ -73.770552, 40.86033 ], [ -73.768867, 40.858341 ], [ -73.765258, 40.855361 ], [ -73.7662834427055, 40.854797282663498 ], [ -73.768043, 40.85383 ], [ -73.768730307094586, 40.850982011958592 ], [ -73.769414, 40.848149 ], [ -73.767179, 40.844866 ], [ -73.767228242299709, 40.844861891488996 ], [ -73.769648, 40.84466 ], [ -73.771969925614897, 40.847033504858494 ], [ -73.772349, 40.847421 ], [ -73.773434, 40.852032 ], [ -73.773361, 40.859449 ] ] ], [ [ [ -73.933459, 40.833184 ], [ -73.933006, 40.835679 ], [ -73.929503, 40.842381 ], [ -73.928159, 40.845492 ], [ -73.923904, 40.850488 ], [ -73.91929, 40.857475 ], [ -73.91434, 40.862521 ], [ -73.909804, 40.868282 ], [ -73.908605, 40.871678 ], [ -73.908526, 40.871792 ], [ -73.907104, 40.872978 ], [ -73.907, 40.873455 ], [ -73.907105, 40.876277 ], [ -73.909505, 40.878878 ], [ -73.911405, 40.879278 ], [ -73.9152, 40.875581 ], [ -73.919808, 40.876577 ], [ -73.922602, 40.878779 ], [ -73.924974, 40.879144 ], [ -73.933407922938102, 40.882074964842694 ], [ -73.933406, 40.882078 ], [ -73.929006, 40.889578 ], [ -73.926757656972995, 40.895355378598595 ], [ -73.919705, 40.913478 ], [ -73.919686401075595, 40.913535213152798 ], [ -73.918405, 40.917477 ], [ -73.917905, 40.917577 ], [ -73.910516, 40.915282 ], [ -73.897253, 40.911655 ], [ -73.896634, 40.911324 ], [ -73.886124, 40.908016 ], [ -73.87835, 40.905983 ], [ -73.878189, 40.905983 ], [ -73.877855, 40.905922 ], [ -73.867876, 40.902983 ], [ -73.864669, 40.901793 ], [ -73.85931, 40.900479 ], [ -73.859604, 40.902178 ], [ -73.858302, 40.902077 ], [ -73.857199, 40.902878 ], [ -73.857321, 40.905017 ], [ -73.856324, 40.906166 ], [ -73.854104, 40.906679 ], [ -73.854881, 40.908217 ], [ -73.852678, 40.909899 ], [ -73.851123, 40.910009 ], [ -73.853528, 40.907465 ], [ -73.851057, 40.906458 ], [ -73.850225, 40.907368 ], [ -73.84532, 40.905582 ], [ -73.844728, 40.904732 ], [ -73.844301, 40.904078 ], [ -73.841318, 40.903987 ], [ -73.84065, 40.901414 ], [ -73.839221, 40.899475 ], [ -73.839696, 40.897385 ], [ -73.838407, 40.894061 ], [ -73.824009, 40.889978 ], [ -73.824017, 40.88975 ], [ -73.823244, 40.891199 ], [ -73.819719, 40.890206 ], [ -73.815165, 40.888999 ], [ -73.813617, 40.888696 ], [ -73.792942, 40.883411 ], [ -73.793702, 40.882897 ], [ -73.799251, 40.88463 ], [ -73.805551, 40.885932 ], [ -73.80692, 40.885769 ], [ -73.813129, 40.886722 ], [ -73.815413, 40.886655 ], [ -73.81936, 40.885726 ], [ -73.820392, 40.886859 ], [ -73.823752, 40.887832 ], [ -73.820978, 40.885979 ], [ -73.820322, 40.885438 ], [ -73.821193, 40.880586 ], [ -73.823941, 40.874073 ], [ -73.821638, 40.868771 ], [ -73.8204, 40.868242 ], [ -73.819938, 40.863737 ], [ -73.818807, 40.862482 ], [ -73.817557, 40.863588 ], [ -73.816752, 40.864544 ], [ -73.815089, 40.865244 ], [ -73.815104, 40.863057 ], [ -73.813713, 40.864592 ], [ -73.804792, 40.861873 ], [ -73.802733, 40.859876 ], [ -73.794032, 40.856551 ], [ -73.793687, 40.859176 ], [ -73.791904, 40.860829 ], [ -73.790771261204398, 40.8608117720335 ], [ -73.789584855914796, 40.859421277602799 ], [ -73.788786, 40.858485 ], [ -73.78806, 40.854131 ], [ -73.784754, 40.851793 ], [ -73.784550322497395, 40.851442879952003 ], [ -73.782174, 40.847358 ], [ -73.782154117968489, 40.846684956414599 ], [ -73.782093, 40.844616 ], [ -73.782227181923389, 40.842734952788199 ], [ -73.782254, 40.842359 ], [ -73.781206, 40.838891 ], [ -73.782577, 40.837601 ], [ -73.783867, 40.836795 ], [ -73.785399, 40.838004 ], [ -73.788221, 40.842036 ], [ -73.791044, 40.846552 ], [ -73.789512, 40.85139 ], [ -73.792253, 40.855825 ], [ -73.792471062794007, 40.855790554049499 ], [ -73.793785, 40.855583 ], [ -73.797252, 40.852196 ], [ -73.799543, 40.848027 ], [ -73.800110788222995, 40.848140661682699 ], [ -73.800407294490896, 40.8482000172664 ], [ -73.801726, 40.848464 ], [ -73.803701863279088, 40.851968729710599 ], [ -73.80547, 40.855105 ], [ -73.804757, 40.858521 ], [ -73.805005557520587, 40.858546030056097 ], [ -73.807589085284391, 40.858806194563002 ], [ -73.807720435035705, 40.858819421648697 ], [ -73.808322, 40.85888 ], [ -73.8126, 40.8587 ], [ -73.8126, 40.854386 ], [ -73.81657942773289, 40.8535006979629 ], [ -73.816641, 40.853487 ], [ -73.816152460105499, 40.851023059662595 ], [ -73.815928, 40.849891 ], [ -73.815768413957898, 40.849729571399294 ], [ -73.81281, 40.846737 ], [ -73.814636535800091, 40.839066078303894 ], [ -73.815574, 40.835129 ], [ -73.815244096294194, 40.831504529475694 ], [ -73.815205, 40.831075 ], [ -73.813123260354587, 40.827489084181302 ], [ -73.811889, 40.825363 ], [ -73.808084, 40.826335 ], [ -73.807760836619295, 40.825629133602696 ], [ -73.804518, 40.818546 ], [ -73.800479, 40.818061 ], [ -73.797600061769202, 40.815806883762093 ], [ -73.797332, 40.815597 ], [ -73.802618, 40.812305 ], [ -73.800792249458794, 40.810060728304201 ], [ -73.800716, 40.809967 ], [ -73.797239566859687, 40.809116686204398 ], [ -73.79119, 40.807637 ], [ -73.790915194144901, 40.807280796096599 ], [ -73.790871249173691, 40.807223834536401 ], [ -73.786422499002299, 40.801457355595097 ], [ -73.787918, 40.800362 ], [ -73.793559, 40.80038 ], [ -73.811299, 40.805397 ], [ -73.817418, 40.80579 ], [ -73.823438, 40.80481 ], [ -73.830676, 40.803108 ], [ -73.835409, 40.802199 ], [ -73.844076, 40.801023 ], [ -73.846654, 40.801024 ], [ -73.853072, 40.800113 ], [ -73.862965, 40.79767 ], [ -73.870207, 40.790909 ], [ -73.870973, 40.789057 ], [ -73.870809, 40.787897 ], [ -73.871631, 40.786798 ], [ -73.873088, 40.785855 ], [ -73.876973, 40.785778 ], [ -73.878307, 40.785357 ], [ -73.885303, 40.786685 ], [ -73.888307, 40.787006 ], [ -73.89057, 40.790108 ], [ -73.892182, 40.790394 ], [ -73.912456, 40.796096 ], [ -73.913624, 40.796786 ], [ -73.919861, 40.799353 ], [ -73.921742, 40.801689 ], [ -73.923022, 40.802425 ], [ -73.927525, 40.802764 ], [ -73.931801, 40.807876 ], [ -73.93257, 40.809256 ], [ -73.932401, 40.814151 ], [ -73.932327, 40.819503 ], [ -73.933059, 40.828156 ], [ -73.933459, 40.833184 ] ] ] ] } },
{ "type": "Feature", "properties": { "name": "Brooklyn"}, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -74.042412, 40.624847 ], [ -74.039575585777499, 40.633355546785701 ], [ -74.038768629408011, 40.6357762179167 ], [ -74.038336, 40.637074 ], [ -74.036798, 40.639381 ], [ -74.035859107913708, 40.640789338129501 ], [ -74.033516831552888, 40.644302752670498 ], [ -74.032066, 40.646479 ], [ -74.018272, 40.659019 ], [ -74.018660960539194, 40.662518936040797 ], [ -74.020467, 40.67877 ], [ -74.019431583534796, 40.679441264418294 ], [ -74.015145297025583, 40.6822200802061 ], [ -74.008681014542702, 40.686410899037696 ], [ -74.007379, 40.687255 ], [ -74.007374912135404, 40.687261947149402 ], [ -74.004593, 40.688215 ], [ -74.00382, 40.68893 ], [ -74.002993, 40.690427 ], [ -74.001963, 40.690136 ], [ -74.000699, 40.690612 ], [ -74.001969, 40.691843 ], [ -74.001744, 40.692407 ], [ -74.001277, 40.693298 ], [ -74.000617379114288, 40.6951221683874 ], [ -74.00025, 40.695003 ], [ -73.998763, 40.69711 ], [ -74.00020638065601, 40.6992102540544 ], [ -74.0000444533093, 40.699465266013299 ], [ -73.999496, 40.700329 ], [ -73.9975, 40.699653 ], [ -73.996698, 40.700877 ], [ -73.995138, 40.70298 ], [ -73.994498, 40.704318 ], [ -73.992722, 40.705544 ], [ -73.986866, 40.705161 ], [ -73.979233, 40.705769 ], [ -73.975476, 40.707492 ], [ -73.97482, 40.707883 ], [ -73.974431, 40.708169 ], [ -73.97306, 40.709179 ], [ -73.970318, 40.707332 ], [ -73.969613, 40.707634 ], [ -73.969941, 40.70931 ], [ -73.96905, 40.712482 ], [ -73.967578, 40.716496 ], [ -73.962645, 40.722747 ], [ -73.961543, 40.723876 ], [ -73.961611, 40.724951 ], [ -73.96108, 40.729148 ], [ -73.962229, 40.732649 ], [ -73.962478, 40.736802 ], [ -73.95706, 40.739167 ], [ -73.953907, 40.739421 ], [ -73.95254, 40.739228 ], [ -73.947064, 40.737516 ], [ -73.942163, 40.735678 ], [ -73.940318, 40.733195 ], [ -73.93966, 40.731487 ], [ -73.937525, 40.729815 ], [ -73.934425, 40.728818 ], [ -73.929058, 40.727688 ], [ -73.927801, 40.726494 ], [ -73.92418, 40.72002 ], [ -73.922711, 40.716478 ], [ -73.924327, 40.715568 ], [ -73.92404, 40.714008 ], [ -73.920745, 40.71053 ], [ -73.921892, 40.709396 ], [ -73.911807, 40.703435 ], [ -73.912904, 40.702362 ], [ -73.910679, 40.701046 ], [ -73.911808, 40.699938 ], [ -73.90426, 40.6957 ], [ -73.9058, 40.694128 ], [ -73.902073, 40.691999 ], [ -73.900425, 40.688184 ], [ -73.901162, 40.687878 ], [ -73.896466, 40.682336 ], [ -73.894403, 40.685084 ], [ -73.892523, 40.683424 ], [ -73.889607, 40.684214 ], [ -73.884517, 40.686691 ], [ -73.883777, 40.687863 ], [ -73.879456, 40.691231 ], [ -73.874021, 40.694191 ], [ -73.868917, 40.69515 ], [ -73.868717, 40.694622 ], [ -73.866295, 40.683189 ], [ -73.864101, 40.682373 ], [ -73.863349, 40.679352 ], [ -73.862346, 40.679165 ], [ -73.861318, 40.675021 ], [ -73.860389, 40.671269 ], [ -73.857633, 40.671656 ], [ -73.855685, 40.663867 ], [ -73.85843, 40.663453 ], [ -73.857615, 40.660119 ], [ -73.86036, 40.659646 ], [ -73.863171, 40.658277 ], [ -73.860483, 40.654659 ], [ -73.870893, 40.648807 ], [ -73.873384, 40.646821 ], [ -73.874892, 40.645095 ], [ -73.876012, 40.643419 ], [ -73.878814, 40.637942 ], [ -73.8763, 40.635192 ], [ -73.87635, 40.633474 ], [ -73.878038, 40.634486 ], [ -73.883371, 40.62938 ], [ -73.887269, 40.626157 ], [ -73.889206, 40.625584 ], [ -73.88969, 40.622833 ], [ -73.89149, 40.621851 ], [ -73.898261, 40.622989 ], [ -73.896207, 40.622116 ], [ -73.896645, 40.621109 ], [ -73.887335, 40.609566 ], [ -73.888751, 40.608911 ], [ -73.89153, 40.609288 ], [ -73.898551, 40.605325 ], [ -73.903092, 40.612135 ], [ -73.909115, 40.616866 ], [ -73.903374, 40.611891 ], [ -73.901698, 40.608223 ], [ -73.902172, 40.605041 ], [ -73.90574, 40.604755 ], [ -73.906234, 40.606354 ], [ -73.909601, 40.606102 ], [ -73.908291, 40.604132 ], [ -73.910923, 40.603505 ], [ -73.913565, 40.603965 ], [ -73.916908, 40.606944 ], [ -73.920659, 40.606755 ], [ -73.921584, 40.607639 ], [ -73.924441, 40.605794 ], [ -73.926249, 40.607414 ], [ -73.929868, 40.605071 ], [ -73.933551, 40.602687 ], [ -73.928131, 40.597778 ], [ -73.929569, 40.59682 ], [ -73.917991, 40.586534 ], [ -73.917663, 40.585605 ], [ -73.913305, 40.586085 ], [ -73.912461, 40.583408 ], [ -73.916842, 40.583112 ], [ -73.914471, 40.582391 ], [ -73.911506, 40.582724 ], [ -73.911838, 40.58176 ], [ -73.916501, 40.581727 ], [ -73.922942, 40.583395 ], [ -73.929651, 40.58344 ], [ -73.931842, 40.583076 ], [ -73.931946, 40.582022 ], [ -73.932502, 40.581159 ], [ -73.931116, 40.576117 ], [ -73.931643983318494, 40.575673652171098 ], [ -73.931559, 40.575962 ], [ -73.937665, 40.575434 ], [ -73.946295, 40.5756 ], [ -73.952480218128599, 40.574840135519494 ], [ -73.955721, 40.574442 ], [ -73.95942223594291, 40.574016864351499 ], [ -73.982084456370401, 40.5714138101483 ], [ -73.990753599392605, 40.570418045004494 ], [ -73.991346, 40.57035 ], [ -74.002056, 40.570623 ], [ -74.002283647787394, 40.570738365881802 ], [ -74.005673, 40.572456 ], [ -74.010712180617304, 40.574100539650203 ], [ -74.012022, 40.574528 ], [ -74.012996, 40.578169 ], [ -74.009608, 40.581395 ], [ -74.006100593274198, 40.582068915534599 ], [ -73.999622, 40.581424 ], [ -73.997937, 40.581642 ], [ -73.997621, 40.580554 ], [ -73.990697, 40.579318 ], [ -73.987478, 40.57908 ], [ -73.985826, 40.581372 ], [ -73.983948, 40.582912 ], [ -73.983842, 40.583333 ], [ -73.985959, 40.581784 ], [ -73.987763, 40.579799 ], [ -73.988237, 40.579704 ], [ -73.991983, 40.581543 ], [ -73.990325, 40.584601 ], [ -73.996003, 40.582122 ], [ -74.000304, 40.583094 ], [ -74.000435, 40.583933 ], [ -73.998418, 40.585463 ], [ -73.998261, 40.586544 ], [ -73.994102, 40.588672 ], [ -73.995379, 40.589389 ], [ -74.000416, 40.587136 ], [ -73.998031, 40.588466 ], [ -73.998789, 40.590296 ], [ -73.997111, 40.591278 ], [ -74.000155, 40.591613 ], [ -73.998594, 40.593555 ], [ -74.001403401290005, 40.592354202570498 ], [ -74.003204389439091, 40.595615280056002 ], [ -74.003281, 40.595754 ], [ -74.010926, 40.600789 ], [ -74.014425, 40.602037 ], [ -74.014705092762199, 40.602084344158001 ], [ -74.017034, 40.602478 ], [ -74.018958, 40.602521 ], [ -74.019571304051098, 40.602715096646598 ], [ -74.021331, 40.603272 ], [ -74.026775139974404, 40.6042371612374 ], [ -74.027547, 40.604374 ], [ -74.031384, 40.605201 ], [ -74.036384368162899, 40.609913143188301 ], [ -74.03959, 40.612934 ], [ -74.039935059592395, 40.614390660143101 ], [ -74.042412, 40.624847 ] ] ] ] } }
]
}

// Making manhattan projection and MapPath
var MapProjection = d3.geoEquirectangular()
    .scale(200000)
    .center([-73.9757, 40.7073])
    .translate([width/2, height/2]);

// Manhattan path with equirectangular projection
var MapPath = d3.geoPath()
    .projection(MapProjection);

var textx = -60;
var texty = 370;

//Basic map addition
//canvas.append("path")
//  .attr("d", MapPath(NYCGJ))
//  .attr("stroke", d3.rgb(0,0,0))
//  .attr("fill",d3.rgb(222,222,222))
//  .attr("stroke-width", 2.5)
//  .attr("id", "NYCMap");

//add map so each borough is filled different color (test)
canvas.selectAll("path")
  .data(NYCGJ.features)
  .enter()
  .append("path")
  .attr("d", MapPath)
  .attr("stroke", d3.rgb(0,0,0))
  .attr("stroke-width", 2.5)
  .attr("fill", function(d) {
      switch  (d.properties.name) {
        case "Queens":
          fillB = d3.rgb(0,100,200);
          break;
        case "Manhattan":
          fillB = d3.rgb(100,0,200);
          break;
        case "statan Island":
          fillB = d3.rgb(200, 100, 0);
          break;
        case "Bronx":
          fillB = d3.rgb(100, 100, 50);
          break;
        case "Brooklyn":
          fillB = d3.rgb(200, 220, 120);
          break;
      } return fillB})
  .attr("id", "NYCMap");


// add circles to map based on csv file
d3.csv("https://raw.githubusercontent.com/pacunningham821/FDNYmap/master/Buckets.csv").then(function(data){

var CallMax = d3.max(data, function(d) {return parseFloat(d.Total)});
var CallMin = d3.min(data, function(d) {return parseFloat(d.Total)});

//create an opacity scale based on minimum and maximum count values
var OpacityScale = d3.scaleLinear()
  .domain([CallMin, CallMax])
  .range([.04,0.5]);


var MapPoint = canvas.selectAll(".Point")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", function(d) {return 1.5 + parseFloat(d.Total*0.0321)})
  .attr("fill", d3.rgb(127,174,236))
  .attr("cx", function(d) {return MapProjection([d.Lon, d.Lat])[0];})
  .attr("cy", function(d) {return MapProjection([d.Lon, d.Lat])[1];})
  //.attr("fill-opacity", function(d) {return OpacityScale(d.Total)})
  .attr("fill-opacity", 0.4)
  .attr("class", "Point")
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut);

}); // close of d3.csv callback function

function handleMouseOver (d) {
  var X = parseInt(d3.select(this).attr("cx"));
  var Y = parseInt(d3.select(this).attr("cy"));

  canvas.append("rect")
  .attr("x", X+10)
  .attr("y", Y-10)
  .attr("fill", d3.rgb(30, 48, 165))
  .attr("height", 19)
  .attr("width", 250)
  .attr("rx", 7.5)
  .attr("ry", 7.5)
  .attr("id", "LLBox");

  canvas.append("text")
  .attr("x", X+16)
  .attr("y", Y+3)
  .attr("font-family", "Calibri")
  .attr("font-size", "16px")
  .attr("fill", "white")
  .attr("font-weight", 700)
  .attr("id", "LLTXT")
  .text("Opacity: " + parseFloat(d.Total*0.000459));
  //.text("Lon, Lat: " + [d.Lon, d.Lat]);

}

function handleMouseOut (d) {
  d3.select("#LLTXT").remove();
  d3.select("#LLBox").remove();
}