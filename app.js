'use strict';

const switcher = document.querySelector('.btnTheme');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

var myArray = []
$.ajax({
    method:'GET',
    url:'https://joy2be.github.io/host_api/ScanTestData',
    success:function(response){
        myArray = response.items
        buildTable(myArray)
        console.log(MyArray)
    }
})
      
function buildTable(jsonData){
    var table = document.getElementById('myTable')
    for (var i = 0; i < jsonData.length; i++) {
        var row = '<tr>
                    <td>${jsonData[i].scanid}</td>
                    <td>${jsonData[i].current_loc}</td>
                    <td>${jsonData[i].scanned_itemid}</td>
                    <td>${jsonData[i].scantimestamp}</td>
                    <td>${jsonData[i].invtype}</td>
                    <td>${jsonData[i].machname}</td>
                </tr>'
        table.innerHTML += row
    }
}
