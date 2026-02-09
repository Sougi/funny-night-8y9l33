import { useState, useEffect } from "react";

export default function App() {
  //use stat
  const [nasi7a, hetnasiha] = useState("nasiha");
  const [chhal, hetchhal] = useState(0);
  //get advice

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    hetnasiha(data.slip.advice);
    hetchhal((c) => c + 1);
    console.log(chhal - 1);
  }

  useEffect(
    function () {
      getAdvice();
    },
    [0]
  );

  return (
    <div>
      <h1>{nasi7a}</h1>
      <button onClick={getAdvice}>get advice</button>
      <Message chhal={chhal} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      rak 9rity <strong>{props.chhal - 1}</strong> nasi7a acherif
    </p>
  );
}
