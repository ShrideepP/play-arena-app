import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import AppHeader from "@/components/common/app-header";

export const Route = createFileRoute("/(auth)/login-screen")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Fragment>
      <AppHeader />
    </Fragment>
  );
}
