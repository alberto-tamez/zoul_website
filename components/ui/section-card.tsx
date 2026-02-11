"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function SectionCard({ title, children, className = "" }: SectionCardProps) {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className={`bg-white rounded-2xl p-8 shadow-lg ${className}`}>
          <h2 className="text-3xl font-bold mb-8 text-center text-background-dark">{title}</h2>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

