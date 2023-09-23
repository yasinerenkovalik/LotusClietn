import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


function WhatsUpp() {
  return (
    <div className="App">
      {/* Diğer bileşenler */}
      <FloatingWhatsApp
        phoneNumber="+90 552 685 81 41" // WhatsApp numarasını buraya girin
        accountName="WhatsApp Destek" // WhatsApp hesap adını buraya girin
     
        message="Merhaba, size nasıl yardımcı olabilirim?" // İlk mesajı buraya girin
        chatMessage="Merhaba Hoşgeldiniz" // WhatsApp düğmesinin üzerine geldiğinde görünen mesajı buraya girin
        darkMode={true} // Koyu tema kullanmak istiyorsanız true olarak ayarlayın
      />
    </div>
  );
}

export default WhatsUpp;
