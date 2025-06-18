import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(turf-owner)/bookings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(turf-owner)/bookings"!</div>;
}
