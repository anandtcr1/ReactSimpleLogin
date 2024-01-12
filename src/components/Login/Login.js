import { useState } from "react";
function Login() {

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    const [successMessage, setSuccessMessage] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();
        var { userName, password } = document.forms[0];

        const userData = database.find((user) => user.username === userName.value);

        if(userData){
            if(userData.password !== password.value) {
                setSuccessMessage("");
                setErrorMessage({ name: "password", message: errors.password });
            }
            else {
                setErrorMessage({});
                setSuccessMessage("Logged in Successfully");
                setIsSubmited(true);
            }
        }
        else {
            setSuccessMessage("");
            setErrorMessage({ name: "username", message: errors.username });
        }   
    }

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    return(
        <>
            <h1>Login Page</h1>
            <div className="col-6">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>User Name</label>
                            <input type="text" name="userName" required />
                            {renderErrorMessage("username")}
                        </div>

                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" name="password" required />
                            {renderErrorMessage("password")}
                        </div>

                        <div className="button-container">
                            <button>Login</button>
                            {successMessage === '' ? '' : <div className="success">{ successMessage }</div>}
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;