import { gsap } from "gsap";
import React from "react";

// Toggle Game Info dropdown using GSAP and React state.
export const toggleGameInfo = (
  gameInfo: React.RefObject<HTMLDivElement | null>,
  listGameInfo: React.RefObject<HTMLLIElement | null>,
  arrowGameInfo: React.RefObject<SVGSVGElement | null>,
  gameInfoState: boolean,
  setGameInfoState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!gameInfo.current || !listGameInfo.current || !arrowGameInfo.current) return;

  if (!gameInfoState) {
    listGameInfo.current.classList.add("bg-[#00000080]");
    gsap.fromTo(arrowGameInfo.current, { rotate: 0 }, { rotate: 180, duration: 0.3 });
    gsap.fromTo(
      gameInfo.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    setGameInfoState(true);
  } else {
    listGameInfo.current.classList.remove("bg-[#00000080]");
    gsap.to(arrowGameInfo.current, { rotate: 0, duration: 0.3 });
    gsap.to(gameInfo.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
    setTimeout(() => {
      setGameInfoState(false);
    }, 300);
  }
};

// Toggle Expansion Info dropdown using GSAP and React state.
export const toggleExpansionInfo = (
  expansionInfo: React.RefObject<HTMLDivElement | null>,
  listExpansionInfo: React.RefObject<HTMLLIElement | null>,
  arrowExpansionInfo: React.RefObject<SVGSVGElement | null>,
  expansionInfoState: boolean,
  setExpansionInfoState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!expansionInfo.current || !listExpansionInfo.current || !arrowExpansionInfo.current) return;

  if (!expansionInfoState) {
    listExpansionInfo.current.classList.add("bg-[#00000080]");
    gsap.fromTo(arrowExpansionInfo.current, { rotate: 0 }, { rotate: 180, duration: 0.3 });
    gsap.fromTo(
      expansionInfo.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    setExpansionInfoState(true);
  } else {
    listExpansionInfo.current.classList.remove("bg-[#00000080]");
    gsap.to(arrowExpansionInfo.current, { rotate: 0, duration: 0.3 });
    gsap.to(expansionInfo.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
    setTimeout(() => {
      setExpansionInfoState(false);
    }, 300);
  }
};

// Toggle Community Info dropdown using GSAP and React state.
export const toggleCommunityInfo = (
  communityInfo: React.RefObject<HTMLDivElement | null>,
  listCommunityInfo: React.RefObject<HTMLLIElement | null>,
  arrowCommunityInfo: React.RefObject<SVGSVGElement | null>,
  communityInfoState: boolean,
  setCommunityInfoState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!communityInfo.current || !listCommunityInfo.current || !arrowCommunityInfo.current) return;

  if (!communityInfoState) {
    listCommunityInfo.current.classList.add("bg-[#00000080]");
    gsap.fromTo(arrowCommunityInfo.current, { rotate: 0 }, { rotate: 180, duration: 0.3 });
    gsap.fromTo(
      communityInfo.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    setCommunityInfoState(true);
  } else {
    listCommunityInfo.current.classList.remove("bg-[#00000080]");
    gsap.to(arrowCommunityInfo.current, { rotate: 0, duration: 0.3 });
    gsap.to(communityInfo.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
    setTimeout(() => {
      setCommunityInfoState(false);
    }, 300);
  }
};

// Toggle Shop Info dropdown using GSAP and React state.
export const toggleShopInfo = (
  shopInfo: React.RefObject<HTMLDivElement | null>,
  listShopInfo: React.RefObject<HTMLLIElement | null>,
  arrowShopInfo: React.RefObject<SVGSVGElement | null>,
  shopInfoState: boolean,
  setShopInfoState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!shopInfo.current || !listShopInfo.current || !arrowShopInfo.current) return;

  if (!shopInfoState) {
    listShopInfo.current.classList.add("bg-[#00000080]");
    gsap.fromTo(arrowShopInfo.current, { rotate: 0 }, { rotate: 180, duration: 0.3 });
    gsap.fromTo(
      shopInfo.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    setShopInfoState(true);
  } else {
    listShopInfo.current.classList.remove("bg-[#00000080]");
    gsap.to(arrowShopInfo.current, { rotate: 0, duration: 0.3 });
    gsap.to(shopInfo.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
    setTimeout(() => {
      setShopInfoState(false);
    }, 300);
  }
};