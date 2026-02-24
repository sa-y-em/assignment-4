const total = document.getElementById('total-jobs');
const interview = document.getElementById('interviewNumber');
const rejected = document.getElementById('rejectedNumber');
const allCards = document.getElementById('all-cards');

let interviewArray = [];
let rejectedArray = [];

// let total.innerText =
console.log()

function jobNumber(){
  total.innerText =  allCards.children.length
  interview.innerText = interviewArray.length;
  rejected.innerText = rejectedArray.length;
}
jobNumber() //calling all jobs ,interview and rejected numbers