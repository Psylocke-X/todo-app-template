import { StrictMode } from "react";

import { store } from "@/store/store.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import TodoApp from "./TodoApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <TodoApp />
      </DndProvider>
    </Provider>
  </StrictMode>,
);
