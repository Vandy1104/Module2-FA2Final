console.log('Module2FA2');

//Data Objects (Total 21  0 to 20)

var fashion = [
{
  name: 'drop1',
  id  : 0,
  image: "images/Earrings/Drop/E1.jpg",
  style: 'Drop Earrings',
  categories: 'earrings',
  price: '$19.99'
},

{
  name: 'drop2',
  id  : 1,
  image: 'images/Earrings/Drop/E2.jpg',
  style: 'Drop Earrings',
  categories: 'earrings',
  price: '$19.99'
},

{
  name: 'drop3',
  id  : 2,
  image: 'images/Earrings/Drop/E3.jpg',
  style: 'Drop Earrings',
  categories: 'earrings',
  price: '$24.99'
},

{
  name: 'drop4',
  id  : 3,
  image: 'images/Earrings/Drop/E4.jpg',
  style: 'Drop Earrings',
  categories: 'earrings',
  price: '$29.99'
},

{
  name: 'hoop1',
  id  : 4,
  image: 'images/Earrings/Hoop/E1.jpg',
  style: 'Hoop Earrings',
  categories: 'earrings',
  price: '$14.99'
},

{
  name: 'hoop2',
  id  : 5,
  image: 'images/Earrings/Hoop/E2.jpg',
  style: 'Hoop Earrings',
  categories: 'earrings',
  price: '$ 9.99'
},

{
  name: 'hoop3',
  id  : 6,
  image: 'images/Earrings/Hoop/E3.jpg',
  style: 'Hoop Earrings',
  categories: 'earrings',
  price: '$19.99'
},

{
  name: 'hoop4',
  id  : 7,
  image: 'images/Earrings/Hoop/E4.jpg',
  style: 'Hoop Earrings',
  categories: 'earrings',
  price: '$25.99'
},

{
  name: 'clutch1',
  id  :  8,
  image: 'images/Bags/Clutch/c1.jpg',
  style: 'Clutch',
  categories: 'Bags',
  price: '$59.99'
},

{
  name: 'clutch2',
  id  :  9,
  image: 'images/Bags/Clutch/c2.jpg',
  style: 'Clutch',
  categories: 'Bags',
  price: '$89.99'
},

{
  name: 'clutch3',
  id  :  10,
  image: 'images/Bags/Clutch/c3.jpg',
  style: 'Clutch',
  categories: 'Bags',
  price: '$69.99'
},

{
  name: 'clutch4',
  id  :  11,
  image: 'images/Bags/Clutch/c4.jpg',
  style: 'Clutch',
  categories: 'Bags',
  price: '$99.99'
},

{
  name: 'handBag1',
  id  :  12,
  image: 'images/Bags/HandBags/h1.jpg',
  style: 'Handbag',
  categories: 'Bags',
  price: '$79.99'
},

{
  name: 'handBag2',
  id  :  13,
  image: 'images/Bags/HandBags/h2.jpg',
  style: 'Handbag',
  categories: 'Bags',
  price: '$99.99'
},

{
  name: 'handBag3',
  id  :  14,
  image: 'images/Bags/HandBags/h3.jpg',
  style: 'Handbag',
  categories: 'Bags',
  price: '$49.99'
},

{
  name: 'handBag4',
  id  :  15,
  image: 'images/Bags/HandBags/h4.jpg',
  style: 'Handbag',
  categories: 'Bags',
  price: '$39.99'
},

{
  name: 'handBag5',
  id  :  16,
  image: 'images/Bags/HandBags/h5.jpg',
  style: 'Handbag',
  categories: 'Bags',
  price: '$49.99'
},

{
  name: 'LaptopBag1',
  id  :  17,
  image: 'images/Bags/LaptopBags/l1.jpg',
  style: 'Laptop bag',
  categories: 'Bags',
  price: '$69.99'
},

{
  name: 'LaptopBag2',
  id  :  18,
  image: 'images/Bags/LaptopBags/l2.jpg',
  style: 'Laptop bag',
  categories: 'Bags',
  price: '$99.99'
},

{
  name: 'LaptopBag3',
  id  :  19,
  image: 'images/Bags/LaptopBags/l3.jpg',
  style: 'Laptop bag',
  categories: 'Bags',
  price: '$89.99'
},

{
  name: 'LaptopBag4',
  id  :  20,
  image: 'images/Bags/LaptopBags/l4.jpg',
  style: 'Laptop bag',
  categories: 'Bags',
  price: '$79.99'
}
];

