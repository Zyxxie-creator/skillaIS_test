/* Code generated with AutoHTML Plugin for Figma */
import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = "https://api.skilla.ru/mango/getList"; // Замените на адрес вашего API
const token = "testtoken"; // Замените на ваш токен

export const Content = ({ ...props }) => {
  const [apiData, setApiData] = useState([]);

  // Функция для отправки POST-запроса к API
  const fetchData = async () => {
    try {
      const response = await axios.post(
        apiUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = response.data.results;
      setApiData(responseData);
      console.log("Успешный ответ:", responseData);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function normalizePhoneNumber(phoneNumber) {
    const normalizedNumber = phoneNumber.replace(/\D/g, "");

    if (normalizedNumber.length === 11) {
      return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
        4,
        7
      )}-${normalizedNumber.slice(7, 9)}-${normalizedNumber.slice(9, 11)}`;
    } else {
      return "Некорректный номер телефона";
    }
  }
  function formatTime(time) {
    const timeNumber = parseInt(time, 10);

    if (isNaN(timeNumber)) {
      return "Некорректное время";
    }
    if (time === "0") {
      return "";
    }
    const hours = Math.floor(timeNumber / 60);
    const minutes = timeNumber % 60;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  }
  // const handleHover = async (id) => {
  //   try {
  //     const response = await axios.post(
  //       apiUrl,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //       {
  //         params: {
  //           record: apiData[id].record,
  //         },
  //       }
  //     );
  //     setRecord(response.data.record);
  //     console.log("все ок", record);
  //   } catch (error) {
  //     console.error("Ошибка при получении данных:", error);
  //   }
  // };
  return (
    <div className="calls">
      <div className="calls_head">
        <button className="balance" href="google.com">
          <p className="balance_block">
            <span className="balance_text">Баланс:</span>
            <span className="balance_count"> 272 ₽ </span>
          </p>
          <img className="balance_plus" alt="" src="icon/plus_blue.svg"></img>
        </button>
        <div className="date_pick">
          <img alt="" src="icon/keyboard_arrow_left.svg"></img>
          <div className="calendar_time">
            <img alt="" src="icon/calendar.svg"></img>
            <p>3 дня</p>
          </div>
          <img alt="" src="icon/keyboard_arrow_right.svg"></img>
        </div>
      </div>
      <div className="calls_nav">
        <div className="search">
          <div className="search_bock">
            <img alt="" src="icon/search.svg"></img>
            <div className="search_text">Поиск по звонкам</div>
          </div>
        </div>
        <div className="filter">
          <div className="view">
            <div className="text-wrapper">Все типы</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
          <div className="view">
            <div className="text-wrapper">Все сотрудники</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
          <div className="view">
            <div className="text-wrapper">Все звонки</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
          <div className="view">
            <div className="text-wrapper">Все источники</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
          <div className="view">
            <div className="text-wrapper">Все оценки</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
          <div className="view">
            <div className="text-wrapper">Все ошибки</div>
            <img className="dropdown" alt="Dropdown" src="icon/dropdown.svg" />
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table_header">
          <div className="table_type">Тип</div>
          <div className="table_time">Время</div>
          <div className="table_source">Сотрудник</div>
          <div className="table_appraisal">Звонок</div>
          <div className="table_duration">Источник</div>
          <div className="table_call">Оценка</div>
          <div className="table_employee">Длительность</div>
        </div>
        {Object.keys(apiData).map((key) => (
          <div
            className="row"
            key={apiData[key].id}
          >
            <div className="border"></div>
            <div className="user">
              <div className="call_icon" id="call_img">
                {apiData[key].in_out === 1 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
                      fill="#005FF8"
                    />
                  </svg>
                ) : apiData[key].in_out === 0 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z"
                      fill="#28A879"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
                      fill="#EA1A4F"
                    />
                  </svg>
                )}
              </div>
              <div className="time_call">
                {apiData[key].date.substr(11, 5) || "дата"}
              </div>
              <div className="avatar">
                <img
                  src={apiData[key].person_avatar}
                  height={32}
                  width={32}
                  className="avatar_img"
                  alt=""
                ></img>
              </div>
              <div className="phone">
                <div className="phone_fist">
                  {apiData[key].partner_data.name}
                </div>
                <div className="phone_secondary">
                  {normalizePhoneNumber(apiData[key].partner_data.phone)}
                </div>
              </div>
              <div className="source">{apiData[key].source}</div>
              <div className="appraisal">{apiData[key].errors}</div>
              <div className="duration">
                {apiData[key].time === 0 ? "" : formatTime(apiData[key].time)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
