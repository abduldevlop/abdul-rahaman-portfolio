import React from "react";

import { styles } from "../styles";

interface SectionWrapperProps {
  Comp: React.ComponentType<any>;
}

const SectionWrapper = (
  Component: React.ComponentType<any>,
  idName: string
): React.FC<SectionWrapperProps> => {
  return function HOC(props: SectionWrapperProps) {
    return (
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </section>
    );
  };
};

export default SectionWrapper;
