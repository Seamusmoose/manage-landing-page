import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/Button";
import Layout from "@/components/Layout";
import dataImage from "@images/illustration-intro.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage Landing Page</title>
        <meta name="Manage Landing Page" content="Manage Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div>
          <section className="flex f_col">
            <Image src={dataImage} width={400} height={400} alt="data-image" />
            <h1 className="primary-heading fw-bold">
              Bring everyone together to build better products.
            </h1>
          </section>
          <section>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
            <div className="image__blob">b</div>
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
            <h3>01 Track company-wide progress</h3>{" "}
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
            <h3>02 Advanced built-in reports</h3>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
            <h3>03 Everything you need in one place</h3>{" "}
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </section>
          <section>
            <h2>What they’ve said</h2>
            <h3>Anisha Li </h3>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            <h3>Ali Bravo</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
            <h3>Richard Watts</h3>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
            <h3>Shanai Gough</h3>
            <p>
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
            <Button>Get Started </Button>
            <h2>Simplify how your team works today.</h2>
            <Button>Get Started</Button>
          </section>
        </div>
      </Layout>
    </>
  );
}
