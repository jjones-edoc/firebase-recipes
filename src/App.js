import { useState } from "react";
import FireBaseAuthService from "./FirebaseAuthService";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
    const [user, setUser] = useState(null);
    FireBaseAuthService.subscribeToAuthChanges(setUser);
    return (
        <div className="App">
            <div className="div title-row">
                <h1 className="title">Firebase Recipes</h1>
                <LoginForm existingUser={user} />
            </div>
        </div>
    );
}

export default App;
