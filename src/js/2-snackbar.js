import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.notification-form');

    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = this.querySelector('input[name="delay"]');
    const stateRadioInput = this.querySelector('input[name="notificationState"]:checked');

    const delay = parseInt(delayInput.value);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (stateRadioInput.value === 'fulfilled') {
            resolve(delay);
        } else {
            reject(delay);
        }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            });
        });
    this.reset();
    });
});