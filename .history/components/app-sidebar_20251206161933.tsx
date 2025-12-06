"use client"

import { Search, FileText, Zap, ShoppingCart, CreditCard, RotateCcw, Mail, Phone, MessageSquare, Home as HomeIcon, ChevronRight } from "lucide-react"
import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  {
    title: "หน้าแรก",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "บทนำ",
    url: "/introduction",
    icon: FileText,
  },
  {
    title: "การเริ่มใช้งาน",
    url: "/getting-started",
    icon: Zap,
  },
  {
    title: "การชำระเงินและจัดส่ง",
    url: "/payment-shipping",
    icon: CreditCard,
  },
  {
    title: "วิธีการชำระเงิน",
    url: "/payment-methods",
    icon: CreditCard,
  },
  {
    title: "นโยบายการคืนสินค้า",
  },
  {
    title: "ติดต่อเรา",
    url: "/contact",
    icon: Phone,
  },
]

export function AppSidebar() {
  return (
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
  )
}
