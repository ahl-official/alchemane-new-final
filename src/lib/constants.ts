export const WHATSAPP_NUMBER = "919967123333";
export const PHONE_DISPLAY = "+91 99671 23333";
export const PHONE_TEL = "+919967123333";
export const EMAIL = "info@alchemane.com";
export const STUDIO_ADDRESS =
  "4th floor Empressa Building, 2nd Rd, Khar, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052.";
export const PRIVACY_URL = "https://alchemane.com/policies/privacy-policy";
export const TERMS_URL = "https://alchemane.com/policies/terms-of-service";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
