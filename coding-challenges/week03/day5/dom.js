var div = document.createElement('div');
var heading = document.createElement('h1');
var text = 'Numbers and Squares';
var tbl = document.createElement('table');
var tblbody = document.createElement('tbody');
var line = document.createElement('hr');
var row = document.createElement('tr');
var thead = document.createElement('th');
var thead1 = 'Numbers';
thead.append(thead1);
row.append(thead);
var thead = document.createElement('th');
var thead2 = 'Squares';
thead.append(thead2);
row.append(thead);
tbl.append(row);
for(var i = 1; i <= 10; i++){
    var row = document.createElement('tr');

    //first cell
    var cell1 = document.createElement('td');
    var text1 = i;
    cell1.append(text1);
    row.append(cell1);

    //second cell
    var cell2 = document.createElement('td');
    var text2 = i*i;
    cell2.append(text2);
    row.append(cell2);

    tblbody.append(row);
    tbl.append(tblbody);


}
tbl.className ='table table-striped table-hover'; 
div.className = 'container-fluid col-9';
heading.className = 'm-3';
heading.append(text);
div.append
div.append(heading);
div.append(line);
div.append(tbl);
document.body.append(div);