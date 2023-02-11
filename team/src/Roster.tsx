import { observer } from "mobx-react";
import React from "react";
import Athlete from "./Athlete";

const lebronJames = new Athlete("Lebron James", 38);
const stephCurry = new Athlete("Steph Curry", 34);

function Roster() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Is it their birthday?</th>
      </tr>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>

            <td>
              <button
                type="button"
                style={{ width: "100%" }}
                onClick={() => athlete.wishHappyBirthday()}
              >
                Wish happy birthday 🎊
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster);
