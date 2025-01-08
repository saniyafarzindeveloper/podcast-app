// import React from 'react'

// export default function PodcastDetails({params} : {params: {podcastId: string}}) {
//   return (
//     <div>
//         <p className='text-white-1'>
//             podcast details for {params.podcastId}
//         </p>
//     </div>
//   )
// }


import React from 'react';

type Props = {
  params: {
    podcastId: string;
  };
};

export default async function PodcastDetails({ params }: Props) {
  const { podcastId } = params; // Access podcastId after resolving params

  return (
    <div>
      <p className="text-white-1">
        Podcast details for {podcastId}
      </p>
    </div>
  );
}
