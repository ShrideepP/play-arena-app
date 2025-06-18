import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/complete-sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(auth)/_auth-layout/complete-sign-up"!</div>;
}
