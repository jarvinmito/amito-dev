"use client";

import { useRef } from "react";
import { ModelViewer } from "./model-viewer";

export default function Test() {
  const ref = useRef(null);
  return <ModelViewer ref={ref} />;
}
