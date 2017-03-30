
    
    
function addRow() {

    var Author = document.getElementById("Author");
    var Title = document.getElementById("Title");
    var Editor = document.getElementById("Editor");
    var Locus = document.getElementById("Locus");
    var Lang = document.getElementById("Lang");
    var LocusLink = document.getElementById("Link");
    var table = document.getElementById("myTableData");

    if (Lang = "Latin") {
        var Display = '<a href="display.html#/lattb-'+LocusLink.value+'-lattb.'+LocusLink.value+'.1.tb.xml">View in Arethusa</a>';
    }
    else if (Lang = "Greek") {
        var Display = '<a href="'+window.location.hostname+'/display.html#/grctb-'+LocusLink.value+'-grctb.'+LocusLink.value+'1.tb.xml">View in Arethusa</a>';
    }
    else {
        var Display = '<a href="'+window.location.hostname+'/display.html#/misctb-'+LocusLink.value+'-misctb.'+LocusLink.value+'1.tb.xml">View in Arethusa</a>';
    };
    
      

               
        
        
var rowCount = table.rows.length;
var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= Author.value;
    row.insertCell(2).innerHTML= Title.value;
    row.insertCell(3).innerHTML= Editor.value;
    row.insertCell(4).innerHTML= Locus.value;
    row.insertCell(5).innerHTML= Display;
 
 
    }
    
    function deleteRow(obj) {
    
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
    }
    
    function addTable() {
    
    var myTableDiv = document.getElementById("myDynamicTable");
    
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    
    for (var i=0; i<5; i++){
        var tr = document.createElement('TR');
        tr.setAttribute("id","newtree");
        tableBody.appendChild(tr);
    
        
        for (var j=0; j<6; j++){
        var td = document.createElement('TD');
        td.width='400';
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
        
        }
        }
        myTableDiv.appendChild(table);
        
        }
        
        function load() {
        
        console.log("Page load finished");
        
        }
        
        
function UpdateTable() {
  if($("#newtree").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You did not add any data");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
   
   
   var newtree = $('#newtree').html();
   localStorage.setItem('newtree', newtree);
   return false;
   
   
};



function DisableDevice(){
    window.localStorage.clear();
    location.reload();
    return false;
};

window.onload = function Searchfortraps() {
    if(localStorage.getItem('newtree')) {
    $('#newtree').html(localStorage.getItem('newtree'));
    } 
};

