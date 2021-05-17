import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AffDisclosure =  () => {

  return (
    <Layout>
      <SEO title={"Affiliate Disclosure "} description={"Affiliate Disclosure "} />

      <article
        className="blog-category"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{"Affiliate Disclosure "}</h1>
        </header>
        
        <section>
        <p>
        www.top10hostingonweb.com is a participant of  affiliate advertising programs that provides websites to earn advertising fees by linking to these sites and its affiliate websites.
        </p><p>
        The Web pages may be linked to affiliate links, so the owner of this site will make a referral commission. We provide genuine information with our unbiased opinions and experiences. We do a lot of research work by considering product reviews, ratings, and interacting with customers. Any product description, statistics, price, and warranty information should be verified by the manufacturer or providers.
        </p> <p>
        We assure you that we only recommend the products that are safe and easy to use because we value your trust.
        
        Any click on https://top10hostingonweb.com that leads to an external source could be an Affiliate link and we may or may not receive compensation from the sale.
        </p>
        
      </section>
        
      </article>
    </Layout>
  )
}
 
export default AffDisclosure