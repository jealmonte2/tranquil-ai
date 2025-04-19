"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import {
  Bell,
  MessageCircle,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Lightbulb,
  AlertTriangle,
  Award,
  X,
  Send,
  Play,
  Home,
  TrendingUp,
  Filter,
  ChevronDown,
  Users,
  AlertCircle,
  ChevronUp,
  Search,
  ChevronRightIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useMediaQuery } from "@/hooks/use-mobile"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TranquilApp({ isManagerView = false }) {
  const [showCheckIn, setShowCheckIn] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [totalQuestions] = useState(5)
  const [activePage, setActivePage] = useState("home")
  const [activeManagerTab, setActiveManagerTab] = useState("team")
  const [selectedTeamMember, setSelectedTeamMember] = useState("Jamie Smith")
  const [expandedTeamMember, setExpandedTeamMember] = useState(null)
  // Change the mobile breakpoint from 640px to 768px to make it trigger earlier
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isManagerViewInternal, setIsManagerView] = useState(isManagerView) // Added state for manager view
  const { signOut, profile, user } = useAuth()

  // Get the first letter of the first name or email for the avatar
  const getInitial = () => {
    if (profile?.first_name) {
      return profile.first_name.charAt(0).toUpperCase()
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return "U"
  }

  // Get the display name
  const getDisplayName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`
    }
    if (profile?.full_name) {
      return profile.full_name
    }
    if (user?.email) {
      // Return email without the domain part
      return user.email.split("@")[0]
    }
    return "User"
  }

  const handleCheckInClick = () => {
    setShowCheckIn(true)
  }

  const handleNextClick = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowCheckIn(false)
    }
  }

  const handleCloseClick = () => {
    setShowCheckIn(false)
  }

  const navigateToHome = () => {
    setActivePage("home")
  }

  const navigateToResources = () => {
    setActivePage("resources")
  }

  // Update the toggleManagerView function to use navigation instead of state
  const toggleManagerView = () => {
    if (isManagerView) {
      window.location.href = "/" // Go to employee view
    } else {
      window.location.href = "/?view=manager" // Go to manager view
    }
  }

  const selectTeamMember = (name) => {
    setSelectedTeamMember(name)
  }

  const toggleExpandTeamMember = (name) => {
    if (expandedTeamMember === name) {
      setExpandedTeamMember(null)
    } else {
      setExpandedTeamMember(name)
    }
  }

  // Manager dashboard data
  const teamMembers = [
    {
      name: "Rehan Mahmood",
      role: "Software Engineer",
      score: 75,
      trend: "up",
      workloadCapacity: 85,
      teamConnection: 62,
      resourceStatus: "Some resources missing",
      lastCheckIn: "2 days ago",
      insights: null,
    },
    {
      name: "Taylor Reed",
      role: "Software Engineer",
      score: 83,
      trend: "up",
      workloadCapacity: 65,
      teamConnection: 88,
      resourceStatus: "Fully equipped",
      lastCheckIn: "1 day ago",
      insights: null,
    },
    {
      name: "Jamie Smith",
      role: "Software Engineer",
      score: 58,
      trend: "down",
      workloadCapacity: 90,
      teamConnection: 45,
      resourceStatus: "Significant gaps",
      lastCheckIn: "5 days ago",
      insights: {
        type: "Workload Concerns",
        details: ["90% workload capacity", "Low team connection (45%)", "Resource gaps reported"],
        recommendation: "Schedule a 1:1 to discuss workload distribution and resource needs",
      },
    },
    {
      name: "Morgan Lee",
      role: "Software Engineer",
      score: 75,
      trend: "up",
      workloadCapacity: 65,
      teamConnection: 88,
      resourceStatus: "Fully equipped",
      lastCheckIn: "1 day ago",
      insights: {
        type: "Wellbeing Strengths",
        details: ["65% workload capacity", "High team connection (88%)", "No resource gaps reported"],
        recommendation: "None",
      },
    },
    {
      name: "Casey Wong",
      role: "Software Engineer",
      score: 76,
      trend: "down",
      workloadCapacity: 85,
      teamConnection: 62,
      resourceStatus: "Some resources missing",
      lastCheckIn: "2 days ago",
      insights: null,
    },
  ]

  // Use the isManagerView prop instead of the internal state
  if (isManagerView) {
    // Mobile Manager View
    if (isMobile) {
      return (
        <div className="flex flex-col h-screen bg-white">
          {/* Mobile Header */}
          <header className="h-14 border-b flex items-center justify-between px-4">
            <Menu className="h-5 w-5 text-gray-500" />
            <div className="text-base font-medium">Manager Dashboard</div>
            <Search className="h-5 w-5 text-gray-500" />
          </header>

          {/* Mobile Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeManagerTab === "team" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveManagerTab("team")}
            >
              Team
            </button>
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeManagerTab === "insights" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveManagerTab("insights")}
            >
              Insights
            </button>
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeManagerTab === "actions" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveManagerTab("actions")}
            >
              Actions
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 overflow-auto p-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-600">Avg Well Being Score</div>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">75</div>
                  <div className="text-xs text-green-600 ml-1 flex items-center">
                    <ChevronUp size={12} />
                    2%
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-600">High Workload</div>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-xs text-gray-500 ml-1">members</div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-600">Resource Gaps</div>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-xs text-gray-500 ml-1">members</div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-medium">Team Members</h2>
                <button className="flex items-center text-xs text-gray-600">
                  <Filter size={14} className="mr-1" />
                  Filter
                </button>
              </div>

              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.name} className="bg-white rounded-lg shadow-sm">
                    <div
                      className="p-3 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleExpandTeamMember(member.name)}
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <div className="font-medium text-sm">{member.name}</div>
                          <div className="text-xs text-gray-500">{member.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="font-medium text-sm mr-1">{member.score}</div>
                        {member.trend === "up" ? (
                          <ChevronUp size={16} className="text-green-500" />
                        ) : (
                          <ChevronDown size={16} className="text-red-500" />
                        )}
                        <ChevronRightIcon
                          size={16}
                          className={`ml-2 text-gray-400 transition-transform ${
                            expandedTeamMember === member.name ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {expandedTeamMember === member.name && (
                      <div className="px-3 pb-3 border-t pt-3">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Workload</div>
                            <div className="w-full">
                              <Progress
                                value={member.workloadCapacity}
                                className="h-2"
                                style={{
                                  background: "#e5e7eb",
                                  "--progress-background": member.workloadCapacity > 80 ? "#ef4444" : "#22c55e",
                                }}
                              />
                              <div className="text-xs text-red-500 mt-1">{member.workloadCapacity}% Capacity</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Resources</div>
                            <div className="text-xs text-yellow-500">{member.resourceStatus}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Team Connection</div>
                            <div className="w-full">
                              <Progress
                                value={member.teamConnection}
                                className="h-2"
                                style={{
                                  background: "#e5e7eb",
                                  "--progress-background": "#3b82f6",
                                }}
                              />
                              <div className="text-xs text-blue-500 mt-1">{member.teamConnection}% Connected</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Last Check-in</div>
                            <div className="text-xs">{member.lastCheckIn}</div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button className="text-xs text-blue-600">View details</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Desktop Manager View
    return (
      <div className="flex h-screen bg-white">
        {/* Left Sidebar */}
        <div className="w-[240px] border-r flex-col p-6 flex">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img src="/tranquil-icon.png" alt="Tranquil" className="h-8 w-8" />
            <span className="font-semibold text-xs">Manager Dashboard</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 mb-8">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-md"
              onClick={(e) => {
                e.preventDefault()
                setIsManagerView(true)
              }}
            >
              <Home size={16} />
              <span className="text-xs">Dashboard Overview</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md"
              onClick={(e) => {
                e.preventDefault()
                // Use a query parameter to indicate we want to show insights
                window.location.href = "/?view=insights"
              }}
            >
              <TrendingUp size={16} />
              <span className="text-xs">Insights & Trends</span>
            </a>
          </nav>

          {/* User Profile */}
          <div className="pt-6 border-t">
            <div className="flex items-center gap-3 cursor-pointer" onClick={toggleManagerView}>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">S</span>
              </div>
              <div>
                <div className="font-medium text-sm">Sam Wilson</div>
                <div className="text-xs text-gray-500">Engineering Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content Area */}
          <div className="flex-1 overflow-auto bg-[#f8fafb] p-6">
            {/* Page Title - moved from header */}
            <div className="mb-6">
              <h1 className="font-semibold">Dashboard Overview</h1>
              <p className="text-xs text-gray-500">Your team's Well-Being at a Glance</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">Average Mindfulness Score</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">75</div>
                  <div className="text-xs text-green-600 pb-1 flex items-center">
                    <ChevronUp size={14} />
                    +3
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">High Workload Concerns</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">2</div>
                  <div className="flex items-center text-sm text-gray-600 pb-1">
                    <Users size={14} className="mr-1" />
                    team members
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">Resource Gaps Reported</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">3</div>
                  <div className="flex items-center text-sm text-gray-600 pb-1">
                    <Users size={14} className="mr-1" />
                    team members
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Table */}
            <div className="bg-white rounded-lg border mb-8">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-semibold">Team Members Mindfulness</h2>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter size={14} />
                    Filter
                  </Button>
                  <div className="flex items-center gap-1 text-sm">
                    Sort by: Well Being Score
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 border-b">
                      <th className="p-4 font-medium">Team Member</th>
                      <th className="p-4 font-medium">Score</th>
                      <th className="p-4 font-medium">Workload</th>
                      <th className="p-4 font-medium">Team Connection</th>
                      <th className="p-4 font-medium">Resource Status</th>
                      <th className="p-4 font-medium">Last Check-In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member) => (
                      <tr
                        key={member.name}
                        className="border-b hover:bg-gray-50 cursor-pointer"
                        onClick={() => selectTeamMember(member.name)}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-xs text-gray-500">{member.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{member.score}</span>
                            {member.trend === "up" ? (
                              <ChevronUp size={16} className="text-green-500" />
                            ) : (
                              <ChevronDown size={16} className="text-red-500" />
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="w-32">
                            <Progress
                              value={member.workloadCapacity}
                              className="h-2 bg-gray-200"
                              style={{
                                background: "#e5e7eb",
                                "--progress-background": member.workloadCapacity > 80 ? "#ef4444" : "#22c55e",
                              }}
                            />
                            <div className="text-xs text-gray-500 mt-1">{member.workloadCapacity}% Capacity</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="w-32">
                            <Progress
                              value={member.teamConnection}
                              className="h-2"
                              style={{
                                background: "#e5e7eb",
                                "--progress-background": "#3b82f6",
                              }}
                            />
                            <div className="text-xs text-gray-500 mt-1">{member.teamConnection}% Connected</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            className={`text-sm px-2 py-1 rounded-full inline-block
                              ${
                                member.resourceStatus === "Fully equipped"
                                  ? "bg-green-100 text-green-700"
                                  : member.resourceStatus === "Some resources missing"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                          >
                            {member.resourceStatus}
                          </div>
                        </td>
                        <td className="p-4 text-sm">{member.lastCheckIn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommended Manager Actions */}
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Recommended Manager Actions</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <AlertCircle size={14} />
                    </div>
                    <div className="font-medium text-sm">High Priority</div>
                  </div>
                  <p className="text-sm mb-4">Schedule 1:1 with Jamie Smith to discuss workload concerns</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Schedule now
                  </Button>
                </div>

                <div className="bg-white rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <Users size={14} />
                    </div>
                    <div className="font-medium text-sm">Medium Priority</div>
                  </div>
                  <p className="text-sm mb-4">Team connection building activity suggested for this week</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Plan Activity
                  </Button>
                </div>

                <div className="bg-white rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Award size={14} />
                    </div>
                    <div className="font-medium text-sm">Opportunity</div>
                  </div>
                  <p className="text-sm mb-4">Casey Wong has completed all wellbeing goals - recognition opportunity</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Send Recognition
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[350px] border-l flex flex-col h-full">
            {/* Header with logo and icons */}
            <div className="h-14 border-b flex items-center justify-between px-4">
              <div className="flex-1">
                <img src="/tranquil-logo.png" alt="Tranquil logo" className="h-8" />
              </div>
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-gray-500" />
                <MessageCircle className="h-5 w-5 text-gray-500" />
                <Settings className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Mindfulness Copilot */}
            <div className="flex flex-col p-4">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm">Hello! I'm your Mindfulness Copilot. How can I help you today?</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm">
                    I noticed you have several back-to-back meetings this afternoon. Would you like me to suggest some
                    short breaks between them?
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="w-full border rounded-full py-2 px-4 pr-10 text-sm"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <Send className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member Insights */}
            <div className="p-4 border-t">
              <h2 className="font-semibold mb-4">Team Member Insights</h2>
              <div className="overflow-y-auto h-[300px]">
                {teamMembers.find((m) => m.name === selectedTeamMember)?.insights ? (
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">{selectedTeamMember.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium">{selectedTeamMember}</div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">
                              {teamMembers.find((m) => m.name === selectedTeamMember)?.score}
                            </span>
                            {teamMembers.find((m) => m.name === selectedTeamMember)?.trend === "up" ? (
                              <ChevronUp size={16} className="text-green-500" />
                            ) : (
                              <ChevronDown size={16} className="text-red-500" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div
                          className={`flex items-center gap-2 mb-2 text-sm
                            ${
                              teamMembers.find((m) => m.name === selectedTeamMember)?.insights?.type ===
                              "Workload Concerns"
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                        >
                          {teamMembers.find((m) => m.name === selectedTeamMember)?.insights?.type ===
                          "Workload Concerns" ? (
                            <AlertCircle size={14} />
                          ) : (
                            <Award size={14} />
                          )}
                          {teamMembers.find((m) => m.name === selectedTeamMember)?.insights?.type}
                        </div>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          {teamMembers
                            .find((m) => m.name === selectedTeamMember)
                            ?.insights?.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Recommendation:</div>
                        <p className="text-sm text-gray-700">
                          {teamMembers.find((m) => m.name === selectedTeamMember)?.insights?.recommendation}
                        </p>
                      </div>
                    </div>

                    {/* Additional example employee card */}
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">T</span>
                        </div>
                        <div>
                          <div className="font-medium">Taylor Reed</div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">76</span>
                            <ChevronDown size={16} className="text-red-500" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2 text-sm text-yellow-600">
                          <AlertCircle size={14} />
                          Resource Concerns
                        </div>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>85% workload capacity</li>
                          <li>Some resources missing</li>
                          <li>Decreased team connection (62%)</li>
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Recommendation:</div>
                        <p className="text-sm text-gray-700">
                          Check in about resource needs and provide additional support for current projects
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg border p-4 flex items-center justify-center h-[200px] text-gray-500">
                    Select a team member with insights to view details
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Employee view JSX
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex w-[240px] border-r flex-col p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src="/tranquil-icon.png" alt="Tranquil" className="h-8 w-8" />
        </div>

        {/* Navigation */}
        <nav className="space-y-1 mb-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigateToHome()
            }}
            className={`flex items-center gap-2 ${
              activePage === "home" ? "text-blue-600 bg-blue-50" : "text-gray-600"
            } px-3 py-2 rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs">Home</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigateToResources()
            }}
            className={`flex items-center gap-2 ${
              activePage === "resources" ? "text-blue-600 bg-blue-50" : "text-gray-600"
            } px-3 py-2 rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="text-xs">Resources</span>
          </a>
        </nav>

        {/* Quick Status */}
        <div className="flex-1">
          <h3 className="text-xs font-medium uppercase text-gray-500 mb-4">QUICK STATUS</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Mindfulness Score</span>
                <span>76/100</span>
              </div>
              <Progress value={76} className="h-1" />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Focus Time</span>
                <span>3h 20m</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Break Time</span>
                <span>45m</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Meetings</span>
                <span>3 Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="pt-6 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">{getInitial()}</span>
                </div>
                <div>
                  <div className="font-medium text-sm">{getDisplayName()}</div>
                  <div className="text-xs text-gray-500">{profile?.role || "Software Engineer"}</div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <Link href="/profile" legacyBehavior passHref>
                <DropdownMenuItem className="cursor-pointer">Edit Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={toggleManagerView} className="cursor-pointer">
                Switch to Manager View
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation()
                  signOut()
                }}
                className="cursor-pointer text-red-600"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header - Only visible on mobile */}
        {isMobile && (
          <header className="h-14 border-b flex items-center justify-between px-6 lg:hidden">
            <button className="lg:hidden">
              <Menu className="h-5 w-5 text-gray-500" />
            </button>
            <img src="/tranquil-logo.png" alt="Tranquil logo" className="h-6" />
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <MessageCircle className="h-5 w-5 text-gray-500" />
              <Settings className="h-5 w-5 text-gray-500" />
            </div>
          </header>
        )}

        {/* Mobile Navigation Tabs - only visible on mobile */}
        {isMobile && (
          <div className="flex border-b lg:hidden">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activePage === "home" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={navigateToHome}
            >
              Home
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activePage === "resources" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={navigateToResources}
            >
              Resources
            </button>
          </div>
        )}

        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area - No header */}
          <div className={`flex-1 overflow-auto bg-[#f8fafb] ${isMobile ? "pb-16" : ""}`}>
            {activePage === "home" ? (
              <div className="max-w-[1200px] mx-auto px-6 py-8">
                {!showCheckIn ? (
                  <>
                    {/* Page Title */}
                    <div className="mb-6">
                      <h1 className="text-lg font-semibold">Home</h1>
                      <p className="text-sm text-gray-500">Welcome to Your Well-Being Hub</p>
                    </div>

                    {/* Check-in Banner */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="font-medium mb-1">Your biweekly mindfulness check-in is due</h2>
                          <p className="text-sm text-gray-600">
                            Help us understand how you're doing and what support you need.
                          </p>
                        </div>
                        <Button onClick={handleCheckInClick} className="bg-blue-600 hover:bg-blue-700">
                          Check-in
                        </Button>
                      </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Today's Schedule */}
                      <div className="p-6 bg-white rounded-xl">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="font-medium">Today's Schedule</h2>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              <ChevronLeft className="h-4 w-4 cursor-pointer text-gray-400" />
                              <span>March 3-9</span>
                              <ChevronRight className="h-4 w-4 cursor-pointer text-gray-400" />
                            </div>
                            <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                              View all
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {[
                            { time: "11:30 AM", duration: "30m", title: "Team Standup" },
                            { time: "1:00 PM", duration: "1h", title: "Lunch Break" },
                            { time: "2:30 PM", duration: "1h", title: "Product Review" },
                          ].map((item) => (
                            <div key={item.time} className="flex items-center justify-between group cursor-pointer">
                              <div className="flex gap-6">
                                <div>
                                  <div className="text-sm font-medium">{item.time}</div>
                                  <div className="text-xs text-gray-500">{item.duration}</div>
                                </div>
                                <div className="text-sm">{item.title}</div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Schedule Recommendations */}
                      <div className="p-6 bg-white rounded-xl">
                        <h2 className="font-medium mb-6">Schedule Recommendations</h2>
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-start gap-3 mb-2">
                              <Clock className="h-4 w-4 text-gray-400 mt-1" />
                              <div className="flex-1">
                                <p className="text-sm mb-1">
                                  You have 3 back-to-back meetings this afternoon. Consider adding a 15-minute break.
                                </p>
                                <div className="flex justify-between items-center">
                                  <div className="text-xs text-gray-500">3:30 PM - 5:45 PM</div>
                                  <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                                    Add to schedule
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start gap-3 mb-2">
                              <Clock className="h-4 w-4 text-gray-400 mt-1" />
                              <div className="flex-1">
                                <p className="text-sm mb-1">
                                  Your productivity seems highest between 9-11 AM. Consider scheduling important tasks
                                  during this time.
                                </p>
                                <div className="flex justify-between items-center">
                                  <div className="text-xs text-gray-500">9:30 AM - 11:00 AM</div>
                                  <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                                    Add to schedule
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Your Goals & Tasks */}
                      <div className="p-6 bg-white rounded-xl">
                        <h2 className="font-medium mb-6">Your Goals & Tasks</h2>
                        <div className="space-y-4">
                          {[
                            {
                              title: "Complete project proposal for client meeting",
                              status: "Due tomorrow",
                              color: "text-amber-600",
                            },
                            { title: "Review team's quarterly goals", status: "In progress", color: "text-green-600" },
                            { title: "Finish Copilot wireframes", status: "Due today", color: "text-red-600" },
                          ].map((task, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1 rounded border-gray-300" />
                              <div>
                                <div className="text-sm">{task.title}</div>
                                <div className={`text-xs ${task.color}`}>{task.status}</div>
                              </div>
                            </div>
                          ))}
                          <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                            + Add new task
                          </Button>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="p-6 bg-white rounded-xl">
                        <h2 className="font-medium mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-6">
                          {[
                            { icon: Calendar, label: "Schedule a break" },
                            { icon: MessageCircle, label: "Start focus session" },
                            { icon: Clock, label: "Block focus time" },
                            { icon: Lightbulb, label: "Wellness resources" },
                          ].map((action, i) => (
                            <button key={i} className="flex flex-col items-center justify-center gap-2 py-4">
                              <action.icon className="h-5 w-5 text-gray-600" />
                              <span className="text-sm text-center">{action.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recommended Actions */}
                    <div className="mt-6">
                      <h2 className="font-medium mb-6">Recommended Actions</h2>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="border rounded-xl p-6 bg-white">
                          <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                              <AlertTriangle className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium text-red-600">High Priority</div>
                              </div>
                              <p className="text-sm mt-2">
                                Your workload has been at 90% capacity for the past 2 weeks. Request 1:1 with Sam Wilson
                                to manage workload.
                              </p>
                              <Button variant="outline" className="mt-4 h-8 text-sm w-full justify-center">
                                Schedule now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded-xl p-6 bg-white">
                          <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                              <Clock className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="px-2 py-0.5 rounded bg-amber-50 text-amber-600 text-xs font-medium">
                                  Medium Priority
                                </div>
                              </div>
                              <p className="text-sm mt-2">
                                Team members who take breaks are 22% more productive. You have 3 back-to-back meetings
                                tomorrow.
                              </p>
                              <Button variant="outline" className="mt-4 h-8 text-sm w-full justify-center">
                                Plan Activity
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded-xl p-6 bg-white">
                          <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <Award className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-xs font-medium">
                                  Opportunity
                                </div>
                              </div>
                              <p className="text-sm mt-2">
                                A 30-minute mindfulness session is scheduled for 3:00 PM. Past participants saw 15%
                                better focus.
                              </p>
                              <Button variant="outline" className="mt-4 h-8 text-sm w-full justify-center">
                                Send Recognition
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    {/* Check-in form content */}
                    <div className="max-w-2xl mx-auto">
                      <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-semibold">Biweekly Mindfulness Check-in</h1>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-gray-500">
                            Questions {currentQuestion} of {totalQuestions}
                          </div>
                          <Button variant="ghost" size="icon" onClick={handleCloseClick}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h2 className="text-lg font-medium mb-2">
                            How would you describe your workload capacity this week?
                          </h2>
                          <p className="text-sm text-gray-500">
                            Your responses help us provide better support and resources.
                          </p>
                        </div>

                        <RadioGroup defaultValue="comfortable" className="space-y-3">
                          <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="comfortable" id="comfortable" />
                            <Label htmlFor="comfortable" className="flex-1 cursor-pointer">
                              Comfortable with current workload
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="managing" id="managing" />
                            <Label htmlFor="managing" className="flex-1 cursor-pointer">
                              Managing, but at capacity
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="approaching" id="approaching" />
                            <Label htmlFor="approaching" className="flex-1 cursor-pointer">
                              Approaching overload
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="prefer" id="prefer" />
                            <Label htmlFor="prefer" className="flex-1 cursor-pointer">
                              Prefer not to answer
                            </Label>
                          </div>
                        </RadioGroup>

                        <div className="flex justify-end">
                          <Button onClick={handleNextClick} className="bg-blue-600 hover:bg-blue-700">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-w-[1200px] mx-auto px-6 py-8">
                {/* Page Title */}
                <div className="mb-8">
                  <h1 className="text-lg font-semibold">Resources</h1>
                  <p className="text-sm text-gray-500">Guides & Tools for a Healthier Worklife</p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                  {/* Left Column */}
                  <div className="bg-white border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-6">Popular with your team</h2>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-sm mb-1">Breathing exercise: 4-7-8 Technique</h3>
                            <p className="text-xs text-gray-500">2m • used by 8 team members</p>
                          </div>
                          <Button size="sm" className="bg-[#345fdd] hover:bg-[#1e55df]">
                            Start
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-sm mb-1">Focus Booster</h3>
                            <p className="text-xs text-gray-500">5m • used by 4 team members</p>
                          </div>
                          <Button size="sm" className="bg-[#345fdd] hover:bg-[#1e55df]">
                            Start
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-sm mb-1">Quick Desk Stretch</h3>
                            <p className="text-xs text-gray-500">3m • used by 12 team members</p>
                          </div>
                          <Button size="sm" className="bg-[#345fdd] hover:bg-[#1e55df]">
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="bg-white border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-2">Daily Stress Management Checklist</h2>
                    <p className="text-sm text-gray-500 mb-6">
                      Simple daily checklist to manage work stress effectively
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div className="text-sm">Schedule 5-minute break every 90 minutes</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div className="text-sm">Identify 3 priorities for the day</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div className="text-sm">Do breathing exercise</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div className="text-sm">Take a 15-minute walk outside</div>
                      </div>
                      <div className="text-xs text-gray-500">+ 4 more items</div>
                    </div>
                    <div className="mt-4">
                      <Button variant="link" className="text-[#345fdd] p-0 h-auto text-sm">
                        + Add new task
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mindfulness Audios */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-2">Mindfulness Audios</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Practice mindfulness, improve focus, and enhance well-being.
                  </p>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <div>
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Green hills visualization"
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-xs">♪</span>
                          </div>
                        </div>
                        <h3 className="font-medium text-sm mb-1">Work better with Focus Sounds</h3>
                        <p className="text-xs text-gray-500 mb-4">Learn to manage stress with practical guidance.</p>
                        <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1 w-20 justify-center">
                          <Play className="h-4 w-4" />
                          <span>Play</span>
                        </button>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <div>
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Ocean waves visualization"
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 text-xs">♪</span>
                          </div>
                        </div>
                        <h3 className="font-medium text-sm mb-1">Stressed</h3>
                        <p className="text-xs text-gray-500 mb-4">Background audio to improve concentration.</p>
                        <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1 w-20 justify-center">
                          <Play className="h-4 w-4" />
                          <span>Play</span>
                        </button>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <div>
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Forest path visualization"
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 text-xs">♪</span>
                          </div>
                        </div>
                        <h3 className="font-medium text-sm mb-1">Guided Breathing</h3>
                        <p className="text-xs text-gray-500 mb-4">Relax and refocus with guided breathing.</p>
                        <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1 w-20 justify-center">
                          <Play className="h-4 w-4" />
                          <span>Play</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Copilot - with header */}
          <div className="hidden lg:flex w-[300px] border-l flex-col h-full">
            <div className="flex flex-col h-full">
              {/* Header for right sidebar */}
              <div className="h-14 border-b p-4 flex items-center justify-between">
                <div className="flex-1">
                  <img src="/tranquil-logo.png" alt="Tranquil logo" className="h-8" />
                </div>
                <div className="flex items-center gap-4">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <MessageCircle className="h-5 w-5 text-gray-500" />
                  <Settings className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-6 overflow-auto">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm">Hello! I'm your Mindfulness Copilot. How can I help you today?</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm">
                      I noticed you have several back-to-back meetings this afternoon. Would you like me to suggest some
                      short breaks between them?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 pt-0 mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="w-full border rounded-full py-2 px-4 pr-10 text-sm"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <Send className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Suggestions & Insights */}
              <div className="p-6 border-t mt-2">
                <h3 className="text-sm font-medium mb-4">Suggestions & Insights</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs">
                        Your calendar has 3 back-to-back meetings tomorrow. Consider adding breaks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs">
                        Your productivity seems highest between 9-11AM. Consider scheduling important tasks during this
                        time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Copilot - Fixed at bottom of screen on mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex items-center gap-2 z-10">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 border rounded-full py-2 px-4 text-sm"
          />
          <button className="bg-blue-600 rounded-full p-2">
            <Send className="h-4 w-4 text-white" />
          </button>
        </div>
      )}
    </div>
  )
}
