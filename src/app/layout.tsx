import "~/styles/globals.css";

import { Inter } from "next/font/google";
import PageHeader from "@components/pageHeader";
import { ApolloWrapper } from "./ApolloWrapper";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Gazeta Esportiva Demo with DreamFactory API",
  description: "Gazeta Esportiva Demo with DreamFactory API",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ApolloWrapper>
          <PageHeader />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
