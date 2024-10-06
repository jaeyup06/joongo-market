import { PropsWithChildren } from "react";
import AuthProvider from "./_components/AuthProvider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
