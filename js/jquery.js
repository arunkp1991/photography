$(document).ready(function() {
    //sign in hide,show
    var show = 0;
    $(".sign_in").click(function() {
        if (show === 2) {
            $("#join_box").hide();
            $("#sign_in_box").show();
            show = 1;
        }
        else if (show === 1) {
            $("#sign_in_box").hide()
            show = 0;
        }
        else {
            $("#sign_in_box").show();
            show = 1;
        }
    });
    //join hide,show
    $(".join").click(function() {
        if (show === 1) {
            $("#sign_in_box").hide();
            $("#join_box").show();
            show = 2;
        }
        else if (show === 2) {
            $("#join_box").hide();
            show = 0;
        }
        else {
            $("#join_box").show();
            show = 2;
        }
    });
    //join form validation and submission
    $("#joinform").submit(function(e) {
        e.preventDefault();
        if ($("#joinform input[name=name]").val().length < 3) {
            $("#name_error").text("Enter a valid name.");
        }
        else {
            $("#name_error").text("");
            var email = $("#joinform input[name=email]").val().toLowerCase();
            if ((email.indexOf("@") < 2) || (email.indexOf(".") < 5) || (email.length < 8)) {
                $("#email_error").text("Enter a valid email.");
            }
            else {
                $("#email_error").text("");
                if ($("#joinform input[name=password]").val().length < 6) {
                    $("#password_error").text("Atleast 6 characters.");
                }
                else {
                    $("#password_error").text("");
                    var repass = $("#joinform input[name=repassword]").val();
                    if (repass.length < 6 || repass !== $("#joinform input[name=password]").val()) {
                        $("#repassword_error").text("Passwords does not match.");
                    }
                    else {
                        $("#repassword_error").text("");
                        $.post("register.php", $("#joinform").serialize()).done(function(data) {
                            if (data === "") {
                                $("#joinstatus").text("E-mail already exists.");
                            }
                            else {
                                $("#joinstatus").text("");
                                $("#join_box").hide();
                                $.post("login.txt").done(function(data) {
                                    $(".sign").html(data);
                                });
                            }
                        });
                    }
                }
            }
        }

    });
    //sign in form validation and submission
    $("#signinform").submit(function(e) {
        e.preventDefault();
        var email = $("#signinform input[name=email]").val().toLowerCase();
        if ((email.indexOf("@") < 2) || (email.indexOf(".") < 5) || (email.length < 8)) {
            $("#semail_error").text("Enter a valid email.");
        }
        else {
            $("#semail_error").text("");
            if ($("#signinform input[name=password]").val().length < 6) {
                $("#spassword_error").text("Wrong password.");
            }
            else{
                $.post("authenticate.php", $("#signinform").serialize()).done(function(data) {
                    
                });
            }
        }
    });
});
