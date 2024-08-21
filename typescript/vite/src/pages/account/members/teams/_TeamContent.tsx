import { Faq, Help2 } from "@/partials/misc";

const TeamContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_teams') }} */}

      <Faq />

      <Help2 />
    </div>
  );
};

export { TeamContent };
