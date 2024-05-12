import TestComponent from "@/components/TestComponent";
import TipTapEditor from "@/components/tiptap/TipTapEditor";
import React from "react";

const Page = () => {
  const blogData = {
    _id: "664079be153a7a1f9ad89cde",

    postedBy: {
      profile:
        "https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-blue-background_745528-3003.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated",

      username: "Sam",
    },

    title: "Next js Installation",

    thumbnail:
      "https://th.bing.com/th/id/OIP.9Fp3IXiukX3F8eYsLzSXZwHaEv?rs=1&pid=ImgDetMain",

    description:
      '<h1>Getting Started with Next.js: A Beginner’s Guide</h1><p>Next.js is a powerful React framework that simplifies building server-rendered web applications. Whether you’re a seasoned developer or just starting out, this guide will help you get up and running with Next.js. Let’s dive in!</p><h2>What is Next.js?</h2><p>Next.js is a React framework that provides server-side rendering (SSR), automatic code splitting, and an intuitive file-based routing system. It’s designed to make building web applications faster and more efficient. Here are some key features:</p><ul><li><p><strong>Server-Side Rendering (SSR)</strong>: Next.js renders pages on the server side, improving performance and SEO.</p></li><li><p><strong>File-Based Routing</strong>: Routes are determined by the file structure, making it easy to organize your application.</p></li><li><p><strong>Automatic Code Splitting</strong>: Next.js automatically splits your JavaScript bundles, optimizing load times.</p></li><li><p><strong>Built-in TypeScript, ESLint, and Tailwind CSS Configuration</strong>: Next.js comes with these tools out of the box.</p></li></ul><h2>Installation</h2><h3>Automatic Installation</h3><p>The easiest way to start a new Next.js app is by using <code>create-next-app</code>. Open your terminal and run:</p><pre><code class="language-bash">npx create-next-app@latest\n' +
      '</code></pre><p>You’ll be prompted to answer a few questions, such as project name, whether to use TypeScript, ESLint, Tailwind CSS, and more. This sets up everything automatically for you.</p><h3>Manual Installation</h3><p>If you prefer manual setup, follow these steps:</p><ol><li><p>Install the required packages:</p></li></ol><pre><code class="language-bash">npm install next@latest react@latest react-dom@latest\n' +
      '</code></pre><ol start="2"><li><p>Add the following scripts to your <code>package.json</code>:</p></li></ol><pre><code class="language-json">{\n' +
      '  "scripts": {\n' +
      '    "dev": "next dev",\n' +
      '    "build": "next build",\n' +
      '    "start": "next start",\n' +
      '    "lint": "next lint"\n' +
      "  }\n" +
      "}\n" +
      '</code></pre><ul><li><p><code>dev</code>: Start Next.js in development mode.</p></li><li><p><code>build</code>: Build the application for production usage.</p></li><li><p><code>start</code>: Start a Next.js production server.</p></li><li><p><code>lint</code>: Set up Next.js’ built-in ESLint configuration.</p></li></ul><h2>File Structure</h2><p>Next.js uses file-system routing, meaning routes are determined by your file structure. Here’s a basic structure for a new Next.js app:</p><ol><li><p>Create an <code>app/</code> folder.</p></li><li><p>Inside <code>app/</code>, add a <code>layout.tsx</code> and a <code>page.tsx</code> file.</p></li><li><p>The <code>layout.tsx</code> file should contain the required <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> tags:</p></li></ol><pre><code class="language-tsx">// app/layout.tsx\n' +
      "export default function RootLayout({ children }: { children: React.ReactNode }) {\n" +
      "  return (\n" +
      '    &lt;html lang="en"&gt;\n' +
      "      &lt;body&gt;{children}&lt;/body&gt;\n" +
      "    &lt;/html&gt;\n" +
      "  );\n" +
      "}\n" +
      '</code></pre><ol start="4"><li><p>Create a home page in <code>app/page.tsx</code>:</p></li></ol><pre><code class="language-tsx">// app/page.tsx\n' +
      "export default function Page() {\n" +
      "  return &lt;h1&gt;Hello, Next.js!&lt;/h1&gt;;\n" +
      "}\n" +
      "</code></pre><p>Remember that if you forget to create <code>layout.tsx</code>, Next.js will automatically generate it when running the development server with <code>next dev</code>.</p><h2>Conclusion</h2><p>Next.js is a fantastic framework for building modern web applications. With its powerful features and straightforward setup, you’ll be creating dynamic and performant apps in no time. Happy coding! 🚀</p><hr><p><strong>Sources</strong>:</p><ol><li><p>Getting Started: Installation | Next.js</p></li><li><p>Get Started with Next.js – The React Library Your Project Needs</p></li><li><p>Create a Next.js App | Learn Next.js</p></li><li><p>How to Create a Full-Stack Application with Next.js – A Step-By-Step Guide</p></li></ol>",

    categories: ["Technical"],
    datePost: "12 May 2024",
  };

  return (
    <div>
      <TestComponent blog={blogData} />
    </div>
  );
};

export default Page;
