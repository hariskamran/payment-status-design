import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";

function PaymentDetails(): ReactElement {
  return (
    <>
      <div className="border-y border-dashed border-black p-1 flex items-center justify-center">
        Trip Invoice - Japan 2025
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <span>This part is simple and I have no time.</span>
        <span>I wanted to add the animation instead of this.</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          className="w-1/2 rounded-full text-xs shadow-md drop-shadow-md"
          size="sm"
        >
          Send Reminder
        </Button>
        <Button
          className="w-1/2 rounded-full text-xs bg-white shadow-md drop-shadow-md"
          variant="secondary"
          size="sm"
        >
          Download Invoice
        </Button>
      </div>
    </>
  );
}

export default PaymentDetails;
