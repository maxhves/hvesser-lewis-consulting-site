import React, {ReactNode} from 'react';
import Badge from '@/app/components/badge/badge';

//region Props

interface ProjectFeatureCardProps {
  name: string,
  description: ReactNode,
  tags: TechnologyTag[],
  promoImageUrl: string,
}

//endregion

//region Implementation

function ProjectFeatureCard(props: ProjectFeatureCardProps) {
  return (
    <div className="flex bg-old-lace dark:bg-tiber rounded-3xl">
      <div
        className="bg-cover rounded-3xl bg-center"
        style={{backgroundImage: `url(${props.promoImageUrl})`}}
      >
        {/* Info card */}
        <div className="flex">
          <div className="w-11/12 sm:w-9/12 md:w-6/12 h-fit p-8 rounded-3xl bg-old-lace dark:bg-tiber space-y-6 border-daintree dark:border-aths-special border-opacity-10 dark:border-opacity-10 border-2">
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
    </div>
  );
}

export default ProjectFeatureCard;

//endregion