import { Faq, Help2 } from "@/partials/misc";
import { PermissionsToggle } from ".";

const PermissionsToggleContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <PermissionsToggle />

      {/* {{ theme.page('_members') }} */}

      <Faq />

      <Help2 />
    </div>
  );
};

export { PermissionsToggleContent };
