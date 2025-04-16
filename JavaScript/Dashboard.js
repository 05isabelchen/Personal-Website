              
// Predefined data for variables with both summary statistics and churn relationship
const variableData = {
  charges: {
    type: 'numerical',
    title: 'Monthly Charges ($)',
    data: {
      count: 7043,
      min: 18.25,
      max: 118.75,
      range: 100.50,
      mean: 64.76,
      median: 70.35,
      standardDeviation: 30.09,
      q1: 35.50,
      q3: 89.85,
      iqr: 54.35
    }
  },
  Totalcharges: {
    type: 'numerical',
    title: 'Total Charges ($)',
    data: {
      count: 7043,
      min: 18.80,
      max: 8684.80,
      range: 100.50,
      mean:  2281.92,
      median:  1397.48,
      standardDeviation:  2265.27,
      q1:  402.23,
      q3:  3786.60,
      iqr: 3384.37
    }
  },
  tenure: {
    type: 'numerical',
    title: 'Tenure (Months)',
    data: {
      count: 7043,
      min: 0,
      max: 72,
      range: 72,
      mean: 32.37,
      median: 29.00,
      standardDeviation: 24.56,
      q1: 9,
      q3: 55,
	  iqr: 46
    }
  },
  maleorfemale: {
    type: 'categorical',
    title: 'Gender',
    data: {
      categories: ['Female', 'Male'],
      counts: [3518, 3525],
      percentages: [49.95, 50.05],
      mode: 'Male',
      total: 7043
    },
    churnData: {
      categories: ['Female', 'Male'],
      No: [2549, 2625],
      Yes: [939, 930]
    }
  },
  seniorCitizen: {
    type: 'categorical',
    title: 'Senior Citizen',
    data: {
      categories: ['Is a Senior Citizen', 'Not a Senior Citizen'],
      counts: [1140, 5902],
      percentages: [16.2, 83.8],
      mode: 'Not a Senior Citizen',
      total: 7043
    },
    churnData: {
      categories: ['Is a Senior Citizen', 'Not a Senior Citizen'],
      No: [666, 4508],
      Yes: [476, 1393]
    }
  },
  dependent: {
    type: 'categorical',
    title: 'Dependent',
    data: {
      categories: ['Has a Dependent', "Doesn't have a Dependent"],
      counts: [2113, 4930],
      percentages: [30, 70],
      mode: "Doesn't have a Dependent",
      total: 7043
    },
    churnData: {
      categories: ['Has a Dependent', "Doesn't have a Dependent"],
      No: [1784, 3390],
      Yes: [326, 1543]
    }
  },
  partner: {
    type: 'categorical',
    title: 'Partner',
    data: {
      categories: ['Has a Partner', "Doesn't have a Partner"],
      counts: [3178, 3183],
      percentages: [49.95, 50.05],
      mode: "Doesn't have a Partner",
      total: 7043
    },
    churnData: {
      categories: ['Has a Partner', "Doesn't have a Partner"],
      No: [2733, 2411],
      Yes: [669, 1200]
    }
  },
  phoneservice: {
    type: 'categorical',
    title: 'Phone Service',
    data: {
      categories: ['No', 'Yes'],
      counts: [682, 6361],
      percentages: [9.68, 90.3],
      mode: 'Yes',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes'],
      No: [512, 4662],
      Yes: [170, 1699]
    }
  },
  multiplelines: {
    type: 'categorical',
    title: 'Multiple Lines',
    data: {
      categories: ['No', 'Yes', 'No phone service'],
      counts: [3390, 2971, 682],
      percentages: [48.1, 42.2, 9.7],
      mode: 'No',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes', 'No phone service'],
      No: [2541, 2121, 521],
      Yes: [849, 850, 170]
    }
  },
  streamingTV: {
    type: 'categorical',
    title: 'Streaming TV',
    data: {
      categories: ['No', 'Yes', 'No internet service'],
      counts: [2810, 2707, 1526],
      percentages: [39.9, 38.4, 21.7],
      mode: 'No',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes', 'No internet service'],
      No: [1868, 1893, 1413],
      Yes: [942, 814, 113]
    }
  },
  streamingMovies: {
    type: 'categorical',
    title: 'Streaming Movies',
    data: {
      categories: ['No', 'Yes', 'No internet service'],
      counts: [2785, 2732, 1526],
      percentages: [39.5, 38.8, 21.7],
      mode: 'No',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes', 'No internet service'],
      No: [1847, 1914, 1413],
      Yes: [938, 818, 113]
    }
  },
  internet: {
    type: 'categorical',
    title: 'Internet Service',
    data: {
      categories: ['DSL', 'Fiber optic', 'No'],
      counts: [3259, 2258, 1526],
      percentages: [46.3, 32, 21.7],
      mode: 'Fiber optic',
      total: 7043
    },
    churnData: {
      categories: ['DSL', 'Fiber optic', 'No'],
      No: [1962, 1799, 1413],
      Yes: [1297, 459, 113]
    }
  },
  techsupport: {
    type: 'categorical',
    title: 'Tech Support',
    data: {
      categories: ['Has Tech Support', "Doesn't have Tech Support", 'No internet service'],
      counts: [3411, 2126, 1526],
      percentages: [48.4, 30.2, 21.7],
      mode: 'No',
      total: 7043
    },
    churnData: {
      categories: ['Has Tech Support', "Doesn't have Tech Support", 'No internet service'],
      No: [1734, 2027, 1413],
      Yes: [1677, 99, 113]
    }
  },
  onlinesecurity: {
    type: 'categorical',
    title: 'Online Security',
    data: {
      categories: ['No', 'Yes', 'No internet service'],
      counts: [3498, 2019, 1526],
      percentages: [49.6, 28.7, 21.7],
      mode: 'No',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes', 'No internet service'],
      No: [2037, 1724, 1413],
      Yes: [1461, 295, 113]
    }
  },
  protect: {
    type: 'categorical',
    title: 'Device Protection',
    data: {
      categories: ['No', 'Yes', 'No internet service'],
      counts: [3095, 2422, 1526],
      percentages: [43.9, 34.4, 21.7],
      mode: 'Month-to-month',
      total: 7043
    },
    churnData: {
      categories: ['No', 'Yes', 'No internet service'],
      No: [1884, 1877, 1413],
      Yes: [1211, 545, 113]
    }
  },
  contract: {
    type: 'categorical',
    title: 'Contract Type',
    data: {
      categories: ['Month-to-month', 'One year', 'Two year'],
      counts: [3875, 1473, 1695],
      percentages: [55, 20.9, 24.1],
      mode: 'Month-to-month',
      total: 7043
    },
    churnData: {
      categories: ['Month-to-month', 'One year', 'Two year'],
      No: [2220, 1307, 1647],
      Yes: [1655, 166, 48]
    }
  },
  payment: {
    type: 'categorical',
    title: 'Payment Method',
    data: {
      categories: ['Bank transfer', 'Credit card', 'Electronic check', 'Mailed check'],
      counts: [1544, 1522, 2365, 1612],
      percentages: [21.92, 21.61, 33.58, 22.89],
      mode: 'Electronic check',
      total: 7043
    },
    churnData: {
      categories: ['Bank transfer', 'Credit card', 'Electronic check', 'Mailed check'],
      No: [1286, 1290, 1294, 1304],
      Yes: [258, 232, 1071, 308]
    }
  }
};

