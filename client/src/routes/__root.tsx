import { Fragment } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { TanStackRouterDevtoolsInProd } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Fragment>
      <main className="bg-background-200 font-fira-sans relative min-h-screen w-full antialiased">
        <Outlet />
        <Toaster />
      </main>

      <TanStackRouterDevtoolsInProd position="bottom-right" />
      <ReactQueryDevtools position="right" buttonPosition="bottom-left" />
    </Fragment>
  );
}
