function comparison(a,b) {
    if (a>b){
        alert(a + " is a greater number.");
    } else {
        alert(b + " is a greater number.");
    } 
}

function sortFunction() {
    var sortArray = [];
    sortArray[0] = prompt("Enter a number.");
    sortArray[1] = prompt("Enter another number.");
    sortArray[2] = prompt("Enter another number.");
   
    alert(sortArray.sort(function(a, b){return a - b}));   
}

function maxValueFunction() {
    var maxArray = [];
    
    for(i=0; i<5; i++) {
        maxArray[i] = prompt("Enter a number.");
    }
    
    var largest = maxArray[0];
    
    for(i=1; i<5; i++){
        if (largest < maxArray[i]) {
            largest = maxArray[i];
        }
    }
    
    alert("The largest value is: " + largest);  
}

function oddOrEven() {
    
}