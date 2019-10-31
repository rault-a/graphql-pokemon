import { Pokemon } from '../typings/pokemon';
import Collection from '@discordjs/collection';

export const tierAliases = new Collection<string, Pokemon.TierAlias>(
  [
    [ 'randbats', { alias: 'randbats', tier: 'randombattle' } ],
    [ 'randoms', { alias: 'randoms', tier: 'randombattle' } ],
    [
      'random battles',
      { alias: 'random battles', tier: 'randombattle' }
    ],
    [ 'randdubs', { alias: 'randdubs', tier: 'randomdoublesbattle' } ],
    [
      'randomdoublebattle',
      { alias: 'randomdoublebattle', tier: 'randomdoublesbattle' }
    ],
    [
      'random double battle',
      { alias: 'random double battle', tier: 'randomdoublesbattle' }
    ],
    [
      'randomdoublesbattle',
      { alias: 'randomdoublesbattle', tier: 'randomdoublesbattle' }
    ],
    [
      'random doubles battle',
      { alias: 'random doubles battle', tier: 'randomdoublesbattle' }
    ],
    [ 'ou', { alias: 'ou', tier: 'ou' } ],
    [ 'overused', { alias: 'overused', tier: 'ou' } ],
    [ 'over used', { alias: 'over used', tier: 'ou' } ],
    [ 'uber', { alias: 'uber', tier: 'ubers' } ],
    [ 'uu', { alias: 'uu', tier: 'uu' } ],
    [ 'underused', { alias: 'underused', tier: 'uu' } ],
    [ 'under used', { alias: 'under used', tier: 'uu' } ],
    [ 'ru', { alias: 'ru', tier: 'ru' } ],
    [ 'rarelyused', { alias: 'rarelyused', tier: 'ru' } ],
    [ 'rarely used', { alias: 'rarely used', tier: 'ru' } ],
    [ 'nu', { alias: 'nu', tier: 'nu' } ],
    [ 'neverused', { alias: 'neverused', tier: 'nu' } ],
    [ 'never used', { alias: 'never used', tier: 'nu' } ],
    [ 'pu', { alias: 'pu', tier: 'pu' } ],
    [ 'partiallyused', { alias: 'partiallyused', tier: 'pu' } ],
    [ 'partially used', { alias: 'partially used', tier: 'pu' } ],
    [ 'lc', { alias: 'lc', tier: 'lc' } ],
    [ 'littlecup', { alias: 'littlecup', tier: 'lc' } ],
    [ 'little cup', { alias: 'little cup', tier: 'lc' } ],
    [ 'mono', { alias: 'mono', tier: 'monotype' } ],
    [ 'monotype', { alias: 'monotype', tier: 'monotype' } ],
    [ 'ag', { alias: 'ag', tier: 'anythinggoes' } ],
    [ 'anyg', { alias: 'anyg', tier: 'anythinggoes' } ],
    [ 'anythinggoes', { alias: 'anythinggoes', tier: 'anythinggoes' } ],
    [ 'anything goes', { alias: 'anything goes', tier: 'anythinggoes' } ],
    [ 'doubles', { alias: 'doubles', tier: 'doublesou' } ],
    [ 'double', { alias: 'double', tier: 'doublesou' } ],
    [ 'dou', { alias: 'dou', tier: 'doublesou' } ],
    [ 'doubles ou', { alias: 'doubles ou', tier: 'doublesou' } ],
    [ 'dubs', { alias: 'dubs', tier: 'doublesou' } ],
    [ 'duu', { alias: 'duu', tier: 'doublesou' } ],
    [ 'dubsuu', { alias: 'dubsuu', tier: 'doublesou' } ],
    [ 'vgc', { alias: 'vgc', tier: 'vgc2018' } ],
    [ 'vgc18', { alias: 'vgc18', tier: 'vgc2018' } ],
    [ 'hackmons', { alias: 'hackmons', tier: 'balancedhackmons' } ],
    [ 'hacks', { alias: 'hacks', tier: 'balancedhackmons' } ],
    [
      'balancedhacks',
      { alias: 'balancedhacks', tier: 'balancedhackmons' }
    ],
    [
      'balancedhackmons',
      { alias: 'balancedhackmons', tier: 'balancedhackmons' }
    ],
    [ '1v1', { alias: '1v1', tier: '1v1' } ],
    [ 'mega', { alias: 'mega', tier: 'mixandmega' } ],
    [ 'mix', { alias: 'mix', tier: 'mixandmega' } ],
    [ 'megamix', { alias: 'megamix', tier: 'mixandmega' } ],
    [ 'mixmega', { alias: 'mixmega', tier: 'mixandmega' } ],
    [ 'mixnmega', { alias: 'mixnmega', tier: 'mixandmega' } ],
    [ 'meganmix', { alias: 'meganmix', tier: 'mixandmega' } ],
    [ 'mix and mega', { alias: 'mix and mega', tier: 'mixandmega' } ],
    [
      'almostanyability',
      { alias: 'almostanyability', tier: 'almostanyability' }
    ],
    [ 'aaa', { alias: 'aaa', tier: 'almostanyability' } ],
    [
      'almost any ability',
      { alias: 'almost any ability', tier: 'almostanyability' }
    ]
  ]
);

