var url = "https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&daily=temperature_2m_min&timezone=GMT"
var json

var colors = ['#90E0EF',
              '#48CAE4',
              '#00B4D8',
              '#0096C7',
              '#0077B6',
              '#023E8A',
              '#03045E',
]
function preload() {
  json = loadJSON(url)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  console.log(json)
  for(var i=0; i<json.daily.time.length; i++){
    var d = json.daily.time[i]
    var t = json.daily.temperature_2m_min[i]
    console.log(d,t)
    
    fill(colors[i])
    rect(0,0,t*10,300)
    
    text(d,0,250+(80))
    text(t,0,250+(70))
 
    translate(t*14,0)
  }
}