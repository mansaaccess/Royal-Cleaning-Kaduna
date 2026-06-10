import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/templates/ServicePageTemplate";

const SLUG = "fumigation-service-kaduna";

export const Route = createFileRoute("/fumigation-service-kaduna")({
  head: () => serviceHead(SLUG),
  component: () => <ServicePageTemplate slug={SLUG} />,
});
