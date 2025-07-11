import React from "react";
import { MoreHorizontal, TrendingDown, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-surface-DEFAULT">
      {/* Navigation Header */}
      <div className="bg-white border-b border-border-light">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-normal text-healthtrack-secondary">
                HealthTrack
              </h1>
              <nav className="flex space-x-6">
                <Link
                  to="/dashboard"
                  className="text-sm font-bold text-healthtrack-primary"
                >
                  Dashboard
                </Link>
                <Link
                  to="/progress"
                  className="text-sm text-text-light hover:text-healthtrack-primary transition-colors"
                >
                  Progress
                </Link>
                <Link
                  to="/shipments"
                  className="text-sm text-text-light hover:text-healthtrack-primary transition-colors"
                >
                  Shipments
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-normal text-text-primary mb-1">
              Hello, Sarah
            </h2>
          </div>
          <div className="text-sm text-text-light">
            Last updated: July 10, 2025
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current Weight Card */}
          <Card className="p-6 border-2 border-gray-100">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-normal text-text-muted">
                  Current Weight
                </CardTitle>
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-normal text-gray-700">
                  158.6
                </span>
                <span className="text-xs font-bold text-gray-400">lbs</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gray-100 border border-gray-200 rounded px-3 py-1 flex items-center space-x-1">
                  <TrendingDown className="h-3 w-3 text-gray-500" />
                  <span className="text-xs text-gray-500">2.3lbs</span>
                </div>
                <span className="text-xs text-gray-400">since last week</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Goal: 145 lbs</span>
                  <span className="text-gray-500">13.6 lbs to go</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BMI Card */}
          <Card className="p-6 border-2 border-gray-100">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold text-text-muted">
                  BMI
                </CardTitle>
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-normal text-gray-700">27.2</span>
                <span className="text-xs text-gray-400">kg/m²</span>
              </div>
              <div className="mb-4">
                <div className="bg-chart-secondary border border-gray-700 rounded px-3 py-1 inline-block">
                  <span className="text-xs font-bold text-gray-300">
                    Overweight
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2 relative">
                  <div className="bg-blue-400 h-2 rounded-full w-2/3"></div>
                  <div className="absolute top-0 left-2/3 w-1 h-2 bg-gray-600"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics Card */}
          <Card className="p-6 border-2 border-gray-100">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-normal text-text-muted">
                  Metrics
                </CardTitle>
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Body Fat</span>
                  <span className="text-xs text-gray-500">24.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500">
                    Muscle Mass
                  </span>
                  <span className="text-xs text-gray-500">31.4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500">
                    Hydration
                  </span>
                  <span className="text-xs text-gray-500">58.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weight Trend Chart */}
        <Card className="p-6 border-2 border-gray-100">
          <CardHeader className="p-0 mb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-bold text-text-muted">
                Weight Trend
              </CardTitle>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-chart-secondary text-gray-300 px-3 py-1 text-xs"
                >
                  1M
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-gray-100 text-gray-500 px-3 py-1 text-xs"
                >
                  3M
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-gray-100 text-gray-500 px-3 py-1 text-xs"
                >
                  6M
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-gray-100 text-gray-500 px-3 py-1 text-xs"
                >
                  1Y
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Realistic weight trend line chart */}
            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Grid lines */}
                <defs>
                  <pattern
                    id="grid"
                    width="80"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 80 0 L 0 0 0 40"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Y-axis labels */}
                <text
                  x="20"
                  y="20"
                  className="text-xs fill-gray-400"
                  textAnchor="middle"
                >
                  180
                </text>
                <text
                  x="20"
                  y="60"
                  className="text-xs fill-gray-400"
                  textAnchor="middle"
                >
                  170
                </text>
                <text
                  x="20"
                  y="100"
                  className="text-xs fill-gray-400"
                  textAnchor="middle"
                >
                  160
                </text>
                <text
                  x="20"
                  y="140"
                  className="text-xs fill-gray-400"
                  textAnchor="middle"
                >
                  150
                </text>
                <text
                  x="20"
                  y="180"
                  className="text-xs fill-gray-400"
                  textAnchor="middle"
                >
                  140
                </text>

                {/* Goal line */}
                <line
                  x1="40"
                  y1="155"
                  x2="760"
                  y2="155"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.7"
                />
                <text x="765" y="158" className="text-xs fill-red-500">
                  Goal: 145 lbs
                </text>

                {/* Weight trend line */}
                <path
                  d="M 80 90 L 200 100 L 320 120 L 440 130 L 560 115 L 680 105"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* Data points */}
                <circle cx="80" cy="90" r="4" fill="#3b82f6" />
                <circle cx="200" cy="100" r="4" fill="#3b82f6" />
                <circle cx="320" cy="120" r="4" fill="#3b82f6" />
                <circle cx="440" cy="130" r="4" fill="#3b82f6" />
                <circle cx="560" cy="115" r="4" fill="#3b82f6" />
                <circle cx="680" cy="105" r="4" fill="#3b82f6" />

                {/* Highlighted current point */}
                <circle
                  cx="680"
                  cy="105"
                  r="6"
                  fill="#1d4ed8"
                  stroke="white"
                  strokeWidth="2"
                />

                {/* X-axis labels */}
                <text
                  x="80"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  May 15
                </text>
                <text
                  x="200"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jun 1
                </text>
                <text
                  x="320"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jun 15
                </text>
                <text
                  x="440"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jul 1
                </text>
                <text
                  x="560"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jul 15
                </text>
                <text
                  x="680"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Aug 1
                </text>
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
