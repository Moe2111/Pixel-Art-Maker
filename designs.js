// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// h = height,   w = width
 //store the value of the height, width and color in variables to access them


var sizeP = document.querySelector('#sizePicker');
var PixelCanvas =  document.querySelector('#pixelCanvas')


sizeP.lastElementChild.addEventListener('click', function (event){
    event.preventDefault();
    //refresh the grid whenever the submit button is clicked
    PixelCanvas.innerHTML = ''; 
    // call the makeGrid() function   
    makeGrid();
    
})
function makeGrid() {
    //store the elements thats needed to be accessed in variables
    var width = document.getElementById('inputWidth').value;
    var height = document.getElementById('inputHeight').value;
    var color_picker = document.querySelector("#colorPicker");
    //loop over each column
    for(var r = 1; r <= height; r++){
        var column = document.createElement('tr'); 
        column.id = 'column'+r;
        PixelCanvas.appendChild(column);
        for(var c = 1; c <= width; c++){
            //loops over the column and makes rows
            //create a column element
            var row = document.createElement('td');
            //give the row an ID to access it later when coloring
            row.className = 'row'
            //append the row element that was created to the column
            document.getElementById('column'+r).appendChild(row);
            

        }
    }
    //save the node list of the rows into the variable 'cells'
    var cells = document.querySelectorAll('.row');
    //access every row in the nodelist using forEach
    cells.forEach(item => {
        //add an event listener
        item.addEventListener('click', function(event){
            //color the row that have been clicked
            item.style.backgroundColor = color_picker.value;
        
         })

    })

}


    
        
    
    







