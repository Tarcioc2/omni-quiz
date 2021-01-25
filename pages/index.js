import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Head from "next/head";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Yugioh Quiz - AluraQuiz immersion</title>
        <meta name="title" content="Yugioh Quiz - AluraQuiz immersion" />
        <meta
          name="description"
          content="Simples Yugioh Quiz website created as a practice exercise for Alura's React Next.JS Immersion week"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://omni-quiz.tarcioc2.vercel.app/"
        />
        <meta property="og:title" content="Yugioh Quiz - AluraQuiz immersion" />
        <meta
          property="og:description"
          content="Simples Yugioh Quiz website created as a practice exercise for Alura's React Next.JS Immersion week"
        />
        <meta
          property="og:image"
          content="https://cdn.game.tv/game-tv-content/images_2/default/game_banner/fed14e2721eb815840dc55347320d12b/en/fed14e2721eb815840dc55347320d12b.jpg"
        ></meta>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz</h1>

            <p>Simple quiz template</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tarcioc2" />
    </QuizBackground>
  );
}
