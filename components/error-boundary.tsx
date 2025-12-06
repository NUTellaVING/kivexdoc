"use client";

import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ErrorBoundary({ children, fallback = <div>Something went wrong.</div> }: Props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Suppress hydration errors in development
      if (
        process.env.NODE_ENV === 'development' &&
        event.message.includes('Hydration failed')
      ) {
        event.preventDefault();
        setHasError(false);
        return;
      }
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return fallback;
  }

  return <>{children}</>;
}

// For non-client components
import { useState } from "react";