import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "email", "topic", "message"] as const;

type ContactPayload = {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  const missing = REQUIRED_FIELDS.filter((field) => !data[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `필수 항목이 누락되었습니다: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // TODO: 실제 이메일/CRM 연동 시 여기서 전송 로직 추가.
  // 현재는 서버 콘솔 로그로 대체합니다.
  console.log("[Contact] 문의 접수", {
    name: data.name,
    email: data.email,
    topic: data.topic,
    message: data.message?.slice(0, 500),
  });

  return NextResponse.json({ ok: true });
}
