import React from "react";
import { AppBar, ToolBar } from "@skeletonlabs/skeleton-react";

export default function Home() {
  return (
    <>
      <AppBar>
        <AppBar.Toolbar>
          <ToolBar.Lead>
            <h2 className="h2">Testing</h2>
          </ToolBar.Lead>
        </AppBar.Toolbar>
      </AppBar>

      <main>
        <h1 className="h2">Hello World</h1>
      </main>
    </>
  );
}
