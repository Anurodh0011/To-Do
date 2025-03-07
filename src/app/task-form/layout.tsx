import { Geist, Geist_Mono } from "next/font/google";
import { TaskReadContextProvider } from "@/context/TaskReadContext";


export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <TaskReadContextProvider>
        {children}
    </TaskReadContextProvider>
    

  );
}
