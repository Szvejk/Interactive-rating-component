const firstBox = document.querySelector('.firstBox');
const secondBox = document.querySelector('.secondBox');
const submitButton = document.querySelector('.submit');
const ratings = document.getElementById('ratings');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
	if (ratings.innerHTML === '') {
		alert('bug');
	} else {
		secondBox.classList.remove('hidden');
		firstBox.style.display = 'none';
	}
});

rates.forEach((rate) => {
	rate.addEventListener('click', () => {
		rates.forEach((el) => {
			if (el.classList.contains('active')) {
				el.classList.remove('active');
			}
		});
		ratings.innerHTML = rate.innerHTML;
		rate.classList.add('active');
	});
});
