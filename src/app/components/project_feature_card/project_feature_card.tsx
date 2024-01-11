import React, {ReactNode} from 'react';
import Badge from '@/app/components/badge/badge';

//region Props

type TechnologyTag = 'Kotlin' | 'Swift' | 'Android' | 'iOS';

interface ProjectFeatureCardProps {
  name: string,
  description: ReactNode,
  tags: TechnologyTag[],
}

//endregion

//region Implementation

function ProjectFeatureCard(props: ProjectFeatureCardProps) {
  return (
    <div className="grid w-full">
      {/* Background */}
      <div className="col-start-1 row-start-1 flex bg-aths-special dark:bg-daintree h-full w-full rounded-3xl border-daintree dark:border-aths-special border-2 border-opacity-10 dark:border-opacity-10">
        <div className="h-full w-full flex justify-center items-center">
          <p className="bg-amethyst p-8 rounded-2xl text-old-lace">Background</p>
        </div>
      </div>

      {/* Info card */}
      <div className="col-start-1 row-start-1 flex">
        <div className="w-11/12 md:w-7/12 p-8 rounded-3xl bg-old-lace dark:bg-tiber space-y-6 border-daintree dark:border-aths-special border-2 border-opacity-10 dark:border-opacity-10">
          {/* Texts */}
          <div className="space-y-4 text-cutty-sark dark:text-aths-special">
            <p className="text-lg font-medium">{props.name}</p>
            <p className="text-sm">{props.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {props.tags?.map((tag) => (
              <Badge key={tag} label={tag}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFeatureCard;

//endregion