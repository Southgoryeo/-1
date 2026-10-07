import React from 'react';

// 포교 영상 주소. 이 값만 채우면 플레이스홀더가 플레이어로 바뀝니다.
// YouTube / Vimeo 링크, 또는 public/ 폴더에 넣은 mp4 경로("./outreach.mp4")를 쓸 수 있습니다.
const OUTREACH_VIDEO_URL = "";

const VIDEO_TITLE = '접지회가 처음 만나는 사람에게 보내는 영상';

type VideoSource =
  | { kind: 'none' }
  | { kind: 'iframe'; src: string }
  | { kind: 'file'; src: string };

const resolveVideoSource = (rawUrl: string): VideoSource => {
  const url = rawUrl.trim();
  if (!url) return { kind: 'none' };

  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  if (youtube) {
    return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0` };
  }

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return { kind: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}` };
  }

  return { kind: 'file', src: url };
};

// CSS-only poster: palm-print rings with the grounding line running down to earth
const PosterPlaceholder: React.FC = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-[#121110]">
    <div aria-hidden="true" className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-[#4A443C] flex items-center justify-center">
        <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border border-[#6B635A] flex items-center justify-center">
          <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full border border-[#D95328]" />
        </div>
      </div>
      <div className="w-px h-6 sm:h-12 bg-[#D95328]" />
      <div className="w-7 h-0.5 bg-[#D95328]" />
      <div className="w-[18px] h-0.5 bg-[#D95328] mt-[5px]" />
      <div className="w-2 h-0.5 bg-[#D95328] mt-[5px]" />
    </div>
    <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C7C0B5]">
      영상 준비 중
    </p>
  </div>
);

export const OutreachVideoSection: React.FC = () => {
  const source = resolveVideoSource(OUTREACH_VIDEO_URL);

  return (
    <section id="outreach" className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            당신에게
          </h2>
          <p className="text-xs font-mono text-[#D95328] tracking-widest">
            접지회가 바깥을 향해 만든 영상
          </p>
        </div>

        {/* Lead */}
        <p className="text-center text-xl sm:text-2xl font-serif text-[#E8E2D7] leading-relaxed mb-10">
          "당신이 못해서 밀려난 것이 아닙니다."<br />
          "당신의 인간됨은 생산성으로 측정되지 않습니다."
        </p>

        {/* Player */}
        <figure className="space-y-4">
          <div className="relative w-full aspect-video bg-[#121110] border border-[#2D2A26] overflow-hidden">
            {source.kind === 'none' && <PosterPlaceholder />}

            {source.kind === 'iframe' && (
              <iframe
                src={source.src}
                title={VIDEO_TITLE}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            )}

            {source.kind === 'file' && (
              <video
                src={source.src}
                title={VIDEO_TITLE}
                className="absolute inset-0 w-full h-full"
                controls
                preload="metadata"
                playsInline
              />
            )}
          </div>

          <figcaption className="text-center text-xs sm:text-sm text-[#C7C0B5] leading-relaxed">
            접지회가 처음 만나는 사람에게 보내는 영상. 러닝타임 약 3~5분.
          </figcaption>
        </figure>

      </div>
    </section>
  );
};
