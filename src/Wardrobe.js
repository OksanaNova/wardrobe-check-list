import { useState } from "react";
import { essentials } from "./essentials";

function Wardrobe() {
  const [wardrobeItems, setWardrobeItems] = useState(essentials);

  const [showText, setShowText] = useState(false);

  const showTextBtn = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
  };

  const removeItem = (id) => {
    let newWardrobeItems = wardrobeItems.filter((element) => element.id !== id);
    setWardrobeItems(newWardrobeItems);
  };

  return (
    <div className="wardrobe">
      {wardrobeItems.map((item) => {
        const { id, name, image, description, showMore } = item;
        return (
          <div className="wardrobe_main" key={id}>
            <div>
              <h3>{name}</h3>
            </div>

            <div className="wardrobe_container">
              <div className="wardrobe_container_one">
                <img className="garment" src={image} alt="garment" />
              </div>

              <div className="wardrobe_container_one">
                <div>
                  <p className="show_description">
                    {showMore
                      ? description
                      : description.substring(0, 180) + "..."}
                    <button
                      className="show_hide"
                      onClick={() => showTextBtn(item)}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  </p>
                </div>
                <div>
                  <button className="removeBtn" onClick={() => removeItem(id)}>
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wardrobe;