export const pokedexAliases = new Collection<string, Pokemon.DexAlias>(
  [
    [ 'maero', { alias: 'maero', name: 'Aerodactyl-Mega' } ],
    [ 'megaaero', { alias: 'megaaero', name: 'Aerodactyl-Mega' } ],
    [ 'megabee', { alias: 'megabee', name: 'Beedrill-Mega' } ],
    [ 'megabunny', { alias: 'megabunny', name: 'Lopunny-Mega' } ],
    [ 'megabro', { alias: 'megabro', name: 'Slowbro-Mega' } ],
    [
      'megacharizard',
      { alias: 'megacharizard', name: 'Charizard-Mega-Y' }
    ],
    [
      'megacharizardx',
      { alias: 'megacharizardx', name: 'Charizard-Mega-X' }
    ],
    [
      'megacharizardy',
      { alias: 'megacharizardy', name: 'Charizard-Mega-Y' }
    ],
    [ 'megadoom', { alias: 'megadoom', name: 'Houndoom-Mega' } ],
    [ 'megadrill', { alias: 'megadrill', name: 'Beedrill-Mega' } ],
    [ 'megagard', { alias: 'megagard', name: 'Gardevoir-Mega' } ],
    [ 'megagarde', { alias: 'megagarde', name: 'Gardevoir-Mega' } ],
    [ 'megacross', { alias: 'megacross', name: 'Heracross-Mega' } ],
    [ 'megahera', { alias: 'megahera', name: 'Heracross-Mega' } ],
    [ 'megakanga', { alias: 'megakanga', name: 'Kangaskhan-Mega' } ],
    [ 'megakhan', { alias: 'megakhan', name: 'Kangaskhan-Mega' } ],
    [ 'megalop', { alias: 'megalop', name: 'Lopunny-Mega' } ],
    [ 'megaluc', { alias: 'megaluc', name: 'Lucario-Mega' } ],
    [ 'megaluke', { alias: 'megaluke', name: 'Lucario-Mega' } ],
    [ 'megamaw', { alias: 'megamaw', name: 'Mawile-Mega' } ],
    [ 'megamedi', { alias: 'megamedi', name: 'Medicham-Mega' } ],
    [ 'megagross', { alias: 'megagross', name: 'Metagross-Mega' } ],
    [ 'megamewtwo', { alias: 'megamewtwo', name: 'Mewtwo-Mega-Y' } ],
    [ 'megamewtwox', { alias: 'megamewtwox', name: 'Mewtwo-Mega-X' } ],
    [ 'megamewtwoy', { alias: 'megamewtwoy', name: 'Mewtwo-Mega-Y' } ],
    [ 'megaobama', { alias: 'megaobama', name: 'Abomasnow-Mega' } ],
    [ 'megaray', { alias: 'megaray', name: 'Rayquaza-Mega' } ],
    [ 'megasab', { alias: 'megasab', name: 'Sableye-Mega' } ],
    [ 'megasable', { alias: 'megasable', name: 'Sableye-Mega' } ],
    [ 'megasnow', { alias: 'megasnow', name: 'Abomasnow-Mega' } ],
    [ 'megamence', { alias: 'megamence', name: 'Salamence-Mega' } ],
    [ 'megascept', { alias: 'megascept', name: 'Sceptile-Mega' } ],
    [ 'megashark', { alias: 'megashark', name: 'Sharpedo-Mega' } ],
    [ 'megapert', { alias: 'megapert', name: 'Swampert-Mega' } ],
    [ 'megattar', { alias: 'megattar', name: 'Tyranitar-Mega' } ],
    [ 'megavenu', { alias: 'megavenu', name: 'Venusaur-Mega' } ],
    [ 'megasaur', { alias: 'megasaur', name: 'Venusaur-Mega' } ],
    [ 'megazam', { alias: 'megazam', name: 'Alakazam-Mega' } ],
    [ 'megazardx', { alias: 'megazardx', name: 'Charizard-MegaX' } ],
    [ 'megazardy', { alias: 'megazardy', name: 'Charizard-MegaY' } ],
    [ 'mgar', { alias: 'mgar', name: 'Gengar-Mega' } ],
    [ 'mgross', { alias: 'mgross', name: 'Metagross-Mega' } ],
    [ 'mmx', { alias: 'mmx', name: 'Mewtwo-Mega-X' } ],
    [ 'mmy', { alias: 'mmy', name: 'Mewtwo-Mega-Y' } ],
    [ 'mray', { alias: 'mray', name: 'Rayquaza-Mega' } ],
    [ 'mzor', { alias: 'mzor', name: 'Scizor-Mega' } ],
    [ 'zardx', { alias: 'zardx', name: 'Charizard-MegaX' } ],
    [ 'zardy', { alias: 'zardy', name: 'Charizard-MegaY' } ],
    [ 'bulbapedia', { alias: 'bulbapedia', name: 'Bulbasaur' } ],
    [ 'serebii', { alias: 'serebii', name: 'Celebi' } ],
    [ 'ho-oh', { alias: 'ho-oh', name: 'hooh' } ],
    [ 'shep', { alias: 'shep', name: 'Ampharos-Mega' } ],
    [ 'type: null', { alias: 'type: null', name: 'typenull' } ],
    [ 'type null', { alias: 'type null', name: 'typenull' } ],
    [ 'mr. mime', { alias: 'mr. mime', name: 'mrmime' } ],
    [ 'mr mime', { alias: 'mr mime', name: 'mrmime' } ],
    [ 'mister mime', { alias: 'mister mime', name: 'mrmime' } ],
    [ 'mrmime', { alias: 'mrmime', name: 'mrmime' } ],
    [ 'mime jr.', { alias: 'mime jr.', name: 'mimejr' } ],
    [ 'mime jr', { alias: 'mime jr', name: 'mimejr' } ],
    [ 'mimejr', { alias: 'mimejr', name: 'mimejr' } ],
    [ 'mime junior', { alias: 'mime junior', name: 'mimejr' } ],
    [
      'necrozma dawn',
      { alias: 'necrozma dawn', name: 'necrozma-dawnwings' }
    ],
    [
      'necrozma dawn wings',
      { alias: 'necrozma dawn wings', name: 'necrozma-dawnwings' }
    ],
    [
      'necrozma-dawn',
      { alias: 'necrozma-dawn', name: 'necrozma-dawnwings' }
    ],
    [
      'necrozma-dawn-wings',
      { alias: 'necrozma-dawn-wings', name: 'necrozma-dawnwings' }
    ],
    [
      'necrozma dusk',
      { alias: 'necrozma dusk', name: 'necrozma-duskmane' }
    ],
    [
      'necrozma dusk mane',
      { alias: 'necrozma dusk mane', name: 'necrozma-duskmane' }
    ],
    [
      'necrozma-dusk',
      { alias: 'necrozma-dusk', name: 'necrozma-duskmane' }
    ],
    [
      'necrozma-dusk-mane',
      { alias: 'necrozma-dusk-mane', name: 'necrozma-duskmane' }
    ],
    [ 'tapu koko', { alias: 'tapu koko', name: 'tapukoko' } ],
    [ 'tapu lele', { alias: 'tapu lele', name: 'tapulele' } ],
    [ 'tapu bulu', { alias: 'tapu bulu', name: 'tapubulu' } ],
    [ 'tapu fini', { alias: 'tapu fini', name: 'tapufini' } ],
    [ 'mene', { alias: 'mene', name: 'cosmog' } ],
    [ 'favna', { alias: 'favna', name: 'dragonite' } ],
    [ 'm00', { alias: 'm00', name: 'missingno' } ],
    [ 'primaldon', { alias: 'primaldon', name: 'Groudon-Primal' } ],
    [ 'pdon', { alias: 'pdon', name: 'Groudon-Primal' } ],
    [ 'primalogre', { alias: 'primalogre', name: 'Kyogre-Primal' } ],
    [ 'pogre', { alias: 'pogre', name: 'Kyogre-Primal' } ],
    [ 'rattataa', { alias: 'rattataa', name: 'Rattata-Alola' } ],
    [
      'alolanrattata',
      { alias: 'alolanrattata', name: 'Rattata-Alola' }
    ],
    [ 'raticatea', { alias: 'raticatea', name: 'Raticate-Alola' } ],
    [
      'alolanraticate',
      { alias: 'alolanraticate', name: 'Raticate-Alola' }
    ],
    [ 'raichua', { alias: 'raichua', name: 'Raichu-Alola' } ],
    [ 'alolanraichu', { alias: 'alolanraichu', name: 'Raichu-Alola' } ],
    [ 'sandshrewa', { alias: 'sandshrewa', name: 'Sandshrew-Alola' } ],
    [
      'alolansandshrew',
      { alias: 'alolansandshrew', name: 'Sandshrew-Alola' }
    ],
    [ 'sandslasha', { alias: 'sandslasha', name: 'Sandslash-Alola' } ],
    [
      'alolansandslash',
      { alias: 'alolansandslash', name: 'Sandslash-Alola' }
    ],
    [ 'vulpixa', { alias: 'vulpixa', name: 'Vulpix-Alola' } ],
    [ 'alolanvulpix', { alias: 'alolanvulpix', name: 'Vulpix-Alola' } ],
    [ 'ninetalesa', { alias: 'ninetalesa', name: 'Ninetales-Alola' } ],
    [
      'alolanninetales',
      { alias: 'alolanninetales', name: 'Ninetales-Alola' }
    ],
    [ 'digletta', { alias: 'digletta', name: 'Diglett-Alola' } ],
    [
      'alolandiglett',
      { alias: 'alolandiglett', name: 'Diglett-Alola' }
    ],
    [ 'dugtrioa', { alias: 'dugtrioa', name: 'Dugtrio-Alola' } ],
    [
      'alolandugtrio',
      { alias: 'alolandugtrio', name: 'Dugtrio-Alola' }
    ],
    [ 'meowtha', { alias: 'meowtha', name: 'Meowth-Alola' } ],
    [ 'alolanmeowth', { alias: 'alolanmeowth', name: 'Meowth-Alola' } ],
    [ 'persiana', { alias: 'persiana', name: 'Persian-Alola' } ],
    [
      'alolanpersian',
      { alias: 'alolanpersian', name: 'Persian-Alola' }
    ],
    [ 'geodudea', { alias: 'geodudea', name: 'Geodude-Alola' } ],
    [
      'alolangeodude',
      { alias: 'alolangeodude', name: 'Geodude-Alola' }
    ],
    [ 'gravelera', { alias: 'gravelera', name: 'Graveler-Alola' } ],
    [
      'alolangraveler',
      { alias: 'alolangraveler', name: 'Graveler-Alola' }
    ],
    [ 'golema', { alias: 'golema', name: 'Golem-Alola' } ],
    [ 'alolangolem', { alias: 'alolangolem', name: 'Golem-Alola' } ],
    [ 'grimera', { alias: 'grimera', name: 'Grimer-Alola' } ],
    [ 'alolangrimer', { alias: 'alolangrimer', name: 'Grimer-Alola' } ],
    [ 'muka', { alias: 'muka', name: 'Muk-Alola' } ],
    [ 'alolanmuk', { alias: 'alolanmuk', name: 'Muk-Alola' } ],
    [ 'exeggutora', { alias: 'exeggutora', name: 'Exeggutor-Alola' } ],
    [
      'alolanexeggutor',
      { alias: 'alolanexeggutor', name: 'Exeggutor-Alola' }
    ],
    [ 'neckboy', { alias: 'neckboy', name: 'Exeggutor-Alola' } ],
    [ 'marowaka', { alias: 'marowaka', name: 'Marowak-Alola' } ],
    [
      'alolanmarowak',
      { alias: 'alolanmarowak', name: 'Marowak-Alola' }
    ],
    [ 'blackdoor', { alias: 'blackdoor', name: 'Pokestar Black-Door' } ],
    [ 'brycen', { alias: 'brycen', name: 'Brycen-Man' } ],
    [ 'brycenman', { alias: 'brycenman', name: 'Pokestar Brycen-Man' } ],
    [ 'f00', { alias: 'f00', name: 'Pokestar F00' } ],
    [ 'f002', { alias: 'f002', name: 'Pokestar F002' } ],
    [ 'giant', { alias: 'giant', name: 'Pokestar Giant' } ],
    [ 'mt', { alias: 'mt', name: 'Pokestar MT' } ],
    [ 'mt2', { alias: 'mt2', name: 'Pokestar MT2' } ],
    [ 'majin', { alias: 'majin', name: 'Spirit' } ],
    [ 'mechatyranitar', { alias: 'mechatyranitar', name: 'MT' } ],
    [ 'mechatyranitar2', { alias: 'mechatyranitar2', name: 'MT2' } ],
    [ 'monica', { alias: 'monica', name: 'Giant' } ],
    [ 'spirit', { alias: 'spirit', name: 'Pokestar Spirit' } ],
    [ 'transport', { alias: 'transport', name: 'Pokestar Transport' } ],
    [ 'ufo', { alias: 'ufo', name: 'Pokestar UFO' } ],
    [ 'ufo2', { alias: 'ufo2', name: 'Pokestar UFO-2' } ],
    [ 'whitedoor', { alias: 'whitedoor', name: 'Pokestar White-Door' } ],
    [ 'bugceus', { alias: 'bugceus', name: 'Arceus-Bug' } ],
    [ 'darkceus', { alias: 'darkceus', name: 'Arceus-Dark' } ],
    [ 'dragonceus', { alias: 'dragonceus', name: 'Arceus-Dragon' } ],
    [ 'eleceus', { alias: 'eleceus', name: 'Arceus-Electric' } ],
    [ 'fairyceus', { alias: 'fairyceus', name: 'Arceus-Fairy' } ],
    [ 'fightceus', { alias: 'fightceus', name: 'Arceus-Fighting' } ],
    [ 'fireceus', { alias: 'fireceus', name: 'Arceus-Fire' } ],
    [ 'flyceus', { alias: 'flyceus', name: 'Arceus-Flying' } ],
    [ 'ghostceus', { alias: 'ghostceus', name: 'Arceus-Ghost' } ],
    [ 'grassceus', { alias: 'grassceus', name: 'Arceus-Grass' } ],
    [ 'groundceus', { alias: 'groundceus', name: 'Arceus-Ground' } ],
    [ 'iceceus', { alias: 'iceceus', name: 'Arceus-Ice' } ],
    [ 'poisonceus', { alias: 'poisonceus', name: 'Arceus-Poison' } ],
    [ 'psyceus', { alias: 'psyceus', name: 'Arceus-Psychic' } ],
    [ 'rockceus', { alias: 'rockceus', name: 'Arceus-Rock' } ],
    [ 'steelceus', { alias: 'steelceus', name: 'Arceus-Steel' } ],
    [ 'waterceus', { alias: 'waterceus', name: 'Arceus-Water' } ],
    [ 'arcbug', { alias: 'arcbug', name: 'Arceus-Bug' } ],
    [ 'arcdark', { alias: 'arcdark', name: 'Arceus-Dark' } ],
    [ 'arcdragon', { alias: 'arcdragon', name: 'Arceus-Dragon' } ],
    [ 'arcelectric', { alias: 'arcelectric', name: 'Arceus-Electric' } ],
    [ 'arcfairy', { alias: 'arcfairy', name: 'Arceus-Fairy' } ],
    [ 'arcfighting', { alias: 'arcfighting', name: 'Arceus-Fighting' } ],
    [ 'arcfire', { alias: 'arcfire', name: 'Arceus-Fire' } ],
    [ 'arcflying', { alias: 'arcflying', name: 'Arceus-Flying' } ],
    [ 'arcghost', { alias: 'arcghost', name: 'Arceus-Ghost' } ],
    [ 'arcgrass', { alias: 'arcgrass', name: 'Arceus-Grass' } ],
    [ 'arcground', { alias: 'arcground', name: 'Arceus-Ground' } ],
    [ 'arcice', { alias: 'arcice', name: 'Arceus-Ice' } ],
    [ 'arcpoison', { alias: 'arcpoison', name: 'Arceus-Poison' } ],
    [ 'arcpsychic', { alias: 'arcpsychic', name: 'Arceus-Psychic' } ],
    [ 'arcrock', { alias: 'arcrock', name: 'Arceus-Rock' } ],
    [ 'arcsteel', { alias: 'arcsteel', name: 'Arceus-Steel' } ],
    [ 'arcwater', { alias: 'arcwater', name: 'Arceus-Water' } ],
    [
      'basculinb',
      { alias: 'basculinb', name: 'Basculin-Blue-Striped' }
    ],
    [
      'basculinblue',
      { alias: 'basculinblue', name: 'Basculin-Blue-Striped' }
    ],
    [
      'basculinbluestripe',
      { alias: 'basculinbluestripe', name: 'Basculin-Blue-Striped' }
    ],
    [ 'castformh', { alias: 'castformh', name: 'Castform-Snowy' } ],
    [ 'castformice', { alias: 'castformice', name: 'Castform-Snowy' } ],
    [ 'castformr', { alias: 'castformr', name: 'Castform-Rainy' } ],
    [
      'castformwater',
      { alias: 'castformwater', name: 'Castform-Rainy' }
    ],
    [ 'castforms', { alias: 'castforms', name: 'Castform-Sunny' } ],
    [ 'castformfire', { alias: 'castformfire', name: 'Castform-Sunny' } ],
    [ 'cherrims', { alias: 'cherrims', name: 'Cherrim-Sunshine' } ],
    [
      'cherrimsunny',
      { alias: 'cherrimsunny', name: 'Cherrim-Sunshine' }
    ],
    [ 'darmanitanz', { alias: 'darmanitanz', name: 'Darmanitan-Zen' } ],
    [
      'darmanitanzenmode',
      { alias: 'darmanitanzenmode', name: 'Darmanitan-Zen' }
    ],
    [ 'deoxysnormal', { alias: 'deoxysnormal', name: 'Deoxys' } ],
    [ 'deon', { alias: 'deon', name: 'Deoxys' } ],
    [ 'deoxysa', { alias: 'deoxysa', name: 'Deoxys-Attack' } ],
    [ 'deoa', { alias: 'deoa', name: 'Deoxys-Attack' } ],
    [ 'deoxysd', { alias: 'deoxysd', name: 'Deoxys-Defense' } ],
    [
      'deoxysdefence',
      { alias: 'deoxysdefence', name: 'Deoxys-Defense' }
    ],
    [ 'deod', { alias: 'deod', name: 'Deoxys-Defense' } ],
    [ 'deoxyss', { alias: 'deoxyss', name: 'Deoxys-Speed' } ],
    [ 'deos', { alias: 'deos', name: 'Deoxys-Speed' } ],
    [
      'eternalfloette',
      { alias: 'eternalfloette', name: 'Floette-Eternal' }
    ],
    [ 'girao', { alias: 'girao', name: 'Giratina-Origin' } ],
    [ 'giratinao', { alias: 'giratinao', name: 'Giratina-Origin' } ],
    [ 'gourgeists', { alias: 'gourgeists', name: 'Gourgeist-Small' } ],
    [ 'gourgeistl', { alias: 'gourgeistl', name: 'Gourgeist-Large' } ],
    [ 'gourgeistxl', { alias: 'gourgeistxl', name: 'Gourgeist-Super' } ],
    [ 'gourgeisth', { alias: 'gourgeisth', name: 'Gourgeist-Super' } ],
    [
      'gourgeisthuge',
      { alias: 'gourgeisthuge', name: 'Gourgeist-Super' }
    ],
    [ 'hoopau', { alias: 'hoopau', name: 'Hoopa-Unbound' } ],
    [ 'keldeor', { alias: 'keldeor', name: 'Keldeo-Resolute' } ],
    [
      'keldeoresolution',
      { alias: 'keldeoresolution', name: 'Keldeo-Resolute' }
    ],
    [ 'kyuremb', { alias: 'kyuremb', name: 'Kyurem-Black' } ],
    [ 'kyuremw', { alias: 'kyuremw', name: 'Kyurem-White' } ],
    [ 'landorust', { alias: 'landorust', name: 'Landorus-Therian' } ],
    [ 'meloettap', { alias: 'meloettap', name: 'Meloetta-Pirouette' } ],
    [ 'meloettas', { alias: 'meloettas', name: 'Meloetta-Pirouette' } ],
    [
      'meloettastep',
      { alias: 'meloettastep', name: 'Meloetta-Pirouette' }
    ],
    [ 'meowsticfemale', { alias: 'meowsticfemale', name: 'Meowstic-F' } ],
    [
      'pumpkaboohuge',
      { alias: 'pumpkaboohuge', name: 'Pumpkaboo-Super' }
    ],
    [ 'rotomc', { alias: 'rotomc', name: 'Rotom-Mow' } ],
    [ 'rotomcut', { alias: 'rotomcut', name: 'Rotom-Mow' } ],
    [ 'rotomf', { alias: 'rotomf', name: 'Rotom-Frost' } ],
    [ 'rotomh', { alias: 'rotomh', name: 'Rotom-Heat' } ],
    [ 'rotoms', { alias: 'rotoms', name: 'Rotom-Fan' } ],
    [ 'rotomspin', { alias: 'rotomspin', name: 'Rotom-Fan' } ],
    [ 'rotomw', { alias: 'rotomw', name: 'Rotom-Wash' } ],
    [ 'shaymins', { alias: 'shaymins', name: 'Shaymin-Sky' } ],
    [ 'skymin', { alias: 'skymin', name: 'Shaymin-Sky' } ],
    [ 'thundurust', { alias: 'thundurust', name: 'Thundurus-Therian' } ],
    [ 'thundyt', { alias: 'thundyt', name: 'Thundurus-Therian' } ],
    [ 'tornadust', { alias: 'tornadust', name: 'Tornadus-Therian' } ],
    [ 'tornt', { alias: 'tornt', name: 'Tornadus-Therian' } ],
    [ 'wormadamg', { alias: 'wormadamg', name: 'Wormadam-Sandy' } ],
    [
      'wormadamground',
      { alias: 'wormadamground', name: 'Wormadam-Sandy' }
    ],
    [
      'wormadamsandycloak',
      { alias: 'wormadamsandycloak', name: 'Wormadam-Sandy' }
    ],
    [ 'wormadams', { alias: 'wormadams', name: 'Wormadam-Trash' } ],
    [
      'wormadamsteel',
      { alias: 'wormadamsteel', name: 'Wormadam-Trash' }
    ],
    [
      'wormadamtrashcloak',
      { alias: 'wormadamtrashcloak', name: 'Wormadam-Trash' }
    ],
    [ 'floettee', { alias: 'floettee', name: 'Floette-Eternal' } ],
    [
      'floetteeternalflower',
      { alias: 'floetteeternalflower', name: 'Floette-Eternal' }
    ],
    [ 'ashgreninja', { alias: 'ashgreninja', name: 'Greninja-Ash' } ],
    [ 'zydog', { alias: 'zydog', name: 'Zygarde-10%' } ],
    [ 'zydoge', { alias: 'zydoge', name: 'Zygarde-10%' } ],
    [ 'zygardedog', { alias: 'zygardedog', name: 'Zygarde-10%' } ],
    [ 'zygarde50', { alias: 'zygarde50', name: 'Zygarde' } ],
    [ 'zyc', { alias: 'zyc', name: 'Zygarde-Complete' } ],
    [ 'zygarde100', { alias: 'zygarde100', name: 'Zygarde-Complete' } ],
    [ 'zygardec', { alias: 'zygardec', name: 'Zygarde-Complete' } ],
    [ 'zygardefull', { alias: 'zygardefull', name: 'Zygarde-Complete' } ],
    [ 'zygod', { alias: 'zygod', name: 'Zygarde-Complete' } ],
    [
      'perfectzygarde',
      { alias: 'perfectzygarde', name: 'Zygarde-Complete' }
    ],
    [ 'oricoriob', { alias: 'oricoriob', name: 'Oricorio' } ],
    [ 'oricoriobaile', { alias: 'oricoriobaile', name: 'Oricorio' } ],
    [ 'oricoriof', { alias: 'oricoriof', name: 'Oricorio' } ],
    [ 'oricoriofire', { alias: 'oricoriofire', name: 'Oricorio' } ],
    [ 'oricorioe', { alias: 'oricorioe', name: 'Oricorio-Pom-Pom' } ],
    [
      'oricorioelectric',
      { alias: 'oricorioelectric', name: 'Oricorio-Pom-Pom' }
    ],
    [ 'oricoriog', { alias: 'oricoriog', name: 'Oricorio-Sensu' } ],
    [
      'oricorioghost',
      { alias: 'oricorioghost', name: 'Oricorio-Sensu' }
    ],
    [ 'oricorios', { alias: 'oricorios', name: 'Oricorio-Sensu' } ],
    [ 'oricoriop', { alias: 'oricoriop', name: 'Oricorio-Pa\'u' } ],
    [
      'oricoriopsychic',
      { alias: 'oricoriopsychic', name: 'Oricorio-Pa\'u' }
    ],
    [ 'lycanrocmidday', { alias: 'lycanrocmidday', name: 'Lycanroc' } ],
    [ 'lycanrocday', { alias: 'lycanrocday', name: 'Lycanroc' } ],
    [ 'lycanrocn', { alias: 'lycanrocn', name: 'Lycanroc-Midnight' } ],
    [
      'lycanrocnight',
      { alias: 'lycanrocnight', name: 'Lycanroc-Midnight' }
    ],
    [ 'lycanrocd', { alias: 'lycanrocd', name: 'Lycanroc-Dusk' } ],
    [ 'necrozmadm', { alias: 'necrozmadm', name: 'Necrozma-Dusk-Mane' } ],
    [
      'necrozmadusk',
      { alias: 'necrozmadusk', name: 'Necrozma-Dusk-Mane' }
    ],
    [ 'duskmane', { alias: 'duskmane', name: 'Necrozma-Dusk-Mane' } ],
    [
      'duskmanenecrozma',
      { alias: 'duskmanenecrozma', name: 'Necrozma-Dusk-Mane' }
    ],
    [
      'necrozmadw',
      { alias: 'necrozmadw', name: 'Necrozma-Dawn-Wings' }
    ],
    [
      'necrozmadawn',
      { alias: 'necrozmadawn', name: 'Necrozma-Dawn-Wings' }
    ],
    [ 'dawnwings', { alias: 'dawnwings', name: 'Necrozma-Dawn-Wings' } ],
    [
      'dawnwingsnecrozma',
      { alias: 'dawnwingsnecrozma', name: 'Necrozma-Dawn-Wings' }
    ],
    [ 'necrozmau', { alias: 'necrozmau', name: 'Necrozma-Ultra' } ],
    [
      'ultranecrozma',
      { alias: 'ultranecrozma', name: 'Necrozma-Ultra' }
    ],
    [ 'ufop', { alias: 'ufop', name: 'Pokestar UFO-2' } ],
    [ 'ufopsychic', { alias: 'ufopsychic', name: 'Pokestar UFO-2' } ],
    [ 'nidoranfemale', { alias: 'nidoranfemale', name: 'Nidoran-F' } ],
    [ 'nidoranmale', { alias: 'nidoranmale', name: 'Nidoran-M' } ],
    [ 'wormadamgrass', { alias: 'wormadamgrass', name: 'Wormadam' } ],
    [ 'wormadamp', { alias: 'wormadamp', name: 'Wormadam' } ],
    [ 'wormadamplant', { alias: 'wormadamplant', name: 'Wormadam' } ],
    [
      'wormadamplantcloak',
      { alias: 'wormadamplantcloak', name: 'Wormadam' }
    ],
    [ 'cherrimo', { alias: 'cherrimo', name: 'Cherrim' } ],
    [ 'cherrimovercast', { alias: 'cherrimovercast', name: 'Cherrim' } ],
    [ 'giratinaa', { alias: 'giratinaa', name: 'Giratina' } ],
    [ 'giratinaaltered', { alias: 'giratinaaltered', name: 'Giratina' } ],
    [ 'shayminl', { alias: 'shayminl', name: 'Shaymin' } ],
    [ 'shayminland', { alias: 'shayminland', name: 'Shaymin' } ],
    [ 'basculinr', { alias: 'basculinr', name: 'Basculin' } ],
    [ 'basculinred', { alias: 'basculinred', name: 'Basculin' } ],
    [
      'basculinredstripe',
      { alias: 'basculinredstripe', name: 'Basculin' }
    ],
    [
      'basculinredstriped',
      { alias: 'basculinredstriped', name: 'Basculin' }
    ],
    [ 'darmanitans', { alias: 'darmanitans', name: 'Darmanitan' } ],
    [
      'darmanitanstandard',
      { alias: 'darmanitanstandard', name: 'Darmanitan' }
    ],
    [
      'darmanitanstandardmode',
      { alias: 'darmanitanstandardmode', name: 'Darmanitan' }
    ],
    [ 'tornadusi', { alias: 'tornadusi', name: 'Tornadus' } ],
    [
      'tornadusincarnate',
      { alias: 'tornadusincarnate', name: 'Tornadus' }
    ],
    [
      'tornadusincarnation',
      { alias: 'tornadusincarnation', name: 'Tornadus' }
    ],
    [ 'thundurusi', { alias: 'thundurusi', name: 'Thundurus' } ],
    [
      'thundurusincarnate',
      { alias: 'thundurusincarnate', name: 'Thundurus' }
    ],
    [
      'thundurusincarnation',
      { alias: 'thundurusincarnation', name: 'Thundurus' }
    ],
    [ 'landorusi', { alias: 'landorusi', name: 'Landorus' } ],
    [
      'landorusincarnate',
      { alias: 'landorusincarnate', name: 'Landorus' }
    ],
    [
      'landorusincarnation',
      { alias: 'landorusincarnation', name: 'Landorus' }
    ],
    [ 'keldeoo', { alias: 'keldeoo', name: 'Keldeo' } ],
    [ 'keldeoordinary', { alias: 'keldeoordinary', name: 'Keldeo' } ],
    [ 'meloettaa', { alias: 'meloettaa', name: 'Meloetta' } ],
    [ 'meloettaaria', { alias: 'meloettaaria', name: 'Meloetta' } ],
    [ 'meloettavoice', { alias: 'meloettavoice', name: 'Meloetta' } ],
    [ 'meowsticm', { alias: 'meowsticm', name: 'Meowstic' } ],
    [ 'meowsticmale', { alias: 'meowsticmale', name: 'Meowstic' } ],
    [ 'aegislashs', { alias: 'aegislashs', name: 'Aegislash' } ],
    [
      'aegislashshield',
      { alias: 'aegislashshield', name: 'Aegislash' }
    ],
    [
      'pumpkabooaverage',
      { alias: 'pumpkabooaverage', name: 'Pumpkaboo' }
    ],
    [
      'gourgeistaverage',
      { alias: 'gourgeistaverage', name: 'Gourgeist' }
    ],
    [ 'hoopac', { alias: 'hoopac', name: 'Hoopa' } ],
    [ 'hoopaconfined', { alias: 'hoopaconfined', name: 'Hoopa' } ],
    [ 'wishiwashisolo', { alias: 'wishiwashisolo', name: 'Wishiwashi' } ],
    [ 'pokestarufof', { alias: 'pokestarufof', name: 'Pokestar UFO' } ],
    [
      'pokestarufoflying',
      { alias: 'pokestarufoflying', name: 'Pokestar UFO' }
    ],
    [ 'ufof', { alias: 'ufof', name: 'Pokestar UFO' } ],
    [ 'ufoflying', { alias: 'ufoflying', name: 'Pokestar UFO' } ],
    [ 'rockruffdusk', { alias: 'rockruffdusk', name: 'Rockruff' } ],
    [ 'raticatet', { alias: 'raticatet', name: 'Raticate-Alola-Totem' } ],
    [
      'totemalolanraticate',
      { alias: 'totemalolanraticate', name: 'Raticate-Alola-Totem' }
    ],
    [
      'totemraticate',
      { alias: 'totemraticate', name: 'Raticate-Alola-Totem' }
    ],
    [
      'totemraticatea',
      { alias: 'totemraticatea', name: 'Raticate-Alola-Totem' }
    ],
    [
      'totemraticatealola',
      { alias: 'totemraticatealola', name: 'Raticate-Alola-Totem' }
    ],
    [ 'marowakt', { alias: 'marowakt', name: 'Marowak-Alola-Totem' } ],
    [
      'totemalolanmarowak',
      { alias: 'totemalolanmarowak', name: 'Marowak-Alola-Totem' }
    ],
    [
      'totemmarowak',
      { alias: 'totemmarowak', name: 'Marowak-Alola-Totem' }
    ],
    [
      'totemmarowaka',
      { alias: 'totemmarowaka', name: 'Marowak-Alola-Totem' }
    ],
    [
      'totemmarowakalola',
      { alias: 'totemmarowakalola', name: 'Marowak-Alola-Totem' }
    ],
    [ 'gumshoost', { alias: 'gumshoost', name: 'Gumshoos-Totem' } ],
    [
      'totemgumshoos',
      { alias: 'totemgumshoos', name: 'Gumshoos-Totem' }
    ],
    [
      'totemvikavolt',
      { alias: 'totemvikavolt', name: 'Vikavolt-Totem' }
    ],
    [ 'vikavoltt', { alias: 'vikavoltt', name: 'Vikavolt-Totem' } ],
    [ 'ribombeet', { alias: 'ribombeet', name: 'Ribombee-Totem' } ],
    [
      'totemribombee',
      { alias: 'totemribombee', name: 'Ribombee-Totem' }
    ],
    [ 'araquanidt', { alias: 'araquanidt', name: 'Araquanid-Totem' } ],
    [
      'totemaraquanid',
      { alias: 'totemaraquanid', name: 'Araquanid-Totem' }
    ],
    [ 'lurantist', { alias: 'lurantist', name: 'Lurantis-Totem' } ],
    [
      'totemlurantis',
      { alias: 'totemlurantis', name: 'Lurantis-Totem' }
    ],
    [ 'salazzlet', { alias: 'salazzlet', name: 'Salazzle-Totem' } ],
    [
      'totemsalazzle',
      { alias: 'totemsalazzle', name: 'Salazzle-Totem' }
    ],
    [ 'mimikyut', { alias: 'mimikyut', name: 'Mimikyu-Totem' } ],
    [ 'totemmimikyu', { alias: 'totemmimikyu', name: 'Mimikyu-Totem' } ],
    [ 'kommoot', { alias: 'kommoot', name: 'Kommo-o-Totem' } ],
    [ 'totemkommoo', { alias: 'totemkommoo', name: 'Kommo-o-Totem' } ],
    [ 'burmygrass', { alias: 'burmygrass', name: 'Burmy' } ],
    [ 'burmyplant', { alias: 'burmyplant', name: 'Burmy' } ],
    [ 'burmysandy', { alias: 'burmysandy', name: 'Burmy' } ],
    [ 'burmytrash', { alias: 'burmytrash', name: 'Burmy' } ],
    [ 'shelloseast', { alias: 'shelloseast', name: 'Shellos' } ],
    [ 'shelloswest', { alias: 'shelloswest', name: 'Shellos' } ],
    [ 'gastrodone', { alias: 'gastrodone', name: 'Gastrodon' } ],
    [ 'gastrodoneast', { alias: 'gastrodoneast', name: 'Gastrodon' } ],
    [
      'gastrodoneastsea',
      { alias: 'gastrodoneastsea', name: 'Gastrodon' }
    ],
    [ 'gastrodonw', { alias: 'gastrodonw', name: 'Gastrodon' } ],
    [ 'gastrodonwest', { alias: 'gastrodonwest', name: 'Gastrodon' } ],
    [
      'gastrodonwestsea',
      { alias: 'gastrodonwestsea', name: 'Gastrodon' }
    ],
    [ 'deerlingspring', { alias: 'deerlingspring', name: 'Deerling' } ],
    [ 'deerlingsummer', { alias: 'deerlingsummer', name: 'Deerling' } ],
    [ 'deerlingautumn', { alias: 'deerlingautumn', name: 'Deerling' } ],
    [ 'deerlingwinter', { alias: 'deerlingwinter', name: 'Deerling' } ],
    [ 'sawsbuckspring', { alias: 'sawsbuckspring', name: 'Sawsbuck' } ],
    [ 'sawsbucksummer', { alias: 'sawsbucksummer', name: 'Sawsbuck' } ],
    [ 'sawsbuckautumn', { alias: 'sawsbuckautumn', name: 'Sawsbuck' } ],
    [ 'sawsbuckwinter', { alias: 'sawsbuckwinter', name: 'Sawsbuck' } ],
    [
      'vivillonarchipelago',
      { alias: 'vivillonarchipelago', name: 'Vivillon' }
    ],
    [
      'vivilloncontinental',
      { alias: 'vivilloncontinental', name: 'Vivillon' }
    ],
    [ 'vivillonelegant', { alias: 'vivillonelegant', name: 'Vivillon' } ],
    [ 'vivillongarden', { alias: 'vivillongarden', name: 'Vivillon' } ],
    [
      'vivillonhighplains',
      { alias: 'vivillonhighplains', name: 'Vivillon' }
    ],
    [ 'vivillonicysnow', { alias: 'vivillonicysnow', name: 'Vivillon' } ],
    [ 'vivillonjungle', { alias: 'vivillonjungle', name: 'Vivillon' } ],
    [ 'vivillonmarine', { alias: 'vivillonmarine', name: 'Vivillon' } ],
    [ 'vivillonmodern', { alias: 'vivillonmodern', name: 'Vivillon' } ],
    [ 'vivillonmonsoon', { alias: 'vivillonmonsoon', name: 'Vivillon' } ],
    [ 'vivillonocean', { alias: 'vivillonocean', name: 'Vivillon' } ],
    [ 'vivillonpolar', { alias: 'vivillonpolar', name: 'Vivillon' } ],
    [ 'vivillonriver', { alias: 'vivillonriver', name: 'Vivillon' } ],
    [
      'vivillonsandstorm',
      { alias: 'vivillonsandstorm', name: 'Vivillon' }
    ],
    [ 'vivillonsavanna', { alias: 'vivillonsavanna', name: 'Vivillon' } ],
    [ 'vivillonsun', { alias: 'vivillonsun', name: 'Vivillon' } ],
    [ 'vivillontundra', { alias: 'vivillontundra', name: 'Vivillon' } ],
    [ 'flabb', { alias: 'flabb', name: 'Flabebe' } ],
    [ 'flabebered', { alias: 'flabebered', name: 'Flabebe' } ],
    [ 'flabebeblue', { alias: 'flabebeblue', name: 'Flabebe' } ],
    [ 'flabebeorange', { alias: 'flabebeorange', name: 'Flabebe' } ],
    [ 'flabebewhite', { alias: 'flabebewhite', name: 'Flabebe' } ],
    [ 'flabebeyellow', { alias: 'flabebeyellow', name: 'Flabebe' } ],
    [ 'flabbred', { alias: 'flabbred', name: 'Flabebe' } ],
    [ 'flabbblue', { alias: 'flabbblue', name: 'Flabebe' } ],
    [ 'flabborange', { alias: 'flabborange', name: 'Flabebe' } ],
    [ 'flabbwhite', { alias: 'flabbwhite', name: 'Flabebe' } ],
    [ 'flabbyellow', { alias: 'flabbyellow', name: 'Flabebe' } ],
    [ 'floettered', { alias: 'floettered', name: 'Floette' } ],
    [ 'floetteblue', { alias: 'floetteblue', name: 'Floette' } ],
    [ 'floetteorange', { alias: 'floetteorange', name: 'Floette' } ],
    [ 'floettewhite', { alias: 'floettewhite', name: 'Floette' } ],
    [ 'floetteyellow', { alias: 'floetteyellow', name: 'Floette' } ],
    [ 'florgesred', { alias: 'florgesred', name: 'Florges' } ],
    [ 'florgesblue', { alias: 'florgesblue', name: 'Florges' } ],
    [ 'florgesorange', { alias: 'florgesorange', name: 'Florges' } ],
    [ 'florgeswhite', { alias: 'florgeswhite', name: 'Florges' } ],
    [ 'florgesyellow', { alias: 'florgesyellow', name: 'Florges' } ],
    [ 'miniorred', { alias: 'miniorred', name: 'Minior' } ],
    [ 'miniororange', { alias: 'miniororange', name: 'Minior' } ],
    [ 'minioryellow', { alias: 'minioryellow', name: 'Minior' } ],
    [ 'miniorgreen', { alias: 'miniorgreen', name: 'Minior' } ],
    [ 'miniorblue', { alias: 'miniorblue', name: 'Minior' } ],
    [ 'miniorindigo', { alias: 'miniorindigo', name: 'Minior' } ],
    [ 'miniorviolet', { alias: 'miniorviolet', name: 'Minior' } ],
    [
      'pokestargiant2',
      { alias: 'pokestargiant2', name: 'Pokestar Giant' }
    ],
    [
      'pokestarmonica2',
      { alias: 'pokestarmonica2', name: 'Pokestar Giant' }
    ],
    [
      'pokestarufopropu1',
      { alias: 'pokestarufopropu1', name: 'Pokestar UFO' }
    ],
    [
      'pokestarpropu1',
      { alias: 'pokestarpropu1', name: 'Pokestar UFO' }
    ],
    [
      'pokestarufopropu2',
      { alias: 'pokestarufopropu2', name: 'Pokestar UFO-2' }
    ],
    [
      'pokestarpropu2',
      { alias: 'pokestarpropu2', name: 'Pokestar UFO-2' }
    ],
    [
      'pokestarbrycenmanprop',
      { alias: 'pokestarbrycenmanprop', name: 'Pokestar Brycen-Man' }
    ],
    [
      'pokestarproph1',
      { alias: 'pokestarproph1', name: 'Pokestar Brycen-Man' }
    ],
    [
      'pokestarmtprop',
      { alias: 'pokestarmtprop', name: 'Pokestar MT' }
    ],
    [
      'pokestarpropm1',
      { alias: 'pokestarpropm1', name: 'Pokestar MT' }
    ],
    [
      'pokestarmt2prop',
      { alias: 'pokestarmt2prop', name: 'Pokestar MT2' }
    ],
    [
      'pokestarpropm2',
      { alias: 'pokestarpropm2', name: 'Pokestar MT2' }
    ],
    [
      'pokestartransportprop',
      { alias: 'pokestartransportprop', name: 'Pokestar Transport' }
    ],
    [
      'pokestarpropt1',
      { alias: 'pokestarpropt1', name: 'Pokestar Transport' }
    ],
    [
      'pokestargiantpropo1',
      { alias: 'pokestargiantpropo1', name: 'Pokestar Giant' }
    ],
    [
      'pokestarpropo1',
      { alias: 'pokestarpropo1', name: 'Pokestar Giant' }
    ],
    [
      'pokestargiantpropo2',
      { alias: 'pokestargiantpropo2', name: 'Pokestar Giant' }
    ],
    [
      'pokestarpropo2',
      { alias: 'pokestarpropo2', name: 'Pokestar Giant' }
    ],
    [
      'pokestarhumanoidprop',
      { alias: 'pokestarhumanoidprop', name: 'Pokestar Humanoid' }
    ],
    [
      'pokestarpropc1',
      { alias: 'pokestarpropc1', name: 'Pokestar Humanoid' }
    ],
    [
      'pokestarmonsterprop',
      { alias: 'pokestarmonsterprop', name: 'Pokestar Monster' }
    ],
    [
      'pokestarpropc2',
      { alias: 'pokestarpropc2', name: 'Pokestar Monster' }
    ],
    [
      'pokestarspiritprop',
      { alias: 'pokestarspiritprop', name: 'Pokestar Spirit' }
    ],
    [
      'pokestarpropg1',
      { alias: 'pokestarpropg1', name: 'Pokestar Spirit' }
    ],
    [
      'pokestarblackdoorprop',
      { alias: 'pokestarblackdoorprop', name: 'Pokestar Black Door' }
    ],
    [
      'pokestarpropw1',
      { alias: 'pokestarpropw1', name: 'Pokestar Black Door' }
    ],
    [
      'pokestarwhitedoorprop',
      { alias: 'pokestarwhitedoorprop', name: 'Pokestar White Door' }
    ],
    [
      'pokestarpropw2',
      { alias: 'pokestarpropw2', name: 'Pokestar White Door' }
    ],
    [
      'pokestarf00prop',
      { alias: 'pokestarf00prop', name: 'Pokestar F00' }
    ],
    [
      'pokestarpropr1',
      { alias: 'pokestarpropr1', name: 'Pokestar F00' }
    ],
    [
      'pokestarf002prop',
      { alias: 'pokestarf002prop', name: 'Pokestar F002' }
    ],
    [
      'pokestarpropr2',
      { alias: 'pokestarpropr2', name: 'Pokestar F002' }
    ],
    [
      'pokestarblackbeltprop',
      { alias: 'pokestarblackbeltprop', name: 'Pokestar Black Belt' }
    ],
    [
      'pokestarpropk1',
      { alias: 'pokestarpropk1', name: 'Pokestar Black Belt' }
    ],
    [ 'giant2', { alias: 'giant2', name: 'Pokestar Giant' } ],
    [ 'monica2', { alias: 'monica2', name: 'Pokestar Giant' } ],
    [ 'ufopropu1', { alias: 'ufopropu1', name: 'Pokestar UFO' } ],
    [ 'propu1', { alias: 'propu1', name: 'Pokestar UFO' } ],
    [ 'ufopropu2', { alias: 'ufopropu2', name: 'Pokestar UFO-2' } ],
    [ 'propu2', { alias: 'propu2', name: 'Pokestar UFO-2' } ],
    [
      'brycenmanprop',
      { alias: 'brycenmanprop', name: 'Pokestar Brycen-Man' }
    ],
    [ 'proph1', { alias: 'proph1', name: 'Pokestar Brycen-Man' } ],
    [ 'mtprop', { alias: 'mtprop', name: 'Pokestar MT' } ],
    [ 'propm1', { alias: 'propm1', name: 'Pokestar MT' } ],
    [ 'mt2prop', { alias: 'mt2prop', name: 'Pokestar MT2' } ],
    [ 'propm2', { alias: 'propm2', name: 'Pokestar MT2' } ],
    [
      'transportprop',
      { alias: 'transportprop', name: 'Pokestar Transport' }
    ],
    [ 'propt1', { alias: 'propt1', name: 'Pokestar Transport' } ],
    [ 'giantpropo1', { alias: 'giantpropo1', name: 'Pokestar Giant' } ],
    [ 'propo1', { alias: 'propo1', name: 'Pokestar Giant' } ],
    [ 'giantpropo2', { alias: 'giantpropo2', name: 'Pokestar Giant' } ],
    [ 'propo2', { alias: 'propo2', name: 'Pokestar Giant' } ],
    [
      'humanoidprop',
      { alias: 'humanoidprop', name: 'Pokestar Humanoid' }
    ],
    [ 'propc1', { alias: 'propc1', name: 'Pokestar Humanoid' } ],
    [ 'monsterprop', { alias: 'monsterprop', name: 'Pokestar Monster' } ],
    [ 'propc2', { alias: 'propc2', name: 'Pokestar Monster' } ],
    [ 'spiritprop', { alias: 'spiritprop', name: 'Pokestar Spirit' } ],
    [ 'propg1', { alias: 'propg1', name: 'Pokestar Spirit' } ],
    [
      'blackdoorprop',
      { alias: 'blackdoorprop', name: 'Pokestar Black Door' }
    ],
    [ 'propw1', { alias: 'propw1', name: 'Pokestar Black Door' } ],
    [
      'whitedoorprop',
      { alias: 'whitedoorprop', name: 'Pokestar White Door' }
    ],
    [ 'propw2', { alias: 'propw2', name: 'Pokestar White Door' } ],
    [ 'f00prop', { alias: 'f00prop', name: 'Pokestar F00' } ],
    [ 'propr1', { alias: 'propr1', name: 'Pokestar F00' } ],
    [ 'f002prop', { alias: 'f002prop', name: 'Pokestar F002' } ],
    [ 'propr2', { alias: 'propr2', name: 'Pokestar F002' } ],
    [
      'blackbeltprop',
      { alias: 'blackbeltprop', name: 'Pokestar Black Belt' }
    ],
    [ 'propk1', { alias: 'propk1', name: 'Pokestar Black Belt' } ],
    [ 'aboma', { alias: 'aboma', name: 'Abomasnow' } ],
    [ 'aegi', { alias: 'aegi', name: 'Aegislash' } ],
    [ 'aegiblade', { alias: 'aegiblade', name: 'Aegislash-Blade' } ],
    [ 'aegis', { alias: 'aegis', name: 'Aegislash' } ],
    [ 'aero', { alias: 'aero', name: 'Aerodactyl' } ],
    [ 'amph', { alias: 'amph', name: 'Ampharos' } ],
    [ 'arc', { alias: 'arc', name: 'Arceus' } ],
    [ 'arceusnormal', { alias: 'arceusnormal', name: 'Arceus' } ],
    [ 'ashgren', { alias: 'ashgren', name: 'Greninja-Ash' } ],
    [ 'azu', { alias: 'azu', name: 'Azumarill' } ],
    [ 'bdrill', { alias: 'bdrill', name: 'Beedrill' } ],
    [ 'bee', { alias: 'bee', name: 'Beedrill' } ],
    [ 'birdjesus', { alias: 'birdjesus', name: 'Pidgeot' } ],
    [ 'blace', { alias: 'blace', name: 'Blacephalon' } ],
    [ 'bliss', { alias: 'bliss', name: 'Blissey' } ],
    [ 'bulu', { alias: 'bulu', name: 'Tapu Bulu' } ],
    [ 'camel', { alias: 'camel', name: 'Camerupt' } ],
    [ 'cathy', { alias: 'cathy', name: 'Trevenant' } ],
    [ 'chandy', { alias: 'chandy', name: 'Chandelure' } ],
    [ 'chomp', { alias: 'chomp', name: 'Garchomp' } ],
    [ 'clef', { alias: 'clef', name: 'Clefable' } ],
    [ 'coba', { alias: 'coba', name: 'Cobalion' } ],
    [ 'cofag', { alias: 'cofag', name: 'Cofagrigus' } ],
    [ 'conk', { alias: 'conk', name: 'Conkeldurr' } ],
    [ 'cress', { alias: 'cress', name: 'Cresselia' } ],
    [ 'cube', { alias: 'cube', name: 'Kyurem-Black' } ],
    [ 'cune', { alias: 'cune', name: 'Suicune' } ],
    [ 'darm', { alias: 'darm', name: 'Darmanitan' } ],
    [ 'dnite', { alias: 'dnite', name: 'Dragonite' } ],
    [ 'dogars', { alias: 'dogars', name: 'Koffing' } ],
    [ 'don', { alias: 'don', name: 'Groudon' } ],
    [ 'drill', { alias: 'drill', name: 'Excadrill' } ],
    [ 'driller', { alias: 'driller', name: 'Excadrill' } ],
    [ 'dug', { alias: 'dug', name: 'Dugtrio' } ],
    [ 'duggy', { alias: 'duggy', name: 'Dugtrio' } ],
    [ 'ekiller', { alias: 'ekiller', name: 'Arceus' } ],
    [ 'esca', { alias: 'esca', name: 'Escavalier' } ],
    [ 'ferro', { alias: 'ferro', name: 'Ferrothorn' } ],
    [ 'fini', { alias: 'fini', name: 'Tapu Fini' } ],
    [ 'forry', { alias: 'forry', name: 'Forretress' } ],
    [ 'fug', { alias: 'fug', name: 'Rayquaza' } ],
    [ 'gar', { alias: 'gar', name: 'Gengar' } ],
    [ 'garde', { alias: 'garde', name: 'Gardevoir' } ],
    [ 'gatr', { alias: 'gatr', name: 'Feraligatr' } ],
    [ 'gene', { alias: 'gene', name: 'Genesect' } ],
    [ 'gira', { alias: 'gira', name: 'Giratina' } ],
    [ 'gren', { alias: 'gren', name: 'Greninja' } ],
    [ 'gross', { alias: 'gross', name: 'Metagross' } ],
    [ 'gyara', { alias: 'gyara', name: 'Gyarados' } ],
    [ 'hera', { alias: 'hera', name: 'Heracross' } ],
    [ 'hippo', { alias: 'hippo', name: 'Hippowdon' } ],
    [ 'honch', { alias: 'honch', name: 'Honchkrow' } ],
    [ 'kanga', { alias: 'kanga', name: 'Kangaskhan' } ],
    [ 'karp', { alias: 'karp', name: 'Magikarp' } ],
    [ 'keld', { alias: 'keld', name: 'Keldeo' } ],
    [ 'klef', { alias: 'klef', name: 'Klefki' } ],
    [ 'koko', { alias: 'koko', name: 'Tapu Koko' } ],
    [ 'kou', { alias: 'kou', name: 'Raikou' } ],
    [ 'krook', { alias: 'krook', name: 'Krookodile' } ],
    [ 'kyub', { alias: 'kyub', name: 'Kyurem-Black' } ],
    [ 'kyuw', { alias: 'kyuw', name: 'Kyurem-White' } ],
    [ 'lando', { alias: 'lando', name: 'Landorus' } ],
    [ 'landoi', { alias: 'landoi', name: 'Landorus' } ],
    [ 'landot', { alias: 'landot', name: 'Landorus-Therian' } ],
    [ 'lele', { alias: 'lele', name: 'Tapu Lele' } ],
    [ 'linda', { alias: 'linda', name: 'Fletchinder' } ],
    [ 'luke', { alias: 'luke', name: 'Lucario' } ],
    [ 'lurk', { alias: 'lurk', name: 'Golurk' } ],
    [ 'mage', { alias: 'mage', name: 'Magearna' } ],
    [ 'mamo', { alias: 'mamo', name: 'Mamoswine' } ],
    [ 'mandi', { alias: 'mandi', name: 'Mandibuzz' } ],
    [ 'mence', { alias: 'mence', name: 'Salamence' } ],
    [ 'milo', { alias: 'milo', name: 'Milotic' } ],
    [ 'morfentshusbando', { alias: 'morfentshusbando', name: 'Gengar' } ],
    [ 'naga', { alias: 'naga', name: 'Naganadel' } ],
    [ 'nape', { alias: 'nape', name: 'Infernape' } ],
    [ 'nebby', { alias: 'nebby', name: 'Cosmog' } ],
    [ 'obama', { alias: 'obama', name: 'Abomasnow' } ],
    [ 'ogre', { alias: 'ogre', name: 'Kyogre' } ],
    [ 'shrek', { alias: 'shrek', name: 'Kyogre' } ],
    [ 'ohmagod', { alias: 'ohmagod', name: 'Plasmanta' } ],
    [ 'p2', { alias: 'p2', name: 'Porygon2' } ],
    [ 'pert', { alias: 'pert', name: 'Swampert' } ],
    [ 'pex', { alias: 'pex', name: 'Toxapex' } ],
    [ 'phero', { alias: 'phero', name: 'Pheromosa' } ],
    [ 'pika', { alias: 'pika', name: 'Pikachu' } ],
    [
      'pikachu doctor',
      { alias: 'pikachu doctor', name: 'Pikachu-PhD' }
    ],
    [
      'pikachu kanto',
      { alias: 'pikachu kanto', name: 'Pikachu-Original' }
    ],
    [ 'pory2', { alias: 'pory2', name: 'Porygon2' } ],
    [ 'poryz', { alias: 'poryz', name: 'Porygon-Z' } ],
    [ 'pyuku', { alias: 'pyuku', name: 'Pyukumuku' } ],
    [ 'pz', { alias: 'pz', name: 'Porygon-Z' } ],
    [ 'queen', { alias: 'queen', name: 'Nidoqueen' } ],
    [ 'rachi', { alias: 'rachi', name: 'Jirachi' } ],
    [ 'rank', { alias: 'rank', name: 'Reuniclus' } ],
    [ 'ray', { alias: 'ray', name: 'Rayquaza' } ],
    [ 'reuni', { alias: 'reuni', name: 'Reuniclus' } ],
    [ 'sab', { alias: 'sab', name: 'Sableye' } ],
    [ 'sable', { alias: 'sable', name: 'Sableye' } ],
    [ 'scept', { alias: 'scept', name: 'Sceptile' } ],
    [ 'scoli', { alias: 'scoli', name: 'Scolipede' } ],
    [ 'serp', { alias: 'serp', name: 'Serperior' } ],
    [ 'shao', { alias: 'shao', name: 'Mienshao' } ],
    [ 'skarm', { alias: 'skarm', name: 'Skarmory' } ],
    [ 'smogon', { alias: 'smogon', name: 'Koffing' } ],
    [ 'smogonbird', { alias: 'smogonbird', name: 'Talonflame' } ],
    [ 'sui', { alias: 'sui', name: 'Suicune' } ],
    [ 'talon', { alias: 'talon', name: 'Talonflame' } ],
    [ 'tang', { alias: 'tang', name: 'Tangrowth' } ],
    [ 'terra', { alias: 'terra', name: 'Terrakion' } ],
    [ 'tflame', { alias: 'tflame', name: 'Talonflame' } ],
    [ 'thundy', { alias: 'thundy', name: 'Thundurus' } ],
    [ 'toed', { alias: 'toed', name: 'Politoed' } ],
    [ 'torn', { alias: 'torn', name: 'Tornadus' } ],
    [ 'tran', { alias: 'tran', name: 'Heatran' } ],
    [ 'ttar', { alias: 'ttar', name: 'Tyranitar' } ],
    [ 'venu', { alias: 'venu', name: 'Venusaur' } ],
    [ 'viriz', { alias: 'viriz', name: 'Virizion' } ],
    [ 'whimsi', { alias: 'whimsi', name: 'Whimsicott' } ],
    [ 'xern', { alias: 'xern', name: 'Xerneas' } ],
    [ 'xurk', { alias: 'xurk', name: 'Xurkitree' } ],
    [ 'ygod', { alias: 'ygod', name: 'Yveltal' } ],
    [ 'baconbird', { alias: 'baconbird', name: 'Yveltal' } ],
    [ 'zam', { alias: 'zam', name: 'Alakazam' } ],
    [ 'zard', { alias: 'zard', name: 'Charizard' } ],
    [ 'zong', { alias: 'zong', name: 'Bronzong' } ],
    [ 'zor', { alias: 'zor', name: 'Scizor' } ],
    [ 'zyg', { alias: 'zyg', name: 'Zygarde' } ],
    [ 'ub01', { alias: 'ub01', name: 'Nihilego' } ],
    [ 'ub02a', { alias: 'ub02a', name: 'Buzzwole' } ],
    [ 'ub02b', { alias: 'ub02b', name: 'Pheromosa' } ],
    [ 'ub03', { alias: 'ub03', name: 'Xurkitree' } ],
    [ 'ub04blade', { alias: 'ub04blade', name: 'Kartana' } ],
    [ 'ub04blaster', { alias: 'ub04blaster', name: 'Celesteela' } ],
    [ 'ub05', { alias: 'ub05', name: 'Guzzlord' } ],
    [ 'ubburst', { alias: 'ubburst', name: 'Blacephalon' } ],
    [ 'ubassembly', { alias: 'ubassembly', name: 'Stakataka' } ],
    [ 'ubadhesive', { alias: 'ubadhesive', name: 'Poipole' } ],
    [ 'birijion', { alias: 'birijion', name: 'Virizion' } ],
    [ 'terakion', { alias: 'terakion', name: 'Terrakion' } ],
    [ 'agirudaa', { alias: 'agirudaa', name: 'Accelgor' } ],
    [ 'randorosu', { alias: 'randorosu', name: 'Landorus' } ],
    [ 'urugamosu', { alias: 'urugamosu', name: 'Volcarona' } ],
    [ 'erufuun', { alias: 'erufuun', name: 'Whimsicott' } ],
    [ 'doryuuzu', { alias: 'doryuuzu', name: 'Excadrill' } ],
    [ 'burungeru', { alias: 'burungeru', name: 'Jellicent' } ],
    [ 'nattorei', { alias: 'nattorei', name: 'Ferrothorn' } ],
    [ 'shandera', { alias: 'shandera', name: 'Chandelure' } ],
    [ 'roobushin', { alias: 'roobushin', name: 'Conkeldurr' } ],
    [ 'ononokusu', { alias: 'ononokusu', name: 'Haxorus' } ],
    [ 'sazandora', { alias: 'sazandora', name: 'Hydreigon' } ],
    [ 'chirachiino', { alias: 'chirachiino', name: 'Cinccino' } ],
    [ 'kyuremu', { alias: 'kyuremu', name: 'Kyurem' } ],
    [ 'jarooda', { alias: 'jarooda', name: 'Serperior' } ],
    [ 'zoroaaku', { alias: 'zoroaaku', name: 'Zoroark' } ],
    [ 'shinboraa', { alias: 'shinboraa', name: 'Sigilyph' } ],
    [ 'barujiina', { alias: 'barujiina', name: 'Mandibuzz' } ],
    [ 'rankurusu', { alias: 'rankurusu', name: 'Reuniclus' } ],
    [ 'borutorosu', { alias: 'borutorosu', name: 'Thundurus' } ]
  ]
);

