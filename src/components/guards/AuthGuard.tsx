"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const AuthGuard = (props) => {
  const { children, fallback } = props;
  const session = useSession();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(
    () => {
      if (session.status == "unauthenticated") {
        if (pathName !== "/") {
          router.replace("/signin");
        } else {
          router.replace("/admin");
        }
      }
    },
    [pathName, session.status]
  );

  if (session.status !== "authenticated") {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