// Function to display categorical variable statistics
function displayCategoricalStats(variable) {
  const data = variableData[variable].data;
  const title = variableData[variable].title;
  
  let html = `
    <h3>${title} - Summary Statistics</h3>
    <div class="stats-container">
      <div class="stats-text">
        <p><strong>Variable Type:</strong> Categorical</p>
        <p><strong>Total Observations:</strong> ${data.total}</p>
        <p><strong>Number of Categories:</strong> ${data.categories.length}</p>
        <p><strong>Mode:</strong> ${data.mode}</p>
      </div>
      <div class="stats-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
  `;
  
  // Add rows for each category
  for (let i = 0; i < data.categories.length; i++) {
    html += `
      <tr>
        <td>${data.categories[i]}</td>
        <td>${data.counts[i]}</td>
        <td>${data.percentages[i]}%</td>
      </tr>
    `;
  }
  
  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  return html;
}

// Function to display numerical variable statistics
function displayNumericalStats(variable) {
  const data = variableData[variable].data;
  const title = variableData[variable].title;
  
  let html = `
    <h3>${title} - Summary Statistics</h3>
    <div class="stats-container">
      <div class="stats-text">
        <p><strong>Variable Type:</strong> Numerical</p>
        <p><strong>Total Observations:</strong> ${data.count}</p>
        <p><strong>Minimum:</strong> ${data.min}</p>
        <p><strong>Maximum:</strong> ${data.max}</p>
        <p><strong>Range:</strong> ${data.range}</p>
        <p><strong>Mean:</strong> ${data.mean}</p>
        <p><strong>Median:</strong> ${data.median}</p>
        <p><strong>Standard Deviation:</strong> ${data.standardDeviation}</p>
        <p><strong>1st Quartile (Q1):</strong> ${data.q1}</p>
        <p><strong>3rd Quartile (Q3):</strong> ${data.q3}</p>
        <p><strong>Interquartile Range (IQR):</strong> ${data.iqr}</p>
      </div>
    </div>
  `;
  
  return html;
}

