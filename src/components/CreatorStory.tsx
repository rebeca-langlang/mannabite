"use client";

type Props = {
  onBack: () => void;
};

export function CreatorStory({ onBack }: Props) {
  return (
    <section className="flex flex-col gap-6 px-5 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="tap-target rounded-pill px-2 text-2xl text-ink-sub"
        >
          ←
        </button>
        <h1 className="font-display text-lg font-extrabold text-ink">
          만든이 이야기
        </h1>
        <div className="w-8" />
      </div>

      <div className="flex flex-col gap-6 text-sm leading-[1.7] text-ink">
        <p>
          안녕하세요, MannaBite를 만든 Rebeca입니다. 두 아이를 키우는
          워킹맘이에요.
        </p>

        <p>
          저는 국제학을 전공하고 대학원까지 마친 뒤, 현재 국제 이하고, 어른이
          되어서도 그 말씀이 마음 한켠의 빛으로 남기를 진심으로 소망합니다.
        </p>

        <p>
          피드백이나 격려, 함께 외우고 싶은 말씀 구절 제안도 언제든 환영합니다.
          한 분 한 분의 이야기를 소중히 읽고 있습니다.
        </p>

        <p>감사합니다.</p>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">— Rebeca</p>
          <a
            href="mailto:felicidades5@naver.com"
            className="text-honey-dark underline"
          >
            felicidades5@naver.com
          </a>
          <a
            href="https://instagram.com/manna.reads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-honey-dark underline"
          >
            Instagram: @manna.reads
          </a>
        </div>
      </div>
    </section>
  );
}
