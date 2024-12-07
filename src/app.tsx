import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { useAssets } from "solid-js/web";

import { StyleRegistry, css, renderSheets, type StyleData } from "solid-styled";

import '@picocss/pico';

export default function App() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));

  return (
    <Router
      root={props => (
        <MetaProvider>
          <StyleRegistry styles={sheets}>
            <Suspense>{props.children}</Suspense>
          </StyleRegistry>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
