  //fetch('https://api.sampleapis.com/coffee/hot')
  //.then(response => response.json())
  //.then(json => console.log(json))

  // fetch('https://api.sampleapis.com/coffee/iced')
  //.then(response => response.json())
  //.then(json => console.log(json))
 



 // side note, my code seems unbelievably long. 
 // In retrospect, I could have found a different way to make my code shorter and more efficient, but it works. 
 // Truly I didnt know if I would be able to make this happen at all, but here it is.

 // This is where the magic happens

 function submit() {
  
  var checkBox01 = document.getElementById("zeroone");
  var checkBox02 = document.getElementById("zerotwo");
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

 
  //Americano
  if (
    (checkBox01.checked == true && checkBox02.checked == false) &&
    (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false || checkBox5.checked == true) &&
    (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
    (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false || checkBox12.checked == true)
    )
    {
    fetchData0();
  } 
  //Espresso
  if  (
    (checkBox01.checked == true && checkBox02.checked == false) &&
    (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true || checkBox5.checked == true) &&
    (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
    (checkBox9.checked == false || checkBox10.checked == false || checkBox11.checked == false || checkBox12.checked == true)
    )
    {
    fetchData1();
  }
//Doppio
  if (
    (checkBox01.checked == true && checkBox02.checked == false) &&
    (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true || checkBox5.checked == true) &&
    (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
    (checkBox9.checked == false || checkBox10.checked == false || checkBox11.checked == false || checkBox12.checked == true)
    )
    {
    fetchData2();
  }
//Cortado
  if (
    (checkBox01.checked == true && checkBox02.checked == false) &&
    (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
    (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
    (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
    )
    {
    fetchData3();
  }
//Red Eye
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false || checkBox10.checked == false || checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData4();
}
//Galão
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == true && checkBox10.checked == false && checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData5();
}
//Lungo
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false || checkBox10.checked == false || checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData6();
}
//Macchiato
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true || checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == true || checkBox10.checked == true || checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData7();
}
//Mocha
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == true || checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData8();
}
//Ristretto
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData9();
}
//Flat White
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData10();
}
//Affogato
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true || checkBox4.checked == true || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData11();
}
 //Café au Lait
 if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData12();
}
//Irish
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == true || checkBox12.checked == true)
  )
  {
  fetchData13();
}
//Guayoyo
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData14();
} 
//Cortadito
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData15();
}
//Aguapanela Coffee
if (
  (checkBox01.checked == true && checkBox02.checked == false) &&
  (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData16();
}

/////////////// ICED COFFEE //////////////////

// Iced Coffee
if (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData00();
}
// Iced Espresso
if  (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData01();
}
// Cold Brew
if  (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true || checkBox5.checked == true) &&
  (checkBox6.checked == true && checkBox7.checked == false || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false && checkBox12.checked == true)
  )
  {
  fetchData02();
}
// Frappuccino
if  (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == true && checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData03();
}
// Nitro
if  (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == false || checkBox12.checked == true)
  )
  {
  fetchData04();
}
// Mazagran
if (
  (checkBox01.checked == false && checkBox02.checked == true) &&
  (checkBox1.checked == false && checkBox2.checked == true || checkBox3.checked == true && checkBox4.checked == false || checkBox5.checked == true) &&
  (checkBox6.checked == false && checkBox7.checked == true || checkBox8.checked == true) &&
  (checkBox9.checked == false && checkBox10.checked == false && checkBox11.checked == true || checkBox12.checked == true)
  )
  {
  fetchData05();
}

//Error 
  else {
    document.querySelector('pre').innerHTML = 'YIKES! We dont have a result for you! Try adjusting your filters do get a cup of Joe.';;
  }
};


