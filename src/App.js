
import React, { useEffect, useState } from "react";
import Destroyer from "domain-destroyer";
import "domain-destroyer/dist/css/destroyer.min.css";

function App() {
  let myParent;
  const [destroyer, setDestroyer] = useState(null);

  const options = {
    defaultVolume: 0.5,
    particleLimit: 20,
    zIndexStart: 5,
    onDamage: (pageHealth) => console.log(pageHealth),
    pageHealth: 200,
    volumeChangeDelta: 0.5,
  };

  useEffect(() => {
    myParent && setDestroyer(new Destroyer(myParent, options));
  }, [myParent]);

  useEffect(() => {
    destroyer && destroyer.inject();
  }, [destroyer]);

  return <div className="myParent" ref={(el) => (myParent = el)} />;
}

export default App;

