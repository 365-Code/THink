"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import "./style.css";
import { common, createLowlight } from "lowlight";
import { useEffect, useState } from "react";

const EditorPreview = ({ content }: { content: string }) => {
  const lowlight = createLowlight(common);
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "border-none outline-none p-2",
      },
    },
    editable: false,
  });

  return (
    <div>
      {content && (
        <EditorContent
          content={content}
          style={{ whiteSpace: "pre-line" }}
          editor={editor}
        />
      )}
    </div>
  );
};

export default EditorPreview;
