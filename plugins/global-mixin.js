import Vue from 'vue'
import Swal from 'sweetalert2';
// window.Swal = Swal;

Vue.mixin({
    methods: {
        replaceNumbersE2B(number) {
            var numbersE = {
                0: '০',
                1: '১',
                2: '২',
                3: '৩',
                4: '৪',
                5: '৫',
                6: '৬',
                7: '৭',
                8: '৮',
                9: '৯'
            };
            var input = number.toString();
            var output = [];
            for (var i = 0; i < input.length; ++i) {
                if (numbersE.hasOwnProperty(input[i])) {
                    output.push(numbersE[input[i]]);
                } else {
                    output.push(input[i]);
                }
            }
            return output.join('');
        },
        toastMessage(data) {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: data.status,
                title: data.message
            })
        },

        modalMessage(data = {}) {
            // this.playSound(base_url + 'audio/error.mp3');
            Swal.fire({
                icon: data.status ? data.status : 'error',
                title: 'Oops...',
                text: data.message ? data.message : 'Please Fill Form Correctly',
            });
        }

    }
})