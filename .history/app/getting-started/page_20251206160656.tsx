"use client"

import Link from "next/link"
import { Search, FileText, Zap, ShoppingCart, CreditCard, RotateCcw, Mail, Phone, MessageSquare, Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react"

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
import { Button } from "@/components/ui/button"
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
    title: "วิธีการช้อปปิ้ง",
    url: "/shopping-methods",
    icon: ShoppingCart,
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
    url: "/return-policy",
    icon: RotateCcw,
  },
  {
    title: "ติดต่อเรา",
    url: "/contact",
    icon: Phone,
  },
]

