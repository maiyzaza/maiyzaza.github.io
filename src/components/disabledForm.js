import React, { useEffect, useState } from "react";
  
export default function DisabledForm() {
  return (
    <textarea
      // value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis magna, porta at rutrum et, vestibulum quis neque. Etiam sapien dolor, condimentum nec gravida non, maximus ut augue."
      // value={message}
      // onChange={(e) => setMessage(e.target.value)}
      disabled
    ></textarea>
  );
}
  