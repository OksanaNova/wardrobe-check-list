import "./App.css";
import Banner from "./Banner";
import TopMenu from "./TopMenu";
import Wardrobe from "./Wardrobe";

function App() {
  return (
    <div className="app">
      <TopMenu />
      <Banner />
      <div className="about">
        <p className="about_text">
          Wardrobe basics are our raison d'être, the principle we live by—and on
          the off-chance that they aren’t yours yet, they will be hereafter. "I
          don’t even like the word 'basics'", says our co-founder, Stefania
          Allen, "because these pieces are so much more. It’s your core, your
          foundation." The kind that you can wear day to night, from here to
          there, whether you’re 25 or 55.
        </p>
        <p className="about_text">
          After years of searching high and low, we’ve nailed down the absolute
          best garments in every category (tank tops, trousers, trench coats,
          you name it), and we’re disclosing them for the first time. Smart
          wardrobe basics for women will play the long game, continuing to bring
          value to your every appearance—not just now, but ten years from now.
          Welcome to your new closet.
        </p>
      </div>
      <Wardrobe />
      <div className="source">
        <p>source: editorialist.com</p>
      </div>
    </div>
  );
}

export default App;
