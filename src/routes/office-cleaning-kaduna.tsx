import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/templates/ServicePageTemplate";

const SLUG = "office-cleaning-kaduna";

export const Route = createFileRoute("/office-cleaning-kaduna")({
  head: () => serviceHead(SLUG),
  component: () => <ServicePageTemplate slug={SLUG} />,
});
