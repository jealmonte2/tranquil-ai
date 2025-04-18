"use client"

import { useState, useEffect } from "react"
import {
  Bell,
  MessageCircle,
  Settings,
  Home,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  ChevronUp,
  ChevronDown,
  Info,
  Send,
  Award,
  AlertCircle,
  Menu,
  Search,
  Filter,
  Users,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function InsightsTrends() {
  // Initialize with "insights" as the default tab
  const [activeTab, setActiveTab] = useState("insights")
  const [selectedTeamMember, setSelectedTeamMember] = useState("Jamie Smith")
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Log when tab changes to help debug
  useEffect(() => {
    console.log("Active tab changed to:", activeTab)
  }, [activeTab])

  // Team members data
  const teamMembers = [
    {
      name: "Jamie Smith",
      role: "Software Engineer",
      score: 58,
      trend: "down",
      workloadCapacity: 90,
      teamConnection: 45,
      resourceStatus: "Significant gaps",
      lastCheckIn: "5 day ago",
      insights: {
        type: "Workload Concerns",
        details: ["90% workload capacity", "Low team connection (45%)", "Resource gaps reported"],
        recommendation: "Schedule a 1:1 to discuss workload distribution and resource needs",
      },
    },
    {
      name: "Morgan Lee",
      role: "Software Engineer",
      score: 83,
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
      trend: "up",
      workloadCapacity: 65,
      teamConnection: 95,
      resourceStatus: "Fully equipped",
      lastCheckIn: "1 day ago",
      insights: null,
    },
  ]

  const selectTeamMember = (name: string) => {
    setSelectedTeamMember(name)
  }

  // Function to render the Team tab content
  const renderTeamTab = () => (
    <>
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
            <div key={member.name} className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex items-center justify-between">
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
                  <ChevronDown size={16} className="ml-2 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )

  // Function to render the Insights tab content
  const renderInsightsTab = () => (
    <>
      {/* Team Strength Utilization */}
      <div className="bg-white rounded-lg border p-4 mb-4">
        <h2 className="font-medium text-base mb-1">Team Strength Utilization</h2>
        <p className="text-sm text-gray-600 mb-2">Team members using their strengths regularly</p>

        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold">3/5</span>
          <span className="text-sm text-gray-500 ml-2">(60%)</span>
        </div>

        <div className="space-y-3">
          <div className="bg-green-50 p-3 rounded-md flex justify-between items-center">
            <span className="text-sm">Leadership opportunities</span>
            <span className="text-sm text-green-600">2 interested</span>
          </div>

          <div className="bg-blue-50 p-3 rounded-md flex justify-between items-center">
            <span className="text-sm">Technical skill development</span>
            <span className="text-sm text-blue-600">3 interested</span>
          </div>

          <div className="bg-purple-50 p-3 rounded-md flex justify-between items-center">
            <span className="text-sm">Cross-functional collaboration</span>
            <span className="text-sm text-purple-600">1 interested</span>
          </div>
        </div>
      </div>

      {/* Resource Needs Summary */}
      <div className="bg-white rounded-lg border p-4">
        <h2 className="font-medium text-base mb-4">Resource Needs Summary</h2>

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-sm">Training Resources</h3>
            <span className="text-sm text-gray-600">2 requests</span>
          </div>
          <p className="text-sm text-gray-600">
            Team members are requesting more access to learning resources for new technologies
          </p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-sm">Tools & Software</h3>
            <span className="text-sm text-gray-600">1 request</span>
          </div>
          <p className="text-sm text-gray-600">
            Access to premium design tools reported as a blocker for one team member
          </p>
        </div>
      </div>
    </>
  )

  // Function to render the Actions tab content
  const renderActionsTab = () => (
    <div className="space-y-6">
      {/* High Priority Actions */}
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="font-medium">High Priority Actions</h2>
          <span className="text-sm text-red-500">1 action</span>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 text-red-500">
              <AlertCircle size={18} />
            </div>
            <div>
              <h3 className="font-medium text-sm mb-1">Schedule 1:1 with Jamie Smith</h3>
              <p className="text-sm text-gray-600 mb-3">
                High workload concerns and resource gaps identified. Last check-in was 5 days ago.
              </p>
              <button className="px-4 py-1.5 border border-red-200 text-red-600 rounded-md text-sm">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Initiatives */}
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="font-medium">Team Initiatives</h2>
          <span className="text-sm text-yellow-500">2 actions</span>
        </div>
        <div className="space-y-4">
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="mt-0.5 text-yellow-600">
                <Users size={18} />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Team connection building activity</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Team connection scores trending down for 3 members. Consider scheduling team-building.
                </p>
                <button className="px-4 py-1.5 border border-yellow-200 text-yellow-600 rounded-md text-sm">
                  Plan Activity
                </button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="mt-0.5 text-yellow-600">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Explore additional resources</h3>
                <p className="text-sm text-gray-600 mb-3">
                  3 team members report resource gaps. Review resource allocation.
                </p>
                <button className="px-4 py-1.5 border border-yellow-200 text-yellow-600 rounded-md text-sm">
                  Review Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition Opportunities */}
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="font-medium">Recognition Opportunities</h2>
          <span className="text-sm text-blue-500">1 action</span>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 text-blue-500">
              <Award size={18} />
            </div>
            <div>
              <h3 className="font-medium text-sm mb-1">Recognize Casey Wong</h3>
              <p className="text-sm text-gray-600 mb-3">
                Completed all wellbeing goals and has highest team connection score.
              </p>
              <button className="px-4 py-1.5 border border-blue-200 text-blue-600 rounded-md text-sm">
                Send Recognition
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile view
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
              activeTab === "team" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeTab === "insights" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("insights")}
          >
            Insights
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeTab === "actions" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("actions")}
          >
            Actions
          </button>
        </div>

        {/* Mobile Content - Simplified approach */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === "team" && renderTeamTab()}
          {activeTab === "insights" && renderInsightsTab()}
          {activeTab === "actions" && renderActionsTab()}
        </div>
      </div>
    )
  }

  // Desktop view
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
          <a href="/?view=manager" className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md">
            <Home size={16} />
            <span className="text-xs">Dashboard Overview</span>
          </a>
          <a href="/?view=insights" className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-md">
            <TrendingUp size={16} />
            <span className="text-xs">Insights & Trends</span>
          </a>
        </nav>

        {/* User Profile */}
        <div className="pt-6 border-t mt-auto">
          <div className="flex items-center gap-3">
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
        <div className="flex-1 overflow-auto bg-white">
          {/* Header */}
          <header className="h-14 border-b flex items-center justify-between px-6">
            <div>
              <h1 className="font-semibold text-lg">Insights & Trends</h1>
              <p className="text-xs text-gray-500">Discover patterns and opportunities to improve team wellbeing</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Time Range:</span>
                <div className="flex border rounded-md overflow-hidden">
                  <button className="px-3 py-1 text-sm">Month</button>
                  <button className="px-3 py-1 text-sm">Quarter</button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white">Year</button>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">Well being score</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <ArrowUp size={12} />
                    2%
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">75</div>
                <div className="h-12">
                  <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Line connecting dots */}
                    <polyline points="10,30 30,20 50,25 70,15 90,10" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    {/* Dots */}
                    <circle cx="10" cy="30" r="2" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
                    <circle cx="30" cy="20" r="2" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
                    <circle cx="50" cy="25" r="2" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
                    <circle cx="70" cy="15" r="2" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
                    <circle cx="90" cy="10" r="2" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">Workload</div>
                  <div className="text-xs text-red-600 flex items-center">
                    <ArrowUp size={12} />
                    2%
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">75</div>
                <div className="h-12">
                  <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Line connecting dots */}
                    <polyline points="10,25 30,20 50,10 70,15 90,12" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    {/* Dots */}
                    <circle cx="10" cy="25" r="2" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                    <circle cx="30" cy="20" r="2" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                    <circle cx="50" cy="10" r="2" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                    <circle cx="70" cy="15" r="2" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                    <circle cx="90" cy="12" r="2" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">Team Connection</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <ArrowUp size={12} />
                    4%
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">74</div>
                <div className="h-12">
                  <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Line connecting dots */}
                    <polyline points="10,20 30,15 50,18 70,25 90,17" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    {/* Dots */}
                    <circle cx="10" cy="20" r="2" fill="#8b5cf6" stroke="#fff" strokeWidth="1" />
                    <circle cx="30" cy="15" r="2" fill="#8b5cf6" stroke="#fff" strokeWidth="1" />
                    <circle cx="50" cy="18" r="2" fill="#8b5cf6" stroke="#fff" strokeWidth="1" />
                    <circle cx="70" cy="25" r="2" fill="#8b5cf6" stroke="#fff" strokeWidth="1" />
                    <circle cx="90" cy="17" r="2" fill="#8b5cf6" stroke="#fff" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">Resource Satisfaction</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <ArrowUp size={12} />
                    4%
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">72</div>
                <div className="h-12">
                  <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Line connecting dots */}
                    <polyline points="10,15 30,10 50,15 70,20 90,18" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    {/* Dots */}
                    <circle cx="10" cy="15" r="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                    <circle cx="30" cy="10" r="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                    <circle cx="50" cy="15" r="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                    <circle cx="70" cy="20" r="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                    <circle cx="90" cy="18" r="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>
            </div>

            {/* Key Wellbeing Patterns & Insights */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Key Wellbeing Patterns & Insights</h2>

              <div className="space-y-4">
                {/* Insight 1 */}
                <div className="bg-blue-50 rounded-lg p-4 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600">
                      <TrendingUp size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium mb-1">Workload peaks correlate with lower mindfulness scores</h3>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High Impact</span>
                      </div>
                      <p className="text-sm mb-2">
                        Team members reporting 80%+ workload show 15% lower mindfulness scores on average.
                      </p>
                      <div className="text-sm mb-2">
                        <strong className="font-medium">Details:</strong> Our analysis shows that when team members
                        experience workloads exceeding 80% capacity for more than one week, their overall mindfulness
                        scores drop by an average of 15 points. This has been particularly notable for Taylor Reed and
                        Alex Johnson over the past month.
                      </div>
                      <div className="text-sm">
                        <strong className="font-medium">Recommendation:</strong> Consider redistributing tasks from
                        highly loaded team members and implementing a workload check-in during weekly meetings
                      </div>
                      <div className="flex justify-end mt-3">
                        <Button className="bg-blue-600 hover:bg-blue-700">Take action</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-green-600">
                      <ArrowUp size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium mb-1">Regular break-takers have higher productivity</h3>
                        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Medium Impact</span>
                      </div>
                      <p className="text-sm">
                        Team members taking consistent breaks show 22% higher focus time metrics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight 3 */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-red-600">
                      <ArrowDown size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium mb-1">Team connection scores declined last quarter</h3>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High Impact</span>
                      </div>
                      <p className="text-sm">Overall team connection decreased by 8% in the last three months.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Insights */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold">Predictive Insights</h2>
                <div className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                  <Info size={12} />
                  AI-powered
                </div>
                <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
                  <Info size={12} />
                  Based on historical patterns and upcoming events
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Predictive Insight 1 */}
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 shadow-md">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-[#322E81]">Increased workload expected next month</h3>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High Impact</span>
                  </div>
                  <p className="text-sm mb-3">Based on project timelines, team workload may increase by 15-20%.</p>
                  <div className="mb-3">
                    <div className="text-xs font-medium mb-1">Timeframe: 2-4 weeks</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Preventive actions:</div>
                    <ul className="text-sm list-disc pl-5 mb-3">
                      <li>Prioritize critical vs. non-critical tasks</li>
                      <li>Consider temporary resources</li>
                      <li>Adjust sprint commitments</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                      Discuss with Copilot
                    </Button>
                  </div>
                </div>

                {/* Predictive Insight 2 */}
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 shadow-md">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-[#322E81]">Team connection risk during project crunch</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Medium Impact</span>
                  </div>
                  <p className="text-sm mb-3">
                    Historical data shows team connection drops during high-pressure periods.
                  </p>
                  <div className="mb-3">
                    <div className="text-xs font-medium mb-1">Timeframe: 4-8 weeks</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Preventive actions:</div>
                    <ul className="text-sm list-disc pl-5 mb-3">
                      <li>Schedule regular, but brief team activities</li>
                      <li>Implement 'no-meeting' focus days</li>
                      <li>Celebrate small wins consistently</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                      Discuss with Copilot
                    </Button>
                  </div>
                </div>
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

          {/* Chat Area */}
          <div className="flex flex-col p-4 border-b">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm">Hello! I'm your Well-Being Copilot. How can I help you today?</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm">
                  I noticed you have several back-to-back meetings this afternoon. Would you like me to suggest some
                  short breaks between them?
                </p>
              </div>
            </div>
            <div className="relative mt-4">
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

          {/* Team Member Insights */}
          <div className="p-4 flex-1 overflow-auto">
            <h2 className="font-semibold mb-4">Team Member Insights</h2>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className={`bg-white rounded-lg border p-4 ${
                    selectedTeamMember === member.name ? "border-blue-300 shadow-sm" : ""
                  }`}
                  onClick={() => selectTeamMember(member.name)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{member.score}</span>
                        {member.trend === "up" ? (
                          <ChevronUp size={16} className="text-green-500" />
                        ) : (
                          <ArrowDown size={16} className="text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {member.insights && (
                    <>
                      <div className="mb-4">
                        <div
                          className={`flex items-center gap-2 mb-2 text-sm
                            ${member.insights.type === "Workload Concerns" ? "text-red-600" : "text-green-600"}`}
                        >
                          {member.insights.type === "Workload Concerns" ? (
                            <>
                              <AlertCircle size={14} />
                              Workload Concerns
                            </>
                          ) : (
                            <>
                              <Award size={14} />
                              Wellbeing Strengths
                            </>
                          )}
                        </div>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          {member.insights.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Recommendation:</div>
                        <p className="text-sm text-gray-700">{member.insights.recommendation}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
