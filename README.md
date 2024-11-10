# Инструкция по запуску и сборке проекта  
- **`npm install`** — устанавливаем зависимости проекта.
- **`gulp`** — запускаем проект в режиме разработки.
- **`gulp docs`** — сохраняем документацию локально, чтобы проверить ее без деплоя.
- **`gulp build`** — продакшн-сборка проекта.  

1. **Верстка по макету:**

   + Используй дизайн тестового задания[https://www.figma.com/design/ruveX9IdUB6BWKT2kR2Crm/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0-1&t=HaqA82EWgUMHbe9p-1].
   - Постарайся максимально точно повторить внешний вид и поведение элементов согласно макету.

2. **Требования к коду:**

   + Используй семантически правильную разметку HTML.
   + Структурируй CSS(а желательно scss) для удобства поддержки и масштабирования.
   + Придерживайся методологии БЭМ.

3. **Логика работы таймера:**

   + При загрузке страницы таймер должен показывать актуальное начальное время, например, `22:36:10`.
   + С помощью JavaScript реализуй обратный отсчёт до `00:00:00`.
   + Когда таймер достигает нуля: Кнопка "Выбрать" становится неактивной (добавь атрибут `disabled`).

4. **Логика работы карточки:**
   + При нажатии на кнопку в консоли должно выводиться наименование тарифа.

5. **Адаптивность:**

   + Обеспечь корректное отображение на устройствах с шириной экрана от **320px до 2048px**.
   + Проверь верстку на разных устройствах и в разных браузерах.

6. **Сборка проекта:**

   + Используй свою собственную сборку проекта (например, Gulp, Webpack и т.д.).

7. **Доступность (Accessibility):**

   - Удели внимание доступности для разных пользователей:
     + Используй правильные семантические теги HTML и атрибуты ARIA.
     + Обеспечь возможность навигации и использования функционала с клавиатуры.
     + Убедись, что контент корректно воспринимается скринридерами для незрячих пользователей.

8. **Качество кода и оптимизация:**

   + Код должен быть валидным и проходить проверку без ошибок.
   + Постарайся достичь высоких показателей в Google Lighthouse по производительности, доступности и SEO  

## Как отправить работу

+ Размести свой проект на GitHub или GitLab и пришли нам ссылку.
+ В репозитории добавь файл README с инструкциями по запуску и сборке проекта.
