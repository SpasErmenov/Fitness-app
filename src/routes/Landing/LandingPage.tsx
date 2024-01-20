import { FeedbackBlock } from "@/components/FeedbackBlock/FeedbackBlock";
import { ImageBlock } from "@/components/ImageBlock/ImageBlock";
import { RateBlock } from "@/components/RateBlock/RateBlock";
import { ConclusionBlockContainer } from "@/containers/ConclusionBlockContainer";

export const LandingPage = () => {
  return (
    <>
      <ImageBlock />
      <FeedbackBlock />
      <RateBlock />
      <ConclusionBlockContainer />
    </>
  );
};
