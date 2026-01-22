'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const SONG_NAME = "BURADA SOKAKLAR"
const MUSIC_FILE = "/music/Batuflex-BURADA-SOKAKLAR-ft-ERAY067-Mansur-8.mp3" // Your MP3 file

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { locale } = useLanguage()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) {
      console.log('Audio ref not found')
      return
    }

    console.log('Toggle play, current state:', isPlaying)
    
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => {
        setIsPlaying(true)
        console.log('Audio playing successfully')
      }).catch(err => {
        console.log('Audio play failed:', err)
      })
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-20 hidden md:block"
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
                className="w-1 bg-[var(--accent)] rounded-full"
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
            <span className="text-xs leading-tight">
              {isPlaying ? 
                (locale === 'tr' ? 'Şuan Çalıyor' : 'Now Playing') : 
                (locale === 'tr' ? 'Müzik Çal' : 'Play Music')
              }
            </span>
            <span className="text-sm font-medium leading-tight">
              {SONG_NAME}
            </span>
          </div>
          
          {/* Play/Pause Icon */}
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white ml-1">
            {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
          </div>
        </motion.button>
      </motion.div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={MUSIC_FILE}
        loop
        preload="metadata"
      />
    </>
  )
}
