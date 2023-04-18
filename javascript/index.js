const sendBtn = document.querySelector('#contact');
const order = document.querySelector('#order');

sendBtn.addEventListener('click', () => {
	order.innerHTML = `
          <i class="fas fa-heart"></i><br>
          <strong>Your request was registered!</strong>
          <p>We'll be in contact soon, please keep your <strong>method of payment</strong> and <strong> documents</strong> in hand.</p>
          <button type=button onclick="location.href='index.html';" id ="contact" > Return to Home page" </button>
      `;
});