import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const StartHerePage = () => {

    return (
        <Layout>
            <SEO title={"Best Hosting Resources and articles"} description={"Best Hosting Resources and articles - top10hostingonweb.com"} />

            <article
                className="blog-category"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{"Start Here - Best Resources and articles"}</h1>
                </header>

                <section>
                    <ul>
                        <li>
                            <p>
                                <strong>Create a website/blog uisng wordpress:</strong>   WordPress is a free, open-source blogging tool, but it is not just a blogging tool. It can be customized as business site, shopping site, auction site and more.<br />
                                <Link to="/best-wordpress-hosting-providers-at-affordable-price/">
                                    6 Reasons WordPress Is Best For Blogging
        </Link>
                            </p>

                        </li>
                        <li>
                        <p>
                            <strong>Siteground Review:</strong> SiteGround is one of few web hosts that offers fast and reliable shared hosting(with 99.99% gurantee). You can create a fast website or blog using SiteGround and it offes all the tools for you to succeed.<br />
                            <Link to="/siteground-review">
                            Siteground Review: The Insider’s Guide and Expert Opinion
    </Link>
                        </p>

                    </li>
                    </ul>






                </section>

            </article>
        </Layout>
    )
}


export default StartHerePage