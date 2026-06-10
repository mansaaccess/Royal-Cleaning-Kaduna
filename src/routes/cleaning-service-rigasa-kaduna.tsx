import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate, areaHead } from "@/components/templates/AreaPageTemplate";

const SLUG = "cleaning-service-rigasa-kaduna";

export const Route = createFileRoute("/cleaning-service-rigasa-kaduna")({
  head: () => areaHead(SLUG),
  component: () => <AreaPageTemplate slug={SLUG} />,
});
