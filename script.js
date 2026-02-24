const total = document.getElementById('total-jobs');
const interview = document.getElementById('interviewNumber');
const rejected = document.getElementById('rejectedNumber');
const allCards = document.getElementById('all-cards');

let interviewArray = [];
let rejectedArray = [];

//job number

function jobNumber(){
  total.innerText =  allCards.children.length
  interview.innerText = interviewArray.length;
  rejected.innerText = rejectedArray.length;
}
jobNumber() //calling all jobs ,interview and rejected numbers

//toggling part
const allButton = document.getElementById('all-button');
const interviewButton = document.getElementById('interview-button');
const rejectedButton = document.getElementById('rejected-button');

function toggle(id){
    //removing black
   allButton.classList.remove('bg-black','text-white');
   interviewButton.classList.remove('bg-black','text-white');
   rejectedButton.classList.remove('bg-black','text-white');
   //adding white
   
    allButton.classList.add('bg-white', 'text-black');
    interviewButton.classList.add('bg-white', 'text-black');
    rejectedButton.classList.add('bg-white', 'text-black');
    //adding black to clicked button
    const clicked = document.getElementById(id);
    clicked.classList.remove('bg-white','text-black');
    clicked.classList.add('bg-black','text-white');


}