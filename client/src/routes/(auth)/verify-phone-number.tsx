import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/verify-phone-number")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(auth)/_auth-layout/verify-phone-number"!</div>;
}
