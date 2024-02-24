import responsiveContainerStyles from "css/containers/ResponsiveContainer.module.css";
import joinClasses from "utils/joinClasses";
import { CSSProperties } from "react";

type Props = {
  children: any;
  className?: string; // optional secondary class
  height?: string; // optional auto-height override
  style?: CSSProperties; // optional inline styles
};

export default function ResponsiveContainer({
  children,
  className,
  height,
  style,
}: Props): JSX.Element {
  return (
    <div
      className={joinClasses(
        responsiveContainerStyles.responsiveContainer,
        className,
      )}
      style={height != null ? { ...style, height } : { ...style }}
    >
      {children}
    </div>
  );
}
