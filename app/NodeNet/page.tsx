'use client';

import React from 'react';
import { Toaster } from 'sonner';

export default function NodeNetPage() {
  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-right" />
      <div className="w-full h-screen relative">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-2xl">Coming Soon</div>
        </div>
        {/* Overlay Info */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 z-10">
          <div className="text-sm text-gray-400">Active Nodes</div>
          <div className="text-2xl font-bold text-white">2,547</div>
          <div className="text-xs text-gray-500 mt-1">Across 127 regions</div>
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-800 z-10">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Network Status: Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
