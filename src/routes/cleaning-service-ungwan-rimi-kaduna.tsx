import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate, areaHead } from "@/components/templates/AreaPageTemplate";

const SLUG = "cleaning-service-ungwan-rimi-kaduna";

export const Route = createFileRoute("/cleaning-service-ungwan-rimi-kaduna")({
  head: () => areaHead(SLUG),
  component: () => <AreaPageTemplate slug={SLUG} />,
});
