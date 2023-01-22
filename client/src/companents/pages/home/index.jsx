import React from "react";
import CommunityExperts from "./community experts";
import ExploreTopSubject from "./explore top subjects";
import LearnNewSkills from "./learn new skills";
import LearnerOutcomes from "./learner outcomes";
import OnlineLearningPlatform from "./online learning platform";
import OurFeaturedCourses from "./our featured courses";
import TakeTheNextStep from "./take the next step";

const Home = () => {
  return (
    <div>
      <OnlineLearningPlatform />
      <OurFeaturedCourses />
      <LearnNewSkills />
      <ExploreTopSubject />
      <LearnerOutcomes />
      <CommunityExperts />
      <TakeTheNextStep />
    </div>
  );
};

export default Home;
