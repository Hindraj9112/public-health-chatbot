const API_URL = "https://public-health-chatbot-nuq7.onrender.com";


async function signupUser() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {

        const response = await fetch(`${API_URL}/api/auth/signup`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                password
            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            window.location.href = "login.html";
        }

    } catch (error) {

        alert("Signup Failed");

        console.log(error);

    }

}



async function loginUser() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {

        const response = await fetch(`${API_URL}/api/auth/login`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful");

            window.location.href = "index.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        alert("Login Failed");

        console.log(error);

    }

}