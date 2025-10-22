import { ArrowLeftIcon, LogOut } from "lucide-react";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";

function Header(): ReactElement {
  return (
    <div className="flex items-center justify-between">
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowLeftIcon />
      </Button>
      <h1 className="font-bold text-xl">Payment Status</h1>
      <Button variant="outline" size="icon" aria-label="Submit">
        <LogOut />
      </Button>
    </div>
  );
}

export default Header;
