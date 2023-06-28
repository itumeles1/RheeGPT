import React from "react";
import Dialog from "./Dialog";
import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";

export interface SignInDialogProps {
  show: boolean;
  close: () => void;
}

export const SignInDialog = ({ show, close }: SignInDialogProps) => {
  const { signIn } = useAuth();

  const signInAgent = () => {
    // Code to directly access AgentGPT without sign-in (for development purposes)
    // Insert your implementation here
    console.log("Accessing AgentGPT without sign-in for development purposes");
  };

  return (
    <Dialog
      header="Sign in 🔐"
      isShown={show}
      close={close}
      footerButton={<Button onClick={signInAgent}>Access AgentGPT</Button>}
    >
      <p>
        For development purposes, you can directly access AgentGPT without signing in.
        {/* Add your additional instructions or information here */}
      </p>
    </Dialog>
  );
};
