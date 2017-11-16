$(function () {
    'use strict'

	if(window.map) {
    var dFullPolygon;
	//Fredenbaum Markt
    var dFredenbaumX;
	var dFredenbaumDesc = {lat: 51.537090, lng: 7.444414};
	var contentFredenbaumDesc = '<div><center><font size="4"><b><u>Weihnachtsmarkt im Fredenbaumpark<br></u></b></font></center>Der Fredenbaumpark hat hier einen Weihnachtsmarkt. <br>Aus diesem Grund ist die schwarze Fläche nicht ohne Zusatzkosten zugänglich.</div>'
	var infowindow = new google.maps.InfoWindow({
		content: contentFredenbaumDesc
	});

	
    var updateGeofences = function() {
        if(!Store.get('showGeofence')) {
            if(dFullPolygon) {
                console.log('geofence > setting dFUllPolygons map to null')
                dFullPolygon.setMap(null);
				//Fredenbaum
                dFredenbaumX.setMap(null);
            }
        } else {
            if(dFullPolygon == null) {
                console.log('geofence > initialising dFullPolygons')
				var dFullCoords = [
                        {lat: 51.6116210116669, lng: 7.4325084686279},
                        {lat: 51.5755759798729, lng: 7.3223876953125},
                        {lat: 51.5473491905233, lng: 7.3317432403564},
                        {lat: 51.5238312818017, lng: 7.2949647903442},
                        {lat: 51.494650594259, lng: 7.2722840309143},
                        {lat: 51.4809753175707, lng: 7.2835600376129},
                        {lat: 51.4753924614099, lng: 7.3216420412064},
                        {lat: 51.4553289674135, lng: 7.3369923233986},
                        {lat: 51.4472405860867, lng: 7.3744869232178},
                        {lat: 51.4555980540434, lng: 7.4027681350708},
                        {lat: 51.4171945605445, lng: 7.4628067016602},
                        {lat: 51.4164719284182, lng: 7.4933195114136},
                        {lat: 51.4311230693204, lng: 7.5113654136658},
                        {lat: 51.4421217173487, lng: 7.5181728601456},
                        {lat: 51.4392360407416, lng: 7.5367391109467},
                        {lat: 51.4679058179424, lng: 7.5961473584175},
                        {lat: 51.4905568144017, lng: 7.6253621571232},
                        {lat: 51.4905685845844, lng: 7.6492389421855},
                        {lat: 51.4932304513727, lng: 7.6509941664983},
                        {lat: 51.5020109647478, lng: 7.6401329040527},
                        {lat: 51.5350712081528, lng: 7.6380729675293},
                        {lat: 51.5845099219525, lng: 7.5900077819824},
                        {lat: 51.5923223479277, lng: 7.4686431884766},
                        {lat: 51.6079431697554, lng: 7.4703598022461},
                        {lat: 51.6116210116669, lng: 7.4325084686279}
					];
				//Fredenbaum
				var dFredenbaumXCoords = [
                        {lat: 51.5371383449544, lng: 7.44769360703},
                        {lat: 51.5372567978917, lng: 7.44757041331},
                        {lat: 51.5374002756845, lng: 7.4475502967834},
                        {lat: 51.5381243311336, lng: 7.4470084905624},
                        {lat: 51.5383412118603, lng: 7.44666678085},
                        {lat: 51.5384913594503, lng: 7.4462252855301},
                        {lat: 51.5385080424853, lng: 7.4455654621124},
                        {lat: 51.5384780130179, lng: 7.4450719356537},
                        {lat: 51.5384446469198, lng: 7.444766163826},
                        {lat: 51.5384179540237, lng: 7.4446320533752},
                        {lat: 51.5383712414179, lng: 7.4444764852524},
                        {lat: 51.5383111822828, lng: 7.4442833662033},
                        {lat: 51.5383011724193, lng: 7.4441975355148},
                        {lat: 51.5382911625536, lng: 7.4440795183182},
                        {lat: 51.5382878259311, lng: 7.4439239501953},
                        {lat: 51.5382944991757, lng: 7.4437308311462},
                        {lat: 51.5382878259311, lng: 7.4434626102448},
                        {lat: 51.5382577963185, lng: 7.4430817365646},
                        {lat: 51.5382110835483, lng: 7.4427330493927},
                        {lat: 51.5381743806238, lng: 7.4424594640732},
                        {lat: 51.538127667768, lng: 7.4421536922455},
                        {lat: 51.5380042121325, lng: 7.4419820308685},
                        {lat: 51.5378970223396, lng: 7.4418137222528},
                        {lat: 51.5378599020801, lng: 7.4416990578175},
                        {lat: 51.5378290380211, lng: 7.4416038393974},
                        {lat: 51.5377714806658, lng: 7.4415528774261},
                        {lat: 51.5376459386458, lng: 7.4416454136372},
                        {lat: 51.5376065242192, lng: 7.4415361136198},
                        {lat: 51.5374770194345, lng: 7.4420973658562},
                        {lat: 51.5373969389968, lng: 7.4426257610321},
                        {lat: 51.5372734813792, lng: 7.442598938942},
                        {lat: 51.5371400133078, lng: 7.4425828456879},
                        {lat: 51.5370565955645, lng: 7.4425935745239},
                        {lat: 51.5370065448451, lng: 7.4426203966141},
                        {lat: 51.5368864228939, lng: 7.4427115917206},
                        {lat: 51.5366995658954, lng: 7.4428564310074},
                        {lat: 51.5366194840898, lng: 7.4429154396057},
                        {lat: 51.5364860141006, lng: 7.442974448204},
                        {lat: 51.5363592172484, lng: 7.4430227279663},
                        {lat: 51.5363859113519, lng: 7.4431943893433},
                        {lat: 51.5364126054397, lng: 7.4433928728104},
                        {lat: 51.5364392995119, lng: 7.4435698986053},
                        {lat: 51.5364392995119, lng: 7.4436771869659},
                        {lat: 51.5364025951586, lng: 7.4437576532364},
                        {lat: 51.5363258495969, lng: 7.4437952041626},
                        {lat: 51.5362290832696, lng: 7.4438327550888},
                        {lat: 51.5360488971462, lng: 7.4438917636871},
                        {lat: 51.5359888349466, lng: 7.4439346790314},
                        {lat: 51.5359087518905, lng: 7.4440848827362},
                        {lat: 51.5357953006531, lng: 7.4442458152771},
                        {lat: 51.5356584914319, lng: 7.4444174766541},
                        {lat: 51.5356184496309, lng: 7.4445301294327},
                        {lat: 51.5356184496309, lng: 7.4446374177933},
                        {lat: 51.5356551546165, lng: 7.4447447061539},
                        {lat: 51.5357652693959, lng: 7.4449163675308},
                        {lat: 51.5358119846763, lng: 7.4450021982193},
                        {lat: 51.5358620367093, lng: 7.445125579834},
                        {lat: 51.5359379488543, lng: 7.4452060461044},
                        {lat: 51.5359896691444, lng: 7.4453186988831},
                        {lat: 51.5359742364833, lng: 7.4454534798861},
                        {lat: 51.5359546328253, lng: 7.4457223713398},
                        {lat: 51.5360230370422, lng: 7.4466919898987},
                        {lat: 51.5360956121356, lng: 7.4471533298492},
                        {lat: 51.5361289799558, lng: 7.4473142623901},
                        {lat: 51.5361990522985, lng: 7.4474322795868},
                        {lat: 51.5363058289944, lng: 7.4475556612015},
                        {lat: 51.5364760038356, lng: 7.4476790428162},
                        {lat: 51.5366094738542, lng: 7.4477112293243},
                        {lat: 51.5367327247268, lng: 7.4477434158325},
                        {lat: 51.5368593119931, lng: 7.4477541446686},
                        {lat: 51.537005710666, lng: 7.4477380514145},
						{lat: 51.5371383449544, lng: 7.4476951360703}
					];

                //construct the polygon.
                dFullPolygon = new google.maps.Polygon({
                    paths: dFullCoords,
                    strokeColor: '#111111',
                    strokeOpacity: 0.7,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.05
                });
				//------- Weihnachtsmarkt Fredenbaum
                dFredenbaumX = new google.maps.Polygon({
                    paths: dFredenbaumXCoords,
                    strokeColor: '#111111',
                    strokeOpacity: 0.7,
                    strokeWeight: 3,
                    fillColor: '#000000',
                    fillOpacity: 0.25
                });
				var marker = new google.maps.Marker({
				position: dFredenbaumDesc,
				map: map,
				title: 'Weihnachtsmarkt !'
				});
				marker.addListener('click', function() {
				infowindow.open(map, marker);
				});
				//-----------------------------------

            }
            console.log('geofence > setting wolfsburgPolygons map')
            dFullPolygon.setMap(map);
			//Fredenbaum
            dFredenbaumX.setMap(map);
        }
    }
    $('#geofence-switch').change(function () {
        console.log('geofence > showGeofence changed! new state:' + Store.get('showGeofence'))
        Store.set('showGeofence', this.checked)
		updateGeofences()
    })
	console.log('geofence > yes, we have a map!')
    $('#geofence-switch').prop('checked', Store.get('showGeofence'))
	updateGeofences()
}
	if(window.map) {
    var dIVPolygon;
    var updateGeofencesIV = function() {
        if(!Store.get('showGeofenceIV')) {
            if(dIVPolygon) {
                console.log('geofenceIV > setting dIVPolygon map to null')
                dIVPolygon.setMap(null);
            }
        } else {
            if(dIVPolygon == null) {
                console.log('geofenceIV > initialising dIVPolygon')
				var dIVCoords = [
                        {lat: 51.5417794674626, lng: 7.4346944689751},
                        {lat: 51.5391107130232, lng: 7.4342539161444},
                        {lat: 51.5345215616995, lng: 7.4346782080829},
                        {lat: 51.5337892108361, lng: 7.4386222288013},
                        {lat: 51.525249357471, lng: 7.4417359381914},
                        {lat: 51.5180948006387, lng: 7.4447706900537},
                        {lat: 51.5171485430058, lng: 7.4459600821137},
                        {lat: 51.5151473692105, lng: 7.4473533220589},
                        {lat: 51.5130744869215, lng: 7.4411318544298},
                        {lat: 51.5100372772118, lng: 7.4377177166753},
                        {lat: 51.5095373703672, lng: 7.4400756927207},
                        {lat: 51.5054957890383, lng: 7.4364714324474},
                        {lat: 51.5049703067866, lng: 7.4344852566719},
                        {lat: 51.4989036574862, lng: 7.4354588985443},
                        {lat: 51.4973181979787, lng: 7.4393400549889},
                        {lat: 51.4971800207749, lng: 7.4471385776997},
                        {lat: 51.4946929682144, lng: 7.4460703879595},
                        {lat: 51.4915377750954, lng: 7.4479204416275},
                        {lat: 51.4908063507385, lng: 7.4513737438247},
                        {lat: 51.490742940939, lng: 7.4555566068739},
                        {lat: 51.4920055882743, lng: 7.4589656107128},
                        {lat: 51.4928741925158, lng: 7.4592175707221},
                        {lat: 51.4932223810616, lng: 7.4710615351796},
                        {lat: 51.4927800475541, lng: 7.4714046902955},
                        {lat: 51.4920003695013, lng: 7.472407668829},
                        {lat: 51.4909933438972, lng: 7.4800774455071},
                        {lat: 51.4931693597161, lng: 7.4846304953098},
                        {lat: 51.4918116582709, lng: 7.4880194664001},
                        {lat: 51.4919661278127, lng: 7.491348242329},
                        {lat: 51.4936341554652, lng: 7.4998088751454},
                        {lat: 51.5038753413268, lng: 7.501218135003},
                        {lat: 51.5039872808004, lng: 7.514605113538},
                        {lat: 51.5075677771403, lng: 7.513789088116},
                        {lat: 51.5101042694768, lng: 7.5159346968576},
                        {lat: 51.5104392423655, lng: 7.5173520858516},
                        {lat: 51.5172358993643, lng: 7.5165154134447},
                        {lat: 51.5184906305841, lng: 7.5124598737966},
                        {lat: 51.516795290335, lng: 7.5105078565684},
                        {lat: 51.5197653628659, lng: 7.5090584380632},
                        {lat: 51.5226029826816, lng: 7.5066662230893},
                        {lat: 51.5178230574041, lng: 7.4948735162616},
                        {lat: 51.5247057461573, lng: 7.4917815998197},
                        {lat: 51.5264546244893, lng: 7.4975634366274},
                        {lat: 51.5294382427646, lng: 7.4955444037914},
                        {lat: 51.5303826807378, lng: 7.4914332479239},
                        {lat: 51.5327687176656, lng: 7.4885237216949},
                        {lat: 51.5328313911633, lng: 7.4629694782197},
                        {lat: 51.5372987151425, lng: 7.4596024677157},
                        {lat: 51.5367834013847, lng: 7.4560441821814},
                        {lat: 51.5417794674626, lng: 7.4346944689751}
					];
                //construct the polygon.
                dIVPolygon = new google.maps.Polygon({
                    paths: dIVCoords,
                    strokeColor: '#111111',
                    strokeOpacity: 0.7,
                    strokeWeight: 2,
                    fillColor: '#0000FF',
                    fillOpacity: 0.05
                });
            }
            console.log('geofenceIV > setting wolfsburgPolygons map')
			dIVPolygon.setMap(map);
        }
    }
    $('#geofence-switchIV').change(function () {
        console.log('geofenceIV > showGeofenceIV changed! new state:' + Store.get('showGeofenceIV'))
        Store.set('showGeofenceIV', this.checked)
		updateGeofencesIV()
    })
	console.log('geofenceIV > yes, we have a map!')
    $('#geofence-switchIV').prop('checked', Store.get('showGeofenceIV'))
	updateGeofencesIV()
}
    /* Settings For Analytics
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103616467-1', 'auto');
  ga('send', 'pageview');

</script>
	*/

    // Google Analytics property ID. Leave empty to disable.
    // Looks like 'UA-XXXXX-Y'.
    const analyticsKey = 'UA-103616467-1'

    // MOTD.
    const motdEnabled = true
    const motdTitle = 'News!'
    const motd = '<h3 style="margin:0;line-height:1.1;">Das System der Silber/GoldMap-Zugänge wurde geändert. Bitte wendet euch an einen Admin in Discord, wenn ihr einen Zugang hattet oder als Silber/Goldspender einen Zugang bekommen möchtet.</h3><br>' +
					'<h4 style="margin:0;line-height:1.1;">Die derzeitige Scanzeit ist 7:00 Uhr - 6:00 Uhr<br>(23 Std Betrieb)</h4><br>' +
					'<span style="font-size:smaller;">(Für nicht Supporter sind IVs in der Innenstadt sichtbar)</span><br>' +
					'<span style="color:red;">Besuche unseren <a href="https://discord.gg/zwsGCUS">Discord</a> für mehr Infos</span><br/>' +
					'<span style="color:red;">oder schau dir auf <a href="https://www.patreon.com/rocketmapdo">Patreon</a> alle Belohnungen für Spender an</span>'

    // Only show every unique MOTD message once. If disabled, the MOTD will be
    // shown on every visit. Requires support for localStorage.
    // Updating only the MOTD title (and not the text) will not make the MOTD
    // appear again.
    const motdShowOnlyOnce = true

    // What pages should the MOTD be shown on? By default, homepage and mobile
    // pages.
    const motdShowOnPages = [
        '/',
        '/mobile'
    ]

    // Clustering! Different zoom levels for desktop vs mobile.
    const disableClusters = false // Default: false
    const maxClusterZoomLevel = 12 // Default: 14
    const maxClusterZoomLevelMobile = 12 // Default: same as desktop
    const clusterZoomOnClick = false // Default: false
    const clusterZoomOnClickMobile = false // Default: same as desktop
    const clusterGridSize = 90 // Default: 60
    const clusterGridSizeMobile = 60 // Default: same as desktop

    // Process Pokémon in chunks to improve responsiveness.
    const processPokemonChunkSize = 250 // Default: 100
    const processPokemonChunkSizeMobile = 150 // Default: 100
    const processPokemonIntervalMs = 50 // Default: 100ms
    const processPokemonIntervalMsMobile = 100 // Default: 100ms


    /* Feature detection. */

    const hasStorage = (function () {
        var mod = 'RocketMap'
        try {
            localStorage.setItem(mod, mod)
            localStorage.removeItem(mod)
            return true
        } catch (exception) {
            return false
        }
    }())


    /* Do stuff. */

    const currentPage = window.location.pathname


    // Set custom Store values.
    Store.set('maxClusterZoomLevel', maxClusterZoomLevel)
    Store.set('clusterZoomOnClick', clusterZoomOnClick)
    Store.set('clusterGridSize', clusterGridSize)
    Store.set('processPokemonChunkSize', processPokemonChunkSize)
    Store.set('processPokemonIntervalMs', processPokemonIntervalMs)

    if (typeof window.orientation !== "undefined" || isMobileDevice()) {
        Store.set('maxClusterZoomLevel', maxClusterZoomLevelMobile)
        Store.set('clusterZoomOnClick', clusterZoomOnClickMobile)
        Store.set('clusterGridSize', clusterGridSizeMobile)
		Store.set('processPokemonChunkSize', processPokemonChunkSizeMobile)
		Store.set('processPokemonIntervalMs', processPokemonIntervalMsMobile)
    }

    if (disableClusters) {
        Store.set('maxClusterZoomLevel', -1)
    }

    // Google Analytics.
    if (analyticsKey.length > 0) {
        window.ga = window.ga || function () {
            (ga.q = ga.q || []).push(arguments)
        }
        ga.l = Date.now
        ga('create', analyticsKey, 'auto')
        ga('send', 'pageview')
    }

    // Show MOTD.
    if (motdEnabled && motdShowOnPages.indexOf(currentPage) !== -1) {
        let motdIsUpdated = true

        if (hasStorage) {
            const lastMOTD = window.localStorage.getItem('lastMOTD') || ''

            if (lastMOTD === motd) {
                motdIsUpdated = false
            }
        }

        if (motdIsUpdated || !motdShowOnlyOnce) {
            window.localStorage.setItem('lastMOTD', motd)

            swal({
                title: motdTitle,
                text: '<div style="overflow-y: scroll; max-height: 200px;">' + motd + '</div>',
				html: true
            })
        }
    }
	
	//fix user errors
	Store.set('showActiveRaidsOnly', false)
	Store.set('showOpenGymsOnly', false)
	Store.set('showTeamGymsOnly', 0)
	Store.set('showLastUpdatedGymsOnly', 0)
	Store.set('showScanned', false)
	Store.set('showRanges', false)
	
	
	//TODO: remove
	if(!Store.get('remember_text_perfection_notify')) {
		Store.set('remember_text_perfection_notify', '100')
	}
	
	
	if(window.pokemonLabel) {
		var old_func = pokemonLabel;
		
		window.pokemonLabel = function(item) {
			var name = item['pokemon_name']
			var rarityDisplay = item['pokemon_rarity'] ? '(' + item['pokemon_rarity'] + ')' : ''
			var types = item['pokemon_types']
			var typesDisplay = ''
			var encounterId = item['encounter_id']
			var id = item['pokemon_id']
			var latitude = item['latitude']
			var longitude = item['longitude']
			var disappearTime = item['disappear_time']
			var atk = item['individual_attack']
			var def = item['individual_defense']
			var sta = item['individual_stamina']
			var pMove1 = (moves[item['move_1']] !== undefined) ? i8ln(moves[item['move_1']]['name']) : 'gen/unknown'
			var pMove2 = (moves[item['move_2']] !== undefined) ? i8ln(moves[item['move_2']]['name']) : 'gen/unknown'
			var weight = item['weight']
			var height = item['height']
			var gender = item['gender']
			var form = item['form']
			var cp = item['cp']
			var cpMultiplier = item['cp_multiplier']

			$.each(types, function (index, type) {
				typesDisplay += getTypeSpan(type)
			})
			
			var details = ''

			var contentstring = ''
			var formString = ''
			

			if (id === 201 && form !== null && form > 0) {
				formString += `(${unownForm[item['form']]})`
			}

			contentstring += `
			<div class='pokemon name'>
			  ${name} <span class='pokemon name pokedex'><a href='http://pokemon.gameinfo.io/en/pokemon/${id}' target='_blank' title='View in Pokédex'>#${id}</a></span> ${formString} <span class='pokemon gender rarity'>${genderType[gender - 1]} ${rarityDisplay}</span> ${typesDisplay}
			</div>`

			if (cp != null && cpMultiplier != null) {
				var pokemonLevel = getPokemonLevel(cpMultiplier)

				if (atk != null && def != null && sta != null) {
					var iv = getIv(atk, def, sta)
					var ivString = ''
					if(iv < 50){
					ivString = `<font color ='#96281B'> ${iv.toFixed(1)}</font>`
					}
					else if(iv >= 50 && iv < 75){
						ivString = `<font color ='#E67E22'>${iv.toFixed(1)}</font>`
					}
					else if(iv >= 75 && iv < 90){
						ivString = `<font color ='#3FC380'>${iv.toFixed(1)}</font>`
					}
					else if(iv >= 90 && iv < 99){
						ivString = `<font color ='green'>${iv.toFixed(1)}</font>`
					}
					else{
						ivString = `<font color ='#9A12B3' size ='5' style='background-color: #C5EFF7'>&nbsp;${iv.toFixed(1)}&nbsp;</font>`
					}
				}

				contentstring += `
          <div class='pokemon container'>
            <div class='pokemon container content-left'>
              <div>
				<img class='pokemon sprite' src='static/icons/${id}.png'>
				<span class='pokemon'>Level </span><span class='pokemon encounter'><font size='4'>${pokemonLevel}</font></span><br>
				<div>
					<span class='pokemon navigate'><a href='javascript:void(0);' onclick='javascript:openMapDirections(${latitude},${longitude});' title='Mit Google Maps oeffnen'>Route</a></span>
				</div>
				<br>
				<br>
				<br>
				<div class='pokemon'>
					<span class='pokemon links notify'><a href='javascript:notifyAboutPokemon(${id})'>Fav.</a></span><br>
				</div>
				<div class='pokemon'>
					<span class='pokemon links exclude'><a href='javascript:removeNotifyAboutPokemon(${id})'>Fav.</a></span>
				</div>
              </div>
          </div>
          <div class='pokemon container content-right'>
            <div>
              <div class='pokemon disappear'>
                <span class='label-countdown' disappears-at='${disappearTime}'style='background-color: #fffaaa'>00m00s</span> übrig<br><font size='1'>  (Despawn um ${moment(disappearTime).format('HH:mm')})</font>
              </div>
			<div class='pokemon'>
				<font size='4'>IV: <span class='pokemon encounter'><font size='4'>${ivString}%</font></font></span> (${atk}/${def}/${sta})<br>
				<font size='4'>WP: <span class='pokemon encounter'><font size='4'>${cp}</font></font></span>
			</div>
			<div class='pokemon'>
                Moveset: <span class='pokemon encounter'>${pMove1}/${pMove2}</span>
			</div>
			<div class='pokemon'>
                Gewicht: ${weight.toFixed(2)}kg | Größe: ${height.toFixed(2)}m
			</div>
			<br>
			<b>Optionen für ${name}:<br></b>
			<div class='pokemon'>
				<span class='pokemon links exclude'><a href='javascript:excludePokemon(${id})'>Alle ${name} ausblenden</a></span><br>
			<div>
			<div class='pokemon'>
				<span class='pokemon links remove'><a href='javascript:removePokemonMarker("${encounterId}")'>Dieses ${name} ausblenden</a></span>
			</div>
        </div>
      </div>`
			} else if (atk != null && def != null && sta != null) {
					var iv = getIv(atk, def, sta)
					var ivString = ''
					if(iv < 50){
					ivString = `<font color ='#96281B'> ${iv.toFixed(1)}</font>`
					}
					else if(iv >= 50 && iv < 75){
						ivString = `<font color ='#E67E22'>${iv.toFixed(1)}</font>`
					}
					else if(iv >= 75 && iv < 90){
						ivString = `<font color ='#3FC380'>${iv.toFixed(1)}</font>`
					}
					else if(iv >= 90 && iv < 99){
						ivString = `<font color ='green'>${iv.toFixed(1)}</font>`
					}
					else{
						ivString = `<font color ='#9A12B3' size ='5' style='background-color: #C5EFF7'>&nbsp;${iv.toFixed(1)}&nbsp;</font>`
					}

				contentstring += `
          <div class='pokemon container'>
            <div class='pokemon container content-left'>
              <div>
				<img class='pokemon sprite' src='static/icons/${id}.png'>
				<span class='pokemon'>Level </span><span class='pokemon no-encounter'><font size='2'>N/A</font></span><br>
				<div>
					<span class='pokemon navigate'><a href='javascript:void(0);' onclick='javascript:openMapDirections(${latitude},${longitude});' title='Mit Google Maps oeffnen'>Route</a></span>
				</div>
				<br>
				<br>
				<br>
				<div class='pokemon'>
					<span class='pokemon links notify'><a href='javascript:notifyAboutPokemon(${id})'>Fav.</a></span><br>
				</div>
				<div class='pokemon'>
					<span class='pokemon links exclude'><a href='javascript:removeNotifyAboutPokemon(${id})'>Fav.</a></span>
				</div>
              </div>
          </div>
          <div class='pokemon container content-right'>
            <div>
              <div class='pokemon disappear'>
                <span class='label-countdown' disappears-at='${disappearTime}'style='background-color: #fffaaa'>00m00s</span> übrig<br><font size='1'>  (Despawn um ${moment(disappearTime).format('HH:mm')})</font>
              </div>
			<div class='pokemon'>
				<font size='4'>IV: <span class='pokemon encounter'><font size='4'>${ivString}%</font></font></span> (${atk}/${def}/${sta})<br>
				<font size='4'>WP: <span class='pokemon no-encounter'><font size='3'>Gold-Only</font></font></span>
			</div>
			<div class='pokemon'>
                Moveset: <span class='pokemon encounter'>${pMove1}/${pMove2}</span>
			</div>
			<div class='pokemon'>
                Gewicht: ${weight.toFixed(2)}kg | Größe: ${height.toFixed(2)}m
			</div>
			<br>
			<b>Optionen für ${name}:<br></b>
			<div class='pokemon'>
				<span class='pokemon links exclude'><a href='javascript:excludePokemon(${id})'>Alle ${name} ausblenden</a></span><br>
			<div>
			<div class='pokemon'>
				<span class='pokemon links remove'><a href='javascript:removePokemonMarker("${encounterId}")'>Dieses ${name} ausblenden</a></span>
			</div>
        </div>
      </div>`
			} else {
			contentstring += `
			<div class='pokemon container'>
				<div class='pokemon container content-left'>
					<div>
						<img class='pokemon sprite' src='static/icons/${id}.png'><br>
						<span class='pokemon'>Level: </span><span class='pokemon no-encounter'>n/a</span><br>
							<div>
								<span class='pokemon navigate'><a href='javascript:void(0);' onclick='javascript:openMapDirections(${latitude},${longitude});' title='Mit Google Maps oeffnen'>Route</a></span>
								<br>
								<br>
								<br>
								<div class='pokemon'>
								<span class='pokemon links notify'><a href='javascript:notifyAboutPokemon(${id})'>Fav.</a></span><br>
								</div>
								<div class='pokemon'>
								<span class='pokemon links exclude'><a href='javascript:removeNotifyAboutPokemon(${id})'>Fav.</a></span>
							</div>
					</div>
				</div>
			</div>
			<div class='pokemon container content-right'>
				<div>
					<div class='pokemon disappear'>
						<span class='label-countdown' disappears-at='${disappearTime}'style='background-color: #fffaaa'>00m00s</span> verbleibend<br><font size='1'>  (Despawn um ${moment(disappearTime).format('HH:mm')})</font>
					</div>
					<div class='pokemon'>
						<font size='3'>IV: <span class='pokemon no-encounter'><font size='3' color='red'>Nicht bekannt</font></font></span><br>
						<font size='3'>WP: <span class='pokemon no-encounter'><font size='3' color='red'>Nicht bekannt</font></font></span>
					</div>
					<br>
					<b>Optionen für ${name}:<br></b>
					<div class='pokemon'>
						<span class='pokemon links exclude'><a href='javascript:excludePokemon(${id})'>Alle ${name} ausblenden</a></span><br>
					</div>
					<div class='pokemon'>
						<span class='pokemon links remove'><a href='javascript:removePokemonMarker("${encounterId}")'>Dieses ${name} ausblenden</a></span>
					</div>
				</div>
			</div>
			</div>`
			}

			contentstring += `
			  ${details}`

			return contentstring
		};
	}
	
	if(window.sendToastrPokemonNotification) {
		window.sendToastrPokemonNotification = function(title, text, icon, lat, lon) {
			if(!Store.get('doPush')) {
				return
			}
			var notification = toastr.info(text, title, {
				closeButton: true,
				positionClass: 'toast-top-right',
				preventDuplicates: false,
				onclick: function () {
					centerMap(lat, lon, 20)
				},
				showDuration: '300',
				hideDuration: '500',
				timeOut: '6000',
				extendedTimeOut: '1500',
				showEasing: 'swing',
				hideEasing: 'linear',
				showMethod: 'fadeIn',
				hideMethod: 'fadeOut'
			})
			notification.removeClass('toast-info')
			notification.css({
				'padding-left': '36px',
				'background-image': `url('./${icon}')`,
				'background-size': '36px',
				'background-position': 'left top',
				'background-color': '#283747',
				'height': '40px'
			})
			notification.find('.toast-title').css('font-size', 'smaller')
		};
	}
	
	if(window.getNotifyText) {
		window.getNotifyText = function(item) {
			var iv = getIv(item['individual_attack'], item['individual_defense'], item['individual_stamina'])
			var find = ['<prc>', '<pkm>', '<atk>', '<def>', '<sta>']
			var replace = [((iv) ? iv.toFixed(1) : ''), item['pokemon_name'], item['individual_attack'],
				item['individual_defense'], item['individual_stamina']]
			var ntitle = repArray(((iv) ? notifyIvTitle : notifyNoIvTitle), find, replace)
			var dist = moment(item['disappear_time']).format('HH:mm')
			var until = getTimeUntil(item['disappear_time'])
			var udist = (until.hour > 0) ? until.hour + ':' : ''
			udist += lpad(until.min, 2, 0) + 'm' + lpad(until.sec, 2, 0) + 's'
			find = ['<dist>', '<udist>']
			replace = [dist, udist]
			var ntext = repArray(notifyText, find, replace)
			
			return {
				'fav_title': ntitle + '[' + ntext + ']',
				'fav_text': ''
			}
		};
	}
	
	if(window.isNotifyPoke) {
		window.isNotifyPoke = function(poke) {
			const isOnNotifyList = notifiedPokemon.indexOf(poke['pokemon_id']) > -1 || notifiedRarity.indexOf(poke['pokemon_rarity']) > -1
			var hasHighIV = false

			if (poke['individual_attack'] != null) {
				const perfection = getIv(poke['individual_attack'], poke['individual_defense'], poke['individual_stamina'])
				hasHighIV = notifiedMinPerfection > 0 && perfection >= notifiedMinPerfection
			}

			return isOnNotifyList || hasHighIV
		};
	}
})
