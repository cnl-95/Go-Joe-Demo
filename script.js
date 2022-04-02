 fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(json => console.log(json))

 // fetch('https://api.sampleapis.com/coffee/iced')
 //.then(response => response.json())
 //.then(json => console.log(json))

var day = 1;

switch(day) {

    case 1:
        document.write("<h2>Dunday</h1>");
        break;
};


 function fetchData0() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[0].title);
    
    document.querySelector('pre').innerHTML = (data[0].title)  +  '! Try adding oatmilk to this recipie. ';
    document.querySelector('des').innerHTML = (data[0].description);
  }).catch(error => {
    console.log(error);
  });
}
  
 fetchData0();