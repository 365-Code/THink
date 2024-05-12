"use client";
import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Tiptap from "./TipTap";
import "./style.css";
import { log } from "console";
import EditorPreview from "./EditorPreview";

const TipTapEditor = () => {
  const [content, setContent] = useState("");
  //   "<p>Hello World! 🌎️lksdf</p><p>asdf;laskjdf'asdf</p><p>sdfl</p><p>sdfl;asjdf</p><p>asdfl;asdalsdkjf</p><p>fs;df</p><pre><code>lsjdflaasdfsaldfjsdfl</code></pre>"

  return (
    <div className="max-w-[100%] w-[1000px] mx-auto border border-blue-400 rounded-xl">
      <Tiptap content={content} setContent={setContent} />
    </div>
  );
};

export default TipTapEditor;
