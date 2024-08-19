import { Faq, Help } from "@/partials/misc";

const PlansContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_plans') }} */}

      <Faq />
      <Help />
    </div>
  );
};

export { PlansContent };
