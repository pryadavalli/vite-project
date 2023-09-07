import { useState } from "react";
import Alert from "./Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Delhi", "Hyderabad"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <h1 className="text-center">Hello World</h1>
          </Alert>
        )}
      </div>
      <div>
        <Button
          color="danger"
          onClick={() => {
            console.log("button clicked");
            setAlertVisibility(true);
          }}
        >
          My Button
        </Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
