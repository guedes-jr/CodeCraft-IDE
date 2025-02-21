"use client"

import * as React from "react"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface LanguageTemplate {
  defaultCode: string
  label: string
  version?: string
  isLegacy?: boolean
}

const languageTemplates: Record<string, LanguageTemplate> = {
  // Python Templates
  "python-3.11": {
    label: "Python 3.11",
    defaultCode: `# Escreva seu código Python aqui
def greet(name):
    return f"Olá, {name}!"

print(greet("Mundo"))`,
  },
  "python-3.10": { label: "Python 3.10", defaultCode: "" },
  "python-3.9": { label: "Python 3.9", defaultCode: "" },
  "python-3.8": { label: "Python 3.8", defaultCode: "" },
  "python-2.7": {
    label: "Python 2.7.18 (Legado)",
    defaultCode: `# Escreva seu código Python aqui
def greet(name):
    return "Olá, %s!" % name

print greet("Mundo")`,
    isLegacy: true,
  },

  // JavaScript Templates
  "node-20": {
    label: "Node.js 20",
    defaultCode: `// Escreva seu código JavaScript aqui
function greet(name) {
  return \`Olá, \${name}!\`;
}

console.log(greet("Mundo"));`,
  },
  "node-18": { label: "Node.js 18", defaultCode: "" },

  // TypeScript Templates
  "typescript-5": {
    label: "TypeScript 5",
    defaultCode: `// Escreva seu código TypeScript aqui
function greet(name: string): string {
  return \`Olá, \${name}!\`;
}

console.log(greet("Mundo"));`,
  },

  // Java Templates
  "java-21": {
    label: "Java 21",
    defaultCode: `// Escreva seu código Java aqui
public class Main {
    public static void main(String[] args) {
        System.out.println(greet("Mundo"));
    }
    
    public static String greet(String name) {
        return "Olá, " + name + "!";
    }
}`,
  },
  "java-17": { label: "Java 17 (LTS)", defaultCode: "" },

  // C++ Templates
  "cpp-20": {
    label: "C++ 20",
    defaultCode: `// Escreva seu código C++ aqui
#include <iostream>
#include <string>

std::string greet(const std::string& name) {
    return "Olá, " + name + "!";
}

int main() {
    std::cout << greet("Mundo") << std::endl;
    return 0;
}`,
  },

  // Go Templates
  "go-1.21": {
    label: "Go 1.21",
    defaultCode: `// Escreva seu código Go aqui
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Olá, %s!", name)
}

func main() {
    fmt.Println(greet("Mundo"))
}`,
  },

  // Rust Templates
  "rust-1.75": {
    label: "Rust 1.75",
    defaultCode: `// Escreva seu código Rust aqui
fn greet(name: &str) -> String {
    format!("Olá, {}!", name)
}

fn main() {
    println!("{}", greet("Mundo"));
}`,
  },
}

export function CodeEditor() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("python-3.11")
  const [code, setCode] = React.useState(languageTemplates["python-3.11"].defaultCode)
  const [output, setOutput] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)
  const { theme } = useTheme()

  const handleEditorChange = (value: string | undefined) => {
    if (value) setCode(value)
  }

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    const template = languageTemplates[value]
    if (template.defaultCode) {
      setCode(template.defaultCode)
    }
  }

  const getLanguageFromId = (id: string) => {
    return id.split("-")[0]
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("Executando...")

    try {
      // Em uma implementação real, isso se conectaria a um serviço de backend
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setOutput("Olá, Mundo!\n\nPrograma concluído com sucesso.")
    } catch (error) {
      setOutput("Ocorreu um erro ao executar o código.")
    } finally {
      setIsRunning(false)
    }
  }

  const isLegacyVersion = selectedLanguage === "python-2.7"

  return (
    <div className="py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Editor de Código Online</h1>
          <p className="text-muted-foreground">Escreva, compile e execute código em várias linguagens de programação.</p>
        </div>

        <div className="flex flex-col h-[700px] gap-4 rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Selecione a Linguagem" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languageTemplates).map(([id, template]) => (
                      <SelectItem
                        key={id}
                        value={id}
                        className={template.isLegacy ? "text-yellow-600 dark:text-yellow-500" : ""}
                      >
                        {template.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button onClick={runCode} disabled={isRunning} className="gap-2">
                  <Play className="w-4 h-4" />
                  Executar
                </Button>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>

            {isLegacyVersion && (
              <Alert variant="warning" className="bg-yellow-50 dark:bg-yellow-950 border-yellow-500">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
                <AlertDescription className="text-yellow-600 dark:text-yellow-500">
                  Python 2.7.18 é uma versão legada que chegou ao fim da vida útil em 1º de janeiro de 2020. Recomenda-se
                  usar Python 3.x para novos projetos.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="grid flex-1 gap-4 md:grid-cols-2">
            <div className="min-h-[400px] rounded-lg border bg-background">
              <Editor
                height="100%"
                defaultLanguage={getLanguageFromId(selectedLanguage)}
                language={getLanguageFromId(selectedLanguage)}
                theme={theme === "dark" ? "vs-dark" : "light"}
                value={code}
                onChange={handleEditorChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  tabSize: 4,
                  insertSpaces: true,
                  autoIndent: "full",
                }}
              />
            </div>
            <div className="min-h-[400px] rounded-lg border bg-muted p-4 font-mono">
              <div className="text-sm text-muted-foreground">Saída:</div>
              <pre className="mt-2 text-sm">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}