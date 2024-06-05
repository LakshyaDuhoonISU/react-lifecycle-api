import { useState } from "react";

function Items() {

    let [count, setCount] = useState(2);
    let [items, setItems] = useState(["Item 1"]);

    return (
        <>
            <button onClick={() => {
                let copyItems = [...items];
                setCount(count + 1);
                copyItems.push("Item " + count);
                setItems(copyItems);

            }}>Click to add item</button>
            <h1>
                {
                    items.map((x) => {
                        return (
                            <h1>{x}</h1>
                        );
                    }
                    )
                }
            </h1>
        </>
    )
}

export default Items