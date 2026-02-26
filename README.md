1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
getElementById: it grabs a id from the document by id name
getElementsByClassName: it grabs class from document by class name. it also returns a html list
querySelector: it works on id ,class and tag but retuns only the first matched items
querySelectorAll: it works on id ,class and tag but retuns  all  matched items in a node


2. How to create and insert a new element into DOM?
ams:  let varName = document.createElement("element name"); //creating element
varName.innerText = "things to insert"; //insert text
document.placeOfAdding.appendChild(varName); //adding 


3. What is Event Bubbling?
ans: event first occur in target then parent then grandparent and so on. that's why called event bubbling.
4. What is Event Delegation? Why useful?
ans: adding event listener in parent elements.
useful  :   1.less memory
           2.clean code
            3. good performance
5. Difference between preventDefault() and stopPropagation()?
ans : preventDefault()==> stops browsers default behaviour
       stopPropagation()  ==>stops event bubbling
