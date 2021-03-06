import React from "react";
function Citation({ quotes }) {
  return (
    <div className="DisplayQuote">
      <img src={quotes.image} alt={quotes.character} />
      <ul>
        <li>Quote: {quotes.quote}</li>
        <li>Name: {quotes.character}</li>
      </ul>
    </div>
  );
}
export default Citation;
