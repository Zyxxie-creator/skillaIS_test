import "./style.css";

export const Header = ({ ...props }) => {
  return (
    <div className="header">
      <p className="header___13">Среда, 13 окт </p>
      <div className="header__">
        <div className="header__2">
          <p className="header___20-30">
            <span>
              <span className="header-20-30-span">Новые звонки </span>
              <span className="header-20-30-span2">20 из 30 шт</span>
            </span>
          </p>
          <div className="header__bar"></div>
          <div className="header__bar2"></div>
        </div>
        <div className="header__3">
          <p className="header___40">
            <span>
              <span className="header-40-span">Качество разговоров </span>
              <span className="header-40-span2">40%</span>
            </span>
          </p>
          <div className="header__bar3"></div>
          <div className="header__bar4"></div>
        </div>
        <div className="header__4">
          <p className="header___67">
            <span>
              <span className="header-67-span">Конверсия в заказ </span>
              <span className="header-67-span2">67%</span>
            </span>
          </p>
          <div className="header__bar5"></div>
          <div className="header__bar6"></div>
        </div>
      </div>
      <div className="header__vector"></div>
      <svg
        className="header__basic-search"
        width="32"
        height="48"
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4351 26.0629H18.7124L18.4563 25.8159C19.3528 24.773 19.8925 23.4191 19.8925 21.9463C19.8925 18.6621 17.2304 16 13.9463 16C10.6621 16 8 18.6621 8 21.9463C8 25.2304 10.6621 27.8925 13.9463 27.8925C15.4191 27.8925 16.773 27.3528 17.8159 26.4563L18.0629 26.7124V27.4351L22.6369 32L24 30.6369L19.4351 26.0629ZM13.9463 26.0629C11.6684 26.0629 9.82962 24.2241 9.82962 21.9463C9.82962 19.6684 11.6684 17.8296 13.9463 17.8296C16.2241 17.8296 18.0629 19.6684 18.0629 21.9463C18.0629 24.2241 16.2241 26.0629 13.9463 26.0629Z"
          fill="#ADBFDF"
        />
      </svg>

      <p className="header__5">
        ИП Сидорова Александра Михайловна
        <svg
          className="header__keyboard-arrow-down-black-24-dp-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1811)">
            <path
              opacity="0.8"
              d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
              fill="#ADBFDF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1811">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </p>

      <div className="header__avatars">
        <div className="header__avatar">
          <div className="header__ellipse"></div>
          <img className="header__img" src="    /image/img.png" alt="" />
        </div>
        <svg
          className="header__keyboard-arrow-down-black-24-dp-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1808)">
            <path
              opacity="0.8"
              d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
              fill="#ADBFDF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1808">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
