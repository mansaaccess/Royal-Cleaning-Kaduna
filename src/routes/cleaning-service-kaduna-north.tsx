import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate, areaHead } from "@/components/templates/AreaPageTemplate";

const SLUG = "cleaning-service-kaduna-north";

export const Route = createFileRoute("/cleaning-service-kaduna-north")({
  head: () => areaHead(SLUG),
  component: () => <AreaPageTemplate slug={SLUG} />,
});
