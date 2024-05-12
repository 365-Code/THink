"use client";
import { Editor } from "@tiptap/react";
import React from "react";

type Props = {
  content: string;
  editor: Editor | null;
};

const Toolbar = ({ content, editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className=" flex p-1 items-center justify-center border-b border-b-blue-800">
      <div className="flex w-fit gap-2 p-2">
        <button
          className={`
          ${
            editor.isActive("bold")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
        >
          <i className="fi fi-sr-bold" />
        </button>
        <button
          className={`
          ${
            editor.isActive("italic")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
        >
          <i className="fi fi-sr-italic" />
        </button>
        <button
          className={`
          ${
            editor.isActive("strike")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
        >
          <i className="fi fi-sr-strikethrough" />
        </button>
        <button
          className={`
          ${
            editor.isActive("heading")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
        >
          <i className="fi fi-sr-h2" />
        </button>
        <button
          className={`
          ${
            editor.isActive("bulletList")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
        >
          <i className="fi fi-sr-list" />
        </button>
        <button
          className={`
          ${
            editor.isActive("orderedList")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
        >
          <span className="flex items-start">
            <span className="flex flex-col gap-[1px]">
              <i className="fi fi-sr-1 text-[8px]" />
              <i className="fi fi-sr-2 text-[8px]" />
              {/* <i className="fi fi-sr-2 text-[5px]" />
              <i className="fi fi-sr-3 text-[5px]" /> */}
            </span>
            <i className="fi fi-sr-bars-sort" />
          </span>
        </button>
        <button
          className={`
          ${
            editor.isActive("blockquote")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
        >
          <i className="fi fi-sr-quote-right" />
        </button>
        <button
          className={`
          ${
            editor.isActive("codeBlock")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCodeBlock().run();
          }}
        >
          <i className="fi fi-sr-code-simple" />
        </button>
        <button
          className={`
          ${
            editor.isActive("undo")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
        >
          <i className="fi fi-sr-undo-alt" />
        </button>
        <button
          className={`
          ${
            editor.isActive("redo")
              ? "border-blue-600 bg-blue-600 text-white"
              : "text-blue-700"
          } rounded-lg border p-3 transition-all
          `}
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
        >
          <i className="fi fi-sr-redo-alt" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
