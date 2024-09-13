import { MiscFaq, MiscHelp2 } from "@/partials/misc";

const StoreClientsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_users') }} */}

      <MiscFaq />
      <MiscHelp2 />
    </div>
  );
};

export { StoreClientsContent };
