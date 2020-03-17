import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Precautions = () => {
  const { removeFilter } = useContext(GlobalContext);

  useEffect(() => {
    removeFilter();
  }, []);

  return (
    <article className="precaution">
      <div className="container">
        <h2 className="heading" style={{ marginBottom: "2rem" }}>
          <i className="fas fa-user-shield"></i> Precautions:
        </h2>

        <section className="precaution__section">
          <h3 className="precaution__heading">1- Wash your hands frequently</h3>
          <p className="precaution__paragraph">
            Regularly and thoroughly clean your hands with an alcohol-based hand
            rub or wash them with soap and water.
          </p>

          <p className="precaution__paragraph">
            <span>Why?</span> Washing your hands with soap and water or using
            alcohol-based hand rub kills viruses that may be on your hands.
          </p>
        </section>

        <section className="precaution__section">
          <h3 className="precaution__heading">2- Maintain social distancing</h3>
          <p className="precaution__paragraph">
            Maintain at least 1 metre (3 feet) distance between yourself and
            anyone who is coughing or sneezing.
          </p>

          <p className="precaution__paragraph">
            <span>Why?</span> When someone coughs or sneezes they spray small
            liquid droplets from their nose or mouth which may contain virus. If
            you are too close, you can breathe in the droplets, including the
            COVID-19 virus if the person coughing has the disease.
          </p>
        </section>

        <section className="precaution__section">
          <h3 className="precaution__heading">
            3- Avoid touching eyes, nose and mouth
          </h3>
          <p className="precaution__paragraph">
            <span>Why?</span> Hands touch many surfaces and can pick up viruses.
            Once contaminated, hands can transfer the virus to your eyes, nose
            or mouth. From there, the virus can enter your body and can make you
            sick.
          </p>
        </section>

        <section className="precaution__section">
          <h3 className="precaution__heading">
            4- Practice respiratory hygiene
          </h3>
          <p className="precaution__paragraph">
            Make sure you, and the people around you, follow good respiratory
            hygiene. This means covering your mouth and nose with your bent
            elbow or tissue when you cough or sneeze. Then dispose of the used
            tissue immediately.
          </p>

          <p className="precaution__paragraph">
            <span>Why?</span> Droplets spread virus. By following good
            respiratory hygiene you protect the people around you from viruses
            such as cold, flu and COVID-19.
          </p>
        </section>

        <section className="precaution__section">
          <h3 className="precaution__heading">
            5- If you have fever, cough and difficulty breathing, seek medical
            care early
          </h3>
          <p className="precaution__paragraph">
            Stay home if you feel unwell. If you have a fever, cough and
            difficulty breathing, seek medical attention and call in advance.
            Follow the directions of your local health authority.
          </p>

          <p className="precaution__paragraph">
            <span>Why?</span> National and local authorities will have the most
            up to date information on the situation in your area. Calling in
            advance will allow your health care provider to quickly direct you
            to the right health facility. This will also protect you and help
            prevent spread of viruses and other infections.
          </p>
        </section>

        <section className="precaution__section">
          <h3 className="precaution__heading">
            6- Stay informed and follow advice given by your healthcare provider
          </h3>
          <p className="precaution__paragraph">
            Stay informed on the latest developments about COVID-19. Follow
            advice given by your healthcare provider, your national and local
            public health authority or your employer on how to protect yourself
            and others from COVID-19.
          </p>

          <p className="precaution__paragraph">
            <span>Why?</span> National and local authorities will have the most
            up to date information on whether COVID-19 is spreading in your
            area. They are best placed to advise on what people in your area
            should be doing to protect themselves.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Precautions;
