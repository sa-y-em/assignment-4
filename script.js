const total = document.getElementById('total-jobs');
const interview = document.getElementById('interviewNumber');
const rejected = document.getElementById('rejectedNumber');
const allCards = document.getElementById('all-cards');
const filterForInterview = document.getElementById('filtering-card');

const interviewButtonMain = document.getElementById('interview-button-main')
const rejectedButtonMain = document.getElementById('rejected-button-main')

let interviewArray = [];
let rejectedArray = [];
let current = 'all';

//job number

function jobNumber() {
  total.innerText = allCards.children.length
  interview.innerText = interviewArray.length;
  rejected.innerText = rejectedArray.length;
}
jobNumber() //calling all jobs ,interview and rejected numbers

//toggling part
const allButton = document.getElementById('all-button');
const interviewButton = document.getElementById('interview-button');
const rejectedButton = document.getElementById('rejected-button');

function toggle(id) {
  //removing black
  allButton.classList.remove('bg-black', 'text-white');
  interviewButton.classList.remove('bg-black', 'text-white');
  rejectedButton.classList.remove('bg-black', 'text-white');
  //adding white

  allButton.classList.add('bg-white', 'text-black');
  interviewButton.classList.add('bg-white', 'text-black');
  rejectedButton.classList.add('bg-white', 'text-black');
  //adding black to clicked button
  const clicked = document.getElementById(id);
  clicked.classList.remove('bg-white', 'text-black');
  clicked.classList.add('bg-black', 'text-white');

  if (id == 'interview-button') {
    allCards.classList.add('hidden');
    filterForInterview.classList.remove('hidden');
    rendering();
    current = 'interview';
    

  }
  else if (id == 'all-button') {
    allCards.classList.remove('hidden');
    filterForInterview.classList.add('hidden');
    
  }
  else if (id == 'rejected-button') {
    allCards.classList.add('hidden');
    
    filterForInterview.classList.remove('hidden');
    renderingRejected()
    current = 'rejected';
    
  }


}

//select clicked item
document.querySelector('main').addEventListener('click', function (event) {

  if (event.target.classList.contains('interview-button-main')) {
    const fullCardInfo = event.target.parentNode.parentNode;
    const jobTitle = fullCardInfo.querySelector('.job-title').innerText;
    const skill = fullCardInfo.querySelector('.skill').innerText;
    const location = fullCardInfo.querySelector('.location').innerText;
    const applyStatus = fullCardInfo.querySelector('.not-applied');
    const discrib = fullCardInfo.querySelector('.discrib').innerText;

    const singleCardInfo = {
      jobTitle,
      skill,
      location,
      applyStatus,
      discrib
    };
    fullCardInfo.querySelector('.not-applied').innerText = 'interview';

    const interviewArrayExist = interviewArray.find(item => item.jobTitle == singleCardInfo.jobTitle);
    if (!interviewArrayExist) {
      interviewArray.push(singleCardInfo);
    }
    //jodi interview te add hoy mane rejected theke remove hoise
    rejectedArray = rejectedArray.filter(item=> item.jobTitle != singleCardInfo.jobTitle);

    jobNumber();
    
    console.log(interviewArray)
    if (current === 'interview') {
      rendering();
    }
    else if (current === 'rejected') {
      renderingRejected();
    }
    
  }






//rejected 


  else if (event.target.classList.contains('rejected-button-main')) {
    const fullCardInfo = event.target.parentNode.parentNode;
    const jobTitle = fullCardInfo.querySelector('.job-title').innerText;
    const skill = fullCardInfo.querySelector('.skill').innerText;
    const location = fullCardInfo.querySelector('.location').innerText;
    const applyStatus = fullCardInfo.querySelector('.not-applied');
    const discrib = fullCardInfo.querySelector('.discrib').innerText;

    const singleCardInfo = {
      jobTitle,
      skill,
      location,
      applyStatus,
      discrib
    };
    fullCardInfo.querySelector('.not-applied').innerText = 'rejected';

    const rejectedArrayExist = rejectedArray.find(item => item.jobTitle == singleCardInfo.jobTitle);
    if (!rejectedArrayExist) {
      rejectedArray.push(singleCardInfo);
    }

    interviewArray = interviewArray.filter(item=> item.jobTitle != singleCardInfo.jobTitle);


    
    jobNumber();

    console.log(rejectedArray)
    if (current === 'rejected') {
      renderingRejected();
    }
    else if (current === 'interview') {
      rendering();
    }

  }



})

function rendering() {
  filterForInterview.innerHTML = '';
  for (let interviewArrayItem of interviewArray) {
    let div = document.createElement('div');
    div.className = ' bg-white border-1 text-gray-800 p-[8px] mb-2.5';
    div.innerHTML = `  <div class="flex justify-between">
                <p class="font-bold job-title">${interviewArrayItem.jobTitle}</p>
                <p><i class="fa-solid fa-trash"></i> </p>
            </div>
            <p class="mb-2 skill">${interviewArrayItem.skill}</p>
            <p class="my-2 location">${interviewArrayItem.location}</p>
            <button class="p-0.5 bg-blue-100 rounded-xl p-[5px] not-applied">${interviewArrayItem.applyStatus.innerText} </button>
            <p class="discrib">${interviewArrayItem.discrib}</p>
            <div class="my-2">
                <button class="p-[4px] text-green-500 border " >INTERVIEW</button>
                <button class="p-[4px] text-red-500 border">REJECTED</button>
            </div>`
    filterForInterview.appendChild(div);
    
    

  }
}



function renderingRejected() {
  filterForInterview.innerHTML = '';
  for (let rejectedArrayItem of rejectedArray) {
    let div = document.createElement('div');
    div.className = ' bg-white border-1 text-gray-800 p-[8px] mb-2.5';
    div.innerHTML = `  <div class="flex justify-between">
                <p class="font-bold job-title">${rejectedArrayItem.jobTitle}</p>
                <p><i class="fa-solid fa-trash"></i> </p>
            </div>
            <p class="mb-2 skill">${rejectedArrayItem.skill}</p>
            <p class="my-2 location">${rejectedArrayItem.location}</p>
            <button class="p-0.5 bg-blue-100 rounded-xl p-[5px] not-applied">${rejectedArrayItem.applyStatus.innerText} </button>
            <p class="discrib">${rejectedArrayItem.discrib}</p>
            <div class="my-2">
                <button class="p-[4px] text-green-500 border " >INTERVIEW</button>
                <button class="p-[4px] text-red-500 border">REJECTED</button>
            </div>`
    filterForInterview.appendChild(div);



  }
}

//challange part 
let icon = document.getElementsByClassName('fa-solid fa-trash');
icon.addEventListener('click',function(){
  icon.classList.add('hidden');
})