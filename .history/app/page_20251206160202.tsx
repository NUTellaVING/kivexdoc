"use client"

import * as React from "react"
import { Search, FileText, Zap, ShoppingCart, CreditCard, RotateCcw, Mail, Phone, MessageSquare, Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  {
    title: "หน้าแรก",
    url: "#home",
    icon: Home,
  },
  {
    title: "บทนำ",
    url: "#introduction",
    icon: FileText,
  },
  {
    title: "การเริ่มใช้งาน",
    url: "#getting-started",
    icon: Zap,
  },
  {
    title: "วิธีการช้อปปิ้ง",
    url: "#shopping-methods",
    icon: ShoppingCart,
  },
  {
    title: "การชำระเงินและจัดส่ง",
    url: "#payment-shipping",
    icon: CreditCard,
  },
  {
    title: "นโยบายการคืนสินค้า",
    url: "#return-policy",
    icon: RotateCcw,
  },
  {
    title: "ติดต่อเรา",
    url: "#contact",
    icon: Phone,
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <h2 className="text-lg font-semibold">Kivex Store</h2>
              <ThemeToggle />
            </div>
            <div className="px-2 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="ค้นหา..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 px-6 py-8">
          <SidebarTrigger className="mb-4" />
          <div className="max-w-4xl mx-auto">
            <header className="mb-12" id="home">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Kivex Store ข้อมูลและวิธีการใช้งาน
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                คู่มือการใช้งานสำหรับผู้ใช้อ้างอย่างครบถ้วน
              </p>
            </header>

            <main className="space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              <li>📞 โทรศัพท์: 02-XXX-XXXX</li>
              <li>💬 แชทสด: แชทในเว็บไซต์</li>
              <li>📱 เฟซบุ๊ก: Kivex Store</li>
            </ul>
          </section>
        </main>

        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 Kivex Store. สงวนลิขสิทธิ์ทุกประการ.</p>
        </footer>
      </div>
    </div>
  );
}
