document.addEventListener('DOMContentLoaded', function() {
  // Initialize all three carousels
  initCarousel('carouselA');
  initCarousel('carouselB');
  initCarousel('carouselC');
  
  // Function to initialize a carousel by ID
  function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;
    
    const slides = container.querySelector('.carousel-slides');
    const slideElements = container.querySelectorAll('.slide');
    const prevButton = container.querySelector('.carousel-button.prev');
    const nextButton = container.querySelector('.carousel-button.next');
    const dots = container.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideCount = slideElements.length;
    
    // Function to update the carousel position
    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
    
    // Next button click handler
    nextButton.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    });
    
    // Previous button click handler
    prevButton.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateCarousel();
      });
    });
    
    // Auto-play functionality
    function autoAdvance() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }
    
    // Different intervals for each carousel to prevent simultaneous transitions
    let interval = 5000; // Default: 5 seconds
    if (carouselId === 'carouselB') interval = 6000; // 6 seconds
    if (carouselId === 'carouselC') interval = 7000; // 7 seconds
    
    let intervalId = setInterval(autoAdvance, interval);
    
    // Pause auto-play when mouse hovers over carousel
    container.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
    
    container.addEventListener('mouseleave', function() {
      intervalId = setInterval(autoAdvance, interval);
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    container.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - show next slide
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - show previous slide
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
      }
    }
  }
});
                // Interactive elements
                document.getElementById('tenure-slider').addEventListener('input', function() {
                    document.getElementById('tenure-value').textContent = this.value + ' months';
                });
                
                document.getElementById('charges-slider').addEventListener('input', function() {
                    document.getElementById('charges-value').textContent = ' + this.value;
                });
                
                document.getElementById('predict-button').addEventListener('click', function() {
                    // In a real implementation, this would calculate the prediction based on inputs
                    // For now, we'll just simulate a result
                    const contractType = document.getElementById('contract-type').value;
                    const paymentMethod = document.getElementById('payment-method').value;
                    const internetService = document.getElementById('internet-service').value;
                    const tenure = parseInt(document.getElementById('tenure-slider').value);
                    const charges = parseInt(document.getElementById('charges-slider').value);
                    const techSupport = document.getElementById('tech-support').value;
                    
                    let churnProbability = 0;
                    
                    // Contract type has a big impact
                    if (contractType === 'month') churnProbability += 40;
                    else if (contractType === 'one-year') churnProbability += 15;
                    else churnProbability += 5;
                    
                    // Tenure decreases churn probability
                    churnProbability -= Math.min(25, tenure / 3);
                    
                    // Payment method impacts churn
                    if (paymentMethod === 'electronic') churnProbability += 20;
                    else if (paymentMethod === 'mailed') churnProbability += 10;
                    else churnProbability += 5;
                    
                    // Internet service impact
                    if (internetService === 'fiber') churnProbability += 15;
                    else if (internetService === 'dsl') churnProbability += 10;
                    
                    // Monthly charges impact
                    if (charges > 90) churnProbability += 15;
                    else if (charges > 70) churnProbability += 10;
                    else if (charges > 50) churnProbability += 5;
                    
                    // Tech support impact
                    if (techSupport === 'no' && internetService !== 'no') churnProbability += 15;
                    
                    // Add a little randomness
                    churnProbability += Math.floor(Math.random() * 10) - 5;
                    
                    // Ensure within range
                    churnProbability = Math.max(1, Math.min(99, churnProbability));
                    
                    // Update display
                    document.querySelector('.prediction-value').textContent = churnProbability + '%';
                    
                    // Set risk level
                    const predictionLabel = document.querySelector('.prediction-label');
                    if (churnProbability > 60) {
                        predictionLabel.textContent = 'High Risk';
                        predictionLabel.style.backgroundColor = '#e04e4e';
                    } else if (churnProbability > 30) {
                        predictionLabel.textContent = 'Medium Risk';
                        predictionLabel.style.backgroundColor = '#f0ad4e';
                    } else {
                        predictionLabel.textContent = 'Low Risk';
                        predictionLabel.style.backgroundColor = '#5cb85c';
                    }
                    
                    // Update recommendation
                    const predictionDesc = document.querySelector('.prediction-description');
                    if (churnProbability > 60) {
                        predictionDesc.textContent = 'This customer has a high probability of churning in the next 3 months. Consider proactive retention strategies such as offering a contract upgrade with a special discount or bundling tech support with their current services.';
                    } else if (churnProbability > 30) {
                        predictionDesc.textContent = 'This customer has a moderate risk of churning. Consider engaging them with targeted offers like service upgrades or loyalty rewards to increase satisfaction and retention.';
                    } else {
                        predictionDesc.textContent = 'This customer has a low probability of churning. Continue to monitor satisfaction and consider cross-selling additional services at appropriate intervals.';
                    }
                });
                
                // Variable distribution graph interactivity
                document.getElementById('update-graph').addEventListener('click', function() {
                    const selectedVariable = document.getElementById('variable-selector').value;
                    updateDistributionGraph(selectedVariable);
                });
                
                function updateDistributionGraph(variable) {
                    // In a real implementation, this would fetch actual data and redraw the graph
                    // For this demo, we'll simulate changing the graph and insights
                    
                    // Update insights based on selected variable
                    const insightsList = document.getElementById('distribution-insights-list');
                    const correlationValue = document.getElementById('correlation-value');
                    const pvalueValue = document.getElementById('pvalue-value');
                    const riskRatio = document.getElementById('risk-ratio');
                    
                    // Clear existing insights
                    insightsList.innerHTML = '';
                    
                    // Set variable-specific values
                    switch(variable) {
                        case 'contract':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Contract+Type+Distribution';
                            correlationValue.textContent = '0.86';
                            pvalueValue.textContent = '< 0.001';
                            riskRatio.textContent = '7.9';
                            
                            addInsight('Month-to-month contracts have a 42.7% churn rate vs. 5.4% for two-year contracts');
                            addInsight('Contract type shows the strongest correlation with customer churn');
                            addInsight('Two-year contracts reduce churn risk by 87% compared to month-to-month');
                            break;
                            
                        case 'payment':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Payment+Method+Distribution';
                            correlationValue.textContent = '0.59';
                            pvalueValue.textContent = '< 0.001';
                            riskRatio.textContent = '2.3';
                            
                            addInsight('Electronic check users have a 29.6% churn rate compared to 13.6% for automatic bank transfers');
                            addInsight('Automatic payment methods show significantly lower churn rates');
                            addInsight('Customers using electronic checks are 2.1x more likely to churn');
                            break;
                            
                        case 'internet':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Internet+Service+Distribution';
                            correlationValue.textContent = '0.42';
                            pvalueValue.textContent = '< 0.001';
                            riskRatio.textContent = '1.8';
                            
                            addInsight('Fiber optic customers have a 17.9% churn rate vs. 13.2% for customers with no internet');
                            addInsight('DSL customers with tech support have 37% lower churn than those without');
                            addInsight('Internet service type has moderate correlation with churn behavior');
                            break;
                            
                        case 'tenure':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Tenure+Distribution';
                            correlationValue.textContent = '0.71';
                            pvalueValue.textContent = '< 0.001';
                            riskRatio.textContent = '5.2';
                            
                            addInsight('Customers with less than 12 months tenure have a 32.5% churn rate vs. 0% for those over 48 months');
                            addInsight('Churn risk decreases dramatically after 24 months of service');
                            addInsight('The first 12 months are the most critical period for retention');
                            break;
                            
                        case 'charges':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Monthly+Charges+Distribution';
                            correlationValue.textContent = '0.37';
                            pvalueValue.textContent = '0.002';
                            riskRatio.textContent = '2.6';
                            
                            addInsight('Customers paying $70-90 monthly have a 29.8% churn rate, the highest of any price range');
                            addInsight('Price sensitivity peaks in the upper-middle price range');
                            addInsight('Very low (<$30) and very high (>$90) charges show lower churn rates than mid-range');
                            break;
                            
                        case 'techsupport':
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=Tech+Support+Distribution';
                            correlationValue.textContent = '0.64';
                            pvalueValue.textContent = '< 0.001';
                            riskRatio.textContent = '1.6';
                            
                            addInsight('Customers without tech support have a 25.6% churn rate vs. 16.1% for those with support');
                            addInsight('Tech support has the strongest retention impact among additional services');
                            addInsight('The effect is most pronounced for fiber optic customers (41% reduction in churn)');
                            break;
                            
                        default:
                            document.querySelector('.distribution-image').src = 'https://via.placeholder.com/1000x500?text=' + capitalizeFirstLetter(variable) + '+Distribution';
                            correlationValue.textContent = (Math.random() * 0.5 + 0.3).toFixed(2);
                            pvalueValue.textContent = '< 0.05';
                            riskRatio.textContent = (Math.random() * 2 + 1).toFixed(1);
                            
                            addInsight('Distribution shows significant differences between churned and retained customers');
                            addInsight('Further analysis recommended to identify specific intervention opportunities');
                            addInsight('Consider this variable as part of a broader retention strategy');
                    }
                }
                
                function addInsight(text) {
                    const insightsList = document.getElementById('distribution-insights-list');
                    const li = document.createElement('li');
                    li.className = 'insight-item';
                    li.textContent = text;
                    insightsList.appendChild(li);
                }
                
                function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
                
                // Initialize with contract type selected
                updateDistributionGraph('contract');