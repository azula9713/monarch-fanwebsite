import React from "react";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
};

function BaseLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default BaseLayout;
