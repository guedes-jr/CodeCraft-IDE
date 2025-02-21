"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsItem {
  id: string
  level: number
  text: string
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("")
  const [items, setItems] = useState<TableOfContentsItem[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3")
    const items: TableOfContentsItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      level: Number.parseInt(heading.tagName.substring(1)),
      text: heading.textContent || "",
    }))
    setItems(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <div className="flex flex-col space-y-2 text-sm">
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={cn(
              "line-clamp-1 hover:underline",
              item.level === 3 && "pl-4",
              activeId === item.id ? "font-medium text-primary" : "text-muted-foreground",
            )}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  )
}

