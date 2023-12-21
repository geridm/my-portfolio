var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

/*breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        520: {
            slidesPerView: 2, 
        },
        950: {
            slidesPerView: 3, 
        }
    },*/
});

const form = document.querySelector('form');
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br>
    Message: ${message.value}`;

    Email.send({
        SecureToken: "439b6cb8-5f7c-4755-ab0f-d967c365369c",
        To : 'geraldindiaz@gmail.com',
        From : "geraldindiaz@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if (message =="OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items ) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
         });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Introduce una dirección de email válida";
        }
        else {
            errorTxtEmail.innerText = "Email no puede estar vacio";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains
    ("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }

});