import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate, areaHead } from "@/components/templates/AreaPageTemplate";

const SLUG = "cleaning-service-sabon-gari-kaduna";

export const Route = createFileRoute("/cleaning-service-sabon-gari-kaduna")({
  head: () => areaHead(SLUG),
  component: () => <AreaPageTemplate slug={SLUG} />,
});
