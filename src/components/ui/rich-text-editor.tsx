"use client";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  return (
    <div className="min-h-[400px]">
      <MDEditor
        value={content}
        onChange={(value) => onChange(value || "")}
        preview="edit"
        hideToolbar={false}
        visibleDragbar={false}
        data-color-mode="light"
      />
    </div>
  );
}

