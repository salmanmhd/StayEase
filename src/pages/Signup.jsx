import { Button } from "@/components/ui/button";
import InputItems from "../components/InputItems.jsx";
import Heading from "../components/Heading.jsx";
import AuthSuggestion from "../components/AuthSuggestion.jsx";
import { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black pt-20 text-indigo-50">
      <div className="flex flex-col items-center justify-center rounded-xl border border-indigo-700 px-10 py-10">
        <Heading
          title={"Sign Up"}
          subtitle={"Enter your information to create your account"}
          className="text-center text-lg"
        />
        <form className="mt-4 w-full" onSubmit={handleSubmit}>
          <InputItems
            labelText={"First Name"}
            placeholderText={"John"}
            className="text-sm"
          />
          <InputItems
            labelText={"Last Name"}
            placeholderText={"Smith"}
            className="text-sm"
          />
          <InputItems
            labelText={"Email"}
            placeholderText={"john@gmail.com"}
            className="text-sm"
          />
          <InputItems
            labelText={"Password"}
            placeholderText={"*******"}
            className="text-sm"
          />
          <Button className="mt-2 w-full bg-indigo-700 py-2 text-sm hover:bg-indigo-800">
            Sign Up
          </Button>
        </form>
        <AuthSuggestion
          text={"Have an account? "}
          redirectText={"Login"}
          redirectTo={"/signin"}
          className="mt-3 text-xs"
        />
      </div>
    </div>
  );
}

export default SignUp;
