"use client"

import Link from "next/link"
import { Mail, Phone, MessageSquare, Home as HomeIcon, ChevronLeft } from "lucide-react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

export default function Contact() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 px-6 py-8">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">&larr; กลับหน้าแรก</Link>
            </div>

            <section>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                ติดต่อเรา
              </h1>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                หากคุณมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อเราได้หลายช่องทาง:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">อีเมล</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">support@kivexstore.com</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">โทรศัพท์</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">02-XXX-XXXX</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">แชทสด</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">แชทในเว็บไซต์</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HomeIcon className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">เฟซบุ๊ก</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Kivex Store</p>
                </div>
              </div>
            </section>

            <div className="flex justify-start mt-12">
              <Button asChild variant="outline">
                <Link href="/return-policy">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  ก่อนหน้า
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
