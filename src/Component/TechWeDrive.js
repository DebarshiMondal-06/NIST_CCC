import React from 'react'
import { tect_data } from './Data/techDrive'



const TechWeDrive = () => {
  return <section className="tech--drive--lists">
    {
      tect_data && tect_data.map((item, i) => {
        const { headTxt_bold, headTxt_normal, content, img } = item;

        return <div key={i} className="container tect--drive-div">
          <article className="">
            {
              (i % 2 === 0) ?
                <img className="tech--drive-img"
                  src={img} alt="" />
                : <>
                  <h1><b className="text--color">{headTxt_bold}</b> {headTxt_normal}</h1>
                  <br />
                  <p>{content}
                  </p>
                </>
            }
          </article>
          <article className="">
            {
              (i % 2 !== 0) ? <img className="tech--drive-img"
                src={img} alt=""
              /> : <>
                <h1><b className="text--color">{headTxt_bold}</b> {headTxt_normal}</h1>
                <br />
                <p>{content}
                </p>
              </>
            }
          </article>
        </div >
      })
    }
  </section >
}

export default TechWeDrive;
