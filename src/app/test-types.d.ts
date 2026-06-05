import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type ModelViewerNode = HTMLElement & {
  setFrameColor: (attribute?: string) => void;
  setSaddleColor: (attribute?: string) => void;
  toggleLuggageRackBack: (isVisible: boolean) => void;
  toggleLuggageRackFront: (isVisible: boolean) => void;
  toggleLeatherBag: (isVisible: boolean) => void;
  dismissPoster: () => void;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src?: string;
          id?: string;
          "camera-orbit"?: string;
          exposure?: string;
          "camera-controls"?: boolean;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          "environment-image"?: string;
        },
        HTMLElement
      >;
    }
  }
}
