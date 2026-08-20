import { useEffect, useRef } from 'react';
import type { Project } from '../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const card = cardRef.current;
        if (!card) return;
        const focusables = card.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    cardRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (previouslyFocused && previouslyFocused !== document.body) {
        previouslyFocused.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={onClose}>
      <div
        ref={cardRef}
        className="project-modal__card"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close project details">
          ×
        </button>

        <img className="project-modal__img" src={project.img} alt={project.name} />

        <div className="project-modal__body">
          <h3 id="project-modal-title" className="project-modal__title">
            {project.name}
          </h3>
          <p className="project-modal__desc">{project.description}</p>

          <div className="project-modal__tech">
            {project.tech.map(tech => (
              <span key={tech} className="project-modal__chip">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="project-modal__btn"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
