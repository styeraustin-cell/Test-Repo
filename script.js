const checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');

const fireConfetti = () => {
  if (typeof confetti !== 'function') {
    return;
  }

  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.7 },
    colors: ['#6366f1', '#ec4899', '#22c55e', '#f59e0b'],
  });
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      fireConfetti();
    }
  });
});
