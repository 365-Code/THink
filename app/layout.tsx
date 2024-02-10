import type { Metadata } from "next";
import { Fira_Code, Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/utils/redux/Providers";
import UpScroller from "@/components/UpScroller";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THink",
  description: "A Blog designed by creator sohail ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ReduxProvider>
          <Header />
          <main className="flex-1">
          {children}
          </main>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <UpScroller/>
        </ReduxProvider>
      </body>
    </html>
  );
}
