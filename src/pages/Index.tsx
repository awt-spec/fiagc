import ProposalNav from "@/components/proposal/ProposalNav";
import ProposalHero from "@/components/proposal/ProposalHero";
import EmbedSection from "@/components/proposal/EmbedSection";
import ExecutiveLetter from "@/components/proposal/ExecutiveLetter";
import ModulesSection from "@/components/proposal/ModulesSection";
import BenefitsAndInfra from "@/components/proposal/BenefitsAndInfra";
import EconomicProposal from "@/components/proposal/EconomicProposal";
import VisionAndTimeline from "@/components/proposal/VisionAndTimeline";
import ProposalFooter from "@/components/proposal/ProposalFooter";
import ProposalChatbot from "@/components/proposal/ProposalChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalNav />
      <ProposalHero />
      <EmbedSection />
      <div id="modulos">
        <ModulesSection />
      </div>
      <div id="presentacion">
        <ExecutiveLetter />
      </div>
      <div id="beneficios">
        <BenefitsAndInfra />
      </div>
      <div id="vision">
        <VisionAndTimeline />
      </div>
      <div id="propuesta">
        <EconomicProposal />
      </div>
      <ProposalFooter />
      <ProposalChatbot />
    </div>
  );
};

export default Index;
