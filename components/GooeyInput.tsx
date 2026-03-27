"use client";

import { GooeyInput } from "./ui/gooeyinput";
import { Filter } from "lucide-react";

export function GooeyInputDemo() {
  return (
    <div className="w-full space-y-4 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Keywords
          </label>
          <GooeyInput
            placeholder="Search articles..."
            collapsedWidth={180}
            expandedWidth={280}
            expandedOffset={0}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Journal / Book
          </label>
          <GooeyInput
            placeholder="Journal title..."
            collapsedWidth={180}
            expandedWidth={280}
            expandedOffset={0}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
            Author(s)
          </label>
          <GooeyInput
            placeholder="Author name..."
            collapsedWidth={180}
            expandedWidth={280}
            expandedOffset={0}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Filter className="size-3" />
          <button className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Search
          </button>
          <button className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            Open Access
          </button>
          <button className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            Peer Reviewed
          </button>
        </div>
        <a href="#" className="text-xs text-primary hover:underline font-medium">
          Advanced Search
        </a>
      </div>
    </div>
  );
}
