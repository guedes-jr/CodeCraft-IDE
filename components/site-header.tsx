import { Code2 } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <Link href="/" className="font-bold">
            CodeCraft IDE
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Documentação
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}