console.log('connected!');

let moviesArray = [];
var userInput= " ";

function addTo(){
            
        if (userInput === null){
            alert("You must enter a valid response");
           
        } else{
            document.getElementById("movieList").innerHTML=" ";
            moviesArray.push(document.getElementById("userInput").value);
            
            for(i = 0; i < moviesArray.length; i++){
                {document.getElementById("movieList").innerHTML += moviesArray[i]}
             }
        }
    console.log(moviesArray);
}