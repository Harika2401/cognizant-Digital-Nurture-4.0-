// Validate Phone Number on Blur
function validatePhone() {
  const phoneInput = document.getElementById('phone');
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phoneInput.value)) {
    alert('Please enter a valid phone number (e.g., 123-456-7890).');
    phoneInput.focus();
  }
}

// Display Event Fee on Change
function displayFee() {
  const eventType = document.getElementById('eventType').value;
  const feeDisplay = document.getElementById('feeDisplay');
  let fee = '';
  switch (eventType) {
    case 'cleanup':
      fee = '$10';
      break;
    case 'fooddrive':
      fee = '$15';
      break;
    case 'marathon':
      fee = '$20';
      break;
    default:
      fee = '';
  }
  feeDisplay.textContent = fee ? `Event Fee: ${fee}` : '';
}

// Submit Form and Show Confirmation
function submitForm(event) {
  event.preventDefault();
  const confirmation = document.getElementById('confirmationMessage');
  confirmation.textContent = 'Thank you for registering!';
}

// Count Characters in Message Textarea
function countCharacters() {
  const message = document.getElementById('message').value;
  document.getElementById('charCount').textContent = message.length;
}

// Count Characters in Feedback Textarea
function countFeedbackCharacters() {
  const feedback = document.getElementById('feedbackMessage').value;
  document.getElementById('feedbackCharCount').textContent = feedback.length;
}

// Submit Feedback Form
function submitFeedback(event) {
  event.preventDefault();
  alert('Thank you for your feedback!');
}

// Save Preferred Event Type to localStorage
function savePreference() {
  const preferredEvent = document.getElementById('preferredEvent').value;
  localStorage.setItem('preferredEvent', preferredEvent);
}

// Load Preferred Event Type on Page Load
window.onload = function () {
  const savedEvent = localStorage.getItem('preferredEvent');
  if (saved
::contentReference[oaicite:0]{index=0}
 
