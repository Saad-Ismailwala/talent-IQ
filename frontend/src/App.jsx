import {
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
  SignedOut,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome to the App!</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
}

export default App;
