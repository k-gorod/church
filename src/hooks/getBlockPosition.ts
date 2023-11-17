import { AppStateContext, VariansOfBlocks } from "context/AppState";
import { MutableRefObject, useContext, useEffect } from "react";

export const getBlockPosition = (
  blockName: VariansOfBlocks,
  firstBlockRef: MutableRefObject<HTMLDivElement | null>
) => {
  const { setBlockStartPoint } = useContext(AppStateContext);

  useEffect(() => {
    const rectY = firstBlockRef?.current?.getBoundingClientRect().y;

    if (!rectY) return;

    rectY + window.scrollY;

    setBlockStartPoint?.((prev) => ({
      ...prev,
      [blockName]: rectY + window.scrollY,
    }));
  }, []);
};
