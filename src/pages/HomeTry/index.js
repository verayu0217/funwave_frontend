import React from 'react';
// import './Custom.scss';
import greenTitle from '../../data/images/greenTitle.svg';

function HomeTry() {
  return (
    <>
      <div className="container">
        <img
          src={greenTitle}
          className="greenTitle"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
      </div>
      <div className="container-set container">
        {/* <!-- 文字 (Text)  --> */}
        <div>
          <h1 className="line-height-base">
            h1.大標題36px 2.25rem---大標題大標題大標題大標題大標題
          </h1>
          <h2 className="line-height-base">
            h2.中標題24px 1.5rem---中標題中標題中標題中標題中標題
          </h2>
          <h3 className="line-height-base">
            h3.小標題20px 1.25rem---小標題小標題小標題小標題小標題
          </h3>
          <h4>h4.英文草寫大標題80px 5rem</h4>
          <h5>
            h5.navbar字、footer字、卡片標題字16px
            1rem-----的說彼此開始，下一頁，一身每個商家有一獲取感到長大更加基礎有效平衡策劃，答案妹妹突出監督描述屏幕點此即使，一口氣利益地說春天都沒部落格看起來內心房間不少故事工具，話題穿著辦法角色簡體都不醫藥仔細階段正在擁有做出字元政治模式，機場則是影片加油類別新技術，醫。
          </h5>
          <h6>
            h6.圖片附字12px
            0.75rem---的說彼此開始，下一頁，一身每個商家有一獲取感到長大更加基礎有效平衡策劃，答案妹妹突出監督描述屏幕點此即使，一口氣利益地說春天都沒部落格看起來內心房間不少故事工具，話題穿著辦法角色簡體都不醫藥仔細階段正在擁有做出字元政治模式，機場則是影片加油類別新技術，醫。
          </h6>

          <p>
            {' '}
            p標籤 ---14px
            0.875rem--的說彼此開始，下一頁，一身每個商家有一獲取感到長大更加基礎有效平衡策劃，答案妹妹突出監督描述屏幕點此即使，一口氣利益地說春天都沒部落格看起來內心房間不少故事工具，話題穿著辦法角色簡體都不醫藥仔細階段正在擁有做出字元政治模式，機場則是影片加油類別新技術，醫。的說彼此開始，下一頁，一身每個商家有一獲取感到長大更加基礎有效平衡策劃，答案妹妹突出監督描述屏幕點此即使，一口氣利益地說春天都沒部落格看起來內心房間不少故事工具，話題穿著辦法角色簡體都不醫藥仔細階段正在擁有做出字元政治模式，機場則是影片加油類別新技術，醫。
          </p>
        </div>

        {/* <!-- 分頁 (Pagination) --> */}
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- 表單(Form) 概觀(Overview) --> */}
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* <!-- 表單(Form) 概觀(Overview) 禁用表格 --> */}
        <form>
          <fieldset disabled>
            <legend>Disabled fieldset example</legend>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Disabled input
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label for="disabledSelect" className="form-label">
                Disabled select menu
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label className="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>

        {/* <!-- 表單(Form) 表單控制(Form control)--> */}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        {/* <!-- 表單(Form) 選擇功能表(Select) --> */}
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* <!-- 元件(Component)) 手風琴 (Accordion) --> */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 元件(Component) 標籤 (Badge) --> */}
        <span className="badge bg-primary">Primary</span>
        <span className="badge bg-secondary">Secondary</span>
        <span className="badge bg-light text-dark">Light</span>
        <span className="badge bg-dark">Dark</span>

        {/* <!-- 元件(Component) 麵包屑 (Breadcrumb) --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>

        {/* <!-- 元件(Component) 按鈕 (Buttons) --> */}
        <div>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
        </div>

        {/* <!-- 元件(Component) 警報(Alerts) --> */}
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
        <div className="alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
        <div className="alert alert-dark" role="alert">
          A simple dark alert—check it out!
        </div>
      </div>
    </>
  );
}

export default HomeTry;
