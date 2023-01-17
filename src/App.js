import "./App.css";
import { Input, Label, Button } from "reactstrap"

function App() {
  return (
    <div className="loginBox">
      <p className="header">Sign in to your account</p>
      <Input className="input-field emailInputField" placeholder="Email address" />
      <Input className="input-field passwordInputField" placeholder="Password" />
      <div className="other">
        <Label check>
          <Input type="checkbox" />
          <span className="checkbox-label">Remember me</span>
        </Label>
        <Label className="forgot">Forgot password?</Label>
      </div>
      <Button color="primary" className="signInButton">Sign in</Button>
    </div>
  );
}

export default App;
