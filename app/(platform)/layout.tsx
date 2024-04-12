import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const Platform = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default Platform;
