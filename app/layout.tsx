import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Docs, Facebook, Github, Times } from "./icons";
import { Twitter } from "./icons";
import { Discord } from "./icons";
import { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishal Khadka",
  description:
    "welcome my friend",
  openGraph: { images: ["/bishal.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
            <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
              <Image
                src="/bishal.png"
                alt="bishal Logo"
                width={150}
                height={32}
                priority
              />
              
            </Link>
            <div className="grow" />
            <SignedIn>
              <div className="hidden sm:block">
                <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
              </div>
              <div className="block sm:hidden">
                <OrganizationSwitcher
                  afterCreateOrganizationUrl="/dashboard"
                  appearance={{
                    elements: {
                      organizationSwitcherTriggerIcon: `hidden`,
                      organizationPreviewTextContainer: `hidden`,
                      organizationSwitcherTrigger: `pr-0`,
                    },
                  }}
                />
              </div>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <main className="grow">{children}</main>
          <footer className="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
            <Image
              src="/bishal.png"
              alt="bishal  Logo"
              width={150}
              height={100}
              priority
            />
            <span className="text-sm"></span>
            <nav className="flex justify-end grow sm:gap-2">
              <a
                className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
                href="https://www.facebook.com/profile.php?id=100086984447908"
              >
                <div className="m-auto">
                  <Docs />
                </div>
                <span className="hidden sm:inline"> View BishaL Profile</span>
                <span className="inline sm:hidden"> Contact</span>
              </a>
              <a
                className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
                href="https://www.facebook.com/profile.php?id=100086984447908"
              >
                <div className="m-auto">
                  <Facebook />
                </div>
                <span className="hidden sm:inline"> View on Facebook</span>
              </a>
              
              
            </nav>
          </footer>
        </body>
      </ClerkProvider>

      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}
