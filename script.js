
var stateCapitals = [
	{ name: 'Montgomery', stateAbbrev: 'AL', left: '67%', bottom: '32%', width: '4%'},
	{ name: 'Juneau', stateAbbrev: 'AK', left: '18%', bottom: '19%', width: '4%'},
	{ name: 'Phoenix', stateAbbrev: 'AZ', left: '18%', bottom: '35%', width: '4%'},
	{ name: 'Little Rock', stateAbbrev: 'AR', left: '56%', bottom: '32%', width: '4%'},
	{ name: 'Sacramento', stateAbbrev: 'CA', left: '10%', bottom: '43%', width: '4%'},
	{ name: 'Denver', stateAbbrev: 'CO', left: '30%', bottom: '50%', width: '4%'},
	{ name: 'Hartford', stateAbbrev: 'CT', left: '91%', bottom: '65%', width: '25px'},
	{ name: 'Dover', stateAbbrev: 'DE', left: '91%', bottom: '54.5%', width: '4%'},
	{ name: 'Tallahassee', stateAbbrev: 'FL', left: '76%', bottom: '20%', width: '4%'},
	{ name: 'Atlanta', stateAbbrev: 'GA', left: '74%', bottom: '25%', width: '4%'},
	{ name: 'Honolulu', stateAbbrev: 'HI', left: '33%', bottom: '4%', width: '4%'},
	{ name: 'Boise', stateAbbrev: 'ID', left: '20%', bottom: '70%', width: '4%'},
	{ name: 'Springfield', stateAbbrev: 'IL', left: '61%', bottom: '58%', width: '4%'},
	{ name: 'Indianapolis', stateAbbrev: 'IN', left: '67%', bottom: '58%', width: '35px' },
	{ name: 'Des Moines', stateAbbrev: 'IA', left: '55%', bottom: '59%', width: '4%'},
	{ name: 'Topeka', stateAbbrev: 'KS', left: '45%', bottom: '52%', width: '4%'},
	{ name: 'Frankfort', stateAbbrev: 'KY', left: '72%', bottom: '49%', width: '4%'},
	{ name: 'Baton Rouge', stateAbbrev: 'LA', left: '56.5%', bottom: '24%', width: '3%'},
	{ name: 'Augusta', stateAbbrev: 'ME', left: '93.5%', bottom: '86%', width: '3%' },
	{ name: 'Annapolis', stateAbbrev: 'MD', left: '91%', bottom: '50%', width: '4%'},
	{ name: 'Boston', stateAbbrev: 'MA', left: '96%', bottom: '72%', width: '3%'},
	{ name: 'Lansing', stateAbbrev: 'MI', left: '69%', bottom: '69%', width: '3%' },
	{ name: 'Saint Paul', stateAbbrev: 'MN', left: '53%', bottom: '75%', width: '4%'},
	{ name: 'Jackson', stateAbbrev: 'MS', left: '62%', bottom: '25%', width: '4%'},
	{ name: 'Jefferson City', stateAbbrev: 'MO', left: '56%', bottom: '50%', width: '4%'},
	{ name: 'Helena', stateAbbrev: 'MT', left: '30%', bottom: '80%', width: '4%'},
	{ name: 'Lincoln', stateAbbrev: 'NE', left: '45%', bottom: '58%', width: '4%'},
	{ name: 'Carson City', stateAbbrev: 'NV', left: '12%', bottom: '58%', width: '4%'},
	{ name: 'Concord', stateAbbrev: 'NH', left: '95%', bottom: '75%', width: '3%'},
	{ name: 'Trenton', stateAbbrev: 'NJ', left: '95%', bottom: '61%', width: '3%'},
	{ name: 'Santa Fe', stateAbbrev: 'NM', left: '31%', bottom: '40%', width: '4%'},
	{ name: 'Albany', stateAbbrev: 'NY', left: '86%', bottom: '74%', width: '3%'},
	{ name: 'Raleigh', stateAbbrev: 'NC', left: '84%', bottom: '44%', width: '4%'},
	{ name: 'Bismarck', stateAbbrev: 'ND', left: '45%', bottom: '79%', width: '4%'},
	{ name: 'Columbus', stateAbbrev: 'OH', left: '74%', bottom: '60%', width: '4%'},
	{ name: 'Oklahoma City', stateAbbrev: 'OK', left: '47%', bottom: '41%', width: '4%'},
	{ name: 'Salem', stateAbbrev: 'OR', left: '10%', bottom: '75%', width: '4%'},
	{ name: 'Harrisburg', stateAbbrev: 'PA', left: '80%', bottom: '59%', width: '4%'},
	{ name: 'Providence', stateAbbrev: 'RI', left: '96%', bottom: '67%', width: '3%'},
	{ name: 'Columbia', stateAbbrev: 'SC', left: '80%', bottom: '32%', width: '3%'},
	{ name: 'Pierre', stateAbbrev: 'SD', left: '45%', bottom: '74%', width: '4%'},
	{ name: 'Nashville', stateAbbrev: 'TN', left: '72%', bottom: '41.5%', width: '4%'},
	{ name: 'Austin', stateAbbrev: 'TX', left: '40%', bottom: '30%', width: '4%'},
	{ name: 'Salt Lake City', stateAbbrev: 'UT', left: '20%', bottom: '53%', width: '4%'},
	{ name: 'Montpelier', stateAbbrev: 'VT', left: '88%', bottom: '82%', width: '3%'},
	{ name: 'Richmond', stateAbbrev: 'VA', left: '83%', bottom: '51%', width: '3%' },
	{ name: 'Olympia', stateAbbrev: 'WA', left: '12%', bottom: '87%', width: '3%' },
	{ name: 'Charleston', stateAbbrev: 'WV', left: '81%', bottom: '55%', width: '3%' },
	{ name: 'Madison', stateAbbrev: 'WI', left: '61%', bottom: '70%', width: '3%' },
	{ name: 'Cheyenne', stateAbbrev: 'WY', left: '30%', bottom: '71%', width: '4%'}
];

function createCapitalBoxes(){
  for(let i in stateCapitals){
    let elm = document.createElement("div");
    let text = document.createTextNode(stateCapitals[i].name);
    elm.appendChild(text);
    elm.classList.add("capital_drag_box");
    elm.setAttribute("id", stateCapitals[i].name)
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
		box.style.left = stateCapitals[state].left;
		box.style.bottom = stateCapitals[state].bottom;
		box.style.width = stateCapitals[state].width;
	}
}

createBoxes();

function handleDrag(){
  let box = Array.from(document.getElementsByClassName("capital_drag_box"));
  for(i in box){
    box[i].addEventListener("dragstart", function(e){
      e.dataTransfer.setData("text", event.target.id);
      console.log(e.target.id);
    });
  }
  function handleDrop(){
    let box = Array.from(document.getElementsByClassName("mapboxes"));
    for(i in box){
      box[i].addEventListener("dragenter", function(event){
        e.preventDefault();
        let id = event.dataTransfer.getData("text");
        let elm = document.getElementById(id);
        event.target.appendChild(elm);
      });
    }
  }
}



handleDrag();
