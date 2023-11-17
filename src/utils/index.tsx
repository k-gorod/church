// @ts-ignore
import webmanifest from "../../public/manifest.json";
import appleTouchIcon from "../../public/apple-touch-icon.png";
import favicon32 from "../../public/favicon-32x32.png";
import favicon16 from "../../public/favicon-16x16.png";
import favicon from "../../public/favicon.ico";

// export const inArrayRange = (index: number, length: number) =>
//   index > 0 && index < length;

// export const getArrayRender = (arr: any[], currentIndex: number) => {
//   const addendum: number[] = [-2, -1, 0, 1, 2];
//   return addendum.reduce((acc: any[], el: number) => {
//     return inArrayRange(currentIndex + el, arr.length)
//       ? [...acc, arr[currentIndex]]
//       : acc;
//   }, []);
// };

export const initializeFavIcon = () => {
  document.head.append(
    ...[
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: appleTouchIcon,
      },
      {
        rel: "icon",
        type: "imge/png",
        sizes: "32x32",
        href: favicon32,
      },
      {
        rel: "icon",
        href: favicon,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: favicon16,
      },
      // {
      //   rel: "manifest",
      //   href: webmanifest,
      // },
    ].map((el) => {
      const elem = document.createElement("link");

      Object.entries(el).forEach(([propName, value]) =>
        elem.setAttribute(propName, value)
      );

      return elem;
    })
  );
};
