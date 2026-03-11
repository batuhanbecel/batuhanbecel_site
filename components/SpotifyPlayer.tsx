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
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Music Bars */}
        <div className="flex items-end gap-0.5 h-3.5">
          {[1, 2, 3].map((bar) => (
            <motion.div
              key={bar}
              className="w-[3px] bg-[var(--accent)] rounded-full"
              animate={isPlaying ? {
                height: ['3px', '14px', '6px', '12px', '3px'],
              } : { height: '3px' }}
              transition={isPlaying ? {
                duration: 0.8,
                repeat: Infinity,
                delay: bar * 0.1,
                ease: 'easeInOut',
              } : {}}
            />
          ))}
        </div>

        {/* Play/Pause icon */}
        <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-white flex-shrink-0">
          {isPlaying ? <Pause size={10} /> : <Play size={10} className="ml-0.5" />}
        </div>
      </button>

      <audio
        ref={audioRef}
        src={MUSIC_FILE}
        loop
        preload="metadata"
      />
    </>
  )
}
