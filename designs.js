/*
Select color input
Select size input

When size is submitted by the user, call makeGrid()
*/
var sizePicker = document.querySelector('#sizePicker');
var PixelCanvas =  document.querySelector('#pixelCanvas')

sizePicker.lastElementChild.addEventListener('click', function (event){
    event.preventDefault();
    //refresh the grid whenever the submit button is clicked
    PixelCanvas.innerHTML = ''; 
    // call the makeGrid() function   
    makeGrid();
})


function makeGrid() {
    createTable();
    createEventListeners();
}

function createTable(){
    /*
    store the elements thats needed to be accessed in variables
    h = height,   w = width
    */
    var width = document.getElementById('inputWidth').value;
    var height = document.getElementById('inputHeight').value;
    
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
}

function createEventListeners(){
    var color_picker = document.querySelector("#colorPicker");
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


    
        
    
    







