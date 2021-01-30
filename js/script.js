// SCROLL EFFECT NAVBAR -- MAIN PAGE
$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top"); // select element HTML with class sticky-top
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()); // adding or removing scrolled class if user scroll down
        // console.log($(this).scrollTop());
    });
});


// CHAT BOX APPEAR AFTER CLICK
function openForm() {
    document.getElementById("chatbox-main-page").style.display = "block";
}

function closeForm() {
    document.getElementById("chatbox-main-page").style.display = "none";
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// SWEEATALER VALIDATE LOGIN
function validate() {
    let username = document.getElementById(`username`).value;
    let password = document.getElementById(`password`).value;

    if (username === `user` && password === `user`) {
        swal({
            title: "Good job!",
            text: `Welcome back ${username}`,
            icon: "success",
            button: "close"
        }).then(function () {
            document.location.href = 'main.html';
        });
    } else if (username === `admin` || password === `admin`) {
        swal({
            title: "Good job!",
            text: `Welcome back ${username}`,
            icon: "success",
            button: "close"
        }).then(function () {
            document.location.href = 'dashboard.html';
        });
    } else if (username === `` || password === ``) {
        swal({
            title: "OPPSS",
            text: "Password or Username Cannot be Empty",
            icon: "error",
            button: "close",
        });
    } else {
        swal({
            title: "Hold On Bruh",
            text: "Password or Username Incorrect",
            icon: "warning",
            button: "close",
        });
    }
}

function logoutConfirm() {
    swal({
        title: "Logout",
        text: "Want to Logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                document.location.href = 'index.html';
            }
        });
}
