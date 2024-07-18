const button = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let errors = document.querySelectorAll('.correct');
let labels = document.querySelectorAll('label');
let numbers = document.querySelectorAll('.number-result');

button.addEventListener('click', () => {
    let isValid = true;

    inputs.forEach((input, index) => {
        if (!input.value) {
            errors[index].classList.remove('correct');
            labels[index].classList.add('label-error');
            input.classList.add('input-error');
            isValid = false;
        } else {
            if (input.id === 'day') {
                let day = parseInt(input.value, 10);
                if (day < 1 || day > 31) {
                    errors[index].classList.remove('correct');
                    labels[index].classList.add('label-error');
                    input.classList.add('input-error');
                    isValid = false;
                } else {
                    errors[index].classList.add('correct');
                    labels[index].classList.remove('label-error');
                    input.classList.remove('input-error');
                }
            } else if (input.id === 'month') {
                let month = parseInt(input.value, 10);
                if (month < 1 || month > 12) {
                    errors[index].classList.remove('correct');
                    labels[index].classList.add('label-error');
                    input.classList.add('input-error');
                    isValid = false;
                } else {
                    errors[index].classList.add('correct');
                    labels[index].classList.remove('label-error');
                    input.classList.remove('input-error');
                }
            } else if (input.id === 'year') {
                let currentYear = new Date().getFullYear();
                let year = parseInt(input.value, 10);
                if (year >= currentYear || year < 1700) {
                    errors[index].classList.remove('correct');
                    errors[index].classList.add('correct');
                    input.classList.add('input-error');
                    isValid = false;
                } else {
                    errors[index].classList.add('correct');
                    labels[index].classList.remove('label-error');
                    input.classList.remove('input-error');
                }
            }
        }
    });

    if (isValid) {
        function calcularIdade(year, month, day) {
            const today = new Date();
            const born = new Date(year, month - 1, day);

            let years = today.getFullYear() - born.getFullYear();
            let months = today.getMonth() - born.getMonth();
            let days = today.getDate() - born.getDate();

            if (months < 0) {
                years--;
                months += 12;
            }

            if (days < 0) {
                months--;
                const lastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                days += lastDay;
            }

            return {
                years,
                months,
                days
            };
        }

        const dateBirth = calcularIdade(inputs[2].value, inputs[1].value, inputs[0].value);

        numbers[0].textContent = dateBirth.years;
        numbers[1].textContent = dateBirth.months;
        numbers[2].textContent = dateBirth.days;

        button.style.backgroundColor = 'black';

        button.addEventListener('click', () => {
            location.reload();
        })
    }
  
});

