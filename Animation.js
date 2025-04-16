document.addEventListener('DOMContentLoaded', function() {
  console.log("Animated bar charts script loaded");
  
  // Get container element
  const container = document.getElementById('churn-visualization-root');
  if (!container) {
    console.error("Container not found!");
    return;
  }
  
  // Setup UI
  container.innerHTML = `
    <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
      <div style="margin-bottom: 20px; display: flex; justify-content: center;">
        <select id="chart-selector" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; width: 250px;">
          <option value="contractType">Contract Type by Churn</option>
          <option value="paymentMethod">Payment Method by Churn</option>
          <option value="techsupport">Tech Support by Churn</option>
		  <option value="phoneservice">Phone Service by Churn</option>
          <option value="InternetService">Internet Service by Churn</option>
          <option value="gender">Gender by Churn</option>
		  <option value="dependents">Dependents by Churn</option>
		  <option value="senior">Senior Citizen by Churn</option>
		  <option value="partner">Partner by Churn</option>
        </select>
      </div>
      
      <div id="chart-container" style="width: 100%; height: 400px; position: relative;">
        <!-- Bar chart will be rendered here -->
      </div>
      
      <div id="chart-insights" style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
        <!-- Insights will be shown here -->
      </div>
    </div>
  `;
  
  // Chart data
  const chartData = {
    contractType: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Month-to-Month", color: "#2980b9", values: [2200, 1655] },
        { name: "One Year", color: "#f39c12", values: [1307, 166] },
        { name: "Two Year", color: "#27ae60", values: [1655, 48] }
      ],
      maxValue: 2500,
      insights: [
        "Month-to-Month contracts have the highest churn rate (88.55%)",
        "Two-Year contracts show the lowest churn rate (2.57%)",
        "Longer contract terms significantly reduce customer churn"
      ]
    },
    paymentMethod: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Bank transfer", color: "#2980b9", values: [1286, 258] },
        { name: "Credit card", color: "#f39c12", values: [1290, 232] },
        { name: "Electronic check", color: "#27ae60", values: [1294, 1071] },
        { name: "Mailed check", color: "#e74c3c", values: [1304, 308] }
      ],
      maxValue: 1400,
      insights: [
        "Electronic check payment method shows dramatically higher churn (57.3%)",
        "Automatic payment methods (e.g. Bank Transfer and Credit Cards) have much lower churn rates (26.2%)",
        "Payment method is a strong predictor of customer churn"
      ]
    },
    InternetService: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "DSL", color: "#2980b9", values: [1962, 459] },
        { name: "Fiber Optic", color: "#f39c12", values: [1799, 1297] },
        { name: "No", color: "#27ae60", values: [1413, 113] }
      ],
      maxValue: 2000,
      insights: [
        "Having fiber optic internet service has the highest churn rate (69.4%)",
        "Not having internet service has the lowest churn rate (6.05%)",
        "Fiber users may be more tech-savvy or expect top-tier service, if performance doesn’t match their expectations, they churn.",
		"DSL users might be more passive or in areas with fewer options"
      ]
    },
    techsupport: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Doesn't have Tech Support", color: "#2980b9", values: [2027, 1446] },
        { name: "Has Tech Support", color: "#f39c12", values: [1734, 310] },
        { name: "No Internet Service", color: "#27ae60", values: [1413, 113] }
      ],
      maxValue: 2100,
      insights: [
        "Not having tech support have the highest churn rate (77.37%)",
        "Having tech support has the lowest churn rate (6.05%)",
        "Tech support adds convenience and problem-solving, reducing frustration",
		"Those without support may feel neglected when issues arise, increasing churn"
      ]
    },
    phoneservice: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Has a Phone Service", color: "#2980b9", values: [4662, 1699] },
        { name: "Doesn't have a Phone Service", color: "#f39c12", values: [512, 170] }
      ],
      maxValue: 4700,
      insights: [
        "Having a phone service has the highest churn rate (90.9%)",
        "Not having a phone service has the lowest churn rate (9.1%)",
		"Customers without phone service might already have minimal plans and less to be dissatisfied with",
        "Customers who have phone service might expect more value and are more likely to leave if unsatisfied"
      ]
    },
	gender: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Male", color: "#2980b9", values: [2625, 930] },
        { name: "Female", color: "#f39c12", values: [2549, 930] }
      ],
      maxValue: 2700,
      insights: [
        "The distributions are practically the same, which means that gender probably does not affect whether someone churns or not"
        
      ]
    },	
    dependents: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "No Dependents", color: "#2980b9", values: [3390, 1543] },
        { name: "Has Dependents", color: "#f39c12", values: [1784, 326] }
      ],
      maxValue: 3400,
      insights: [
        "Customers without a dependent are most likely to churn (82.56%)",
        "Higher service bundling: Families may use more services (like internet, streaming, tech support), making them less likely to leave",
		"Shared responsibility: Parents or caretakers may rely more heavily on stable service for work, education, or entertainment at home"
      ]
    },
	senior: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "Is not a Senior Citizen", color: "#2980b9", values: [4508, 1393] },
        { name: "Is a Senior Citizen", color: "#f39c12", values: [666, 476] }
      ],
      maxValue: 4600,
      insights: [
        "Customers who are not senior citizens are most likely to churn (74.53%)",
        "The nearly equal churn rate suggests that age alone isn't a strong predictor of churn",
        "Some senior citizens may stay for familiarity, while others may churn due to changes in needs (e.g., downsizing, switching to simpler plans)"
      ]
    },
	partner: {
      type: "bar",
      categories: ["No Churn", "Yes Churn"],
      series: [
        { name: "No Partner", color: "#2980b9", values: [2441, 1200] },
        { name: "Has Partner", color: "#f39c12", values: [2733, 669] }
      ],
      maxValue: 2800,
      insights: [
        "Customers with no partner are most likely to churn (64.21%)",
        "Overall distributions for non-churned customers look the same, which might show that having a partner is not significant to whether a customer will churn",
        "People without a partner may be more cost-sensitive and quicker to cut services they don’t find essential"
      ]
    }
  };
  
  // Get elements
  const chartSelector = document.getElementById('chart-selector');
  const chartContainer = document.getElementById('chart-container');
  const chartInsights = document.getElementById('chart-insights');
  
  // Function to render bar chart
  function renderBarChart(chartType) {
    const data = chartData[chartType];
    
    // Clear previous chart
    chartContainer.innerHTML = "";
    
    // Set chart title
    const title = document.createElement('h3');
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.textContent = data.title;
    chartContainer.appendChild(title);
    
    // Create chart area
    const chartArea = document.createElement('div');
    chartArea.style.height = '300px';
    chartArea.style.position = 'relative';
    chartArea.style.marginLeft = '40px';
    chartArea.style.marginRight = '20px';
    chartArea.style.marginBottom = '40px';
    chartArea.style.borderBottom = '2px solid #333';
    chartArea.style.borderLeft = '2px solid #333';
    chartContainer.appendChild(chartArea);
    
    // Add Y-axis labels
    for (let i = 0; i <= 5; i++) {
      const value = Math.round(data.maxValue * i / 5);
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.left = '-40px';
      label.style.top = `${100 - (i * 20)}%`;
      label.style.transform = 'translateY(-50%)';
      label.textContent = value;
      chartArea.appendChild(label);
    }
    
    // Add X-axis labels (categories)
    data.categories.forEach((category, i) => {
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.bottom = '-30px';
      label.style.left = `${25 + (i * 50)}%`;
      label.style.transform = 'translateX(-50%)';
      label.textContent = category;
      chartArea.appendChild(label);
    });
    
    // Create bars container
    const barsContainer = document.createElement('div');
    barsContainer.style.display = 'flex';
    barsContainer.style.height = '100%';
    barsContainer.style.width = '100%';
    barsContainer.style.alignItems = 'flex-end';
    chartArea.appendChild(barsContainer);
    
    // Create category groups
    data.categories.forEach((category, categoryIndex) => {
      const categoryGroup = document.createElement('div');
      categoryGroup.style.flex = '1';
      categoryGroup.style.display = 'flex';
      categoryGroup.style.justifyContent = 'space-evenly';
      categoryGroup.style.alignItems = 'flex-end';
      categoryGroup.style.height = '100%';
      barsContainer.appendChild(categoryGroup);
      
      // Create bars for each series
      data.series.forEach((series, seriesIndex) => {
        const bar = document.createElement('div');
        bar.className = 'animated-bar';
        bar.style.width = `${Math.max(20, Math.min(60, 200 / data.series.length))}px`;
        bar.style.backgroundColor = series.color;
        bar.style.height = '0px';
        bar.style.transition = 'height 1s ease-out';
        bar.dataset.targetHeight = `${(series.values[categoryIndex] / data.maxValue) * 100}%`;
        categoryGroup.appendChild(bar);
      });
    });
    
    // Create legend
    const legend = document.createElement('div');
    legend.style.display = 'flex';
    legend.style.justifyContent = 'center';
    legend.style.flexWrap = 'wrap';
    legend.style.marginTop = '50px';
    
    data.series.forEach(series => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.marginRight = '20px';
      item.style.marginBottom = '10px';
      
      const color = document.createElement('div');
      color.style.width = '15px';
      color.style.height = '15px';
      color.style.backgroundColor = series.color;
      color.style.marginRight = '5px';
      
      const name = document.createElement('span');
      name.textContent = series.name;
      
      item.appendChild(color);
      item.appendChild(name);
      legend.appendChild(item);
    });
    
    chartContainer.appendChild(legend);
    
    // Set insights
    let insightsHTML = '<h4 style="text-align: center; margin-bottom: 15px;">Key Insights</h4><ul style="list-style-type: disc; padding-left: 20px;">';
    data.insights.forEach(insight => {
      insightsHTML += `<li>${insight}</li>`;
    });
    insightsHTML += '</ul>';
    chartInsights.innerHTML = insightsHTML;
    
    // Animate bars after a small delay
    setTimeout(() => {
      document.querySelectorAll('.animated-bar').forEach(bar => {
        bar.style.height = bar.dataset.targetHeight;
      });
    }, 100);
  }
  
  // Add event listener for chart selection
  chartSelector.addEventListener('change', function() {
    renderBarChart(this.value);
  });
  
  // Initial render
  renderBarChart('contractType');
});