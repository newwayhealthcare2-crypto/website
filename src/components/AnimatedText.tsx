import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string | React.ReactNode;
  className?: string;
  el?: any;
  once?: boolean;
  delay?: number;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function AnimatedText({
  text,
  className,
  el: Wrapper = 'div',
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <Wrapper className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: delay } },
        }}
        aria-hidden
      >
        {typeof text === 'string' ? (
          text.split(' ').map((word, wordIndex) => (
            <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                  variants={defaultAnimations}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))
        ) : (
          <motion.span variants={defaultAnimations}>{text}</motion.span>
        )}
      </motion.span>
    </Wrapper>
  );
}
