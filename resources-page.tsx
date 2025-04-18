"use client"

import { useState } from "react"
import { Bell, MessageCircle, Settings, Menu, Play, Send, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("resources")
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex w-[240px] border-r flex-col p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-6 w-6 text-green-600">🌱</div>
          <span className="font-semibold">Tranquil</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 mb-8">
          <a href="#" className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md">
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
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-md">
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
            <span>Resources</span>
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
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm font-medium">R</span>
            </div>
            <div>
              <div className="font-medium text-sm">Rohan Mahmood</div>
              <div className="text-xs text-gray-500">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b flex items-center justify-between px-6">
          {/* Mobile menu icon - only visible on mobile */}
          {isMobile && (
            <button className="lg:hidden">
              <Menu className="h-5 w-5 text-gray-500" />
            </button>
          )}

          {/* Logo for mobile */}
          {isMobile && (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 text-green-600">🌱</div>
              <span className="font-semibold">Tranquil</span>
            </div>
          )}

          {/* Right section */}
          <div className="flex items-center gap-4 ml-auto">
            <Bell className="h-5 w-5 text-gray-500" />
            <MessageCircle className="h-5 w-5 text-gray-500" />
            <Settings className="h-5 w-5 text-gray-500" />
          </div>
        </header>

        {/* Mobile Navigation Tabs - only visible on mobile */}
        {isMobile && (
          <div className="flex border-b">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === "home" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === "resources" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("resources")}
            >
              Resources
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content Area */}
          <div className="flex-1 overflow-auto bg-[#f8fafb]">
            <div className="max-w-[1200px] mx-auto px-6 py-8">
              {/* Page Title */}
              <div className="mb-6">
                <h1 className="text-lg font-semibold">Resources</h1>
                <p className="text-sm text-gray-500">Guides & Tools for a Healthier Worklife</p>
              </div>

              {/* Popular with your team */}
              <div className="mb-8">
                <h2 className="font-medium mb-4">Popular with your team</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm mb-1">Breathing exercise: 4-7-8 Technique</h3>
                        <p className="text-xs text-gray-500">2m • used by 8 team members</p>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Start
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm mb-1">Focus Booster</h3>
                        <p className="text-xs text-gray-500">5m • used by 4 team members</p>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Start
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm mb-1">Quick Desk Stretch</h3>
                        <p className="text-xs text-gray-500">3m • used by 12 team members</p>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Start
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mindfulness Audios */}
              <div className="mb-8">
                <h2 className="font-medium mb-2">Mindfulness Audios</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Practice mindfulness, improve focus, and enhance well-being.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-40 bg-green-100 relative">
                      <img
                        src="/placeholder.svg?height=160&width=400"
                        alt="Green hills visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1">Work better with Focus Sounds</h3>
                      <p className="text-xs text-gray-500 mb-3">Learn to manage stress with practical guidance.</p>
                      <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1">
                        <Play className="h-4 w-4" />
                        <span>Play</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-40 bg-gray-200 relative">
                      <img
                        src="/placeholder.svg?height=160&width=400"
                        alt="Ocean waves visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1">Stressed</h3>
                      <p className="text-xs text-gray-500 mb-3">Background audio to improve concentration.</p>
                      <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1">
                        <Play className="h-4 w-4" />
                        <span>Play</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-40 bg-green-200 relative">
                      <img
                        src="/placeholder.svg?height=160&width=400"
                        alt="Forest path visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1">Guided Breathing</h3>
                      <p className="text-xs text-gray-500 mb-3">Relax and refocus with guided breathing.</p>
                      <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1">
                        <Play className="h-4 w-4" />
                        <span>Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Stress Management Checklist */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-medium">Daily Stress Management Checklist</h2>
                </div>
                <p className="text-sm text-gray-500 mb-4">Simple daily checklist to manage work stress effectively</p>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-3">
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
                    <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                      + Add new task
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Copilot */}
          <div className="hidden lg:block w-[300px] border-l flex flex-col h-full">
            <div className="flex flex-col h-full">
              {/* Header with tabs */}
              <div className="flex border-b">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-500">Home</button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  Resources
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-6 overflow-auto">
                <div className="space-y-4">
                  <div className="text-sm font-medium">
                    Hello! I'm your Mindfulness Copilot. How can I help you today?
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
    </div>
  )
}
