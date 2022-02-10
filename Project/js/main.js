//d3.group good for data stuff,

d3.csv('data/aqidata.csv')
  .then(data => {
    console.log("Data loading complete.")
    console.log(data)

    //Parse out Hamilton County data
    let hamiltonCounty = []; 
    data.forEach(d => {
      if(d.State == 'Ohio' && d.County == 'Hamilton'){
        ham.push(d)
      }
    })
    console.log(hamiltonCounty)
  })


function HamiltonCountyChart(){
  
}

console.log(aqidata)