// import swal from 'sweetalert';
// swal("Here's the title!", "...and here's the text!");
import "./style.css";
import Swal from 'sweetalert2';
const btnSuccess = document.getElementById('success');
btnSuccess.addEventListener('click', function () {
  Swal.fire({
    title: "مطمعنی؟؟؟",
    text: "!نمیتونی برشگردونیا",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      let timerInterval;
      Swal.fire({
        title: "خودش بسته میشه بعد <b></b> ثانیه",
        html: "... درحال حذف فایل",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 79);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }else{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: true,
        // timer: 1500
      });
    }
  });
})

