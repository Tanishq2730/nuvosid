import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ClientLoader from "@/components/Loader/ClientLoader";

export const metadata = {
  title: "Nuvosid | Architecture, Engineering & Construction",
  description: "Dark-themed AEC company website for Nuvosid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientLoader />
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

