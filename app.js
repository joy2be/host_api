//'use strict';
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

// Fetch the JSON data from the file
fetch('https://joy2be.github.io/host_api/ScanTestData.json')
  .then(response => response.json())
  .then(data => {
    // Get the table body element
    const tableBody = document.getElementById('table-body');

    // Loop through the JSON array
    scandata.forEach(item => {
      // Create a new row
      const row = document.createElement('tr');

      // Add cells to the row
      const scanidCell = document.createElement('td');
      scanidCell.textContent = scandata.scanid;
      row.appendChild(scanidCell);
      const current_locCell = document.createElement('td');
      current_locCell.textContent = scandata.current_loc;
      row.appendChild(current_locCell);
      const scanned_itemidCell = document.createElement('td');
      scanned_itemidCell.textContent = scandata.scanned_itemid;
      row.appendChild(scanned_itemidCell);
      const scantimestampCell = document.createElement('td');
      scantimestampCell.textContent = scandata.scantimestamp;
      row.appendChild(scantimestampCell);
      const invtypeCell = document.createElement('td');
      invtypeCell.textContent = scandata.invtype;
      row.appendChild(invtypeCell);
      const machnameCell = document.createElement('td');
      machnameCell.textContent = scandata.machname;
      row.appendChild(machnameCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
