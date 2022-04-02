 fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(json => console.log(json))

 // fetch('https://api.sampleapis.com/coffee/iced')
 //.then(response => response.json())
 //.then(json => console.log(json))
 
 function submit() {
  
  var checkBox1 = document.getElementById("one");
  var checkBox2 = document.getElementById("two");
  var checkBox3 = document.getElementById("three");
  var checkBox4 = document.getElementById("four");
  var checkBox5 = document.getElementById("five");
  var checkBox6 = document.getElementById("six");
  var checkBox7 = document.getElementById("seven");
  var checkBox8 = document.getElementById("eight");
  var checkBox9 = document.getElementById("nine");
  var checkBox10 = document.getElementById("ten");
  var checkBox11 = document.getElementById("eleven");
  var checkBox12 = document.getElementById("twelve");

 
  
  if (
    (checkBox1.checked == true || checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == true && checkBox6.checked == true || checkBox7.checked == false && checkBox8.checked == true || checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == false )
    )
    {
    fetchData0();
  } else {
    console.log('false');
  }
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
  
 //fetchData0();