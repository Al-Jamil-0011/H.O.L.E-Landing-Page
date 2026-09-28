import { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon, SparklesIcon, VideoIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { StoreBadges } from "./StoreBadges";

// Define the public video path so the user can easily upload to public/
export const APP_VIDEO_SRC = "/app-video.mp4";

export function MobileApp() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Default sound OFF (muted)
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted by default so it autoplays smoothly
    video.muted = true;
    setIsMuted(true);
    video.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section id="mobile" aria-labelledby="mobile-title" className="relative scroll-mt-16 sm:scroll-mt-20 overflow-hidden bg-surface py-12 sm:py-16 transition-colors duration-200">
      <span id="download" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header with Title and Store Badges */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <SectionHeading
            id="mobile-title"
            align="left"
            className="max-w-none flex-1"
            titleClassName="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] 2xl:text-5xl lg:whitespace-nowrap leading-tight tracking-tight"
            descriptionClassName="mt-2.5 text-sm sm:text-base xl:text-lg text-ink-muted xl:whitespace-nowrap"
            title="Your operations, wherever work happens."
            description="Reps in the OR, drivers on the road, managers between meetings. The H.O.L.E. mobile app is live on iOS and Android."
          />

          <Reveal className="shrink-0 flex items-center justify-end">
            <StoreBadges layout="col" />
          </Reveal>
        </div>

        {/* ── Modern Video Showcase Container ─────────────────────────────────── */}
        <Reveal className="mt-8 sm:mt-10">
          <div className="relative mx-auto w-full">
            {/* Ambient Cyan Brand Glow behind the video */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 rounded-3xl bg-brand/15 blur-3xl transition-opacity duration-500"
            />

            {/* Video Showcase Card */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-canvas shadow-2xl transition-all duration-300 hover:border-brand/40">
              {/* Top Window / App Frame Bar */}
              <div className="flex items-center justify-between border-b border-line bg-surface-muted/70 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 hidden text-xs font-mono text-ink-subtle sm:inline-block">
                    H.O.L.E. App Demo · Real-Time Operations
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-2.5 py-0.5 text-[10px] font-semibold text-brand-ink dark:text-brand dark:bg-brand/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    HD Video Showcase
                  </div>

                  {/* Audio Mute/Unmute Toggle Button */}
                  {!hasError && (
                    <button
                      type="button"
                      onClick={toggleMute}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                        !isMuted
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm"
                          : "border-brand/40 bg-brand/10 text-brand-ink dark:text-brand hover:bg-brand/20 shadow-sm"
                      }`}
                      title={isMuted ? "Click to turn sound ON" : "Click to turn sound OFF"}
                      aria-label={isMuted ? "Click to turn sound ON" : "Click to turn sound OFF"}
                    >
                      {!isMuted ? (
                        <>
                          <Volume2Icon className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="inline">Sound ON</span>
                        </>
                      ) : (
                        <>
                          <VolumeXIcon className="h-3.5 w-3.5 text-brand" />
                          <span className="inline">Sound OFF · Click for Sound</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Video Player Display Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/95">
                <video
                  ref={videoRef}
                  src={APP_VIDEO_SRC}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  onError={() => setHasError(true)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className={`h-full w-full object-contain ${hasError ? "hidden" : "block"}`}
                >
                  <source src={APP_VIDEO_SRC} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Stylish Placeholder State shown before video file is placed into public/ */}
                {hasError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 to-black text-white">
                    <div className="relative mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-brand/40 bg-brand/10 text-brand shadow-glow">
                      <VideoIcon className="h-8 w-8 text-brand animate-pulse" />
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md mb-3">
                      <SparklesIcon className="h-3.5 w-3.5" />
                      Video Player Ready
                    </div>

                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
                      Upload your video to: <code className="rounded bg-white/10 px-2 py-0.5 text-brand font-mono text-sm sm:text-base">public/app-video.mp4</code>
                    </h3>

                    <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-300">
                      In your next prompt, upload the video file or provide the file name. The player will automatically load and play it here with HD controls.
                    </p>
                  </div>
                )}

                {/* Quick Play/Pause Center Overlay on hover when video is present */}
                {!hasError && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="absolute right-4 bottom-4 z-20 flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-opacity duration-200 hover:bg-black/80 hover:border-brand/50 cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <PauseIcon className="h-3.5 w-3.5 text-brand" /> Pause
                      </>
                    ) : (
                      <>
                        <PlayIcon className="h-3.5 w-3.5 text-brand" /> Play
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}