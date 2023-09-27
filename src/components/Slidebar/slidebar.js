import "./style.css";

export const Slidebar = ({ ...props }) => {
  return (
    <div className="sidebardefault">
      <img className="logo-icon" alt="" src="icon/logo.svg" />
      <div className="list">
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Итоги</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/chart-timeline-variant.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Заказы</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/orders-24px.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Сообщения</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/mail_outline-24px.svg"
          />
        </div>
        <div className="menu-item2">
          <div className="current4" />
          <div className="current5" />
          <div className="bar_text">Звонки</div>
          <div className="new2" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/calls-24px.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Контрагенты</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/people-24px.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Документы</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/documents-24px.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Исполнители</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/perm_identity_black_24dp.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Отчеты</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/briefcase-outline.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">База знаний</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/local_library_black_24dp.svg"
          />
        </div>
        <div className="menu-item">
          <div className="current" />
          <div className="current1" />
          <div className="bar_text">Настройки</div>
          <div className="new" />
          <img
            className="icon-assessment-24px"
            alt=""
            src="icon/settings-24px.svg"
          />
        </div>
      </div>
      <div className="slidebar_button">
        <div className="button1">
          <div className="div21">Добавить заказ</div>
          <img className="vector-icon1" alt="" src="icon/plus.svg" />
        </div>
        <div className="buttonpaytext-and-icon-def">
          <div className="div22">Оплата</div>
          <img className="vector-icon2" alt="" src="icon/pay.svg" />
        </div>
      </div>
      <img
        className="mdi-keyboard-arrow-icon"
        alt=""
        src="/mdi-keyboard-arrow.svg"
      />
    </div>
  );
};
