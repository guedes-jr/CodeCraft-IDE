"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/app/docs/table-of-contents";

export default function DocsPage() {
  const texts = {
    gettingStarted: "Começando",
    introduction: "Introdução",
    installation: "Instalação",
    languages: "Idiomas",
    features: "Recursos",
    tryEditor: "Experimente o Editor",
    installationGuide: "Guia de Instalação",
    systemRequirements: "Requisitos do Sistema",
    pythonSupport: "Suporte a Python",
    javascriptSupport: "Suporte a JavaScript",
    codeEditorFeatures: "Recursos do Editor de Código",
    themes: "Temas",
    // Add more texts as needed
  };

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <ScrollArea className="py-6 pr-6 lg:py-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{texts.gettingStarted}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link href="/docs#introduction" className="flex w-full items-center rounded-md p-2 hover:underline">
              {texts.introduction}
            </Link>
            <Link href="/docs#installation" className="flex w-full items-center rounded-md p-2 hover:underline">
              {texts.installation}
            </Link>
          </div>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{texts.languages}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link href="/docs#python" className="flex w-full items-center rounded-md p-2 hover:underline">
              Python
            </Link>
            <Link href="/docs#javascript" className="flex w-full items-center rounded-md p-2 hover:underline">
              JavaScript
            </Link>
            <Link href="/docs#typescript" className="flex w-full items-center rounded-md p-2 hover:underline">
              TypeScript
            </Link>
            <Link href="/docs#portugues" className="flex w-full items-center rounded-md p-2 hover:underline">
              Português
            </Link>
          </div>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{texts.features}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link href="/docs#editor" className="flex w-full items-center rounded-md p-2 hover:underline">
              {texts.codeEditorFeatures}
            </Link>
            <Link href="/docs#execution" className="flex w-full items-center rounded-md p-2 hover:underline">
              {texts.features}
            </Link>
            <Link href="/docs#themes" className="flex w-full items-center rounded-md p-2 hover:underline">
              {texts.themes}
            </Link>
          </div>
        </ScrollArea>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
            <ChevronRight className="h-4 w-4" />
            <div className="font-medium text-foreground">{texts.gettingStarted}</div>
          </div>
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{texts.gettingStarted}</h1>
            <p className="text-lg text-muted-foreground">Aprenda a usar o CodeCraft IDE para suas necessidades de desenvolvimento.</p>
          </div>
          <div className="pb-12 pt-8">
            <div className="flex flex-col gap-12">
              <section id="introduction">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                  {texts.introduction}
                </h2>
                <p className="mt-6 leading-7">
                  O CodeCraft IDE é um poderoso editor de código online que suporta várias linguagens de programação. Ele
                  oferece uma experiência de desenvolvimento contínua com recursos como realce de sintaxe, autocompletar e
                  execução de código em tempo real.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button asChild>
                    <Link href="/">{texts.tryEditor}</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#installation">{texts.installationGuide}</Link>
                  </Button>
                </div>
              </section>

              <section id="installation">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">{texts.installation}</h2>
                <p className="mt-6 leading-7">
                  O CodeCraft IDE é uma aplicação baseada na web, então não é necessário instalar nada. Basta visitar nosso
                  site e começar a codificar imediatamente.
                </p>
                <div className="mt-6">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{texts.systemRequirements}</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Navegador web moderno (Chrome, Firefox, Safari ou Edge)</li>
                    <li>Conexão ativa com a internet</li>
                    <li>JavaScript habilitado</li>
                  </ul>
                </div>
              </section>

              <section id="python">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">{texts.pythonSupport}</h2>
                <div className="mt-6 space-y-4">
                  <p className="leading-7">O CodeCraft IDE suporta várias versões do Python, incluindo:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Python 3.11 (Última versão)</li>
                    <li>Python 3.10</li>
                    <li>Python 3.9</li>
                    <li>Python 3.8</li>
                    <li>Python 2.7.18 (Legado)</li>
                  </ul>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm">
                      <code>{`# Exemplo de código Python
def greet(name):
    return f"Olá, {name}!"

print(greet("Mundo"))`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              <section id="javascript">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">{texts.javascriptSupport}</h2>
                <div className="mt-6 space-y-4">
                  <p className="leading-7">Execute código JavaScript usando o runtime Node.js:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Node.js 20 (Última versão)</li>
                    <li>Node.js 18 LTS</li>
                  </ul>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm">
                      <code>{`// Exemplo de código JavaScript
function greet(name) {
  return \`Olá, \${name}!\`;
}

console.log(greet("Mundo"));`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              <section id="editor">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                  {texts.codeEditorFeatures}
                </h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Realce de Sintaxe</h3>
                    <p className="mt-2 leading-7">
                      Realce de sintaxe automático para todas as linguagens de programação suportadas.
                    </p>
                  </div>
                  <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Autocompletar</h3>
                    <p className="mt-2 leading-7">Sugestões de código inteligentes e autocompletar enquanto você digita.</p>
                  </div>
                  <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Detecção de Erros</h3>
                    <p className="mt-2 leading-7">Detecção de erros em tempo real e linting para linguagens suportadas.</p>
                  </div>
                </div>
              </section>

              <section id="themes">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">{texts.themes}</h2>
                <div className="mt-6 space-y-4">
                  <p className="leading-7">
                    O CodeCraft IDE suporta temas claros e escuros. Você pode alternar entre os temas usando o botão de
                    alternância de tema no canto superior direito do editor.
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Tema claro para melhor legibilidade em ambientes claros</li>
                    <li>Tema escuro para reduzir a fadiga ocular em condições de pouca luz</li>
                    <li>Alternância automática de tema com base nas preferências do sistema</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <TableOfContents />
          </div>
        </div>
      </main>
    </div>
  );
}