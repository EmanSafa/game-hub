import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";

const queryclient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
);
