import { Faq, Help } from "@/partials/misc";

const CurrentSessionsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_current-sessions') }} */}

      <Faq />
      <Help />
    </div>
  );
};

export { CurrentSessionsContent };
