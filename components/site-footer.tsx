import { Code2, Github } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer border-t">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-6">
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">CodeCraft IDE</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Uma IDE online moderna e multilíngue para desenvolvedores.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/guedes-jr"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeCraft IDE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}