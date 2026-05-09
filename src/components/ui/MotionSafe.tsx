/**
 * MotionSafe — renders a plain <div> on mobile, <motion.div> on desktop.
 * Eliminates whileInView / opacity:0 freeze issues on mobile Safari.
 */
import { forwardRef } from "react"
import { motion, type MotionProps } from "framer-motion"
import { useIsMobile } from "../../hooks/useIsMobile"

type MotionSafeProps = MotionProps & React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const MotionSafe = forwardRef<HTMLDivElement, MotionSafeProps>(
  function MotionSafe({ children, className, style, ...motionProps }, ref) {
    const isMobile = useIsMobile()

    if (isMobile) {
      return (
        <div
          ref={ref}
          className={className}
          style={style}
          data-mobile-safe="true"
        >
          {children}
        </div>
      )
    }

    return (
      <motion.div
        ref={ref}
        className={className}
        style={style}
        {...motionProps}
      >
        {children}
      </motion.div>
    )
  }
)
