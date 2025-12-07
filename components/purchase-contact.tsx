"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PurchaseContact() {
  return (
    <div className="mt-8 space-y-4">
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
          การเริ่มใช้งาน Kivex Store คุณสามารถติดต่อผ่านเพจ Facebook "Kivex store" เพื่อขอเป็นการสั่งซื้อสินค้าหรือสอบถามข้อมูลเพิ่มเติม
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link
            href="https://www.facebook.com/p/Kivex-Store-61567662266120/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            Facebook
          </Link>
        </Button>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <Link href="/products">
          <Button variant="outline">
            กลับไปหน้ารายการสินค้า
          </Button>
        </Link>
        <Link href="/contact">
          <Button>
            ติดต่อเรา
          </Button>
        </Link>
      </div>
    </div>
  )
}