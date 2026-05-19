import Card from '@/components/Card'
import { projects } from '@/data/projects'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <h1>Portfolio</h1>
        <div>
            {
                projects.map(project => (
                    <Link key={project.id} href={`/portfolio/${project.slug}`}>
                        <Card title={project.title} description={project.description} />
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Portfolio