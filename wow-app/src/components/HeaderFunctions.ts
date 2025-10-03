import { gsap } from "gsap";
import React from "react";

// Toggle Game Info dropdown using GSAP and React state.
// No manual classList for "hidden"! Control visibility with state in JSX.
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
    // Delay hiding after animation if you want to hide after fade out
    setTimeout(() => {
      setGameInfoState(false);
    }, 300);
  }
};

// Toggle Expansion Info dropdown using GSAP and React state.
// No manual classList for "hidden"! Control visibility with state in JSX.
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
    // Delay hiding after animation if you want to hide after fade out
    setTimeout(() => {
      setExpansionInfoState(false);
    }, 300);
  }
};