export const abilityAliases = new Collection<string, Pokemon.AbilityAlias>(
  [
    [ 'ph', { alias: 'ph', ability: 'Poison Heal' } ],
    [ 'stag', { alias: 'stag', ability: 'Shadow Tag' } ]
  ]
);

export const itemAliases = new Collection<string, Pokemon.ItemAlias>(
  [
    [ 'assvest', { alias: 'assvest', item: 'Assault Vest' } ],
    [ 'av', { alias: 'av', item: 'Assault Vest' } ],
    [ 'band', { alias: 'band', item: 'Choice Band' } ],
    [ 'cb', { alias: 'cb', item: 'Choice Band' } ],
    [ 'chesto', { alias: 'chesto', item: 'Chesto Berry' } ],
    [ 'chople', { alias: 'chople', item: 'Chople Berry' } ],
    [ 'custap', { alias: 'custap', item: 'Custap Berry' } ],
    [ 'ebelt', { alias: 'ebelt', item: 'Expert Belt' } ],
    [ 'fightgem', { alias: 'fightgem', item: 'Fighting Gem' } ],
    [ 'flightgem', { alias: 'flightgem', item: 'Flying Gem' } ],
    [ 'goggles', { alias: 'goggles', item: 'Safety Goggles' } ],
    [ 'lefties', { alias: 'lefties', item: 'Leftovers' } ],
    [ 'leppa', { alias: 'leppa', item: 'Leppa Berry' } ],
    [ 'lo', { alias: 'lo', item: 'Life Orb' } ],
    [ 'lorb', { alias: 'lorb', item: 'Life Orb' } ],
    [ 'lum', { alias: 'lum', item: 'Lum Berry' } ],
    [ 'occa', { alias: 'occa', item: 'Occa Berry' } ],
    [ 'petaya', { alias: 'petaya', item: 'Petaya Berry' } ],
    [ 'salac', { alias: 'salac', item: 'Salac Berry' } ],
    [ 'sash', { alias: 'sash', item: 'Focus Sash' } ],
    [ 'scarf', { alias: 'scarf', item: 'Choice Scarf' } ],
    [ 'sitrus', { alias: 'sitrus', item: 'Sitrus Berry' } ],
    [ 'specs', { alias: 'specs', item: 'Choice Specs' } ],
    [ 'wp', { alias: 'wp', item: 'Weakness Policy' } ],
    [ 'yache', { alias: 'yache', item: 'Yache Berry' } ]
  ]
);


