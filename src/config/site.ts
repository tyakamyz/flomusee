const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "team@flomusee.co.kr";

const kakaoUrl =
  process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com";

export const siteConfig = {
  contactEmail,
  kakaoUrl,
  instagramUrl,
};