// Function to display the churn frequency table for categorical variables
function displayCategoricalChurnTable(variable) {
  // Check if churnData property exists for this variable
  if (!variableData[variable].hasOwnProperty('churnData')) {
    return '<p>No churn relationship data available for this variable.</p>';
  }
  
  const churnData = variableData[variable].churnData;
  const title = variableData[variable].title;
  
  let html = `
    <h3>${title} vs Churn - Frequency Table</h3>
    <div class="churn-table">
      <table>
        <thead>
          <tr>
            <th>${title}</th>
            ${churnData.categories.map(cat => `<th>${cat}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>No Churn</th>
            ${churnData.No.map(count => `<td>${count}</td>`).join('')}
          </tr>
          <tr>
            <th>Yes Churn</th>
            ${churnData.Yes.map(count => `<td>${count}</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
  
  return html;
}

// Function to display the churn comparison for numerical variables
function displayNumericalChurnTable(variable) {
  // Check if churnData property exists for this variable
  if (!variableData[variable].hasOwnProperty('churnData')) {
    return '<p>No churn relationship data available for this variable.</p>';
  }
  
  const churnData = variableData[variable].churnData;
  const title = variableData[variable].title;
  
  let html = `
    <h3>${title} by Churn Status</h3>
    <div class="churn-table">
      <table>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>No Churn</th>
            <th>Yes Churn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>${churnData.No.count}</td>
            <td>${churnData.Yes.count}</td>
          </tr>
          <tr>
            <th>Minimum</th>
            <td>${churnData.No.min}</td>
            <td>${churnData.Yes.min}</td>
          </tr>
          <tr>
            <th>Maximum</th>
            <td>${churnData.No.max}</td>
            <td>${churnData.Yes.max}</td>
          </tr>
          <tr>
            <th>Mean</th>
            <td>${churnData.No.mean}</td>
            <td>${churnData.Yes.mean}</td>
          </tr>
          <tr>
            <th>Median</th>
            <td>${churnData.No.median}</td>
            <td>${churnData.Yes.median}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  
  return html;
}

// Function to update the display based on the selected variable
function updateStats() {
  const variable = document.getElementById('variableSelect').value;
  const type = variableData[variable].type;
  
  // Update summary statistics section
  if (type === 'categorical') {
    document.getElementById('summarySection').innerHTML = displayCategoricalStats(variable);
  } else {
    document.getElementById('summarySection').innerHTML = displayNumericalStats(variable);
  }
  
  // Update churn section
  document.getElementById('churnSection').innerHTML = 
    type === 'categorical' 
      ? displayCategoricalChurnTable(variable) 
      : displayNumericalChurnTable(variable);
}

// Initialize the display when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add styles
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .stats-container {
      display: flex;
      flex-wrap: wrap;
    }
    .stats-text {
      flex: 1;
      min-width: 300px;
    }
    .stats-table, .churn-table {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    thead th {
      background-color: #4a5568;
      color: white;
      text-align: center;
    }
    tbody th {
      background-color: #f2f2f2;
      text-align: left;
    }
    td {
      text-align: center;
    }
    .text-format {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      margin-top: 15px;
      border: 1px solid #e2e8f0;
    }
    pre {
      font-family: monospace;
      white-space: pre;
      margin: 0;
      overflow-x: auto;
    }
    h3 {
      margin-top: 0;
      color: #2d3748;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 10px;
    }
    h4 {
      color: #4a5568;
      margin-bottom: 10px;
    }
  `;
  document.head.appendChild(styleElement);
  
  // Set up the event listener for the variable select
  const variableSelect = document.getElementById('variableSelect');
  variableSelect.addEventListener('change', updateStats);
  
  // Initial display
  updateStats();
});

// If the DOM is already loaded, initialize now
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .stats-container {
      display: flex;
      flex-wrap: wrap;
    }
    .stats-text {
      flex: 1;
      min-width: 300px;
    }
    .stats-table, .churn-table {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    thead th {
      background-color: #4a5568;
      color: white;
      text-align: center;
    }
    tbody th {
      background-color: #f2f2f2;
      text-align: left;
    }
    td {
      text-align: center;
    }
    .text-format {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      margin-top: 15px;
      border: 1px solid #e2e8f0;
    }
    pre {
      font-family: monospace;
      white-space: pre;
      margin: 0;
      overflow-x: auto;
    }
    h3 {
      margin-top: 0;
      color: #2d3748;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 10px;
    }
    h4 {
      color: #4a5568;
      margin-bottom: 10px;
    }
  `;
  document.head.appendChild(styleElement);
  
  const variableSelect = document.getElementById('variableSelect');
  variableSelect.addEventListener('change', updateStats);
  updateStats();
}