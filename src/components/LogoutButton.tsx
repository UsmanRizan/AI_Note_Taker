"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a logout delay

    const errorMessage = null; // Simulate an error message

    if (!errorMessage) {
      toast({
        title: "Logged out successfully",
        description: "You have been logged out.",
        variant: "success",
      });
      router.push("/");
    } else {
      toast({
        title: "Logout failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <Button
      className="flex items-center gap-2"
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
