"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import { ReactNode } from "react"

type Props = HTMLMotionProps<"div"> & {
  children: ReactNode
}
export const MotionDiv = ({ children, ...props }: Props) => {
  return <motion.div {...props}>{children}</motion.div>
}
