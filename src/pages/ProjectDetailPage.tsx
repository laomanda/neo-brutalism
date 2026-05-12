import { ArrowUpRight, ExternalLink, Mail, User, Layers, Activity, Layout, Target, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cn } from "../utils/cn";
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
            <div className="group relative h-full overflow-hidden rounded-[1.5rem] border-[3px] border-black bg-white shadow-[8px_8px_0_black]">
              {project.screenshotsKey && PROJECT_SCREENSHOTS[project.screenshotsKey][0] ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b-[3px] border-black">
                   <img 
                    src={PROJECT_SCREENSHOTS[project.screenshotsKey][0].src} 
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-[var(--card-2)] border-b-[3px] border-black" />
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="category">{project.status}</Badge>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--lime)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--orange)]" />
                  </div>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                <div className="mt-4">
                  <StackBadges stack={project.stack} max={4} />
                </div>
              </div>

              {/* Decorative Corner Label */}
              <div className="absolute -right-12 top-6 rotate-45 bg-[var(--lime)] px-12 py-1 text-[10px] font-black uppercase tracking-widest text-black border-y-2 border-black">
                Featured
              </div>
            </div>
          }
        />

        <DetailSection title={getText(projectCopy.overview, language)}>
          <Card className="p-8 md:p-12">
            <p className="text-xl font-bold leading-relaxed text-[var(--foreground)] md:text-2xl">{getText(overview, language)}</p>
          </Card>
          <div className="mt-8">
            <InfoGrid
              items={[
                { label: getText(projectCopy.meta.role, language), value: project.role, icon: User },
                { label: getText(projectCopy.meta.mainStack, language), value: project.stack.slice(0, 3).join(", "), icon: Layers },
                { label: getText(projectCopy.meta.status, language), value: project.status, icon: Activity },
                { label: getText(projectCopy.meta.type, language), value: getText(project.subtitle, language), icon: Layout },
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature} accent={project.accent} className="group/feature relative overflow-hidden p-8" interactive>
                <div className="relative z-10">
                  <span className="font-heading text-4xl font-black opacity-20">0{index + 1}</span>
                  <h3 className="mt-4 text-2xl font-black leading-tight uppercase">{feature}</h3>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-black/5 blur-2xl transition-transform group-hover/feature:scale-150" />
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
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <Card key={index} accent="orange" className="group/challenge relative overflow-hidden p-8" interactive>
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[3px_3px_0_black] transition-transform group-hover/challenge:-rotate-12">
                    <Activity size={24} strokeWidth={3} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-black uppercase leading-tight tracking-tight">
                      {language === "id" ? `Tantangan 0${index + 1}` : `Challenge 0${index + 1}`}
                    </h3>
                    <p className="mt-2 text-lg font-bold leading-relaxed opacity-80">{challenge}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-black/5 blur-2xl" />
              </Card>
            ))}
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.results, language)}>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((result, index) => {
              const accentData: any[] = [
                { color: "lime", bg: "bg-lime-400", text: "text-black", num: "text-lime-600" },
                { color: "blue", bg: "bg-blue-500", text: "text-white", num: "text-blue-600" },
                { color: "orange", bg: "bg-orange-500", text: "text-white", num: "text-orange-600" },
                { color: "purple", bg: "bg-purple-500", text: "text-white", num: "text-purple-600" },
              ];
              const currentAccent = accentData[index % accentData.length];
              const icons = [ArrowUpRight, Target, ShieldCheck, Zap];
              const Icon = icons[index % icons.length] || Sparkles;
              
              return (
                <Card key={result} accent={currentAccent.color} className="group/result flex flex-col p-8" interactive>
                  <div className={cn(
                    "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black shadow-[4px_4px_0_black] transition-all group-hover/result:-translate-y-1 group-hover/result:-rotate-6 group-hover/result:shadow-[6px_6px_0_black]",
                    currentAccent.bg,
                    currentAccent.text
                  )}>
                    <Icon size={32} strokeWidth={3} />
                  </div>
                  <div className="flex-1">
                     <p className={cn("text-4xl font-black opacity-50", currentAccent.num)}>0{index + 1}</p>
                     <p className="mt-2 text-lg font-black leading-tight uppercase tracking-tight">{result}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </DetailSection>

        <DetailSection title={getText(projectCopy.ctaTitle, language)}>
          <Card accent={project.accent} className="flex flex-col items-center justify-between gap-8 p-10 text-center md:flex-row md:text-left">
            <div>
               <h3 className="text-3xl font-black uppercase tracking-tighter md:text-4xl">
                 {language === "id" ? "Tertarik dengan project ini?" : "Interested in this project?"}
               </h3>
               <p className="mt-2 text-lg font-bold opacity-70">
                 {language === "id" ? "Mari diskusikan bagaimana saya bisa membantu bisnis Anda." : "Let's discuss how I can help your business."}
               </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link className={buttonVariants("primary", "lg")} to="/#contact">
                {getText(projectCopy.contact, language)} <Mail size={20} strokeWidth={3} />
              </Link>
              <Link className={buttonVariants("secondary", "lg")} to="/#projects">
                {getText(projectCopy.backToProjects, language)} <ArrowUpRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </Card>
        </DetailSection>
      </Container>
    </section>
  );
}
