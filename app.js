const correctAnswers = ['C', 'B', 'C', 'B', 'D', 'A', 'C', 'A', 'D', 'B' ];

const form = document.querySelector('form.quiz-form');

const pass = document.querySelector('.modal-pass');
const fail = document.querySelector('.modal-fail');



const passHeading = document.querySelector('.heading-pass');
const failHeading = document.querySelector('.heading-fail');
const button1 = document.querySelector('.pass-btn');
const button2 = document.querySelector('.fail-btn');

const error = document.querySelector('.error');
console.log(error);





button1.addEventListener('click', () => {
	location.reload();
});

button2.addEventListener('click', () => {
	location.reload();
});


form.addEventListener('submit', e => {
	e.preventDefault();

	let score = 0;

//&& form.q5.value && form.q6.value && form.q7.value && form.q8.value && form.q9.value && form.q10.value 

	if (form.q1.value && form.q2.value && form.q3.value && form.q4.value && form.q5.value && form.q6.value && form.q7.value && form.q8.value && form.q9.value && form.q10.value ) {
		const userAnswers = [
			form.q1.value,
			form.q2.value,
			form.q3.value,
			form.q4.value,
			form.q5.value,
			form.q6.value,
			form.q7.value,
			form.q8.value,
			form.q9.value,
			form.q10.value,
			];

		userAnswers.forEach((answer, index) => {

		if (answer === correctAnswers[index]) {
			score += 10;
		}

	});

		window.scrollTo(0, 0);

		let output = 0;

		if (score >= 70) {
			fail.style.display = 'none';
			fail.querySelector('picture').style.display = 'none';
			pass.style.display = 'flex';
			pass.querySelector('picture').style.display = 'none';
			const timer = setInterval(() => {
				passHeading.textContent = `You Scored a ${output}%`;
				if(output === score) {
					clearInterval(timer);
				pass.querySelector('picture').style.display = 'block';
				} 
				else {
					output++;
				}

			}, 10);

		} else {
			pass.style.display = 'none';
			pass.querySelector('picture').style.display = 'none';
			fail.style.display = 'flex';
			fail.querySelector('picture').style.display = 'none';
			const timer = setInterval(() => {
				failHeading.textContent = `You Scored a ${output}%`;
				if(output === score) {
					clearInterval(timer);
			fail.querySelector('picture').style.display = 'block';

				} 
				else {
					output++;
				}
			}, 10);



		}

	} else {
		error.style.display = "block";
		console.log('error works');


	}

	
})