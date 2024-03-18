import { Form } from "react-router-dom";
import { USStates } from "../../vite-env.d";
import './Index.page.css'
import { useState } from "react";



const Index= () => {
  const [currentState, setCurrentState] = useState<keyof typeof USStates>(Object.keys(USStates)[0] as keyof typeof USStates);

  return (
    <div className="main">
      <div className="hero-img">
        <img src="/hero.png" alt="Train Advisor hero img" />
      </div>
      <div className="state-form">
        <h1>Find the most beautiful parks in choosen state!</h1>
        <Form method="get" action="/parks">
          <p>
            <select name='stateCode' value={currentState}
              onChange={(e) => {
                setCurrentState(e.target.value as keyof typeof USStates);
              }}>
              {getEnumKeys(USStates).map((key) => (
                <option key={key} value={key}>
                  {USStates[key]}
                </option>
              ))}
              </select>
          </p>
          <p>
            <button type="submit">Go to explore!</button>
          </p>
        </Form>
      </div>
    </div>
  )
}




function getEnumKeys<
  T extends string,
  TEnumValue extends string | number,
>(enumVariable: { [key in T]: TEnumValue }) {
  return Object.keys(enumVariable) as Array<T>;
}


export default Index