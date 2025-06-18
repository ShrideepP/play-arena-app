import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/enter-phone-number")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(auth)/_auth-layout/enter-phone-number"!</div>;
}
