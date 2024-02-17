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

type GithubLinksProps = {
  hasText?: boolean;
};

const GithubLinks = ({ hasText }: GithubLinksProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={hasText ? "default" : "icon"}>
          <Github size={18} />
          {hasText && <span className="ml-2">Github</span>}
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
