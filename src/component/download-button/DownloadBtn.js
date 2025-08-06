import React from "react";
import "./downloadBtn.css";
import { RiDownload2Fill } from "react-icons/ri";

export default function DownloadBtn() {
  return (
    <>
      {/*<button class="download-button">
      <div class="docs">
        <svg
          class="css-i6dzq1"
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          height="20"
          width="20"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line y2="13" x2="8" y1="13" x1="16"></line>
          <line y2="17" x2="8" y1="17" x1="16"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>{" "}
        Docs
      </div>
      <div class="download">
        <svg
          class="css-i6dzq1"
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          height="24"
          width="24"
          viewBox="0 0 24 24"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line y2="3" x2="12" y1="15" x1="12"></line>
        </svg>
      </div>
    </button>*/}
      <div className=" downloadBtn">
        <div class="button">
          <div class="button-wrapper">
            <div class="text p-2">
              Brochure &nbsp;
              <RiDownload2Fill />
            </div>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
