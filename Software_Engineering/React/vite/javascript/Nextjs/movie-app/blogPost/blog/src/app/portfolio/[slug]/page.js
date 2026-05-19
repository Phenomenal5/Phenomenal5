import { projects } from '@/data/projects'
import Image from 'next/image'
import React from 'react'

const ProjectPage = async ({params}) => {
    const { slug } = await params

    const project = projects.find(p => p.slug == slug)

    if (!project) return <h1>Project Not Found</h1>

  return (
    <div className="min-h-screen py-10 max-w-2xl mx-auto space-y-4">
        <h1 className="text-gray-600">{project.title}</h1>
        <p>{project.description}</p>
        <Image 
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className='rounded-lg'
        />
    </div>
  )
}

export default ProjectPage