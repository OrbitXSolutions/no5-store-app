"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Mail, Phone, Calendar, Filter } from "lucide-react"
import Image from "next/image"

const users = [
  {
    id: 1,
    name: "Fatima Al-Rashid",
    email: "fatima@email.com",
    phone: "+971 50 123 4567",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    role: "Customer",
    status: "Active",
    orders: 12,
    spent: "AED 15,420",
    joined: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Aisha Mohammed",
    email: "aisha@email.com",
    phone: "+971 55 234 5678",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    role: "Customer",
    status: "Active",
    orders: 8,
    spent: "AED 9,850",
    joined: "Mar 22, 2024",
  },
  {
    id: 3,
    name: "Maryam Hassan",
    email: "maryam@email.com",
    phone: "+971 52 345 6789",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    role: "VIP",
    status: "Active",
    orders: 24,
    spent: "AED 42,300",
    joined: "Dec 10, 2023",
  },
  {
    id: 4,
    name: "Layla Ibrahim",
    email: "layla@email.com",
    phone: "+971 54 456 7890",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    role: "Customer",
    status: "Inactive",
    orders: 3,
    spent: "AED 2,150",
    joined: "Aug 5, 2024",
  },
  {
    id: 5,
    name: "Noura Khalid",
    email: "noura@email.com",
    phone: "+971 56 567 8901",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    role: "Customer",
    status: "Active",
    orders: 6,
    spent: "AED 7,890",
    joined: "Jun 18, 2024",
  },
  {
    id: 6,
    name: "Sara Al-Ali",
    email: "sara@email.com",
    phone: "+971 58 678 9012",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
    role: "VIP",
    status: "Active",
    orders: 18,
    spent: "AED 28,650",
    joined: "Feb 28, 2024",
  },
]

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Users</h1>
          <p className="text-zinc-500">Manage your customer accounts</p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white border-zinc-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search users..."
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

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="bg-white border-zinc-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-zinc-100">
                    <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">{user.name}</h3>
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                        user.role === "VIP" ? "bg-amber-100 text-amber-700" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuItem>View Orders</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joined}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Orders</p>
                  <p className="font-semibold text-zinc-900">{user.orders}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Total Spent</p>
                  <p className="font-semibold text-zinc-900">{user.spent}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    user.status === "Active" ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
