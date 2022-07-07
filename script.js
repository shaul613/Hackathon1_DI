
var stateCapitals = [
	{ name: 'Montgomery', stateAbbrev: 'AL', left: '67%', bottom: '32%', width: '40px'},
	{ name: 'Juneau', stateAbbrev: 'AK', left: '18%', bottom: '19%', width: '40px'},
	{ name: 'Phoenix', stateAbbrev: 'AZ', left: '18%', bottom: '35%', width: '40px'},
	{ name: 'Little Rock', stateAbbrev: 'AR', left: '56%', bottom: '32%', width: '40px'},
	{ name: 'Sacramento', stateAbbrev: 'CA', left: '10%', bottom: '43%', width: '40px'},
	{ name: 'Denver', stateAbbrev: 'CO', left: '30%', bottom: '50%', width: '40px'},
	{ name: 'Hartford', stateAbbrev: 'CT', left: '91%', bottom: '68%', width: '25px'},
	{ name: 'Dover', stateAbbrev: 'DE', left: '', bottom: '', width: '40px'},
	{ name: 'Tallahassee', stateAbbrev: 'FL', left: '', bottom: ''},
	{ name: 'Atlanta', stateAbbrev: 'GA', left: '', bottom: ''},
	{ name: 'Honolulu', stateAbbrev: 'HI', left: '', bottom: '' },
	{ name: 'Boise', stateAbbrev: 'ID', left: '', bottom: '' },
	{ name: 'Springfield', stateAbbrev: 'IL', left: '', bottom: '' },
	{ name: 'Indianapolis', stateAbbrev: 'IN', left: '', bottom: '' },
	{ name: 'Des Moines', stateAbbrev: 'IA', left: '', bottom: '' },
	{ name: 'Topeka', stateAbbrev: 'KS', left: '', bottom: '' },
	{ name: 'Frankfort', stateAbbrev: 'KY', left: '', bottom: '' },
	{ name: 'Baton Rouge', stateAbbrev: 'LA', left: '', bottom: '' },
	{ name: 'Augusta', stateAbbrev: 'ME', left: '', bottom: '' },
	{ name: 'Annapolis', stateAbbrev: 'MD', left: '', bottom: '' },
	{ name: 'Boston', stateAbbrev: 'MA', left: '', bottom: '' },
	{ name: 'Lansing', stateAbbrev: 'MI', left: '', bottom: '' },
	{ name: 'Saint Paul', stateAbbrev: 'MN', left: '', bottom: '' },
	{ name: 'Jackson', stateAbbrev: 'MS', left: '', bottom: '' },
	{ name: 'Jefferson City', stateAbbrev: 'MO', left: '', bottom: '' },
	{ name: 'Helena', stateAbbrev: 'MT', left: '', bottom: '' },
	{ name: 'Lincoln', stateAbbrev: 'NE', left: '', bottom: '' },
	{ name: 'Carson City', stateAbbrev: 'NV', left: '', bottom: '' },
	{ name: 'Concord', stateAbbrev: 'NH', left: '', bottom: '' },
	{ name: 'Trenton', stateAbbrev: 'NJ', left: '', bottom: '' },
	{ name: 'Santa Fe', stateAbbrev: 'NM', left: '', bottom: '' },
	{ name: 'Albany', stateAbbrev: 'NY', left: '', bottom: '' },
	{ name: 'Raleigh', stateAbbrev: 'NC', left: '', bottom: '' },
	{ name: 'Bismarck', stateAbbrev: 'ND', left: '', bottom: '' },
	{ name: 'Columbus', stateAbbrev: 'OH', left: '', bottom: '' },
	{ name: 'Oklahoma City', stateAbbrev: 'OK', left: '', bottom: '' },
	{ name: 'Salem', stateAbbrev: 'OR', left: '', bottom: '' },
	{ name: 'Harrisburg', stateAbbrev: 'PA', left: '', bottom: '' },
	{ name: 'Providence', stateAbbrev: 'RI', left: '', bottom: '' },
	{ name: 'Columbia', stateAbbrev: 'SC', left: '', bottom: '' },
	{ name: 'Pierre', stateAbbrev: 'SD', left: '', bottom: '' },
	{ name: 'Nashville', stateAbbrev: 'TN', left: '', bottom: '' },
	{ name: 'Austin', stateAbbrev: 'TX', left: '', bottom: '' },
	{ name: 'Salt Lake City', stateAbbrev: 'UT', left: '', bottom: '' },
	{ name: 'Montpelier', stateAbbrev: 'VT', left: '', bottom: '' },
	{ name: 'Richmond', stateAbbrev: 'VA', left: '', bottom: '' },
	{ name: 'Olympia', stateAbbrev: 'WA', left: '', bottom: '' },
	{ name: 'Charleston', stateAbbrev: 'WV', left: '', bottom: '' },
	{ name: 'Madison', stateAbbrev: 'WI', left: '', bottom: '' },
	{ name: 'Cheyenne', stateAbbrev: 'WY', left: '', bottom: '' }
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

createBoxes();

let coordinateArray = [
	{left: 18%, bottom: 19%},
	{}
]
