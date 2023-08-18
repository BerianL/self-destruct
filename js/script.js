// Message will self-destruct in 3 seconds when the button is pressed.
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
  
    button.addEventListener("click", () => {
      Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: "Self-destruct sequence initiated!",
        html: 'This message will self-destruct in <b></b> seconds.',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            const secondsLeft = Math.ceil(Swal.getTimerLeft() / 1000);
            b.textContent = secondsLeft;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          document.querySelector("h1").textContent = "🔥BOOM!🔥";
          console.log("Message destroyed!");
          button.remove(); // Remove the button after the alert is closed
        },
      });
    });
  });
  