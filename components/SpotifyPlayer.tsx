'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'

const SONG_NAME = "BURADA SOKAKLAR"
const SPOTIFY_TRACK_ID = "2vPA1SN0fPjevTyvWIJNO4"

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute top-8 left-8 md:top-12 md:left-12 z-20"
    >
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 md:gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
      >
        {/* Animated Music Bars */}
        <div className="flex items-end gap-0.5 h-4">
          {[1, 2, 3].map((bar) => (
            <motion.div
              key={bar}
              className="w-1 bg-[#1DB954] rounded-full"
              animate={isPlaying ? {
                height: ['4px', '16px', '8px', '14px', '4px'],
              } : { height: '4px' }}
              transition={isPlaying ? {
                duration: 0.8,
                repeat: Infinity,
                delay: bar * 0.1,
                ease: 'easeInOut',
              } : {}}
            />
          ))}
        </div>
        
        {/* Song Info */}
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-60 leading-tight">
            {isPlaying ? 'Now Playing' : 'Play Music'}
          </span>
          <span className="text-sm font-medium leading-tight">
            {SONG_NAME}
          </span>
        </div>
        
        {/* Play/Pause Icon */}
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1DB954] flex items-center justify-center text-white ml-1">
          {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
        </div>
      </motion.button>
    </motion.div>
  )
}
