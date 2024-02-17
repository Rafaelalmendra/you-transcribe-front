// components
import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "components";

// icons
import { Github } from "lucide-react";

const GithubLinks = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Github size={18} />
          <span className="sr-only">Acessar Github</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <a target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_FRONTEND_URL}>
          <DropdownMenuItem>Front-end</DropdownMenuItem>
        </a>
        <a target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_BACKEND_URL}>
          <DropdownMenuItem>Back-end</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { GithubLinks };
