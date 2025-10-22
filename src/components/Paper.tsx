import type { PropsWithChildren, ReactElement } from "react";

function Paper({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="w-full h-[560px] bg-white rounded-md relative printing-paper">
      <div className="w-full h-20 bg-gradient-to-b from-neutral-500 to-neutral-50 absolute z-10" />
      <div className="w-full h-full p-4 z-20 flex flex-col justify-between absolute">
        {children}
      </div>
    </div>
  );
}

export default Paper;
