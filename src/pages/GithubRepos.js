import React from 'react'

function GithubRepos() {
  return (
    <div className='github'>
      <div className='allrepos'>
        <div className='repo'>
          <div className='innerRepo'>
            <h1> <a href='https://github.com/beyzarslann/open-ai'> open-ai </a> </h1>
            <p> Java, Spring Boot <br /> OPEN AI ile API entegrasyonu yapıldı </p>
          </div>
        </div>
        <div className='repo'>
          <div className='innerRepo'>
            <h1> <a href='https://github.com/beyzarslann/TheWeather'> TheWeather </a> </h1>
            <p> Html, Css, JavaScript <br /> Hava Durumu Uygulaması. Api entegrasyonu ile yapıldı.</p>
          </div>
        </div>
        <div className='repo'>
          <div className='innerRepo'>
            <h1> <a href='https://github.com/beyzarslann/Spring-CRUD-Example'> SpringBootCRUD  </a> </h1>
            <p> Java, Spring Boot <br /> Java Spring Boot ile oluşturulmuş CRUD projesi</p>
          </div>
        </div>
        <div className='repo'>
          <div className='innerRepo'>
          <h1> <a href='https://github.com/beyzarslann/AlmanUsuluProjesi'> AlmanUsuluProjesi </a> </h1>
            <p> Java, Spring Boot, Angular <br /> Kullanıcılardan isim ve harcama bilgilerini alıp ortalama ve toplam hesabı hesaplayıp kişi başına düşen hesabın dolar ve tl cinsinden hesaplamasını yapan bir uygulama. </p>
          </div>
        </div>
        <div className='repo'>
          <div className='innerRepo'>
          <h1> <a href='https://github.com/beyzarslann/my-website'> My-Website </a> </h1>
            <p> Html, Css, Javascript, React <br /> Kişisel Portfolyo Sitem </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubRepos