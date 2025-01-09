import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="font-bold text-20 text-white-1"> Trending podcasts</h1>
      {podcastData.map(({id, title, description, imgURL}) => (
        <PodcastCard
        key={id}
        imgUrl = {imgURL}
        title={title}
        description = {description}
        podcastId = {id}
        />
      ))}
      </section>
    </div>
  );
}
