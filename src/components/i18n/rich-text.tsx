import { Fragment } from "react";

import type { RichText } from "@/i18n";

interface RichTextContentProps {
  segments: RichText;
}

export function RichTextContent({ segments }: RichTextContentProps) {
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "code") {
          return (
            <code
              key={`code-${index}`}
              className="rounded bg-neutral-200 px-1 py-0.5 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
            >
              {segment.value}
            </code>
          );
        }

        return <Fragment key={`text-${index}`}>{segment.value}</Fragment>;
      })}
    </>
  );
}
