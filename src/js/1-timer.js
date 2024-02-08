import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputPicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let userSelectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0].getTime();

    if (userSelectedDate >= Date.now()) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
            window.alert("Please choose a date in the future");
        }
    },
};

flatpickr(inputPicker, options);

startButton.addEventListener('click', onClickStart);

function onClickStart() {
    startButton.disabled = true;
    const intervalId = setInterval(() => {
        let timeToLeft = userSelectedDate - Date.now();
        inputPicker.disabled = true;

    if (timeToLeft <= 0) {
        clearInterval(intervalId);
        inputPicker.disabled = false;
        iziToast.info({
            position: 'center',
            message: 'It is your time!',
        });
        return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeToLeft);
    daysElement.textContent = `${addLeadingZero(days)}`;
    hoursElement.textContent = `${addLeadingZero(hours)}`;
    minutesElement.textContent = `${addLeadingZero(minutes)}`;
    secondsElement.textContent = `${addLeadingZero(seconds)}`;
    }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}