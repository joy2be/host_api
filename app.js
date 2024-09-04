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
    data.forEach(item => {
      // Create a new row
      const row = document.createElement('tr');

      // Add cells to the row
      const idCell = document.createElement('td');
      idCell.textContent = scandata.scanid;
      row.appendChild(idCell);
      const locCell = document.createElement('td');
      locCell.textContent = scandata.current_loc;
      row.appendChild(locCell);
      const itemidCell = document.createElement('td');
      itemidCell.textContent = scandata.scanned_itemid;
      row.appendChild(itemidCell);
      const scantimeCell = document.createElement('td');
      scantimeCell.textContent = scandata.scantimestamp;
      row.appendChild(scantimeCell);
      const invtypeCell = document.createElement('td');
      invtypeCell.textContent = scandata.invtype;
      row.appendChild(invtypeCell);
      const machineCell = document.createElement('td');
      machineCell.textContent = scandata.machname;
      row.appendChild(machineCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
