import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Nuvosid | Architecture, Engineering & Construction",
  description: "Dark-themed AEC company website for Nuvosid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

