import { useEffect, useState } from "react";

const COOKIE_NAME = "hicv_banner";

export const setHicvBannerCookie = (value: boolean) => {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 1 día
  const expires = "; expires=" + date.toUTCString();
  document.cookie = COOKIE_NAME + "=" + (value ? "true" : "false") + expires + "; path=/; SameSite=Lax";
};

export const getHicvBannerCookie = (): boolean | null => {
  if (typeof document === "undefined") return null;
  const nameEQ = COOKIE_NAME + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      const value = c.substring(nameEQ.length, c.length);
      return value === "true";
    }
  }
  return null;
};

export const validHicvBannerCookie = (): boolean => {
  console.log(getHicvBannerCookie());
  if(getHicvBannerCookie() === null){
    setHicvBannerCookie(true);
    return true;
  }
  return false;
};
