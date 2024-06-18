'use client';

import { useRef } from 'react';
import { Download } from 'lucide-react';
import ThemeSelector from './components/theme';
import CodeEditor from './components/editor';

export default function CodePlayground() {
  const editorRef = useRef<any>(null);

  async function downloadCodeFile() {
    const editorInstance = editorRef.current?.getEditorInstance();

    if (editorInstance) {
      const codeValue = editorInstance.getValue();
      const file = new Blob([codeValue], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = 'code-editor.txt';
      link.click();
    }
  }

  return (
    <section className="relative">
      <header
        className="mt-6 flex gap-6 max-w-[940px] w-full p-2 absolute -top-24 left-1/2 translate-x-[-50%]
         z-10 bg-[#191919] rounded border border-b-[#3c3c3c] shadow-md"
      >
        <ThemeSelector />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-violet-400 rounded-md text-sm text-violet-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={downloadCodeFile}
          >
            <Download />
            Download File
          </button>
        </div>
      </header>

      <div className="editor mt-[70px]">
        <CodeEditor ref={editorRef} />
      </div>
    </section>
  );
}