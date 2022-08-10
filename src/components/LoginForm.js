import { useState } from "react";
import FireBaseAuthService from "../FirebaseAuthService";

const LoginForm = ({ existingUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await FireBaseAuthService.loginUser(username, password);
            setUsername("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = () => {
        FireBaseAuthService.logoutUser();
    };

    const handleSendPasswordResetEmail = async (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter your email address.");
            return;
        }
        try {
            await FireBaseAuthService.resetPassword(username);
            alert("Sent password reset email.");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLoginWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await FireBaseAuthService.loginWithGoogle();
            setUsername("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="login-form-container">
            {existingUser ? (
                <div className="row">
                    <h3>Welcome, {existingUser.email}</h3>
                    <button type="button" className="primary-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="login-form">
                    <label className="input-label login-label">
                        Username (email):
                        <input type="email" required value={username} onChange={(e) => setUsername(e.target.value)} className="input-text" />
                    </label>
                    <label className="input-label login-label">
                        Password:
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-text" />
                    </label>
                    <div className="button-box">
                        <button className="primary-button" type="submit">
                            Login
                        </button>
                        <button className="primary-button" type="button" onClick={handleSendPasswordResetEmail}>
                            Reset Password
                        </button>
                        <button className="primary-button" type="button" onClick={handleLoginWithGoogle}>
                            Login with Google
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
