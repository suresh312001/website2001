var team = [
  {
    name: "CSK",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "MI",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "RCB",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "RR",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "GTG",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "PBK",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "DC",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "SRH",
    wins: 12,
    losses: 0,
    ties: 0
  },
  {
    name: "KKR",
    wins: 12,
    losses: 0,
    ties: 0
  },
];
var fragment = new DocumentFragment();
for(var i=0; i< team.length; i++){
  var match = team[i];

  var heading = document.createElement("h2");
  fragment.appendChild(heading);
  heading.textContent = match.name;


  var wins = document.createElement("p");
  fragment.appendChild(wins);
  wins.textContent = "wins:" + match.wins;

  var losses = document.createElement("p");
  fragment.appendChild(losses);
   losses.textContent = "losses:" + match.losses;
  
   var ties = document.createElement("p");
   fragment.appendChild(ties);
   ties.textContent = "tiles:" + match.ties;

}

document.body.appendChild(fragment);