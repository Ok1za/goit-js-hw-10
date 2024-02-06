import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = this.querySelector('input[name="delay"]');
    const stateInput = this.querySelector('input[name="state"]:checked');

    const delay = parseInt(delayInput.value);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (stateInput.value === 'fulfilled') {
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
    });
});