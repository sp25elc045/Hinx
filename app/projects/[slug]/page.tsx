import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectPageClient } from '../../../components/project-page-client'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
