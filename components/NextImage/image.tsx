import React from "react";
import styles from "./image.module.scss";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  style?:{}
}

export default function NextImage(props: ImageProps) {
  const { src, alt, priority, className, style } = props;
  return (
    <div className={"relative w-full h-full "+" "+className}>
      <Image
        src={src}
        fill={true}
        className={"object-contain w-full relative "+className}
        alt={alt || ""}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        sizes="99.99999999vw"
        priority={priority || true}
        style={style}
      />
    </div>

  );
}
