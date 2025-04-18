"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function TranquilHome() {
  const [showCheckIn, setShowCheckIn] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [totalQuestions] = useState(5)
  const [activeTab, setActiveTab] = useState("home")
  const isMobile = useMediaQuery("(max-width: 640px)")

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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </a>
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
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>Resources</span>
          </a>
        </nav>

        {/* Quick Status */}
        <div className="flex-1">
          <h3 className="text-xs font-medium uppercase text-gray-500 mb-4">Quick Status</h3>
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

          {/* Title */}
          <div className="text-sm font-medium">Mindfulness Copilot</div>

          {/* Right section */}
          <div className="flex items-center gap-4">
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
                              A 30-minute mindfulness session is scheduled for 3:00 PM. Past participants saw 15% better
                              focus.
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
          </div>

          {/* Right Sidebar - Copilot */}
          <div className="hidden lg:block w-[300px] border-l flex flex-col h-full">
            <div className="flex flex-col h-full">
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

              {/* Input Area - with more spacing */}
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

              {/* Suggestions & Insights - with clear separation */}
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
                        Your productivity seems highest between 9-11 AM. Consider scheduling important tasks during this
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
