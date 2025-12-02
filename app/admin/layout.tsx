"use client"

import type React from "react"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { cn } from "@/lib/utils"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-100">
      <AdminSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <div className={cn("transition-all duration-300", isCollapsed ? "lg:ml-20" : "lg:ml-64")}>
        <AdminHeader onMenuToggle={() => setIsCollapsed(!isCollapsed)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
