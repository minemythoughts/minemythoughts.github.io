// CSS class for pulse effect
const pulseClass = 'pulse';

// Function to add pulse effect
function addPulseEffect(element) {
  // Create pulse element
  const pulse = document.createElement('div');
  pulse.classList.add(pulseClass);
  
  // Append pulse element to merchandise item
  element.appendChild(pulse);
  
  // Remove pulse element after animation ends
  pulse.addEventListener('animationend', function() {
    pulse.remove();
  });
}

// Add click event listeners to merchandise items
const merchandiseItems = document.querySelectorAll('.merch-item');
merchandiseItems.forEach(function(item) {
  item.addEventListener('click', function() {
    addPulseEffect(item);
  });
});
