import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/Button";
import Layout from "@/components/Layout";
import dataImage from "@images/illustration-intro.svg";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import bgImage from "../../public/images/bg-tablet-pattern.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage Landing Page</title>
        <meta name="Manage Landing Page" content="Manage Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <>
          <section>
            <div className="container">
              <div className="even-columns">
                <div>
                  <h1 className="fs-primary-heading fw-bold">
                    Bring everyone together to build better products.
                  </h1>
                  <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                  </p>
                  <Button className="button">Get Started</Button>
                </div>
                <div>
                  {" "}
                  <Image
                    src={dataImage}
                    width={400}
                    height={400}
                    alt="data-image"
                    className="data-image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container">
              <div className="even-columns">
                <div>
                  <h2 className="fs-secondary-heading fw-bold">
                    What’s different about Manage?
                  </h2>
                  <p>
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.{" "}
                  </p>
                </div>
                <div>
                  <ul className="numbered-items" role="list">
                    <li>
                      <h3 className="fs-600 fw bold">
                        Track company-wide progress
                      </h3>
                      <p>
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                      </p>
                    </li>
                    <li>
                      <h3 className="fs-600 fw bold">
                        Advanced built-in reports
                      </h3>
                      <p>
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                      </p>
                    </li>
                    <li>
                      <h3 className="fs-600 fw bold">
                        Everything you need in one place
                      </h3>
                      <p>
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="carousel">
            <h2 className="fs-secondary-heading">What they’ve said</h2>
            {/* carousel header */}
            <Button className="button">Get Started</Button>
          </section>
          <section className="cta | bg-accent-400 text-neutral-100">
            <div className="container">
              <div className="even-columns">
                <div>
                  <p className="fs-secondary-heading fw-bold">
                    Simplify how your team works today.
                  </p>
                </div>
                <div>
                  <Button className="button" data-type="inverted">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  );
}
