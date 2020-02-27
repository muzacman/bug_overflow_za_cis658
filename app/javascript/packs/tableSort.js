let headers = document.getElementsByTagName('TH');
let tbody = document.getElementsByTagName('TBODY')[0];
let rowsCollect = tbody.getElementsByTagName('TR');
let rowsArray = [];
let headerTitles = [];
let clicks;
let itemToDelete;
var i;

//sort rows
function sortRowsAscending(columnIndex) {
        rowsArray.sort(function(a,b) {
            let bfield = b.getElementsByTagName('TD').item(columnIndex).innerHTML.toString();
            let afield = a.getElementsByTagName('TD').item(columnIndex).innerHTML.toString();

            bfield = bfield.toLowerCase();
            afield = afield.toLowerCase();
            if (bfield < afield) {
                return 1;
            } else if (bfield > afield) {
                return -1;
            } else {
                return 0;
            }
        });
}


function sortRowsDescending(columnIndex) {
    rowsArray.sort(function(a,b) {
        let bfield = b.getElementsByTagName('TD').item(columnIndex).innerHTML.toString();
        let afield = a.getElementsByTagName('TD').item(columnIndex).innerHTML.toString();

        bfield = bfield.toLowerCase();
        afield = afield.toLowerCase();
        if (bfield > afield) {
            return 1;
        } else if (bfield < afield) {
            return -1;
        } else {
            return 0;
        }
    });
}




for (i = 0; i < headers.length; i++) {
    headerTitles[i] = headers[i].innerHTML;
    clicks = new Array(headerTitles.length).fill(0);
    headers[i].addEventListener('click', event => {
        let clickedElement = event.currentTarget;
        let clickIndex = headerTitles.indexOf(clickedElement.innerHTML.toString());
        console.log(clickIndex);

        //convert row HTMLCollection to Array
        for (i = 0; i < rowsCollect.length; i++) {rowsArray[i] = rowsCollect[i];}

        //remove rows from document
        for (i = 0; i < rowsCollect.length; i) {
            itemToDelete = rowsCollect[i];
            tbody.removeChild(itemToDelete);
            // DEBUG console.log(itemToDelete.innerHTML + " deleted");
            rowsCollect = tbody.getElementsByTagName('TR');
        }

        if (clickedElement.innerHTML.toString() === 'Actions') {
        } else if (clicks[clickIndex] % 2 !== 0 || clicks[clickIndex] === null) {
            sortRowsDescending(clickIndex);
            console.log("sort ascend");
        } else {
            sortRowsAscending(clickIndex);
            console.log("sort descend");
        }

        clicks[clickIndex] += 1;

        //remove rows from document
        for (i = 0; i < rowsArray.length; i++) {tbody.appendChild(rowsArray[i]);}
        console.log(clicks[clickIndex]);
    });
}