import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/templates/ServicePageTemplate";

const SLUG = "deep-cleaning-kaduna";

export const Route = createFileRoute("/deep-cleaning-kaduna")({
  head: () => serviceHead(SLUG),
  component: () => <ServicePageTemplate slug={SLUG} />,
});
