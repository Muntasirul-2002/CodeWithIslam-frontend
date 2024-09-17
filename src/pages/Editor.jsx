import React, { useEffect, useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";

const EditorPage = () => {
  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World</h1>");
  const [cssCode, setCssCode] = useState("body{background-color:#f4f4f4}");
  const [jsCode, setJsCode] = useState("// some comment");

  const changeTheme = () => {
    if (isLightMode) {
      document.querySelector(".EditorNavbar").style.background = "#141414";
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.querySelector(".EditorNavbar").style.background = "#f4f4f4";
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  const run = () => {
    const html = htmlCode || "";
    const css = `<style>${cssCode}</style>` || "";
    const js = `<script>${jsCode}</script>` || "";
    const iframe = document.getElementById("iframe");
    iframe.srcdoc = html + css + js;
  };

  useEffect(() => {
    run();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div>
      <EditorNavbar />
      <div className="flex">
        <div className={`left w-[${isExpanded ? "100%" : "50%"}]`}>
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="tabs flex items-center gap-2">
              <div
                onClick={() => setTab("html")}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
                HTML
              </div>
              <div
                onClick={() => setTab("css")}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
                CSS
              </div>
              <div
                onClick={() => setTab("js")}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
                JavaScript
              </div>
            </div>

            <div className="flex items-center gap-2">
              <i className="text-[20px] cursor-pointer" onClick={changeTheme}>
                {isLightMode ? <MdOutlineDarkMode /> : <MdLightMode />}
              </i>
              <i className="text-[20px] cursor-pointer">
                <AiOutlineExpandAlt onClick={() => setIsExpanded(!isExpanded)} />
              </i>
            </div>
          </div>

          {tab === "html" ? (
            <>
              <Editor
                onChange={(value) => {
                  setHtmlCode(value);
                }}
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="html"
                value={htmlCode}
                key="html"
              />
            </>
          ) : tab === "css" ? (
            <>
              <Editor
                onChange={(value) => {
                  setCssCode(value);
                }}
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="css"
                value={cssCode}
                key="css"
              />
            </>
          ) : (
            <>
              <Editor
                onChange={(value) => {
                  setJsCode(value);
                }}
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="javascript"
                value={jsCode}
                key="javascript"
              />
            </>
          )}
        </div>
        <iframe
          id="iframe"
          className={`w-[${isExpanded ? "0%" : "50%"}] ${
            isExpanded ? "hidden" : ""
          } min-h-[82vh] bg-[#fff] text-black`}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default EditorPage;
