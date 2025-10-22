import type { ReactElement } from "react";
import Paper from "@/components/Paper";
import PaymentDetails from "@/components/PaymentDetails";

function PaymentViewer(): ReactElement {
  return (
    <div className="h-[620px] py-4">
      <div className="w-full h-24 px-4 py-4 rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-2xl drop-shadow-2xl">
        <div className="w-full h-6 bg-black rounded-full relative">
          <div className="w-full px-3 h-12 absolute top-3">
            <div className="overflow-hidden">
              <Paper>
                <PaymentDetails />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
0;
export default PaymentViewer;
