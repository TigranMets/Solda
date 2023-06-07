import React from "react";

import "./vending.scss";

export const Vending = () => {
  const checkboxes = [
    { id: 1, label: "СМС" },
    { id: 2, label: "e-mail" },
    { id: 3, label: "Telegram" },
    { id: 4, label: "Обслуживание" },
    { id: 5, label: "Ошибки" },
    { id: 6, label: "Продажи" },
    { id: 7, label: "Продажи" },
    { id: 8, label: "Связь" },
    { id: 9, label: "О товарах" },
  ];

  return (
    <div className="container">
      <div className="addAutomatonBlock">
        <h2>Добавить автоматы</h2>
        <div className="formRow">
          <div className="input_label">
            <label htmlFor="name">Название:</label>
            <br />
            <input type="text" id="name" />
          </div>
          <div className="input_label">
            <label htmlFor="serialNumber">Серийный номер:</label>
            <br />
            <input type="text" id="serialNumber" />
          </div>
          <div className="input_label">
            <label htmlFor="location">Локация:</label>
            <br />
            <select
              style={{
                width: " 148px",
                height: "20px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
              }}
              id="performance"
            >
              {/* Вставьте опции для селектора производительности */}
            </select>
          </div>
          <div className="input_label">
            <label htmlFor="automatonType">Тип автомата:</label>
            <br />
            <select
              style={{
                width: " 148px",
                height: "20px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
              }}
              id="performance"
            >
              {/* Вставьте опции для селектора производительности */}
            </select>
          </div>
        </div>
        <div style={{ marginLeft: "51px", marginTop: "51px" }}>
          <label htmlFor="description">Описание:</label>
          <br />
          <input
            type="text"
            id="description"
            style={{
              width: "61%",
              height: "45.04px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div className="formRow">
          <div className="inputLabel">
            <label htmlFor="performance">Производительность:</label>
            <br />
            <select
              style={{
                width: " 348.76px",
                height: "30.03px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
              }}
              id="performance"
            >
              {/* Вставьте опции для селектора производительности */}
            </select>
          </div>
          <div className="inputLabel">
            <label htmlFor="model">Модель:</label>
            <br />
            <select
              style={{
                width: " 348.76px",
                height: "30.03px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
              }}
              id="model"
            >
              {/* Вставьте опции для селектора модели */}
            </select>
          </div>
          <div className="inputLabel">
            <label htmlFor="wiring">Эквайринг:</label>
            <br />
            <select
              style={{
                width: " 348.76px",
                height: "30.03px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
              }}
              id="wiring"
            >
              {/* Вставьте опции для селектора эквайринга */}
            </select>
          </div>
          <p>File Photo</p>
          <button>
            <span>Выберите файл</span>
          </button>
        </div>
        <div
          style={{ marginLeft: "51px", marginTop: "23px" }}
          className="inputLabel"
        >
          <label htmlFor="wiring">Устройство телеметрии</label>
          <br />
          <input type="text" id="name" />
        </div>
        <div className="block_password">
          <div className="inputLabel">
            <label htmlFor="location">ID СПБ</label>
            <br />
            <input type="text" id="location" />
          </div>
          <div className="inputLabel">
            <label htmlFor="location"> Пароль</label>
            <br />
            <input type="text" id="location" />
          </div>
        </div>
      </div>
      <div className="sms">
        <div>
          <label style={{ marginLeft: "51px" }} htmlFor="wiring">
            Кому отправлять уведомления:
          </label>
          <br />
          <select
            style={{
              marginLeft: "51px",
              width: " 756.41px",
              height: "30.03px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
            }}
            id="wiring"
          >
            {/* Вставьте опции для селектора эквайринга */}
          </select>
        </div>
        <div>
          <label style={{ marginLeft: "51px" }} htmlFor="wiring">
            e-mail
          </label>
          <br />
          <select
            style={{
              marginLeft: "51px",
              width: " 756.41px",
              height: "30.03px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 1.15482px rgba(0, 0, 0, 0.5)",
            }}
            id="wiring"
          >
            {/* Вставьте опции для селектора эквайринга */}
          </select>
        </div>
        <div
          className="checkboxs"
          style={{ display: "flex", columnGap: "386px", marginLeft: "51px" }}
        >
          <div>
            {checkboxes.slice(0, 3).map((checkbox) => (
              <div key={checkbox.id} style={{ marginBottom: "28px" }}>
                <input type="checkbox" id={`checkbox-${checkbox.id}`} />
                <label htmlFor={`checkbox-${checkbox.id}`}>
                  {checkbox.label}
                </label>
              </div>
            ))}
          </div>
          <div>
            {checkboxes.slice(3, 6).map((checkbox) => (
              <div key={checkbox.id} style={{ marginBottom: "28px" }}>
                <input type="checkbox" id={`checkbox-${checkbox.id}`} />
                <label htmlFor={`checkbox-${checkbox.id}`}>
                  {checkbox.label}
                </label>
              </div>
            ))}
          </div>
          <div>
            {checkboxes.slice(6, 9).map((checkbox) => (
              <div key={checkbox.id} style={{ marginBottom: "28px" }}>
                <input type="checkbox" id={`checkbox-${checkbox.id}`} />
                <label htmlFor={`checkbox-${checkbox.id}`}>
                  {checkbox.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <p className="payment_types">Типы платежей</p>
        <div className="payment">
          <input type="checkbox" />
          <p>Эквайринг</p>
          <input type="checkbox" /> <p>Оплата QR СБП</p>
          <input type="checkbox" />
          <p>Купюроприемник</p>
          <input type="checkbox" />
          <p>Монетоприемник</p> <input type="checkbox" />
          <p>Бесплатный режим </p>
        </div>
      </div>
      <div className="form" style={{ marginTop: "41px", marginLeft: "51px" }}>
        <div>
          <label htmlFor="login">Логин</label>
          <br />
          <input type="text" id="login" />
        </div>
        <div style={{ marginLeft: "400px", marginTop: "-55px" }}>
          <label htmlFor="password">Пароль</label>
          <br />
          <input type="password" id="password" />
        </div>
      </div>
      <button className="button_create">Создать</button>
    </div>
  );
};
