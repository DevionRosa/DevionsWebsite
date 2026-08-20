import { useCallback, useEffect, useMemo, useState } from 'react';
import DriftWall, { type DriftWallItem } from './DriftWall';
import ProjectModal from './ProjectModal';
import { projects, type Project } from '../data/projects';

/** Pick a tile column count that fits the current viewport width. */
const getColumnsForWidth = (w: number): number => (w < 640 ? 2 : w < 1024 ? 3 : 5);

const useResponsiveColumns = () => {
  const [columns, setColumns] = useState(() => getColumnsForWidth(window.innerWidth));

  useEffect(() => {
    const update = () => setColumns(getColumnsForWidth(window.innerWidth));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return columns;
};

const ProjectWall = () => {
  const columns = useResponsiveColumns();
  const [selected, setSelected] = useState<Project | null>(null);

  const items = useMemo<DriftWallItem[]>(
    () => projects.map(p => ({ image: p.img, title: p.name, href: undefined })),
    []
  );

  const handleTileClick = (item: DriftWallItem) => {
    const project = projects.find(p => p.name === item.title);
    if (project) setSelected(project);
  };

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <div>
      <div style={{ height: 'min(72vh, 680px)' }}>
        <DriftWall
          items={items}
          columns={columns}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          pauseOnHover
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#060010"
          onTileClick={handleTileClick}
        />
      </div>
      <ProjectModal project={selected} onClose={handleClose} />
    </div>
  );
};

export default ProjectWall;
