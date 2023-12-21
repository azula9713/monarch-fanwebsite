import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";

type Props = {
  loader: React.ReactNode;
  page: React.ReactNode;
  timer?: number;
};

function LoadingWrapper({
  loader: loadingComponent,
  page,
  timer = 2,
}: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, timer * 1000);
    return () => clearTimeout(delay);
  }, [location, timer]);

  if (isLoading) {
    return <BaseLayout>{loadingComponent}</BaseLayout>;
  }

  return <>{page}</>;
}

export default LoadingWrapper;
