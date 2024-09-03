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

    $(document).ready(function() {
      // Retrieve JSON data from "ScanTestData.json" file
      $.getJSON("ScanTestData.json", function(data) {
        var tableBody = $("#myTable tbody");

        // Iterate over each person object in the JSON data
        $.each(data, function(index, items) {
          var row = $("<tr></tr>"); // Create a new table row

          // Create table cells and fill them with the person's data
          row.append($("<td></td>").text(items.scanid));
          row.append($("<td></td>").text(items.current_loc));
          row.append($("<td></td>").text(items.scanned_itemid));
          row.append($("<td></td>").text(items.scantimestamp));
          row.append($("<td></td>").text(items.invtype));
          row.append($("<td></td>").text(items.machname));

          tableBody.append(row); // Add the row to the table body
        });
      });
    });
