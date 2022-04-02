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




 onclick="americano()


 function submit(){
  var answers = document.getElementById("1");
    switch (answers) {
      case true: 
        console.log('true');
        break;
        default:
          console.log('error');
          break;
  }
};


function submit(){
  var answers = document.getElementById("one").value;
    switch (answers) {
      case (''): 
        console.log('true');
        break;
        default:
          console.log('error');
          break;
  }
};


checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == true && checkBox6.checked == true && checkBox7.checked == false && checkBox8.checked == true && checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true 