function allFashion(){
  document.getElementById('view').innerHTML = " "; //to clear the container
  for(var i = 0; i < fashion.length; i++) {
  document.getElementById('view').innerHTML
   += '<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
   + '<img id="' + fashion[i].id + '" class="img-thumbnail myFashion" src=" ' + fashion[i].image + ' " alt="fashion">'
   + '<br><p class="text-danger"> ' + fashion[i].style + '</p>'
   + '<br><p class="text-danger"> ' + fashion[i].price + '</p>'
   + '</div>';
   }
 };

document.getElementById('cta').addEventListener('click', function(){
  allFashion();
});

allFashion();

//About Page

//Hide sort & filter from contact page
$("#about").click(function(){
  $(".dropdown").hide();
});

document.getElementById('about').addEventListener('click', function(){
console.log('About Page');
document.getElementById('view').innerHTML = " "; //to clear the container
document.getElementById('view').innerHTML +=
'<img class="myItems col-sm-10 col-md-12 col-lg-12 mt-5 mb-5 ml-5" src="images/aboutBanner.jpg" class="d-block w-100" alt="...">'
+'<h3 class="container col-sm-10 col-md-12 col-lg-12 mt-5 mb-5 ml-5">Kia Ora !<br>Vandy is basically New Zealand based store for women\'s accessories collection. Initially we are only trading with women\'s Jewellery and bags collection but in near future looking for bringing lot more for you women..<br><br> Happy spring !  Happy shopping !</h3>'
});

//Modals
// function myFun() {
//     for (var i = 0; i < fashion.length ; i++){
//     document.getElementById('view').innerHTML = " "; //to clear the container
//     $('.myFashion').on('click', function(){
//     document.getElementById('modalContent').innerHTML
//     += '<img class="card-thumbnail" src="' + fashion[i].image + '"  alt="fashion"/>'
//     + '<div class="jumbotrons ml-5 text-info">' + fashion[i].categories + '</br>'
//     + fashion[i].style + '</br>' + fashion[i].price + '</br>' + '</div>'
//   })
// }};

//Using Jquery to display Modal
 $('.productContainer').on('click', function(e){
   var productToShow = fashion.filter(product => product.id == e.target.id)[0];
   console.log(productToShow);
  $('.myModal').show();
  // document.getElementById('view').innerHTML = " "; //to clear the container
  document.getElementById('modalContent').innerHTML
  = '<div class="display-4 bg-dark text-success text-center">' + productToShow.categories + '</br>'
  + productToShow.style + '</br>' + productToShow.price + '</br>' + '</div>'
  + '<img class="card-thumbnail" src=" ' + productToShow.image + ' "  alt="fashion"/>'
});

  $('.closeBar').on('click', function(){
    // console.log('close');
    $('.myModal').hide();
  });


// Sort
function theSort(){
for (var i = 0; i < fashion.length; i++) {
console.log(fashion.length);
allFashion(i);
}
}

//sort High to Low

$('.htl').on('click', function(){
 document.getElementById('view').innerHTML = ' ';
function comparePrice(a, b) {
var comparisonPrice = 0;
if (a.price < b.price) {
comparisonPrice = 1;
} else if (a.price > b.price) {
comparisonPrice = -1;
}
return comparisonPrice;
}
fashion.sort(comparePrice);
console.log(fashion.sort(comparePrice));
theSort();
});

// Sort Low to High

$('.lth').on('click', function(){
// document.getElementById('view').innerHTML = ' ';
function comparePrice(a, b) {
var comparisonPrice = 0;
if (a.price > b.price) {
comparisonPrice = 1;
} else if (a.price < b.price) {
comparisonPrice = -1;
}
return comparisonPrice;
}
fashion.sort(comparePrice);
console.log(fashion.sort(comparePrice));
theSort();
});

//filter

