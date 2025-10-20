"use client";
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const progressBars = [
    { label: "Progress 1", value: 80, color: "bg-gray-200" },
    { label: "Progress 2", value: 30, color: "bg-blue-400" },
    { label: "Progress 3", value: 100, color: "bg-white" },
    { label: "Progress 4", value: 75, color: "bg-green-400" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const barChartVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (bar) => ({
      opacity: 1,
      x: 0,
      height: `${bar}%`,
      transition: { duration: 0.5, delay: bar * 0.02 },
    }),
  };

  const donutVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const WindowFrame = ({ children, delay = 0 }) => (
    <motion.div
      className="rounded-lg bg-slate-700 p-4 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      {children}
    </motion.div>
  );

  const bars = [65, 40, 85, 55, 70, 45, 90, 35];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Progress Bars Section */}
      <WindowFrame delay={0.2}>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {progressBars.map((bar, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="bg-gray-600 h-2 w-16 rounded"></div>
              <div className="bg-gray-600 h-2 flex-1 overflow-hidden rounded">
                <motion.div
                  className={`h-full ${bar.color} rounded`}
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.value}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-sm text-white">{bar.value}%</span>
            </motion.div>
          ))}
        </motion.div>
      </WindowFrame>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Bar Chart */}
        <WindowFrame delay={0.4}>
          <div className="flex h-48 items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                className="flex-1 rounded-t bg-blue-400"
                custom={height}
                variants={barChartVariants}
                initial="hidden"
                animate="visible"
                style={{ minWidth: "4px" }}
              />
            ))}
          </div>
        </WindowFrame>

        {/* Donut Chart */}
        <WindowFrame delay={0.6}>
          <div className="relative flex h-48 items-center justify-center">
            <motion.svg
              viewBox="0 0 100 100"
              className="h-32 w-32"
              variants={donutVariants}
              initial="hidden"
              animate="visible"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#1F2937"
                strokeWidth="12"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 62.8 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#10B981"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="188.4"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 188.4 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.svg>
            <div className="absolute right-4 top-4 space-y-2">
              <motion.div
                className="bg-gray-400 h-2 w-12 rounded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              />
              <motion.div
                className="bg-gray-400 h-2 w-16 rounded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              />
            </div>
          </div>
        </WindowFrame>
      </div>
    </div>
  );
};

export default Dashboard;
