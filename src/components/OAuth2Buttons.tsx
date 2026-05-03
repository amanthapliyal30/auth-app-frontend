import React from "react";
import { Button } from "./ui/button";
import { Chrome, Github } from "lucide-react";

const BACKEND_BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:8083";

function OAuth2Buttons() {
  return (
    <div className="space-y-3">
      <a
        href={`${BACKEND_BASE_URL}/oauth2/authorization/google`}
        className="block"
      >
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer flex items-center gap-3 rounded-2xl"
        >
          <Chrome className="w-5 h-5" /> Continue with Google
        </Button>
      </a>

      <a
        href={`${BACKEND_BASE_URL}/oauth2/authorization/github`}
        className="block"
      >
        <Button
          type="button"
          variant="outline"
          className="w-full flex cursor-pointer items-center gap-3 rounded-2xl"
        >
          <Github className="w-5 h-5" /> Continue with GitHub
        </Button>
      </a>
    </div>
  );
}

export default OAuth2Buttons;