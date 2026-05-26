import type { Lang } from "@/data/verses";

export function speak(text: string, lang: Lang) {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) return;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang === "ko" ? "ko-KR" : "en-US";
  utter.rate = lang === "ko" ? 0.95 : 0.9;
  utter.pitch = 1.05;
  try {
    synth.speak(utter);
  } catch {
    // ignore — browser may block on first interaction
  }
}

export function stopSpeaking() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
}
