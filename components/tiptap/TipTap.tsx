"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, SetStateAction } from "react";
import Toolbar from "./Toolbar";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import "./style.css";

const Tiptap = ({
  content,
  setContent,
}: {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}) => {
  const lowlight = createLowlight(common);
  // lowlight.register({ html });
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: "border-none outline-none p-2",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    autofocus: true,
  });

  return (
    <div className="mx-auto flex max-h-[400px] flex-col rounded-xl">
      <Toolbar editor={editor} content={content} />
      <div className="custom-scrollbar h-full flex-1 overflow-y-scroll shadow-inner shadow-white/20">
        <EditorContent
          placeholder="Write your amazing ideas here!"
          style={{ whiteSpace: "pre-line" }}
          editor={editor}
        />
      </div>
    </div>
  );
};

export default Tiptap;
