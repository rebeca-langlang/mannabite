type FeedbackPayload = {
  type: "feedback" | "verse_request";
  message: string;
  email?: string;
  avatarId?: string;
  day?: number;
};

export async function sendFeedback(payload: FeedbackPayload): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_FEEDBACK_URL;
  if (!url) return false;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
    return true;
  } catch {
    return false;
  }
}
