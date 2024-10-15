import { Button } from "@/components/ui/button";
import InputItems from "../components/InputItems.jsx";
import Heading from "../components/Heading.jsx";
import AuthSuggestion from "../components/AuthSuggestion.jsx";
import { useState } from "react";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-indigo-50">
      <div className="flex flex-col items-center justify-center rounded-xl border border-indigo-700 p-8">
        <Heading
          title={"Sign in"}
          subtitle={"Enter your information to log into your account"}
        />
        <form className="mt-10 w-full" onSubmit={handleSubmit}>
          <InputItems labelText={"Email"} placeholderText={"john@gmail.com"} />
          <InputItems labelText={"Password"} placeholderText={"*******"} />
          <Button className="mt-2 w-full bg-indigo-700 hover:bg-indigo-800">
            Sign in
          </Button>
        </form>
        <AuthSuggestion
          text={"Don't have an account? "}
          redirectText={"Sign Up"}
          redirectTo={"/signup"}
        />
      </div>
    </div>
  );
}

export default Signin;
