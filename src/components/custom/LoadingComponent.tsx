import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";

type Props = {
  children: React.ReactNode;
};

function LoadingComponent({ children }: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, [location]);

  if (isLoading) {
    return (
      <BaseLayout>
        <h1 className="text-4xl text-center text-monarch">Loading...</h1>
      </BaseLayout>
    );
  }

  return <>{children}</>;
}

export default LoadingComponent;
