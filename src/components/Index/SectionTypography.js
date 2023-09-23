import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionTypography() {
  return (
    <>
      <div className="container justify-content-center">
        <div className="text-left">
          {" "}
          {/* Metni sola yapışık yapmak için 'text-left' sınıfını kullanıyoruz */}
          <blockquote className="blockquote">
            <p className="mb-0">
              <p className="text-left"> Hakkımızda - Lotus Organizasyon</p>

              Hoş Geldiniz! Lotus Organizasyon, 2022 yılında Kocaeli'nin güzel
              Darıca ilçesinde kurulmuş bir organizasyon şirketidir. Bizler,
              unutulmaz anılar yaratma misyonuyla çıktığımız bu yolculukta, özel
              etkinliklerinizi unutulmaz kılmak için buradayız. Her bir
              etkinliği bir sanat eseri olarak kabul ediyor ve sizin için en
              özel anları yaratmak için tutkulu bir şekilde çalışıyoruz.
              <p >Devamı için.....</p>
            
            </p>
            <br />
         
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;