//Americano

 function fetchData0() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[0].title);
    
    document.querySelector('pre').innerHTML = (data[0].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[0].description + ' <br> <a href="https://www.caffesociety.co.uk/how-to-make-an-americano" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Espresso

function fetchData1() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[1].title);
    
    document.querySelector('pre').innerHTML = (data[1].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[1].description + ' <br> <a href="https://coffeeaffection.com/how-to-make-espresso/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}
  
 //Doppio

function fetchData2() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[2].title);
    
    document.querySelector('pre').innerHTML = (data[2].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[2].description + ' <br> <a href="https://fullcoffeeroast.com/how-to-make-the-perfect-doppio-espresso/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Cortado

function fetchData3() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[3].title);
    
    document.querySelector('pre').innerHTML = (data[3].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[3].description + ' <br> <a href="https://fullcoffeeroast.com/how-to-make-the-perfect-doppio-espresso/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Red Eye

function fetchData4() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[4].title);
    
    document.querySelector('pre').innerHTML = (data[4].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[4].description + ' <br> <a href="https://www.acouplecooks.com/red-eye-coffee/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Galão

function fetchData5() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[5].title);
    
    document.querySelector('pre').innerHTML = (data[5].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[5].description + ' <br> <a href="https://coffeeaffection.com/portuguese-coffee-recipe/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Lungo

function fetchData6() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[6].title);
    
    document.querySelector('pre').innerHTML = (data[6].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[6].description + ' <br> <a href="https://coffeeatthree.com/lungo/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Macchiato

function fetchData7() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[7].title);
    
    document.querySelector('pre').innerHTML = (data[7].title)  +  ' would be great for you! <br> Feel free to add various flavorings to your macchiato to make it exactly how you would like it!';
    document.querySelector('des').innerHTML = (data[7].description + ' <br> <a href="https://www.tablespoon.com/recipes/macchiato/cdaf04c9-efd2-42a3-94f4-3b40f6f1a870" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Mocha

function fetchData8() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[8].title);
    
    document.querySelector('pre').innerHTML = (data[8].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[8].description + ' <br> <a href="https://bakingmischief.com/homemade-mocha/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Ristretto

function fetchData9() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[9].title);
    
    document.querySelector('pre').innerHTML = (data[9].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[9].description + ' <br> <a href="https://coffeedino.com/how-to-make-a-ristretto/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Flat White

function fetchData10() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[10].title);
    
    document.querySelector('pre').innerHTML = (data[10].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[10].description + ' <br> <a href="https://copykat.com/how-to-make-your-favorite-starbucks-flat-white/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Affogato

function fetchData11() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[11].title);
    
    document.querySelector('pre').innerHTML = (data[11].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[11].description + ' <br> <a href="https://www.thekitchn.com/affogato-recipe-23058717" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}
  
 //Café au Lait

function fetchData12() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[12].title);
    
    document.querySelector('pre').innerHTML = (data[12].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[12].description + ' <br> <a href="https://www.masterclass.com/articles/cafe-au-lait-recipe" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Irish

function fetchData13() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[13].title);
    
    document.querySelector('pre').innerHTML = (data[13].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[13].description + ' <br> <a href="https://www.thekitchn.com/how-to-make-irish-coffee-167678" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Guayoyo

function fetchData14() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[14].title);
    
    document.querySelector('pre').innerHTML = (data[14].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[14].description + ' <br> <a href="https://www.roastycoffee.com/venezuelan-coffee/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Cortadito

function fetchData15() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[15].title);
    
    document.querySelector('pre').innerHTML = (data[15].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[15].description + ' <br> <a href="https://www.homegrounds.co/cortadito/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

//Aguapanela Coffee

function fetchData16() {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[16].title);
    
    document.querySelector('pre').innerHTML = (data[16].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[16].description + ' <br> <a href="https://www.rhubarbarians.com/colombian-coffee-brewed-with-aguapanela/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

/////////////// ICED COFFEE //////////////////

// Iced Coffee

function fetchData00() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[0].title);
    
    document.querySelector('pre').innerHTML = (data[0].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[0].description + ' <br> <a href="https://www.homegrounds.co/cortadito/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

// Iced Espresso

function fetchData01() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[1].title);
    
    document.querySelector('pre').innerHTML = (data[1].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[1].description + ' <br> <a href="https://www.acouplecooks.com/iced-espresso/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

// Cold Brew

function fetchData02() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[2].title);
    
    document.querySelector('pre').innerHTML = (data[2].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[2].description + ' <br> <a href="https://www.simplyrecipes.com/recipes/how_to_make_cold_brew_coffee/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

// Frappuccino

function fetchData03() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[3].title);
    
    document.querySelector('pre').innerHTML = (data[3].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[3].description + ' <br> <a href="https://addapinch.com/frappuccino-recipe/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

// Nitro

function fetchData04() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[4].title);
    
    document.querySelector('pre').innerHTML = (data[4].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[4].description + ' <br> <a href="https://coffeeaffection.com/nitro-coffee/" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}

// Mazagran

function fetchData05() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[5].title);
    
    document.querySelector('pre').innerHTML = (data[5].title)  +  ' would be great for you!';
    document.querySelector('des').innerHTML = (data[5].description + ' <br> <a href="https://greatist.com/eat/mazagran-first-iced-coffee" target="_blank">Click here to make it!</a>');
  }).catch(error => {
    console.log(error);
  });
}