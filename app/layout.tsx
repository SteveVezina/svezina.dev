import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
const geist=Geist({subsets:["latin"],variable:"--font-geist"}); const mono=Geist_Mono({subsets:["latin"],variable:"--font-mono"});
export const metadata:Metadata={metadataBase:new URL("https://svezina.dev"),title:{default:"svezina.dev",template:"%s · svezina.dev"},description:"Notes on agent infrastructure, distributed systems, and the infrastructure behind AI.",alternates:{canonical:"/",types:{"application/rss+xml":"/rss.xml"}}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${geist.variable} ${mono.variable}`}><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
