import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Progress = () => {
  return (
    <div className="min-h-screen bg-white">
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
                  className="text-sm font-bold text-text-light hover:text-healthtrack-primary transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/progress"
                  className="text-sm font-normal text-healthtrack-primary"
                >
                  Progress
                </Link>
                <Link
                  to="/shipments"
                  className="text-sm font-bold text-text-light hover:text-healthtrack-primary transition-colors"
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

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-normal text-healthtrack-primary mb-2">
              Weight Progress
            </h2>
            <p className="text-text-muted">Track your weight loss journey</p>
          </div>
          <Button className="bg-chart-secondary text-white font-bold px-6 py-2 rounded-sm flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Weight</span>
          </Button>
        </div>

        {/* Weight History Chart */}
        <Card className="mb-8 border-gray-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-normal text-text-muted mb-1">
                  Weight History
                </CardTitle>
                <p className="text-xs text-text-light">Jan 2025-Jul 2025</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-xs text-text-muted">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span>Weight</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-text-muted">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span>Goal</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Chart Container */}
            <div className="h-64 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
                <span>180 lbs</span>
                <span>170 lbs</span>
                <span>160 lbs</span>
                <span>150 lbs</span>
                <span>140 lbs</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full relative bg-gray-50 rounded">
                {/* Weight line visualization */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient
                      id="weightGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#374151" />
                      <stop offset="100%" stopColor="#6B7280" />
                    </linearGradient>
                  </defs>
                  {/* Simplified weight trend line */}
                  <polyline
                    fill="none"
                    stroke="url(#weightGradient)"
                    strokeWidth="3"
                    points="50,50 150,80 250,120 350,130 450,110"
                  />
                  {/* Data points */}
                  {[
                    { x: 50, y: 50 },
                    { x: 150, y: 80 },
                    { x: 250, y: 120 },
                    { x: 350, y: 130 },
                    { x: 450, y: 110 },
                  ].map((point, index) => (
                    <circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#374151"
                    />
                  ))}
                  {/* Goal line */}
                  <line
                    x1="0"
                    y1="180"
                    x2="100%"
                    y2="180"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4 pb-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 border-gray-200">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xs font-normal text-text-light">
                Starting Weight
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xl font-normal text-gray-700 mb-1">
                178.2 lbs
              </div>
              <div className="text-xs text-text-light">Jan 10, 2025</div>
            </CardContent>
          </Card>

          <Card className="p-4 border-gray-200">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xs font-normal text-text-light">
                Current Weight
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xl font-normal text-gray-700 mb-1">
                158.6 lbs
              </div>
              <div className="text-xs text-text-light">Jul 10, 2025</div>
            </CardContent>
          </Card>

          <Card className="p-4 border-gray-200">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xs font-normal text-text-light">
                Weight Lost
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xl font-normal text-gray-700 mb-1">
                19.6 lbs
              </div>
              <div className="text-xs text-text-light">
                11% of starting weight
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border-gray-200">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xs font-bold text-text-light">
                Remaining to Goal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-xl font-normal text-gray-700 mb-1">
                13.6 lbs
              </div>
              <div className="text-xs font-bold text-text-light">
                Goal: 145 lbs
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Progress;