//Display Drop Earrings
$('.test1').on('click', function(){
  console.log('Drop Earrings Only');
  document.getElementById('view').innerHTML = " "; //to clear the container
  for(var i = 0; i < fashion.length; i++) {
    if (fashion[i].style === 'Drop Earrings') {
      document.getElementById('view').innerHTML
       +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
       +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
       +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
       +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
       +'</div>';
          }
        }
      });

      // Display Hoop Earrings

      $('.test2').on('click', function(){
        console.log('Hoop Earrings Only');
        document.getElementById('view').innerHTML = " "; //to clear the container
        for(var i = 0; i < fashion.length; i++) {
          if (fashion[i].style === 'Hoop Earrings') {
            document.getElementById('view').innerHTML
             +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
             +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
             +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
             +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
             +'</div>';
                }
              }
            });

    // Display Clutch

    $('.test3').on('click', function(){
      console.log('Clutch Only');
      document.getElementById('view').innerHTML = " "; //to clear the container
      for(var i = 0; i < fashion.length; i++) {
      if (fashion[i].style === 'Clutch') {
      document.getElementById('view').innerHTML
      +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
      +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
      +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
      +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
      +'</div>';
          }
        }
    });

    // Display Handbags

    $('.test4').on('click', function(){
      console.log('HandBags Only');
      document.getElementById('view').innerHTML = " "; //to clear the container
      for(var i = 0; i < fashion.length; i++) {
      if (fashion[i].style === 'Handbag') {
      document.getElementById('view').innerHTML
      +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
      +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
      +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
      +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
      +'</div>';
          }
        }
    });

    // Display Laptop Bags

    $('.test5').on('click', function(){
      console.log('Laptop Bags Only');
      document.getElementById('view').innerHTML = " "; //to clear the container
      for(var i = 0; i < fashion.length; i++) {
      if (fashion[i].style === 'Laptop bag') {
      document.getElementById('view').innerHTML
      +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
      +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
      +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
      +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
      +'</div>';
          }
        }
    });

// Women's Jewellery Menu
// Display Earrings only
document.getElementById('jewellery').addEventListener('click', function(){
  console.log('EarringsOnly');

  document.getElementById('view').innerHTML = " "; //to clear the container
  for(var i = 0; i < fashion.length; i++) {
    if (fashion[i].categories === "earrings") {
      document.getElementById('view').innerHTML
       +='<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
       +'<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
       +'<br><p class="text-danger"> ' + fashion[i].style + '</p>'
       +'<br><p class="text-danger"> ' + fashion[i].price + '</p>'
       +'</div>';
          }
        }
      });

//Women's Bags menu
// Display Bags only
document.getElementById('bags').addEventListener('click', function(){
  console.log('Bags Only');
  document.getElementById('view').innerHTML = " "; //to clear the container
  for(var i = 0; i < fashion.length; i++) {
    if (fashion[i].categories === "Bags") {
      document.getElementById('view').innerHTML
      += '<div class="col col-sm-6 col-md-6 col-lg-3 ml-md-5 myItems">'
       + '<img class="img-thumbnail" src=" ' + fashion[i].image + ' " alt="fashion">'
       + '<br><p class="text-danger"> ' + fashion[i].style + '</p>'
       + '<br><p class="text-danger"> ' + fashion[i].price + '</p>'
       + '</div>';
         }
       }
     });

// Contact form

//Hide sort & filter from contact page
$("#contact").click(function(){
  $(".dropdown").hide();
});

document.getElementById('contact').addEventListener('click', function(){
  console.log('Contact form');
  document.getElementById('alert').innerHTML = "Always there for you !";
  document.getElementById('view').innerHTML = " "; //to clear the container
  document.getElementById('viewContact').innerHTML
 += '<div class="container">'
 + '<label for="fname">First Name</label>'
 + '<input type="text" id="fname" name="firstname" placeholder="Your name..">'

 + '<label for="lname">Last Name</label>'
 + '<input type="text" id="lname" name="lastname" placeholder="Your last name..">'

 + '<label for="country">City</label>'
 + '<select id="country" name="country">'
 + '<option value="Auckland">Auckland</option>'
 + '<option value="Wellington">Wellington</option>'
 + '<option value="Palmerston North">Palmerston North</option>'
 + '</select>'

 + '<label for="subject">Subject</label>'
 + '<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>'

 + '<input onClick="myF()" id="submit" type="submit" value="Submit">'
 + '</div>'
});



//

//Contact trigger
// $(document).ready(function(){
//   $('#submit').click(function(){
//     alert('Enquiry sent successfully !');
//   });
// });



//Using Jquery to display Modal
// $('.myFashion').on('click', function(){
//   console.log('Modals');
//   console.log(this.id);
//   // console.log(i);
//   $('.myModal').show();
//   for (var i = 0; i< fashion.length; i++){
//     // id property if dog is checked for equivallence with the image id
//   document.getElementById('view').addEventListener('click', function(){
//       console.log(fashion[i].style);
//       console.log(fashion[i].price);
//       document.getElementById('view').innerHTML = " "; //to clear the container
//
//     });
//   }
// });
function myF() {
  alert('Thanks, Yours Enquiry sent successfully ! We will respond very soon..');
}
