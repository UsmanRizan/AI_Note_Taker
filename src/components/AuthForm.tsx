"use client";

import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";

type Props = {
  type: "login" | "signup";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const router = useRouter();
  const toast = useToast();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted", formData);
  };

  return (
    <form action={handleSubmit}>
      <CardContent>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            disabled={isPending}
          />
        </div>
      </CardContent>
    </form>
  );
}

export default AuthForm;
