import { FC } from "react";
import styled from "styled-components";

const ContactsBlock: FC = () => {
  return (
    <ContactsBlockStyle id="contacts">
      <div className="container">
        <div className="info">
          <h2>Контакты</h2>
          <h4>
            Главный офис
            <picture>
              <img src="./icons/question-mark.svg" alt="question mark" />
            </picture>
            <p>
              Адрес и телефон для корреспонденции, инвесторов. Вопросы о
              доставке, качестве обслуживания и товара просьба задавать в отдел
              продаж
            </p>
          </h4>
          <a href="tel:+78007898989">+7 800 789 89 89</a>
          <address>г. Санкт-Петербург, Комсомольская, 43 к1</address>
          <h4>отдел продаж</h4>
          <a href="tel:+78007898989">+7 800 789 89 89</a>
          <address>г. Санкт-Петербург, Комсомольская, 43 к1</address>
          <div className="links">
            <a href="https://vk.com/id145125745">
              <img src="./icons/vk.svg" alt="vk" />
            </a>
            <a href="https://www.instagram.com/veryveryhappyface/">
              <img src="./icons/inst.svg" alt="inst" />
            </a>
          </div>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/-/CDwHeYOc"
          width="60%"
          height="full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ContactsBlockStyle>
  );
};

const ContactsBlockStyle = styled.section`
  background: rgb(243, 247, 246);
  padding: 60px 0;
  margin-bottom: 60px;

  .container {
    display: flex;
  }

  .info {
    width: 40%;
  }

  h2 {
    color: rgb(68, 75, 88);
    font-family: "Intro";
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 60px;
  }

  h4 {
    color: var(--gray);
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 30px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;

    picture {
      box-shadow: 2px 4px 10px 0px rgba(0, 13, 84, 0.2);
      background: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-left: 10px;
    }

    p {
      display: none;
      position: absolute;
      top: -91px;
      right: -386px;
      color: rgb(68, 75, 88);
      font-size: 14px;
      line-height: 140%;
      border-radius: 4px;
      max-width: 426px;
      padding: 10px 20px;
      background: rgb(255, 255, 255);
      box-shadow: 4px 8px 20px 0px rgba(0, 13, 84, 0.2);
      text-transform: none;
      z-index: 2;

      &:before {
        content: "";
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        position: absolute;
        bottom: -5px;
        transform: rotate(45deg);
        z-index: -1;
      }
    }

    picture:hover + p {
      display: block;
    }
  }

  a {
    color: rgb(68, 75, 88);
    font-family: "Intro";
    font-size: 30px;
    line-height: 140%;
    margin-bottom: 10px;
  }

  address {
    color: rgb(68, 75, 88);
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 40px;
    font-style: normal;
  }

  .links {
    display: flex;
    gap: 20px;

    a {
      width: 44px;
      height: 44px;
      background: rgb(14, 90, 76);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgba(14, 90, 76, 0.9);
      }

      &:active {
        background: rgba(14, 90, 76, 0.8);
      }
    }
  }
`;

export default ContactsBlock;
