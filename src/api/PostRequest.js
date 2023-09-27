import axios from 'axios';

const apiUrl = 'https://api.skilla.ru/mango/getList'; // Замените на адрес вашего API
const token = 'testtoken'; // Замените на ваш токен

// Функция для отправки POST-запроса с заголовком "Authorization"
const sendPostRequest = async () => {
  try {
    const response = await axios.post(apiUrl, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Успешный ответ:', response.data);
    return response.data.results;
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка:', error);
  }
};
export default sendPostRequest;