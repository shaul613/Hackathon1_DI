
var stateCapitals = [
	{ name: 'Montgomery', stateAbbrev: 'AL' },
	{ name: 'Juneau', stateAbbrev: 'AK' },
	{ name: 'Phoenix', stateAbbrev: 'AZ' },
	{ name: 'Little Rock', stateAbbrev: 'AR' },
	{ name: 'Sacramento', stateAbbrev: 'CA' },
	{ name: 'Denver', stateAbbrev: 'CO' },
	{ name: 'Hartford', stateAbbrev: 'CT' },
	{ name: 'Dover', stateAbbrev: 'DE' },
	{ name: 'Tallahassee', stateAbbrev: 'FL' },
	{ name: 'Atlanta', stateAbbrev: 'GA' },
	{ name: 'Honolulu', stateAbbrev: 'HI' },
	{ name: 'Boise', stateAbbrev: 'ID' },
	{ name: 'Springfield', stateAbbrev: 'IL' },
	{ name: 'Indianapolis', stateAbbrev: 'IN' },
	{ name: 'Des Moines', stateAbbrev: 'IA' },
	{ name: 'Topeka', stateAbbrev: 'KS' },
	{ name: 'Frankfort', stateAbbrev: 'KY' },
	{ name: 'Baton Rouge', stateAbbrev: 'LA' },
	{ name: 'Augusta', stateAbbrev: 'ME' },
	{ name: 'Annapolis', stateAbbrev: 'MD' },
	{ name: 'Boston', stateAbbrev: 'MA' },
	{ name: 'Lansing', stateAbbrev: 'MI' },
	{ name: 'Saint Paul', stateAbbrev: 'MN' },
	{ name: 'Jackson', stateAbbrev: 'MS' },
	{ name: 'Jefferson City', stateAbbrev: 'MO' },
	{ name: 'Helena', stateAbbrev: 'MT' },
	{ name: 'Lincoln', stateAbbrev: 'NE' },
	{ name: 'Carson City', stateAbbrev: 'NV' },
	{ name: 'Concord', stateAbbrev: 'NH' },
	{ name: 'Trenton', stateAbbrev: 'NJ' },
	{ name: 'Santa Fe', stateAbbrev: 'NM' },
	{ name: 'Albany', stateAbbrev: 'NY' },
	{ name: 'Raleigh', stateAbbrev: 'NC' },
	{ name: 'Bismarck', stateAbbrev: 'ND' },
	{ name: 'Columbus', stateAbbrev: 'OH' },
	{ name: 'Oklahoma City', stateAbbrev: 'OK' },
	{ name: 'Salem', stateAbbrev: 'OR' },
	{ name: 'Harrisburg', stateAbbrev: 'PA' },
	{ name: 'Providence', stateAbbrev: 'RI' },
	{ name: 'Columbia', stateAbbrev: 'SC' },
	{ name: 'Pierre', stateAbbrev: 'SD' },
	{ name: 'Nashville', stateAbbrev: 'TN' },
	{ name: 'Austin', stateAbbrev: 'TX' },
	{ name: 'Salt Lake City', stateAbbrev: 'UT' },
	{ name: 'Montpelier', stateAbbrev: 'VT' },
	{ name: 'Richmond', stateAbbrev: 'VA' },
	{ name: 'Olympia', stateAbbrev: 'WA' },
	{ name: 'Charleston', stateAbbrev: 'WV' },
	{ name: 'Madison', stateAbbrev: 'WI' },
	{ name: 'Cheyenne', stateAbbrev: 'WY' }
];

function createCapitalBoxes(){
  for(let i in stateCapitals){
    let elm = document.createElement("div");
    let text = document.createTextNode(stateCapitals[i].name);
    elm.appendChild(text);
    elm.classList.add("capital_drag_box");
    elm.setAttribute("draggable", "true");
    document.getElementById("state_capital_boxes").appendChild(elm);
  }
}

createCapitalBoxes();

function createBoxes () {

for (let state in stateCapitals) {
	let box = document.createElement("div");
	box.setAttribute("id", stateCapitals[state].stateAbbrev);
	box.classList.add("mapboxes");
	let map = document.getElementById("map");
	map.appendChild(box);
  }
}
