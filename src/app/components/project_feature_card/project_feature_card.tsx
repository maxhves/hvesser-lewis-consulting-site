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
      <div className="col-start-1 row-start-1 flex bg-aths-special h-full w-full rounded-3xl border-daintree border-2 border-opacity-10">
        <div className="h-full w-full flex justify-center items-center">
          <p className="bg-amethyst p-8 rounded-2xl text-old-lace">Background</p>
        </div>
      </div>

      {/* Info card */}
      <div className="col-start-1 row-start-1 flex">
        <div className="w-10/12 md:w-7/12 p-8 rounded-3xl bg-old-lace space-y-6 border-daintree border-2 border-opacity-10">
          {/* Texts */}
          <div className="space-y-4 text-cutty-sark">
            <p className="text-lg">{props.name}</p>
            <p className="font-light">{props.description}</p>
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