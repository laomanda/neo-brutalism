import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { homepageCopy } from "../../data/homepageCopy.data";
import { uiCopy } from "../../data/uiCopy.data";
import type { Language } from "../../types/common.types";
import type { Project } from "../../types/project.types";
import { getText } from "../../utils/getText";
import { Badge } from "../ui/Badge";
import { buttonVariants } from "../ui/buttonVariants";
import { Card } from "../ui/Card";
import { StackBadges } from "./StackBadges";
import { PROJECT_SCREENSHOTS } from "../../data/assets.data";
import { ProjectScreenshotFrame } from "./ProjectScreenshotFrame";

type ProjectCardProps = {
  project: Project;
  language: Language;
};

const cardCopy = homepageCopy.projectGallery;

export function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <Card accent={project.accent} className="group flex h-full flex-col justify-between gap-6 overflow-hidden" interactive>
      <div>
        <motion.div
          className="mb-5"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.18 }}
        >
          {project.screenshotsKey ? (
            <ProjectScreenshotFrame
              screenshot={PROJECT_SCREENSHOTS[project.screenshotsKey][0]}
              language={language}
              accent={project.accent}
            />
          ) : (
            <div className="min-h-40 rounded-2xl border-[3px] border-[var(--border)] bg-[var(--background)] p-4 shadow-[4px_4px_0_var(--border)]">
              <div className="flex h-full min-h-32 flex-col justify-between rounded-xl border-2 border-[var(--border)] bg-[var(--card)] p-4">
                <p className="font-heading text-2xl font-extrabold text-[var(--primary)]">{project.title}</p>
                <p className="text-sm font-extrabold uppercase text-[var(--foreground)]/70">
                  {getText(cardCopy.screenshotPlaceholder, language)}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <h3 className="text-2xl font-extrabold">{project.title}</h3>
        <p className="mt-2 font-bold text-[var(--primary)]">{getText(project.subtitle, language)}</p>

        <div className="mt-4 mb-4 flex flex-wrap gap-2">
          <Badge variant="status">{project.status}</Badge>
          <Badge variant="role">{project.role}</Badge>
        </div>

        <p className="mt-4 line-clamp-4 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
          {getText(project.description, language)}
        </p>
        <div className="mt-5">
          <StackBadges stack={project.stack} max={5} />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link className={buttonVariants("outline", "sm")} to={project.route}>
          {getText(cardCopy.detailCta, language)} <ArrowUpRight size={17} strokeWidth={3} />
        </Link>
        {project.github ? (
          <a className={buttonVariants("secondary", "sm")} href={project.github} rel="noopener noreferrer" target="_blank">
            {getText(uiCopy.github, language)} <ExternalLink size={16} strokeWidth={3} />
          </a>
        ) : null}
        {project.liveUrl ? (
          <a className={buttonVariants("accent", "sm")} href={project.liveUrl} rel="noopener noreferrer" target="_blank">
            {getText(uiCopy.liveDemo, language)} <ExternalLink size={16} strokeWidth={3} />
          </a>
        ) : null}
      </div>
    </Card>
  );
}
