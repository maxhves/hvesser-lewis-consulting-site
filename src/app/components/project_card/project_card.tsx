import React from 'react';
import Badge from '@/app/components/badge/badge';

//region Props

interface ProjectCardProps {
  className?: string,
  name: string,
  description: string,
  url: string,
  tags: TechnologyTag[],
}

//endregion

//region Implementation

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={props.className}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="bg-old-lace dark:bg-tiber rounded-3xl p-6 hover:shadow-lg transition-all duration-500 h-full">
          {/* Icon */}
          <div className="mb-4">
            <svg className="w-8 h-8 fill-cutty-sark dark:fill-aths-special" viewBox="0 0 40 40">
              <path
                d="M19.94 0C8.914 0 0 9.167 0 20.507c0 9.065 5.711 16.738 13.635 19.454.99.204 1.353-.441 1.353-.984 0-.475-.032-2.105-.032-3.803-5.547 1.223-6.703-2.444-6.703-2.444-.891-2.377-2.212-2.988-2.212-2.988-1.815-1.256.132-1.256.132-1.256 2.014.136 3.071 2.105 3.071 2.105 1.783 3.123 4.655 2.24 5.81 1.697.165-1.324.694-2.24 1.255-2.75-4.424-.475-9.079-2.24-9.079-10.118 0-2.24.792-4.074 2.047-5.5-.198-.509-.892-2.614.198-5.432 0 0 1.684-.543 5.48 2.105a18.803 18.803 0 0 1 4.985-.68c1.684 0 3.4.239 4.985.68 3.797-2.648 5.48-2.105 5.48-2.105 1.09 2.818.397 4.923.199 5.432 1.287 1.426 2.047 3.26 2.047 5.5 0 7.877-4.655 9.609-9.112 10.118.726.645 1.353 1.867 1.353 3.803 0 2.75-.032 4.957-.032 5.636 0 .543.363 1.188 1.353.985 7.923-2.717 13.635-10.39 13.635-19.455C39.88 9.167 30.934 0 19.94 0Z"/>
            </svg>
          </div>

          {/* Texts */}
          <div className="space-y-4 mb-8">
            <p className="text-lg font-medium text-tiber dark:text-old-lace">{props.name}</p>
            <p className="text-sm text-cutty-sark dark:text-aths-special">{props.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {props.tags?.map((tag) => (
              <Badge key={tag} label={tag}/>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;

//endregion