// Function to toggle code sections visibility
function toggleCodeSection(sectionId) {
  const codeSection = document.getElementById(sectionId);
  
  // If the section is currently hidden, show it
  if (codeSection.style.display === 'none' || codeSection.style.display === '') {
    codeSection.style.display = 'block';
    
    // Find the button that triggered this and update text
    const buttons = document.querySelectorAll('.code-btn');
    for (const button of buttons) {
      if (button.getAttribute('onclick') === `toggleCodeSection('${sectionId}')`) {
        button.textContent = 'Hide Python Code';
        break;
      }
    }
  } else {
    // If it's visible, hide it
    codeSection.style.display = 'none';
    
    // Find the button that triggered this and update text
    const buttons = document.querySelectorAll('.code-btn');
    for (const button of buttons) {
      if (button.getAttribute('onclick') === `toggleCodeSection('${sectionId}')`) {
        button.textContent = 'Show Python Code';
        break;
      }
    }
  }
}

// Function to copy code to clipboard
function copyCode(sectionId) {
  const codeSection = document.getElementById(sectionId);
  const preElement = codeSection.querySelector('pre');
  const codeText = preElement.textContent;
  
  // Create a temporary textarea element to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = codeText;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  
  // Select and copy the text
  textarea.select();
  document.execCommand('copy');
  
  // Remove the temporary element
  document.body.removeChild(textarea);
  
  // Show feedback that text was copied
  const copyButton = codeSection.querySelector('.copy-btn');
  const originalText = copyButton.textContent;
  copyButton.textContent = 'Copied!';
  
  // Reset button text after a delay
  setTimeout(() => {
    copyButton.textContent = originalText;
  }, 2000);
}

// Initialize all code sections to be hidden on page load
document.addEventListener('DOMContentLoaded', function() {
  // Hide all code sections initially
  const codeSections = document.querySelectorAll('.code-section');
  codeSections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Add copy functionality to all copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent the click from propagating and potentially triggering other events
      e.stopPropagation();
      
      // Get the section ID from the parent code section
      const sectionId = this.closest('.code-section').id;
      copyCode(sectionId);
    });
  });
});