"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  Filter,
  Download,
  Eye,
  Truck,
  Package,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react"
import Image from "next/image"

const orders = [
  {
    id: "ORD-2024-001",
    customer: {
      name: "Fatima Al-Rashid",
      email: "fatima@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    items: [
      {
        name: "Elegant Black Silk Abaya",
        quantity: 1,
        price: "AED 1,299",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&h=100&fit=crop",
      },
    ],
    total: "AED 1,299",
    status: "Delivered",
    paymentStatus: "Paid",
    date: "Dec 2, 2025",
    shippingAddress: "Dubai Marina, Tower 5, Apt 1204",
  },
  {
    id: "ORD-2024-002",
    customer: {
      name: "Aisha Mohammed",
      email: "aisha@email.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    items: [
      {
        name: "Pearl Embellished Abaya",
        quantity: 1,
        price: "AED 1,599",
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop",
      },
      {
        name: "Gold Sequins Evening",
        quantity: 1,
        price: "AED 2,199",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=100&h=100&fit=crop",
      },
    ],
    total: "AED 3,798",
    status: "Shipped",
    paymentStatus: "Paid",
    date: "Dec 1, 2025",
    shippingAddress: "Abu Dhabi, Corniche Road, Villa 45",
  },
  {
    id: "ORD-2024-003",
    customer: {
      name: "Maryam Hassan",
      email: "maryam@email.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    items: [
      {
        name: "Beige Summer Collection",
        quantity: 2,
        price: "AED 899",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop",
      },
    ],
    total: "AED 1,798",
    status: "Processing",
    paymentStatus: "Paid",
    date: "Nov 30, 2025",
    shippingAddress: "Sharjah, Al Nahda, Building 12",
  },
  {
    id: "ORD-2024-004",
    customer: {
      name: "Layla Ibrahim",
      email: "layla@email.com",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    },
    items: [
      {
        name: "Black Embroidered Abaya",
        quantity: 1,
        price: "AED 1,799",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&h=100&fit=crop",
      },
    ],
    total: "AED 1,799",
    status: "Pending",
    paymentStatus: "Pending",
    date: "Nov 29, 2025",
    shippingAddress: "Ajman, City Center, Apt 506",
  },
  {
    id: "ORD-2024-005",
    customer: {
      name: "Noura Khalid",
      email: "noura@email.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    items: [
      {
        name: "Navy Blue Modern Abaya",
        quantity: 1,
        price: "AED 1,199",
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop",
      },
    ],
    total: "AED 1,199",
    status: "Cancelled",
    paymentStatus: "Refunded",
    date: "Nov 28, 2025",
    shippingAddress: "RAK, Al Hamra Village",
  },
]

const statusIcons = {
  Delivered: CheckCircle,
  Shipped: Truck,
  Processing: Package,
  Pending: Clock,
  Cancelled: XCircle,
}

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-purple-100 text-purple-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = !selectedStatus || order.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const statusCounts = {
    All: orders.length,
    Pending: orders.filter((o) => o.status === "Pending").length,
    Processing: orders.filter((o) => o.status === "Processing").length,
    Shipped: orders.filter((o) => o.status === "Shipped").length,
    Delivered: orders.filter((o) => o.status === "Delivered").length,
    Cancelled: orders.filter((o) => o.status === "Cancelled").length,
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Orders</h1>
          <p className="text-zinc-500">Track and manage customer orders</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Status Tabs */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(statusCounts).map(([status, count]) => (
          <Button
            key={status}
            variant={(status === "All" && !selectedStatus) || selectedStatus === status ? "secondary" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus(status === "All" ? null : status)}
            className="flex items-center gap-2"
          >
            {status}
            <span className="bg-zinc-200 text-zinc-700 text-xs px-1.5 py-0.5 rounded-full">{count}</span>
          </Button>
        ))}
      </div>

      {/* Search */}
      <Card className="bg-white border-zinc-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const StatusIcon = statusIcons[order.status as keyof typeof statusIcons]
          return (
            <Card key={order.id} className="bg-white border-zinc-200">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-100">
                      <Image
                        src={order.customer.avatar || "/placeholder.svg"}
                        alt={order.customer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-zinc-900">{order.id}</h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                            statusColors[order.status as keyof typeof statusColors]
                          }`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600">{order.customer.name}</p>
                      <p className="text-xs text-zinc-500">{order.date}</p>
                    </div>
                  </div>

                  {/* Items Preview */}
                  <div className="flex items-center gap-2">
                    {order.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200"
                      >
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        {item.quantity > 1 && (
                          <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        )}
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <span className="text-sm text-zinc-500">+{order.items.length - 3} more</span>
                    )}
                  </div>

                  {/* Total & Actions */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-zinc-900">{order.total}</p>
                      <p
                        className={`text-xs ${
                          order.paymentStatus === "Paid"
                            ? "text-green-600"
                            : order.paymentStatus === "Refunded"
                              ? "text-red-600"
                              : "text-yellow-600"
                        }`}
                      >
                        {order.paymentStatus}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Truck className="h-4 w-4 mr-2" />
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
