import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//context Provider
import { TodoProvider } from "../Context/context.js";

//components
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
export const metadata = {
  title: "Context API expt Codeing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container m-auto w-2/3`}>
        <TodoProvider>
          <Nav />
          {children}
          <Footer />
        </TodoProvider>
      </body>
    </html>
  );
}
