//'use strict';
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
        $.each(data, function(index, scandata) {
			var row = $("<tr></tr>"); // Create a new table row

			// Create table cells and fill them with the person's data
			row.append($("<td></td>").text(scandata.scanid));
			row.append($("<td></td>").text(scandata.current_loc));
			row.append($("<td></td>").text(scandata.scanned_itemid));
			row.append($("<td></td>").text(scandata.scantimestamp));
			row.append($("<td></td>").text(scandata.invtype));
			row.append($("<td></td>").text(scandata.machname));

			tableBody.append(row); // Add the row to the table body
        });
      });
    });
