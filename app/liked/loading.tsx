"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

function Loading() {
  return (
    <Box classname="h-full justify-center items-center flex">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
}

export default Loading;
