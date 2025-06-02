import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "  چکاد | لیست  سایت های سنگنوردی ایران    ",
  description: "  راهنمای قله ها و مسیر های سنگنوردی ایران  ",

};


function page() {
  return (
    <div className="text-black text-4xl mt-8 text-center">
      لیست همه سایت های سنگنوردی{" "}
    </div>
  );
}

export default page;
