import { MiscFaq, MiscHelp } from "@/partials/misc";

const PlansContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_plans') }} */}

      <MiscFaq />
      <MiscHelp />
    </div>
  );
};

export { PlansContent };
