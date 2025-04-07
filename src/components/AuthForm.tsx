"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { loginAction, SignUpAction } from "@/actions/users";

type Props = {
  type: "login" | "signup";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;
      let title;
      let description;

      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        title = "Login in";
        description = "Login successfully";
      } else {
        errorMessage = (await SignUpAction(email, password)).errorMessage;
        title = "Signup in";
        description = "check your email for verification link";
      }

      if (errorMessage) {
        toast({
          title: title,
          description: errorMessage,
          variant: "destructive",
        });
        router.replace("/");
      } else {
        toast({
          title: title,
          description: description,
          variant: "success",
        });
        router.replace("/");
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
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
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "login"
          ) : (
            "signup"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "signup" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
