import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/templates/ServicePageTemplate";

const SLUG = "post-construction-cleaning-kaduna";

export const Route = createFileRoute("/post-construction-cleaning-kaduna")({
  head: () => serviceHead(SLUG),
  component: () => <ServicePageTemplate slug={SLUG} />,
});
