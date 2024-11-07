import Cards from 'components/pages/case-studies/cards';
import Hero from 'components/pages/case-studies/hero';
import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import { getAllWpCaseStudiesPosts, getAllWpCaseStudiesCategories } from 'utils/api-posts';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.caseStudies);

const CaseStudiesPage = async () => {
  const сaseStudies = await getAllWpCaseStudiesPosts();
  const categories = await getAllWpCaseStudiesCategories();

  return (
    <Layout>
      <Hero items={сaseStudies} />
      <Cards items={сaseStudies} categories={categories} />
      <CTA
        title="Ready to get started with Neon?"
        description="Interested in increasing your free tier limits or learning about pricing? Complete the form below to get in touch"
        buttonText="Contact sales"
        buttonUrl={LINKS.contactSales}
      />
    </Layout>
  );
};

export default CaseStudiesPage;

export const revalidate = 60;
