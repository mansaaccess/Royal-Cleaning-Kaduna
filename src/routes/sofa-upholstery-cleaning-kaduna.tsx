import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/templates/ServicePageTemplate";

const SLUG = "sofa-upholstery-cleaning-kaduna";

export const Route = createFileRoute("/sofa-upholstery-cleaning-kaduna")({
  head: () => serviceHead(SLUG),
  component: () => <ServicePageTemplate slug={SLUG} />,
});
