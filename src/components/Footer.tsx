import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";

function Footer(): ReactElement {
  return (
    <div className="border-0 border-t flex flex-col gap-2 py-2">
      <div className="flex items-center justify-between">
        <span>Payment Method</span>
        <div className="flex items-center gap-2">
          <span>Visa Ending 2986</span>
          <span className="w-10 h-8 bg-blue-800 rounded-md" />
        </div>
      </div>
      <Button
        className="w-full shadow-lg drop-shadow-xl text-lg font-normal"
        size="lg"
      >
        Pay Now
      </Button>
    </div>
  );
}

export default Footer;
