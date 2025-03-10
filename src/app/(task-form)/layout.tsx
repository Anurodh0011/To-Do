import { TaskReadContextProvider } from "@/context/TaskReadContext";
import { Geist, Geist_Mono } from "next/font/google";


export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <TaskReadContextProvider>
        {children}
    </TaskReadContextProvider>
    

  );
}
