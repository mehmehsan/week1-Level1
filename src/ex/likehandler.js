import React, { useState } from "react";
export default function LikeHandler() {
  const [items, setItemStatus] = useState([
    {
      item: "Item 1",
      status: "liked"
    },
    {
      item: "Item 2",
      status: "notliked"
    },
    {
      item: "Item 3",
      status: "notliked"
    },
    {
      item: "Item 4",
      status: "liked"
    }
  ]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.item}
            <button
              id={index}
              onClick={() => {
                if (item.status === "liked")
                  setItemStatus(
                    [...items, (item.status = "notliked")].splice(
                      0,
                      items.length
                    )
                  );
                else
                  setItemStatus(
                    [...items, (item.status = "liked")].splice(0, items.length)
                  );
              }}
            >
              {item.status === "liked" && <span>❤️</span>}
              {item.status === "notliked" && (
                <span style={{ fontSize: "1.1em" }}>♡</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  // ❤   💓 ❤️
}
