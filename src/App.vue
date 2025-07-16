<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

const link =
  "https://t.me/centrPopovy?text=Добрый%20день!%20Хочу%20присоединиться%20к%20летней%20группе!";
</script>

<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Поток спокойствия и&nbspэнергии</h1>
        <p class="hero-subtitle">
          Авторская летняя программа Светланы&nbspи&nbspДмитрия
        </p>
        <div class="image hero-image" />

        <div class="hero-info">
          <div class="hero-info-item">
            <strong>Старт</strong>
            <span>25 июля</span>
          </div>
          <div class="hero-info-item">
            <strong>Формат</strong>
            <span>Telegram-группа</span>
          </div>
          <div class="hero-info-item">
            <strong>Длительность</strong>
            <span>3-5 недель</span>
          </div>
        </div>

        <a href="#cta" class="cta-button">Присоединиться</a>
      </div>
    </div>
  </section>

  <!-- <section>
    <div class="container">
      <img src="/AAA08839.jpg" />
    </div>
  </section> -->

  <!-- About Section -->
  <section class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <h2>О программе</h2>
          <p>
            Уникальная авторская программа, основанная на системе 5×5×5×5×5:
            пять стадий развития, пять элементов, пять процессов, пять
            дыхательных практик и пять драгоценных камней.
          </p>
          <p>
            Через поток групповой энергии каждый участник решает свои
            индивидуальные задачи, получая расширение и гармонизацию на всех
            уровнях.
          </p>
        </div>

        <div class="for-who">
          <h3>Для кого программа</h3>
          <ul>
            <li>
              Если вы часто чувствуете усталость, напряжение, внутреннюю тревогу
            </li>
            <li>
              Хотите восстановить контакт с телом, успокоить ум, вернуть
              внутреннюю опору
            </li>
            <li>
              Нужно мягко, но эффективно пройти летний сезон с поддержкой и
              практиками
            </li>
          </ul>
        </div>

        <div class="about-text">
          <p>
            Сформировать внутреннюю устойчивость перед осенне-зимним периодом.
          </p>
        </div>

        <div class="for-who">
          <h3>Это фундамент для:</h3>
          <ul>
            <li>Адаптации к погодным изменениям</li>
            <li>Устойчивости к стрессам и нагрузкам</li>
            <li>Полноценного усвоения витаминов и микроэлементов.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Program Section -->
  <section class="program">
    <div class="container">
      <h2>Что входит в программу</h2>
      <div class="program-grid">
        <div v-motion-slide-visible-once-right class="program-card">
          <h3>21 медитация</h3>
          <p>Ежедневные медитации со Светланой для баланса и настроя</p>
        </div>

        <div v-motion-slide-visible-once-left class="program-card">
          <h3>5 стадий развития</h3>
          <p>Помогают раскрывать тело и душу через системный подход</p>
        </div>

        <div v-motion-slide-visible-once-right class="program-card">
          <h3>Дыхательные практики</h3>
          <p>Простые и мощные техники от Дмитрия для подключения тела</p>
        </div>

        <div v-motion-slide-visible-once-left class="program-card">
          <h3>5 процессов</h3>
          <p>Отпускание, принятие, позволение, творчество и расширение</p>
        </div>

        <div v-motion-slide-visible-once-right class="program-card">
          <h3>Работа с камнями</h3>
          <p>Подключение к драгоценным камням как символам устойчивости</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="process">
    <div class="container">
      <h2>5 ключевых направлений</h2>
      <div class="process-steps">
        <div v-motion-pop-visible-once class="process-step">
          <h4>Сексуальная энергия</h4>
          <p>
            Базовая энергия проявленности, пусковая для всех сфер реализации
          </p>
        </div>

        <div v-motion-pop-visible-once class="process-step">
          <h4>Продуктивность</h4>
          <p>Умение направлять и сублимировать энергию в результат</p>
        </div>

        <div v-motion-pop-visible-once class="process-step">
          <h4>Творческая осознанность</h4>
          <p>Трансляция энергии "Я" в процесс созидания</p>
        </div>

        <div v-motion-pop-visible-once class="process-step">
          <h4>Управляющие компетенции</h4>
          <p>Выстраивание стабильных процессов получения результата</p>
        </div>

        <div v-motion-pop-visible-once class="process-step">
          <h4>Внутренняя сила духа</h4>
          <p>Встраивание в целостную систему личности</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Mentors Section -->
  <section class="mentors">
    <div class="container">
      <h2>Ведущие программы</h2>
      <div class="mentors-grid">
        <div class="mentor-card">
          <div class="image mentors-image s" />
          <h3>Светлана Попова</h3>
          <p>
            Психиатр, кандидат медицинских наук, врач-гомеопат. Основательница
            медицинского центра САМАНА и клуба SAMANA. Проводит медитации и
            работает с энергетическими практиками.
          </p>
        </div>

        <div class="mentor-card">
          <div class="image mentors-image d" />
          <h3>Дмитрий Попов</h3>
          <p>
            Психиатр, врач-гомеопат. Основатель медицинского центра САМАНА и
            закрытого канала SAMANA. Специализируется на дыхательных практиках и
            работе с телом.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="results">
    <div class="container">
      <h2>Результаты программы</h2>
      <div class="results-grid">
        <div v-motion-pop-visible-once class="result-item">
          <h4>🧘&zwj;♀️ Внутреннее спокойствие</h4>
          <p>
            Глубокое расслабление и умиротворение, снижение внутреннего
            напряжения
          </p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>⚡ Прилив энергии</h4>
          <p>
            Повышение жизненной энергии и концентрации через дыхательные
            практики
          </p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>😴 Качественный сон</h4>
          <p>Улучшение качества сна, легкое засыпание, снижение тревожности</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🌱 Телесное восстановление</h4>
          <p>Глубинное восстановление связи с телом и его потребностями</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🎯 Ясность целей</h4>
          <p>Четкое понимание своих истинных желаний и направления развития</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>💎 Внутренняя устойчивость</h4>
          <p>Укрепление внутренней опоры через работу с символами камней</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🔥 Творческая энергия</h4>
          <p>Раскрытие творческого потенциала и способности к самовыражению</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🌊 Эмоциональная регуляция</h4>
          <p>Умение управлять эмоциями, принимать и отпускать переживания</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🧠 Ментальная ясность</h4>
          <p>
            Улучшение концентрации, снижение ментального шума и беспокойства
          </p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>💪 Личная сила</h4>
          <p>Укрепление веры в себя, развитие внутренней силы и уверенности</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🔄 Способность к изменениям</h4>
          <p>Готовность к трансформации, гибкость в принятии нового</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🌈 Расширение сознания</h4>
          <p>Новые горизонты восприятия себя и окружающего мира</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>❤️ Самопринятие</h4>
          <p>Глубокое принятие себя, проработка внутренних конфликтов</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🌸 Женская/мужская энергия</h4>
          <p>Гармонизация и раскрытие естественной сексуальной энергии</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🎭 Эмоциональная свобода</h4>
          <p>Освобождение от эмоциональных блоков и застарелых паттернов</p>
        </div>

        <div v-motion-pop-visible-once class="result-item">
          <h4>🚀 Мотивация к действию</h4>
          <p>Появление внутренней мотивации и готовности к реализации планов</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
  <section class="reviews">
    <div class="container">
      <h2>Отзывы участников</h2>
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :autoHeight="true"
        :zoom="true"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="[Zoom, Navigation, Pagination]"
        class="reviews-swiper"
      >
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="/review-1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="/review-2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="/review-3.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="/review-4.jpg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing" id="pricing">
    <div class="container">
      <h2>Стоимость участия</h2>
      <div class="price-card">
        <div class="price">30 000 ₽</div>
        <div class="price-description">
          Полная программа включает все практики, медитации, поддержку в группе
          и индивидуальное сопровождение
        </div>
        <p style="opacity: 0.8; margin-bottom: 30px">💳 Оплата по карте</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="cta" class="cta-section">
    <div class="container">
      <h2>Готовы начать путь к гармонии?</h2>
      <p>Присоединяйтесь к потоку спокойствия и энергии уже сейчас</p>
      <a :href="link" class="cta-button-white"> Написать администратору </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>© 2025 Медицинский центр САМАНА. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.hero {
  background: var(--gradient);
  color: white;
  padding: var(--area-top) 0 var(--section-padding);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.hero-image {
  background-image: url("/AAA08839.jpg");
  background-size: 240%;
  background-position: center -250px;
}

.hero h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
  font-weight: 300;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
}

