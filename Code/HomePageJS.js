//Json Data
const tagDATA = ["Agriculture", "Biotechnology ", "Marine Sciences", "Food Technology", "Horticultural Sciences ", "Mathematics and Physics",
"Applied Law", "Administration ", "Hospitality Management", "Business Management", "Accounting  ", "Human Resources", 
"Auditing ", "Project Management", "Marketing", "Business Management", "Sport  ", "Tourism ", 
"Education", "Teaching", "Chemical Engineering", "Clothing", "Computer Engineering  ", "Maritime Studies", 
"Mechanical Engineering", "Biomedical Sciences", "Dental Sciences", "Nursing", "Ophthalmic Sciences", "Wellness Sciences",
"Interior Design", "Urban and Regional Planning", "Information Technology", "Applied Design", "Media"];

const data = [
  {
    id: "1-Bursary",
    name: "NSFAS",
    description: "The National Financial Aid Scheme is an initiative run by the Department of Higher Education and Training. It was established according to the NSFAS Act (Act 56 of 1999) to provide financial support to disadvantaged students who wish to further their studies at public universities or TVET colleges.",
    brief: "NSFAS is a government run initiative to help South African citizens acquire funds for their tertiary education.",
    covers: "Tuition fees, Accommodation, Transport (R7 500  per annum), Living allowance R15 000  per annum, Book allowances (R5200 per annum), Personal care allowance (R2900 per annum for students in catered residences)",
    qualify: "All South African citizens, All SASSA grant recipients qualifies for funding, Applicants whose combined household income is not more than R350 000 per annum, Person with disability: Combined household income must not be more than R600 000 per annum, Students who started studying before 2018 whose household income is not more than R122 000 per annum",
    photo: "../Resources/NSFAS Image.jpg",
    fields: "NSFAS covers all fields of study at South African Universities or TVET Colleges",
    url: "nsfas.org.za",
  },

  {
    id: "2-Bursary",
    name: "",
    description: "",
    brief: "",
    covers: "",
    photo: "",
    fields: "",
    url: "",
  },

  {
    id: "3-Bursary",
    name: "",
    description: "",
    brief: "",
    covers: "",
    photo: "",
    fields: "",
    url: "",
    
  },

  {
    id: "4-Bursary",
    name: "",
    description: "",
    brief: "",
    covers: "",
    photo: "",
    fields: "",
    url: "",
  },

  {
    id: "5-Bursary",
    name: "",
    description: "",
    brief: "",
    covers: "",
    photo: "",
    fields: "",
    url: "",
  },

  {
    id: "6-Bursary",
    name: "",
    description: "",
    brief: "",
    covers: "",
    photo: "",
    fields: "",
    url: "",
  }

];



//Search bar keyup function that uses jquery
$("#SearchBar").keyup(function () {

  var filter = $(this).val(),
    count = 0;

  $('#cards div').each(function () {
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).animate({ "opacity": "hide", top: "100" }, 500);
    } else {
      $(this).animate({ "opacity": "show", top: "100" }, 500);
      count++;
    }
  });
});

//Creation of card divs function
function cardTemplate(card) {

  return`

  <div class="col-sm-4">
    <div class="card" style="background-image: url('${card.photo}');">
      <div class="card-content">
        <h3 class="card-title">${card.name}</h3>
        <p class="card-brief">${card.brief}</p>
        <p class="card-body">${card.fields}</p>
        <a class="button"  onclick="openPage(this.id)" id="${card.id}" >Open</a>
      </div>
    </div>
  </div>


`

}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects
document.getElementById("cards").innerHTML = `

${data.map(cardTemplate).join("")}

`


//Counter effect
$('.counter').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 4000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
});


//Changing words effect for slogan
setInterval(function () {
  const show = document.querySelector('span[data-show]')
  const next = show.nextElementSibling || document.querySelector('span:first-child')
  const up = document.querySelector('span[data-up]')

  if (up) {
    up.removeAttribute('data-up')
  }

  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')

  next.setAttribute('data-show', '')
}, 2000)


//Card Popup
const  model_container = document.getElementById('model-container');
const close = document.getElementById('close');

function openPage(id){

var Title = "empty";
var Description = "empty";
var Covers = "empty";
var Qualify = "empty";
var Website = "empty";
var Field = "empty";


data.forEach(function (element, index) {
  if(element['id'] === id){
      Title = element.name; 
      Description = element.description; 
      Covers = element.covers;
      Qualify = element.qualify;
      Website = element.url;
      Field = element.fields;
  }
})

const coversData = Covers.split(',');
var arrayLength1 = coversData.length;

for (var i = 0; i < arrayLength1; i++) {
    
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(coversData[i]));
    document.querySelector(".covers").appendChild(node);
}

 const qualifyData = Qualify.split(',');
 var arrayLength2 = qualifyData.length;

 for (var i = 0; i < arrayLength2; i++) {
    
   var node = document.createElement('li');
   node.appendChild(document.createTextNode(qualifyData[i]));
   document.querySelector(".qualify").appendChild(node);
 }


  headerInfo.innerText = Title;
  description.innerText = Description;
  website.innerText = Website;
  field.innerText = Field;
  model_container.classList.add('show');
} 

 close.addEventListener('click', ()=>{
   model_container.classList.remove('show');
   $(covers).empty();
   $(qualify).empty();
 });

 
 
