import { ConclusionBlockContainer } from "@/containers/ConclusionBlockContainer";
import { FeedbackBlock } from "./FeedbackBlock/FeedbackBlock";
import { ImageBlock } from "./ImageBlock/ImageBlock";
import { RateBlock } from "./RateBlock/RateBlock";

export const Landing = () => {
  return (
    <>
      <ImageBlock />
      <FeedbackBlock />
      <RateBlock />
      <ConclusionBlockContainer />
    </>
  );
};
