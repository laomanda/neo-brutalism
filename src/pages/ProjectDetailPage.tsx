import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BackLink } from "../components/common/BackLink";
import { Container } from "../components/common/Container";
import { DetailHero } from "../components/common/DetailHero";
import { DetailSection } from "../components/common/DetailSection";
import { FeatureList } from "../components/common/FeatureList";
import { InfoGrid } from "../components/common/InfoGrid";
import { ScreenshotGrid } from "../components/common/ScreenshotGrid";
import { StackBadges } from "../components/common/StackBadges";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { Card } from "../components/ui/Card";
import { SITE } from "../constants/site";
import { detailCopy } from "../data/detailCopy.data";
import { PROJECT_SCREENSHOTS } from "../data/assets.data";
import { projects } from "../data/projects.data";
import { useLanguage } from "../hooks/useLanguage";
import { getList } from "../utils/getList";
import { getText } from "../utils/getText";
import { NotFoundPage } from "./NotFoundPage";

import { SEO } from "../components/common/SEO";
import { generateCreativeWorkSchema } from "../utils/seo";

const projectCopy = detailCopy.project;

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const overview = project.overview ?? project.description;
  const features = getList(project.features, language);
  const responsibilities = getList(project.responsibilities ?? projectCopy.fallbackResponsibilities, language);
  const challenges = getList(project.challenges ?? projectCopy.fallbackChallenges, language);
  const results = getList(project.results ?? projectCopy.fallbackResults, language);
  const screenshotLabels = projectCopy.screenshotLabels[language];

  return (
    <section className="section-padding pt-6">
      <SEO
        title={`${project.title} — Project Detail`}
        description={getText(project.description, "id")}
        path={`/projects/${project.slug}`}
        type="article"
        schemas={[generateCreativeWorkSchema(project.title, getText(project.description, "id"), `/projects/${project.slug}`)]}
      />
      <Container>
        <div className="mb-8">
          <BackLink to="/#projects">{getText(projectCopy.backToProjects, language)}</BackLink>
        </div>

        <DetailHero
          eyebrow={getText(projectCopy.projectDetail, language)}
          title={project.title}
          subtitle={getText(project.subtitle, language)}
          description={getText(project.description, language)}
          accent={project.accent}
          metaItems={[
            { label: getText(projectCopy.meta.role, language), value: project.role },
            { label: getText(projectCopy.meta.status, language), value: project.status },
            { label: getText(projectCopy.meta.stack, language), value: `${project.stack.length}` },
            { label: getText(projectCopy.meta.type, language), value: getText(project.subtitle, language) },
          ]}
          actions={
            <>
              {project.github ? (
                <a className={buttonVariants("primary", "md")} href={project.github} rel="noopener noreferrer" target="_blank">
                  {getText(projectCopy.viewGithub, language)} <ExternalLink size={18} strokeWidth={3} />
                </a>
              ) : null}
              {project.liveUrl ? (
                <a className={buttonVariants("secondary", "md")} href={project.liveUrl} rel="noopener noreferrer" target="_blank">
                  {getText(projectCopy.viewLive, language)} <ExternalLink size={18} strokeWidth={3} />
                </a>
              ) : null}
              <Link className={buttonVariants("accent", "md")} to="/#contact">
                {getText(projectCopy.contact, language)} <Mail size={18} strokeWidth={3} />
              </Link>
            </>
          }
          rightContent={
            <div className="h-full rounded-[1.5rem] border-[3px] border-[var(--border)] bg-[var(--background)] p-5 shadow-[6px_6px_0_var(--border)]">
              <div className="rounded-2xl border-[3px] border-[var(--border)] bg-[var(--card)] p-4">
                <p className="font-heading text-3xl font-extrabold">{project.title}</p>
                <div className="mt-5">
                  <StackBadges stack={project.stack} max={5} />
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="h-16 rounded-xl border-2 border-[var(--border)] bg-[var(--primary)]" />
                  <div className="h-16 rounded-xl border-2 border-[var(--border)] bg-[var(--lime)]" />
                  <div className="h-16 rounded-xl border-2 border-[var(--border)] bg-[var(--orange)]" />
                </div>
              </div>
            </div>
          }
        />

        <DetailSection title={getText(projectCopy.overview, language)}>
          <Card>
            <p className="font-semibold leading-7 text-[var(--foreground)]/80">{getText(overview, language)}</p>
          </Card>
          <div className="mt-5">
            <InfoGrid
              items={[
                { label: getText(projectCopy.meta.role, language), value: project.role },
                { label: getText(projectCopy.meta.mainStack, language), value: project.stack.slice(0, 2).join(", ") },
                { label: getText(projectCopy.meta.status, language), value: project.status },
                { label: getText(projectCopy.meta.route, language), value: project.route },
              ]}
            />
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.roleResponsibilities, language)}>
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            <Card accent={project.accent}>
              <Badge variant="role">{project.role}</Badge>
              <h3 className="mt-5 text-3xl font-extrabold">{project.title}</h3>
              <p className="mt-3 font-semibold leading-7 text-[var(--foreground)]/80">
                {project.problem ? getText(project.problem, language) : getText(project.description, language)}
              </p>
            </Card>
            <Card>
              <FeatureList items={responsibilities} variant="check" />
            </Card>
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.coreFeatures, language)}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature} accent={project.accent} className="p-4" interactive>
                <p className="font-heading text-sm font-extrabold text-[var(--foreground)]/60">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold">{feature}</h3>
              </Card>
            ))}
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.techStack, language)} description={getText(projectCopy.stackNote, language)}>
          <Card>
            <StackBadges stack={project.stack} max={project.stack.length} />
          </Card>
        </DetailSection>

        <DetailSection title={getText(projectCopy.screenshots, language)}>
          <ScreenshotGrid
            screenshots={project.screenshotsKey ? [...PROJECT_SCREENSHOTS[project.screenshotsKey]] : undefined}
            language={language}
            accent={project.accent}
          />
        </DetailSection>

        <DetailSection title={getText(projectCopy.challenges, language)}>
          <Card accent="orange">
            <FeatureList items={challenges} variant="bullet" />
          </Card>
        </DetailSection>

        <DetailSection title={getText(projectCopy.results, language)}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {results.map((result, index) => (
              <Card key={result} accent={index % 2 === 0 ? "lime" : project.accent} interactive>
                <p className="font-heading text-4xl font-extrabold text-[var(--primary)]">0{index + 1}</p>
                <p className="mt-4 font-bold leading-6">{result}</p>
              </Card>
            ))}
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.ctaTitle, language)}>
          <Card accent={project.accent} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link className={buttonVariants("outline", "md")} to="/#projects">
              {getText(projectCopy.backToProjects, language)} <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
            <Link className={buttonVariants("accent", "md")} to="/#contact">
              {getText(projectCopy.contact, language)} <Mail size={18} strokeWidth={3} />
            </Link>
            {project.github ? (
              <a className={buttonVariants("primary", "md")} href={project.github} rel="noopener noreferrer" target="_blank">
                {getText(projectCopy.viewGithub, language)} <ExternalLink size={18} strokeWidth={3} />
              </a>
            ) : null}
          </Card>
        </DetailSection>
      </Container>
    </section>
  );
}
