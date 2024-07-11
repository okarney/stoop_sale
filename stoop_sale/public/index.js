const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const fullscreenLetter = document.getElementById('fullscreen-letter');
const closeButton = document.getElementById('close-button');
const waxStamp = document.getElementById('wax-stamp');

let isOpen = false;

envelope.addEventListener('click', () => {
  if (!isOpen) {
    openEnvelope();
  }
});

closeButton.addEventListener('click', closeEnvelope);

function openEnvelope() {
  envelope.classList.add('open');
  // Open the envelope
  flap.style.transform = 'rotateX(180deg)';
  
  // Slide the letter out
  setTimeout(() => {
    letter.style.transform = 'translateY(-100px)';
  }, 500);
  
  // Show full-screen letter
  setTimeout(() => {
    fullscreenLetter.classList.remove('hidden');
    isOpen = true;
  }, 1000);

  // Hide wax stamp
  waxStamp.style.opacity = '0';
}

function closeEnvelope() {
  envelope.classList.remove('open');
  // Hide full-screen letter
  fullscreenLetter.classList.add('hidden');
  
  // Reset envelope
  flap.style.transform = 'rotateX(0deg)';
  letter.style.transform = 'translateY(0)';
  
  isOpen = false;

  // Show wax stamp
  waxStamp.style.opacity = '1';
}