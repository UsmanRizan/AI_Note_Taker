import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function SignUpPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4 text-center text-2xl font-bold">
          <CardTitle className="text-center text-3xl">SignUp</CardTitle>
        </CardHeader>
        <AuthForm type="signup" />

        <div className="text-muted-foreground mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </Card>
    </div>
  );
}

export default SignUpPage;
