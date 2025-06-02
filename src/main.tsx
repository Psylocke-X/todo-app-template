import { StrictMode } from "react";

import { store } from "@/store/store.ts";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import TodoApp from "./TodoApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>,
);