.hero-subtitle {
  font-size: 1.1em;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
}

.hero-info-item {
  text-align: center;
}

.hero-info-item strong {
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(45deg, #c1a769, #e3dbc7);
  color: #2d4b4b;
  padding: 18px 40px;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2em;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(193, 167, 105, 0.3);
}

.about {
  padding: var(--section-padding) 0;
  background: #fff9eb;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.about-text h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #2d4b4b;
}

.about-text p {
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #2d4b4b;
}

.for-who {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.for-who h3 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #005e5d;
}

.for-who li {
  padding: 10px 0;
  border-bottom: 1px solid #ece5d5;
  color: #2d4b4b;
}

.for-who li::before {
  content: "🔸";
  margin-right: 10px;
}

.program {
  padding: var(--section-padding) 0;
  background: white;
}

.program h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.program-card {
  background: var(--gradient);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  transform: perspective(1000px) rotateY(0deg);
  transition: all 0.3s ease;
}

.program-card:hover {
  transform: perspective(1000px) rotateY(-5deg) translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.program-card h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.program-card p {
  font-size: 1.1em;
  opacity: 0.9;
}

.process {
  padding: var(--section-padding) 0;
  background: #cce1e2;
}

.process h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.process-steps {
  counter-reset: step-counter;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.process-step {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.process-step::before {
  content: counter(step-counter);
  counter-increment: step-counter;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #005e5d;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.process-step h4 {
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #2d4b4b;
}

.process-step p {
  font-size: 0.9em;
  color: #2d4b4b;
}

.mentors {
  padding: var(--section-padding) 0;
  background: white;
}

.mentors-image.s {
  background-size: 130%;
  background-position: -50px -130px;
  background-image: url("/AAA09490.jpg");
}
.mentors-image.d {
  background-size: 130%;
  background-position: -60px -90px;
  background-image: url("/AAA09723.jpg");
}

.mentors h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.mentors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.mentor-card {
  background: var(--gradient);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.mentor-card:hover {
  transform: translateY(-5px);
}

.mentor-card h3 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

.mentor-card p {
  font-size: 1.1em;
  opacity: 0.9;
  line-height: 1.6;
}

.results {
  padding: var(--section-padding) 0;
  background: #fff9eb;
}

.results h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.result-item {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.result-item:hover {
  transform: translateY(-5px);
}

.result-item h4 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #005e5d;
}

.result-item p {
  color: #2d4b4b;
}

.reviews {
  padding: var(--section-padding) 0;
  background: #cce1e2;
  text-align: center;
}

.reviews h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.reviews-swiper {
  border-radius: 20px;
}

.pricing {
  padding: var(--section-padding) 0;
  background: white;
  text-align: center;
}

.pricing h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #2d4b4b;
}

.price-card {
  background: var(--gradient);
  color: white;
  padding: 60px;
  border-radius: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 94, 93, 0.2);
}

.price {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
}

.price-description {
  font-size: 1.1em;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-section {
  padding: var(--section-padding) 0;
  background: var(--gradient);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
}

.cta-section p {
  font-size: 1.2em;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-button-white {
  display: inline-block;
  background: linear-gradient(45deg, #c1a769, #e3dbc7);
  color: #2d4b4b;
  padding: 18px 40px;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2em;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(193, 167, 105, 0.3);
}

.cta-button-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(193, 167, 105, 0.4);
}

.footer {
  background: #2d4b4b;
  color: white;
  padding: 40px 0 var(--area-bottom);
  text-align: center;
}

.footer p {
  opacity: 0.8;
}
</style>
