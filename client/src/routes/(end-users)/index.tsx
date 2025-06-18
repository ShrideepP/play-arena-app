import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(end-users)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(end-users)/"!</div>;
}
