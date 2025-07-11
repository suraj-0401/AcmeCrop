import React from "react";
import { MoreHorizontal, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Shipments = () => {
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
                  className="text-sm text-text-light hover:text-healthtrack-primary transition-colors"
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
                  className="text-sm font-bold text-healthtrack-primary"
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

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-normal text-text-primary mb-1">
            Recent Orders
          </h2>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Shipment Tracking
          </h3>
          <p className="text-text-muted text-sm">
            Manage 2024 your next shipment deliveries
          </p>
        </div>

        {/* Current Shipment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Shipment Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipment Info */}
            <Card className="p-6 border border-gray-200">
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">DATE</p>
                  <p className="font-medium">Jul 9, 2025</p>
                  <p className="text-xs text-gray-400">Express shipment</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">ITEM</p>
                  <p className="font-medium">10ct box</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">QTY</p>
                  <p className="font-medium">1.0 lbs</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">TRACKING</p>
                  <p className="font-medium">573</p>
                  <p className="text-xs text-gray-400">Reduced waste impact</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">DATE</p>
                    <p className="font-medium">Jul 9, 2025</p>
                    <p className="text-xs text-gray-400">Express shipment</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">ITEM</p>
                    <p className="font-medium">10ct box</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">QTY</p>
                    <p className="font-medium">1.0 lbs</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">TRACKING</p>
                    <p className="font-medium">573</p>
                    <p className="text-xs text-gray-400">
                      Reduced waste impact
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-text-primary mb-2">
                  Monthly Medication Package
                </h4>
                <p className="text-sm text-gray-600">Aug 2, 2025</p>
                <p className="text-xs text-gray-400">30-day supply</p>
              </div>
            </Card>

            {/* Estimated Delivery */}
            <Card className="p-6 border border-gray-200">
              <h4 className="font-medium text-text-primary mb-4">
                Estimated Delivery
              </h4>
              <p className="text-lg font-medium text-text-primary mb-6">
                July 12, 2025
              </p>

              {/* Tracking Timeline */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Order Processed</p>
                    <p className="text-xs text-gray-500">
                      Jul 9, 2025 at 10:25 AM
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your order has been processed and is being prepared for
                      shipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Shipped</p>
                    <p className="text-xs text-gray-500">
                      Jul 9, 2025 at 2:15 PM
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your package has been shipped via UPS Express. Tracking
                      information has been updated.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">In Transit</p>
                    <p className="text-xs text-gray-500">
                      Jul 9, 2025 at 6:47 PM
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your package is in transit to the destination. Current
                      location: Distribution Center, Chicago, IL
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Out for Delivery</p>
                    <p className="text-xs text-gray-400">
                      Expected: Jul 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Tracking Info */}
          <div className="space-y-6">
            <Card className="p-4 border border-gray-200">
              <div className="text-center">
                <p className="text-sm font-medium mb-2">UPS Express</p>
                <p className="text-sm text-gray-600 mb-4">Tracking Number</p>
                <p className="text-sm font-mono">1Z7W8FXR617358936</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Previous Shipments */}
        <div>
          <h3 className="text-lg font-medium text-text-primary mb-4">
            Previous Shipments
          </h3>
          <Card className="border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">
                      ORDER ID
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">
                      ITEM NAME
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">
                      DELIVERY DATE
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">
                      STATUS
                    </th>
                    <th className="w-12 p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <p className="text-sm font-medium text-text-primary">
                        HC75923
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-primary">
                        Monthly Medication Package
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-muted">Jun 10, 2025</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Delivered
                      </span>
                    </td>
                    <td className="p-4">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <p className="text-sm font-medium text-text-primary">
                        HC75843
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-primary">
                        Monthly Medication Package
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-muted">May 11, 2025</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Delivered
                      </span>
                    </td>
                    <td className="p-4">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <p className="text-sm font-medium text-text-primary">
                        HC75764
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-primary">
                        Monthly Medication Package
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-text-muted">Apr 9, 2025</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Delivered
                      </span>
                    </td>
                    <td className="p-4">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
