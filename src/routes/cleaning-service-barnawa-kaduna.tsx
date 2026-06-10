import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate, areaHead } from "@/components/templates/AreaPageTemplate";

const SLUG = "cleaning-service-barnawa-kaduna";

export const Route = createFileRoute("/cleaning-service-barnawa-kaduna")({
  head: () => areaHead(SLUG),
  component: () => <AreaPageTemplate slug={SLUG} />,
});
