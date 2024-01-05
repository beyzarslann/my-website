import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';

function Hakkimda() {
  return (
    <div className='hakkimdaContainer'>
      <div className='hakkimdaElements'>
        <ol>
          <li>
            <SchoolIcon/>
            <h3> Üniversite 2019 - 2023 </h3>
            <p> Sivas Cumhuriyet Üniversitesi - Bilgisayar Mühendisliği <br /> Ortalama : 2.95 <br /> Mezuniyet Tarihi : 6 Ekim 2023</p>
          </li>
          <li>
            <SchoolIcon/>
            <h3> Üniversite 2023 - Devam Ediyor </h3>
            <p> İstanbul Üniversitesi <br /> Web Tasarımı ve Kodlama </p>
          </li>
          <li>
            <BusinessIcon/>
            <h3> Stajyer Mühendis </h3>
            <p> T.C. Cumhurbaşkanlığı İletişim Başkanlığı <br/> Bilgi İşlem Daire Başkanlığı <br /> 2022 Yaz Stajı  </p>
          </li>
          <li>
            <BusinessIcon/>
            <h3> Stajyer Mühendis </h3>
            <p> PTT A.Ş. <br/> Bilgi İşlem Daire Başkanlığı <br /> 2023 Yaz Stajı </p>
          </li>
        </ol>
      </div>
      <div className='sertifika'>
        <ol>
          <li>
            <BadgeIcon/>
            <h3> Sertifikalar </h3>
            <p>  - Java ile Oyun Programlama Hackhatonu - 2023  <br/>
            <a href="/images/hackhathon.jpeg" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

            - BTK Akademi - Versiyon Kontrolleri: Git ve GitHub Katılım Sertifikası - 2023  <br/>
            <a href="/images/git-github.jpg" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

                 - BTK Akademi - Angular ile Web Programlama Katılım Sertifikası - 2023  <br/>
            <a href="/images/angular.jpg" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

                 - Turkcell Geleceği Yazanlar - React 101 eğitimi başarı belgesi - 2023 <br/>
            <a href="/images/react101.jpg" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

                 - Kodluyoruz Hi-Kod Front End Atölyesi - 2023  <br/>
            <a href="/images/hikodsertifika.png" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

                 - Archi's Academy - Java Spring Boot Workshop - 2023 <br/>
            <a href="/images/java-springboot.jpg" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>

                 - Genç Mühendisler Topluluğu Katılım Belgesi - 2021 <br/>
            <a href="/images/sertifika.png" target="_blank">Sertifikayı Görmek İçin Tıklayın</a> <br/>
                
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Hakkimda