import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import './Reveal.css';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Transition delay in ms, used to stagger siblings. */
  delay?: number;
  /**
   * 'viewport' reveals when the element enters the viewport (once).
   * 'scroll' is scroll-progress-linked: the element stays hidden at the very
   * top of the page and rises up from below + fades in as the user scrolls.
   */
  mode?: 'viewport' | 'scroll';
  /** IntersectionObserver threshold (0–1) for viewport mode. */
  threshold?: number;
}

/** Px of scroll for the scroll-linked hero to fully fade in. */
const SCROLL_REVEAL_RANGE = 350;
/** Vh below its resting spot where the scroll-linked hero starts. */
const SCROLL_REVEAL_RISE = 35;

const Reveal = ({
  children,
  className = '',
  style,
  delay = 0,
  mode = 'viewport',
  threshold = 0.15
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (mode === 'scroll') {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let raf = 0;

      const update = () => {
        raf = 0;
        if (!el) return;
        if (reduceMotion) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
          return;
        }
        const progress = Math.min(1, Math.max(0, window.scrollY / SCROLL_REVEAL_RANGE));
        el.style.opacity = String(progress);
        el.style.transform = `translateY(${(1 - progress) * SCROLL_REVEAL_RISE}vh)`;
        el.style.visibility = progress > 0.01 ? 'visible' : 'hidden';
      };

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(update);
      };

      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode, threshold]);

  const isScrollMode = mode === 'scroll';

  return (
    <div
      ref={ref}
      className={`reveal ${isScrollMode ? 'reveal--scroll' : visible ? 'is-visible' : ''} ${className}`.trim()}
      style={
        isScrollMode
          ? ({ ...style, transition: 'none' } as CSSProperties)
          : ({ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties)
      }
    >
      {children}
    </div>
  );
};

export default Reveal;
