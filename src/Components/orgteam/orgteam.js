import React from "react";
import "./orgteam.css";
import IEEE from "./img/IEEE.svg";
import BIF from "./img/BIF 1.svg";

const orgteam = () => {
  return (
    <div>
      <section>
        <div class="heading">Organising Team</div>
        <hr class="line" />
        <body>
          <img class="symb" src={IEEE} alt="IEEE logo" />
          <p class="txt">
            IEEE Computer Society, VIT is an eminent student chapter belonging
            to the Madras Section of IEEE Region 10. It was formed in February
            of 2012 with the aim of solving modern-day problems by understanding
            and harnessing cutting-edge technologies. IEEE-CS VIT is one of the
            top technology-driven chapters that are part of Vellore Institute of
            Technology, Vellore.
          </p>
          <img class="symb" src={BIF} alt="BIF logo" />
          <p class="txt">
            BIF is a globally recognized youth-led organization that encourages
            young people to get involved in community development through
            projects in fields of women empowerment, primary education,
            alternate sources of employment, leadership training, life skills
            development and youth empowerment.
          </p>
        </body>
      </section>
    </div>
  );
};

export default orgteam;