export const moveAliases = new Collection<string, Pokemon.MoveAlias>(
  [
    [ 'bb', { alias: 'bb', move: 'Brave Bird' } ],
    [ 'bd', { alias: 'bd', move: 'Belly Drum' } ],
    [ 'bpass', { alias: 'bpass', move: 'Baton Pass' } ],
    [ 'bp', { alias: 'bp', move: 'Baton Pass' } ],
    [ 'cc', { alias: 'cc', move: 'Close Combat' } ],
    [ 'cm', { alias: 'cm', move: 'Calm Mind' } ],
    [ 'dbond', { alias: 'dbond', move: 'Destiny Bond' } ],
    [ 'dd', { alias: 'dd', move: 'Dragon Dance' } ],
    [ 'dv', { alias: 'dv', move: 'Dark Void' } ],
    [ 'eq', { alias: 'eq', move: 'Earthquake' } ],
    [ 'espeed', { alias: 'espeed', move: 'ExtremeSpeed' } ],
    [ 'faintattack', { alias: 'faintattack', move: 'Feint Attack' } ],
    [ 'glowpunch', { alias: 'glowpunch', move: 'Power-up Punch' } ],
    [ 'hp', { alias: 'hp', move: 'Hidden Power' } ],
    [ 'hpbug', { alias: 'hpbug', move: 'Hidden Power Bug' } ],
    [ 'hpdark', { alias: 'hpdark', move: 'Hidden Power Dark' } ],
    [ 'hpdragon', { alias: 'hpdragon', move: 'Hidden Power Dragon' } ],
    [
      'hpelectric',
      { alias: 'hpelectric', move: 'Hidden Power electric' }
    ],
    [
      'hpfighting',
      { alias: 'hpfighting', move: 'Hidden Power Fighting' }
    ],
    [ 'hpfire', { alias: 'hpfire', move: 'Hidden Power Fire' } ],
    [ 'hpflying', { alias: 'hpflying', move: 'Hidden Power Flying' } ],
    [ 'hpghost', { alias: 'hpghost', move: 'Hidden Power Ghost' } ],
    [ 'hpgrass', { alias: 'hpgrass', move: 'Hidden Power Grass' } ],
    [ 'hpground', { alias: 'hpground', move: 'Hidden Power Ground' } ],
    [ 'hpice', { alias: 'hpice', move: 'Hidden Power Ice' } ],
    [ 'hppoison', { alias: 'hppoison', move: 'Hidden Power Poison' } ],
    [ 'hppsychic', { alias: 'hppsychic', move: 'Hidden Power Psychic' } ],
    [ 'hprock', { alias: 'hprock', move: 'Hidden Power Rock' } ],
    [ 'hpsteel', { alias: 'hpsteel', move: 'Hidden Power Steel' } ],
    [ 'hpwater', { alias: 'hpwater', move: 'Hidden Power Water' } ],
    [ 'hjk', { alias: 'hjk', move: 'High Jump Kick' } ],
    [ 'hijumpkick', { alias: 'hijumpkick', move: 'High Jump Kick' } ],
    [ 'np', { alias: 'np', move: 'Nasty Plot' } ],
    [ 'pfists', { alias: 'pfists', move: 'Plasma Fists' } ],
    [ 'playaround', { alias: 'playaround', move: 'Play Rough' } ],
    [ 'pup', { alias: 'pup', move: 'Power-up Punch' } ],
    [ 'qd', { alias: 'qd', move: 'Quiver Dance' } ],
    [ 'rocks', { alias: 'rocks', move: 'Stealth Rock' } ],
    [ 'sd', { alias: 'sd', move: 'Swords Dance' } ],
    [ 'se', { alias: 'se', move: 'Stone Edge' } ],
    [ 'spin', { alias: 'spin', move: 'Rapid Spin' } ],
    [ 'sr', { alias: 'sr', move: 'Stealth Rock' } ],
    [ 'sub', { alias: 'sub', move: 'Substitute' } ],
    [ 'tr', { alias: 'tr', move: 'Trick Room' } ],
    [ 'troom', { alias: 'troom', move: 'Trick Room' } ],
    [ 'tbolt', { alias: 'tbolt', move: 'Thunderbolt' } ],
    [ 'tspikes', { alias: 'tspikes', move: 'Toxic Spikes' } ],
    [ 'twave', { alias: 'twave', move: 'Thunder Wave' } ],
    [ 'web', { alias: 'web', move: 'Sticky Web' } ],
    [ 'wow', { alias: 'wow', move: 'Will-O-Wisp' } ],
    [ '10mv', { alias: '10mv', move: '10,000,000 Volt Thunderbolt' } ],
    [ '10mvt', { alias: '10mvt', move: '10,000,000 Volt Thunderbolt' } ],
    [
      'clangorous',
      { alias: 'clangorous', move: 'Clangorous Soulblaze' }
    ],
    [ 'cs', { alias: 'cs', move: 'Clangorous Soulblaze' } ],
    [ 'ee', { alias: 'ee', move: 'Extreme Evoboost' } ],
    [ 'extreme', { alias: 'extreme', move: 'Extreme Evoboost' } ],
    [ 'genesis', { alias: 'genesis', move: 'Genesis Supernova' } ],
    [ 'goa', { alias: 'goa', move: 'Guardian of Alola' } ],
    [ 'gs', { alias: 'gs', move: 'Genesis Supernova' } ],
    [ 'guardian', { alias: 'guardian', move: 'Guardian of Alola' } ],
    [ 'lets', { alias: 'lets', move: 'Let\'s Snuggle Forever' } ],
    [ 'light', { alias: 'light', move: 'Light That Burns the Sky' } ],
    [ 'lsf', { alias: 'lsf', move: 'Let\'s Snuggle Forever' } ],
    [ 'ltbts', { alias: 'ltbts', move: 'Light That Burns the Sky' } ],
    [ 'malicious', { alias: 'malicious', move: 'Malicious Moonsault' } ],
    [
      'menacing',
      { alias: 'menacing', move: 'Menacing Moonraze Maelstrom' }
    ],
    [ 'mmm', { alias: 'mmm', move: 'Menacing Moonraze Maelstrom' } ],
    [ 'moonsault', { alias: 'moonsault', move: 'Malicious Moonsault' } ],
    [ 'oceanic', { alias: 'oceanic', move: 'Oceanic Operetta' } ],
    [ 'oo', { alias: 'oo', move: 'Oceanic Operetta' } ],
    [ 'pp', { alias: 'pp', move: 'Pulverizing Pancake' } ],
    [
      'pulverizing',
      { alias: 'pulverizing', move: 'Pulverizing Pancake' }
    ],
    [ 'sar', { alias: 'sar', move: 'Sinister Arrow Raid' } ],
    [ 'searing', { alias: 'searing', move: 'Searing Sunraze Smash' } ],
    [ 'sinister', { alias: 'sinister', move: 'Sinister Arrow Raid' } ],
    [ 'ss', { alias: 'ss', move: 'Stoked Sparksurfer' } ],
    [ 'sss', { alias: 'sss', move: 'Searing Sunraze Smash' } ],
    [ 'sssss', { alias: 'sssss', move: 'Soul-Stealing 7-Star Strike' } ],
    [ 'ss7ss', { alias: 'ss7ss', move: 'Soul-Stealing 7-Star Strike' } ],
    [ 'soul', { alias: 'soul', move: 'Soul-Stealing 7-Star Strike' } ],
    [
      'soulstealingsevenstarstrike',
      {
        alias: 'soulstealingsevenstarstrike',
        move: 'Soul-Stealing 7-Star Strike',
      }
    ],
    [
      'splintered',
      { alias: 'splintered', move: 'Splintered Stormshards' }
    ],
    [ 'stoked', { alias: 'stoked', move: 'Stoked Sparksurfer' } ],
    [
      'stormshards',
      { alias: 'stormshards', move: 'Splintered Stormshards' }
    ],
    [ 'zbug', { alias: 'zbug', move: 'Savage Spin-Out' } ],
    [
      'zclangingscales',
      { alias: 'zclangingscales', move: 'Clangorous Soulblaze' }
    ],
    [ 'zdark', { alias: 'zdark', move: 'Black Hole Eclipse' } ],
    [
      'zdarkestlariat',
      { alias: 'zdarkestlariat', move: 'Malicious Moonsault' }
    ],
    [
      'zdawnwingsnecrozma',
      { alias: 'zdawnwingsnecrozma', move: 'Menacing Moonraze Maelstrom' }
    ],
    [
      'zdecidueye',
      { alias: 'zdecidueye', move: 'Sinister Arrow Raid' }
    ],
    [ 'zdragon', { alias: 'zdragon', move: 'Devastating Drake' } ],
    [
      'zduskmanenecrozma',
      { alias: 'zduskmanenecrozma', move: 'Searing Sunraze Smash' }
    ],
    [ 'zelectric', { alias: 'zelectric', move: 'Gigavolt Havoc' } ],
    [ 'zeevee', { alias: 'zeevee', move: 'Extreme Evoboost' } ],
    [ 'zevo', { alias: 'zevo', move: 'Extreme Evoboost' } ],
    [ 'zfairy', { alias: 'zfairy', move: 'Twinkle Tackle' } ],
    [ 'zflying', { alias: 'zflying', move: 'Supersonic Skystrike' } ],
    [ 'zfighting', { alias: 'zfighting', move: 'All-Out Pummeling' } ],
    [ 'zfire', { alias: 'zfire', move: 'Inferno Overdrive' } ],
    [ 'zghost', { alias: 'zghost', move: 'Never-Ending Nightmare' } ],
    [
      'zgigaimpact',
      { alias: 'zgigaimpact', move: 'Pulverizing Pancake' }
    ],
    [ 'zgrass', { alias: 'zgrass', move: 'Bloom Doom' } ],
    [ 'zground', { alias: 'zground', move: 'Tectonic Rage' } ],
    [ 'zice', { alias: 'zice', move: 'Subzero Slammer' } ],
    [
      'zincineroar',
      { alias: 'zincineroar', move: 'Malicious Moonsault' }
    ],
    [ 'zkommoo', { alias: 'zkommoo', move: 'Clangorous Soulblaze' } ],
    [ 'zlastresort', { alias: 'zlastresort', move: 'Extreme Evoboost' } ],
    [
      'zlunala',
      { alias: 'zlunala', move: 'Menacing Moonraze Maelstrom' }
    ],
    [
      'zlycanroc',
      { alias: 'zlycanroc', move: 'Splintered Stormshards' }
    ],
    [
      'znaturesmadness',
      { alias: 'znaturesmadness', move: 'Guardian of Alola' }
    ],
    [
      'zmarshadow',
      { alias: 'zmarshadow', move: 'Soul-Stealing 7-Star Strike' }
    ],
    [ 'zmew', { alias: 'zmew', move: 'Genesis Supernova' } ],
    [ 'zmimikyu', { alias: 'zmimikyu', move: 'Let\'s Snuggle Forever' } ],
    [
      'zmoongeistbeam',
      { alias: 'zmoongeistbeam', move: 'Menacing Moonraze Maelstrom' }
    ],
    [
      'znecrozma',
      { alias: 'znecrozma', move: 'Light That Burns the Sky' }
    ],
    [ 'znormal', { alias: 'znormal', move: 'Breakneck Blitz' } ],
    [ 'zrock', { alias: 'zrock', move: 'Continental Crush' } ],
    [
      'zphotongeyser',
      { alias: 'zphotongeyser', move: 'Light That Burns the Sky' }
    ],
    [ 'zpikachu', { alias: 'zpikachu', move: 'Catastropika' } ],
    [
      'zpikachucap',
      { alias: 'zpikachucap', move: '10,000,000 Volt Thunderbolt' }
    ],
    [
      'zplayrough',
      { alias: 'zplayrough', move: 'Let\'s Snuggle Forever' }
    ],
    [ 'zpoison', { alias: 'zpoison', move: 'Acid Downpour' } ],
    [ 'zprimarina', { alias: 'zprimarina', move: 'Oceanic Operetta' } ],
    [ 'zpsychic', { alias: 'zpsychic', move: 'Shattered Psyche' } ],
    [ 'zraichu', { alias: 'zraichu', move: 'Stoked Sparksurfer' } ],
    [ 'zsnorlax', { alias: 'zsnorlax', move: 'Pulverizing Pancake' } ],
    [
      'zsolgaleo',
      { alias: 'zsolgaleo', move: 'Searing Sunraze Smash' }
    ],
    [
      'zsparklingaria',
      { alias: 'zsparklingaria', move: 'Oceanic Operetta' }
    ],
    [
      'zspectralthief',
      { alias: 'zspectralthief', move: 'Soul-Stealing 7-Star Strike' }
    ],
    [
      'zspiritshackle',
      { alias: 'zspiritshackle', move: 'Sinister Arrow Raid' }
    ],
    [
      'zsunsteelstrike',
      { alias: 'zsunsteelstrike', move: 'Searing Sunraze Smash' }
    ],
    [ 'zsteel', { alias: 'zsteel', move: 'Corkscrew Crash' } ],
    [
      'zstoneedge',
      { alias: 'zstoneedge', move: 'Splintered Stormshards' }
    ],
    [ 'ztapu', { alias: 'ztapu', move: 'Guardian of Alola' } ],
    [
      'zthunderbolt',
      { alias: 'zthunderbolt', move: '10,000,000 Volt Thunderbolt' }
    ],
    [
      'zultranecrozma',
      { alias: 'zultranecrozma', move: 'Light That Burns the Sky' }
    ],
    [ 'zvolttackle', { alias: 'zvolttackle', move: 'Catastropika' } ],
    [ 'zwater', { alias: 'zwater', move: 'Hydro Vortex' } ]
  ]
);