import { ClerkProvider } from "@clerk/nextjs";

const Platform = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Platform;
